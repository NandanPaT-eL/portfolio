import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nandan Patel — AI Engineer',
  description: 'AI Engineer specializing in Computer Vision, Generative Models, Agentic AI, and Embedded Systems. ISRO Intern. Robofest Finalist. 5G Hackathon Winner.',
  keywords: ['AI Engineer', 'Machine Learning', 'Computer Vision', 'Deep Learning', 'PyTorch', 'ISRO', 'Nandan Patel'],
  authors: [{ name: 'Nandan Patel' }],
  openGraph: {
    title: 'Nandan Patel — AI Engineer',
    description: 'Building intelligent systems from edge devices to language models.',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#000000" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Nandan Alpesh Patel',
            jobTitle: 'AI Engineer',
            worksFor: { '@type': 'Organization', name: 'ISRO Space Applications Centre' },
            alumniOf: { '@type': 'CollegeOrUniversity', name: 'G. H. Patel College of Engineering and Technology' },
            url: 'https://nandanpatel.dev',
            sameAs: ['https://github.com/NandanPaT-eL', 'https://www.linkedin.com/in/patel-nandan'],
          })
        }} />
      </head>
      <body>{children}</body>
    </html>
  )
}
