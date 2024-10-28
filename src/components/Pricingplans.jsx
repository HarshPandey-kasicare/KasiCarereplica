import React from "react";
import Pricing1 from "../assets/images/pricing1.webp";
import Pricing2 from "../assets/images/pricing2.webp";
import Pricing3 from "../assets/images/pricing3.webp";
const PricingCard = ({
  title,
  price,
  description,
  features,
  isPopular,
  image,
}) => (
  <div className="flex flex-col bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden h-full">
    <div className="p-6 text-center">
      <img
        src={image}
        alt={`${title} illustration`}
        className="w-60 h-40 object-cover mb-4 mx-auto"
      />
      <button className="mb-4 px-4 py-2 rounded-full text-sm bg-orange-50 text-orange-600 border-2 border-orange-600 hover:text-white hover:bg-orange-600">
        <a href="https://pracflow.ai/login">Get Started</a>
      </button>
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <div className="flex items-baseline justify-center">
        <span className="text-3xl font-semibold">₹</span>
        <span className="text-5xl font-bold">{price}</span>
        {price !== "0" && <span className="text-gray-500 ml-1">/year</span>}
      </div>
      <p className="text-sm text-gray-600 mt-4 min-h-[60px]">{description}</p>
      <div className="text-xs text-gray-500 mt-2">Valid until canceled</div>
    </div>

    <div className="flex-1 px-6 pb-6">
      {features.map((feature, index) => (
        <div
          key={index}
          className="py-3 text-sm text-gray-600 border-t border-gray-200 first:border-t-0"
        >
          {feature}
        </div>
      ))}
    </div>
  </div>
);

const PricingPlans = () => {
  const plans = [
    {
      title: "Free",
      price: "0",
      description:
        "Ideal for hobbyists or somebody who just want to operate with minimal features",
      features: [
        "Launch freely - explore with no duties",
        "Scheduling & availability with native form",
        "Other basic features (1 only)",
        "Customize service order on website",
        "Basic payments only",
        "Explore premium with 30 days pro",
      ],
      image: Pricing1,
    },
    {
      title: "Premium",
      price: "1,299",
      description:
        "Perfect for a solo therapist who has taken their private practice seriously and want to get their needs met to their fullest",
      features: [
        "Everything from basic",
        "Custom domain",
        "Unlimited 1:1 workplace digital",
        "Online payments - domestic & international",
        "Offer package discounts and coupons",
        "Access to therapy resources & certificates assessments",
        "Real-time private & secure chat",
        "Reminders & follow-ups to clients & panel",
      ],
      image: Pricing2,
    },
    {
      title: "Business",
      price: "4,999",
      description: "For therapist organizations or therapists with a team",
      features: [
        "Everything from premium",
        "White labeled solution",
        "Manage your therapy team",
        "Maximized search & keyword using our algorithm",
        "Increased data & deployment",
        "Customize your follow-ups & reminders",
        "Have verified WhatsApp account for client communication",
        "Add ₹1500 for each additional therapist",
        "Custom pricing for bigger team sizes",
      ],
      image: Pricing3,
    },
  ];

  return (
    <div className="min-h-screen bg-white py-12 px-4" id="pricing">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-bold text-red-900 mb-4">
            Choose your pricing plan
          </h2>
          <p className="text-gray-600">Flat 20% off on Annual plan purchases</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <PricingCard
              key={plan.title}
              title={plan.title}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              image={plan.image}
            />
          ))}
        </div>

        <p className="text-center text-sm text-gray-500 mt-8">
          *excluding payment gateway & settlement fees
        </p>
      </div>
    </div>
  );
};

export default PricingPlans;
