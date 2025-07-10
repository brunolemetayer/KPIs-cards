/**
 * Controllers for handling error responses
 */

const { renderTemplate } = require("../views/template-engine")
const { logger } = require("../utils/logger")

/**
 * Handles 404 Not Found responses
 */
function handleNotFound(req, res) {
  logger.warn(`404 Not Found: ${req.url}`)

  const html = renderTemplate("error", {
    title: "404 Not Found",
    message: "The page you requested could not be found.",
    statusCode: 404,
  })

  res.writeHead(404, { "Content-Type": "text/html" })
  res.end(html)
}

/**
 * Handles 500 Server Error responses
 */
function handleServerError(req, res, error) {
  logger.error(`500 Server Error: ${error.message}`)

  const html = renderTemplate("error", {
    title: "500 Server Error",
    message: "An internal server error occurred.",
    error: error.message,
    statusCode: 500,
  })

  res.writeHead(500, { "Content-Type": "text/html" })
  res.end(html)
}

module.exports = {
  handleNotFound,
  handleServerError,
}
