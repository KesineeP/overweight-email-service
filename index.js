const { Client } = require('pg');
const client = new Client({
  connectionString: process.env.DATABASE_URL || "postgres://sumkikvwhhnkux:42697980b117d381b05f7c51cbc1d4af80297c7b59fb4c3d8ab921ab27aaeb99@ec2-52-45-179-101.compute-1.amazonaws.com:5432/ddc5p4bghasptf",
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect();