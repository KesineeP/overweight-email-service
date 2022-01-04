const pool = require("../db");

module.exports = function addUserEmailToEmailList(email) {
  return pool.query(
    `INSERT INTO "email-service".email_list (email) VALUES ($1)`,
    [email]
  );
};
