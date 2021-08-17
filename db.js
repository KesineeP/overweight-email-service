const Pool = require('pg').Pool;
require('dotenv').config();

const localConfig = {
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    port: process.env.PG_PORT,
    ssl: {      /* <----- Add SSL option */
        require: true,
        rejectUnauthorized: false 
      }
}

const prodConfig = {
    connectionString: process.env.DATABASE_URL //heroku addons
}


const pool = new Pool(process.env.NODE_ENV === 'production' ? prodConfig : localConfig);
console.log('prod', prodConfig);
console.log('local', localConfig);
console.log('node env', process.env.NODE_ENV);
module.exports = pool;