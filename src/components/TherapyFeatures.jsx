import React from "react";
import {
  Calendar,
  FileSpreadsheet,
  Award,
  MessageCircle,
  Download,
  DollarSign,
  BarChart,
  MessageSquare,
} from "lucide-react";

const TherapyFeatures = () => {
  const features = [
    {
      icon: <Calendar className="w-8 h-8 text-blue-600" />,
      title: "Customisable",
      subtitle: "Followups & reminders",
    },
    {
      icon: <FileSpreadsheet className="w-8 h-8 text-purple-600" />,
      title: "Self & guided",
      subtitle: "assessment & scoring",
    },
    {
      icon: <Award className="w-8 h-8 text-yellow-500" />,
      title: "Feedback & progress",
      subtitle: "tracker",
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-gray-700" />,
      title: "Real time secure chat",
      subtitle: "",
    },
    {
      icon: <Download className="w-8 h-8 text-green-600" />,
      title: "Data import & export",
      subtitle: "",
    },
    {
      icon: <DollarSign className="w-8 h-8 text-blue-500" />,
      title: "International",
      subtitle: "payments & invoicing",
    },
    {
      icon: <BarChart className="w-8 h-8 text-blue-500" />,
      title: "Analytics",
      subtitle: "",
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-green-500" />,
      title: "WhatsApp bots &",
      subtitle: "workflows",
    },
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-red-900 mb-6">
            All-in-One Therapy Software
          </h2>
          <div className="w-24 h-px bg-gray-300 mx-auto my-4"></div>
          <p className="text-lg md:text-xl text-gray-800 max-w-3xl mx-auto">
            Boost productivity using fully customisable privacy-first therapy
            software for all practice sizes
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="font-semibold text-lg text-gray-900 mb-1">
                {feature.title}
              </h3>
              {feature.subtitle && (
                <p className="text-gray-600">{feature.subtitle}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TherapyFeatures;
