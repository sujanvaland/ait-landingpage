'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import { motion } from "framer-motion"

interface PaymentMethodDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSelect: (chain: string, token: string) => void
}

export function PaymentMethodDialog({ open, onOpenChange, onSelect }: PaymentMethodDialogProps) {
  const chains = [
    { id: 'eth', name: 'ETH', network: 'ETHEREUM MAINNET' },
    { id: 'bsc', name: 'BSC', network: 'BINANCE SMART CHAIN' },
    { id: 'sol', name: 'SOL', network: 'SOLANA' },
    { id: 'card', name: 'CARD', network: 'CREDIT/DEBIT CARD' },
  ]

  const tokens = {
    eth: [
      { symbol: 'ETH', name: 'Ethereum', icon: '/images/eth.svg?height=32&width=32' },
      { symbol: 'USDT', name: 'Tether USD', icon: '/images/placeholder.svg?height=32&width=32' },
      { symbol: 'USDC', name: 'USDCoin', icon: '/images/placeholder.svg?height=32&width=32' },
    ],
    bsc: [
      { symbol: 'BNB', name: 'Binance Coin', icon: '/images/placeholder.svg?height=32&width=32' },
      { symbol: 'BUSD', name: 'Binance USD', icon: '/images/placeholder.svg?height=32&width=32' },
      { symbol: 'USDT', name: 'Tether USD', icon: '/images/placeholder.svg?height=32&width=32' },
    ],
    sol: [
      { symbol: 'SOL', name: 'Solana', icon: '/images/placeholder.svg?height=32&width=32' },
      { symbol: 'USDC', name: 'USDCoin', icon: '/images/placeholder.svg?height=32&width=32' },
      { symbol: 'USDT', name: 'Tether USD', icon: '/images/placeholder.svg?height=32&width=32' },
    ],
    card: [
      { symbol: 'USD', name: 'US Dollar', icon: '/images/placeholder.svg?height=32&width=32' },
      { symbol: 'EUR', name: 'Euro', icon: '/images/placeholder.svg?height=32&width=32' },
      { symbol: 'GBP', name: 'British Pound', icon: '/images/placeholder.svg?height=32&width=32' },
    ],
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center">SELECT PAYMENT METHOD</DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <Tabs defaultValue="eth" className="w-full">
            <TabsList className="grid grid-cols-4 gap-2 bg-gray-950 p-1">
              {chains.map((chain) => (
                <TabsTrigger
                  key={chain.id}
                  value={chain.id}
                  className="data-[state=active]:bg-orange-400 data-[state=active]:text-white"
                >
                  {chain.name}
                </TabsTrigger>
              ))}
            </TabsList>
            {chains.map((chain) => (
              <TabsContent key={chain.id} value={chain.id}>
                <div className="text-sm text-gray-500 mb-4">{chain.network}</div>
                <div className="space-y-2">
                  {tokens[chain.id as keyof typeof tokens].map((token) => (
                    <motion.button
                      key={token.symbol}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg p-4 flex items-center gap-3 transition-colors"
                      onClick={() => {
                        onSelect(chain.id, token.symbol)
                        onOpenChange(false)
                      }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Image
                        src="/images/eth.png"
                        alt={token.name}
                        width={32}
                        height={32}
                        className="rounded-full"
                      />
                      <div className="flex flex-col items-start">
                        <span className="font-bold">{token.symbol}</span>
                        <span className="text-sm text-gray-300">{token.name}</span>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  )
}

