const TermsAndConditions = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-prime">
      <h1 className="text-3xl font-bold text-second mb-6">
        Terms and Conditions
      </h1>

      <p className="mb-4">
        Welcome to our application. By accessing or using our services, you
        agree to be bound by these Terms and Conditions. If you do not agree
        with any part of these terms, please do not use our services.
      </p>

      <h2 className="text-xl font-sfpro-medium mt-6 mb-2">
        1. Acceptance of Terms
      </h2>
      <p className="mb-4">
        By using this app, you confirm that you have read, understood, and
        agreed to these Terms and Conditions, along with our Privacy Policy.
      </p>

      <h2 className="text-xl font-sfpro-medium mt-6 mb-2">2. Eligibility</h2>
      <p className="mb-4">
        You must be at least 18 years old or have legal parental/guardian
        consent to use our services. By using this app, you represent that you
        meet these requirements.
      </p>

      <h2 className="text-xl font-sfpro-medium mt-6 mb-2">
        3. User Responsibilities
      </h2>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>You agree not to misuse the service or help others do so.</li>
        <li>
          You are responsible for maintaining the confidentiality of your login
          credentials.
        </li>
        <li>
          You must provide accurate and truthful information during
          registration.
        </li>
      </ul>

      <h2 className="text-xl font-sfpro-medium mt-6 mb-2">
        4. Intellectual Property
      </h2>
      <p className="mb-4">
        All content, features, and functionality on this application are the
        exclusive property of [Your App Name] and are protected by copyright,
        trademark, and other laws.
      </p>

      <h2 className="text-xl font-sfpro-medium mt-6 mb-2">5. Termination</h2>
      <p className="mb-4">
        We may suspend or terminate your access to the app at any time, without
        notice, if you breach these Terms and Conditions.
      </p>

      <h2 className="text-xl font-sfpro-medium mt-6 mb-2">
        6. Limitation of Liability
      </h2>
      <p className="mb-4">
        We shall not be liable for any direct, indirect, incidental, or
        consequential damages resulting from your use or inability to use the
        service.
      </p>

      <h2 className="text-xl font-sfpro-medium mt-6 mb-2">7. Modifications</h2>
      <p className="mb-4">
        We reserve the right to modify these Terms at any time. Changes will be
        effective immediately upon posting. Continued use of the service
        signifies your acceptance of any updates.
      </p>

      <h2 className="text-xl font-sfpro-medium mt-6 mb-2">8. Governing Law</h2>
      <p className="mb-4">
        These Terms are governed by and construed in accordance with the laws of
        [Your Country or State], without regard to its conflict of law
        principles.
      </p>

      <h2 className="text-xl font-sfpro-medium mt-6 mb-2">9. Contact Us</h2>
      <p className="mb-4">
        If you have any questions about these Terms, please contact us at{" "}
        <a
          href="mailto:support@example.com"
          className="text-blue-600 underline"
        >
          support@example.com
        </a>
        .
      </p>
    </div>
  );
};

export default TermsAndConditions;
