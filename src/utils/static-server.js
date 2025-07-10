/**
 * Static file server utility
 */

const fs = require("fs")
const path = require("path")
const { loadConfig } = require("../config")
const { logger } = require("./logger")

// MIME type mapping
const MIME_TYPES = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "application/javascript",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
}

/**
 * Serves static files
 */
function serveStatic(req, res, urlPath) {
  try {
    const config = loadConfig()

    // Remove 'public/' prefix from path
    const relativePath = urlPath.replace(/^public\//, "")
    const filePath = path.join(config.paths.public, relativePath)

    // Check if file exists
    if (!fs.existsSync(filePath)) {
      logger.warn(`Static file not found: ${filePath}`)
      res.writeHead(404, { "Content-Type": "text/plain" })
      res.end("File not found")
      return
    }

    // Get file extension and MIME type
    const ext = path.extname(filePath)
    const contentType = MIME_TYPES[ext] || "application/octet-stream"

    // Read and serve file
    const fileContent = fs.readFileSync(filePath)
    res.writeHead(200, { "Content-Type": contentType })
    res.end(fileContent)

    logger.debug(`Served static file: ${filePath}`)
  } catch (error) {
    logger.error(`Error serving static file: ${error.message}`)
    res.writeHead(500, { "Content-Type": "text/plain" })
    res.end("Internal server error")
  }
}

module.exports = {
  serveStatic,
}
