const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports = function sendWelcomeEmail(email, welcomeEmailTemplateId) {
  const msg = {
    to: email,
    from: "support@overweightfinancials.com",
    templateId: welcomeEmailTemplateId,
    dynamic_template_data: {
      user: {
        email: email,
      },
    },
  };
  sgMail
    .send(msg)
    .then((res) => console.log(`Email sent to.. ${email}`))
    .catch((error) => error.message);
};
