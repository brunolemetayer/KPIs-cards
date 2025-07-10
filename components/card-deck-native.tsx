"use client"

import { useState, useEffect } from "react"
import { cardData, type CardData } from "@/data/card-data"

export default function CardDeckNative() {
  // Filter states
  const [selectedTasks, setSelectedTasks] = useState<string[]>([])
  const [selectedObjectives, setSelectedObjectives] = useState<string[]>([])
  const [selectedProjectObjectives, setSelectedProjectObjectives] = useState<string[]>([])
  const [selectedEvaluations, setSelectedEvaluations] = useState<string[]>([])
  const [selectedDomains, setSelectedDomains] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState<string>("")

  // Filtered cards
  const [filteredCards, setFilteredCards] = useState<CardData[]>(cardData)

  // Extract unique, non-empty filter values
  const tasks = [...new Set(cardData.map((c) => c.task).filter(Boolean))]
  const objectives = [...new Set(cardData.map((c) => c.objective).filter(Boolean))]
  const projectObjectives = [...new Set(cardData.map((c) => c.projectObjective).filter(Boolean))]
  const evaluations = [...new Set(cardData.map((c) => c.evaluation).filter(Boolean))]
  const allDomains = [...new Set(cardData.flatMap((c) => c.domain).filter(Boolean))]

  // Apply filters whenever filter states change
  useEffect(() => {
    let result = cardData

    // Filter by tasks
    if (selectedTasks.length > 0) {
      result = result.filter((card) => selectedTasks.includes(card.task))
    }

    // Filter by objectives
    if (selectedObjectives.length > 0) {
      result = result.filter((card) => selectedObjectives.includes(card.objective))
    }

    // Filter by project objectives
    if (selectedProjectObjectives.length > 0) {
      result = result.filter((card) => selectedProjectObjectives.includes(card.projectObjective))
    }

    // Filter by evaluations
    if (selectedEvaluations.length > 0) {
      result = result.filter((card) => selectedEvaluations.includes(card.evaluation))
    }

    // Filter by domains (card must have at least one of the selected domains)
    if (selectedDomains.length > 0) {
      result = result.filter((card) => card.domain.some((dom) => selectedDomains.includes(dom)))
    }

    // Filter by search query (search in all text fields)
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (card) =>
          card.ID.toLowerCase().includes(query) ||
          card.title.toLowerCase().includes(query) ||
          card.task.toLowerCase().includes(query) ||
          card.objective.toLowerCase().includes(query) ||
          card.projectObjective.toLowerCase().includes(query) ||
          card.description.toLowerCase().includes(query) ||
          card.objectiveDescription.toLowerCase().includes(query) ||
          card.formula.toLowerCase().includes(query) ||
          card.unit.toLowerCase().includes(query) ||
          card.evaluation.toLowerCase().includes(query) ||
          card.domain.some((dom) => dom.toLowerCase().includes(query)),
      )
    }

    setFilteredCards(result)
  }, [selectedTasks, selectedObjectives, selectedProjectObjectives, selectedEvaluations, selectedDomains, searchQuery])

  // Toggle task selection
  const toggleTask = (task: string) => {
    setSelectedTasks((prev) => (prev.includes(task) ? prev.filter((c) => c !== task) : [...prev, task]))
  }

  // Toggle objective selection
  const toggleObjective = (objective: string) => {
    setSelectedObjectives((prev) =>
      prev.includes(objective) ? prev.filter((o) => o !== objective) : [...prev, objective],
    )
  }

  // Toggle project objective selection
  const toggleProjectObjective = (projectObjective: string) => {
    setSelectedProjectObjectives((prev) =>
      prev.includes(projectObjective) ? prev.filter((po) => po !== projectObjective) : [...prev, projectObjective],
    )
  }

  // Toggle evaluation selection
  const toggleEvaluation = (evaluation: string) => {
    setSelectedEvaluations((prev) =>
      prev.includes(evaluation) ? prev.filter((e) => e !== evaluation) : [...prev, evaluation],
    )
  }

  // Toggle domain selection
  const toggleDomain = (domain: string) => {
    setSelectedDomains((prev) => (prev.includes(domain) ? prev.filter((d) => d !== domain) : [...prev, domain]))
  }

  // Reset all filters
  const resetFilters = () => {
    setSelectedTasks([])
    setSelectedObjectives([])
    setSelectedProjectObjectives([])
    setSelectedEvaluations([])
    setSelectedDomains([])
    setSearchQuery("")
  }

  return (
    <div className="space-y-8">
      {/* Filter section */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Filters</h2>
          <button
            onClick={resetFilters}
            className="px-3 py-1 text-sm border border-gray-300 rounded-md flex items-center gap-1 hover:bg-gray-50"
          >
            <span className="inline-block w-4 h-4">✕</span> Clear All
          </button>
        </div>

        <div className="space-y-6">
          {/* Search */}
          <div className="space-y-2">
            <label htmlFor="search" className="block text-sm font-medium">
              Search
            </label>
            <input
              id="search"
              type="text"
              placeholder="Search cards..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Task filter */}
          <div className="space-y-2">
            <span className="block text-sm font-medium">Tasks</span>
            <div className="space-y-2">
              {tasks.map((task) => (
                <div key={task} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id={`task-${task}`}
                    checked={selectedTasks.includes(task)}
                    onChange={() => toggleTask(task)}
                    className="h-4 w-4"
                  />
                  <label htmlFor={`task-${task}`} className="text-sm font-medium capitalize leading-none">
                    {task}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Objective filter */}
          <div className="space-y-2">
            <span className="block text-sm font-medium">Objectives</span>
            <div className="space-y-2">
              {objectives.map((objective) => (
                <div key={objective} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id={`objective-${objective}`}
                    checked={selectedObjectives.includes(objective)}
                    onChange={() => toggleObjective(objective)}
                    className="h-4 w-4"
                  />
                  <label htmlFor={`objective-${objective}`} className="text-sm font-medium capitalize leading-none">
                    {objective}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Project Objective filter */}
          <div className="space-y-2">
            <span className="block text-sm font-medium">Project Objectives</span>
            <div className="space-y-2">
              {projectObjectives.map((projectObjective) => (
                <div key={projectObjective} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id={`project-objective-${projectObjective}`}
                    checked={selectedProjectObjectives.includes(projectObjective)}
                    onChange={() => toggleProjectObjective(projectObjective)}
                    className="h-4 w-4"
                  />
                  <label
                    htmlFor={`project-objective-${projectObjective}`}
                    className="text-sm font-medium capitalize leading-none"
                  >
                    {projectObjective}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Evaluation filter */}
          <div className="space-y-2">
            <span className="block text-sm font-medium">Evaluations</span>
            <div className="space-y-2">
              {evaluations.map((evaluation) => (
                <div key={evaluation} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id={`evaluation-${evaluation}`}
                    checked={selectedEvaluations.includes(evaluation)}
                    onChange={() => toggleEvaluation(evaluation)}
                    className="h-4 w-4"
                  />
                  <label htmlFor={`evaluation-${evaluation}`} className="text-sm font-medium capitalize leading-none">
                    {evaluation}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Domains filter */}
          <div className="space-y-2">
            <span className="block text-sm font-medium">Domains</span>
            <div className="flex flex-wrap gap-2">
              {allDomains.map((domain) => (
                <button
                  key={domain}
                  onClick={() => toggleDomain(domain)}
                  className={`px-2 py-1 text-xs rounded-full capitalize ${
                    selectedDomains.includes(domain)
                      ? "bg-blue-100 text-blue-800 border border-blue-300"
                      : "bg-gray-100 text-gray-800 border border-gray-300"
                  }`}
                >
                  {domain}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Results summary */}
      <div className="flex justify-between items-center">
        <p className="text-gray-500">
          Showing {filteredCards.length} of {cardData.length} cards
        </p>
        {(selectedTasks.length > 0 ||
          selectedObjectives.length > 0 ||
          selectedProjectObjectives.length > 0 ||
          selectedEvaluations.length > 0 ||
          selectedDomains.length > 0 ||
          searchQuery) && (
          <button onClick={resetFilters} className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded-md">
            Reset filters
          </button>
        )}
      </div>

      {/* Card grid */}
      {filteredCards.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCards.map((card) => (
            <div key={card.id} className="border border-gray-200 rounded-lg shadow-sm flex flex-col h-full bg-white">
              <div className="p-4 border-b border-gray-200">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-semibold">{card.title}</h3>
                  <span className="inline-block px-2 py-1 text-xs font-mono bg-gray-100 text-gray-800 rounded border border-gray-300">
                    {card.ID}
                  </span>
                </div>

                {/* Domains display */}
                <div className="flex flex-wrap gap-1 mt-2 mb-2">
                  {card.domain.map((dom) => (
                    <span
                      key={dom}
                      className="inline-block px-2 py-0.5 text-xs bg-gray-100 text-gray-800 rounded-full border border-gray-300 capitalize"
                    >
                      {dom}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mt-1">
                  <span className="inline-block px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full capitalize">
                    {card.task}
                  </span>
                  <span className="inline-block px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full capitalize">
                    {card.objective}
                  </span>
                  <span className="inline-block px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full capitalize">
                    {card.projectObjective}
                  </span>
                  <span className="inline-block px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full capitalize">
                    {card.evaluation}
                  </span>
                </div>
              </div>
              <div className="p-4 space-y-4 flex-grow">
                <div>
                  <h4 className="text-sm font-medium mb-1">Description:</h4>
                  <p className="text-sm text-gray-600">{card.description}</p>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-1">Objective Description:</h4>
                  <p className="text-sm text-gray-600">{card.objectiveDescription}</p>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-1">Formula:</h4>
                  <p className="text-sm text-gray-600">{card.formula}</p>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-1">Unit:</h4>
                  <p className="text-sm text-gray-600">{card.unit}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-lg font-medium">No cards match your filters</h3>
          <p className="text-gray-500 mt-2">Try adjusting your filter criteria</p>
          <button onClick={resetFilters} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Reset all filters
          </button>
        </div>
      )}
    </div>
  )
}
