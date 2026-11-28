module.exports = {
  PORT: 3000,
  JWT_SECRET: process.env.JWT_SECRET || 'lab5_secret_key',
  JWT_EXPIRES_IN: '1h',
};
