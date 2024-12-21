'use client'

import './globals.css'
import { Inter } from 'next/font/google'
import { WagmiConfig, createConfig, configureChains, mainnet } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'

const inter = Inter({ subsets: ['latin'] })

const { chains, publicClient } = configureChains(
  [mainnet],
  [publicProvider()]
)

const config = createConfig({
  autoConnect: true,
  publicClient,
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
       <WagmiConfig config={config}> 
        <body className={inter.className}>{children}</body>
      </WagmiConfig>
    </html>
  )
}

