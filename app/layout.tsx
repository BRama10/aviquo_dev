import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import {Providers} from "./providers";

import { SessionProvider } from "next-auth/react"
import { auth } from '@/auth';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Aviquo',
  description: 'Your path to the future, made by students for students',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth();

  if (session?.user) {
    session.user = {
      name: session.user.name,
      email: session.user.email,
      image: session.user.image,
    }
  }

  
  return (
    <html lang="en">
      <SessionProvider session={session}>
      <body className={inter.className}>
        
      <Providers>
     
        {children}
      </Providers>
      </body>
      </SessionProvider>
    </html>
  )
}
