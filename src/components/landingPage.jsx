import React from "react";
import { ArrowRight } from "lucide-react";
import LandingPageImage from "../assets/images/landingPage.webp";
const LandingPage = () => {
  return (
    <div className="min-h-[90vh] bg-gray-50 sm:pt-24 pt-12 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <div className="text-4xl md:text-5xl font-bold ">
              <div className="mb-1 sm:mb-3">
                <span className="text-red-800">Everything </span>
                <span>You Need</span>
              </div>
              <div className="mb-1 sm:mb-3">
                <span>to Make Your Private</span>
              </div>
              <span>Practice </span>
              <span className="text-red-800">Standout</span>
            </div>

            <p className="text-lg text-gray-600">
              Create your{" "}
              <span className="font-semibold">SEO friendly website</span> in
              less than 10 mins.
            </p>

            <p className="text-lg text-gray-600">
              Offer <span className="font-semibold">therapy</span>, find or
              provide
              <span className="font-semibold"> supervision</span>, monetise
              <span className="font-semibold"> resources</span>, accept
              <span className="font-semibold"> online payments</span>, access
              rich library of
              <span className="font-semibold"> therapy resources</span>, client
              <span className="font-semibold"> data protection</span>, right
              from your
              <span className="font-semibold"> WhatsApp</span>
            </p>

            <button className="flex items-center px-6 py-3 bg-amber-700 text-white rounded-md hover:bg-amber-800 transition-colors">
              <a href="https://www.pracflow.ai/login" className="flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </button>
          </div>

          {/* Right Column - Illustration */}
          <div className="relative">
            <div className="bg-blue-100 rounded-full p-8 max-w-lg mx-auto">
              <div className="relative bg-white rounded-lg shadow-lg p-4">
                <div className="aspect-w-16 aspect-h-9">
                  {/* Placeholder illustration - in production, replace with actual image */}
                  <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
                    <img
                      src={LandingPageImage}
                      alt="Therapy session illustration"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -right-4 top-1/4 w-8 h-8 bg-red-200 rounded-full" />
                <div className="absolute -left-4 bottom-1/4 w-8 h-8 bg-purple-200 rounded-full" />
                <div className="absolute -top-4 left-1/4 w-8 h-8 bg-yellow-200 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
