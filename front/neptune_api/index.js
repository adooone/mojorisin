/* eslint-disable no-unused-vars */
import axios from 'axios';

console.log(process.env.NODE_ENV);
const NEPTUNE_DEV_HOST = 'http://localhost:8080';
// const NEPTUNE_PROD_HOST = 'https://neptunews.com';
const NEPTUNE_PROD_HOST = '';
const NEPTUNE_HOST = process.env.NODE_ENV === 'DEVELOPMENT' ? NEPTUNE_DEV_HOST : NEPTUNE_PROD_HOST;

const getUser = () => {
    return fetch(`${ NEPTUNE_DEV_HOST }/api/login?name=denis`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    })
        .then(response => response.json());
};
const login = (name, password) => {
    return axios.get(`${ NEPTUNE_HOST }/api/login`, { params: { name, password } });
};
const createAlbum = (name) => {
    return axios.get(`${ NEPTUNE_HOST }/api/create_album`, { params: { name } });
};
const getPhotos = (album) => {
    return axios.get(`${ NEPTUNE_HOST }/api/photo/getPhotos`, { params: { album } });
};
const uploadPhoto = (data) => {
    return axios.post(`${ NEPTUNE_HOST }/api/photo/upload`, data, { 'Content-Type': 'multipart/form-data' });
};
const deletePhoto = (data) => {
    console.log(data.id);
    console.log(data.album);
    const { id, album, filename } = data;
    return axios.get(`${ NEPTUNE_HOST }/api/photo/delete`, { params: { id, album, filename } });
};

const neptune = {
    getUser,
    login,
    createAlbum,
    getPhotos,
    uploadPhoto,
    deletePhoto,
    //
};

export default neptune;
