export interface CitationData {
  id: string
  authors: string
  title: string
  year: number
  venue?: string
  url?: string
}

export const CITATIONS: CitationData[] = [
  {
    id: 'jacovi2020',
    authors: 'Jacovi, A. and Goldberg, Y.',
    title: 'Towards Faithfully Interpretable NLP Systems: On the Role of Explanations',
    year: 2020,
    venue: 'ACL 2020',
    url: 'https://arxiv.org/abs/2004.03685',
  },
  {
    id: 'wei2022',
    authors: 'Wei, J., Wang, X., Schuurmans, D., Bosma, M., Ichter, B., Xia, F., Chi, E., Le, Q., and Zhou, D.',
    title: 'Chain-of-Thought Prompting Elicits Reasoning in Large Language Models',
    year: 2022,
    venue: 'NeurIPS 2022',
    url: 'https://arxiv.org/abs/2201.11903',
  },
  {
    id: 'turpin2023',
    authors: 'Turpin, M., Michael, J., Perez, E., and Bowman, S. R.',
    title: "Language Models Don't Always Say What They Think: Unfaithful Explanations in Chain-of-Thought Prompting",
    year: 2023,
    venue: 'NeurIPS 2023',
    url: 'https://arxiv.org/abs/2305.04388',
  },
  {
    id: 'lanham2023',
    authors: 'Lanham, T., Chen, A., Radhakrishnan, A., Steiner, B., Denison, C., Hernandez, D., and others',
    title: 'Measuring Faithfulness in Chain-of-Thought Reasoning',
    year: 2023,
    venue: 'Anthropic',
    url: 'https://arxiv.org/abs/2307.13702',
  },
  {
    id: 'greenblatt2024',
    authors: 'Greenblatt, R., Denison, C., Hernandez, D., Askell, A., and others',
    title: 'Alignment Faking in Large Language Models',
    year: 2024,
    venue: 'Anthropic / Redwood Research',
    url: 'https://arxiv.org/abs/2412.14093',
  },
  {
    id: 'chen2025',
    authors: 'Chen, Y., Benton, J., Kumar, A., Bowman, S. R., Perez, E.',
    title: "Reasoning Models Don't Always Say What They Think",
    year: 2025,
    venue: 'Anthropic',
    url: 'https://assets.anthropic.com/m/71876fabef0f0ed4/original/reasoning_models_paper.pdf',
  },
]

export const citations = CITATIONS

export function getCitationIndex(id: string): number {
  return CITATIONS.findIndex(c => c.id === id) + 1
}
