import { ReactNode } from 'react'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { SectionHeading } from '@/components/ui/Typography'

function ColHeader({ children }: { children: ReactNode }) {
  return (
    <h3
      style={{
        fontFamily: "'Sora', sans-serif",
        fontSize: '16px',
        fontWeight: 600,
        color: '#1A1915',
        marginBottom: '20px',
        lineHeight: 1.3,
      }}
    >
      {children}
    </h3>
  )
}

function ColText({ children }: { children: ReactNode }) {
  return (
    <p
      style={{
        fontFamily: "'Sora', sans-serif",
        fontSize: '14px',
        color: '#5C5A54',
        lineHeight: 1.75,
        marginBottom: '20px',
      }}
    >
      {children}
    </p>
  )
}

function ActionLink({ href, title, desc }: { href: string; title: string; desc?: string }) {
  return (
    <div style={{ marginBottom: '18px' }}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          fontFamily: "'Sora', sans-serif",
          fontSize: '14px',
          fontWeight: 500,
          color: '#C2411C',
          textDecoration: 'underline',
          textDecorationColor: 'rgba(194, 65, 28, 0.3)',
          textUnderlineOffset: '3px',
        }}
      >
        {title}
      </a>
      {desc && (
        <p
          style={{
            fontFamily: "'Sora', sans-serif",
            fontSize: '13px',
            color: '#5C5A54',
            marginTop: '4px',
            lineHeight: 1.55,
          }}
        >
          {desc}
        </p>
      )}
    </div>
  )
}

function AboutLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        color: 'inherit',
        textDecoration: 'underline',
        textDecorationColor: 'rgba(92, 90, 84, 0.45)',
        textUnderlineOffset: '2px',
      }}
    >
      {children}
    </a>
  )
}

export function Section6StartHere() {
  return (
    <SectionWrapper id="start-here" label="Start Here">
      <SectionHeading n={6}>Start Here</SectionHeading>

      <div className="grid grid-cols-1 md:grid-cols-3" style={{ marginTop: '8px' }}>

        <div
          className="md:border-r border-border pb-10 md:pb-0 md:pr-10"
          style={{ borderBottom: '1px solid #E4E2DB' }}
        >
          <div>
            <span
              className="font-mono text-accent"
              style={{ fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '14px' }}
            >
              01
            </span>
            <ColHeader>If you're new to AI</ColHeader>
            <ColText>
              Any AI system that produces step-by-step reasoning traces before answering — every
              chatbot that walks you through its reasoning, every AI assistant that explains how it
              reached a conclusion — has an invisible property that makes it harder to verify: the
              reasoning and the actual computation may not be the same thing. Understanding why
              this gap exists, and what it takes to close it, is one of the central questions for
              anyone who wants to know whether AI systems can be audited.
            </ColText>
            <ActionLink
              href="https://aisafety.training/"
              title="BlueDot Impact Technical AI Safety Course"
              desc="A structured course covering the technical foundations of AI safety, including interpretability and alignment."
            />
            <ActionLink
              href="https://course.aisafety.training/"
              title="AI Safety Fundamentals: Interpretability Track"
              desc="Covers mechanistic interpretability from first principles. No ML background required to start."
            />
            <ActionLink
              href="https://arxiv.org/abs/2201.11903"
              title="Wei et al. (2022) — Chain-of-Thought Prompting"
              desc="The paper that introduced chain-of-thought prompting and showed the accuracy gains that started this research agenda."
            />
          </div>
        </div>

        <div
          className="md:border-r border-border pb-10 md:pb-0 md:px-10"
          style={{ borderBottom: '1px solid #E4E2DB', paddingTop: '0' }}
        >
          <div className="pt-10 md:pt-0">
            <span
              className="font-mono text-accent"
              style={{ fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '14px' }}
            >
              02
            </span>
            <ColHeader>If you're a developer or ML practitioner</ColHeader>
            <ActionLink
              href="https://github.com/neelnanda-io/TransformerLens"
              title="TransformerLens"
              desc="Activation hooks and patching for testing causal mediation in transformers. The standard toolkit for mechanistic interpretability."
            />
            <ActionLink
              href="https://arena.education/"
              title="ARENA: Interpretability Track"
              desc="Structured curriculum covering activation patching, circuits, and SAEs. Designed for engineers entering the field."
            />
            <ActionLink
              href="https://github.com/milesaturpin/cot-unfaithfulness"
              title="Turpin et al. (2023) Code"
              desc="Reproduction code for the bias injection experiments. Good starting point for running faithfulness evaluations on your own models."
            />
            <ActionLink
              href="https://nnsight.net/"
              title="nnsight"
              desc="Remote access to large models with clean intervention hooks for activation patching and steering experiments."
            />
          </div>
        </div>

        <div className="pb-0 md:pl-10">
          <div className="pt-10 md:pt-0">
            <span
              className="font-mono text-accent"
              style={{ fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '14px' }}
            >
              03
            </span>
            <ColHeader>If you're a researcher</ColHeader>
            <ActionLink
              href="https://arxiv.org/abs/2004.03685"
              title="Jacovi & Goldberg (2020)"
              desc="The foundational conceptual distinction between plausibility and faithfulness. The bedrock of this research agenda."
            />
            <ActionLink
              href="https://arxiv.org/abs/2305.04388"
              title="Turpin et al. (2023) — NeurIPS"
              desc="Language Models Don't Always Say What They Think. The key empirical result on bias injection and CoT unfaithfulness."
            />
            <ActionLink
              href="https://arxiv.org/abs/2307.13702"
              title="Lanham et al. (2023)"
              desc="Measuring Faithfulness in Chain-of-Thought Reasoning. Truncation tests, inverse scaling hypothesis."
            />
            <ActionLink
              href="https://arxiv.org/abs/2412.14093"
              title="Greenblatt et al. (2024)"
              desc="Alignment Faking in Large Language Models. The scratchpad-as-strategic-tool finding."
            />
            <ActionLink
              href="https://assets.anthropic.com/m/71876fabef0f0ed4/original/reasoning_models_paper.pdf"
              title="Chen et al. (2025)"
              desc="Reasoning Models Don't Always Say What They Think. Extended thinking models and faithfulness gaps."
            />
            <ActionLink
              href="https://www.neelnanda.io/mechanistic-interpretability/open-problems"
              title="200 Concrete Open Problems in Mechanistic Interpretability"
              desc="Neel Nanda's taxonomy of unsolved problems, organized by difficulty and prerequisite knowledge."
            />
          </div>
        </div>
      </div>

      <div
        style={{
          borderTop: '1px solid #E4E2DB',
          paddingTop: '48px',
          marginTop: '64px',
          maxWidth: '560px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <p
          style={{
            fontFamily: "'Lora', serif",
            fontSize: '16px',
            color: '#5C5A54',
            lineHeight: 1.8,
            marginBottom: '12px',
          }}
        >
          This page was built as a learning tool and a technical portfolio piece. The interactive
          visualizations run entirely in your browser; they illustrate the phenomenon using
          synthetic examples, not outputs from actual model inference. All citations link to
          original papers. The author is{' '}
          <AboutLink href="https://www.linkedin.com/in/jacob-ortiz-ab6421348/">
            Jacob Ortiz
          </AboutLink>
          , AI Researcher and Physics student at UCSD.{' '}
          <AboutLink href="https://github.com/agentjakey">GitHub.</AboutLink>{' '}
          Errors are mine.
        </p>
        <p
          style={{
            fontFamily: "'Lora', serif",
            fontSize: '14px',
            color: '#8A8880',
            lineHeight: 1.7,
          }}
        >
          If this was useful, you can support my work on{' '}
          <AboutLink href="https://ko-fi.com/agentjakey">Ko-fi</AboutLink>.
        </p>
      </div>
    </SectionWrapper>
  )
}
