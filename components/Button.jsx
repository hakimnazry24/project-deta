"use client";

export default function RedButton123({parameter}) {
  console.log(parameter)
  return (
    <button
      className="bg-red-500 text-white p-5"
      onClick={() => alert("butang yang same")}
    >
      {parameter}
    </button>
  );
}