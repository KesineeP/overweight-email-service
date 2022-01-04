const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports = function sendWelcomeEmail(email, welcomeTemplateId) {
  const msg = {
    to: email,
    from: "support@overweightfinancials.com",
    templateId: welcomeTemplateId,
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
