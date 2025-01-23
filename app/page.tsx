import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Rocket, Moon, DollarSign, Laugh } from "lucide-react"

export default function MoonDogePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-600 to-blue-800 text-white">
      {/* Hero Section */}
      <header className="container mx-auto pt-20 pb-32 text-center">
        <h1 className="text-6xl font-bold mb-4 animate-bounce">DogeMoon 🚀🐕</h1>
        <p className="text-2xl mb-8">The memecoin that's out of this world!</p>
        <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-500">
          Buy DogeMoon Now!
        </Button>
      </header>

      {/* Coin Image Section */}
      <section className="container mx-auto py-16 text-center">
        <div className="relative w-64 h-64 mx-auto mb-8">
          <Image
            src="/coin.png"
            alt="MoonDoge Coin"
            layout="fill"
            className="rounded-full animate-spin-slow"
          />
        </div>
        <p className="text-xl italic">Much wow. Very moon. So doge.</p>
      </section>

      {/* Features Section */}
      <section className="container mx-auto py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Why DogeMoon?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FeatureCard
            icon={<Rocket className="w-12 h-12 mb-4" />}
            title="To the Moon!"
            description="Our advanced rocket technology guarantees we'll reach the moon. Eventually."
          />
          <FeatureCard
            icon={<Moon className="w-12 h-12 mb-4" />}
            title="Lunar Landscape"
            description="Be the first to own property on the moon with MoonDoge!"
          />
          <FeatureCard
            icon={<DollarSign className="w-12 h-12 mb-4" />}
            title="Infinite Potential"
            description="The sky's not the limit - the moon is! Potentially unlimited gains!"
          />
          <FeatureCard
            icon={<Laugh className="w-12 h-12 mb-4" />}
            title="Memes Galore"
            description="We don't just embrace memes, we are the meme. Much funny. Very laugh."
          />
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="container mx-auto py-16 text-center">
        <h2 className="text-4xl font-bold mb-8">Ready to Howl at the Moon?</h2>
        <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-500 text-xl px-8 py-4">
          Buy DogeMoon
        </Button>
      </section>

      {/* Footer */}
      <footer className="bg-purple-900 py-8 text-center">
        <p className="text-sm opacity-75">
          Disclaimer: Dogemoon is a meme coin with no intrinsic value or expectation of financial return. Buy at your
          own risk and only invest what you can afford to lose.
        </p>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <Card className="bg-white/10 border-none">
      <CardContent className="text-center p-6">
        {icon}
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p>{description}</p>
      </CardContent>
    </Card>
  )
}

