/**
 * Configuration management for the application
 */

const fs = require("fs")
const path = require("path")
const { logger } = require("./utils/logger")

// Default configuration
const defaultConfig = {
  server: {
    port: 3000,
    host: "localhost",
  },
  app: {
    title: "AI4REALNET evaluation protocols",
    itemsPerPage: 12,
  },
  paths: {
    data: path.join(__dirname, "../data"),
    views: path.join(__dirname, "views"),
    public: path.join(__dirname, "../public"),
  },
}

/**
 * Loads configuration from config.json if it exists, otherwise uses defaults
 */
function loadConfig() {
  try {
    const configPath = path.join(__dirname, "../config.json")

    if (fs.existsSync(configPath)) {
      const fileConfig = JSON.parse(fs.readFileSync(configPath, "utf8"))
      logger.info("Configuration loaded from config.json")
      return { ...defaultConfig, ...fileConfig }
    }
  } catch (error) {
    logger.warn(`Error loading config file: ${error.message}`)
    logger.warn("Using default configuration")
  }

  return defaultConfig
}

module.exports = {
  loadConfig,
}
