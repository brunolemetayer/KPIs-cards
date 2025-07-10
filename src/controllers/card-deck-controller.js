/**
 * Controller for rendering the card deck
 */

const { loadCardData } = require("../models/card-data")
const { renderTemplate } = require("../views/template-engine")
const { loadConfig } = require("../config")
const { logger } = require("../utils/logger")

/**
 * Renders the card deck with optional filtering
 */
function renderCardDeck(req, res, queryParams = {}) {
  try {
    const config = loadConfig()
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

    if (queryParams.task) {
      filteredCards = filteredCards.filter((card) => card.task === queryParams.task)
    }

    if (queryParams.objective) {
      filteredCards = filteredCards.filter((card) => card.objective === queryParams.objective)
    }

    if (queryParams.projectObjective) {
      filteredCards = filteredCards.filter((card) => card.projectObjective === queryParams.projectObjective)
    }

    if (queryParams.evaluation) {
      filteredCards = filteredCards.filter((card) => card.evaluation === queryParams.evaluation)
    }

    if (queryParams.domain) {
      filteredCards = filteredCards.filter((card) => card.domain.includes(queryParams.domain))
    }

    // Extract unique filter values for rendering filter options
    const tasks = [...new Set(cards.map((card) => card.task))]
    const objectives = [...new Set(cards.map((card) => card.objective))]
    const projectObjectives = [...new Set(cards.map((card) => card.projectObjective))]
    const evaluations = [...new Set(cards.map((card) => card.evaluation))]
    const domains = [...new Set(cards.flatMap((card) => card.domain))]

    // Render the page
    const html = renderTemplate("card-deck", {
      title: config.app.title,
      cards: filteredCards,
      totalCards: cards.length,
      filteredCount: filteredCards.length,
      filters: {
        tasks,
        objectives,
        projectObjectives,
        evaluations,
        domains,
      },
      activeFilters: queryParams,
    })

    res.writeHead(200, { "Content-Type": "text/html" })
    res.end(html)

    logger.info(`Rendered card deck with ${filteredCards.length} cards`)
  } catch (error) {
    logger.error(`Error rendering card deck: ${error.message}`)
    res.writeHead(500, { "Content-Type": "text/html" })
    res.end(`<h1>Server Error</h1><p>${error.message}</p>`)
  }
}

module.exports = {
  renderCardDeck,
}
