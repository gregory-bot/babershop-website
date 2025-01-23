import React from "react";

const haircuts = [
  {
    name: "classic fade",
    image:
      "https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: "KSH300",
    description: "Clean, modern fade with precision trimming",
    duration: "45 mins",
  },
  {
    name: "luxury Beard Trim",
    image:
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: "KSH 450",
    description: "Professional beard shaping and conditioning",
    duration: "30 mins",
  },
  {
    name: "Full Service",
    image:
      "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: "KSH 600",
    description: "Haircut, beard trim, and hot towel treatment",
    duration: "1 hour",
  },
  {
    name: "'Head' Massage💀😊",
    image:
      "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: "KSH 3000",
    description: "Relaxing scalp massage with premium oils",
    duration: "  30 mins",
  },
  {
    name: "kids Haircut",
    image:
      "https://images.unsplash.com/photo-1595925889916-2a1d773a0613?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: "KSH 460",
    description: "Gentle and fun haircuts for children",
    duration: "30 mins",
  },
  {
    name: "Hair Coloring",
    image:
      "https://images.pexels.com/photos/7388914/pexels-photo-7388914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: "KSH 300",
    description: "Professional hair coloring and styling",
    duration: "2 hours",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {haircuts.map((haircut, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <img
                src={haircut.image}
                alt={haircut.name}
                className="w-full h-32 object-cover"
              />
              <div className="p-3">
                <h3 className="text-base font-semibold text-gray-900 mb-1">
                  {haircut.name}
                </h3>
                <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                  {haircut.description}
                </p>
                <div className="flex justify-between items-center mb-2 text-sm">
                  <span className="text-blue-600 font-bold">
                    {haircut.price}
                  </span>
                  <span className="text-gray-500">{haircut.duration}</span>
                </div>
                <button
                  onClick={() => (window.location.href = "#book-now")}
                  className="w-full bg-blue-600 text-white py-1.5 rounded text-sm font-medium hover:bg-blue-700 transition-colors duration-300"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
