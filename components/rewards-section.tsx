'use client'

import { motion, Variants } from "framer-motion"
import { Award, Video, FileText, Image, ThumbsUp, MessageSquare, Flag, Share2, UserPlus, Eye, Clock, PieChart, Calendar, Play } from 'lucide-react'

export function RewardsSection() {
  const rewardCategories = [
    { icon: UserPlus, title: "Signups", description: "Join and invite" },
    { icon: Video, title: "Video Content", description: "Post videos" },
    { icon: FileText, title: "Text Posts", description: "Create text content" },
    { icon: Image, title: "Image Content", description: "Share images" },
    { icon: ThumbsUp, title: "Likes", description: "Give and receive likes" },
    { icon: MessageSquare, title: "Comments", description: "Engage in discussions" },
    { icon: Flag, title: "Reporting", description: "Help moderate" },
    { icon: Share2, title: "Sharing", description: "Spread the word" },
    { icon: Eye, title: "Content Views", description: "Get your content seen" },
    { icon: Clock, title: "Platform Time", description: "Stay active" },
    { icon: PieChart, title: "Polls", description: "Create and vote" },
    { icon: Calendar, title: "Events", description: "Host and attend" },
    { icon: Play, title: "Video Watch Time", description: "Watch and learn" },
  ]

  const fadeInUp : Variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  }

  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Earn While You Socialize
        </motion.h2>
        <motion.p 
          className="text-xl text-center mb-12 text-gray-300"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          AITCircle rewards you for every interaction. Whether you're creating content or engaging with others, there's an opportunity to earn!
        </motion.p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {rewardCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-blue-900 flex items-center justify-center mb-4">
                <category.icon className="w-8 h-8 text-blue-300" />
              </div>
              <h3 className="font-semibold mb-1 text-blue-300">{category.title}</h3>
              <p className="text-sm text-gray-400">{category.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

