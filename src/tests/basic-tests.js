/**
 * Basic tests for the application
 */

const assert = require("assert")
const { loadCardData } = require("../models/card-data")
const { renderTemplate } = require("../views/template-engine")
const { logger } = require("../utils/logger")

// Test results
const results = {
  passed: 0,
  failed: 0,
  total: 0,
}

/**
 * Run a test case
 */
function runTest(name, testFn) {
  results.total++

  try {
    testFn()
    console.log(`✅ PASS: ${name}`)
    results.passed++
  } catch (error) {
    console.error(`❌ FAIL: ${name}`)
    console.error(`   Error: ${error.message}`)
    results.failed++
  }
}

// Test card data loading
runTest("Card data model should return an array", () => {
  const cards = loadCardData()
  assert(Array.isArray(cards), "Cards should be an array")
})

// Test template engine
runTest("Template engine should replace placeholders", () => {
  const template = "{{title}} - {{count}}"
  const data = { title: "Test", count: 5 }
  const result = renderTemplate("test", data)

  // Mock implementation for testing
  const expected = template.replace("{{title}}", data.title).replace("{{count}}", data.count)

  assert.strictEqual(result, expected)
})

// Print test summary
console.log("\n--- Test Results ---")
console.log(`Total: ${results.total}`)
console.log(`Passed: ${results.passed}`)
console.log(`Failed: ${results.failed}`)

// Exit with appropriate code
process.exit(results.failed > 0 ? 1 : 0)
