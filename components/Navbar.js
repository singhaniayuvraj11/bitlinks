import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="h-16 bg-purple-700 flex justify-between px-3 items-center text-white">
      <Link href="/"><div className="logo font-bold text-2xl">BitLinks</div></Link>
      <ul className="flex justify-center items-center gap-4">
        <Link href="/">
          <li>home</li>
        </Link>
        <Link href="/about">
          <li>about</li>
        </Link>
        <Link href="/shorten">
          <li>shorten</li>
        </Link>
        <Link href="/contact">
          <li>contact us</li>
        </Link>
        <li className="flex gap-3">
          <Link href="/shorten">
            <button className="bg-purple-400 p-3 rounded-lg font-bold py-2 cursor-pointer">try now</button>
          </Link>
          <Link target="_blank" href="/github">
            <button className="bg-purple-400 p-3 rounded-lg font-bold py-2 cursor-pointer">GitHub</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
