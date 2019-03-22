// const knex = require('../neptunedb');

function login(a, b) {
    console.log(a);
    console.log(b);
    if (a === b) return { status: 200, resp: true };
    return { status: 400, resp: false };
}

module.exports = login;
