// Card data stored in a TypeScript file instead of JSON
export type CardData = {
  id: number
  ID: string
  title: string
  task: string
  objective: string
  module: string[]
  domain: string[]
  description: string
  objectiveDescription: string
  formula: string
  unit: string
}

export const cardData: CardData[] = [
  {
    id: 1,
    ID: "KPI-004",
    title: "Reflection on biases",
    task: "Task 4.3",
    objective: "Long-term consequences of AI-assistants",
    module: ["n.a."],
    domain: ["ATM", "Power Grid", "Railway"],
    description:
      "This KPI represents self-reported human operators' perception of biased decisions potentially produced by the AI assistant with respect to gender/ethnicity/age or commercial interests on a Likert scale.",
    objectiveDescription:
      'This KPI is directly relevant to the respective WP4 evaluation objective "Long-term consequences of AI-assistants" as well as the project objective O3. It is also relevant to protocols and concepts defined in D1.1 such as "Diversity, Non-discrimination, and Fairness".',
    formula:
      "As operationalized by the questionnaire (normally Likert-scales with several items that are rated on a scale of e.g. 1–5 or 1–7).",
    unit: "Ordinal data response on a Likert scale (or potentially a similar response on an interval scale)",
  },
]
