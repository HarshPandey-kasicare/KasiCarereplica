import React from "react";
import { Clock, FileText, Users, Tag } from "lucide-react";
import service1Image1 from "../assets/images/service1.webp";
import service1Image2 from "../assets/images/service2.webp";
import service1Image3 from "../assets/images/service3.webp";
import service1Image4 from "../assets/images/service4.webp";

import Profile1Image1 from "../assets/images/profile1.webp";
import Profile1Image2 from "../assets/images/profile2.webp";
import Profile1Image3 from "../assets/images/profile3.webp";
const ServiceCard = ({ icon: Icon, title, className = "" }) => (
  <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
    <div className="mb-4">
      <Icon className="w-16 h-16 text-purple-600" />
    </div>
    <h3 className="text-sm font-medium mt-2 text-gray-900">{title}</h3>
  </div>
);

const TestimonialCard = ({ image, name, title, location, quote }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex flex-col items-center text-center">
      <img
        src={image}
        alt={name}
        className="w-24 h-24 rounded-full object-cover mb-4"
      />
      <h3 className="font-medium text-gray-900">{name}</h3>
      <p className="text-sm text-gray-600">{title}</p>
      <p className="text-sm text-gray-600 mb-4">{location}</p>
      <p className="text-gray-700 italic">&ldquo;{quote}&rdquo;</p>
    </div>
  </div>
);

const ServicesSection = () => {
  const services = [
    {
      icon: Clock,
      title: "1:1 Sessions",
      image: service1Image1,
    },
    {
      icon: FileText,
      title: "Monetise resources",
      image: service1Image2,
    },
    {
      icon: Users,
      title: "Host workshops",
      image: service1Image3,
    },
    {
      icon: Tag,
      title: "Packages & discounts",
      image: service1Image4,
    },
  ];

  const testimonials = [
    {
      name: "Aarav Mehta",
      title: "Clinical Psychologist",
      location: "Mumbai",
      quote:
        "PracFlow's easy-to-use interface and comprehensive tools have made running my private practice much smoother. The confidentiality agreements are a big plus, as my clients feel secure knowing their data is protected.",
      image: Profile1Image1,
    },
    {
      name: "Ethan Caldwell",
      title: "Clinical Psychologist",
      location: "Sydney",
      quote:
        "As a clinical psychologist, managing a large number of clients can get overwhelming. PracFlow streamlined everything from scheduling to client notes, while ensuring data privacy. It has become an integral part of my practice.",
      image: Profile1Image2,
    },
    {
      name: "Priya Kapoor",
      title: "Counselling Psychologist",
      location: "New Delhi",
      quote:
        "I appreciate how PracFlow simplifies my workflow. From managing therapy notes to supervising my team, everything is seamless. The support team has been fantastic in ensuring all my needs are met.",
      image: Profile1Image3,
    },
  ];

  return (
    <div className=" px-4 sm:px-6 lg:px-8 bg-gray-50 " id="features">
      {/* Services Header */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-5xl font-bold text-red-800 mb-4">
          Offer all your services with ease
        </h2>
        <p className="text-gray-600">
          With PracFlow, you can offer 1:1 therapy sessions, supervision, host
          group sessions, workshops, monetise your digital resources. You can
          choose sliding scale pricing and offer discounts to people with
          special needs. Bundle services into a package and provide them at
          discounted pricing. Accept online payments or choose cash. Run your
          private practice your way.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="bg-yellow-50 rounded-xl p-8 mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-full aspect-square mb-4">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <span className="inline-block px-4 py-2 bg-white rounded-full sm:text-lg font-medium text-red-900 border-2 border-black">
                  {service.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              image={testimonial.image}
              name={testimonial.name}
              title={testimonial.title}
              location={testimonial.location}
              quote={testimonial.quote}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
