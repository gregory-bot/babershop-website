import React, { useEffect, useState } from "react";
import TypewriterComponent from "typewriter-effect";

const HeroSection = () => {
  const [showTypewriter, setShowTypewriter] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTypewriter(true);
    }, 1000); // Delay before showing typewriter effect

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative h-screen">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "brightness(0.4)" }}
      >
        <source
          src="https://videos.pexels.com/video-files/20103027/20103027-hd_1920_1080_24fps.mp4"
          type="video/mp4"
        />
      </video>

      {/* Hero Content */}
      <div className="absolute inset-0 flex items-center justify-center text-center px-4">
        <div>
          <h1
            className="text-4xl md:text-6xl text-white mb-6"
            style={{
              fontFamily: "Courier New, monospace", // Courier New font
              fontWeight: "normal", // No bold
            }}
          >
            {showTypewriter ? (
              <TypewriterComponent
                options={{
                  strings: ["get a haircut and win that shawrie"],
                  autoStart: true,
                  loop: true,
                  delay: 100, // Slow down the typing effect
                  typeSpeed: 50, // Slow typing speed
                }}
              />
            ) : null}
          </h1>
          <a
            href="#book-now"
            className="bg-amber-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-amber-600 transition-colors duration-300"
          >
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
