// const pathSessions = 'http://www.ivandov.com/wp-content/uploads/2016/07/engagement-session-raly-stoyan-02.jpg';
const pathObjects = 'https://storage.googleapis.com/neptunewa-bucket/IMG_20190220_233404.jpg';
// const pathAdvertising = 'https://www.vadimdaniel.com/wp-content/uploads/2017/05/top-quality-commercial-product-photography-in-montreal-toront.jpg';
// const path = 'https://www.wonderplugin.com/videos/demo-image0.jpg';
// const path = 'https://cdn.mos.cms.futurecdn.net/gvQ9NhQP8wbbM32jXy4V3j-320-80.jpg';

const photos = {
    albums: [
        {
            name: 'sessions',
            background: pathObjects,
            routePath: '/test',
        },
        {
            name: 'objects',
            background: pathObjects,
            routePath: '/test',
        },
        {
            name: 'advertising',
            background: pathObjects,
            routePath: '/test',
        },
    ],
};

export default photos;
