'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion, Variants } from "framer-motion"
import { Coins, Shield, Gift } from 'lucide-react'

export function StakeSection() {
  const stakeInfo = [
    { icon: Coins, title: "Earn Rewards", description: "Receive additional tokens as rewards for securing the network." },
    { icon: Shield, title: "Support the Ecosystem", description: "Contribute to the stability and growth of the K4M2A community." },
    { icon: Gift, title: "Get Exclusive Benefits", description: "Unlock premium features and content by staking your tokens." },
  ]

  const fadeInUp : Variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  }

  return (
    <section className="py-16 bg-white text-black">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Stake K4M2A
        </motion.h2>
        <motion.p 
          className="text-xl text-center mb-12"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          Maximize your investment by staking K4M2A tokens!
        </motion.p>
        <motion.div 
          className="grid md:grid-cols-3 gap-8 mb-12"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          {stakeInfo.map((info, index) => (
            <Card key={index} className="bg-gray-100 border-2 border-lime-400">
              <CardHeader>
                <CardTitle className="text-lime-400 flex items-center">
                  <info.icon className="mr-2" />
                  {info.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{info.description}</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>
        <motion.div 
          className="text-center"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <p className="mb-4">Simply connect your wallet, select the staking plan that suits you, and start earning today!</p>
          <Button size="lg" className="bg-lime-400 text-black hover:bg-lime-500">Start Staking Now</Button>
        </motion.div>
      </div>
    </section>
  )
}

