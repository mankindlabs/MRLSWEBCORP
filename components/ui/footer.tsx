import Logo from "./logo";
import Link from "next/link";
import Image from "next/image";
import FooterIllustration from "@/public/images/footer-illustration.svg";

export default function Footer() {
  return (
    <footer>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Footer illustration */}
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-1/2"
          aria-hidden="true"
        >
          <Image
            className="max-w-none"
            src={FooterIllustration}
            width={1076}
            height={378}
            alt="Footer illustration"
          />
        </div>
        <div className="grid grid-cols-2 justify-between gap-12 py-8 sm:grid-rows-[auto_auto] md:grid-cols-4 md:grid-rows-[auto_auto] md:py-12 lg:grid-cols-[repeat(4,minmax(0,140px))_1fr] lg:grid-rows-1 xl:gap-20">
          {/* 1st block */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200 font-[family-name:var(--font-gt-maru)]">Organisation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-cyan-200/65 transition hover:text-cyan-400 font-[family-name:var(--font-gt-pressura)] font-light"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="text-cyan-200/65 transition hover:text-cyan-400 font-[family-name:var(--font-gt-pressura)] font-light"
                  href="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="text-cyan-200/65 transition hover:text-cyan-400 font-[family-name:var(--font-gt-pressura)] font-light"
                  href="/press"
                >
                  Press
                </Link>
              </li>
              <li>
                <a 
                  href="https://openresearch.mankindresearch.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-200/65 transition hover:text-cyan-400 font-[family-name:var(--font-gt-pressura)] font-light"
                >
                  Open Research
                </a>
              </li>
              <li>
                <Link
                  className="text-cyan-200/65 transition hover:text-cyan-400 font-[family-name:var(--font-gt-pressura)] font-light"
                  href="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          {/* 2nd block */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200 font-[family-name:var(--font-gt-maru)]">Lab Arm</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-cyan-200/65 transition hover:text-cyan-400 font-[family-name:var(--font-gt-pressura)] font-light"
                  href="/lab-arm"
                >
                  Corporate Innovation
                </Link>
              </li>
              <li>
                <span className="text-cyan-200/40 font-[family-name:var(--font-gt-pressura)] font-light text-xs">
                  lab@mankind research.org
                </span>
              </li>
            </ul>
          </div>
          {/* 3rd block */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200 font-[family-name:var(--font-gt-maru)]">Research Arm</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-cyan-200/65 transition hover:text-cyan-400 font-[family-name:var(--font-gt-pressura)] font-light"
                  href="/research-arm"
                >
                  Collaborative Research
                </Link>
              </li>
              <li>
                <span className="text-cyan-200/40 font-[family-name:var(--font-gt-pressura)] font-light text-xs">
                  research@mankindresearch.org
                </span>
              </li>
            </ul>
          </div>
          {/* 4th block */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200 font-[family-name:var(--font-gt-maru)]">
              Location
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="text-cyan-200/65 font-[family-name:var(--font-gt-pressura)] font-light">
                  9th Floor, 5th on Atrium
                </span>
              </li>
              <li>
                <span className="text-cyan-200/65 font-[family-name:var(--font-gt-pressura)] font-light">
                  Sandhurst, Sandton
                </span>
              </li>
              <li>
                <span className="text-cyan-200/65 font-[family-name:var(--font-gt-pressura)] font-light">
                  South Africa, 2196
                </span>
              </li>
            </ul>
          </div>
          {/* 5th block */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 lg:text-right">
            <div className="mb-3">
              <Logo />
            </div>
            <div className="text-sm">
              <p className="mb-3 text-cyan-200/65 font-[family-name:var(--font-gt-pressura)] font-light">
                © 2014-2025 Mankind Research Labs Sandton
              </p>
              <p className="text-xs text-cyan-200/40 font-[family-name:var(--font-gt-pressura)] font-light">
                Redefining Intelligence. Advancing Research. Translating Innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
