export const metadata = {
  title: "Mankind Research Labs Sandton - Redefining Intelligence",
  description: "Redefining Intelligence. Advancing Research. Translating Innovation.",
};

import PageIllustration from "@/components/page-illustration";
import HeroMankind from "@/components/hero-mankind";
import HQSlider from "@/components/hq-slider";
import IntroSection from "@/components/intro-section";
import DualArms from "@/components/dual-arms";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <HeroMankind />
      <IntroSection />
      <DualArms />
      <HQSlider />
      
      {/* Bottom Contact & Motto Section */}
      <section className="relative py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center" data-aos="fade-up">
            {/* Logo */}
            <div className="mb-6 inline-block">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mx-auto">
                <Image
                  src="/images/branding/LOGO_NOLETTERS.png"
                  alt="Mankind Research Labs"
                  width={32}
                  height={32}
                  className="opacity-90"
                />
              </div>
            </div>

            {/* Contact Info */}
            <div className="inline-block rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 px-8 py-6 border border-gray-700/50 mb-8">
              <p className="text-sm text-gray-400 font-[family-name:var(--font-gt-pressura)] font-light mb-4">
                For corporate and innovation enquiries
              </p>
              <p className="text-lg text-cyan-300 font-[family-name:var(--font-gt-maru)] font-light mb-4">
                lab@mankindresearch.org
              </p>
              <p className="text-sm text-gray-500 font-[family-name:var(--font-gt-pressura)] font-light">
                Sandton, South Africa
              </p>
            </div>

            {/* Motto with Glow */}
            <div className="relative">
              <p className="text-2xl md:text-3xl font-[family-name:var(--font-gt-maru)] font-light text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-[gradient_6s_linear_infinite] bg-[length:200%_auto]">
                "Impossible Is Nothing Without Technology"
              </p>
              <div className="absolute inset-0 blur-xl bg-gradient-to-r from-cyan-400/30 via-purple-400/30 to-pink-400/30 -z-10"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
