import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Users, Target, Lightbulb, Award } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
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
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">About Jamas Production</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We are a young, innovative technology company founded in 2024 with a mission to revolutionize how people
            interact with technology. Our team of passionate engineers and designers creates software solutions that are
            not just functional, but transformative.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <Card className="p-8 border-0 bg-blue-50 rounded-3xl">
              <CardContent className="p-0">
                <Target className="w-12 h-12 text-blue-600 mb-6" />
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To democratize access to cutting-edge technology by creating intuitive, powerful, and accessible
                  software solutions that empower individuals and businesses to achieve more than they ever thought
                  possible.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 border-0 bg-purple-50 rounded-3xl">
              <CardContent className="p-0">
                <Lightbulb className="w-12 h-12 text-purple-600 mb-6" />
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To become the leading force in technological innovation, creating a future where technology seamlessly
                  integrates into daily life, making complex tasks simple and impossible dreams achievable.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do at Jamas Production
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 border-0 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-0 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">User-Centric</h3>
                <p className="text-gray-600">
                  Every decision we make starts with our users. We design with empathy and build with purpose.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 border-0 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-0 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Lightbulb className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Innovation</h3>
                <p className="text-gray-600">
                  We constantly push boundaries and challenge the status quo to create breakthrough solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 border-0 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-0 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Excellence</h3>
                <p className="text-gray-600">
                  We strive for perfection in every line of code, every design element, and every user interaction.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A diverse group of talented individuals united by our passion for innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 border-0 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <CardContent className="p-0 text-center">
                <Image
                  src="/team-member-1.png"
                  alt="CEO"
                  width={120}
                  height={120}
                  className="rounded-full mx-auto mb-6"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Jason Schmitz</h3>
                <p className="text-blue-600 font-medium mb-4">CEO & Founder</p>
                <p className="text-gray-600 text-sm">
                  Visionary leader with 3+ years in tech, passionate about creating products that change lives.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 border-0 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <CardContent className="p-0 text-center">
                <Image
                  src="/team-member-2.png"
                  alt="CTO"
                  width={120}
                  height={120}
                  className="rounded-full mx-auto mb-6"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Jannick Müller</h3>
                <p className="text-purple-600 font-medium mb-4">CTO</p>
                <p className="text-gray-600 text-sm">
                  Technical genius who turns impossible ideas into reality with elegant, scalable solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 border-0 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <CardContent className="p-0 text-center">
                <Image
                  src="/team-member-3.png"
                  alt="Head of Design"
                  width={120}
                  height={120}
                  className="rounded-full mx-auto mb-6"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Marcus Holz</h3>
                <p className="text-green-600 font-medium mb-4">Head of Design</p>
                <p className="text-gray-600 text-sm">
                  Creative mastermind who crafts beautiful, intuitive experiences that users love.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Join Our Journey</h2>
          <p className="text-xl mb-12 opacity-90">
            We're always looking for talented individuals who share our passion for innovation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-full">
              View Open Positions
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg rounded-full bg-transparent"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
