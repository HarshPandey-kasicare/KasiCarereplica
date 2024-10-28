import React from "react";
import { MapPin, Phone, FileText, MessageCircle } from "lucide-react";
import WatsappLogo from "../assets/images/watsappimage.webp";
import InstagramLogo from "../assets/images/instagramimage.png";
import LinkedinLogo from "../assets/images/linkedinimage.webp";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <footer className="bg-white py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Address Section */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <MapPin className="w-6 h-6 text-gray-800 mr-2" />
              <h3 className="text-xl font-semibold">Address</h3>
            </div>
            <p className="text-gray-600">
              Vipul Lavanya, Sector 81, Manesar,
              <br />
              Gurugram, Haryana India, 122004
            </p>
          </div>

          {/* Phone & Social Section */}
          <div className="text-center">
            <div className="flex items-center justify-center mb-4 ">
              <Phone className="w-6 h-6 text-gray-800 mr-2" />
              <h3 className="text-xl font-semibold">Phone</h3>
            </div>
            <p className="text-gray-600 mb-2">+91 7042707775</p>
            <a
              href="mailto:support@kasi.care"
              className="text-gray-600 hover:text-gray-800"
            >
              support@kasi.care
            </a>
            <div className="flex justify-center space-x-4 mt-4">
              <a
                href="https://api.whatsapp.com/send?phone=%2B917042707775&text=Hi,%20I%20want%20to%20know%20more"
                className="w-10 h-10  rounded-full flex items-center justify-center"
              >
                <img src={WatsappLogo} alt="watsapp" className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/kasi.care_official/"
                className="w-10 h-10  flex items-center justify-center"
              >
                <img src={InstagramLogo} alt="instagram" className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/company/kasicare"
                className="w-10 h-10  flex items-center justify-center"
              >
                <img src={LinkedinLogo} alt="facebook" className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Policies Section */}
          <div className="text-center md:text-right">
            <div className="flex items-center justify-center md:justify-end mb-4">
              <FileText className="w-6 h-6 text-gray-800 mr-2" />
              <h3 className="text-xl font-semibold">Policies</h3>
            </div>
            <div className="flex flex-col space-y-2">
              <Link to="/privacypolicy">
                <span href="#" className="text-gray-600 hover:text-gray-800">
                  Privacy Policy
                </span>
              </Link>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Terms of Use
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Refund & Cancellation
              </a>
            </div>
          </div>
        </div>
      </footer>
      <div className="w-full py-3 text-center border-t-2 border-t-black">
        © 2024 by Pracflow.ai
      </div>
    </div>
  );
};

export default Footer;
