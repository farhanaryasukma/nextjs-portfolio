import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Farhan Portfolio',
  description: 'portfolio website showcasing my project and experience',
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth'>
      <head>
      <link rel="stylesheet" href="devicon.min.css" />
      </head>
      <body className={`${inter.className} max-w-screen-2xl m-auto`}>{children}</body>
    </html>
  )
}
