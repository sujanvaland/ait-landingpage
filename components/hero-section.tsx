'use client'

import { Button } from "@/components/ui/button"
import { PresaleCard } from "./presale-card"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-blue-950 to-blue-800 text-white">
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1
              className="text-6xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="text-white">Connect, Share, and Earn</span>
              <br />
              <span className="text-blue-400">Social Media </span>
              <span className="text-white"> That Pays</span>
            </motion.h1>
            
            <motion.p
              className="text-xl text-gray-300 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Join a revolutionary social media platform that rewards your engagement.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button variant="default" size="lg" className="bg-blue-700 text-white hover:bg-blue-800">
                START EARNING NOW
              </Button>
              <Button variant="default" size="lg" className="text-white border-white hover:bg-blue-800">
                JOIN COMMUNITY
              </Button>
            </motion.div>

            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <p className="text-gray-400">Active Users Earning:</p>
              <p className="text-3xl font-bold text-blue-400">25,000+</p>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <PresaleCard />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

