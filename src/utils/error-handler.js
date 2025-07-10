/**
 * Error handling utilities
 */

const { logger } = require("./logger")
const { handleServerError } = require("../controllers/error-controller")

/**
 * Global error handler for HTTP requests
 */
function handleError(error, res, req) {
  logger.error(`Unhandled error: ${error.message}`)
  logger.error(error.stack)

  if (req) {
    handleServerError(req, res, error)
  } else {
    res.writeHead(500, { "Content-Type": "text/html" })
    res.end(`<h1>Server Error</h1><p>${error.message}</p>`)
  }
}

module.exports = {
  handleError,
}
