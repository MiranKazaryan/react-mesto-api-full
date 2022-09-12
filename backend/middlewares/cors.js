const options = {
  origin: [
    'http://localhost:3000',
    'https://mrnkzrn.nomoredomains.sbs',
    'https://mirankazaryan.github.io',
  ],
  methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
  preflightContinue: false,
  optionsSuccessStatus: 204,
  allowedHeaders: ['Content-Type', 'origin', 'Authorization'],
  credentials: true,
};

module.exports = options;