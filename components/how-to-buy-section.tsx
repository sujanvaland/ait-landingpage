import { Button } from "@/components/ui/button"

export function HowToBuySection() {
  const steps = [
    { title: "Create a Wallet", description: "Download and set up a compatible wallet like MetaMask." },
    { title: "Add BNB to Your Wallet", description: "Purchase BNB from an exchange and transfer it to your wallet." },
    { title: "Connect Your Wallet", description: "Click 'Connect Wallet' on our website and select your wallet." },
    { title: "Swap BNB for K4M2A", description: "Enter the amount of K4M2A you want to purchase and confirm the transaction." },
  ]

  return (
    <section className="py-16 bg-white text-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">How to Buy</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-lime-400 text-black rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button size="lg" className="bg-lime-400 text-black hover:bg-lime-500">Buy K4M2A Now</Button>
        </div>
      </div>
    </section>
  )
}

