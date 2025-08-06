"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Play, Calendar, Clock, Users, Download } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"

export default function KeynotePage() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up")
          observer.unobserve(entry.target) // nur einmal animieren
        }
      })
    }, observerOptions)

    const animateElements = document.querySelectorAll(".animate-on-scroll")
    animateElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2 text-white hover:text-gray-300 transition-colors" aria-label="Back to Home">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
            <Link
              href="/"
              className="text-2xl font-semibold text-white hover:scale-105 transition-transform duration-200"
              aria-label="Jamas Production Homepage"
            >
              Jamas Production
            </Link>
            <div className="w-24" />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center animate-on-scroll opacity-0 translate-y-8">
            <h1 className="text-6xl lg:text-8xl font-bold mb-8 tracking-tight">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Keynote 2024
              </span>
            </h1>
            <p className="text-2xl lg:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              The Future of Innovation
            </p>
            <div className="flex items-center justify-center space-x-8 text-gray-400 mb-12 flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" aria-hidden="true" />
                <span>December 15, 2024</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5" aria-hidden="true" />
                <span>45 minutes</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5" aria-hidden="true" />
                <span>1.2K viewers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative animate-on-scroll opacity-0 translate-y-8">
            <div className="aspect-video bg-gray-900 rounded-3xl overflow-hidden shadow-2xl relative cursor-pointer group">
              <div className="relative w-full h-full bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center">
                <div className="text-center z-10 relative px-6">
                  <div
                    className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-white/30 transition-colors hover:scale-110 transform duration-300"
                    aria-label="Play video"
                    role="button"
                    tabIndex={0}
                    onClick={() => {
                      // Hier könntest du Video-Playback einbauen, wenn gewünscht
                      alert("Video playback not implemented yet.")
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        alert("Video playback not implemented yet.")
                      }
                    }}
                  >
                    <Play className="w-12 h-12 text-white ml-1" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-2">Jamas Production Keynote 2024</h3>
                  <p className="text-gray-300">Click to watch the full presentation</p>
                </div>
                <Image
                  src="/keynote-background.png"
                  alt="Keynote background"
                  fill
                  className="object-cover opacity-30 absolute inset-0 pointer-events-none"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Announcements */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Key Announcements</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover the groundbreaking innovations we unveiled at our latest keynote
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* JPay 2.0 */}
            <Card className="bg-gray-900 border-gray-800 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-500 animate-on-scroll opacity-0 translate-y-8">
              <CardContent className="p-8">
                <div className="mb-6">
                  <Image
                    src="/jpay-2-announcement.png"
                    alt="JPay 2.0"
                    width={400}
                    height={250}
                    className="rounded-2xl w-full"
                    priority
                  />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">JPay 2.0</h3>
                <p className="text-gray-400 mb-6 text-lg leading-relaxed">
                  The next generation of digital payments with quantum encryption, instant global transfers, and
                  AI-powered fraud detection.
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    "Quantum-secured transactions",
                    "Sub-second global transfers",
                    "AI fraud prevention",
                  ].map((item) => (
                    <li key={item} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-3">
                  Available Q1 2025
                </Button>
              </CardContent>
            </Card>

            {/* JamasAI Pro */}
            <Card className="bg-gray-900 border-gray-800 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-500 animate-on-scroll opacity-0 translate-y-8 delay-200">
              <CardContent className="p-8">
                <div className="mb-6">
                  <Image
                    src="/jamasai-pro-announcement.png"
                    alt="JamasAI Pro"
                    width={400}
                    height={250}
                    className="rounded-2xl w-full"
                    priority
                  />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">JamasAI Pro</h3>
                <p className="text-gray-400 mb-6 text-lg leading-relaxed">
                  Professional-grade AI assistant with advanced reasoning, code generation, and creative capabilities
                  that rival human experts.
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    "Advanced reasoning engine",
                    "Multi-modal understanding",
                    "Real-time collaboration",
                  ].map((item) => (
                    <li key={item} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-6 py-3">
                  Beta Access Soon
                </Button>
              </CardContent>
            </Card>

            {/* JCloud Enterprise */}
            <Card className="bg-gray-900 border-gray-800 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-500 animate-on-scroll opacity-0 translate-y-8 delay-300">
              <CardContent className="p-8">
                <div className="mb-6">
                  <Image
                    src="/jcloud-enterprise.png"
                    alt="JCloud Enterprise"
                    width={400}
                    height={250}
                    className="rounded-2xl w-full"
                    priority
                  />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">JCloud Enterprise</h3>
                <p className="text-gray-400 mb-6 text-lg leading-relaxed">
                  Enterprise-grade cloud infrastructure with unlimited storage, advanced analytics, and seamless team
                  collaboration.
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    "Unlimited storage",
                    "Advanced analytics",
                    "Team collaboration",
                  ].map((item) => (
                    <li key={item} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button className="bg-cyan-600 hover:bg-cyan-700 text-white rounded-full px-6 py-3">
                  Contact Sales
                </Button>
              </CardContent>
            </Card>

            {/* Developer Platform */}
            <Card className="bg-gray-900 border-gray-800 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-500 animate-on-scroll opacity-0 translate-y-8 delay-400">
              <CardContent className="p-8">
                <div className="mb-6">
                  <Image
                    src="/developer-platform.png"
                    alt="Developer Platform"
                    width={400}
                    height={250}
                    className="rounded-2xl w-full"
                    priority
                  />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Developer Platform</h3>
                <p className="text-gray-400 mb-6 text-lg leading-relaxed">
                  Comprehensive SDK and APIs that allow developers to integrate Jamas Production services into their
                  applications.
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    "RESTful APIs",
                    "SDK for all platforms",
                    "Comprehensive documentation",
                  ].map((item) => (
                    <li key={item} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button className="bg-orange-600 hover:bg-orange-700 text-white rounded-full px-6 py-3">
                  Explore APIs
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Download Resources */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-on-scroll opacity-0 translate-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">Download Resources</h2>
            <p className="text-xl text-gray-400 mb-12">
              Get access to presentation slides, press kit, and developer resources
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { label: "Keynote Slides", size: "PDF • 15.2 MB" },
                { label: "Press Kit", size: "ZIP • 45.8 MB" },
                { label: "Developer Guide", size: "PDF • 8.4 MB" },
              ].map(({ label, size }) => (
                <Button
                  key={label}
                  className="bg-white text-black hover:bg-gray-100 p-6 rounded-2xl flex flex-col items-center space-y-3 hover:scale-105 transition-all duration-300"
                  aria-label={`Download ${label}`}
                  onClick={() => alert(`Download for "${label}" not implemented yet.`)}
                >
                  <Download className="w-8 h-8" />
                  <span className="font-semibold">{label}</span>
                  <span className="text-sm text-gray-600">{size}</span>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link href="/" className="text-2xl font-semibold text-white hover:text-gray-300 transition-colors">
            Jamas Production
          </Link>
          <p className="text-gray-400 mt-4">&copy; 2024 Jamas Production. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
