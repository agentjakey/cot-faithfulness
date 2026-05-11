import dynamic from 'next/dynamic'
import { Hero } from '@/components/sections/Hero'
import { Section1TheIdea } from '@/components/sections/Section1TheIdea'
import { Section2TheMath } from '@/components/sections/Section2TheMath'
import { Section4Safety } from '@/components/sections/Section4Safety'
import { Section5Research } from '@/components/sections/Section5Research'
import { Section6StartHere } from '@/components/sections/Section6StartHere'
import { ReferenceList } from '@/components/ui/ReferenceList'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { Lead, SectionHeading } from '@/components/ui/Typography'

const CausalPathwayExplorer = dynamic(
  () => import('@/components/visualizations/CausalPathwayExplorer').then(m => ({ default: m.CausalPathwayExplorer })),
  { ssr: false }
)
const BiasInjectionSimulator = dynamic(
  () => import('@/components/visualizations/BiasInjectionSimulator').then(m => ({ default: m.BiasInjectionSimulator })),
  { ssr: false }
)
const TruncationEffectCurve = dynamic(
  () => import('@/components/visualizations/TruncationEffectCurve').then(m => ({ default: m.TruncationEffectCurve })),
  { ssr: false }
)

export default function Home() {
  return (
    <div>
      <Hero />

      <Section1TheIdea />

      <Section2TheMath />

      {/* 03 - Lab */}
      <SectionWrapper id="lab" label="Lab" fullWidth>
        <div className="max-w-[720px] mx-auto px-6 mb-12">
          <SectionHeading n={3}>Lab</SectionHeading>
          <Lead>
            Three interactive visualizations of CoT faithfulness. The first shows the causal
            diagram structure — drag the bias slider and watch the causal pathways shift between
            faithful and unfaithful configurations. The second demonstrates the bias injection
            test: watch how a sycophantic signal rewrites the chain of thought without ever
            acknowledging the cause. The third shows the truncation effect: how accuracy changes
            as reasoning is progressively removed across task types and model sizes.
          </Lead>
        </div>

        {/* Lab 3.1: Causal Pathway Explorer */}
        <div className="w-full px-8 pb-2" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p
            className="font-mono text-accent"
            style={{ fontSize: '11px', letterSpacing: '0.08em', marginBottom: '20px', textTransform: 'uppercase' }}
          >
            3.1: Causal Pathway Explorer
          </p>
          <CausalPathwayExplorer />
        </div>

        <div className="border-t border-border" style={{ margin: '48px 0' }} />

        {/* Lab 3.2: Bias Injection Simulator */}
        <div className="w-full px-8 pb-2" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p
            className="font-mono text-accent"
            style={{ fontSize: '11px', letterSpacing: '0.08em', marginBottom: '20px', textTransform: 'uppercase' }}
          >
            3.2: Bias Injection Simulator
          </p>
          <BiasInjectionSimulator />
        </div>

        <div className="border-t border-border" style={{ margin: '48px 0' }} />

        {/* Lab 3.3: Truncation Effect Curve */}
        <div className="w-full px-8 pb-10" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p
            className="font-mono text-accent"
            style={{ fontSize: '11px', letterSpacing: '0.08em', marginBottom: '20px', textTransform: 'uppercase' }}
          >
            3.3: Truncation Effect Curve
          </p>
          <TruncationEffectCurve />
        </div>
      </SectionWrapper>

      <Section4Safety />

      <Section5Research />

      <Section6StartHere />

      <div className="max-w-[720px] mx-auto px-6 pb-20">
        <ReferenceList />
      </div>
    </div>
  )
}
