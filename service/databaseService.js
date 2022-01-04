const pool = require("../db");

exports.addUserEmailToEmailList = (email) => {
  return pool.query(
    `INSERT INTO "email-service".email_list (email) VALUES ($1)`,
    [email]
  );
};

exports.deleteUserEmailFromEmailList = (email) => {
  return pool.query(
    `DELETE
            FROM "email-service".email_list
            WHERE email = '${email}'
        `
  );
};
