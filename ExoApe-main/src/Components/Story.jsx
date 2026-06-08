import React, { useEffect, useRef } from "react";

const Story = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // This forces the video to play even if the browser tries to pause it
    if (videoRef.current) {
      videoRef.current.muted = true; // Essential for autoplay
      videoRef.current.play().catch(error => {
        console.error("Autoplay failed:", error);
      });
    }
  }, []);

  return (
    <div className="relative overflow-hidden h-[85vh] sm:h-screen bg-black">
      <div
        data-scroll
        data-scroll-speed="-0.5"
        className="relative w-full h-full flex items-center text-[#e0ccbb]"
      >
        {/* Background Video Layer */}
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            className="w-full h-full object-cover opacity-60"
            autoPlay
            muted
            loop
            playsInline
            src="/0_Technology_Circuit_Board_3840x2160.mp4"
          />
        </div>

        {/* Content Layer - Ensure z-10 is here so it's ABOVE the video */}
        <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-7 sm:px-28">
          <div className="space-y-7 sm:space-y-10">
            <div>
              <h1 className="text-6xl sm:text-[9rem] sm:tracking-tighter font-medium leading-none">Say</h1>
              <h1 className="text-6xl sm:text-[9rem] sm:tracking-tighter font-medium leading-none">
                Hello
              </h1>
            </div>

            <p className="text-lg sm:opacity-90 sm:text-2xl sm:w-1/2 leading-snug">
              Let's Get in Touch
            </p>

            <span className="block w-full h-[1px] opacity-30 bg-[#e0ccbb]" />

            <div className="flex justify-between items-end">
              <div className="flex gap-16 sm:gap-32">
                <ul className="space-y-2 max-sm:hidden">
                   {/* Address list */}
                   {[<a 
        className="block text-md opacity-85 hover:opacity-100 transition-opacity" 
        href="mailto:dhanalakshmidgowda04@gmail.com"
      > 
        dhanalakshmidgowda04@gmail.com
      </a>,"Bengaluru,Karnataka"].map((item) => (
                    <li key={item} className="text-sm opacity-70">{item}</li>
                  ))}
                </ul>
                
                <ul className="space-y-2">
  <li>
    <a
      href="https://www.linkedin.com/in/dhanalakshmi-d-gowda-09215233b/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm opacity-70 hover:opacity-100 transition cursor-pointer"
    >
      LinkedIn
    </a>
  </li>

  <li>
    <a
      href="https://github.com/Dhanalakshmi-D04"
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm opacity-70 hover:opacity-100 transition cursor-pointer"
    >
      GitHub
    </a>
  </li>

  <li>
    <a
      href="https://www.instagram.com/_.dhanalakshmi.d.gowda._23?igsh=OHIzZHZqb3ozMXU1"
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm opacity-70 hover:opacity-100 transition cursor-pointer"
    >
      Instagram
    </a>
  </li>
</ul>

           </div>
              <a className="border-b max-sm:hidden border-[#e0ccbb] pb-1" href="#home">
                Home
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story; 