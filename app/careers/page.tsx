import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Briefcase, Lightbulb, Users } from "lucide-react"
import Link from "next/link"

export default function CareersPage() {
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
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">Join Our Team</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            At Jamas Production, we're building more than just products — we're building a future. Explore open roles
            and see where you fit in.
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <Card className="p-8 border-0 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Collaborative Culture</h3>
                <p className="text-gray-600">
                  We believe in shared ideas, open feedback, and growing together as a team.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 border-0 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <Lightbulb className="w-12 h-12 text-purple-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Innovative Projects</h3>
                <p className="text-gray-600">
                  Work on cutting-edge technology and help shape the future of digital experiences.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 border-0 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <Briefcase className="w-12 h-12 text-green-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Career Growth</h3>
                <p className="text-gray-600">
                  We invest in your development through mentorship, learning budgets, and real opportunities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Open Positions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We’re always on the lookout for ambitious, creative, and driven individuals. Apply now!
            </p>
          </div>

          <div className="space-y-8">
            {/* Job 1 */}
            <Card className="p-6 border-0 bg-white rounded-2xl shadow hover:shadow-lg transition">
              <CardContent className="p-0">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">Frontend Developer (React/Next.js)</h3>
                    <p className="text-gray-600">Remote · Full Time</p>
                  </div>
                  <Button className="mt-4 sm:mt-0">Apply Now</Button>
                </div>
              </CardContent>
            </Card>

            {/* Job 2 */}
            <Card className="p-6 border-0 bg-white rounded-2xl shadow hover:shadow-lg transition">
              <CardContent className="p-0">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">UX/UI Designer</h3>
                    <p className="text-gray-600">Berlin · Hybrid</p>
                  </div>
                  <Button variant="outline" className="mt-4 sm:mt-0">Apply Now</Button>
                </div>
              </CardContent>
            </Card>

            {/* Job 3 */}
            <Card className="p-6 border-0 bg-white rounded-2xl shadow hover:shadow-lg transition">
              <CardContent className="p-0">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">Marketing Manager</h3>
                    <p className="text-gray-600">Remote · Part Time</p>
                  </div>
                  <Button variant="outline" className="mt-4 sm:mt-0">Apply Now</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Don't see a role that fits?</h2>
          <p className="text-xl mb-12 opacity-90">
            We still want to hear from you. Tell us about yourself and how you can make an impact at Jamas Production.
          </p>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg rounded-full bg-transparent"
          >
            Send an Open Application
          </Button>
        </div>
      </section>
    </div>
  )
}
