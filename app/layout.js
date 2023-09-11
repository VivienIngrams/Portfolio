'use client'

import './globals.css'

import NavBar from '@/components/NavBar'
import { ThemeProvider } from 'next-themes'

export const metadata = {
  title: 'Vivien Ingrams Portfolio',
  description: 'Frontend Web Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider enableSystem={true} attribute="class">
        <NavBar />
        {children}
        </ThemeProvider>
        </body>
    </html>
  )
}
