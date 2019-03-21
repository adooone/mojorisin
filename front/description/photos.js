// const pathSessions = 'http://www.ivandov.com/wp-content/uploads/2016/07/engagement-session-raly-stoyan-02.jpg';
const pathObjects = 'https://storage.googleapis.com/neptunewa-bucket/IMG_20190204_113849.jpg';
// const pathAdvertising = 'https://www.vadimdaniel.com/wp-content/uploads/2017/05/top-quality-commercial-product-photography-in-montreal-toront.jpg';
// const path = 'https://www.wonderplugin.com/videos/demo-image0.jpg';
// const path = 'https://cdn.mos.cms.futurecdn.net/gvQ9NhQP8wbbM32jXy4V3j-320-80.jpg';

const photos = {
    albums: [
        {
            name: 'sessions',
            caption: 'Sessions',
            background: 'https://storage.cloud.google.com/neptunewa-bucket/%D0%BF%D1%82%D0%B8%D1%86%D0%B0%20%D0%BF%D1%83%D0%B3%D0%BE%D0%B2%D0%BA%D0%B0.png?_ga=2.149196786.-552152165.1549273173&_gac=1.254187002.1549886159.Cj0KCQiA14TjBRD_ARIsAOCmO9YfJVQQVzUP570CbRFZ6xaYAO27T-fbUQ17rIK1pBlu9y6xgLzpHu0aAkoREALw_wcB',
            routePath: '/test',
        },
        {
            name: 'objects',
            caption: 'Objects',
            background: pathObjects,
            routePath: '/test',
        },
        {
            name: 'advertising',
            caption: 'Advertising',
            background: pathObjects,
            routePath: '/test',
        },
    ],
};

export default photos;
