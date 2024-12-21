'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { motion, Variants } from "framer-motion"

export function FAQSection() {
  const faqs = [
    {
      question: "What is AITCircle?",
      answer: "AITCircle is a community-driven platform that brings together AI enthusiasts, blockchain innovators, and tech professionals. It provides a space for learning, collaboration, and development of cutting-edge AI and blockchain projects."
    },
    {
      question: "How can I join AITCircle?",
      answer: "You can join AITCircle by creating an account on our platform. Once registered, you'll have access to our forums, learning resources, project collaboration tools, and the ability to earn AITC tokens through various activities."
    },
    {
      question: "What is the AITC token and how is it used?",
      answer: "The AITC token is the native cryptocurrency of the AITCircle ecosystem. It's used for governance, accessing premium content, rewarding contributions, funding projects, and facilitating transactions within our marketplace."
    },
    {
      question: "How can I earn AITC tokens?",
      answer: "You can earn AITC tokens by contributing to the community through various activities such as participating in discussions, creating valuable content, completing learning modules, contributing to open-source projects, and participating in governance decisions."
    },
    {
      question: "What kind of projects can I find on AITCircle?",
      answer: "AITCircle hosts a wide range of projects focusing on AI and blockchain technologies. This includes machine learning models, decentralized applications (dApps), smart contract development, data science projects, and innovative combinations of AI and blockchain technologies."
    },
    {
      question: "How does AITCircle support project development?",
      answer: "AITCircle provides a collaborative environment with tools for project management, version control integration, and peer review. We also offer an incubator program for promising projects, providing resources, mentorship, and potential funding opportunities."
    },
    {
      question: "What learning resources are available on AITCircle?",
      answer: "AITCircle offers a variety of learning resources including tutorials, workshops, webinars, and comprehensive courses on AI and blockchain technologies. We also provide certification programs to help members showcase their skills."
    },
    {
      question: "How does governance work in AITCircle?",
      answer: "AITCircle implements a decentralized governance model where AITC token holders can propose and vote on platform decisions. This includes feature updates, fund allocations, and strategic directions for the platform."
    },
  ]

  const fadeIn: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-5xl font-bold text-center mb-12 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.div
          variants={fadeIn}
          initial="initial"
          animate="animate"
        >
          <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-700">
                <AccordionTrigger className="text-xl text-white hover:text-blue-300 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-lg text-white">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}

