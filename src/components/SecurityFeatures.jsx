import React from 'react';
import { Lock, Database, Cloud } from 'lucide-react';

const SecurityFeatures = () => {
  const features = [
    {
      icon: <Lock className="w-12 h-12 text-blue-500" />,
      title: "TLS/SSL",
      description: "TLS/SSL encrypts and secures your data, ensuring peace of mind and protection from unauthorized access."
    },
    {
      icon: <Cloud className="w-12 h-12 text-blue-500" />,
      title: "AWS/Google Cloud",
      description: "Experience secure data protection and top performance with the reliable cloud services of AWS and Google Cloud."
    },
    {
      icon: <Database className="w-12 h-12 text-blue-500" />,
      title: "Data Encryption & Security",
      description: "100% data remains encrypted & secured in transit & at rest using latest technologies and industry best practices."
    }
  ];

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-red-900 mb-6">
            Your Client Data is Secured
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Your client data is securely stored with maximum security & anonymously with option 
            to delete it any time. We will NEVER share data to any third party.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center"
            >
              {/* Icon Circle */}
              <div className="bg-blue-500 rounded-full p-4 mb-6">
                <div className="bg-white rounded-full p-3">
                  {feature.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed max-w-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecurityFeatures;