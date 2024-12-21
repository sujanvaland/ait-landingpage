'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { PaymentMethodDialog } from "./payment-method-dialog"

export function PresaleCard() {
  const [dialogOpen, setDialogOpen] = useState(false)
  const [selectedPayment, setSelectedPayment] = useState<{ chain: string; token: string } | null>(null)
  const [raisedAmount, setRaisedAmount] = useState(2212848)
  const [activeUsers, setActiveUsers] = useState(25000)

  const handlePaymentSelect = (chain: string, token: string) => {
    setSelectedPayment({ chain, token })
  }

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate raised amount increase
      setRaisedAmount(prevAmount => {
        const increase = Math.floor(Math.random() * 1000) + 100 // Random increase between 100 and 1099
        return Math.min(prevAmount + increase, 3020000) // Cap at max amount
      })

      // Simulate active users fluctuation
      setActiveUsers(prevUsers => {
        const change = Math.floor(Math.random() * 21) - 10 // Random change between -10 and 10
        return Math.max(prevUsers + change, 20000) // Ensure it doesn't go below 20,000
      })
    }, 3000) // Update every 3 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="w-full max-w-md overflow-hidden">
        {/* Header */}
        <div className="bg-gray-900 p-4 flex justify-between items-center">
          <span className="text-orange-400 font-bold text-lg">PRESALE ACTIVE</span>
          <div className="w-8 h-8 bg-orange-400 rounded-full" />
        </div>

        {/* Raised Amount Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-4 text-center">
          <div className="text-gray-200 text-base mb-1">RAISED</div>
          <div className="text-3xl font-bold mb-2">
            <AnimatePresence mode="wait">
              <motion.span
                key={raisedAmount}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-white"
              >
                ${raisedAmount.toLocaleString()}
              </motion.span>
            </AnimatePresence>
            <span className="text-orange-400"> / $3,020,000</span>
          </div>
          <div className="text-gray-200 text-sm">Buy in before price increases!</div>
        </div>

        {/* Price Bar */}
        <div className="bg-blue-700 p-3 flex items-center gap-3">
          <Image
            src="/images/eth.png"
            alt="Mascot"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="flex-1 flex justify-between text-white text-sm">
            <span>Now: $0.000081</span>
            <span>Next Stage Price: $0.000085</span>
          </div>
        </div>

        <CardContent className="p-4 bg-white">
          <div className="space-y-4">
            {/* You Pay Section */}
            <div>
              <label className="text-sm text-gray-600 mb-2 block">You Pay</label>
              <div className="relative">
                <input
                  type="number"
                  className="w-full bg-white border-2 border-gray-200 rounded-lg p-3 focus:border-blue-400 transition-colors"
                  placeholder="0"
                />
                <Button 
                  variant="outline"
                  className="absolute right-2 top-2 bg-orange-400 text-white border-none hover:bg-orange-500"
                  onClick={() => setDialogOpen(true)}
                >
                  {selectedPayment ? selectedPayment.token : 'SELECT PAYMENT'} ▼
                </Button>
              </div>
            </div>

            {/* You Receive Section */}
            <div>
              <label className="text-sm text-gray-600 mb-2 block">You Receive</label>
              <div className="relative">
                <input
                  type="number"
                  className="w-full bg-white border-2 border-gray-200 rounded-lg p-3"
                  placeholder="0"
                  readOnly
                />
                <div className="absolute right-2 top-2 bg-gray-100 px-3 py-1 rounded-md flex items-center">
                  <Image
                    src="/images/eth.png"
                    alt="DOGIZ Token"
                    width={24}
                    height={24}
                    className="mr-2 rounded-full"
                  />
                  DOGIZ
                </div>
              </div>
            </div>

            {/* Select Payment Button */}
            <Button 
              className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 text-base"
              onClick={() => setDialogOpen(true)}
            >
              SELECT PAYMENT
            </Button>

            {/* Active Users */}
            <div className="text-center text-sm text-gray-600">
              <span>Active Users: </span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={activeUsers}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                  className="font-bold"
                >
                  {activeUsers.toLocaleString()}+
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
        </CardContent>
      </Card>

      <PaymentMethodDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        onSelect={handlePaymentSelect}
      />
    </motion.div>
  )
}

