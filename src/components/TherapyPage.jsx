import React from "react";
import { ChevronDown } from "lucide-react";
import MoreFeatureImage from "../assets/images/morefeatures3.webp";
const TherapyLandingSection = () => {
  return (
    <div className="bg-yellow-50 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="grid md:grid-cols-2 items-center">
            {/* Left side - Illustration */}
            <div className="relative p-6 ">
              <div className="relative  max-w-lg mx-auto">
                <img
                  src={MoreFeatureImage}
                  alt="Calendar management illustration"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Right side - Content */}
            <div className="p-6 lg:p-12 bg-white">
              <div className="max-w-lg">
                <h2 className="text-3xl md:text-4xl font-bold text-red-800 mb-6">
                  Therapy Tools & Resources
                </h2>

                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                  for therapists, by therapists
                </h3>

                <p className="text-gray-600 mb-8">
                  Run popular assessments with automatic scoring, send
                  worksheets, videos, audios, and more
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default TherapyLandingSection;
