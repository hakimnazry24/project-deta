import React from "react";
import { FaRegEnvelopeOpen } from "react-icons/fa";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between py-8 px-20">
      <div>
        <FaRegEnvelopeOpen className="inline-block mr-4" />
        aiman@gmail.com
      </div>
      <ul className="flex gap-x-4">
        <Link href={"#about_section"}>
          <li>About</li>
        </Link>
        <Link href={"#service_section"}>
          <li>Service</li>
        </Link>
        <Link href={"#portfolio_section"}>
          <li>Portfolio</li>
        </Link>
        <Link href={"#contact_section"}>
          <li>Contact</li>
        </Link>
      </ul>
    </header>
  );
};

export default Header;
