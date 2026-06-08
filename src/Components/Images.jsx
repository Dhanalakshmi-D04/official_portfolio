import gsap, { Expo, ScrollTrigger } from "gsap/all";
import React, { useEffect } from "react";

const Images = () => {
  const position = [
    {
      video: "/bluetooth.mp4",
      right: "right-[80%]",
      top: "top-[50%]",
      height: "h-[80%]",
      width: "w-[100%]",
    },
    {
      image: "/p1.jpeg",
      right: "-right-[40%]",
      top: "top-[20%]",
      height: "h-[50%]",
      width: "w-[80%]",
    },
    {
      image: "/ra.jpeg",
      right: "right-[90%]",
      top: "top-[90%]",
      height: "h-[40%]",
      width: "w-[120%]",
    },
    {
      video: "/bs.mp4",
      right: "-right-[90%]",
      top: "top-[86%]",
      height: "h-[50%]",
      width: "w-[100%]",
    },
  ];

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".images-section",
        scroller: "body",
        start: "top 30%",
        end: "top -200%",
        scrub: true,
      },
      defaults: {
        ease: Expo.inOut,
      },
    });

    tl.to(".images:nth-child(1) video", { x: "-50%", y: "-100%" }, "a")
      .to(".images:nth-child(2) img", { x: "90%", y: "-50%" }, "a")
      .to(".images:nth-child(3) img", { x: "-50%", y: "-50%" }, "a")
      .to(".images:nth-child(4) video", { x: "50%", y: "-50%" }, "a");

    gsap.from(".works-title",
       {

      y: 80,
      opacity: 0,
      duration: 1,
      ease: Expo.out,
      scrollTrigger: {
        trigger: ".works-title",
        start: "top 80%",
      },
    });
  }, []);

  return (
    <>
      {/* Section Title */}
      <div className="w-full flex justify-center mt-80
       mb-80">
        <h1 className="works-title text-5xl sm:text-7xl font-semibold tracking-tight 
bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-900 
bg-clip-text text-transparent">


          Code & Builds
        </h1>
      </div>

      {/* Images Section */}
      <div className="images-section w-full h-[50vh] sm:h-[180vh] overflow-hidden flex items-center justify-center">
        <div className="relative w-1/3 sm:w-1/4 h-1/2">
          {position.map((item, index) => (
            <div
              key={index}
              className={`images absolute ${item.height} ${item.width} ${item.top} ${item.right}`}
            >
              {item.image ? (
                <img
                  src={item.image}
                  className="h-full w-full object-cover"
                  alt=""
                />
              ) : (
                <video
                  src={item.video}
                  className="h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                />
              )}
            </div>
          ))}

          <img
            src="/middleimage.jpg"
            className="h-full w-full object-cover"
            alt=""
          />

          {/* Projects CTA */}
          <div className="absolute bottom-[-120px] left-1/2 -translate-x-1/2">
            <a
              href="https://github.com/Dhanalakshmi-D04"
              target="_blank"
              rel="noopener noreferrer"
              className="projects-cta text-neutral-800 text-lg font-medium flex items-center gap-2 overflow-hidden"
            >
              <span className="cta-text relative">
                Curious? Explore the rest of my projects on GitHub
                <span className="cta-line absolute left-0 -bottom-1 w-full h-[1px] bg-neutral-800 scale-x-0 origin-left"></span>
              </span>
              <span className="cta-arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Images;
