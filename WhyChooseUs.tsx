import React from "react";
import { Star, Clock, Users, MessageSquare } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Star className="w-8 h-8 text-amber-500" />,
      title: "Expert Barbers",
      description:
        "Our team of skilled professionals ensures you get the perfect cut every time",
    },
    {
      icon: <Clock className="w-8 h-8 text-amber-500" />,
      title: "Flexible Hours",
      description:
        "Open 7 days a week with convenient morning and evening appointments",
    },
    {
      icon: <Users className="w-8 h-8 text-amber-500" />,
      title: "Premium Experience",
      description: "Enjoy complimentary beverages and a relaxing atmosphere",
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-amber-500" />,
      title: "Customer Satisfaction",
      description: "Thousands of happy customers and 5-star reviews",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          why Benji's babershop
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">{reason.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {reason.title}
              </h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
