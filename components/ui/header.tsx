"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./logo";
import OpenResearchLoader from "@/components/open-research-loader";

export default function Header() {
  const [showLoader, setShowLoader] = useState(false);

  const handleOpenResearchClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setShowLoader(true);
  };

  return (
    <>
      <OpenResearchLoader 
        show={showLoader} 
        targetUrl="https://openresearch.mankindresearch.org"
      />
      <header className="z-30 mt-2 w-full md:mt-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-gray-900/90 px-3 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-cyan-500),var(--color-purple-500),var(--color-cyan-500))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-xs hover:before:[background:linear-gradient(to_right,var(--color-cyan-400),var(--color-purple-400),var(--color-pink-400),var(--color-cyan-400))_border-box] transition-all duration-500">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Navigation links */}
          <nav className="hidden md:flex flex-1 items-center justify-center">
            <ul className="flex items-center gap-6 font-[family-name:var(--font-gt-pressura)] text-sm">
              <li>
                <Link href="/" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 whitespace-nowrap">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/lab-arm" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 whitespace-nowrap">
                  Our Labs
                </Link>
              </li>
              <li>
                <Link href="/research-arm" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 whitespace-nowrap">
                  Commercial
                </Link>
              </li>
              <li>
                <a 
                  href="https://openresearch.mankindresearch.org" 
                  onClick={handleOpenResearchClick}
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 whitespace-nowrap cursor-pointer"
                >
                  Open Research
                </a>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 whitespace-nowrap">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/press" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 whitespace-nowrap">
                  Press
                </Link>
              </li>
              <li>
                <Link href="/investor-relations" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 whitespace-nowrap">
                  Investor Relations
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contact CTA */}
          <ul className="flex flex-1 items-center justify-end gap-3">
            <li>
              <Link
                href="/contact"
                className="btn-sm bg-linear-to-t from-cyan-600 to-cyan-500 bg-[length:100%_100%] bg-[bottom] py-[5px] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)]"
              >
                Get in Touch
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
    </>
  );
}
