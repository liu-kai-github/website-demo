// sign in:
const executeSQL = require('../models/sql');

module.exports = {
    'POST /signin': async (ctx, next) => {
        // SELECT * FROM `users_login_info` WHERE email = 'liukai@gmail.com' AND password = '123456';
        const
            email = ctx.request.body.email || '',
            password = ctx.request.body.password || '';
        const users = await executeSQL('SELECT * FROM `users_login_info` WHERE email = ? AND password = ?', [email, password]);

        if (users.length > 0) {
            // console.log('signin ok!');
            ctx.render('signin-ok.html', {
                title: 'Sign In OK',
                name: 'Mr Node'
            });
        } else {
            // console.log('signin failed!');
            ctx.render('signin-failed.html', {
                title: 'Sign In Failed'
            });
        }
    }
};
