/**
 * Utility to export the card deck as static HTML
 */

const fs = require("fs")
const path = require("path")
const { loadCardData } = require("../models/card-data")
const { renderTemplate } = require("../views/template-engine")
const { loadConfig } = require("../config")
const { logger } = require("./logger")

/**
 * Exports the card deck as a static HTML file
 */
function exportHtml() {
  try {
    const config = loadConfig()
    const cards = loadCardData()

    // Extract unique filter values
    const tasks = [...new Set(cards.map((card) => card.task))]
    const objectives = [...new Set(cards.map((card) => card.objective))]
    const projectObjectives = [...new Set(cards.map((card) => card.projectObjective))]
    const evaluations = [...new Set(cards.map((card) => card.evaluation))]
    const domains = [...new Set(cards.flatMap((card) => card.domain))]

    // Render the page
    const html = renderTemplate("card-deck", {
      title: config.app.title,
      cards,
      totalCards: cards.length,
      filteredCount: cards.length,
      filters: {
        tasks,
        objectives,
        projectObjectives,
        evaluations,
        domains,
      },
      activeFilters: {},
      isStatic: true,
    })

    // Create output directory if it doesn't exist
    const outputDir = path.join(__dirname, "../../output")
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true })
    }

    // Write HTML to file
    const outputPath = path.join(outputDir, "card-deck.html")
    fs.writeFileSync(outputPath, html)

    logger.info(`Exported card deck to ${outputPath}`)
    console.log(`Exported card deck to ${outputPath}`)
  } catch (error) {
    logger.error(`Error exporting HTML: ${error.message}`)
    console.error(`Error exporting HTML: ${error.message}`)
  }
}

// Run export if this file is executed directly
if (require.main === module) {
  exportHtml()
}

module.exports = {
  exportHtml,
}
