'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { useAccount, useConnect, useDisconnect } from "wagmi"
import { InjectedConnector } from "wagmi/connectors/injected"
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu"

export function NavBar() {
  const [mounted, setMounted] = useState(false)
  const { address, isConnected } = useAccount()
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })
  const { disconnect } = useDisconnect()

  useEffect(() => setMounted(true), [])

  const scrollToSection = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const shortenAddress = (addr: string) => {
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`
  }

  const handleConnect = async (wallet: 'metamask' | 'trustwallet') => {
    try {
      await connect()
    } catch (error) {
      console.error('Failed to connect wallet:', error)
    }
  }

  return (
    <nav className="fixed top-0 w-full z-50 bg-blue-900/80 backdrop-blur-md text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center text-2xl font-bold">
            <Image 
              src="/images/aitlogo.jpg"
              alt="AITCircle Logo"
              width={180}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" onClick={scrollToSection('about')} className="text-white hover:text-blue-400">About</a>
            <a href="#features" onClick={scrollToSection('features')} className="text-white hover:text-blue-400">Features</a>
            <a href="#how-it-works" onClick={scrollToSection('how-it-works')} className="text-white hover:text-blue-400">How It Works</a>
            <a href="#roadmap" onClick={scrollToSection('roadmap')} className="text-white hover:text-blue-400">Roadmap</a>
            <a href="#tokenomics" onClick={scrollToSection('tokenomics')} className="text-white hover:text-blue-400">Tokenomics</a>
            <a href="#faq" onClick={scrollToSection('faq')} className="text-white hover:text-blue-400">FAQ</a>
            <a href="#community" onClick={scrollToSection('community')} className="text-white hover:text-blue-400">Community</a>
          </div>

          {mounted && (
            isConnected ? (
              <Button 
                variant="outline" 
                onClick={() => disconnect()}
                className="bg-blue-700 text-white hover:bg-blue-800"
              >
                {shortenAddress(address || '')}
              </Button>
            ) : (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="default" className="bg-blue-700 text-white hover:bg-blue-800">
                    Connect Wallet
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" alignOffset={-5} className="w-[200px] bg-white" forceMount>
                  <DropdownMenuItem className="text-gray-900 hover:bg-gray-100" onClick={() => handleConnect('metamask')}>
                    MetaMask
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-gray-900 hover:bg-gray-100" onClick={() => handleConnect('trustwallet')}>
                    Trust Wallet
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )
          )}
        </div>
      </div>
    </nav>
  )
}

