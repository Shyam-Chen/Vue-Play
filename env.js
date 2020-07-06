function Environments() {
  this.NODE_ENV = process.env.NODE_ENV || 'development';

  this.APP_NAME = process.env.APP_NAME || 'Oh My Vue';
  this.APP_DESCRIPTION =
    process.env.APP_DESCRIPTION ||
    'Starter templates for building full-featured Progressive Web Apps from Vue components.';

  this.HOST_NAME = process.env.HOST_NAME || '0.0.0.0';
  this.SITE_PORT = process.env.SITE_PORT || 8003;
  this.SITE_URL = process.env.SITE_URL || `http://${this.HOST_NAME}:${this.SITE_PORT}`;
  this.APP_BASE = process.env.APP_BASE || '/';

  this.API_URL = process.env.API_URL || `http://${this.HOST_NAME}:3000`;

  this.GOOGLE_ANALYTICS = process.env.GOOGLE_ANALYTICS || 'UA-XXXXXXXX-X';
  this.SENTRY_DSN = process.env.SENTRY_DSN || null;
}

module.exports = new Environments();
