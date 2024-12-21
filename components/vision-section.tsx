'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion, Variants } from "framer-motion"

export function VisionSection() {
  const fadeIn : Variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  }
  
  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerChildren}
          className="space-y-8"
        >
          <motion.h2 variants={fadeIn} className="text-4xl font-bold text-center mb-8">Redefining Spirituality with K4M2A</motion.h2>
          
          <motion.p variants={fadeIn} className="text-xl text-gray-300 text-center mb-12">
            Experience a groundbreaking spiritual social media platform where creators and consumers thrive together. 
            At K4M2A, we reward content creators for their valuable insights and empower content consumers to grow 
            spiritually while earning rewards. Our token fuels a transformative ecosystem of connection, enlightenment, 
            and financial empowerment.
          </motion.p>

          <motion.div variants={fadeIn} className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white text-black">
              <CardHeader>
                <CardTitle className="text-lime-400">Empowering Creators</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Rewarding valuable spiritual insights and content creation within our ecosystem.</p>
              </CardContent>
            </Card>
            <Card className="bg-white text-black">
              <CardHeader>
                <CardTitle className="text-lime-400">Growing Consumers</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Enabling spiritual growth while offering financial rewards for active participation.</p>
              </CardContent>
            </Card>
            <Card className="bg-white text-black">
              <CardHeader>
                <CardTitle className="text-lime-400">Uniting Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Bringing together the global spiritual community through blockchain technology.</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeIn} className="bg-gray-900 p-8 rounded-lg mt-12">
            <h3 className="text-2xl font-bold text-lime-400 mb-4">Our Mission</h3>
            <p className="text-gray-300">
              Welcome to the future of decentralized spirituality with K4M2A! Our mission is to create a token that 
              empowers individuals, communities, and businesses to connect, share, and grow in the spiritual domain 
              while leveraging blockchain technology. K4M2A aims to become the cornerstone of a thriving ecosystem 
              that integrates spirituality, technology, and sustainability.
            </p>
          </motion.div>

          <motion.div variants={fadeIn} className="text-center mt-12">
            <p className="text-2xl font-bold text-lime-400">Join the Revolution</p>
            <p className="text-xl text-gray-300 mt-2">
              Stake, share, and grow with K4M2A as we unite the global spiritual community.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

