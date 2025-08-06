import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, BarChart2, DollarSign, ShieldCheck, Cpu, Globe, Zap } from "lucide-react"
import Link from "next/link"

export default function JPayInfoPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2 text-gray-900 hover:text-gray-600 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
            <Link href="/" className="text-2xl font-semibold text-gray-900">
              JPay
            </Link>
            <div className="w-24" />
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">What is JPay?</h1>
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
            JPay is our own digital currency designed for fast, secure, and fee-free transactions across any platform or community.
            Whether you’re a creator, a developer, or just someone who wants easy digital payments — JPay makes it simple.
          </p>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <Card className="p-6 border-0 rounded-xl shadow hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <BarChart2 className="w-10 h-10 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Scalable & Fast</h3>
              <p className="text-gray-600 text-sm">
                Designed to handle everything from microtransactions to enterprise-level payments without slowing down.
              </p>
            </CardContent>
          </Card>

          <Card className="p-6 border-0 rounded-xl shadow hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <DollarSign className="w-10 h-10 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Zero Fees</h3>
              <p className="text-gray-600 text-sm">
                Keep 100% of your earnings. No hidden fees, no surprises — ever.
              </p>
            </CardContent>
          </Card>

          <Card className="p-6 border-0 rounded-xl shadow hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <ShieldCheck className="w-10 h-10 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Secure & Private</h3>
              <p className="text-gray-600 text-sm">
                Advanced encryption and privacy controls keep your data and transactions safe.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Use Cases</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <Card className="p-6 border-0 rounded-xl shadow hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <Globe className="w-10 h-10 text-indigo-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Global Payments</h3>
                <p className="text-gray-600 text-sm">
                  Send and receive JPay anywhere in the world instantly and without exchange fees.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 border-0 rounded-xl shadow hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <Zap className="w-10 h-10 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Creator Support</h3>
                <p className="text-gray-600 text-sm">
                  Empower creators with seamless tipping, subscriptions, and rewards using JPay.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 border-0 rounded-xl shadow hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <Cpu className="w-10 h-10 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Developer Friendly</h3>
                <p className="text-gray-600 text-sm">
                  Easily integrate JPay APIs into your apps and platforms with robust documentation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Integration */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Easy Integration</h2>
        <p className="text-center max-w-3xl mx-auto text-gray-700 mb-8">
          JPay offers simple APIs and SDKs so developers can add fast, secure, and fee-free payments to any app or website — in minutes.
          Whether you're building an e-commerce site, a game, or a social platform, JPay fits right in.
        </p>
        <div className="flex justify-center">
          <Button size="lg" className="px-10 rounded-full">
            View API Docs
          </Button>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to start with JPay?</h2>
        <p className="max-w-xl mx-auto mb-12 opacity-90 text-lg">
          Join thousands of users who trust JPay for their digital payments — fast, secure, and free.
        </p>
        <Button
          variant="outline"
          size="lg"
          className="border-white text-white hover:bg-white hover:text-blue-600 px-10 rounded-full bg-transparent"
        >
          Get Started
        </Button>
      </section>
    </div>
  )
}
