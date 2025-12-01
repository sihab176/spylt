import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 z-50 md:p-9 p-3">
      <Image
        src="/images/nav-logo.svg"
        alt="nav-logo"
        className="md:w-24 w-20"
        width={96}
        height={96}
      />
    </nav>
  );
};

export default Navbar;
