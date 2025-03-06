import Navbar from '@/components/Navbar/Navbar';
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-6 text-gray-800">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-sm text-gray-600 mb-6">Effective Date: [Insert Date]</p>
        
        <p>
          At <strong>M&M Associates</strong>, we are committed to protecting your privacy. This Privacy Policy explains how we 
          collect, use, and safeguard your information when you visit our website <a href="https://www.mnmassociate.com" target="_blank" rel="noopener" className="text-blue-600 underline">www.mnmassociate.com</a> (the “Website”).
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
        <ul className="list-disc ml-6">
          <li><strong>Personal Information:</strong> Name, email address, phone number, and any details you provide through our contact forms.</li>
          <li><strong>Automated Information:</strong> IP address, browser type, device information, and pages visited (collected via cookies and analytics tools).</li>
          <li><strong>Transaction & Service Details:</strong> Information related to inquiries, consultations, and service requests.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
        <ul className="list-disc ml-6">
          <li>Provide and improve our services, including property consultation, construction, interiors, and lift solutions.</li>
          <li>Respond to inquiries and provide personalized recommendations.</li>
          <li>Enhance the Website experience and optimize our content.</li>
          <li>Comply with legal obligations and protect against fraud or unauthorized activities.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">3. How We Protect Your Information</h2>
        <p>
          We implement industry-standard security measures to protect your personal data from unauthorized access, misuse, or disclosure. 
          However, no online transmission is 100% secure, and we encourage users to take precautions when sharing information.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">4. Sharing of Information</h2>
        <p>We do not sell, trade, or rent your personal information. We may share your data with:</p>
        <ul className="list-disc ml-6">
          <li>Trusted third-party service providers (such as analytics tools or payment processors) to help us improve our services.</li>
          <li>Legal authorities if required by law or to protect our rights.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">5. Cookies & Tracking Technologies</h2>
        <p>We use cookies to:</p>
        <ul className="list-disc ml-6">
          <li>Analyze website traffic and user behavior.</li>
          <li>Improve site performance and user experience.</li>
          <li>Remember your preferences for future visits.</li>
        </ul>
        <p className="mt-4">
          You can manage or disable cookies through your browser settings.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">6. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at 
          <a href="mailto:info@mnmassociate.com" className="text-blue-600 underline" target="_blank" rel="noopener"> info@mnmassociate.com</a>.
        </p>
      </div>
    </>
  );
};

export default PrivacyPolicy;
