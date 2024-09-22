'use client'

import { usePathname } from 'next/navigation'
import { parseCookies } from 'nookies'
import { redirect } from 'next/navigation'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname() // 현재 경로를 가져옴
  const cookies = parseCookies()
  const authToken = cookies['auth-token']

  console.log('Current Pathname:', pathname)
  console.log('Auth Token:', authToken)

  if (!authToken && pathname !== '/login') {
    redirect('/login')
  }

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
