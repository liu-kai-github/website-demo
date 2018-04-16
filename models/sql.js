const mysql = require('mysql2/promise');

// 链接数据库
let connection;
(async () => {
    connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'users',
    });
})();

/**
 * @description 执行 SQL 语句
 * @param SQL 要执行的命令
 * @param variables 要填充的 SQL 命令中的变量
 * @returns {Promise<*>}
 */
async function executeSQL(SQL, variables = []) {
    // console.log('a%sc', 'b');
    const [rows, fields] = await connection.execute(SQL, variables);
    return rows;
}

// setInterval(() => {
//     (async function () {
//         console.time();
//         console.log(JSON.stringify(await main()));
//         console.timeEnd();
//         console.log('%%%%%%%%%%%%%%');
//     })();
// }, 3000);

module.exports = executeSQL;
