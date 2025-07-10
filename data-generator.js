/**
 * Node.js script to generate a data.js file from JSON data
 */

// Sample data - replace with actual data loading logic as needed
const fs = require("fs")

// Load data from JSON file
function loadDataFromJSON(filePath) {
  try {
    const jsonData = fs.readFileSync(filePath, "utf8")
    return JSON.parse(jsonData)
  } catch (error) {
    console.error("Error loading JSON data:", error)
    return []
  }
}

// Generate data.js file
function generateDataFile(data, outputPath) {
  const fileContent = `
// Generated card data
const cardData = ${JSON.stringify(data, null, 2)};

module.exports = { cardData };
`

  try {
    fs.writeFileSync(outputPath, fileContent)
    console.log(`Data file successfully written to ${outputPath}`)
  } catch (error) {
    console.error("Error writing data file:", error)
  }
}

// Example usage
const jsonData = loadDataFromJSON("./card-data.json")
generateDataFile(jsonData, "./data.js")
