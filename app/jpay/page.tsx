import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, BarChart2, DollarSign, ShieldCheck } from "lucide-react"
import Link from "next/link"

export default function JPayInfoPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2 text-gray-900 hover:text-gray-600 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
            <Link href="/" className="text-2xl font-semibold text-gray-900">
              JPay
            </Link>
            <div className="w-24"></div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">What is JPay?</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            JPay is our very own digital currency — accessible to everyone, with zero fees, and ready to use on any platform.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <Card className="p-8 border-0 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <BarChart2 className="w-12 h-12 text-blue-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Scalable by Design</h3>
                <p className="text-gray-600">
                  Whether you're making micro-payments or building a large platform — JPay scales with you.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 border-0 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <DollarSign className="w-12 h-12 text-green-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">0% Transaction Fees</h3>
                <p className="text-gray-600">
                  Keep what you earn — JPay never charges transaction fees. Ever.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 border-0 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <ShieldCheck className="w-12 h-12 text-purple-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Secure & Private</h3>
                <p className="text-gray-600">
                  Your data stays yours — with advanced encryption and optional anonymity features.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Vision for JPay</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            JPay is built to become the standard currency for digital projects, platforms, and communities — independent, fair, and accessible to all.
          </p>

          <Button size="lg" className="px-8 py-4 text-lg rounded-full">
            Learn More
          </Button>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to get started with JPay?</h2>
          <p className="text-xl mb-12 opacity-90">
            Start using JPay today or integrate it into your own platform with ease.
          </p>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg rounded-full bg-transparent"
          >
            Get Started
          </Button>
        </div>
      </section>
    </div>
  )
}

