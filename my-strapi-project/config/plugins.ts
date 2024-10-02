module.exports = ({ env }) => ({
    email: {
        provider: 'nodemailer',
        providerOptions: {
          host: 'smtp.gmail.com',
          port: 587,
          auth: {
            user: env('SMTP_USER'),
            pass: env('SMTP_PASSWORD'),
          },
        },
        settings: {
          defaultFrom: 'aditya.mahajan@firstsportz.com',
          defaultReplyTo: 'aditya.mahajan@firstsportz.com',
        },
    },
  });
  