import React from "react";
import { ChevronDown } from "lucide-react";
import morefeatureImage1 from "../assets/images/morefeatures2.webp";

const PaymentsSection = () => {
  return (
    <div className="bg-yellow-50 py-5 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="grid md:grid-cols-2 items-center gap-8 lg:gap-16">
            {/* Left side - Content */}
            <div className="p-6 lg:p-12">
              <div className="max-w-lg">
                <h2 className="text-3xl md:text-4xl font-bold text-red-800 mb-6">
                  Accept Online Payments
                </h2>

                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                  Both domestic & international without any hassle
                </h3>

                <p className="text-gray-600 mb-8">
                  Accept QR payments and over 30 local methods, along with
                  credit/debit cards and cash at industry most competitive
                  pricing. Offer Discounts & coupons or offer sliding scale
                  payments.
                </p>

                <button className="inline-flex items-center px-6 py-3 border border-amber-700 text-amber-700 rounded-full hover:bg-amber-50 transition-colors">
                <a
                    className="flex items-center"
                    href="https://api.whatsapp.com/send?phone=%2B917042707775&text=Hi,%20I%20want%20to%20know%20more%20about%20pracflow.ai%20appointment%20feature"
                    >
                    Learn more
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </a>
                </button>
              </div>
            </div>

            {/* Right side - Illustration */}
            <div className="relative p-6 lg:p-8">
              <div className="relative max-w-md mx-auto">
                {/* Main phone illustration */}
                <div className="relative">
                  <div className=" bg-gray-100 rounded-3xl overflow-hidden shadow-lg">
                    {/* Phone screen content */}
                    <img src={morefeatureImage1}></img>
                  </div>

                  {/* Decorative elements */}
                </div>

                {/* Plant decoration */}
                <div className="absolute bottom-0 right-0 w-8 h-16">
                  <div className="w-1 h-12 bg-green-600 absolute bottom-0 left-1/2 transform -translate-x-1/2"></div>
                  <div className="w-4 h-8 bg-green-500 rounded-full absolute top-0 left-0"></div>
                  <div className="w-4 h-8 bg-green-500 rounded-full absolute top-2 right-0"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentsSection;
