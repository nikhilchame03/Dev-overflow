import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  
} from '@clerk/nextjs'
import './globals.css'
import React from 'react'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            
          </SignedIn>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}