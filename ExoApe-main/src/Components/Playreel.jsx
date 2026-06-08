import gsap, { ScrollTrigger } from "gsap/all";
import React, { useEffect } from "react";

const Playreel = () => {
  useEffect(() => {
    gsap.timeline({
      scrollTrigger: {
        scroller: "body",
        pin: ".play-reel",
        start: "top 0",
        end: "top -150%",
        scrub: true,
      },
    })
      .to(".video-div", {
        height: "110vh",
        width: "110vw",
      })
      .to(
        "h2",
        {
          gap: "0",
        },
        "<"
      )
      .to(
        "svg",
        {
          opacity: 0,
        },
        "<"
      );
  }, []);

  return (
    <section
      id="playreel"
      className="play-reel relative w-full h-screen overflow-hidden bg-black text-white"
    >
      {/* VIDEO */}
      <div className="video-div w-48 sm:w-80 sm:h-44 h-28 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="absolute h-full w-full bg-black/70 scale-[1.01]">
          <svg
            className="text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full mx-auto sm:hidden scale-75 opacity-25"
            viewBox="0 0 86 86"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="43" cy="43" r="41" stroke="currentColor" />
            <path d="M41 38V48L49.1818 43L41 38Z" fill="currentColor" />
          </svg>
        </div>

        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          src="/reel.mp4"
        />
      </div>

      {/* OVERLAY */}
      <div className="overlay absolute flex flex-col justify-between w-full h-full py-20">
        <div className="flex items-center justify-center gap-2">
          <svg
            className="size-3"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
              fill="currentColor"
            />
          </svg>
          <h2 className="text-sm">Skills</h2>
        </div>

        <h2 className="w-full flex items-center justify-center gap-32 sm:gap-[42%]">
          <div className="text-6xl sm:text-9xl">AI</div>
          <div className="text-6xl sm:text-9xl">ML</div>
        </h2>

        <p className="text-center text-xs text-white/85 font-medium tracking-wide">
          Focused on Computer Vision, AI, ML, understanding and building systems
        </p>

        <p className="text-center text-sm">
          Turning ideas into intelligent experiences with code and creativity.
        </p>
      </div>
    </section>
  );
};

export default Playreel;
