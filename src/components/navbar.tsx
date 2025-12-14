"use client";
import Link from "next/link";
import { MenuIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Spotlight } from "./ui/spotlight-new";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-4 left-1/2 z-50 w-[90%] -translate-x-1/2 rounded-3xl border-b border-white bg-black/60 backdrop-blur-md px-6 py-4">
      
      <div className="flex items-center justify-between">
        {/* Logo */}
        <h1 className="special_font text-2xl">Chatty</h1>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {["Home", "Developer", "Pricing"].map((item) => (
            <Link
              key={item}
              href="/"
              className="transition-transform duration-300 hover:scale-125"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Desktop Button */}
        <div className="hidden lg:block">
          <Button asChild>
            <Link href="/signin">Sign In</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden"
        >
          <MenuIcon />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute left-0 top-full mt-4 w-full rounded-xl bg-black py-6">
          <Spotlight />
          <ul className="flex flex-col items-center gap-4 text-xl font-semibold">
            <li>Home</li>
            <li>Developer</li>
            <li>Pricing</li>
            <li>Sign In</li>
          </ul>
        </div>
      )}
    </div>
  );
}
