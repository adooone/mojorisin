const pathSessions = 'http://www.ivandov.com/wp-content/uploads/2016/07/engagement-session-raly-stoyan-02.jpg';
const pathObjects = 'https://images.unsplash.com/photo-1531335773500-23410807365a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80';
const pathAdvertising = 'https://www.vadimdaniel.com/wp-content/uploads/2017/05/top-quality-commercial-product-photography-in-montreal-toront.jpg';
// const path = 'https://www.wonderplugin.com/videos/demo-image0.jpg';
// const path = 'https://cdn.mos.cms.futurecdn.net/gvQ9NhQP8wbbM32jXy4V3j-320-80.jpg';

const photos = {
    albums: [
        {
            name: 'sessions',
            background: pathSessions,
            routePath: '/test',
        },
        {
            name: 'objects',
            background: pathObjects,
            routePath: '/test',
        },
        {
            name: 'advertising',
            background: pathAdvertising,
            routePath: '/test',
        },
    ],
};

export default photos;
