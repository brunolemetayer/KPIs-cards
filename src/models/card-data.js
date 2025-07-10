/**
 * Data model for card data
 */

const fs = require("fs")
const path = require("path")
const { loadConfig } = require("../config")
const { logger } = require("../utils/logger")

// In-memory cache for card data
let cardDataCache = null

/**
 * Loads card data from the data file
 */
function loadCardData() {
  // Return cached data if available
  if (cardDataCache) {
    return cardDataCache
  }

  try {
    const config = loadConfig()
    const dataPath = path.join(config.paths.data, "card-data.json")

    // Check if file exists
    if (!fs.existsSync(dataPath)) {
      logger.warn(`Data file not found: ${dataPath}`)
      return []
    }

    // Read and parse data
    const rawData = fs.readFileSync(dataPath, "utf8")
    cardDataCache = JSON.parse(rawData)

    logger.info(`Loaded ${cardDataCache.length} cards from data file`)
    return cardDataCache
  } catch (error) {
    logger.error(`Error loading card data: ${error.message}`)
    return []
  }
}

/**
 * Resets the card data cache
 */
function resetCardDataCache() {
  cardDataCache = null
  logger.debug("Card data cache reset")
}

module.exports = {
  loadCardData,
  resetCardDataCache,
}
