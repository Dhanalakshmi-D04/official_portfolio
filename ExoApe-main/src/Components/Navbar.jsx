import React, { useEffect } from "react";
import Overflow from "./Overflow";

const Navbar = () => {
  Overflow(".logo svg, .links div", 0.5)


  return (
    <div className="w-full fixed z-[999]">
      <div className="max-w-screen-3xl mx-auto p-5 sm:p-10 flex justify-between items-center text-white">
        <div className="logo overflow-hidden">
  <h1 className="text-2xl font-semibold tracking-tight">
    🍁
  </h1>
</div>


        <div className="toggler sm:hidden space-y-[3px]">
          <div className="line w-5 h-[1.5px] bg-white"></div>
          <div className="line w-5 h-[1.5px] bg-white"></div>
          <div className="line w-5 h-[1.5px] bg-white"></div>
        </div>

        <div className="links overflow-hidden hidden sm:flex items-center gap-10">
  <div className="sm:flex items-center gap-10">
    {[
      { name: "Home", id: "home" },
      { name: "About", id: "about" },
      { name: "Projects", id: "projects" },
      { name: "Contact", id: "contact" },
    ].map((item) => (
      <a
        key={item.name}
        href={`#${item.id}`}
        className="text-lg font-medium cursor-pointer hover:opacity-70 transition"
      >
        {item.name}
      </a>
    ))}
  </div>
</div>

      </div>
    </div>
  );
};

export default Navbar;
