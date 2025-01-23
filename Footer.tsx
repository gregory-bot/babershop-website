import React from "react";
import { Scissors } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="flex items-center space-x-2 mb-4">
            <Scissors className="h-6 w-6 text-amber-500" />
            <span className="text-xl font-bold">Benji's</span>
          </div>
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} Benji's Barbershop. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
