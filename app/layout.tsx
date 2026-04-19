import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Katbileras',
  description: 'Tu espacio familiar para organizar todo lo que necesitan',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
