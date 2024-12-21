'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Lightbulb, Rocket, Code, Award, Star, ShoppingBag, TrendingUp, DollarSign, Pause, Play } from 'lucide-react'

export function RoadmapSection() {
  const [activePhase, setActivePhase] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  const milestones = [
    { 
      phase: "Phase 1", 
      title: "Concept & Whitepaper",
      icon: Lightbulb,
      color: "#FCD34D",
      items: [
        "Define mission and vision",
        "Identify key features",
        "Draft comprehensive whitepaper",
        "Outline technical architecture",
        "Introduce team and compliance measures"
      ] 
    },
    { 
      phase: "Phase 2", 
      title: "Launch ICO",
      icon: Rocket,
      color: "#60A5FA",
      items: [
        "Set up ICO platform",
        "Execute marketing strategies",
        "Conduct pre-sale and public sale",
        "Implement security measures",
        "Engage community through AMAs"
      ] 
    },
    { 
      phase: "Phase 3", 
      title: "Develop Platform",
      icon: Code,
      color: "#34D399",
      items: [
        "Implement platform design and UX",
        "Develop core features",
        "Integrate AI capabilities",
        "Set up scalable infrastructure",
        "Launch beta version"
      ] 
    },
    { 
      phase: "Phase 4", 
      title: "Reward System",
      icon: Award,
      color: "#F472B6",
      items: [
        "Implement token-based rewards",
        "Create engagement incentives",
        "Develop token utilization features",
        "Introduce gamification elements",
        "Launch referral program"
      ] 
    },
    { 
      phase: "Phase 5", 
      title: "Premium Features",
      icon: Star,
      color: "#A78BFA",
      items: [
        "Introduce exclusive content",
        "Develop subscription plans",
        "Implement AI-driven recommendations",
        "Create advanced interaction features",
        "Launch business accounts"
      ] 
    },
    { 
      phase: "Phase 6", 
      title: "Marketplace",
      icon: ShoppingBag,
      color: "#FB923C",
      items: [
        "Build decentralized marketplace",
        "Enable peer-to-peer transactions",
        "Integrate secure payment gateways",
        "Implement promotional features",
        "Develop review and rating system"
      ] 
    },
    { 
      phase: "Phase 7", 
      title: "Scale Platform",
      icon: TrendingUp,
      color: "#4ADE80",
      items: [
        "Optimize for increased user base",
        "Implement internationalization",
        "Execute global growth strategies",
        "Launch mobile apps (iOS/Android)",
        "Expand strategic partnerships"
      ] 
    },
    { 
      phase: "Phase 8", 
      title: "Exchange Listing",
      icon: DollarSign,
      color: "#E879F9",
      items: [
        "Apply for major exchange listings",
        "Complete listing requirements",
        "Engage with market makers",
        "Provide clear trading support",
        "Monitor and optimize performance"
      ] 
    },
  ]

  const nextPhase = useCallback(() => {
    setActivePhase((prevPhase) => (prevPhase + 1) % milestones.length)
  }, [milestones.length])

  useEffect(() => {
    let intervalId: NodeJS.Timeout

    if (isPlaying) {
      intervalId = setInterval(nextPhase, 5000) // Change milestone every 5 seconds
    }

    return () => {
      if (intervalId) clearInterval(intervalId)
    }
  }, [isPlaying, nextPhase])

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev)
  }

  return (
    <section className="py-16 bg-gradient-to-b from-blue-900 to-black text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          AITCircle Development Roadmap
        </motion.h2>
        
        <div className="relative">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-blue-500 transform -translate-y-1/2"></div>
          <div className="flex justify-between relative z-10">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                className={`w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ${activePhase === index ? 'scale-150' : 'scale-100'}`}
                style={{ backgroundColor: milestone.color }}
                onClick={() => {
                  setActivePhase(index)
                  setIsPlaying(false)
                }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <milestone.icon className="w-5 h-5 text-white" />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePhase}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-blue-800 rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-4" style={{ color: milestones[activePhase].color }}>
                {milestones[activePhase].phase}: {milestones[activePhase].title}
              </h3>
              <ul className="space-y-2">
                {milestones[activePhase].items.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center"
                  >
                    <div className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: milestones[activePhase].color }}></div>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center mt-8">
          <motion.button
            onClick={togglePlayPause}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
          </motion.button>
        </div>

        <motion.p 
          className="text-center mt-4 text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {isPlaying ? "Auto-playing roadmap. Click to pause." : "Paused. Click to resume auto-play."}
        </motion.p>
      </div>
    </section>
  )
}

