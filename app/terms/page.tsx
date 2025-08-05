import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function TermsPage() {
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
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>

        <div className="prose prose-lg max-w-none text-gray-600">
          <p className="text-lg mb-8">
            Welcome to Jamas Production. These Terms of Service govern your use of our services and products. By using
            our services, you agree to these terms.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <p>
              By accessing and using Jamas Production services, you accept and agree to be bound by the terms and
              provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Use License</h2>
          <div className="space-y-4 mb-8">
            <p>
              Permission is granted to temporarily download one copy of Jamas Production materials for personal,
              non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under
              this license you may not:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>modify or copy the materials</li>
              <li>use the materials for any commercial purpose or for any public display</li>
              <li>attempt to reverse engineer any software contained in our services</li>
              <li>remove any copyright or other proprietary notations from the materials</li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Accounts</h2>
          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <p className="mb-4">
              When you create an account with us, you must provide information that is accurate, complete, and current
              at all times. You are responsible for:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Safeguarding your account password</li>
              <li>All activities that occur under your account</li>
              <li>Notifying us immediately of any unauthorized use</li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Prohibited Uses</h2>
          <div className="space-y-4 mb-8">
            <p>You may not use our services:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
              <li>
                To violate any international, federal, provincial, or state regulations, rules, laws, or local
                ordinances
              </li>
              <li>
                To infringe upon or violate our intellectual property rights or the intellectual property rights of
                others
              </li>
              <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
              <li>To submit false or misleading information</li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Service Availability</h2>
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <p>
              We strive to provide reliable service but cannot guarantee 100% uptime. We reserve the right to modify,
              suspend, or discontinue any part of our services at any time without notice.
            </p>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Payment Terms</h2>
          <div className="space-y-4 mb-8">
            <p>For paid services:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Payment is due in advance for subscription services</li>
              <li>All fees are non-refundable unless otherwise stated</li>
              <li>We reserve the right to change pricing with 30 days notice</li>
              <li>Failure to pay may result in service suspension</li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Limitation of Liability</h2>
          <div className="bg-yellow-50 p-6 rounded-lg mb-8">
            <p>
              In no event shall Jamas Production or its suppliers be liable for any damages (including, without
              limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or
              inability to use our services.
            </p>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Termination</h2>
          <div className="space-y-4 mb-8">
            <p>
              We may terminate or suspend your account and bar access to the service immediately, without prior notice
              or liability, under our sole discretion, for any reason whatsoever including but not limited to a breach
              of the Terms.
            </p>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Changes to Terms</h2>
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <p>
              We reserve the right to update these Terms of Service at any time. We will notify users of any material
              changes via email or through our service. Continued use of the service after changes constitutes
              acceptance of the new terms.
            </p>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contact Information</h2>
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <p className="mb-4">If you have any questions about these Terms of Service, please contact us:</p>
            <p className="mb-2">
              <strong>Email:</strong> legal@jamasproduction.com
            </p>
            <p className="mb-2">
              <strong>Address:</strong> Jamas Production GmbH, Innovationsstraße 123, 10115 Berlin, Germany
            </p>
            <p className="mb-2">
              <strong>Phone:</strong> +49 30 12345678
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
