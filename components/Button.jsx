"use client";
import Link from "next/link";

export default function RedButton123({parameter}) {
  console.log(parameter)
  return (
    <Link href={"/about"}>
      <button
        className="bg-red-500 text-white p-5"
        onClick={() => alert("butang yang same")}
      >
        {parameter}
      </button>
    </Link>
  );
}