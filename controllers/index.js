const executeSQL = require('../models/sql');

// index:
module.exports = {
    'GET /': async (ctx, next) => {
        // console.log(JSON.stringify(await executeSQL('SELECT * FROM `users_login_info`;')));
        ctx.render('index.html', {
            title: 'Welcome'
        });
    }
};
