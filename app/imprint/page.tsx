import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ImprintPage() {
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

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Imprint</h1>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Company Information</h2>
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <p className="mb-2">
              <strong>Company Name:</strong> Jamas Production
            </p>
            <p className="mb-2">
              <strong>Address:</strong> Goethestraße 31, 66126 Saarbrücken, Germany
            </p>
            <p className="mb-2">
              <strong>Phone:</strong> +49 15259685048
            </p>
            <p className="mb-2">
              <strong>Email:</strong> info@jamas.com
            </p>
            <p className="mb-2">
              <strong>Website:</strong> jamas.com
            </p>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Legal Information</h2>
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <p className="mb-2">
              <strong>Managing Director:</strong> Jason Schmitz
            </p>
            <p className="mb-2">
              <strong>Commercial Register:</strong> /
            </p>
            <p className="mb-2">
              <strong>Registration Court:</strong> /
            </p>
            <p className="mb-2">
              <strong>VAT ID:</strong> /
            </p>
            <p className="mb-2">
              <strong>Tax Number:</strong> /
            </p>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Responsible for Content</h2>
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <p className="mb-2">According to § 55 Abs. 2 RStV:</p>
            <p className="mb-2">
              <strong>Jason Schmitz</strong>
            </p>
            <p className="mb-2">Goethestraße 31</p>
            <p className="mb-2">66126 Berlin, Germany</p>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Disclaimer</h2>
          <div className="space-y-4 text-gray-600">
            <h3 className="text-lg font-semibold text-gray-900">Liability for Content</h3>
            <p>
              As service providers, we are liable for own contents of these websites according to Sec. 7, Para. 1 German
              Telemedia Act (TMG). However, according to Sec. 8 to 10 German Telemedia Act (TMG), service providers are
              not under obligation to permanently monitor submitted or stored information or to search for evidences
              that indicate illegal activities.
            </p>

            <h3 className="text-lg font-semibold text-gray-900">Liability for Links</h3>
            <p>
              Our offer includes links to external third party websites. We have no influence on the contents of those
              websites, therefore we cannot guarantee for those contents. Providers or administrators of linked websites
              are always responsible for their own contents.
            </p>

            <h3 className="text-lg font-semibold text-gray-900">Copyright</h3>
            <p>
              Contents and compilations published on these websites by the providers are subject to German copyright
              laws. Reproduction, editing, distribution as well as the use of any kind outside the scope of the
              copyright law require a written permission of the author or originator.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">Last updated: December 2024</p>
          </div>
        </div>
      </div>
    </div>
  )
}
