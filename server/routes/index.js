const express = require('express');
const path = require('path');
const multer = require('multer');
const { Storage } = require('@google-cloud/storage');
const knex = require('./neptunedb');
// eslint-disable-next-line import/order
const bookshelf = require('bookshelf')(knex);

const router = express.Router();
// const upload = multer({ dest: 'dist/media/' });

const storage = new Storage();
const bucket = storage.bucket(process.env.GCLOUD_STORAGE_BUCKET);

const upload = multer({ storage: multer.memoryStorage() }).single('image');

const Users = bookshelf.Model.extend({
    tableName: 'users',
    //
});

//
// LOGIN
//
router.get('/api/login', (req, res) => {
    Users
        .where({ name: req.query.name })
        .fetch()
        .then(model => {
            if (model) {
                const passwordFromDB = model.get('password');
                const admin = !!model.get('isAdmin');
                const logged = passwordFromDB === req.query.password;
                if (logged) {
                    res
                        .status(200)
                        .send({ logged, admin, message: 'Logged in' });
                } else res.status(201).send({ logged: false });
            } else res.status(401).send({ msg: 'No such user' });
        });
});
//
// GET PHOTOS
//
router.get('/api/photo/getPhotos', (req, res) => {
    const tableName = req.query.album;
    if (tableName) {
        const model = bookshelf.Model.extend({ tableName });
        model
            .collection()
            .fetch()
            .then(album => {
                res
                    .status(200)
                    .set({ 'Cahce-Control': 'public, max-age=31536000' })
                    .send({ msg: 'success', photos: album.toJSON() });
            })
            .catch(error => res.status(401).send({ msg: error }));
    } else res.status(404).send({ msg: 'empty album name value' });
});
//
// GET COVERS
//
router.get('/api/photo/getCovers', (req, res) => {
    const covers = bookshelf.Model.extend({ tableName: 'covers' });
    covers
        .collection()
        .fetch()
        .then(photos => {
            res
                .status(200)
                .send({ msg: 'success', covers: photos.toJSON() });
        })
        .catch(error => res.status(404).send({ msg: error }));
});
//
// UPLOAD PHOTOS
//
router.post('/api/photo/upload', (req, res, next) => {
    upload(req, res, err => {
        if (err) res.status(401).send({ msg: err });
        else {
            const { name, info, db } = req.body;
            const blob = bucket.file(req.file.originalname);
            const blobStream = blob.createWriteStream({ resumable: false });

            blobStream.on('error', error => next(error));
            blobStream.on('finish', () => {
                const publicUrl = `https://storage.googleapis.com/${ bucket.name }/${ blob.name }`;
                knex(db)
                    .insert({ name, info, src: publicUrl, filename: req.file.originalname })
                    .catch(error => { if (error) res.status(401).send({ msg: error }); })
                    .then(() => {
                        res
                            .status(200)
                            .send({ msg: 'Success', url: publicUrl });
                    });
            });
            blobStream.end(req.file.buffer);
        }
    });
});
router.get('/api/photo/delete', (req, res) => {
    const { id, album, filename } = req.query;
    knex(album)
        .where('id', id)
        .del()
        .then(() => {
            bucket.file(filename).delete();
            res
                .status(200)
                .send({ msg: 'Deleted' });
        });
});
router.get('/api/create_album', (req, res) => {
    const tableName = req.query.name;
    knex.schema.hasTable(tableName).then(exist => {
        if (!exist) {
            return knex
                .schema
                .createTable(tableName || 'users', table => {
                    table.increments('id').primary();
                    table.string('name', 100);
                    table.string('info', 100);
                    table.string('src', 100);
                    table.timestamp('timestamp');
                    // table.string('userIp');
                })
                .then(() => {
                    res
                        .status(200)
                        .send({ msg: 'Created' });
                    return knex.destroy();
                })
                .catch(err => {
                    console.error(err);
                    if (knex) {
                        knex.destroy();
                    }
                });
        }
        res
            .status(401)
            .send({ msg: 'already exist' });
        return null;
    });
});
router.get('/media/risin', (req, res) => {
    const { name } = req.query;
    res.sendFile(`/media/risin/${ name }`, { root: path.join(__dirname, '../../docs') });
});
router.get('/', (req, res) => {
    res.sendFile('index.html', { root: path.join(__dirname, '../../docs') });
});
// router.get('*', (req, res) => {
//     console.log('res');
//     res.sendFile('index.html', { root: path.join(__dirname, '../../docs') });
// });

module.exports = router;
