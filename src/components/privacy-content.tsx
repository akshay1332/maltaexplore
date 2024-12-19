export function PrivacyContent() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="text-center mb-16">
        <p className="text-xl leading-relaxed">
          At MaltaXplore, we value your privacy and are committed to protecting your personal
          data. This Privacy Policy outlines how we collect, use, and safeguard your information
          when you interact with our platform.
        </p>
      </div>

      <section className="space-y-12">
        <div>
          <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
          <ul className="space-y-2 list-disc pl-6">
            <li>Personal details: Name, email address, phone number, and payment information (for bookings).</li>
            <li>Usage data: Information about how you use our website, including pages visited and preferences.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">How We Use Your Data</h2>
          <ul className="space-y-2 list-disc pl-6">
            <li>To process bookings and provide services you request.</li>
            <li>To send you updates, promotional offers, and travel-related insights (with your consent).</li>
            <li>To enhance your user experience through personalized recommendations.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Data Security</h2>
          <p className="mb-4">
            We implement advanced security measures to protect your personal information from unauthorized
            access, alteration, or misuse. This includes encryption protocols and secure payment gateways.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Terms of Use</h2>
          <p className="mb-4">By accessing or using MaltaXplore, you agree to comply with the following terms:</p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Platform Usage</h3>
          <ul className="space-y-2 list-disc pl-6">
            <li>Users must be 18 years or older to make bookings through our platform.</li>
            <li>You are responsible for ensuring the accuracy of the information provided during bookings.</li>
          </ul>
        </div>
      </section>
    </div>
  )
}

