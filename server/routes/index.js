const express = require('express');
const path = require('path');
const multer = require('multer');
const { Storage } = require('@google-cloud/storage');

// const loginRequest = require('./login');
const knex = require('./neptunedb');

const router = express.Router();
// const upload = multer({ dest: 'dist/media/' });

const storage = new Storage();
const bucket = storage.bucket(process.env.GCLOUD_STORAGE_BUCKET);

const upload = multer({ storage: multer.memoryStorage() }).single('image');

router.get('/api/login', (req, res) => {
    knex('users')
        .where('name', req.query.name)
        .select('password')
        .map(row => row.password)
        .then(result => {
            const pass = result[0];
            return { status: 200, admin: pass === req.query.password };
        })
        .then(result => {
            res
                .status(result.status)
                .send({ admin: result.admin, message: 'User Info' });
        });
});
router.get('/api/photo/getPhotos', (req, res) => {
    const table = req.query.album;
    console.log(table);
    knex(table)
        .select()
        .catch(err => res.status(401).send({ msg: err }))
        .then(result => {
            res.status(200)
                .send({
                    msg: 'Success',
                    photos: result,
                });
        });
});
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

module.exports = router;
