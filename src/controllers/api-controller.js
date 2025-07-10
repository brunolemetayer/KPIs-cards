/**
 * API controllers for JSON data endpoints
 */

const { loadCardData } = require("../models/card-data")
const { logger } = require("../utils/logger")

/**
 * Returns card data as JSON
 */
function getCards(req, res, queryParams = {}) {
  try {
    const cards = loadCardData()

    // Apply filters if provided in query parameters
    let filteredCards = [...cards]

    if (queryParams.search) {
      const searchTerm = queryParams.search.toLowerCase()
      filteredCards = filteredCards.filter(
        (card) =>
          card.title.toLowerCase().includes(searchTerm) ||
          card.ID.toLowerCase().includes(searchTerm) ||
          card.description.toLowerCase().includes(searchTerm),
      )
    }

    // Apply other filters (task, objective, etc.) as needed

    // Send JSON response
    res.writeHead(200, {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    })
    res.end(
      JSON.stringify({
        total: cards.length,
        filtered: filteredCards.length,
        cards: filteredCards,
      }),
    )

    logger.info(`API: Returned ${filteredCards.length} cards`)
  } catch (error) {
    logger.error(`API error: ${error.message}`)
    res.writeHead(500, { "Content-Type": "application/json" })
    res.end(JSON.stringify({ error: error.message }))
  }
}

module.exports = {
  getCards,
}
