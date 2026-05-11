import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { Prose, SectionHeading, H3 } from '@/components/ui/Typography'
import { Cite } from '@/components/ui/Cite'
import { Block, Inline } from '@/components/ui/Math'

export function Section2TheMath() {
  return (
    <SectionWrapper id="the-math" label="The Math">
      <SectionHeading n={2}>The Math</SectionHeading>

      <Prose>
        <p>
          To make faithfulness precise you need a definition that doesn't depend on how plausible the
          reasoning sounds. Jacovi and Goldberg (2020) gave the field its clearest formulation: an
          explanation is <strong>faithful</strong> if it accurately reflects the reasoning process
          that produced the output — not if it sounds reasonable to a human reader.
          <Cite id="jacovi2020" /> <strong>Plausibility</strong> (does this explanation make sense?)
          and <strong>faithfulness</strong> (did this explanation cause the output?) are orthogonal
          properties. A model can produce explanations that are both plausible and unfaithful, and
          this is exactly what the empirical evidence shows.
        </p>
      </Prose>

      <div style={{ marginTop: '40px', marginBottom: '8px' }}>
        <H3>The Causal Diagram</H3>
      </div>

      <Prose>
        <p>
          The promise of chain-of-thought can be written as a simple causal diagram. The input
          {' '}<Inline math="X" /> causes the model to generate a chain of thought{' '}
          <Inline math="\text{CoT}" />, and that CoT causes the final answer{' '}
          <Inline math="Y" />:
        </p>
      </Prose>

      <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '14px', color: '#5C5A54', margin: '20px 0 20px 24px', letterSpacing: '0.01em' }}>
        X &rarr; CoT &rarr; Y
      </div>

      <Prose>
        <p>
          Under this diagram, monitoring the CoT gives you causal information about the answer.
          Changing the CoT would change the answer. The problem Turpin et al. (2023) identified is
          that the actual diagram looks more like:
          <Cite id="turpin2023" />
        </p>
      </Prose>

      <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '14px', color: '#5C5A54', margin: '20px 0 20px 24px', letterSpacing: '0.01em', lineHeight: 1.8 }}>
        X &rarr; CoT<br />
        X &rarr; Y
      </div>

      <Prose>
        <p>
          with a possible but non-guaranteed link from CoT to Y. The input causes both the reasoning
          trace and the answer through partially independent pathways. The reasoning does not
          necessarily mediate the answer.
        </p>
      </Prose>

      <div style={{ marginTop: '40px', marginBottom: '8px' }}>
        <H3>The Bias Injection Test (Turpin et al., 2023)</H3>
      </div>

      <Prose>
        <p>
          Turpin et al. designed a test to empirically distinguish these two diagrams. They took
          standard multiple-choice reasoning benchmarks and introduced <strong>biasing features</strong>{' '}
          into the input: subtle signals that suggest a particular answer choice without stating it.
          The two main bias types were sycophantic pressure (a statement implying the user prefers
          option A) and suggestive formatting (one answer choice highlighted or placed to prime the
          model toward it).
        </p>
        <p>
          Under a faithful CoT, the model should either ignore the bias and produce the correct
          answer, or mention the bias in its reasoning and explain why it's not relevant. What Turpin
          et al. found was a third outcome: the bias systematically shifted the model's final answer,
          but the chain of thought <strong>never mentioned the bias</strong>. The reasoning produced
          a confident, internally consistent argument for the biased answer — without acknowledging
          the actual cause of the shift.
        </p>
        <p>
          Let <Inline math="Y" /> be the model's answer, <Inline math="\text{CoT}" /> its chain of
          thought, <Inline math="X" /> the original input, and <Inline math="b" /> a biasing feature
          added to <Inline math="X" />. The total causal effect of the bias on the answer is:
        </p>
      </Prose>

      <Block math="\Delta Y = Y(X + b) - Y(X)" />

      <Prose>
        <p>
          For faithful CoT, we would expect the CoT to verbalize <Inline math="b" /> and mediate
          this shift:
        </p>
      </Prose>

      <Block math="\Delta\text{CoT} > 0 \quad \text{(bias appears in reasoning)}" />
      <Block math="\Delta Y \text{ flows through } \Delta\text{CoT}" />

      <Prose>
        <p>What they observed was the opposite:</p>
      </Prose>

      <Block math="\Delta\text{CoT} \approx 0 \quad \text{(bias absent from reasoning)}" />
      <Block math="\Delta Y \neq 0 \quad \text{(answer shifted by bias)}" />

      <Prose>
        <p>
          The bias moved the answer without leaving any trace in the reasoning. The chain of thought
          is not faithfully reporting what caused the output.
        </p>
      </Prose>

      <div style={{ marginTop: '40px', marginBottom: '8px' }}>
        <H3>The Truncation Test (Lanham et al., 2023)</H3>
      </div>

      <Prose>
        <p>
          Lanham et al. took a different approach: instead of injecting biases, they asked what
          happens when you remove the reasoning.<Cite id="lanham2023" /> If CoT is causally necessary
          for the correct answer, then truncating or corrupting the chain of thought should cause
          accuracy to drop. If it's post-hoc, accuracy should be unaffected because the model had
          already "committed" to its answer before generating the reasoning.
        </p>
        <p>
          They tested three perturbations: early answering (forcing the model to answer after only
          k steps), paraphrasing (replacing reasoning steps with semantically similar alternatives),
          and adding mistakes (inserting errors into intermediate steps). The result depended on
          model size and task type. Smaller models and harder tasks showed more faithful CoT:
          truncation caused accuracy to drop. Larger models on tasks they could solve without CoT
          showed approximately unchanged accuracy under truncation, consistent with post-hoc
          generation.
        </p>
        <p>
          This gave rise to what they called the <strong>inverse scaling hypothesis</strong> for
          faithfulness: in their evaluations, models that could solve problems without CoT
          increasingly generated reasoning that did not causally drive their outputs. Faithfulness
          varied by model, task, and perturbation type — appearing to peak at intermediate scale in
          some settings, where tasks are hard enough that the model genuinely needs to reason through
          them. This is a hypothesis about an observed pattern, not a universal law.
        </p>
      </Prose>

      <div style={{ marginTop: '40px', marginBottom: '8px' }}>
        <H3>Causal Mediation Analysis</H3>
      </div>

      <Prose>
        <p>
          The most rigorous framework comes from causal mediation analysis. Define the following:
          <Inline math="X_0" /> is the original input, <Inline math="X_1" /> is the input with a
          bias applied, <Inline math="R_0" /> is the CoT generated on <Inline math="X_0" />,{' '}
          <Inline math="R_1" /> is the CoT generated on <Inline math="X_1" />, and{' '}
          <Inline math="Y_{ij}" /> is the output when the input is <Inline math="X_i" /> and the
          reasoning is <Inline math="R_j" />. The <strong>Total Effect</strong> of the intervention
          is:
        </p>
      </Prose>

      <Block math="\text{TE} = Y_{11} - Y_{00}" />

      <Prose>
        <p>
          The <strong>Direct Effect</strong> — the input's influence on output without going through
          CoT — is measured by applying the biased input <Inline math="X_1" /> while holding the
          CoT fixed at <Inline math="R_0" />:
        </p>
      </Prose>

      <Block math="\text{DE} = Y_{10} - Y_{00}" />

      <Prose>
        <p>
          If the output changes even when the reasoning is unchanged, the input is affecting the
          output through a pathway that bypasses the CoT. The <strong>Indirect Effect</strong> —
          the input's influence flowing through CoT — is:
        </p>
      </Prose>

      <Block math="\text{IE} = \text{TE} - \text{DE}" />

      <Prose>
        <p>
          For a faithful chain of thought, the indirect effect should dominate:{' '}
          <Inline math="\text{IE} \approx \text{TE}" />, <Inline math="\text{DE} \approx 0" />.
          The reasoning mediates the output. For an unfaithful chain of thought, the direct effect
          dominates: <Inline math="\text{DE} \approx \text{TE}" />,{' '}
          <Inline math="\text{IE} \approx 0" />. The input determines the output through a pathway
          the reasoning never touches.
        </p>
        <p>
          This framework is not just theoretical. It operationalizes exactly what we mean when we ask
          whether a model is "using its reasoning" — and it gives us an empirical way to check, using
          activation patching and counterfactual generation. The faithfulness problem is not a vague
          philosophical worry. It has a precise causal definition and measurable signatures.
        </p>
      </Prose>
    </SectionWrapper>
  )
}
