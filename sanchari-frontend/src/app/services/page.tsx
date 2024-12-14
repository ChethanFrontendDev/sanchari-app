import React from "react";

const Services: React.FC = () => {
  const services = [
    {
      title: "Trip Planning",
      description:
        "Simplify your travel planning with personalized itineraries, cost estimations, and travel tips.",
      icon: "🌍",
    },
    {
      title: "Accommodation Booking",
      description:
        "Find and book hotels, resorts, or homestays with trusted partners at the best prices.",
      icon: "🏨",
    },
    {
      title: "Travel Guides",
      description:
        "Access comprehensive travel guides to explore destinations, landmarks, and hidden gems.",
      icon: "📖",
    },
    {
      title: "Transport Solutions",
      description:
        "Book flights, trains, or rental cars with ease through our integrated booking system.",
      icon: "✈️",
    },
    {
      title: "Customer Support",
      description:
        "Get 24/7 assistance to resolve travel-related issues and ensure a hassle-free journey.",
      icon: "📞",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold text-orange-500 mb-8 text-center">
          Our Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h2>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
