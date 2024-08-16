import Link from "next/link";
import React from "react";
import RedButton123 from "./Button";

const LinkButton = () => {
  return (
    // navigate to home page / root page
    <Link href={"/about"}>
      <RedButton123 />
    </Link>
  );
};

export default LinkButton;