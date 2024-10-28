import React from "react";
import { MessageCircle } from "lucide-react";
import Footer from "./Footer";

const AffiliateProgramSection = () => {
  return (
    <>
      {/* Affiliate Program Banner */}
      <section
        className="bg-red-900 text-white py-16 px-4 text-center"
        id="affiliate"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl mb-4">- Join Our Affiliate Program -</h2>
          <h1 className="text-5xl font-bold mb-6">Earn 30% commissions</h1>
          <div className="mb-8 text-lg">
            <p>Receive 30% commissions with every referral you make.</p>
            <p>Enjoy indefinite earning potential through our program.</p>
          </div>
          <button className="bg-white text-red-900 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors">
            <a href="https://api.whatsapp.com/send?phone=%2B917042707775&text=Hi,%20I%20want%20to%20join%20pracflow%20affiliate%20program%20">
              Join the Program
            </a>
          </button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
      {/* Fixed Chat Button */}
      <a href="https://api.whatsapp.com/send?phone=%2B917042707775">
        <button className="fixed flex gap-3 bottom-6 right-6 bg-[#240848] text-white rounded-full p-4 shadow-lg hover:bg-[#240848] transition-colors">
          <MessageCircle /> Lets Chat
        </button>
      </a>
    </>
  );
};

export default AffiliateProgramSection;
