/**
 * Node.js script to export the card deck as a PDF
 * Note: This requires the 'puppeteer' package
 * You can install it with: npm install puppeteer
 */

// This is shown as a reference but requires the puppeteer dependency
// To use without dependencies, you would need to render to HTML and use
// an external tool to convert to PDF

const puppeteer = require("puppeteer")
const fs = require("fs")

// This would typically come from a data file
const cardData = [
  // Your card data here
]

// Helper functions for HTML rendering
function renderDomainBadge(domain) {
  return `<span style="display: inline-block; font-size: 0.75rem; padding: 0.1rem 0.5rem; background-color: #f3f4f6; color: #374151; border-radius: 9999px; border: 1px solid #e5e7eb; text-transform: capitalize; margin: 0.125rem;">${domain}</span>`
}

function renderMetadataBadge(content) {
  return `<span style="display: inline-block; font-size: 0.75rem; padding: 0.25rem 0.75rem; background-color: #dbeafe; color: #1e40af; border-radius: 9999px; text-transform: capitalize; margin: 0.25rem 0.25rem 0.25rem 0;">${content}</span>`
}

function renderCard(card) {
  // Card HTML here (same as in node-renderer.js)
}

function renderFullPage(cards) {
  // Full page HTML here (same as in node-renderer.js)
}

async function generatePDF() {
  const html = renderFullPage(cardData)

  // Save HTML to a temporary file
  fs.writeFileSync("temp.html", html)

  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(`file://${process.cwd()}/temp.html`, { waitUntil: "networkidle0" })

  // Generate PDF
  await page.pdf({ path: "card-deck.pdf", format: "A4" })

  // Clean up
  await browser.close()
  fs.unlinkSync("temp.html")

  console.log("PDF generated successfully: card-deck.pdf")
}

generatePDF().catch(console.error)
