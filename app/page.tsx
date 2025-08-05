"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, ChevronRight, Menu, Search, ShoppingBag } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef } from "react"

export default function HomePage() {
  const heroRef = useRef<HTMLElement>(null)
  const productsRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up")
        }
      })
    }, observerOptions)

    const animateElements = document.querySelectorAll(".animate-on-scroll")
    animateElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <Link
                href="/"
                className="text-2xl font-semibold text-gray-900 hover:scale-105 transition-transform duration-200"
              >
                Jamas Production
              </Link>
              <div className="hidden md:flex space-x-8">
                <Link
                  href="#products"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-all duration-200 hover:scale-105"
                >
                  Products
                </Link>
                <Link
                  href="/keynote"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-all duration-200 hover:scale-105"
                >
                  Keynote
                </Link>
                <Link
                  href="#innovation"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-all duration-200 hover:scale-105"
                >
                  Innovation
                </Link>
                <Link
                  href="#support"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-all duration-200 hover:scale-105"
                >
                  Support
                </Link>
                <Link
                  href="/about"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-all duration-200 hover:scale-105"
                >
                  About
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Search className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-900 hover:scale-110 transition-all duration-200" />
              <ShoppingBag className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-900 hover:scale-110 transition-all duration-200" />
              <Menu className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-900 hover:scale-110 transition-all duration-200 md:hidden" />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white min-h-screen flex items-center"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 w-full">
          <div className="text-center animate-on-scroll opacity-0 translate-y-8">
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-8">
                🚀 Introducing the Future of Technology
              </span>
            </div>
            <h1 className="text-6xl lg:text-8xl font-bold text-gray-900 mb-8 tracking-tight leading-none">
              Innovation.
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent animate-gradient">
                Redefined.
              </span>
            </h1>
            <p className="text-2xl lg:text-3xl text-gray-600 mb-16 max-w-5xl mx-auto leading-relaxed font-light">
              Jamas Production creates revolutionary software solutions that transform how you work, pay, create, and
              solve problems. Experience the future today with our complete ecosystem of intelligent applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-6 text-xl rounded-full hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25"
              >
                Explore Our Products
                <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-12 py-6 text-xl rounded-full border-2 border-gray-300 bg-white/80 backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:shadow-xl hover:bg-white"
                asChild
              >
                <Link href="/keynote">Watch Keynote</Link>
              </Button>
            </div>

            {/* Feature highlights */}
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg"></div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">AI-Powered</h3>
                <p className="text-gray-600">Advanced artificial intelligence in every product</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-purple-600 rounded-lg"></div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Seamless Integration</h3>
                <p className="text-gray-600">All apps work together in perfect harmony</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-green-600 rounded-lg"></div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Enterprise Ready</h3>
                <p className="text-gray-600">Built for scale with enterprise-grade security</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 animate-float">
          <Image src="/abstract-tech-shapes.png" alt="Hero background" fill className="object-cover opacity-5" />
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-200 rounded-full opacity-20 animate-float delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-green-200 rounded-full opacity-20 animate-float delay-2000"></div>
      </section>

      {/* JPay Section */}
      <section className="py-24 bg-black text-white animate-on-scroll opacity-0 translate-y-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl lg:text-6xl font-bold mb-6 animate-slide-in-left">JPay</h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed animate-slide-in-left delay-100">
                The future of payments. Secure, instant, and effortless transactions that work seamlessly across all
                your devices. Pay anyone, anywhere, anytime.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3 animate-slide-in-left delay-200">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-300">Instant transfers worldwide</span>
                </div>
                <div className="flex items-center space-x-3 animate-slide-in-left delay-300">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-300">Bank-level security</span>
                </div>
                <div className="flex items-center space-x-3 animate-slide-in-left delay-400">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-300">Zero transaction fees</span>
                </div>
              </div>
              <Button className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl animate-slide-in-left delay-500">
                Learn more about JPay
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            <div className="relative animate-slide-in-right">
              <Image
                src="/modern-payment-app.png"
                alt="JPay interface"
                width={500}
                height={600}
                className="rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* JamasAI Section */}
      <section className="py-24 bg-gradient-to-br from-purple-50 to-blue-50 animate-on-scroll opacity-0 translate-y-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative animate-slide-in-left">
              <Image
                src="/ai-brain-neural-network.png"
                alt="JamasAI visualization"
                width={500}
                height={600}
                className="rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-gray-900 animate-slide-in-right">JamasAI</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed animate-slide-in-right delay-100">
                Artificial Intelligence that understands you. Advanced machine learning algorithms that adapt to your
                workflow and amplify your creativity.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3 animate-slide-in-right delay-200">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-600">Natural language processing</span>
                </div>
                <div className="flex items-center space-x-3 animate-slide-in-right delay-300">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-600">Predictive analytics</span>
                </div>
                <div className="flex items-center space-x-3 animate-slide-in-right delay-400">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-600">Automated workflows</span>
                </div>
              </div>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl animate-slide-in-right delay-500">
                Discover JamasAI
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section id="products" ref={productsRef} className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-on-scroll opacity-0 translate-y-8">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8 tracking-tight">Our Complete Ecosystem</h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Every Jamas Production app works together seamlessly, creating a unified experience that transforms how
              you work, create, and connect.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* JSolve */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white rounded-3xl overflow-hidden hover:scale-105 animate-on-scroll opacity-0 translate-y-8 h-[520px] flex flex-col">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="mb-6 h-48 overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
                  <Image
                    src="/problem-solving-app.png"
                    alt="JSolve"
                    width={300}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">JSolve</h3>
                  <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                    Advanced problem-solving algorithms powered by quantum computing principles. Tackle complex
                    mathematical challenges, optimization problems, and logical puzzles with unprecedented accuracy and
                    speed.
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      <span>Quantum-enhanced algorithms</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      <span>Real-time optimization</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      <span>Multi-domain support</span>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    className="text-blue-600 hover:text-blue-700 p-0 hover:scale-105 transition-all duration-200 justify-start"
                  >
                    Learn more <ChevronRight className="ml-1 w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* JZip */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white rounded-3xl overflow-hidden hover:scale-105 animate-on-scroll opacity-0 translate-y-8 delay-100 h-[520px] flex flex-col">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="mb-6 h-48 overflow-hidden rounded-2xl bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center">
                  <Image
                    src="/file-compression-app.png"
                    alt="JZip"
                    width={300}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">JZip</h3>
                  <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                    Revolutionary compression technology using AI-driven algorithms. Reduce file sizes by up to 95%
                    while maintaining perfect quality. Support for all file types with military-grade encryption.
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      <span>95% compression ratio</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      <span>Lossless quality</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      <span>AES-256 encryption</span>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    className="text-blue-600 hover:text-blue-700 p-0 hover:scale-105 transition-all duration-200 justify-start"
                  >
                    Learn more <ChevronRight className="ml-1 w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* JCloud */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white rounded-3xl overflow-hidden hover:scale-105 animate-on-scroll opacity-0 translate-y-8 delay-200 h-[520px] flex flex-col">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="mb-6 h-48 overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-50 to-blue-100 flex items-center justify-center">
                  <Image
                    src="/cloud-storage-interface.png"
                    alt="JCloud"
                    width={300}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">JCloud</h3>
                  <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                    Infinite cloud storage with quantum encryption and AI-powered organization. Access your files from
                    anywhere, collaborate in real-time, and never worry about storage limits again.
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>
                      <span>Unlimited storage</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>
                      <span>Real-time sync</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>
                      <span>Smart organization</span>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    className="text-blue-600 hover:text-blue-700 p-0 hover:scale-105 transition-all duration-200 justify-start"
                  >
                    Learn more <ChevronRight className="ml-1 w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* JSecure */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white rounded-3xl overflow-hidden hover:scale-105 animate-on-scroll opacity-0 translate-y-8 delay-300 h-[520px] flex flex-col">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="mb-6 h-48 overflow-hidden rounded-2xl bg-gradient-to-br from-red-50 to-pink-100 flex items-center justify-center">
                  <Image
                    src="/cybersecurity-app.png"
                    alt="JSecure"
                    width={300}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">JSecure</h3>
                  <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                    Next-generation cybersecurity suite with AI-powered threat detection. Protect your digital life with
                    advanced malware protection, secure browsing, and identity theft prevention.
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                      <span>AI threat detection</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                      <span>Zero-day protection</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                      <span>Identity monitoring</span>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    className="text-blue-600 hover:text-blue-700 p-0 hover:scale-105 transition-all duration-200 justify-start"
                  >
                    Learn more <ChevronRight className="ml-1 w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* JCode */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white rounded-3xl overflow-hidden hover:scale-105 animate-on-scroll opacity-0 translate-y-8 delay-400 h-[520px] flex flex-col">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="mb-6 h-48 overflow-hidden rounded-2xl bg-gradient-to-br from-purple-50 to-violet-100 flex items-center justify-center">
                  <Image
                    src="/code-editor-interface.png"
                    alt="JCode"
                    width={300}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">JCode</h3>
                  <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                    Professional code editor with AI-assisted development and intelligent debugging. Write better code
                    faster with advanced autocomplete, real-time collaboration, and integrated testing.
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                      <span>AI code completion</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                      <span>Live collaboration</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                      <span>Integrated debugging</span>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    className="text-blue-600 hover:text-blue-700 p-0 hover:scale-105 transition-all duration-200 justify-start"
                  >
                    Learn more <ChevronRight className="ml-1 w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* JDesign */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white rounded-3xl overflow-hidden hover:scale-105 animate-on-scroll opacity-0 translate-y-8 delay-500 h-[520px] flex flex-col">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="mb-6 h-48 overflow-hidden rounded-2xl bg-gradient-to-br from-orange-50 to-yellow-100 flex items-center justify-center">
                  <Image
                    src="/creative-app-interface.png"
                    alt="JDesign"
                    width={300}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">JDesign</h3>
                  <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                    Creative design suite powered by AI that empowers artists and designers. Create stunning visuals,
                    logos, and graphics with intelligent suggestions and automated workflows.
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                      <span>AI design assistant</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                      <span>Vector & raster tools</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                      <span>Brand consistency</span>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    className="text-blue-600 hover:text-blue-700 p-0 hover:scale-105 transition-all duration-200 justify-start"
                  >
                    Learn more <ChevronRight className="ml-1 w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Products Row */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {/* JMusic */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white rounded-3xl overflow-hidden hover:scale-105 animate-on-scroll opacity-0 translate-y-8 delay-600 h-[520px] flex flex-col">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="mb-6 h-48 overflow-hidden rounded-2xl bg-gradient-to-br from-pink-50 to-rose-100 flex items-center justify-center">
                  <Image
                    src="/music-app-interface.png"
                    alt="JMusic"
                    width={300}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">JMusic</h3>
                  <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                    AI-powered music creation and production suite. Compose, arrange, and produce professional-quality
                    music with intelligent harmony suggestions and automated mixing.
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-pink-500 rounded-full"></div>
                      <span>AI composition</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-pink-500 rounded-full"></div>
                      <span>Auto mixing & mastering</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-pink-500 rounded-full"></div>
                      <span>Virtual instruments</span>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    className="text-blue-600 hover:text-blue-700 p-0 hover:scale-105 transition-all duration-200 justify-start"
                  >
                    Learn more <ChevronRight className="ml-1 w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* JFit */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white rounded-3xl overflow-hidden hover:scale-105 animate-on-scroll opacity-0 translate-y-8 delay-700 h-[520px] flex flex-col">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="mb-6 h-48 overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-100 flex items-center justify-center">
                  <Image
                    src="/fitness-app-interface.png"
                    alt="JFit"
                    width={300}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">JFit</h3>
                  <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                    Personalized fitness and wellness platform with AI coaching. Get custom workout plans, nutrition
                    guidance, and health insights tailored to your goals and lifestyle.
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                      <span>AI personal trainer</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                      <span>Nutrition tracking</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                      <span>Health analytics</span>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    className="text-blue-600 hover:text-blue-700 p-0 hover:scale-105 transition-all duration-200 justify-start"
                  >
                    Learn more <ChevronRight className="ml-1 w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* JLearn */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white rounded-3xl overflow-hidden hover:scale-105 animate-on-scroll opacity-0 translate-y-8 delay-800 h-[520px] flex flex-col">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="mb-6 h-48 overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-50 to-blue-100 flex items-center justify-center">
                  <Image
                    src="/learning-app-interface.png"
                    alt="JLearn"
                    width={300}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">JLearn</h3>
                  <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                    Adaptive learning platform powered by AI that personalizes education. Master new skills with
                    interactive courses, real-time feedback, and intelligent progress tracking.
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                      <span>Adaptive learning paths</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                      <span>Interactive content</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                      <span>Progress analytics</span>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    className="text-blue-600 hover:text-blue-700 p-0 hover:scale-105 transition-all duration-200 justify-start"
                  >
                    Learn more <ChevronRight className="ml-1 w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section id="innovation" className="py-24 bg-black text-white animate-on-scroll opacity-0 translate-y-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">Innovation is in our DNA</h2>
          <p className="text-xl text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed">
            At Jamas Production, we don't just follow trends – we create them. Our team of visionary engineers and
            designers work tirelessly to push the boundaries of what's possible.
          </p>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center animate-counter">
              <div className="text-5xl font-bold text-blue-500 mb-4">1K+</div>
              <div className="text-xl text-gray-300">Active Users</div>
            </div>
            <div className="text-center animate-counter delay-200">
              <div className="text-5xl font-bold text-purple-500 mb-4">99.9%</div>
              <div className="text-xl text-gray-300">Uptime</div>
            </div>
            <div className="text-center animate-counter delay-400">
              <div className="text-5xl font-bold text-green-500 mb-4">25+</div>
              <div className="text-xl text-gray-300">Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-32 bg-white animate-on-scroll opacity-0 translate-y-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
              Why Choose Jamas Production?
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We don't just build software. We craft experiences that transform how you work and live.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-6 h-6 bg-blue-600 rounded-lg"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Cutting-Edge Technology</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    We leverage the latest in AI, quantum computing, and cloud technologies to deliver solutions that
                    are years ahead of the competition.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-6 h-6 bg-purple-600 rounded-lg"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">User-Centric Design</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Every interface is crafted with obsessive attention to detail, ensuring an intuitive and delightful
                    experience for every user.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-6 h-6 bg-green-600 rounded-lg"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Uncompromising Security</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Your data is protected with military-grade encryption and zero-trust architecture, ensuring complete
                    privacy and security.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 flex items-center justify-center">
                <Image
                  src="/why-choose-us.png"
                  alt="Why choose us"
                  width={400}
                  height={400}
                  className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="animate-counter">
              <div className="text-4xl font-bold text-blue-600 mb-2">1K+</div>
              <div className="text-lg text-gray-600">Happy Users</div>
            </div>
            <div className="animate-counter delay-200">
              <div className="text-4xl font-bold text-purple-600 mb-2">9</div>
              <div className="text-lg text-gray-600">Products</div>
            </div>
            <div className="animate-counter delay-400">
              <div className="text-4xl font-bold text-green-600 mb-2">25+</div>
              <div className="text-lg text-gray-600">Countries</div>
            </div>
            <div className="animate-counter delay-600">
              <div className="text-4xl font-bold text-orange-600 mb-2">99.9%</div>
              <div className="text-lg text-gray-600">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white animate-on-scroll opacity-0 translate-y-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">Ready to experience the future?</h2>
          <p className="text-xl mb-12 opacity-90">
            Join thousands of users who have already transformed their digital experience with Jamas Production.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Started Today
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg rounded-full bg-transparent hover:scale-105 transition-all duration-300"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Products</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors hover:scale-105 inline-block">
                    JPay
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors hover:scale-105 inline-block">
                    JamasAI
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors hover:scale-105 inline-block">
                    JSolve
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors hover:scale-105 inline-block">
                    JZip
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors hover:scale-105 inline-block">
                    JCloud
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link
                    href="/documentation"
                    className="hover:text-white transition-colors hover:scale-105 inline-block"
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="/help" className="hover:text-white transition-colors hover:scale-105 inline-block">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors hover:scale-105 inline-block">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/community" className="hover:text-white transition-colors hover:scale-105 inline-block">
                    Community
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors hover:scale-105 inline-block">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-white transition-colors hover:scale-105 inline-block">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/press" className="hover:text-white transition-colors hover:scale-105 inline-block">
                    Press
                  </Link>
                </li>
                <li>
                  <Link href="/investors" className="hover:text-white transition-colors hover:scale-105 inline-block">
                    Investors
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/privacy" className="hover:text-white transition-colors hover:scale-105 inline-block">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white transition-colors hover:scale-105 inline-block">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/cookies" className="hover:text-white transition-colors hover:scale-105 inline-block">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link href="/imprint" className="hover:text-white transition-colors hover:scale-105 inline-block">
                    Imprint
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Jamas Production. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
