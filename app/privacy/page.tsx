import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function PrivacyPage() {
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
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

        <div className="prose prose-lg max-w-none text-gray-600">
          <p className="text-lg mb-8">
            At Jamas Production, we take your privacy seriously. This Privacy Policy explains how we collect, use,
            disclose, and safeguard your information when you use our services.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Personal Information</h3>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Name, email address, and contact information</li>
              <li>Account credentials and authentication data</li>
              <li>Payment information (processed securely through third-party providers)</li>
              <li>Profile information and preferences</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">Usage Information</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Device information and browser type</li>
              <li>IP address and location data</li>
              <li>Usage patterns and feature interactions</li>
              <li>Performance and error logs</li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
          <div className="space-y-4 mb-8">
            <p>We use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send technical notices, updates, and support messages</li>
              <li>Respond to your comments, questions, and customer service requests</li>
              <li>Develop new products and services</li>
              <li>Protect against fraudulent or illegal activity</li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information Sharing</h2>
          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <p className="font-semibold text-blue-900 mb-2">We do not sell your personal information.</p>
            <p>We may share your information only in the following circumstances:</p>
            <ul className="list-disc list-inside space-y-2 mt-4">
              <li>With your explicit consent</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and prevent fraud</li>
              <li>With trusted service providers who assist our operations</li>
              <li>In connection with a business transfer or acquisition</li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Security</h2>
          <div className="space-y-4 mb-8">
            <p>
              We implement appropriate technical and organizational security measures to protect your personal
              information against unauthorized access, alteration, disclosure, or destruction.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>End-to-end encryption for sensitive data</li>
              <li>Regular security audits and penetration testing</li>
              <li>Access controls and employee training</li>
              <li>Secure data centers with 24/7 monitoring</li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights</h2>
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <p className="mb-4">Under GDPR and other privacy laws, you have the right to:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate or incomplete data</li>
              <li>Delete your personal information</li>
              <li>Restrict or object to processing</li>
              <li>Data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p className="mt-4">
              To exercise these rights, please contact us at{" "}
              <a href="mailto:privacy@jamasproduction.com" className="text-blue-600 hover:underline">
                privacy@jamasproduction.com
              </a>
            </p>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookies and Tracking</h2>
          <div className="space-y-4 mb-8">
            <p>
              We use cookies and similar tracking technologies to enhance your experience and analyze usage patterns.
              You can control cookie preferences through your browser settings.
            </p>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <p className="mb-4">If you have questions about this Privacy Policy, please contact us:</p>
            <p className="mb-2">
              <strong>Email:</strong> privacy@jamasproduction.com
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
