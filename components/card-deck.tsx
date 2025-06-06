"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { X } from "lucide-react"
import { cardData, type CardData } from "@/data/card-data"

export default function CardDeck() {
  // Filter states
  const [selectedTasks, setSelectedTasks] = useState<string[]>([])
  const [selectedObjectives, setSelectedObjectives] = useState<string[]>([])
  const [selectedModules, setSelectedModules] = useState<string[]>([])
  const [selectedDomains, setSelectedDomains] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState<string>("")

  // Filtered cards
  const [filteredCards, setFilteredCards] = useState<CardData[]>(cardData)

  // Extract unique filter values
  const tasks = [...new Set(cardData.map((card) => card.task))]
  const objectives = [...new Set(cardData.map((card) => card.objective))]
  const allModules = [...new Set(cardData.flatMap((card) => card.module))]
  const allDomains = [...new Set(cardData.flatMap((card) => card.domain))]

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

    // Filter by modules (card must have at least one of the selected modules)
    if (selectedModules.length > 0) {
      result = result.filter((card) => card.module.some((mod) => selectedModules.includes(mod)))
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
          card.description.toLowerCase().includes(query) ||
          card.objectiveDescription.toLowerCase().includes(query) ||
          card.formula.toLowerCase().includes(query) ||
          card.unit.toLowerCase().includes(query) ||
          card.module.some((mod) => mod.toLowerCase().includes(query)) ||
          card.domain.some((dom) => dom.toLowerCase().includes(query)),
      )
    }

    setFilteredCards(result)
  }, [selectedTasks, selectedObjectives, selectedModules, selectedDomains, searchQuery])

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

  // Toggle module selection
  const toggleModule = (module: string) => {
    setSelectedModules((prev) => (prev.includes(module) ? prev.filter((m) => m !== module) : [...prev, module]))
  }

  // Toggle domain selection
  const toggleDomain = (domain: string) => {
    setSelectedDomains((prev) => (prev.includes(domain) ? prev.filter((d) => d !== domain) : [...prev, domain]))
  }

  // Reset all filters
  const resetFilters = () => {
    setSelectedTasks([])
    setSelectedObjectives([])
    setSelectedModules([])
    setSelectedDomains([])
    setSearchQuery("")
  }

  return (
    <div className="space-y-8">
      {/* Filter section */}
      <div className="bg-card p-6 rounded-lg shadow-sm border">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Filters</h2>
          <Button variant="outline" size="sm" onClick={resetFilters} className="flex items-center gap-1">
            <X className="h-4 w-4" /> Clear All
          </Button>
        </div>

        <div className="space-y-6">
          {/* Search */}
          <div className="space-y-2">
            <Label htmlFor="search">Search</Label>
            <Input
              id="search"
              placeholder="Search cards..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Task filter */}
          <div className="space-y-2">
            <Label>Tasks</Label>
            <div className="space-y-2">
              {tasks.map((task) => (
                <div key={task} className="flex items-center space-x-2">
                  <Checkbox
                    id={`task-${task}`}
                    checked={selectedTasks.includes(task)}
                    onCheckedChange={() => toggleTask(task)}
                  />
                  <label
                    htmlFor={`task-${task}`}
                    className="text-sm font-medium capitalize leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {task}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Objective filter */}
          <div className="space-y-2">
            <Label>Objectives</Label>
            <div className="space-y-2">
              {objectives.map((objective) => (
                <div key={objective} className="flex items-center space-x-2">
                  <Checkbox
                    id={`objective-${objective}`}
                    checked={selectedObjectives.includes(objective)}
                    onCheckedChange={() => toggleObjective(objective)}
                  />
                  <label
                    htmlFor={`objective-${objective}`}
                    className="text-sm font-medium capitalize leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {objective}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Modules filter */}
          <div className="space-y-2">
            <Label className="block">Modules</Label>
            <div className="flex flex-wrap gap-2">
              {allModules.map((module) => (
                <Badge
                  key={module}
                  variant={selectedModules.includes(module) ? "default" : "outline"}
                  className="cursor-pointer capitalize"
                  onClick={() => toggleModule(module)}
                >
                  {module}
                </Badge>
              ))}
            </div>
          </div>

          {/* Domains filter */}
          <div className="space-y-2">
            <Label className="block">Domains</Label>
            <div className="flex flex-wrap gap-2">
              {allDomains.map((domain) => (
                <Badge
                  key={domain}
                  variant={selectedDomains.includes(domain) ? "default" : "outline"}
                  className="cursor-pointer capitalize"
                  onClick={() => toggleDomain(domain)}
                >
                  {domain}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Results summary */}
      <div className="flex justify-between items-center">
        <p className="text-muted-foreground">
          Showing {filteredCards.length} of {cardData.length} cards
        </p>
        {(selectedTasks.length > 0 ||
          selectedObjectives.length > 0 ||
          selectedModules.length > 0 ||
          selectedDomains.length > 0 ||
          searchQuery) && (
          <Button variant="ghost" size="sm" onClick={resetFilters}>
            Reset filters
          </Button>
        )}
      </div>

      {/* Card grid */}
      {filteredCards.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCards.map((card) => (
            <Card key={card.id} className="flex flex-col h-full">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{card.title}</CardTitle>
                  <Badge variant="outline" className="font-mono">
                    {card.ID}
                  </Badge>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Badge variant="secondary" className="capitalize">
                    {card.task}
                  </Badge>
                  <Badge variant="secondary" className="capitalize">
                    {card.objective}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 flex-grow">
                <div>
                  <h3 className="text-sm font-medium mb-1">Description:</h3>
                  <p className="text-sm text-muted-foreground">{card.description}</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-1">Objective Description:</h3>
                  <p className="text-sm text-muted-foreground">{card.objectiveDescription}</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-1">Formula:</h3>
                  <p className="text-sm text-muted-foreground">{card.formula}</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-1">Unit:</h3>
                  <p className="text-sm text-muted-foreground">{card.unit}</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-1">Modules:</h3>
                  <div className="flex flex-wrap gap-1">
                    {card.module.map((mod) => (
                      <Badge key={mod} variant="outline" className="text-xs capitalize">
                        {mod}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-1">Domains:</h3>
                  <div className="flex flex-wrap gap-1">
                    {card.domain.map((dom) => (
                      <Badge key={dom} variant="outline" className="text-xs capitalize">
                        {dom}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-lg font-medium">No cards match your filters</h3>
          <p className="text-muted-foreground mt-2">Try adjusting your filter criteria</p>
          <Button className="mt-4" onClick={resetFilters}>
            Reset all filters
          </Button>
        </div>
      )}
    </div>
  )
}
