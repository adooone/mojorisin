export const randomText = (words, size) => {
    // const size = 1600;
    let index = 0;
    // const words = ['mojo', 'risin', 'photos', 'videos', 'production'];
    const res = [];
    while (index !== size) {
        res[index] = words[_.random(0, words.length - 1)];
        index++;
    }
    return _.map(res, word => {
        return `${ word } `;
    });
};
