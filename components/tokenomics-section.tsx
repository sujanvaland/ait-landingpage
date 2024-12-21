'use client'

import { motion, Variants } from "framer-motion"
import { useState } from 'react'
import { Coins, Users, Rocket, ShieldCheck, Lightbulb, Award, ShoppingBag, Globe, TrendingUp } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const fadeInUp : Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export function TokenomicsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const tokenomics = [
    { name: "Community Rewards", value: 30, color: "#3B82F6", icon: Award },
    { name: "Platform Development", value: 25, color: "#10B981", icon: Rocket },
    { name: "ICO", value: 20, color: "#6366F1", icon: Coins },
    { name: "Team and Advisors", value: 15, color: "#F59E0B", icon: Users },
    { name: "Reserve Fund", value: 10, color: "#8B5CF6", icon: ShieldCheck },
  ]

  const useCases = [
    { icon: Coins, title: "Platform Currency", description: "Use tokens for all transactions within the platform, including premium features and marketplace purchases." },
    { icon: Award, title: "Reward System", description: "Earn tokens for creating content, engaging with the community, and contributing to platform growth." },
    { icon: Lightbulb, title: "Access to Premium Content", description: "Unlock exclusive content, courses, and live sessions with experts using tokens." },
    { icon: ShoppingBag, title: "Marketplace Transactions", description: "Buy and sell products, services, and user-generated content in the marketplace." },
    { icon: Users, title: "Community Governance", description: "Participate in platform decisions and vote on new features or initiatives using token-based voting." },
    { icon: Rocket, title: "ICO Participation", description: "Invest in the platform's growth during the Initial Coin Offering (ICO) phases." },
    { icon: ShieldCheck, title: "Staking for Benefits", description: "Stake tokens to unlock additional platform features or earn passive rewards." },
    { icon: Globe, title: "Cross-Border Transactions", description: "Facilitate easy international payments for global services and products." },
    { icon: TrendingUp, title: "Token Value Growth", description: "Benefit from potential token value increase as the platform grows and gains more adoption." },
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-blue-900 to-black text-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          AITCircle Tokenomics
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div 
            className="bg-blue-800 rounded-lg p-6 shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Token Distribution</h3>
            <div className="space-y-4">
              {tokenomics.map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <item.icon className="w-6 h-6 mr-2" style={{ color: item.color }} />
                  <div className="flex-grow">
                    <div className="flex justify-between mb-1">
                      <span>{item.name}</span>
                      <span>{item.value}%</span>
                    </div>
                    <div className="w-full bg-blue-200 rounded-full h-2.5">
                      <div 
                        className="h-2.5 rounded-full" 
                        style={{ width: `${item.value}%`, backgroundColor: item.color }}
                      ></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="bg-blue-800 rounded-lg p-6 shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Token Details</h3>
            <ul className="space-y-2">
              <li><span className="font-semibold">Name:</span> AITCircle Token (AITC)</li>
              <li><span className="font-semibold">Total Supply:</span> 1,000,000,000 AITC</li>
              <li><span className="font-semibold">Blockchain:</span> Ethereum (ERC-20)</li>
              <li><span className="font-semibold">Type:</span> Utility Token</li>
            </ul>
            <div className="mt-6">
              <h4 className="text-xl font-semibold mb-2">Key Features</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Governance rights</li>
                <li>Platform transaction medium</li>
                <li>Staking rewards</li>
                <li>Community incentives</li>
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.h3 
          className="text-3xl font-bold text-center mb-8"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          Token Use Cases
        </motion.h3>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="relative group perspective"
            >
              <Card className="bg-white border-blue-300 border text-blue-900">
                <CardHeader>
                  <CardTitle className="text-blue-800 flex items-center">
                    <useCase.icon className="mr-2" />
                    {useCase.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{useCase.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  )
}

