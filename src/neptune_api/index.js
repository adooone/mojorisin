import axios from 'axios';

const NEPTUNE_DEV_HOST = 'http://localhost:8080';
// const NEPTUNE_PROD_HOST = 'https://neptunews.com';

const getUser = () => {
    return fetch(`${ NEPTUNE_DEV_HOST }/api/login?name=denis`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    })
        .then(response => response.json())
        .then(res => console.log(res));
};
const uploadPhoto = (data) => {
    // return fetch(`${ NEPTUNE_DEV_HOST }/api/photo/upload`, {
    //     headers: {
    //         // 'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
    //         'Content-Type': 'multipart/form-data',
    //     },
    //     method: 'POST',
    //     body: data,
    //     // body: JSON.stringify({ id: data.id, name: data.name, info: data.info }),
    // })
    axios.post(`${ NEPTUNE_DEV_HOST }/api/photo/upload`, data, { 'Content-Type': 'multipart/form-data' })
        .then(res => console.log(res));
};

const neptune = {
    getUser,
    uploadPhoto,
    //
};

export default neptune;
