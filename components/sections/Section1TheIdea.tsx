import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { Prose, SectionHeading, Callout } from '@/components/ui/Typography'

function FaithfulDiagram() {
  return (
    <figure style={{ margin: '48px 0' }}>
      <svg viewBox="0 0 560 120" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', width: '100%', maxWidth: '520px', margin: '0 auto' }} role="img" aria-label="Faithful causal chain: Input X causes Chain of Thought, which causes Answer Y">
        <defs>
          <marker id="arrow-faithful" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill="#1A1915" />
          </marker>
        </defs>
        <rect x="10" y="40" width="80" height="40" rx="4" fill="none" stroke="#1A1915" strokeWidth="1.5" />
        <text x="50" y="65" textAnchor="middle" fontFamily="'Sora', sans-serif" fontSize="13" fill="#1A1915">Input X</text>
        <line x1="90" y1="60" x2="188" y2="60" stroke="#1A1915" strokeWidth="1.5" markerEnd="url(#arrow-faithful)" />
        <rect x="190" y="30" width="150" height="60" rx="4" fill="none" stroke="#C2411C" strokeWidth="1.5" />
        <text x="265" y="58" textAnchor="middle" fontFamily="'Sora', sans-serif" fontSize="13" fill="#C2411C">Chain of</text>
        <text x="265" y="73" textAnchor="middle" fontFamily="'Sora', sans-serif" fontSize="13" fill="#C2411C">Thought</text>
        <line x1="340" y1="60" x2="438" y2="60" stroke="#1A1915" strokeWidth="1.5" markerEnd="url(#arrow-faithful)" />
        <rect x="440" y="40" width="110" height="40" rx="4" fill="none" stroke="#1A1915" strokeWidth="1.5" />
        <text x="495" y="65" textAnchor="middle" fontFamily="'Sora', sans-serif" fontSize="13" fill="#1A1915">Answer Y</text>
      </svg>
      <figcaption style={{ textAlign: 'center', fontFamily: "'Sora', sans-serif", fontSize: '12px', color: '#5C5A54', marginTop: '12px' }}>
        In the faithful case, the reasoning trace mediates the input-output relationship. X &rarr; CoT &rarr; Y.
      </figcaption>
    </figure>
  )
}

function UnfaithfulDiagram() {
  return (
    <figure style={{ margin: '48px 0' }}>
      <svg viewBox="0 0 560 160" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', width: '100%', maxWidth: '520px', margin: '0 auto' }} role="img" aria-label="Unfaithful causal structure: Input X affects Answer Y directly, bypassing Chain of Thought">
        <defs>
          <marker id="arrow-red" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill="#C2411C" />
          </marker>
          <marker id="arrow-gray" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L0,6 L6,3 z" fill="#aaa" />
          </marker>
        </defs>
        <rect x="10" y="60" width="80" height="40" rx="4" fill="none" stroke="#1A1915" strokeWidth="1.5" />
        <text x="50" y="85" textAnchor="middle" fontFamily="'Sora', sans-serif" fontSize="13" fill="#1A1915">Input X</text>
        <line x1="90" y1="80" x2="438" y2="80" stroke="#C2411C" strokeWidth="2" markerEnd="url(#arrow-red)" />
        <text x="265" y="70" textAnchor="middle" fontFamily="'Sora', sans-serif" fontSize="11" fill="#C2411C">direct effect</text>
        <line x1="90" y1="70" x2="190" y2="30" stroke="#aaa" strokeWidth="1" strokeDasharray="4,3" markerEnd="url(#arrow-gray)" />
        <rect x="190" y="5" width="150" height="45" rx="4" fill="none" stroke="#aaa" strokeWidth="1.2" />
        <text x="265" y="25" textAnchor="middle" fontFamily="'Sora', sans-serif" fontSize="12" fill="#aaa">Chain of</text>
        <text x="265" y="40" textAnchor="middle" fontFamily="'Sora', sans-serif" fontSize="12" fill="#aaa">Thought</text>
        <line x1="340" y1="28" x2="438" y2="75" stroke="#aaa" strokeWidth="1" strokeDasharray="4,3" markerEnd="url(#arrow-gray)" />
        <rect x="440" y="60" width="110" height="40" rx="4" fill="none" stroke="#1A1915" strokeWidth="1.5" />
        <text x="495" y="85" textAnchor="middle" fontFamily="'Sora', sans-serif" fontSize="13" fill="#1A1915">Answer Y</text>
      </svg>
      <figcaption style={{ textAlign: 'center', fontFamily: "'Sora', sans-serif", fontSize: '12px', color: '#5C5A54', marginTop: '12px' }}>
        In the unfaithful case, the input affects the answer directly (red). The chain of thought is generated as a parallel process, not a mediating one.
      </figcaption>
    </figure>
  )
}

export function Section1TheIdea() {
  return (
    <SectionWrapper id="the-idea" label="The Idea">
      <SectionHeading n={1}>The Idea</SectionHeading>

      <p
        className="font-sans font-semibold text-primary"
        style={{ fontSize: '20px', marginBottom: '32px', lineHeight: 1.4 }}
      >
        The Readable Mind
      </p>

      <Prose>
        <p>
          When you ask a language model a difficult question, a modern system will often pause and
          think out loud. It walks through sub-problems. It checks its work. It arrives at a
          conclusion and explains how it got there. This visible scratchpad is called chain-of-thought
          reasoning, and it was a genuine breakthrough: simply prompting models to reason step by step
          before answering caused large accuracy improvements on math, logic, and commonsense tasks
          that had seemed out of reach.
        </p>
        <p>
          But a visible reasoning process is not the same as a transparent one.
        </p>
        <p>
          There are two things that might be called the model's "reasoning." The first is the chain of
          thought you can read — the sequence of sentences the model generates before its final answer,
          the working-out it shows on the page. The second is the internal computation that actually
          determines what token comes next: the activations propagating through layers of attention
          heads and feed-forward networks, shaped entirely by learned weights and input context. These
          two processes run in the same system. But they are not the same process, and there is no
          guarantee they are connected by anything stronger than correlation.
        </p>
        <p>
          A faithful chain of thought is one where the visible reasoning causally produces the output:
          if you removed or changed the reasoning steps, the answer would change too. An unfaithful
          chain of thought is one where the model had already "decided" its answer through some
          internal pathway that bypassed the written reasoning entirely — then generated a
          plausible-sounding explanation afterward. The explanation is not wrong, exactly. It just
          wasn't the reason.
        </p>
        <p>
          Researchers call this distinction <strong>faithfulness</strong>, and its absence has a name
          that borrows from human psychology: <strong>post-hoc rationalization</strong>. The model
          generates an answer through one computational pathway, then constructs a narrative about that
          answer through a different one. Both pathways are running in the same transformer. But only
          one of them is described in the output you read.
        </p>
      </Prose>

      <FaithfulDiagram />
      <UnfaithfulDiagram />

      <Callout track="nontechnical">
        <strong>Why should you care?</strong> If a model's visible reasoning does not causally
        produce its outputs, we cannot monitor that reasoning to detect dangerous behavior. Every
        proposal for using chain-of-thought as an AI safety tool — monitoring for deceptive planning,
        detecting reward hacking, auditing unsafe intent — depends on faithfulness being true. If it
        isn't, the window we thought we had into the model's mind is a mirror, not a window.
      </Callout>

      <p
        className="font-serif italic text-secondary"
        style={{ fontSize: '17px', lineHeight: 1.8, marginTop: '48px' }}
      >
        Let's look at the math that makes this precise, and then see it live.
      </p>
    </SectionWrapper>
  )
}
