import axios from 'axios';

const NEPTUNE_DEV_HOST = 'http://localhost:8080';
// const NEPTUNE_PROD_HOST = 'https://neptunews.com';

const getUser = () => {
    return fetch(`${ NEPTUNE_DEV_HOST }/api/login?name=denis`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    })
        .then(response => response.json());
};
const createAlbum = (name) => {
    return axios.get(`${ NEPTUNE_DEV_HOST }/api/create_album`, { params: { name } });
};
const getPhotos = (album) => {
    return axios.get(`${ NEPTUNE_DEV_HOST }/api/photo/getPhotos`, { params: { album } });
};
const uploadPhoto = (data) => {
    return axios.post(`${ NEPTUNE_DEV_HOST }/api/photo/upload`, data, { 'Content-Type': 'multipart/form-data' });
};

const neptune = {
    getUser,
    createAlbum,
    getPhotos,
    uploadPhoto,
    //
};

export default neptune;
