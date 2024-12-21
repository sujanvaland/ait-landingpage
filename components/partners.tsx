'use client'

import Image from "next/image"
import { useEffect, useRef } from "react"

export function Partners() {
  const partners = [
    { name: "CoinTelegraph", text: "The First Telegram ICO" },
    { name: "Be In Crypto", text: "1m+ Users" },
    { name: "Bitcoin.com", text: "First ICO On Telegram" },
    { name: "MSN", text: "First On Telegram Ecosystem" },
    { name: "BTC Echo", text: "Hamster Kombat Challenger" },
    { name: "Coinspeaker", text: "First ICO By Viral Game" },
  ]

  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (scrollContainer) {
      const scrollContent = scrollContainer.firstElementChild as HTMLElement
      if (scrollContent) {
        scrollContainer.appendChild(scrollContent.cloneNode(true))
        
        const scroll = () => {
          if (scrollContainer.scrollLeft >= scrollContent.offsetWidth) {
            scrollContainer.scrollLeft = 0
          } else {
            scrollContainer.scrollLeft += 1
          }
        }

        const intervalId = setInterval(scroll, 30)
        return () => clearInterval(intervalId)
      }
    }
  }, [])

  return (
    <div className="bg-white py-12 overflow-hidden">
      <div className="container mx-auto px-4">
        <div 
          ref={scrollRef}
          className="overflow-x-hidden whitespace-nowrap"
        >
          <div className="inline-block">
            {partners.map((partner, index) => (
              <div key={index} className="inline-block mx-8 text-center">
                <Image
                  src={`/placeholder.svg?height=40&width=120&text=${partner.name}`}
                  alt={partner.name}
                  width={120}
                  height={40}
                  className="h-8 w-auto mx-auto mb-2 opacity-70 hover:opacity-100 transition-opacity"
                />
                <p className="text-xs text-gray-600 whitespace-normal max-w-[120px]">{partner.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

