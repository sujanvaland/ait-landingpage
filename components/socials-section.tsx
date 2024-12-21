import { Button } from "@/components/ui/button"
import { FaTelegram, FaTwitter, FaDiscord, FaMedium } from 'react-icons/fa'

export function SocialsSection() {
  const socials = [
    { name: "Telegram", icon: FaTelegram, link: "https://t.me/k4m2a" },
    { name: "Twitter", icon: FaTwitter, link: "https://twitter.com/k4m2a" },
    { name: "Discord", icon: FaDiscord, link: "https://discord.gg/k4m2a" },
    { name: "Medium", icon: FaMedium, link: "https://medium.com/k4m2a" },
  ]

  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Join Our Community</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {socials.map((social, index) => (
            <Button
              key={index}
              size="lg"
              variant="default"
              asChild
              className="bg-lime-400 hover:bg-lime-500 text-black font-bold transition-colors duration-300"
            >
              <a href={social.link} target="_blank" rel="noopener noreferrer" className="flex items-center">
                <social.icon className="mr-2 h-5 w-5" />
                {social.name}
              </a>
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}

