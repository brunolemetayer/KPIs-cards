/**
 * Router for handling HTTP requests
 */

const { serveStatic } = require("../utils/static-server")
const { renderCardDeck } = require("../controllers/card-deck-controller")
const { handleNotFound } = require("../controllers/error-controller")
const { logger } = require("../utils/logger")

/**
 * Routes requests to appropriate handlers
 */
function router(req, res, { path, method, queryParams }) {
  // Log routing information
  logger.debug(`Routing: ${method} ${path}`)

  // Define routes
  if (method === "get") {
    // Home page - show card deck
    if (path === "" || path === "index.html") {
      return renderCardDeck(req, res, queryParams)
    }

    // Static files (CSS, JS, images)
    if (path.startsWith("public/")) {
      return serveStatic(req, res, path)
    }

    // API endpoints
    if (path === "api/cards") {
      return require("../controllers/api-controller").getCards(req, res, queryParams)
    }
  }

  // Handle 404 for undefined routes
  handleNotFound(req, res)
}

module.exports = router
