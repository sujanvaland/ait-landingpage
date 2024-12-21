'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Coins, Users, Rocket, Brain, Shield, Zap } from 'lucide-react'

export function AboutSection() {
  const features = [
    { icon: Coins, title: "Social Earning", description: "Earn rewards for your social interactions, content creation, and community contributions." },
    { icon: Users, title: "Tech-Focused Community", description: "Connect with like-minded individuals passionate about AI, blockchain, and emerging technologies." },
    { icon: Shield, title: "Blockchain-Powered", description: "Enjoy transparent, secure rewards and governance through our blockchain integration." },
    { icon: Brain, title: "AI Integration", description: "Experience cutting-edge AI features that enhance your social media experience." },
    { icon: Rocket, title: "Innovation Hub", description: "Collaborate on groundbreaking projects and shape the future of technology." },
    { icon: Zap, title: "Rapid Growth", description: "Be part of a fast-growing ecosystem with endless opportunities for learning and earning." },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <section className="py-16 bg-gradient-to-b from-blue-900 to-black text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-bold text-center mb-8">About AITCircle</motion.h2>
          
          <motion.p variants={itemVariants} className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            AITCircle is a revolutionary social media platform that combines the power of community engagement with blockchain technology. We've created an ecosystem where your contributions are valued and rewarded, allowing you to earn while you socialize, learn, and innovate in the world of AI and blockchain.
          </motion.p>

          <motion.div variants={containerVariants} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {features.map((feature, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="bg-blue-800 border-2 border-blue-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center text-blue-300">
                      <feature.icon className="mr-2 h-6 w-6" />
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="bg-blue-950 p-8 rounded-lg mt-12">
            <h3 className="text-2xl font-bold text-blue-300 mb-4">Our Mission</h3>
            <p className="text-gray-300">
              At AITCircle, we're on a mission to revolutionize social media by creating a platform where every interaction has value. We aim to foster a community of innovators and enthusiasts who are rewarded for their contributions, creating a symbiotic ecosystem of learning, sharing, and earning. By leveraging blockchain technology and AI, we're building a transparent, secure, and intelligent social network that empowers users and drives technological advancement.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center mt-12">
            <p className="text-2xl font-bold text-blue-300">Join the Innovation</p>
            <p className="text-xl text-gray-300 mt-2">
              Be part of a community that's shaping the future of technology with AITCircle.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

