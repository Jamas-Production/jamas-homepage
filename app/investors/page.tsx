import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, BarChart2, DollarSign, ShieldCheck } from "lucide-react"
import Link from "next/link"

export default function InvestorsPage() {
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
              Jamas Production
            </Link>
            <div className="w-24"></div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">Investor Relations</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We are building the future of digital innovation — and you're invited to be part of our journey. Learn more
            about investment opportunities at Jamas Production.
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <Card className="p-8 border-0 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <BarChart2 className="w-12 h-12 text-blue-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Scalable Growth</h3>
                <p className="text-gray-600">
                  Our business model is designed for rapid and sustainable scaling across multiple markets.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 border-0 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <DollarSign className="w-12 h-12 text-green-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Proven Revenue</h3>
                <p className="text-gray-600">
                  With early traction and paying clients, we’re already generating consistent revenue growth.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 border-0 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <ShieldCheck className="w-12 h-12 text-purple-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Transparent Governance</h3>
                <p className="text-gray-600">
                  We uphold the highest standards in reporting, security, and investor communication.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Investment Opportunities */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Investment Opportunities</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            We’re currently in our seed/pre-Series A funding round and are looking for long-term partners who share our
            vision and values.
          </p>

          <Button size="lg" className="px-8 py-4 text-lg rounded-full">
            Request Investor Deck
          </Button>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Let’s talk growth</h2>
          <p className="text-xl mb-12 opacity-90">
            Interested in investing in Jamas Production? We’d love to start the conversation.
          </p>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg rounded-full bg-transparent"
          >
            Contact Our Team
          </Button>
        </div>
      </section>
    </div>
  )
}
