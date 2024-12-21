import { NavBar } from "@/components/nav-bar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { FeaturesSection } from "@/components/features-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { RewardsSection } from "@/components/rewards-section"
import { UserStats } from "@/components/user-stats"
import { RoadmapSection } from "@/components/roadmap-section"
import { TokenomicsSection } from "@/components/tokenomics-section"
import { FAQSection } from "@/components/faq-section"
import { CommunitySection } from "@/components/community-section"

export default function Home() {
  return (
    <main className="pt-16">
      <NavBar />
      <HeroSection />
      <section id="about">
        <AboutSection />
      </section>
      <section id="features">
        <FeaturesSection />
      </section>
      <section id="how-it-works">
        <HowItWorksSection />
      </section>
      <section id="rewards">
        <RewardsSection />
      </section>
      <section id="roadmap">
        <RoadmapSection />
      </section>
      <section id="tokenomics">
        <TokenomicsSection />
      </section>
      <section id="faq">
        <FAQSection />
      </section>
      <section id="community">
        <CommunitySection />
      </section>
    </main>
  )
}

