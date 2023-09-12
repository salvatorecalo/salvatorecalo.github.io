import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Salvatore Calò - Home Page',
  description: 'Sviluppatore web junior e graphic/ui/ux/web designer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
