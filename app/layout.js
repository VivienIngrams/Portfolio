import './globals.css'
import { Inter } from 'next/font/google'

import NavBar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Vivien Ingrams Portfolio',
  description: 'Frontend Web Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}</body>
    </html>
  )
}
