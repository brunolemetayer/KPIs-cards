/**
 * Main entry point for the Card Deck Node.js application
 */

const http = require("http")
const url = require("url")
const { loadConfig } = require("./config")
const { logger } = require("./utils/logger")
const router = require("./routes")
const { handleError } = require("./utils/error-handler")

// Load configuration
const config = loadConfig()
const PORT = process.env.PORT || config.server.port

// Create HTTP server
const server = http.createServer((req, res) => {
  try {
    // Parse URL
    const parsedUrl = url.parse(req.url, true)
    const path = parsedUrl.pathname
    const trimmedPath = path.replace(/^\/+|\/+$/g, "")
    const method = req.method.toLowerCase()
    const queryParams = parsedUrl.query

    // Log request
    logger.info(`Request received: ${method.toUpperCase()} ${path}`)

    // Route the request
    router(req, res, {
      path: trimmedPath,
      method,
      queryParams,
    })
  } catch (error) {
    handleError(error, res)
  }
})

// Start the server
server.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`)
  logger.info(`Open http://localhost:${PORT} in your browser`)
})

// Handle server errors
server.on("error", (error) => {
  logger.error(`Server error: ${error.message}`)
  process.exit(1)
})

// Handle process termination
process.on("SIGINT", () => {
  logger.info("Server shutting down...")
  server.close(() => {
    logger.info("Server terminated")
    process.exit(0)
  })
})
