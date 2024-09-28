import Link from "next/link";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="h-1 bg-slate-400"></div>
      <footer className="bg-slate-950  max-md:text-sm max-sm:text-xs flex justify-between items-center max-lg:items-start px-5 py-8">
        <div className="flex flex-col">
          <div className="max-md:flex max-md:flex-col space-x-1 max-md:space-x-0 max-md:space-y-1">
            <span>Copyright © {currentYear}</span>
            <span>KeepSupport | All rights reserve</span>
          </div>
          <div className="flex items-center text-slate-400 mb-4 mt-1 space-x-1">
            <span>Made by Shahnoor Khan with</span>
            <lord-icon
              class="w-5 h-5 max-md:w-4 max-md:h-4"
              src="https://cdn.lordicon.com/jjoolpwc.json"
              trigger="hover"
              colors="primary:#c71f16,secondary:#ffffff"
            ></lord-icon>
          </div>
          <ul className="flex space-x-6 max-lg:space-x-0 max-lg:flex-col max-lg:space-y-4 text-sm max-md:text-xs">
            <Link href="/about" className="hover:underline text-slate-200">
              <li>About Us</li>
            </Link>
            <Link href="/contact" className="hover:underline text-slate-200">
              <li>Contact Us</li>
            </Link>
            <Link href="/privacy" className="hover:underline text-slate-200">
              <li>Privacy Policy</li>
            </Link>
            <Link href="/terms" className="hover:underline text-slate-200">
              <li>Terms & Conditions</li>
            </Link>
            <Link href="/refund" className="hover:underline text-slate-200">
              <li>Cancellation/Refund Policies</li>
            </Link>
          </ul>
        </div>
        <div className="text-lg max-md:text-sm max-sm:text-xs font-semibold text-center space-y-4">
          <span>Follow us on</span>
          <div className="space-x-5 max-md:space-x-0 max-md:space-y-2 max-md:flex max-md:flex-col max-md:justify-center max-md:items-center">
            <Link target="_blank" href="https://www.facebook.com">
              <lord-icon
                class="h-8 w-8 max-md:h-7 max-md:w-7"
                Stroke="bold"
                src="https://cdn.lordicon.com/iqagrlso.json"
                trigger="morph"
                state="morph-square"
                colors="primary:#ffffff,secondary:#c71f16"
              ></lord-icon>
            </Link>
            <Link target="_blank" href="https://in.linkedin.com">
              <lord-icon
                class="h-8 w-8 max-md:h-7 max-md:w-7"
                Stroke="bold"
                src="https://cdn.lordicon.com/mdyiqybm.json"
                trigger="morph"
                state="morph-square"
                colors="primary:#ffffff,secondary:#c71f16"
              ></lord-icon>
            </Link>
            <Link target="_blank" href="https://www.youtube.com/">
              <lord-icon
                class="h-8 w-8 max-md:h-7 max-md:w-7"
                Stroke="bold"
                src="https://cdn.lordicon.com/ogbssbzd.json"
                trigger="morph"
                state="morph-logotype"
                colors="primary:#ffffff,secondary:#c71f16"
              ></lord-icon>
            </Link>
            <Link target="_blank" href="https://x.com">
              <lord-icon
                class="h-8 w-8 max-md:h-7 max-md:w-7"
                Stroke="bold"
                src="https://cdn.lordicon.com/lhscugaw.json"
                trigger="morph"
                state="morph-square"
                colors="primary:#ffffff,secondary:#c71f16"
              ></lord-icon>
            </Link>
            <Link target="_blank" href="https://www.instagram.com">
              <lord-icon
                class="h-8 w-8 max-md:h-7 max-md:w-7"
                Stroke="bold"
                src="https://cdn.lordicon.com/ewswvzmw.json"
                trigger="morph"
                state="morph-square"
                colors="primary:#ffffff,secondary:#c71f16"
              ></lord-icon>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
