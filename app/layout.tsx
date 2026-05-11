import type { Metadata } from 'next'
import { Sora, Lora, DM_Mono } from 'next/font/google'
import { Nav } from '@/components/ui/Nav'
import { ReadingProgress } from '@/components/ui/ReadingProgress'
import 'katex/dist/katex.min.css'
import './globals.css'

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
})

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'CoT Faithfulness — Chain-of-Thought Reasoning and Why It Might Lie',
  description:
    'An interactive deep-dive into chain-of-thought faithfulness: why the visible reasoning of language models may not cause their outputs, and why this matters for AI safety.',
  openGraph: {
    title: 'CoT Faithfulness',
    description: 'When a model shows you its work, can you trust it?',
    type: 'article',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CoT Faithfulness',
    description: 'When a model shows you its work, can you trust it?',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${lora.variable} ${dmMono.variable}`}
    >
      <body className="bg-background text-primary font-sans antialiased">
        <ReadingProgress />
        <Nav />
        <main style={{ paddingTop: '56px' }}>{children}</main>
      </body>
    </html>
  )
}
