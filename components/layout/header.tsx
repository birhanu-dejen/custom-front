"use client";
import { useState } from "react";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full  bg-white">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="text-lg text-[#ff6363] font-bold">
          Logo
        </Link>

        {/* Hamburger menu opens Sheet */}
        <Sheet>
          <SheetTrigger asChild>
            <button
              className="text-gray-700 focus:outline-none lg:hidden"
              aria-label="Open menu"
            >
              <Menu size={20} className="scale-x-150" />
            </button>
          </SheetTrigger>

          <SheetContent side="right" className="w-screen">
            {/* Login / Signup Buttons */}
            <div className="flex flex-col gap-3 px-8 mt-35">
              <Link
                href="/auth/login"
                className="w-full text-center py-2.5 px-4 bg-[#ff6363] text-white  rounded-lg font-bold"
                onClick={() => setOpen(false)}
              >
                Log In
              </Link>
              <Link
                href="/auth/signup"
                className="w-full text-center py-2.5 px-4  bg-gray-100 rounded-lg "
                onClick={() => setOpen(false)}
              >
                Sign Up
              </Link>
            </div>

            <nav className="mt-5 flex flex-col space-y-2 pl-20">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="py-2 text-gray-700 hover:text-blue-600"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
