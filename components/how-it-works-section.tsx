'use client'

import { Button } from "@/components/ui/button"
import { motion, Variants } from "framer-motion"
import { Users, Lightbulb, Rocket, Award } from 'lucide-react'

export function HowItWorksSection() {
  const steps = [
    { icon: Users, title: "Join the Community", description: "Sign up and create your AITCircle profile to connect with tech enthusiasts and innovators." },
    { icon: Lightbulb, title: "Explore and Learn", description: "Access our knowledge base, participate in discussions, and attend virtual events and workshops." },
    { icon: Rocket, title: "Contribute and Collaborate", description: "Share your ideas, start or join projects, and collaborate with other members on innovative solutions." },
    { icon: Award, title: "Earn Rewards", description: "Get recognized for your contributions with AITCircle tokens, which can be used within the ecosystem." },
  ]

  const fadeInUp : Variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  }

  return (
    <section className="py-16 bg-white text-blue-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          How AITCircle Works
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              className="text-center"
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                <step.icon size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.div 
          className="text-center mt-12"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">Get Started Now</Button>
        </motion.div>
      </div>
    </section>
  )
}

