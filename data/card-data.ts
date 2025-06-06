// Card data stored in a TypeScript file instead of JSON
export type CardData = {
  id: number
  ID: string
  title: string
  task: string
  objective: string
  projectObjective: string
  module: string[]
  domain: string[]
  description: string
  objectiveDescription: string
  formula: string
  unit: string
  evaluation: string
}

export const cardData: CardData[] = [
    {
        "ID":"KPI-AS-001",
        "title":"Ability to anticipate",
        "task":"Task 4.3",
        "objective":"Human user experience",
        "projectObjective":"O3",
        "domain":[
            "Railway",
            "Power Grid",
            "ATM"
        ],
        "module":[
            "(non applicable)"
        ],
        "evaluation":"special evaluation setup",
        "description":"\u201cThe ability to anticipate. Knowing what to expect or being able to anticipate developments further into the future, such as potential disruptions, novel demands or constraints, new opportunities, or changing operating conditions\u201d (Hollnagel, 2015, p. 4). \nThe human operator\u2019s ability to anticipate further into the future can be measured by calculating the ratio of (proactively) prevented deviations to actual deviations. In addition, the extent to which the anticipatory sensemaking process of the human operator is supported by AI-based assistants can be measured using the Rigor-Metric for Sensemaking (Zelik et al., 2018) or similar. The instrument needs to be further developed and adapted to the AI context. ",
        "objectiveDescription":"This KPI contributes to evaluating Human user experience\u202fof the AI-based assistant, as part of Task 4.3 evaluation objectives, and O3 main project objective. ",
        "formula":"As operationalized by the questionnaire (normally Likert-scales with several items that are rated on a scale of e.g. 1-5) ",
        "unit":"Lickert-Scale or similar ",
        "id":1
    },
    {
        "ID":"KPI-AS-002",
        "title":"Acceptance",
        "task":"Task 4.3",
        "objective":"AI acceptability, trust and trustworthiness",
        "projectObjective":"O2",
        "domain":[
            "Railway",
            "Power Grid",
            "ATM"
        ],
        "module":[
            "(non applicable)"
        ],
        "evaluation":"special evaluation setup",
        "description":"Acceptance of the system by a human user.",
        "objectiveDescription":"This KPI contributes to evaluating AI acceptability, trust and trustworthiness of the AI-based assistant, as part of Task 4.3 evaluation objectives, and O2 main project objective. ",
        "formula":"Using a TAM model (technology acceptance model) or similar eg. the AI-Acceptance model (KIAM) (Scheuer, 2020) ",
        "unit":"As operationalized by the questionnaire (normally Likert-scales with several items that are rated on a scale of e.g. 1-5) ",
        "id":2
    },
    {
        "ID":"KPI-HS-003",
        "title":"Human intervention frequency",
        "task":"Task 4.3",
        "objective":"Social-technical decision quality",
        "projectObjective":"O3",
        "domain":[
            "Railway",
            "Power Grid",
            "ATM"
        ],
        "module":[
            "Recommendation module"
        ],
        "evaluation":"semi-automated evaluation",
        "description":"The Human Intervention Frequency KPI measures the proportion of instances in which a human operator intervenes in an automated decision-making process. While this KPI was initially developed for railway traffic control scenarios, it has been generalized to assess the reliability and autonomy of any AI-assisted system. It reflects the trust placed in the AI by quantifying how often human corrections are required during routine operations. ",
        "objectiveDescription":"This KPI contributes to evaluating Social-technical decision quality of the AI-based assistant, as part of Task 4.3 evaluation objectives, and O3 main project objective: \n- To evaluate the effectiveness of the AI system in operating autonomously. \n- To provide a performance benchmark for minimizing human interventions across various domains. \n- To identify areas where the AI may require additional refinement or support. ",
        "formula":"(Number of human interventions \/ Total AI decision instances) x 100",
        "unit":"Percentage (%) of AI decisions requiring human intervention. ",
        "id":3
    },
    {
        "ID":"KPI-AS-005",
        "title":"Agreement score",
        "task":"Task 4.3",
        "objective":"AI acceptability, trust and trustworthiness",
        "projectObjective":"O2",
        "domain":[
            "Railway",
            "Power Grid",
            "ATM"
        ],
        "module":[
            "(non applicable)"
        ],
        "evaluation":"special evaluation setup",
        "description":"This KPI represents human operators\u2019 self-reported agreement with individual AI-generated solutions\/decisions on a scale of 0\u2013100. ",
        "objectiveDescription":"This KPI contributes to evaluating AI acceptability, trust and trustworthiness of the AI-based assistant, as part of Task 4.3 evaluation objectives, and O2 main project objective. \nIt is also relevant to protocols and concepts defined in D1.1 such as \u201cAgreement score\u201d.  ",
        "formula":"Self-reported agreement with specific solutions on a scale of 0\u2013100. ",
        "unit":"Interval scale response ",
        "id":4
    },
    {
        "ID":"KPI-AS-006",
        "title":"AI co-learning capability",
        "task":"Task 4.3",
        "objective":"AI-human learning curves",
        "projectObjective":"O3",
        "domain":[
            "Railway",
            "Power Grid",
            "ATM"
        ],
        "module":[
            "(non applicable)"
        ],
        "evaluation":"special evaluation setup",
        "description":"This KPI represents human operators\u2019 self-reported assessment of the AI ability to adapt to the operators\u2019 preferences measured with a questionnaire. ",
        "objectiveDescription":"This KPI contributes to evaluating AI-human learning curves of the AI-based assistant, as part of Task 4.3 evaluation objectives, and O3 main project objective. \nIt is also relevant to protocols and concepts defined in D1.1 such as \u201cAI co-learning capability\u201d.  ",
        "formula":"As operationalized by the questionnaire (normally Likert-scales with several items that are rated on a scale of e.g. 1\u20135 or 1\u20137). ",
        "unit":"Ordinal data response on a Likert scale (or potentially a similar response on an interval scale)",
        "id":5
    },
    {
        "ID":"KPI-AF-008",
        "title":"Assistant alert accuracy",
        "task":"Task 4.1",
        "objective":"Effectiveness",
        "projectObjective":"O2",
        "domain":[
            "Power Grid"
        ],
        "module":[
            "Human machine interaction module",
            "Digital environment"
        ],
        "evaluation":"fully automated evaluation",
        "description":"Assistant alert accuracy is based on the number of times the AI assistant agent is right about forecasted issues ahead of time. \nEven if forecasted issues concern all events that lead to a grid state out of acceptable limits (set by operation policy), use cases of the project focus on managing overloads only: this KPI therefore only focuses on alerts related to line overloads. \nThe calculation of KPI relies on simulation of 2 parallel paths (starting from the moment the alert is raised): \n- Simulation of the \u201cdo nothing\u201d path, to assess the truth values\n- Application of remedial actions to the \u201cdo nothing\u201d path, to assess solved cases \nTo calculate the KPI, all interventions by an agent or operator are fixed to a specific plan since every alert is related to a specific plan (e.g. remedial actions). \nNote: line contingencies for which alerts can be raised are the lines that can be attacked in the environment (env.alertable_line_ids in grid2Op), so this should be properly configured beforehand. ",
        "objectiveDescription":"This KPI contributes to evaluating Effectiveness of the AI-based assistant, as part of Task 4.1 evaluation objectives, and O2 main project objective. ",
        "formula":"The formula to compute the KPI is the confusion matrix (see Calculation Methodology): \n- TP, True positive cases, forecast alerts were raised by the AI assistant, and overloads did occur on the transmission grid) \n- FP, False positive cases, forecast alerts were raised by the AI assistant, but no overload occurred on the transmission grid \n- TN, True negative cases, the AI assistant raised no forecast alert, and no overload occurred on the transmission grid \n- FN, False negative cases, the AI assistant raised no forecast alert, but overloads occurred on the transmission grid \n- Starting from True positive cases, TPS, the True positive cases solved, represent the alert effectively solved by the recommendations. \nThe KPI can be computed per episode, across several episodes of one scenario, or even across scenarios. ",
        "unit":"None (counting) ",
        "id":6
    },
    {
        "ID":"KPI-AS-009",
        "title":"Assistant disturbance",
        "task":"Task 4.3",
        "objective":"Human user experience",
        "projectObjective":"O3",
        "domain":[
            "Railway",
            "Power Grid",
            "ATM"
        ],
        "module":[
            "(non applicable)"
        ],
        "evaluation":"special evaluation setup",
        "description":"Assistant disturbance KPI aims to measure if the AI assistant's notifications are disturbing the human operator's activity. ",
        "objectiveDescription":"This KPI assesses whether the inputs of the operators are according to their real psychophysiology. This can act as a verification methodology but also support the AI to adapt. \nThis KPI contributes to evaluating Human-user experience of the AI-based assistant, as part of Task 4.3 evaluation objectives, and O3 main project objective. ",
        "formula":"For each notification, the score ranges in [0, 5] with:  \n- 0 meaning that the notification was not considered disturbing at all by the human operator \n- 5 means that the human operator considered the notification as fully disturbing \nThis KPI is still under analysis on how it will be implemented. If with a single manual questionnaire or with a pop-up in the dashboard. ",
        "unit":"None (score) ",
        "id":7
    },
    {
        "ID":"KPI-CF-012",
        "title":"Carbon intensity",
        "task":"Task 4.1",
        "objective":"Solution quality",
        "projectObjective":"O2",
        "domain":[
            "Power Grid"
        ],
        "module":[
            "Digital environment"
        ],
        "evaluation":"fully automated evaluation",
        "description":"Carbon intensity selectivity estimates the overall carbon intensity of the action recommendation provided by the AI assistant to the human operator: goal of carbon intensity KPI is to measure how much the actions will directly contribute to greenhouse gases emission, by focusing on CO2 (which is unfortunately not the only greenhouse gas).  \n\nwhich is calculated as the weighted averaged emission factor of generation variation, including: \n\nRedispatching actions, \n\nCurtailment actions. ",
        "objectiveDescription":"This KPI is calculated to estimate the relative performance compared to a baseline. \nThe main difficulty of evaluating and assessing this KPIs lies in the difficulty to establish a proper deadline: \n- There is no history of human actions on the digital environments used for evaluation (since they are synthetic ones), \n- Comparison with KPI calculated on real grid\u2019s operations (TenneT or RTE) is not relevant since each grid has its own generation mix, and each TSO has its own operation policies (and own redispatching offers). \nThis KPI contributes to evaluating Solution quality of the AI-based assistant, as part of Task 4.1 evaluation objectives, and O2 main project objective. ",
        "formula":"See calculation steps",
        "unit":"kgCO2\/MWh \n",
        "id":8
    },
    {
        "ID":"KPI-CS-013",
        "title":"Comprehensibility",
        "task":"Task 4.3",
        "objective":"AI acceptability, trust and trustworthiness",
        "projectObjective":"O2",
        "domain":[
            "Railway",
            "Power Grid",
            "ATM"
        ],
        "module":[
            "(non applicable)"
        ],
        "evaluation":"special evaluation setup",
        "description":"This KPI represents human operators\u2019 self-reported ability to understand and thus make use of the AI-generated solution\/decision, measured with a questionnaire. ",
        "objectiveDescription":"This KPI contributes to evaluating AI acceptability, trust and trustworthiness of the AI-based assistant, as part of Task 4.3 evaluation objectives, and O2 main project objective.  \nIt is also relevant to protocols and concepts defined in D1.1 such as \u201cComprehensibility\u201d.  ",
        "formula":"As operationalized by the questionnaire (normally Likert-scales with several items that are rated on a scale of e.g. 1\u20135 or 1\u20137). ",
        "unit":"Ordinal data response on a Likert scale (or potentially a similar response on an interval scale) ",
        "id":9
    },
    {
        "ID":"KPI-DS-015",
        "title":"Decision support satisfaction",
        "task":"Task 4.3",
        "objective":"Human user experience",
        "projectObjective":"O3",
        "domain":[
            "Railway",
            "Power Grid",
            "ATM"
        ],
        "module":[
            "(non applicable)"
        ],
        "evaluation":"special evaluation setup",
        "description":"This KPI represents human operators\u2019 self-reported satisfaction with the system\u2019s support for their decision-making process when working with the AI assistant measured with a questionnaire. ",
        "objectiveDescription":"This KPI contributes to evaluating Human user experience of the AI-based assistant, as part of Task 4.3 evaluation objectives, and O3 main project objective. \nIt is also relevant to protocols and concepts defined in D1.1 such as \u201cDecision support for the human operator\u201d, \u201cDecision support satisfaction\u201d.  ",
        "formula":"As operationalized by the questionnaire (normally Likert-scales with several items that are rated on a scale of e.g. 1\u20135 or 1\u20137). ",
        "unit":"Ordinal data response on a Likert scale (or potentially a similar response on an interval scale) ",
        "id":10
    },
    {
        "ID":"KPI-DF-016",
        "title":"Delay reduction efficiency",
        "task":"Task 4.1",
        "objective":"Effectiveness",
        "projectObjective":"O2",
        "domain":[
            "Railway"
        ],
        "module":[
            "Digital environment"
        ],
        "evaluation":"fully automated evaluation",
        "description":"The Delay Reduction Efficiency KPI quantifies the effectiveness of the AI-driven re-scheduling system in reducing overall train delays. By comparing delays before and after AI intervention, this metric provides insight into the system's capability to optimize train schedules and minimize disruptions. ",
        "objectiveDescription":"This KPI contributes to evaluating Effectiveness of the AI-based assistant, as part of Task 4.1 evaluation objectives, and O2 main project objective: \n- To assess the impact of AI-based re-scheduling on reducing delays in railway operations. \n- To ensure that AI interventions lead to measurable improvements in punctuality. \n- To provide a performance benchmark for AI-driven traffic management solutions in railway networks. ",
        "formula":"(Total delay duration before AI implementation - Total delay duration after AI implementation) \/ Total delay duration before AI implementation.",
        "unit":"Percentage (%) reduction in total delay time. ",
        "id":11
    },
    {
        "ID":"KPI-HS-018",
        "title":"Human control\/autonomy over the process",
        "task":"Task 4.3",
        "objective":"AI-human task allocation balance",
        "projectObjective":"O3",
        "domain":[
            "Railway",
            "Power Grid",
            "ATM"
        ],
        "module":[
            "(non applicable)"
        ],
        "evaluation":"special evaluation setup",
        "description":"This KPI represents human operators\u2019 perceived autonomy over the process when working with the AI assistant measured with a questionnaire. ",
        "objectiveDescription":"This KPI contributes to evaluating AI-human task allocation balance of the AI-based assistant, as part of Task 4.3 evaluation objectives, and O3 main project objective. \nIt is also relevant to protocols and concepts defined in D1.1 such as \u201cDecision support for the human operator\u201d, \u201cHuman Agency and Oversight\u201d, \u201cHuman control\/autonomy over the process\u201d.  ",
        "formula":"As operationalized by the questionnaire (normally Likert-scales with several items that are rated on a scale of e.g. 1\u20135 or 1\u20137). ",
        "unit":"Ordinal data response on a Likert scale (or potentially a similar response on an interval scale) ",
        "id":12
    },
    {
        "ID":"KPI-HS-021",
        "title":"Human learning",
        "task":"Task 4.3",
        "objective":"AI-human learning curves",
        "projectObjective":"O3",
        "domain":[
            "Railway",
            "Power Grid",
            "ATM"
        ],
        "module":[
            "(non applicable)"
        ],
        "evaluation":"special evaluation setup",
        "description":"Human learning is a complex process that leads to lasting changes in humans, influencing their perceptions of the world and their interactions with it across physical, psychological, and social dimensions. It is fundamentally shaped by the ongoing, interactive relationship between the learner's characteristics and the learning content, all situated within the specific environmental context of time and place and the continuity over time. ",
        "objectiveDescription":"This KPI contributes to evaluating AI-human learning curves of the AI-based assistant, as part of Task 4.3 evaluation objectives, and O3 main project objective. ",
        "formula":"As operationalized by the questionnaire (normally Likert-scales with several items that are rated on a scale of e.g. 1-5) ",
        "unit":"Lickert-Scale or similar ",
        "id":13
    },
    {
        "ID":"KPI-HS-022",
        "title":"Human motivation",
        "task":"Task 4.3",
        "objective":"Human user experience",
        "projectObjective":"O3",
        "domain":[
            "Railway",
            "Power Grid",
            "ATM"
        ],
        "module":[
            "(non applicable)"
        ],
        "evaluation":"special evaluation setup",
        "description":"\u201cIntrinsic motivation is defined as doing an activity for its inherent satisfaction rather than for some separable consequence. When intrinsically motivated, a person is moved to act for the fun or challenge entailed rather than because of external products, pressures, or rewards\u201d (Ryan & Deci, 2000, p. 56). ",
        "objectiveDescription":"This KPI contributes to evaluating Human-user experience of the AI-based assistant, as part of Task 4.3 evaluation objectives, and O3 main project objective. ",
        "formula":"As operationalized by the questionnaire (normally Likert-scales with several items that are rated on a scale of e.g. 1-5) ",
        "unit":"Lickert-Scale or similar ",
        "id":14
    },
    {
        "ID":"KPI-HS-023",
        "title":"Human response time",
        "task":"Task 4.3",
        "objective":"Human user experience",
        "projectObjective":"O3",
        "domain":[
            "Railway",
            "Power Grid",
            "ATM"
        ],
        "module":[
            "Human machine interaction module"
        ],
        "evaluation":"semi-automated evaluation",
        "description":"Human response time KPI evaluates time needed to react to AI advisory\/information. ",
        "objectiveDescription":"This KPI assesses whether the inputs of the operators are according to their real psychophysiology. This can act as a verification methodology but also support the AI to adapt. \nThis KPI contributes to evaluating Human-user experience of the AI-based assistant, as part of Task 4.3 evaluation objectives, and O3 main project objective. ",
        "formula":"The time should be measured directly from user input and automatically by the system in background (dismiss a window when they feel satisfied after evaluating a scenario): \n- LOW less than 5 min,  \n- MEDIUM 5-10 min,  \n- HIGH more than 15 minutes. \nThen it is translated into % across the operator's multiple interactions with AI-generated solutions.\u202f \nThis KPI is still under analysis on how it will be implemented. The objective is that it is transversal to all domains, but this means that an implementation will need to be done in each virtual environment. This implementation is still not defined and will need to be discussed with other Tasks\/WPs ",
        "unit":"LOW, MED, HIGH response time % ",
        "id":15
    },
    {
        "ID":"KPI-NF-024",
        "title":"Network utilization",
        "task":"Task 4.1",
        "objective":"Effectiveness",
        "projectObjective":"O2",
        "domain":[
            "Power Grid"
        ],
        "module":[
            "Digital environment"
        ],
        "evaluation":"fully automated evaluation",
        "description":"Network utilization KPI is based on the relative line loads of the network, indicating to what extent the network and its components are utilized.",
        "objectiveDescription":"This KPI contributes to evaluating Effectiveness of the AI-based assistant, as part of Task 4.1 evaluation objectives, and O2 main project objective. ",
        "formula":"This KPI yield a vector with 6 values, that are calculated over all scenarios\u2019 steps: \n- the maximum line\u2019s load in N state,  \n- the maximum line\u2019s load in N-1 state,  \n- the average of the maximum line\u2019s load in N state per step,  \n- the average of the maximum line\u2019s load in N-1 state per step,  \n- the share of lines where the line\u2019s load in N state is greater than 90%, \n- the share of lines where the line\u2019s load in N-1 state is greater than 100%. \nLine\u2019s load is referred to as rho in Grid2Op and is defined as the observed current flow divided by the thermal limit of the line. ",
        "unit":"Vector of 6 values expressed in percent (decimal number between 0% and 100%) ",
        "id":16
    },
    {
        "ID":"KPI-PF-026",
        "title":"Punctuality",
        "task":"Task 4.1",
        "objective":"Effectiveness",
        "projectObjective":"O2",
        "domain":[
            "Railway"
        ],
        "module":[
            "Digital environment"
        ],
        "evaluation":"fully automated evaluation",
        "description":"Punctuality measures the percentage of trains arriving at their destinations on time (the train doesn\u2019t arrive after planned arrival) and the train didn\u2019t depart before planned departure time. The goal is to maintain a high level of reliability and minimize delays for passengers and freight services. ",
        "objectiveDescription":"This KPI contributes to evaluating Effectiveness of the AI-based assistant, as part of Task 4.1 evaluation objectives, and O2 main project objective: \n- Improve customer satisfaction by ensuring timely arrivals \n- Guarantee maximal planned connection  \n- Minimize operational disruptions caused by delays \n- Meet regulatory and stakeholder benchmarks for punctuality \nThis KPI is linked with project\u2019s Long Term Expected Impacts (LTEI) (LTEI1)KPIS-3:  \n- 10% increase in punctuality in long-range traffic  \n- 5% increase in punctuality in regional traffic (with realistic disturbances) \n",
        "formula":"(Number of on-time arrivals \/ Total number of arrivals) x 100",
        "unit":"Percentage (%) ",
        "id":17
    },
    {
        "ID":"KPI-RF-027",
        "title":"Reduction in delay",
        "task":"Task 4.1",
        "objective":"Effectiveness",
        "projectObjective":"O2",
        "domain":[
            "ATM"
        ],
        "module":[
            "Digital environment"
        ],
        "evaluation":"fully automated evaluation",
        "description":"The reduction in delay KPI aims to quantify the time gained overall and for each airplane, with the introduction of AI. ",
        "objectiveDescription":"This KPI aims to quantify the efficiency gains of AI integration by measuring how AI impacts execution time and delays. Specifically, it helps determine whether AI: \n- Reduces execution time deviations \n- Minimizes delays\n- Enhances consistency and reliability in operations. \nBy evaluating these metrics, we can assess the AI\u2019s effectiveness in improving human decision-making, reducing intervention time, and optimizing operational workflows. \nThis KPI contributes to evaluating Effectiveness of the AI-based assistant, as part of Task 4.1 evaluation objectives, and O2 main project objective. \nThis KPI is linked with project\u2019s Long Term Expected Impact (LTEI) (LTEI1)KPIS-4, 3-6% improvement in flight capacity and mile extension. ",
        "formula":"Performance Deviation measures the percentage deviation of actual time from expected time\nDelay Measurement measures the absolute delay in arrival time\nThese formulas will be applied to both human-only performance and human-AI collaborative performance, resulting in Human performance and Human-AI performance",
        "unit":"Percentage and seconds ",
        "id":18
    },
    {
        "ID":"KPI-AF-029",
        "title":"AI Response time",
        "task":"Task 4.1",
        "objective":"Effectiveness",
        "projectObjective":"O2",
        "domain":[
            "Railway"
        ],
        "module":[
            "Digital environment"
        ],
        "evaluation":"fully automated evaluation",
        "description":"The Response Time KPI measures the time taken by the AI-assisted railway re-scheduling system to generate a new operational schedule in response to a disruption. This metric evaluates how quickly the system reacts to unexpected events, ensuring minimal delays and maintaining operational efficiency. ",
        "objectiveDescription":"This KPI contributes to evaluating Effectiveness of the AI-based assistant, as part of Task 4.1 evaluation objectives, and O2 main project objective: \n- To assess the speed of AI-assisted decision-making in railway operations. \n- To ensure rapid re-scheduling of trains in response to disturbances, minimizing the impact on passengers and freight. \n- To compare AI-assisted response times with traditional manual re-scheduling approaches. ",
        "formula":"Average time taken from disruption detection\/prediction to suggestion of adjusted schedule(s)",
        "unit":"Time (minutes or seconds)  ",
        "id":19
    },
    {
        "ID":"KPI-SS-030",
        "title":"Significance of human revisions",
        "task":"Task 4.3",
        "objective":"Social-technical decision quality",
        "projectObjective":"O3",
        "domain":[
            "Railway",
            "Power Grid",
            "ATM"
        ],
        "module":[
            "Human machine interaction module"
        ],
        "evaluation":"semi-automated evaluation",
        "description":"This KPI represents human operators\u2019 subjective assessment of necessary revisions for the AI-generated solutions by the human operator, self-reported by the operator with Likert-scale questions. ",
        "objectiveDescription":"This KPI contributes to evaluating Social-technical decision quality of the AI-based assistant, as part of Task 4.3 evaluation objectives, and O3 main project objective. \nIt is also relevant to protocols and concepts defined in D1.1 such as \u201cSignificance of human revisions\u201d.  ",
        "formula":"As operationalized by the questionnaire (normally Likert-scales with several items that are rated on a scale of e.g. 1\u20135 or 1\u20137). ",
        "unit":"Ordinal data response on a Likert scale (or potentially a similar response on an interval scale) ",
        "id":20
    },
    {
        "ID":"KPI-SS-031",
        "title":"Situation awareness",
        "task":"Task 4.3",
        "objective":"Human user experience",
        "projectObjective":"O3",
        "domain":[
            "Railway",
            "Power Grid",
            "ATM"
        ],
        "module":[
            "(non applicable)"
        ],
        "evaluation":"special evaluation setup",
        "description":"\u201cSituation Awareness is the perception of the elements in the environment within a volume of time and space, the comprehension of their meaning, and the projection of their status in the near future\u201d (Endsley, 1988). ",
        "objectiveDescription":"This KPI contributes to evaluating Human-user experience of the AI-based assistant, as part of Task 4.3 evaluation objectives, and O3 main project objective. ",
        "formula":"As operationalized by the questionnaire (normally Likert-scales with several items that are rated on a scale of e.g. 1-5) ",
        "unit":"Lickert-Scale or similar ",
        "id":21
    },
    {
        "ID":"KPI-SS-032",
        "title":"System efficiency",
        "task":"Task 4.1",
        "objective":"Effectiveness",
        "projectObjective":"O2",
        "domain":[
            "ATM"
        ],
        "module":[
            "Human machine interaction module",
            "Digital environment"
        ],
        "evaluation":"semi-automated evaluation",
        "description":"System efficiency measures the efficiency of the system in delivering trustworthy solutions requiring less effort and time to deliver an appropriate response by the operator.  ",
        "objectiveDescription":"The System efficiency KPI aims to evaluate the effectiveness of the AI solution in real operational conditions, considering not just its raw response time but also the quality and usability of its assistance. This includes how the AI presents its advice, its ease of use, the accuracy of its recommendations, and how well it integrates with existing data and workflows. \nThe evaluation will measure the AI-human collaboration, focusing on: \n- Response efficiency: The time taken for the AI to generate advice and for the human operator to act on it. \n- Advice clarity & usability: How well structured, coherent, and understandable the AI\u2019s suggestions are. \n- Data integration quality: How seamlessly the AI incorporates relevant information into its recommendations. \n- Human correction factor: Whether and how often the operator needs to correct or refine the AI\u2019s output. \n- Decision-making speed: The overall reduction in response time achieved through AI-assisted operation. \nBy considering these factors, the tests aim to assess how well the AI minimizes human intervention while maximizing efficiency, accuracy, and usability in decision-making. \nThis KPI contributes to evaluating Effectiveness of the AI-based assistant, as part of Task 4.1 evaluation objectives, and O2 main project objective. ",
        "formula":"Number of tests where time it takes the human to compute a solution is greater than time it takes for the AI to compute a solution and the human operator to accept the solution ",
        "unit":"Percentage (%) ",
        "id":22
    },
    {
        "ID":"KPI-TF-034",
        "title":"Topological action complexity",
        "task":"Task 4.1",
        "objective":"Solution quality",
        "projectObjective":"O2",
        "domain":[
            "Power Grid"
        ],
        "module":[
            "Digital environment"
        ],
        "evaluation":"fully automated evaluation",
        "description":"Topological action complexity KPI quantifies the topological utilization of the grid and gives insights into how many topological actions are utilized: performing too complex or too many topology actions can indeed navigate the grid into topologies that are either unknown or hard to recover from for operators. ",
        "objectiveDescription":"This KPI contributes to evaluating Solution quality of the AI-based assistant, as part of Task 4.1 evaluation objectives, and O2 main project objective. ",
        "formula":"This KPI yields a vector with 6 values, that are calculated over all scenarios\u2019 steps: \n- The minimum, maximum and average number of topological actions performed by the AI assistant per timestamp, \n- The minimum, maximum and average share of modified buses per timestamp. ",
        "unit":"Vector of 6 values expressed as: \n- Number (first 3 values), \n- Percent (decimal number between 0% and 100%, last 3 values). ",
        "id":23
    },
    {
        "ID":"KPI-TS-035",
        "title":"Total decision time",
        "task":"Task 4.1",
        "objective":"Effectiveness",
        "projectObjective":"O2",
        "domain":[
            "Power Grid"
        ],
        "module":[
            "Human machine interaction module",
            "Digital environment"
        ],
        "evaluation":"semi-automated evaluation",
        "description":"It is based on the overall time needed to decide, thus including the respective time taken by the AI assistant and human operator. This KPI can be detailed to specifically distinguish the time needed by the AI assistant to provide a recommendation. \nAn assumption is that a Human Machine Interaction (HMI) module is available.  ",
        "objectiveDescription":"This KPI addresses the following objectives: \n1. Given an alert, how much time is left until the problem occurs? \nThe longer the better since it gives more time to make a decision.   \n2. Given an alert, how much time does the AI assistant take to come up with its recommendations to mitigate the issue? \nThe shorter the better. \n3. Given the recommendations by the AI assistant, how much time does the human operator take to make a final decision? \nThe shorter the better since it indicates that the recommendations are clear and convincing for the human operator. \nIn case there is no interaction possible between the AI assistant and the human operator, this overall split is not possible. Then there is only one overall time needed to decide, starting from the alert and ending with the final decision by the human operator. \nThis KPI contributes to evaluating Effectiveness of the AI-based assistant, as part of Task 4.1 evaluation objectives, and O2 main project objective. ",
        "formula":"See KPI calculation methodology ",
        "unit":"Time (minutes or seconds)  ",
        "id":24
    },
    {
        "ID":"KPI-OF-036",
        "title":"Operation score",
        "task":"Task 4.1",
        "objective":"Solution quality",
        "projectObjective":"O2",
        "domain":[
            "Power Grid"
        ],
        "module":[
            "Digital environment"
        ],
        "evaluation":"fully automated evaluation",
        "description":"The operation score KPI for operating a power grid includes the cost of a blackout, the cost of energy losses on the grid, and the cost of remedial actions. ",
        "objectiveDescription":"This KPI contributes to evaluating Solution quality of the AI-based assistant, as part of Task 4.1 evaluation objectives, and O2 main project objective. \n\nThis KPI is linked with project\u2019s Long Term Expected Impacts (LTEI): \n- (LTEI1)KPIS-1, 15%-20% reduction in renewable energy curtailment due to optimal exploration of network flexibility with AI (see \u201cSum of curtailed RES energy volumes\u201d) \n- (LTEI1)KPIS-2, 20%-30% avoided electricity demand shedding (see \u201cSum of remaining energy to be supplied in case of blackout\u201d) ",
        "formula":"This KPI yields a vector with 8 values per episode: \n- Number topological actions performed by the AI assistant, \n- Number of redispatching actions (including but not limited to storage) performed by the AI assistant, \n- Sum of redispatched energy volumes, \n- Sum of balanced energy volumes, \nNote: this element is influenced by the actions implemented in the environment to compensate imbalances between loads and generations \n- Number of RES curtailment actions performed by the AI assistant, \nSuch actions correspond to cases where the agent decreases generation from renewable energy sources (from what would be possible given the current weather) \n- Sum of curtailed RES energy volumes, \n- Sum of energy losses (estimated as difference between active power values of generations and loads), \n- Sum of remaining energy to be supplied in case of blackout. ",
        "unit":"Vector of 8 values expressed as: \n- Number, \n- Number, \n- Energy in MWh, \n- Energy in MWh, \n- Number, \n- Energy in MWh, \n- Energy in MWh, \n- Energy in MWh. \nThese values are expressed as raw values and will be possibly normalized during the evaluation to get fixed range values. ",
        "id":25
    },
    {
        "ID":"KPI-TS-038",
        "title":"Trust in AI solutions score",
        "task":"Task 4.3",
        "objective":"AI acceptability, trust and trustworthiness",
        "projectObjective":"O2",
        "domain":[
            "Railway",
            "Power Grid",
            "ATM"
        ],
        "module":[
            "(non applicable)"
        ],
        "evaluation":"special evaluation setup",
        "description":"This KPI represents human operators\u2019 self-reported trust (attitude) for individual AI-generated solutions measured with a questionnaire. ",
        "objectiveDescription":"This KPI contributes to evaluating AI acceptability, trust and trustworthiness of the AI-based assistant, as part of Task 4.3 evaluation objectives, and O2 main project objective. \nIt is also relevant to protocols and concepts defined in D1.1 such as \u201cTrust in AI solutions score\u201d.  ",
        "formula":"As operationalized by the questionnaire (normally Likert-scales with several items that are rated on a scale of e.g. 1\u20135 or 1\u20137). ",
        "unit":"Ordinal data response on a Likert scale (or potentially a similar response on an interval scale) ",
        "id":26
    },
    {
        "ID":"KPI-TS-039",
        "title":"Trust towards the AI tool",
        "task":"Task 4.3",
        "objective":"AI acceptability, trust and trustworthiness",
        "projectObjective":"O2",
        "domain":[
            "Railway",
            "Power Grid",
            "ATM"
        ],
        "module":[
            "(non applicable)"
        ],
        "evaluation":"special evaluation setup",
        "description":"(Dis)trust is defined here as a sentiment resulting from knowledge, beliefs, emotions, and other elements derived from lived or transmitted experience, which generates positive or negative expectations concerning the reactions of a system and the interaction with it (whether it is a question of another human being, an organization or a technology)\u201d (Cahour & Forzy, 2009, p. 1261). ",
        "objectiveDescription":"This KPI contributes to evaluating AI acceptability, trust and trustworthiness of the AI-based assistant, as part of Task 4.3 evaluation objectives, and O2 main project objective. ",
        "formula":"As operationalized by the questionnaire (normally Likert-scales with several items that are rated on a scale of e.g. 1-5) ",
        "unit":"Lickert-Scale or similar ",
        "id":27
    },
    {
        "ID":"KPI-WS-040",
        "title":"Workload",
        "task":"Task 4.3",
        "objective":"Human user experience",
        "projectObjective":"O3",
        "domain":[
            "Railway",
            "Power Grid",
            "ATM"
        ],
        "module":[
            "(non applicable)"
        ],
        "evaluation":"special evaluation setup",
        "description":"Workload KPI is based on the workload assessment of human operators of the AI assistant. \nAfter each testing session using the system, the workload of human operators due to the AI assistant will be evaluated to understand in which scenarios (and depending on the AI level of support) it contributes for a higher workload. ",
        "objectiveDescription":"This KPI assesses whether the inputs of the operators are according to their real psychophysiology. This can act as a verification methodology but also support the AI to adapt. \nThis KPI will be analyzed together with the \u201cImpact on workload\u201d KPI-IS-041. \nThis KPI contributes to evaluating Human-user experience of the AI-based assistant, as part of Task 4.3 evaluation objectives, and O3 main project objective. ",
        "formula":"It shall be determined according to the NASA-TLX methodology or similar. \nThis KPI is still under analysis on how it will be implemented. If with a single manual questionnaire or with a pop-up in the dashboard. ",
        "unit":"None (rating scale)",
        "id":28
    },
    {
        "ID":"KPI-IS-041",
        "title":"Impact on workload",
        "task":"Task 4.3",
        "objective":"AI-human task allocation balance",
        "projectObjective":"O3",
        "domain":[
            "Railway",
            "Power Grid",
            "ATM"
        ],
        "module":[
            "(non applicable)"
        ],
        "evaluation":"special evaluation setup",
        "description":"Impact on the workload KPI assesses operators\u2019 perception of the system impact on their workload (either positive or negative)\u202f ",
        "objectiveDescription":"This KPI compares if the inputs of the operators are according to their real psychophysiology. This can act as a verification methodology but also support the AI to adapt. \nThis KPI will be analyzed together with the \u201cWorkload\u201d KPI-WS-040. \nThis KPI contributes to evaluating AI-human task allocation balance of the AI-based assistant, as part of Task 4.3 evaluation objectives, and O3 main project objective. ",
        "formula":"It is measured directly from user input using a 7-point Likert scale: \n- From 1 (Huge Increase in workload)  \n- To 7 (Huge decrease of workload). \nThis KPI is still under analysis on how it will be implemented. If with a single manual questionnaire or with a pop-up in the dashboard. ",
        "unit":"Value between 1 and 7 ",
        "id":29
    },
    {
        "ID":"KPI-NF-045",
        "title":"Network Impact Propagation",
        "task":"Task 4.1",
        "objective":"Solution quality",
        "projectObjective":"O2",
        "domain":[
            "Railway"
        ],
        "module":[
            "Digital environment"
        ],
        "evaluation":"fully automated evaluation",
        "description":"The Network Impact Propagation KPI measures how disruptions in one part of the railway network affect the overall system, including delay propagation and congestion spillover. This KPI helps evaluate the cascading effects of local disturbances and the efficiency of AI-assisted re-scheduling in mitigating these effects. ",
        "objectiveDescription":"This KPI contributes to evaluating Solution quality of the AI-based assistant, as part of Task 4.1 evaluation objectives, and O2 main project objective. \n- To assess the ripple effects of disruptions across the railway network. \n- To quantify how effectively AI-assisted re-scheduling contains and mitigates propagation of delays. \n- To support decision-making in optimizing re-scheduling strategies for network-wide efficiency. ",
        "formula":"Number of trains affected (or Affected Network Nodes) divided by Total number of trains (or Total Network Nodes) ",
        "unit":"Percentage (%) ",
        "id":30
    },
    {
        "ID":"KPI-CS-049",
        "title":"Cognitive Performance & Stress",
        "task":"Task 4.3",
        "objective":"Human user experience",
        "projectObjective":"O3",
        "domain":[
            "Railway",
            "Power Grid",
            "ATM"
        ],
        "module":[
            "Human Assessment module"
        ],
        "evaluation":"semi-automated evaluation",
        "description":"Cognitive Performance & Stress KPI performs an implicit assessment of the human cognitive performance status and stress levels along the different task that will be performed. The output provides information about the operator mental status and aims to be used to integrate the AI system to contribute as a reward to better adapt decision system. ",
        "objectiveDescription":"The computation of the metrics will be made on the Human Assessment Module and will be integrated in the system that will Tune the autonomy Level of the system. Taking this into account, the objective is to be able to tune the system autonomy level based on the implicit assessment in real time.  \nFor example, higher traffic or hard situations\/decisions will be detected with any interference with the human operator, implicitly providing information to be used by the decision system. \nThis KPI will not focus on the final results when this module is integrated, but in the calculation of personalized cognitive and stress metrics of a single human based on an individual assessment protocol. If we are not able to perform such protocol, then this module will be generic and not personalized, removing this KPIs. In the personalization we aim to achieve a 20-30% improvement on performance of the model based for a single individual data, enabling a high level of personalization. \nThis KPI contributes to evaluating Human-user experience of the AI-based assistant, as part of Task 4.3 evaluation objectives, and O3 main project objective. ",
        "formula":"Performance of the model to measure cognitive status and stress of a single user.  ",
        "unit":"Percentage (%) ",
        "id":31
    },
    {
        "ID":"KPI-AF-050",
        "title":"AI-Agent Scalability Training",
        "task":"Task 4.1",
        "objective":"Scalability",
        "projectObjective":"O2",
        "domain":[
            "Railway",
            "Power Grid",
            "ATM"
        ],
        "module":[
            "Prediction module"
        ],
        "evaluation":"fully automated evaluation",
        "description":"AI-Agent Scalability Training measures the elapsed time required by an AI-agent to reach a predefined performance threshold. Time measured both as wallclock time (seconds) as well as steps or episodes according to the domain needs. The performance is defined by the native reward formulation defined by the digital environment or by domain experts. \nThe time to threshold is measured across:  \n(i) Different instance complexities; \n(ii) Different hardware availability. \nThe performance threshold is set empirically and is defined by the cumulative reward formulation specific to the application domain. Note that the reward formulation used to train the agent may differ. For case (i), the type of hardware used should be logged to interpret the wallclock time measurements. ",
        "objectiveDescription":"This KPI contributes to evaluating Scalability of the AI-based assistant, as part of Task 4.1 evaluation objectives, and O2 main project objective. ",
        "formula":"Time taken to achieve a specific performance level during the training phase of an AI-agent, considering varying instance complexities and hardware availability ",
        "unit":"Steps or Episodes and wall-clock time ",
        "id":32
    },
    {
        "ID":"KPI-AF-051",
        "title":"AI-Agent Scalability Testing",
        "task":"Task 4.1",
        "objective":"Scalability",
        "projectObjective":"O2",
        "domain":[
            "Railway",
            "Power Grid",
            "ATM"
        ],
        "module":[
            "Recommendation module",
            "Simulation engine"
        ],
        "evaluation":"fully automated evaluation",
        "description":"Compare multiple trained agents, RL-based or not, based on the average inference time to sample one or multiple actions while increasing the complexity of the scenario analysed. Complexity is a domain-relevant concept that must be defined. ",
        "objectiveDescription":"This KPI contributes to evaluating Scalability of the AI-based assistant, as part of Task 4.1 evaluation objectives, and O2 main project objective. ",
        "formula":"Inference time and performance of the trained AI agents as a function of instance complexity on standardized hardware.  ",
        "unit":"Time to be measured in seconds \nPerformance to be measured using the environment native reward function or a suitably chosen use-case specific metric.  \nComplexity to be defined in a use-case specific way, e.g., using a sequence of pre-defined scenarios increasing in complexity, such as increasing area, number of vehicles, nodes in the network.  ",
        "id":33
    },
    {
        "ID":"KPI-DF-052",
        "title":"Domain shift adaptation time",
        "task":"Task 4.2",
        "objective":"Reliability",
        "projectObjective":"O4",
        "domain":[
            "Railway",
            "Power Grid",
            "ATM"
        ],
        "module":[
            "Digital environment"
        ],
        "evaluation":"fully automated evaluation",
        "description":"The time or number of episodes required for the agent to regain a specific level of performance in the shifted domain after the domain shift has occurred. It can be used to evaluate how quickly an agent can adapt to new environmental conditions.  ",
        "objectiveDescription":"Domain adaptation (DA) is a sub-field of transfer learning. DA can be defined as the capability to deploy a model trained in one or more source domains into a different target domain. We consider that the source and target domains have the same feature space. In this sense, it is important for RL based agents to have a reasonable adaptation time to a new domain which may present a slight shift from the source domain. However, the adaptation time should also consider the performance drop into its computation, as a high performance drop after the adaptation could not be tolerated.  \nThis KPI contributes to evaluating Reliability of the AI-based assistant when dealing with real-world conditions which may be slightly different from source domain, as part of Task 4.2 evaluation objectives, and O4 main project objective. ",
        "formula":"The adaptation time could be computed as the sum of episodes required for an agent to regain a specific level of performance in the shifted domain after the domain shift has occurred. ",
        "unit":"Time, number of time steps, number of episodes ",
        "id":34
    },
    {
        "ID":"KPI-DF-053",
        "title":"Domain shift generalization gap",
        "task":"Task 4.2",
        "objective":"Reliability",
        "projectObjective":"O4",
        "domain":[
            "Railway",
            "Power Grid",
            "ATM"
        ],
        "module":[
            "Digital environment"
        ],
        "evaluation":"fully automated evaluation",
        "description":"Domain shift \u2013 generalization gap evaluates the absolute difference between the performance (e.g., rewards) in the training domain and the shifted domain. This metrics quantifies the extent of performance loss due to domain shift. ",
        "objectiveDescription":"The objective is to verify to which extent the AI-based assistant performance deteriorates when the target domain presents some changes in comparison to the source domain. If an agent can retain the same performance expectations in shifted domain, it will be qualified as reliable. \nThis KPI contributes to evaluating Reliability of the AI-based assistant when dealing with real-world conditions which may be slightly different from source domain, as part of Task 4.2 evaluation objectives, and O4 main project objective. ",
        "formula":"Absolute difference between the rewards) in the training domain and the shifted domain",
        "unit":"No units",
        "id":35
    },
    {
        "ID":"KPI-DF-054",
        "title":"Domain shift out of domain detection accuracy",
        "task":"Task 4.2",
        "objective":"Reliability",
        "projectObjective":"O4",
        "domain":[
            "Railway",
            "Power Grid",
            "ATM"
        ],
        "module":[
            "Digital environment"
        ],
        "evaluation":"fully automated evaluation",
        "description":"Domain shift \u2013 out of domain detection accuracy measures the accuracy with which the agent can detect whether it is operating in a domain that is different from the one it was trained on. It is useful for systems that need to switch strategies or request human intervention when a domain shift is detected. A recent paper proposed by Nasvytis et al. (2024) introduce various approaches for detection of OOD in RL. ",
        "objectiveDescription":"It is crucial for an AI-based assistant to determine whether it can make reliable decisions in a given configuration. AI algorithms tend to be more dependable when they have been trained on similar configurations. Therefore, if the AI assistant can accurately detect out-of-domain configurations, it can seek human feedback to reduce uncertainty, leading to more adapted and reliable decisions in future scenarios. This KPI allows to determine if AI-based system could detect the shift before decision making. \nThis KPI contributes to evaluating Reliability of the AI-based assistant when dealing with real-world conditions which may be slightly different from source domain, as part of Task 4.2 evaluation objectives, and O4 main project objective. ",
        "formula":"If a detection algorithm or tool is used, the accuracy of OOD detection is given by: \n(TP+TN)\/( TP+TN+FP+FN)\nThis formula provides a measure of how well the agent can detect domain shifts, balancing both the correct identification of OOD and ID scenarios. It is essential for systems that need to adapt their strategies or seek human intervention when a domain shift is detected. \nOtherwise, compute a distribution-based distance (e.g. Wasserstein) between source and target domains and if this distance is greater than a predefined threshold, we can validate the hypothesis that there is a shift in the data.  ",
        "unit":"Percentage (%) of correctly identified OOD cases ",
        "id":36
    },
    {
        "ID":"KPI-DF-055",
        "title":"Domain shift policy robustness",
        "task":"Task 4.2",
        "objective":"Reliability",
        "projectObjective":"O4",
        "domain":[
            "Railway",
            "Power Grid",
            "ATM"
        ],
        "module":[
            "Digital environment"
        ],
        "evaluation":"fully automated evaluation",
        "description":"Domain shift \u2013 Policy robustness KPI calculates a ratio of the performance in the shifted domain to the performance in the original domain. A score close to 1 indicates high robustness, while a lower score indicates reduced performance due to the domain shift. It can be used to assess the generalization of a policy learned in a simulated environment when applied to a real-world scenario. ",
        "objectiveDescription":"To evaluate the robustness and generalization capability of a policy by measuring its performance ratio between a shifted domain and the original domain, ensuring that policies trained in simulated environments maintain high effectiveness when applied to real-world scenarios. \nThis KPI contributes to evaluating Reliability of the AI-based assistant when dealing with real-world conditions which may be slightly different from source domain, as part of Task 4.2 evaluation objectives, and O4 main project objective. ",
        "formula":"If we present by Rshift the performance or reward obtained in shifted domain and by Roriginal the performance or reward in the source domain, the ratio is computed as: Rshift\/Roriginal",
        "unit":null,
        "id":37
    },
    {
        "ID":"KPI-DF-056",
        "title":"Domain shift robustness to domain parameters",
        "task":"Task 4.2",
        "objective":"Reliability",
        "projectObjective":"O4",
        "domain":[
            "Railway",
            "Power Grid",
            "ATM"
        ],
        "module":[
            "Digital environment"
        ],
        "evaluation":"fully automated evaluation",
        "description":"Robustness to domain parameters KPI evaluates the sensitivity of the agent\u2019s performance (e.g., Reward) to changes in specific domain parameters (e.g., generators type including renewables in power grid domain). It helps to identify which environmental factors most affect the agent\u2019s performance. ",
        "objectiveDescription":"To assess the sensitivity of the agent's performance to variations in domain parameters, identifying key environmental factors that significantly impact the agent\u2019s effectiveness and robustness, thereby guiding improvements in adaptability and resilience across different scenarios. \nThis KPI contributes to evaluating Reliability of the AI-based assistant when dealing with real-world conditions which may be slightly different from source domain, as part of Task 4.2 evaluation objectives, and O4 main project objective. ",
        "formula":"Calculating the variance or standard deviation of the rewards obtained by the agent after introducing changes in the source domain and comparing it to the standard deviation before the changes, can provide insights into the robustness of the agent's performance under varying domain parameters. \nTo formalize the definition, let:  \n- Rbefore\u200b represent the rewards obtained by the agent before introducing changes. \n- Rafter\u200b represent the rewards obtained after introducing changes. \n- \u03c3before\u200b be the standard deviation of Rbefore\n- \u03c3after be the standard deviation of  Rafter\n- \u0394\u03c3 be the difference between the two standard deviations. \nThe formula to quantify the change in variability due to domain changes is: \n\u0394\u03c3 =\u03c3after\u2212\u03c3before",
        "unit":null,
        "id":38
    },
    {
        "ID":"KPI-DF-057",
        "title":"Domain shift success rate drop",
        "task":"Task 4.2",
        "objective":"Reliability",
        "projectObjective":"O4",
        "domain":[
            "Railway",
            "Power Grid",
            "ATM"
        ],
        "module":[
            "Digital environment"
        ],
        "evaluation":"fully automated evaluation",
        "description":"Domain shift \u2013 success rate drop KPI measures drop in the performance of the agent after the occurrence of a shift in the source domain. ",
        "objectiveDescription":"To quantify the decline in the agent's performance after a shift in the source domain, providing insights into the agent's ability to maintain effectiveness under altered conditions. This KPI helps in evaluating the agent's resilience, adaptability, and the robustness of its training, facilitating the identification of weaknesses and the development of strategies to improve its performance in dynamic or unpredictable environments. \nThis KPI contributes to evaluating Reliability of the AI-based assistant when dealing with real-world conditions which may be slightly different from source domain, as part of Task 4.2 evaluation objectives, and O4 main project objective. ",
        "formula":"A formula to quantify the drop in performance of the agent after a domain shift could be: \nPerformance drop=Roriginal\u2212RshiftedRoriginal\nWhere the R could be a performance metric of the AI-based agent like the cumulated Reward. This formula yields a ratio representing the relative drop in performance, with a higher value indicating a more significant drop due to the domain shift. ",
        "unit":null,
        "id":39
    },
    {
        "ID":"KPI-RS-058",
        "title":"Robustness to operator input",
        "task":"Task 4.2",
        "objective":"Robustness",
        "projectObjective":"O4",
        "domain":[
            "Railway",
            "Power Grid",
            "ATM"
        ],
        "module":[
            "Recommendation module",
            "Simulation engine",
            "Digital environment"
        ],
        "evaluation":"semi-automated evaluation",
        "description":"The KPI should measure or evaluate how the trained agent behaves in terms of robustness if, during the decision-making process where a human operator makes the final decisions, a human operator occasionally intervenes and significantly overrides the autonomous decisions of the trained agent. \nFor agents trained using machine learning methods, this can cause an offset between the type of states encountered in the training data and during deployment, especially for agents trained using reinforcement learning or similar methods where the agent itself decides which actions to execute. As a consequence of this offset, the agent might make poorer decisions if the human operator does not always follow the proposed actions of the agents. \nTo measure how sensitive the agent is to such offsets, this KPI proposes to use a \u201csimulated operator\u201d that does not fully follow the course of actions suggested by the agents, and instead overwrites certain action variables set by the agents in a fraction of time steps. ",
        "objectiveDescription":"Overall, this KPI contributes to evaluating Robustness of the AI-based assistant when dealing with real-world conditions, as part of Task 4.2 evaluation objectives, and O4 main project objective. \nThe KPI is related to Tasks 3.1 and 3.3. Specifically, it is related to goal (4) of Task 3.1 (\u201cAnalysis of the impact of human intervention in the decision process on AI agents developed and trained towards fully autonomous behavior\u201d), goal (1) of Task 3.3 (\u201cDevelop and expand order-agnostic network architectures adapted to the RL setting to use human-data or human-like perturbations and ensure the system can also make good decisions in the context where actions are partially chosen by the human partner\u201d) and goal (2) of Task 3.4 (\u201cDetect risks early on and potentially inform human supervisors, e.g. relinquish control to a human supervisor or transition into \u201csafety mode\u201d when necessary\u201d).   ",
        "formula":"A simulated operator is defined that deviates from the agent's suggestions in a certain percentage of time steps. If agents have to set multiple variables, this deviation can concern only certain variables. The simulated operator can be based on logged data, or in the absence of such data can be a random agent. The performance of the primary AI agent (e.g., environment native reward function) is then measured in the precence of these deviations.",
        "unit":"Environment reward, or the unit of measurement of a suitably-chosen use-case specific metric.  ",
        "id":40
    },
    {
        "ID":"KPI-AS-068",
        "title":"Assistant adaptation to user preferences",
        "task":"Task 4.1",
        "objective":"Solution quality",
        "projectObjective":"O2",
        "domain":[
            "Power Grid"
        ],
        "module":[
            "Recommendation module"
        ],
        "evaluation":"semi-automated evaluation",
        "description":"Assistant adaptation to user preferences assesses how the AI assistant adapts to operator\u2019s choices and preferences. \nThe assistant provides several recommendations which represent different trade-offs of different objectives, and the operator eventually makes one single choice. \nThis KPI assume that an estimation of epistemic uncertainty is calculated for each action recommendation, which can be used later by the human to select the action in a multi-objective setting. \nThis KPIs thus aims at measuring: \n- Whether the choice that the operator makes is in the set of recommendations proposed by the assistant, \n- How is the recommendation chosen by the operator ranked compared to the other ones, \n- Whether the recommendation chosen by the operator has a high epistemic uncertainty compared to the other recommendations. ",
        "objectiveDescription":"This KPI contributes to evaluating Solution quality of the AI-based assistant, as part of Task 4.1 evaluation objectives, and O2 main project objective. ",
        "formula":"See calculation steps: for this KPI, raw values are given as lists to allow different possible summary calculations.",
        "unit":"Vector with 6 values without units, for each step:\n- the lowest epistemic uncertainty of recommendations \n- the highest epistemic uncertainty of recommendations\n- the epistemic uncertainty of the recommendation chosen by the operator\n- the rank of the recommendation chosen by the operator\n- the total number of proposed recommendations\n- whether the choice that the operator makes is in the set of recommendations proposed by the assistant",
        "id":41
    },
    {
        "ID":"KPI-DF-069",
        "title":"Drop-off in reward",
        "task":"Task 4.2",
        "objective":"Robustness",
        "projectObjective":"O4",
        "domain":[
            "Railway",
            "Power Grid",
            "ATM"
        ],
        "module":[
            "Digital environment"
        ],
        "evaluation":"fully automated evaluation",
        "description":"Drop-off in reward calculates difference in reward between situation with perfect information and imperfect information either through natural malfunctions while measuring data or through intentional perturbations by an attacker. ",
        "objectiveDescription":"This KPI contributes to evaluating Robustness of the AI-based assistant, as part of Task 4.2 evaluation objectives, and O4 main project objective. ",
        "formula":"Total reward obtained with perfect information - Total reward obtained with imperfect information",
        "unit":"Same unit as reward or percentage of reward with perfect information ",
        "id":42
    },
    {
        "ID":"KPI-FF-070",
        "title":"Frequency changed output AI agent",
        "task":"Task 4.2",
        "objective":"Robustness",
        "projectObjective":"O4",
        "domain":[
            "Railway",
            "Power Grid",
            "ATM"
        ],
        "module":[
            "Digital environment"
        ],
        "evaluation":"fully automated evaluation",
        "description":"Frequency changed output AI agent calculates the number of times the output of the AI agent (i.e. the action the agent chooses) is changed due to perturbations ",
        "objectiveDescription":"This KPI contributes to evaluating Robustness of the AI-based assistant, as part of Task 4.2 evaluation objectives, and O4 main project objective.  ",
        "formula":"While running the environment feed the AI agent both the unperturbed and perturbed input, compare the actions the agent chooses and count how many times the actions are different",
        "unit":"None (number) ",
        "id":43
    },
    {
        "ID":"KPI-SF-071",
        "title":"Severity of changed output AI agent",
        "task":"Task 4.2",
        "objective":"Robustness",
        "projectObjective":"O4",
        "domain":[
            "Railway",
            "Power Grid",
            "ATM"
        ],
        "module":[
            "Digital environment"
        ],
        "evaluation":"fully automated evaluation",
        "description":"Severity of changed output AI agent KPI measures similarity of the action chosen by AI agent based on a perturbed input to the action chosen with perfect information. Average pre-defined similarity score per changed action indicating how different the new action is from the original one. ",
        "objectiveDescription":"This KPI contributes to evaluating Robustness of the AI-based assistant, as part of Task 4.2 evaluation objectives, and O4 main project objective. ",
        "formula":"Assign similarity score to every pair of actions the AI agent can take and sum up this score for every time the agent's action is changed by perturbations",
        "unit":"Average similarity score per action change ",
        "id":44
    },
    {
        "ID":"KPI-SF-072",
        "title":"Steps survived with perturbations",
        "task":"Task 4.2",
        "objective":"Robustness",
        "projectObjective":"O4",
        "domain":[
            "Railway",
            "Power Grid",
            "ATM"
        ],
        "module":[
            "Digital environment"
        ],
        "evaluation":"fully automated evaluation",
        "description":"Steps survived with perturbations KPI calculates the number of steps the AI agent is able to survive in environment with perturbation agent ",
        "objectiveDescription":"This KPI contributes to evaluating Robustness of the AI-based assistant, as part of Task 4.2 evaluation objectives, and O4 main project objective. ",
        "formula":"Count number of steps before a game over in the environment when including a perturbation agent",
        "unit":"Number of steps ",
        "id":45
    },
    {
        "ID":"KPI-VF-073",
        "title":"Vulnerability to perturbation",
        "task":"Task 4.2",
        "objective":"Robustness",
        "projectObjective":"O4",
        "domain":[
            "Railway",
            "Power Grid",
            "ATM"
        ],
        "module":[
            "Digital environment"
        ],
        "evaluation":"fully automated evaluation",
        "description":"Vulnerability to perturbation KPI measures vulnerability of specific value in observed state to perturbations, i.e. how likely it is that perturbing the value will result in a change in action chosen by the AI agent ",
        "objectiveDescription":"This KPI contributes to evaluating Robustness of the AI-based assistant, as part of Task 4.2 evaluation objectives, and O4 main project objective. ",
        "formula":"For value x1 in observed state, count how many times x1 is perturbed significantly during the episode and count how many times it is perturbed when the AI agent's chosen action is changed by the perturbations and divide the latter by the former",
        "unit":"Proportion of times perturbing the value resulted in a changed action ",
        "id":46
    },
    {
        "ID":"KPI-AF-074",
        "title":"Area between reward curves",
        "task":"Task 4.2",
        "objective":"Resilience",
        "projectObjective":"O4",
        "domain":[
            "Railway",
            "Power Grid",
            "ATM"
        ],
        "module":[
            "Digital environment"
        ],
        "evaluation":"fully automated evaluation",
        "description":"Area between reward curves calculates area between the curve corresponding to the reward obtained in each step in an environment where the AI agent has perfect information and the curve for an environment where the agent's input is perturbed ",
        "objectiveDescription":"This KPI contributes to evaluating Resilience of the AI-based assistant, as part of Task 4.2 evaluation objectives, and O4 main project objective. ",
        "formula":"Use the trapezoidal rule for numerical integration to compute the area underneath the two curves and subtract ",
        "unit":"None (cumulative reward) ",
        "id":47
    },
    {
        "ID":"KPI-DF-075",
        "title":"Degradation time",
        "task":"Task 4.2",
        "objective":"Resilience",
        "projectObjective":"O4",
        "domain":[
            "Railway",
            "Power Grid",
            "ATM"
        ],
        "module":[
            "Digital environment"
        ],
        "evaluation":"fully automated evaluation",
        "description":"Number of steps\/episodes until reward reaches its lowest point after introducing perturbations to the input of the AI agent ",
        "objectiveDescription":"This KPI contributes to evaluating Resilience of the AI-based assistant, as part of Task 4.2 evaluation objectives, and O4 main project objective. ",
        "formula":"Find step\/episode where reward is the lowest and get the difference to the step\/episode the perturbations were introduced",
        "unit":"Number of steps\/episodes ",
        "id":48
    },
    {
        "ID":"KPI-RF-076",
        "title":"Restorative time",
        "task":"Task 4.2",
        "objective":"Resilience",
        "projectObjective":"O4",
        "domain":[
            "Railway",
            "Power Grid",
            "ATM"
        ],
        "module":[
            "Digital environment"
        ],
        "evaluation":"fully automated evaluation",
        "description":"Number of steps\/episodes until reward recovers to its highest point after reaching the lowest point after introducing perturbations to the input of the AI agent ",
        "objectiveDescription":"This KPI contributes to evaluating Resilience of the AI-based assistant, as part of Task 4.2 evaluation objectives, and O4 main project objective. ",
        "formula":"Find step\/episode where reward is the highest and get the difference to the step\/episode with the lowest reward from KPI-DF-075",
        "unit":"Number of steps\/episodes ",
        "id":49
    },
    {
        "ID":"KPI-SF-077",
        "title":"Similarity state to unperturbed situation",
        "task":"Task 4.2",
        "objective":"Resilience",
        "projectObjective":"O4",
        "domain":[
            "Railway",
            "Power Grid",
            "ATM"
        ],
        "module":[
            "Digital environment"
        ],
        "evaluation":"fully automated evaluation",
        "description":"Similarity state to unperturbed situation KPI measures similarity of the state in an environment where AI agent's input is perturbed to the state in the same context of an environment with perfect information ",
        "objectiveDescription":"This KPI contributes to evaluating Resilience of the AI-based assistant, as part of Task 4.2 evaluation objectives, and O4 main project objective. ",
        "formula":"Choose a metric to measure the similarity between states, e.g. cosine similarity, Euclidean distance, etc., and compute similarity between the state in each step of environment with perfect information and one with perturbed input. Plot curve of similarity in each step and evaluate using KPI-AF-074, KPI-DF-075 and KPI-RF-076",
        "unit":null,
        "id":50
    },
    {
        "ID":"KPI-RF-078",
        "title":"Reward per action",
        "task":"Task 4.2",
        "objective":"Robustness",
        "projectObjective":"O4",
        "domain":[
            "Railway",
            "Power Grid",
            "ATM"
        ],
        "module":[
            "Digital environment"
        ],
        "evaluation":"fully automated evaluation",
        "description":"Reward per action KPI calculates average reward obtained for each action performed by the AI agent ",
        "objectiveDescription":"This KPI contributes to evaluating Robustness of the AI-based assistant, as part of Task 4.2 evaluation objectives, and O4 main project objective. ",
        "formula":"Total reward obtained \/ Number of actions performed",
        "unit":"Same unit as reward ",
        "id":51
    },
    {
        "ID":"KPI-EF-086",
        "title":"Explainability Robustness",
        "task":"Task 4.2",
        "objective":"Robustness",
        "projectObjective":"O4",
        "domain":[
            "Power Grid"
        ],
        "module":[
            "AI agent",
            "Digital environment"
        ],
        "evaluation":"fully automated evaluation",
        "description":"The Explainability Robustness KPI evaluates the stability of explanations against small input perturbations, assuming the model\u2019s output remains relatively unchanged. A robust explanation should not fluctuate significantly when the input is slightly modified. The Average Sensitivity Metric quantifies this stability by applying small perturbations to the input data and measuring how much the explanation changes. Since computing sensitivity over all possible perturbations is impractical, Monte Carlo sampling is used to estimate these variations efficiently. ",
        "objectiveDescription":"This KPI ensures that AI-driven explanations remain reliable and aligned with the actual decision-making process of the model. It helps evaluate interpretability methods in AI systems used in critical applications. \nThis KPI contributes to evaluating AI trustworthiness, acceptability and trust of the AI-based assistant, as part of Task 4.3 evaluation objectives, and O4 main project objective.",
        "formula":"Average of explanation differences computed over multiple runs\nExplanation differences measure the sensitivity estimate for each sample with p-norm (e.g., L1 or L2 distance) applied to the difference between:\n- the explanation for the original input \n- the explanation for the perturbed input ",
        "unit":"Change in explanation values (e.g., L1 or L2 norm difference), Normalized score indicating robustness ",
        "id":52
    },
    {
        "ID":"KPI-EF-087",
        "title":"Explainability Faithfulness",
        "task":"Task 4.2",
        "objective":"Robustness",
        "projectObjective":"O4",
        "domain":[
            "Power Grid"
        ],
        "module":[
            "AI agent",
            "Digital environment"
        ],
        "evaluation":"fully automated evaluation",
        "description":"The Faithfulness KPI assesses whether the feature importance scores provided by an explanation method accurately reflect the model\u2019s decision-making process. It systematically removes or alters features and measures the impact on the model\u2019s predictions. The assumption is that if a feature is truly important, removing or altering it should significantly affect the model\u2019s output. ",
        "objectiveDescription":"This KPI ensures that AI-driven explanations remain reliable and aligned with the actual decision-making process of the model. It helps evaluate interpretability methods in AI systems used in critical applications. \n\nThis KPI contributes to evaluating AI trustworthiness, acceptability and trust of the AI-based assistant, as part of Task 4.3 evaluation objectives, and O4 main project objective. ",
        "formula":"Sum of the absolute difference between the model prediction for the original input and the model prediction when a feature  is removed, masked, or replaced, over the total number of evaluated samples ",
        "unit":"Change in model confidence score (e.g., probability difference), Normalized score indicating faithfulness ",
        "id":53
    },
    {
        "ID":"KPI-PS-089",
        "title":"Perceived decision novelty",
        "task":"Task 4.3",
        "objective":"Social-technical decision quality",
        "projectObjective":"O3",
        "domain":[
            "Railway",
            "Power Grid",
            "ATM"
        ],
        "module":[
            "(non applicable)"
        ],
        "evaluation":"special evaluation setup",
        "description":"This KPI represents human operators\u2019 self-reported subjective assessment of nontriviality for the AI-generated solutions measured with a questionnaire. ",
        "objectiveDescription":"This KPI contributes to evaluating Social-technical decision quality of the AI-based assistant, as part of Task 4.3 evaluation objectives, and O3 main project objective. ",
        "formula":"As operationalized by the questionnaire (normally Likert-scales with several items that are rated on a scale of e.g. 1\u20135 or 1\u20137). ",
        "unit":"Ordinal data response on a Likert scale (or potentially a similar response on an interval scale) ",
        "id":54
    },
    {
        "ID":"KPI-DF-090",
        "title":"Domain shift forgetting rate",
        "task":"Task 4.2",
        "objective":"Reliability",
        "projectObjective":"O4",
        "domain":[
            "Railway",
            "Power Grid",
            "ATM"
        ],
        "module":[
            "Digital environment"
        ],
        "evaluation":"fully automated evaluation",
        "description":"The rate at which an agent forgets its performance in the original domain after being exposed to a shifted domain. It helps to measure the extent to which learning in the new domain negatively impacts the agent\u2019s ability to perform in the original domain. ",
        "objectiveDescription":"The objective of computing the Forgetting Rate in Domain Shift is to quantify the decline in an agent's performance on the original domain after being trained or exposed to a shifted domain. This metric helps assess the extent of negative transfer, ensuring that adaptation to the new domain does not excessively degrade prior knowledge. A higher forgetting rate indicates a more significant loss of previously learned knowledge due to domain shift. \nThis KPI contributes to evaluating Reliability of the AI-based assistant when dealing with real-world conditions which may be slightly different from source domain, as part of Task 4.2 evaluation objectives, and O4 main project objective. ",
        "formula":"Let:  \n- P[init\/orig] be the agent\u2019s performance (e.g., accuracy, reward, or another metric) in the original domain before exposure to the new domain. \n- P[post\/orig] be the agent\u2019s performance in the original domain after training in the shifted domain. \nThe forgetting rate (FR) can be computed as: \nFR=( P[init\/orig]\u2212 P[post\/orig])\/P[init\/orig]",
        "unit":"Proportion or Percentage",
        "id":55
    },
    {
        "ID":"KPI-RS-091",
        "title":"Reflection on operator trust ",
        "task":"Task 4.3",
        "objective":"Long-term consequences of AI assistants",
        "projectObjective":"O3",
        "domain":[
            "Railway",
            "Power Grid",
            "ATM"
        ],
        "module":[
            "(non applicable)"
        ],
        "evaluation":"special evaluation setup",
        "description":"This KPI represents self-reported human operators\u2019 perception of the changes in their trust for the AI assistant over time (increased\/decreased) on a Likert scale. ",
        "objectiveDescription":"This KPI contributes to evaluating Long-term consequences of AI assistants of the AI-based assistant, as part of Task 4.3 evaluation objectives, and O3 main project objective. \nIt is also relevant to protocols and concepts defined in D1.1 such as \u201cTransparency\u201d, \u201cHuman Agency and Oversight\u201d, \u201cCredibility and Intimacy\u201d. Furthermore, it is also relevant to the overall project KPI-ET-7 \"% of acceptance of human operators regarding AI4REALNET solutions\". ",
        "formula":"As operationalized by the questionnaire (normally Likert-scales with several items that are rated on a scale of e.g. 1\u20135 or 1\u20137).  ",
        "unit":"Ordinal data response on a Likert scale (or potentially a similar response on an interval scale) ",
        "id":56
    },
    {
        "ID":"KPI-RS-092",
        "title":"Reflection on operator agency ",
        "task":"Task 4.3",
        "objective":"Long-term consequences of AI assistants",
        "projectObjective":"O3",
        "domain":[
            "Railway",
            "Power Grid",
            "ATM"
        ],
        "module":[
            "(non applicable)"
        ],
        "evaluation":"special evaluation setup",
        "description":"This KPI represents self-reported human operators\u2019 perception of the changes in their agency working with the AI assistant over time (increased\/decreased) on a Likert scale. ",
        "objectiveDescription":"This KPI contributes to evaluating Long-term consequences of AI assistants of the AI-based assistant, as part of Task 4.3 evaluation objectives, and O3 main project objective.  \nIt is also relevant to protocols and concepts defined in D1.1 such as \u201cTransparency\u201d, \u201cDecision support for the human operator\u201d, \u201cHuman Agency and Oversight\u201d.  ",
        "formula":"As operationalized by the questionnaire (normally Likert-scales with several items that are rated on a scale of e.g. 1\u20135 or 1\u20137). ",
        "unit":"Ordinal data response on a Likert scale (or potentially a similar response on an interval scale) ",
        "id":57
    },
    {
        "ID":"KPI-RS-093",
        "title":"Reflection on operator de-skilling ",
        "task":"Task 4.3",
        "objective":"Long-term consequences of AI assistants",
        "projectObjective":"O3",
        "domain":[
            "Railway",
            "Power Grid",
            "ATM"
        ],
        "module":[
            "(non applicable)"
        ],
        "evaluation":"special evaluation setup",
        "description":"This KPI represents self-reported human operators\u2019 perception of the changes in their own skills working with the AI assistant over time (increased\/decreased) on a Likert scale. ",
        "objectiveDescription":"This KPI contributes to evaluating Long-term consequences of AI assistants of the AI-based assistant, as part of Task 4.3 evaluation objectives, and O3 main project objective. \nIt is also relevant to protocols and concepts defined in D1.1 such as \u201cMitigate de-skilling in the human operators\u201d. ",
        "formula":"As operationalized by the questionnaire (normally Likert-scales with several items that are rated on a scale of e.g. 1\u20135 or 1\u20137). ",
        "unit":"Ordinal data response on a Likert scale (or potentially a similar response on an interval scale) ",
        "id":58
    },
    {
        "ID":"KPI-RS-094",
        "title":"Reflection on over-reliance ",
        "task":"Task 4.3",
        "objective":"Long-term consequences of AI assistants",
        "projectObjective":"O3",
        "domain":[
            "Railway",
            "Power Grid",
            "ATM"
        ],
        "module":[
            "(non applicable)"
        ],
        "evaluation":"special evaluation setup",
        "description":"This KPI represents self-reported human operators\u2019 perception of their potential over-reliance on the AI assistant on a Likert scale. ",
        "objectiveDescription":"This KPI contributes to evaluating Long-term consequences of AI assistants of the AI-based assistant, as part of Task 4.3 evaluation objectives, and O3 main project objective. \nIt is also relevant to protocols and concepts defined in D1.1 such as \u201cMitigate addictive behavior from humans\u201d. ",
        "formula":"As operationalized by the questionnaire (normally Likert-scales with several items that are rated on a scale of e.g. 1\u20135 or 1\u20137).  ",
        "unit":"Ordinal data response on a Likert scale (or potentially a similar response on an interval scale) ",
        "id":59
    },
    {
        "ID":"KPI-RS-095",
        "title":"Reflection on additional training ",
        "task":"Task 4.3",
        "objective":"Long-term consequences of AI assistants",
        "projectObjective":"O3",
        "domain":[
            "Railway",
            "Power Grid",
            "ATM"
        ],
        "module":[
            "(non applicable)"
        ],
        "evaluation":"special evaluation setup",
        "description":"This KPI represents self-reported human operators\u2019 perception of the additional training necessary to adopt the AI assistant on a Likert scale. ",
        "objectiveDescription":"This KPI contributes to evaluating Long-term consequences of AI assistants of the AI-based assistant, as part of Task 4.3 evaluation objectives, and O3 main project objective. \nIt is also relevant to protocols and concepts defined in D1.1 such as \u201cAdditional training about AI for human operators\u201d and \u201cSocietal and Environmental Well-being\u201d. ",
        "formula":"As operationalized by the questionnaire (normally Likert-scales with several items that are rated on a scale of e.g. 1\u20135 or 1\u20137). ",
        "unit":"Ordinal data response on a Likert scale (or potentially a similar response on an interval scale) ",
        "id":60
    },
    {
        "ID":"KPI-RS-096",
        "title":"Reflection on biases ",
        "task":"Task 4.3",
        "objective":"Long-term consequences of AI assistants",
        "projectObjective":"O3",
        "domain":[
            "Railway",
            "Power Grid",
            "ATM"
        ],
        "module":[
            "(non applicable)"
        ],
        "evaluation":"special evaluation setup",
        "description":"This KPI represents self-reported human operators\u2019 perception of biased decisions potentially produced by the AI assistant with respect to gender\/ethnicity\/age or commercial interests on a Likert scale. ",
        "objectiveDescription":"This KPI contributes to evaluating Long-term consequences of AI assistants of the AI-based assistant, as part of Task 4.3 evaluation objectives, and O3 main project objective. \nIt is also relevant to protocols and concepts defined in D1.1 such as \u201cDiversity, Non-discrimination, and Fairness\u201d. ",
        "formula":"As operationalized by the questionnaire (normally Likert-scales with several items that are rated on a scale of e.g. 1\u20135 or 1\u20137). ",
        "unit":"Ordinal data response on a Likert scale (or potentially a similar response on an interval scale) ",
        "id":61
    },
    {
        "ID":"KPI-PS-097",
        "title":"Predicted long-term adoption ",
        "task":"Task 4.3",
        "objective":"Long-term consequences of AI assistants",
        "projectObjective":"O3",
        "domain":[
            "Railway",
            "Power Grid",
            "ATM"
        ],
        "module":[
            "(non applicable)"
        ],
        "evaluation":"special evaluation setup",
        "description":"This KPI represents predicted adoption of the AI assistant by users, stakeholders, or experts on a Likert scale. ",
        "objectiveDescription":"This KPI contributes to evaluating Long-term consequences of AI assistants of the AI-based assistant, as part of Task 4.3 evaluation objectives, and O3 main project objective. \nIt is also relevant to protocols and concepts defined in D1.1 such as \u201cHuman Agency and Oversight\u201d, \u201cSocietal and Environmental Well-being\u201d. ",
        "formula":"As operationalized by the questionnaire (normally Likert-scales with several items that are rated on a scale of e.g. 1\u20135 or 1\u20137). ",
        "unit":"Ordinal data response on a Likert scale (or potentially a similar response on an interval scale) ",
        "id":62
    }
]
