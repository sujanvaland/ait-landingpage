'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion,Variants } from "framer-motion"
import { Code, Brain, Rocket, Users, Shield, Coins, Book, BarChart } from 'lucide-react'

export function FeaturesSection() {
  const features = [
    { icon: Coins, title: "Earn While You Socialize", description: "Get rewarded for your posts, comments, likes, and shares." },
    { icon: Users, title: "Community-Driven Content", description: "Engage with and create content on AI, blockchain, and tech innovations." },
    { icon: Shield, title: "Decentralized Rewards", description: "Enjoy transparent, blockchain-based rewards for your contributions." },
    { icon: Rocket, title: "Innovator's Playground", description: "Collaborate on cutting-edge projects and earn for your innovations." },
    { icon: Book, title: "Learn and Earn", description: "Access educational content and get rewarded for your learning journey." },
    { icon: BarChart, title: "Social Gamification", description: "Level up your profile and unlock new earning opportunities as you engage." },
  ]

  const fadeInUp : Variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  }

  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Key Features of AITCircle
        </motion.h2>
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          {features.map((feature, index) => (
            <Card key={index} className="bg-gray-900 border-2 border-gray-700 hover:border-blue-500 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <feature.icon className="mr-2 h-6 w-6 text-blue-500" />
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

