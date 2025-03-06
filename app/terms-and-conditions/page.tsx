import Navbar from "@/components/Navbar/Navbar";
import React from "react";

const TermsAndConditions = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-6 text-gray-800">
        <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
        <p className="text-sm text-gray-600 mb-6">Effective Date: 01-01-2025</p>
        
        <p>
          Welcome to <strong>M&M Associates</strong>. These Terms and Conditions govern your use of our website 
          <a href="https://www.mnmassociate.com" target="_blank" rel="noopener" className="text-blue-600 underline"> www.mnmassociate.com</a> (the “Website”).
          By accessing or using our Website, you agree to comply with these terms. If you do not agree, please do not use our services.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">1. Use of Website</h2>
        <ul className="list-disc ml-6">
          <li>Use the Website only for lawful purposes.</li>
          <li>Not engage in any activity that may disrupt the Website’s operation.</li>
          <li>Not copy, reproduce, or distribute any content without prior written consent from M&M Associates.</li>
        </ul>
        <p>We reserve the right to restrict or terminate access if any misuse is detected.</p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">2. Services & Information</h2>
        <p>
          M&M Associates provides consultancy services in real estate, architecture, construction, interior design, and lift solutions. 
          The information on our Website is for general guidance and may change without notice. We do not guarantee the accuracy, 
          completeness, or reliability of any information.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">3. Intellectual Property Rights</h2>
        <ul className="list-disc ml-6">
          <li>All content, including text, graphics, logos, and images, is the property of M&M Associates.</li>
          <li>Unauthorized use, modification, or reproduction of any content is strictly prohibited.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">4. User Submissions & Communication</h2>
        <ul className="list-disc ml-6">
          <li>By submitting inquiries or personal details through our Website, you grant us permission to contact you for service-related communication.</li>
          <li>We are not responsible for the confidentiality of any information you choose to share publicly on the Website.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">5. Third-Party Links</h2>
        <p>
          Our Website may contain links to third-party websites. M&M Associates is not responsible for the content, privacy policies, 
          or practices of external sites. We encourage users to review third-party terms before engaging with them.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">6. Limitation of Liability</h2>
        <ul className="list-disc ml-6">
          <li>M&M Associates is not liable for any direct, indirect, or incidental damages resulting from the use of our Website.</li>
          <li>Any loss of data or business interruption caused by Website errors, technical failures, or external cyber threats.</li>
        </ul>
        <p>Users assume full responsibility for using the Website at their own risk.</p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">7. Changes to Terms</h2>
        <p>
          We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting on the Website. 
          Continued use of the Website constitutes acceptance of the updated terms.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">8. Governing Law</h2>
        <p>
          These Terms are governed by the laws of India. Any disputes will be resolved in accordance with applicable legal regulations.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">9. Contact Us</h2>
        <p>
          For any questions regarding these Terms, please contact us at:
        </p>
        <ul className="list-disc ml-6">
          <li><strong>Email:</strong> {process.env.NEXT_PUBLIC_EMAIL}</li>
          <li><strong>Phone:</strong> {process.env.NEXT_PUBLIC_PHONE_NUMBER}</li>
          <li><strong>Website:</strong> <a href="https://www.mnmassociate.com" target="_blank" rel="noopener" className="text-blue-600 underline">www.mnmassociate.com</a></li>
        </ul>

        <p className="mt-4">
          By using our Website, you acknowledge that you have read, understood, and agreed to these Terms and Conditions.
        </p>
      </div>
    </>
  );
};

export default TermsAndConditions;
