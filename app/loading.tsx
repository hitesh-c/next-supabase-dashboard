"use client";

import Image from "next/image";
export default function NotFound() {

  return (
    <div className="absolute left-1/2 top-1/2 mb-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center text-center">
      <Image
        src="vercel.svg"
        alt="Logo"
        width={100}
        height={200}
      />
    </div>
  );
}
