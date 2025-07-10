/**
 * Simple logging utility
 */

// Log levels
const LOG_LEVELS = {
  ERROR: 0,
  WARN: 1,
  INFO: 2,
  DEBUG: 3,
}

// Current log level (can be set via environment variable)
const currentLevel = process.env.LOG_LEVEL
  ? LOG_LEVELS[process.env.LOG_LEVEL.toUpperCase()] || LOG_LEVELS.INFO
  : LOG_LEVELS.INFO

// Format current timestamp
function getTimestamp() {
  return new Date().toISOString()
}

// Format log message
function formatMessage(level, message) {
  return `[${getTimestamp()}] [${level}] ${message}`
}

// Logger object
const logger = {
  error(message) {
    if (currentLevel >= LOG_LEVELS.ERROR) {
      console.error(formatMessage("ERROR", message))
    }
  },

  warn(message) {
    if (currentLevel >= LOG_LEVELS.WARN) {
      console.warn(formatMessage("WARN", message))
    }
  },

  info(message) {
    if (currentLevel >= LOG_LEVELS.INFO) {
      console.info(formatMessage("INFO", message))
    }
  },

  debug(message) {
    if (currentLevel >= LOG_LEVELS.DEBUG) {
      console.debug(formatMessage("DEBUG", message))
    }
  },
}

module.exports = {
  logger,
  LOG_LEVELS,
}
