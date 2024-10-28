import React, { useEffect } from "react";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="p-8 max-w-4xl mx-auto text-gray-800 relative pt-24 sm:pt-20 ">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6">
        KasiCare Privacy Policy
      </h1>

      {/* Introduction */}
      <section className="mb-8">
        <p>
          KasiCare, operated by Kasicare Technologies Private Limited, is a
          therapy engagement platform for therapists to connect with their
          clients better and streamline their work. This privacy policy outlines
          the collection, storage, utilization, and distribution of personal
          data provided by users while using our platform.
        </p>
      </section>

      {/* Definitions */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Definitions</h2>
        <div>
          <h3 className="font-semibold">User</h3>
          <p>
            “User”, “you”, “your” or other similar terminology are all in
            reference to you, as the mental health professional, counsellor,
            and/or therapist who uses the application, user of the website, and
            as a recipient of our services.
          </p>
        </div>
        <div className="mt-4">
          <h3 className="font-semibold">Client</h3>
          <p>
            “Client” or other similar terminology are all in reference to the
            end user, that is, the clients of all mental health professionals,
            counsellors, and/or therapists.
          </p>
        </div>
      </section>

      {/* Strict Prohibition of Data Sale */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Strict Prohibition of Data Sale
        </h2>
        <p>
          KasiCare is committed to user and client privacy. We guarantee that
          under no circumstances will your personal data be sold, traded, or
          transferred to third-party entities for promotional or marketing
          purposes. All data entrusted to us is solely utilized to improve our
          platform and services in alignment with this Privacy Policy. The data
          will only be shared if mandated by the courts of India, and as per
          Indian laws.
        </p>
      </section>

      {/* Protecting Therapeutic Records */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Protecting Therapeutic Records
        </h2>
        <p>
          Acknowledging the sensitivity of mental health and therapy sessions,
          notes and records, KasiCare ensures the utmost care, discretion, and
          confidentiality in managing any mental health data or therapeutic
          records entered into our platform. We reinforce this commitment by
          securing all therapeutic records and maintaining stringent access
          controls. It is however clarified notwithstanding anything else
          contained in this policy, KasiCare shall not be privy to the
          proceedings of the sessions itself and the same shall be confidential
          as per applicable law.
        </p>
      </section>

      {/* Data Storage and Categories */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Data Storage and Categories
        </h2>
        <p>
          At KasiCare, we store data to help you use our services better. We may
          use your and your client’s Personal Information to:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>Contact in case of query resolution</li>
          <li>Assist in using the app if required</li>
          <li>Provide further information, products and services</li>
          <li>Better understand users’ needs and interests</li>
          <li>
            Detect and protect us against error, fraud, and other criminal
            activity
          </li>
          <li>Improve our website, mobile application(s)</li>
          <li>Ensure seamless delivery of our services and features</li>
        </ul>
        <p className="mt-4">
          All data that you and your client provide will be confidential. We
          employ administrative and technical measures designed to safeguard and
          protect information under our control from unauthorized access, use,
          and disclosure. KasiCare uses SSL/TLS to protect data in transit which
          is built on Google Cloud Platform and AWS platform, and is compliant
          with GDPR to ensure data security.
        </p>
      </section>

      {/* Processing Client Data */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Processing Client Data</h2>
        <p>
          Client confidentiality is paramount. We do not share any Personally
          Identifiable Information (PII) unless mandated by law or explicitly
          permitted by you. You have the right to access, modify, or request the
          erasure of your data. However, note that erasing certain data may
          impact the usability of some features.
        </p>
      </section>

      {/* Age Restrictions and Parental Consent */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Age Restrictions and Parental Consent
        </h2>
        <p>
          KasiCare caters primarily to mental health practitioners working with
          adult clients aged 18 and above. Verifiable parental consent is
          mandatory if you intend to engage with clients younger than 18.
        </p>
      </section>

      {/* External Links and Third-Party Services */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          External Links and Third-Party Services
        </h2>
        <p>
          Our platform may contain links to third-party websites or services not
          governed or controlled by KasiCare. We strongly recommend reviewing
          the privacy policies and terms of any third-party sites or services
          accessed through our platform.
        </p>
      </section>

      {/* Google API Integration */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Google API Integration</h2>
        <p>
          KasiCare’s appointment scheduling feature integrates with Google
          Calendar and Google Sign-In for easy and secure access. This
          integration, essential for appointment scheduling on KasiCare, ensures
          real-time updates and efficient appointment management through Google
          Calendar.
        </p>
      </section>

      {/* Jurisdiction & Governing Law */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Jurisdiction & Governing Law
        </h2>
        <p>
          This Privacy Policy, and any related disputes, are governed by India’s
          laws, without effect from choice or conflict of law provisions. Legal
          suits or actions related to this Policy or KasiCare’s services shall
          be exclusively filed in New Delhi, India’s courts.
        </p>
      </section>

      {/* Changes to this Policy */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Changes to this Policy</h2>
        <p>
          Periodic updates may be introduced. Significant changes will be
          notified through emails to the users.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
