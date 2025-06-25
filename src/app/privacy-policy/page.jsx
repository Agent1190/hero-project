// pages/privacy-policy.tsx
import Head from "next/head";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Hero</title>
        <meta
          name="description"
          content="Learn how Hero collects, uses, and protects your data with our privacy policy."
        />
      </Head>

      <main className="max-w-4xl mx-auto px-4 py-10 text-prime">
        <h1 className="text-3xl font-bold text-second mb-6">Privacy Policy</h1>

        <p className="mb-4">
          Your privacy is important to us. This Privacy Policy explains how Hero
          (“we,” “our,” or “us”) collects, uses, and protects your personal
          information when you use our application and website.
        </p>

        <h2 className="text-xl font-sfpro-medium mt-6 mb-2">
          1. Information We Collect
        </h2>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>
            <strong>Personal Information:</strong> Name, email address, phone
            number, etc., provided by you during account creation.
          </li>
          <li>
            <strong>Usage Data:</strong> Pages visited, features used, and app
            interaction behavior.
          </li>
          <li>
            <strong>Device Information:</strong> IP address, browser type,
            operating system, device ID.
          </li>
        </ul>

        <h2 className="text-xl font-sfpro-medium mt-6 mb-2">
          2. How We Use Your Information
        </h2>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>To provide and maintain the Hero app</li>
          <li>To improve performance, features, and user experience</li>
          <li>To communicate with you (updates, support, promotions)</li>
          <li>To monitor security, detect fraud, and prevent misuse</li>
        </ul>

        <h2 className="text-xl font-sfpro-medium mt-6 mb-2">
          3. Sharing Your Information
        </h2>
        <p className="mb-4">
          We do not sell or rent your personal data. We may share your
          information with:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>Service providers who help us operate the app</li>
          <li>Law enforcement or government bodies when legally required</li>
        </ul>

        <h2 className="text-xl font-sfpro-medium mt-6 mb-2">
          4. Cookies & Tracking
        </h2>
        <p className="mb-4">
          We may use cookies and similar tracking technologies to analyze trends
          and improve user experience. You can disable cookies in your browser
          settings.
        </p>

        <h2 className="text-xl font-sfpro-medium mt-6 mb-2">
          5. Data Security
        </h2>
        <p className="mb-4">
          We take appropriate security measures to protect your information.
          However, no method of transmission over the Internet is 100% secure.
        </p>

        <h2 className="text-xl font-sfpro-medium mt-6 mb-2">6. Your Rights</h2>
        <p className="mb-4">
          You have the right to access, update, or delete your personal data.
          Please contact us at{" "}
          <a
            href="mailto:support@heroapp.com"
            className="text-blue-600 underline"
          >
            support@heroapp.com
          </a>{" "}
          to make a request.
        </p>

        <h2 className="text-xl font-sfpro-medium mt-6 mb-2">
          7. Children’s Privacy
        </h2>
        <p className="mb-4">
          Hero is not intended for children under 13. We do not knowingly
          collect personal data from children.
        </p>

        <h2 className="text-xl font-sfpro-medium mt-6 mb-2">
          8. Changes to This Policy
        </h2>
        <p className="mb-4">
          We may update this policy from time to time. Changes will be posted on
          this page with an updated effective date.
        </p>

        <h2 className="text-xl font-sfpro-medium mt-6 mb-2">9. Contact Us</h2>
        <p className="mb-4">
          If you have questions about this Privacy Policy, contact us at{" "}
          <a
            href="mailto:support@heroapp.com"
            className="text-blue-600 underline"
          >
            support@heroapp.com
          </a>
          .
        </p>
      </main>
    </>
  );
}
