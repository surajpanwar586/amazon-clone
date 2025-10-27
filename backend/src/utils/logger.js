const logger = {
  info: (...params) => {
    console.log('[INFO]', ...params);
  },
  warn: (...params) => {
    console.warn('[WARN]', ...params);
  },
  error: (...params) => {
    console.error('[ERROR]', ...params);
  },
  debug: (...params) => {
    // Debug logs are only shown in development mode
    if (process.env.NODE_ENV === 'development') {
      console.log('[DEBUG]', ...params);
    }
  },
};

module.exports = logger;