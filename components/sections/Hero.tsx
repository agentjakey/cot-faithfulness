'use client'

import { motion } from 'framer-motion'
import { AudienceTrack } from '@/components/ui/AudienceTrack'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
}

export function Hero() {
  return (
    <section id="hero" className="border-b border-border">
      <motion.div
        className="mx-auto px-8"
        style={{ maxWidth: '680px', paddingTop: '120px', paddingBottom: '80px' }}
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p
          variants={item}
          className="font-serif italic text-secondary"
          style={{ fontSize: '17px', lineHeight: 1.7, marginBottom: '48px' }}
        >
          "The model shows its work. But whose work is it showing?"
        </motion.p>

        <motion.div variants={item}>
          <h1
            className="font-sans font-bold text-primary"
            style={{
              fontSize: '64px',
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
            }}
          >
            CoT Faithfulness
          </h1>
          <p
            className="font-sans font-normal text-secondary"
            style={{ fontSize: '22px', marginTop: '12px', lineHeight: 1.4 }}
          >
            Chain-of-Thought Reasoning and Why It Might Lie
          </p>
        </motion.div>

        <motion.p
          variants={item}
          className="font-serif text-primary"
          style={{ fontSize: '19px', lineHeight: 1.85, marginTop: '40px' }}
        >
          When you ask a language model a difficult question, many systems can be prompted
          or trained to produce step-by-step reasoning traces or explanations. The model
          walks through sub-problems, checks its work, and produces a conclusion along with
          an account of how it got there. This kind of step-by-step output is called
          chain-of-thought reasoning, and it was a genuine breakthrough. But a visible
          reasoning process is not the same as a transparent one, and the gap between
          them has consequences that go all the way to AI safety.
        </motion.p>

        <motion.div
          variants={item}
          className="flex flex-wrap items-center gap-4 border-t border-border"
          style={{ marginTop: '40px', paddingTop: '32px' }}
        >
          <AudienceTrack />
          <span
            className="font-sans text-secondary"
            style={{ fontSize: '12px', marginLeft: '16px' }}
          >
            ~14 min read
          </span>
        </motion.div>
      </motion.div>
    </section>
  )
}
