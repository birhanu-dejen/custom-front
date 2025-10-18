import { FacebookIcon, Youtube, Send, Globe } from "lucide-react";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-[#202230] text-white relative pb-8 pt-5">
      <div className="container mx-auto px-2">
        {/* Logo */}
        <Link href="/" className="text-lg text-[#ff6363] font-bold">
          Logo
        </Link>

        {/* Main content */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          {/* Navigation Links */}
          <nav className="flex flex-col gap-4 text-sm mb-3 pt-8 pb-8 md:flex-row md:gap-8 md:mb-0">
            <a href="/about" className="hover:text-gray-400 transition-colors">
              About
            </a>
            <a
              href="/services"
              className="hover:text-gray-400 transition-colors"
            >
              Services
            </a>
            <a href="/blog" className="hover:text-gray-400 transition-colors">
              Blog
            </a>
            <a
              href="/contact"
              className="hover:text-gray-400 transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
        <div className="relative mt-6 w-full">
          <div className="flex justify-between items-center w-full">
            {/* Copyright left */}
            <div className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} logo.
            </div>

            {/* Social icons centered */}
            <div className="absolute left-1/2 transform -translate-x-1/2 flex md:gap-4 gap-1.5">
              <FacebookIcon size={23} color="#6B7280" />
              <Send size={23} color="#6B7280" />
              <Youtube size={23} color="#6B7280" />
            </div>

            {/* Language selector right */}
            <div className="flex items-center md:gap-2">
              <Globe size={20} className="text-gray-400" />
              <select className="bg-transparent text-sm text-gray-400 focus:outline-none">
                <option value="en">English</option>
                <option value="am">አማርኛ</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
