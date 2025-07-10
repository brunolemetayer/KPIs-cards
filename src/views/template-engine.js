/**
 * Simple template engine for rendering HTML
 */

const fs = require("fs")
const path = require("path")
const { loadConfig } = require("../config")
const { logger } = require("../utils/logger")

// Template cache
const templateCache = {}

/**
 * Renders a template with the provided data
 */
function renderTemplate(templateName, data = {}) {
  try {
    const config = loadConfig()
    const templatePath = path.join(config.paths.views, `${templateName}.html`)

    // Check if template exists in cache
    if (!templateCache[templateName]) {
      // Check if file exists
      if (!fs.existsSync(templatePath)) {
        logger.warn(`Template not found: ${templatePath}`)
        return `<h1>Template Error</h1><p>Template "${templateName}" not found.</p>`
      }

      // Read template file
      templateCache[templateName] = fs.readFileSync(templatePath, "utf8")
      logger.debug(`Loaded template: ${templateName}`)
    }

    // Replace placeholders with data
    let html = templateCache[templateName]

    // Replace simple placeholders
    html = html.replace(/\{\{([^}]+)\}\}/g, (match, key) => {
      const trimmedKey = key.trim()
      return data[trimmedKey] !== undefined ? data[trimmedKey] : match
    })

    // Handle conditional blocks
    html = processConditionals(html, data)

    // Handle loops
    html = processLoops(html, data)

    return html
  } catch (error) {
    logger.error(`Template rendering error: ${error.message}`)
    return `<h1>Template Error</h1><p>${error.message}</p>`
  }
}

/**
 * Process conditional blocks in templates
 */
function processConditionals(html, data) {
  // Match {{#if condition}}...{{/if}} blocks
  const ifRegex = /\{\{#if\s+([^}]+)\}\}([\s\S]*?)\{\{\/if\}\}/g

  return html.replace(ifRegex, (match, condition, content) => {
    const trimmedCondition = condition.trim()
    const conditionValue = evaluateCondition(trimmedCondition, data)

    return conditionValue ? content : ""
  })
}

/**
 * Evaluate a condition expression
 */
function evaluateCondition(condition, data) {
  // Simple property access
  if (!condition.includes("==") && !condition.includes("!=")) {
    return !!data[condition]
  }

  // Equality check
  if (condition.includes("==")) {
    const [left, right] = condition.split("==").map((part) => part.trim())
    const leftValue = data[left] !== undefined ? data[left] : left
    const rightValue = data[right] !== undefined ? data[right] : right.replace(/['"]/g, "")
    return leftValue == rightValue
  }

  // Inequality check
  if (condition.includes("!=")) {
    const [left, right] = condition.split("!=").map((part) => part.trim())
    const leftValue = data[left] !== undefined ? data[left] : left
    const rightValue = data[right] !== undefined ? data[right] : right.replace(/['"]/g, "")
    return leftValue != rightValue
  }

  return false
}

/**
 * Process loop blocks in templates
 */
function processLoops(html, data) {
  // Match {{#each items}}...{{/each}} blocks
  const eachRegex = /\{\{#each\s+([^}]+)\}\}([\s\S]*?)\{\{\/each\}\}/g

  return html.replace(eachRegex, (match, itemsKey, content) => {
    const trimmedItemsKey = itemsKey.trim()
    const items = data[trimmedItemsKey]

    if (!Array.isArray(items)) {
      return ""
    }

    return items
      .map((item) => {
        // Replace item placeholders
        return content.replace(/\{\{([^}]+)\}\}/g, (match, key) => {
          const trimmedKey = key.trim()

          if (trimmedKey === "@index") {
            return items.indexOf(item)
          }

          if (trimmedKey === "@first") {
            return items.indexOf(item) === 0
          }

          if (trimmedKey === "@last") {
            return items.indexOf(item) === items.length - 1
          }

          return item[trimmedKey] !== undefined ? item[trimmedKey] : match
        })
      })
      .join("")
  })
}

module.exports = {
  renderTemplate,
}
