/**
 * Simple Node.js HTTP server to serve the static card deck
 */

const http = require("http")
const fs = require("fs")
const path = require("path")

// Mock data structure (replace with actual data import in production)
const cardData = [
  {
    id: 1,
    ID: "KPI-AS-001",
    title: "Ability to anticipate",
    task: "Social-technical (Task 4.3)",
    objective: "Human user experience",
    projectObjective: "O3",
    domain: ["Railway", "Power Grid", "ATM"],
    description: "This KPI represents self-reported...",
    objectiveDescription: "This KPI contributes to evaluating...",
    formula: "As operationalized by the questionnaire...",
    unit: "Ordinal data response on a Likert scale...",
    evaluation: "special evaluation setup",
  },
  // Additional cards would be here
]

// Helper functions
function renderDomainBadge(domain) {
  return `<span style="display: inline-block; font-size: 0.75rem; padding: 0.1rem 0.5rem; background-color: #f3f4f6; color: #374151; border-radius: 9999px; border: 1px solid #e5e7eb; text-transform: capitalize; margin: 0.125rem;">${domain}</span>`
}

function renderMetadataBadge(content) {
  return `<span style="display: inline-block; font-size: 0.75rem; padding: 0.25rem 0.75rem; background-color: #dbeafe; color: #1e40af; border-radius: 9999px; text-transform: capitalize; margin: 0.25rem 0.25rem 0.25rem 0;">${content}</span>`
}

function renderCard(card) {
  return `
    <div style="border: 1px solid #e5e7eb; border-radius: 0.5rem; box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); background-color: white; display: flex; flex-direction: column; height: 100%;">
      <div style="padding: 1rem; border-bottom: 1px solid #e5e7eb;">
        <div style="display: flex; justify-content: space-between; align-items: flex-start;">
          <h3 style="font-size: 1.125rem; font-weight: 600; margin: 0;">${card.title}</h3>
          <span style="display: inline-block; padding: 0.25rem 0.5rem; font-size: 0.75rem; font-family: monospace; background-color: #f3f4f6; color: #374151; border-radius: 0.25rem; border: 1px solid #e5e7eb;">${card.ID}</span>
        </div>
        
        <div style="display: flex; flex-wrap: wrap; gap: 0.25rem; margin-top: 0.5rem; margin-bottom: 0.5rem;">
          ${card.domain.map((dom) => renderDomainBadge(dom)).join("")}
        </div>
        
        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 0.25rem;">
          ${renderMetadataBadge(card.task)}
          ${renderMetadataBadge(card.objective)}
          ${renderMetadataBadge(card.projectObjective)}
          ${renderMetadataBadge(card.evaluation)}
        </div>
      </div>
      
      <div style="padding: 1rem; display: flex; flex-direction: column; gap: 1rem; flex-grow: 1;">
        <div>
          <h4 style="font-size: 0.875rem; font-weight: 500; margin-bottom: 0.25rem;">Description:</h4>
          <p style="font-size: 0.875rem; color: #4b5563; margin: 0;">${card.description}</p>
        </div>
        
        <div>
          <h4 style="font-size: 0.875rem; font-weight: 500; margin-bottom: 0.25rem;">Objective Description:</h4>
          <p style="font-size: 0.875rem; color: #4b5563; margin: 0;">${card.objectiveDescription}</p>
        </div>
        
        <div>
          <h4 style="font-size: 0.875rem; font-weight: 500; margin-bottom: 0.25rem;">Formula:</h4>
          <p style="font-size: 0.875rem; color: #4b5563; margin: 0;">${card.formula}</p>
        </div>
        
        <div>
          <h4 style="font-size: 0.875rem; font-weight: 500; margin-bottom: 0.25rem;">Unit:</h4>
          <p style="font-size: 0.875rem; color: #4b5563; margin: 0;">${card.unit}</p>
        </div>
      </div>
    </div>
  `
}

function renderFullPage(cards) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>AI4REALNET evaluation protocols</title>
      <style>
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
            Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          line-height: 1.5;
          color: #111827;
          background-color: #f9fafb;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2.5rem 1rem;
        }
        h1 {
          text-align: center;
          font-size: 1.875rem;
          font-weight: 700;
          margin-bottom: 2rem;
        }
        .card-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 1.5rem;
          margin-top: 2rem;
        }
        
        /* Basic responsiveness */
        @media (min-width: 768px) {
          .card-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1024px) {
          .card-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>AI4REALNET evaluation protocols</h1>
        <p style="text-align: center; color: #6b7280; margin-bottom: 2rem;">Showing ${cards.length} cards</p>
        <div class="card-grid">
          ${cards.map((card) => renderCard(card)).join("")}
        </div>
      </div>
    </body>
    </html>
  `
}

// Create and start the server
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html")
  res.statusCode = 200

  const html = renderFullPage(cardData)
  res.end(html)
})

const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`)
})
