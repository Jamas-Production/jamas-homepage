import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Newspaper, FileText, Mail } from "lucide-react"
import Link from "next/link"

export default function PressPage() {
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

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">Press</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Welcome to the Jamas Production press page. Find official media assets, company facts, and contact details
            for press inquiries.
          </p>
        </div>
      </section>

      {/* Press Kit */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <Card className="p-8 border-0 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-0">
                <Newspaper className="w-12 h-12 text-blue-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Press Coverage</h3>
                <p className="text-gray-600 mb-6">Read what the media is saying about Jamas Production.</p>
                <Button variant="outline" className="w-full">View Articles</Button>
              </CardContent>
            </Card>

            <Card className="p-8 border-0 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-0">
                <FileText className="w-12 h-12 text-purple-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Download Press Kit</h3>
                <p className="text-gray-600 mb-6">Logos, team photos, and brand assets ready for use.</p>
                <Button className="w-full">Download ZIP</Button>
              </CardContent>
            </Card>

            <Card className="p-8 border-0 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-0">
                <Mail className="w-12 h-12 text-green-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Press Contact</h3>
                <p className="text-gray-600 mb-6">Get in touch directly with our media relations team.</p>
                <Button variant="outline" className="w-full">Contact Us</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Need more info?</h2>
          <p className="text-xl mb-12 opacity-90">
            We’re happy to provide interviews, statements, and additional material upon request.
          </p>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg rounded-full bg-transparent"
          >
            Email Media Team
          </Button>
        </div>
      </section>
    </div>
  )
}
