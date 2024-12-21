'use client'

import { Button } from "@/components/ui/button"
import { motion, Variants } from "framer-motion"
import { FaTelegram, FaTwitter, FaDiscord, FaGithub, FaReddit } from 'react-icons/fa'

export function CommunitySection() {
  const socials = [
    { name: "Telegram", icon: FaTelegram, link: "https://t.me/AITCircle" },
    { name: "Twitter", icon: FaTwitter, link: "https://twitter.com/AITCircle" },
    { name: "Discord", icon: FaDiscord, link: "https://discord.gg/AITCircle" },
    { name: "GitHub", icon: FaGithub, link: "https://github.com/AITCircle" },
    { name: "Reddit", icon: FaReddit, link: "https://www.reddit.com/r/AITCircle" },
  ]

  const fadeInUp: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-16 bg-blue-950 text-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Join Our Thriving Community
        </motion.h2>
        <motion.p 
          className="text-xl text-center mb-12"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          Connect with fellow tech enthusiasts, innovators, and experts. Be part of the conversation shaping the future of AI and blockchain.
        </motion.p>
        <motion.div 
          className="flex flex-wrap justify-center gap-6"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          {socials.map((social, index) => (
            <Button
              key={index}
              size="lg"
              variant="outline"
              asChild
              className="bg-transparent hover:bg-blue-900 text-white font-bold border-2 border-white transition-colors duration-300"
            >
              <a href={social.link} target="_blank" rel="noopener noreferrer" className="flex items-center">
                <social.icon className="mr-2 h-5 w-5" />
                {social.name}
              </a>
            </Button>
          ))}
        </motion.div>
        <motion.div 
          className="mt-12 text-center"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
          <p className="mb-6">Subscribe to our newsletter for the latest updates, events, and opportunities.</p>
          <form className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-4 py-2 rounded-md text-blue-900 w-full sm:w-auto"
            />
            <Button type="submit" className="bg-blue-700 hover:bg-blue-800 text-white w-full sm:w-auto">
              Subscribe
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

