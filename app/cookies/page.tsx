import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function CookiesPage() {
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
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Cookie Policy</h1>

        <div className="prose prose-lg max-w-none text-gray-600">
          <p className="text-lg mb-8">
            This Cookie Policy explains how Jamas Production uses cookies and similar technologies to recognize you when
            you visit our website and use our services.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">What are Cookies?</h2>
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <p>
              Cookies are small data files that are placed on your computer or mobile device when you visit a website.
              Cookies are widely used by website owners to make their websites work more efficiently and to provide
              reporting information.
            </p>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Types of Cookies We Use</h2>
          <div className="space-y-6 mb-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">Essential Cookies</h3>
              <p>
                These cookies are necessary for the website to function and cannot be switched off. They are usually
                only set in response to actions made by you which amount to a request for services.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-green-900 mb-3">Performance Cookies</h3>
              <p>
                These cookies allow us to count visits and traffic sources so we can measure and improve the performance
                of our site. They help us know which pages are most popular.
              </p>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-purple-900 mb-3">Functional Cookies</h3>
              <p>
                These cookies enable the website to provide enhanced functionality and personalization. They may be set
                by us or by third-party providers.
              </p>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-orange-900 mb-3">Targeting Cookies</h3>
              <p>
                These cookies may be set through our site by our advertising partners to build a profile of your
                interests and show you relevant adverts.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Control Cookies</h2>
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <p className="mb-4">
              You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences
              by:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Using our cookie consent tool when you first visit our website</li>
              <li>Modifying your browser settings to refuse cookies</li>
              <li>Deleting cookies that have already been set</li>
              <li>Using browser plugins that manage cookies</li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party Cookies</h2>
          <div className="space-y-4 mb-8">
            <p>We may use third-party services that set cookies on your device. These include:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>Google Analytics:</strong> For website analytics and performance monitoring
              </li>
              <li>
                <strong>Stripe:</strong> For secure payment processing
              </li>
              <li>
                <strong>Intercom:</strong> For customer support and communication
              </li>
              <li>
                <strong>Hotjar:</strong> For user experience analysis
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Updates to This Policy</h2>
          <div className="bg-yellow-50 p-6 rounded-lg mb-8">
            <p>
              We may update this Cookie Policy from time to time to reflect changes in our practices or for other
              operational, legal, or regulatory reasons. Please revisit this page regularly to stay informed about our
              use of cookies.
            </p>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <p className="mb-4">If you have any questions about our use of cookies, please contact us:</p>
            <p className="mb-2">
              <strong>Email:</strong> privacy@jamasproduction.com
            </p>
            <p className="mb-2">
              <strong>Address:</strong> Jamas Production GmbH, Innovationsstraße 123, 10115 Berlin, Germany
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
