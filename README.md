# CoT Faithfulness

An interactive educational website explaining **chain-of-thought faithfulness** in language models: when visible reasoning reflects the computation that produced an answer, and when it becomes a post-hoc explanation.

The project translates AI safety and interpretability research into an accessible, interactive format for non-technical readers, ML practitioners, and researchers.

## Why this matters

Language models can produce step-by-step explanations before giving an answer. These reasoning traces are often treated as if they reveal how the model reached its conclusion.

But a readable explanation is not necessarily a faithful one.

A chain of thought is faithful only if it causally contributes to the final answer. If the answer is determined through another internal pathway and the reasoning is generated afterward, then the explanation may be plausible without being transparent.

This matters for AI safety because many oversight proposals rely on monitoring model reasoning for warning signs such as deception, reward hacking, unsafe planning, or hidden intent. CoT monitoring is only reliable if the visible reasoning is actually connected to the computation that produced the output.

## What the site covers

The site is organized into six sections:

### 01 - The Idea

Introduces faithful vs. unfaithful chain-of-thought reasoning, post-hoc rationalization, and the difference between visible reasoning and internal computation.

Includes causal diagrams showing:

- faithful reasoning: `X → CoT → Y`
- unfaithful reasoning: `X → Y`, with CoT generated as a parallel explanation

### 02 - The Math

Explains the formal framing behind CoT faithfulness:

- Jacovi & Goldberg’s distinction between plausibility and faithfulness
- Turpin et al.’s bias-injection setup
- Lanham et al.’s truncation tests
- causal mediation framing using total, direct, and indirect effects

Equations are rendered with KaTeX.

### 03 - Lab

Three interactive teaching visualizations:

1. **Causal Pathway Explorer**  
   A bias-strength slider animates the shift from mediated reasoning to direct input-to-answer influence.

2. **Bias Injection Simulator**  
   A toy multiple-choice example shows how a sycophantic nudge can flip an answer while the visible reasoning rationalizes the result.

3. **Truncation Effect Curve**  
   A schematic line chart illustrates how task accuracy can respond differently when chain-of-thought reasoning is progressively removed.

The lab visualizations are synthetic teaching examples, not live model outputs or empirical measurements.

### 04 - Safety

Connects CoT faithfulness to AI safety monitoring.

Topics include:

- CoT monitoring
- alignment faking and scratchpad reasoning
- reasoning model faithfulness gaps
- sycophantic drift
- capability bypass
- strategic verbalization suppression
- what faithful CoT would need to guarantee

### 05 - Research

A literature survey covering:

- Jacovi & Goldberg (2020)
- Wei et al. (2022)
- Turpin et al. (2023)
- Lanham et al. (2023)
- Greenblatt et al. (2024)
- Chen et al. (2025)

The section also states the epistemic status of the field: what is empirically supported, what is interpretation-dependent, and what remains speculative.

### 06 - Start Here

A curated path for different audiences:

- non-technical readers
- developers and ML practitioners
- researchers

Includes links to papers, interpretability resources, and implementation tools such as TransformerLens and nnsight.

## Tech stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion
- KaTeX / react-katex
- Inline SVG visualizations

## Design

The site uses a clean editorial design inspired by technical research explainers:

- Sora, Lora, and DM Mono typography
- warm off-white background
- red accent color
- reading progress bar
- responsive navigation
- mobile hamburger menu
- scroll-triggered animations
- audience track selector

## Interactive components

The project includes custom SVG-based interactive components for:

- causal pathway visualization
- animated bias injection
- schematic truncation curves
- hover-highlighted chart series
- typewriter-style reasoning animation

No charting library is required for the core lab visualizations.

## Build status

The project builds successfully with:

```bash
npm run build
```

## Running locally

```bash
npm install
npm run dev
```

Then open:

```bash
http://localhost:3000
```

## Notes on accuracy

This project distinguishes between empirical claims from the literature and synthetic visualizations built for teaching.

The interactive labs are not live model evaluations. They are schematic illustrations designed to make the causal structure of the faithfulness problem easier to understand.

Current epistemic status:

- Bias-injection evidence for unfaithful CoT is strong across studied model families and benchmark settings.
- Truncation evidence is real but interpretation-dependent, and varies by model, task, and perturbation.
- Safety extrapolations, especially strategic suppression of safety-relevant reasoning, are plausible concerns but not directly confirmed.
- The visualizations are explanatory, not measurements.

## References

The site includes inline citations and a numbered reference list for the six core papers:

1. Jacovi & Goldberg - *Towards Faithfully Interpretable NLP Systems*
2. Wei et al. - *Chain-of-Thought Prompting Elicits Reasoning in Large Language Models*
3. Turpin et al. - *Language Models Don't Always Say What They Think*
4. Lanham et al. - *Measuring Faithfulness in Chain-of-Thought Reasoning*
5. Greenblatt et al. - *Alignment Faking in Large Language Models*
6. Chen et al. - *Reasoning Models Don't Always Say What They Think*

## Author

Built by [Jacob Ortiz](https://www.linkedin.com/in/jacob-ortiz-ab6421348/) as an AI safety education and technical portfolio project. If you would like to support, you can [buy me a coffee](https://ko-fi.com/agentjakey) or check out my [other work](https://github.com/agentjakey)!
