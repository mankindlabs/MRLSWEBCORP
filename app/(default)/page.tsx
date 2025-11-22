export const metadata = {
  title: "Mankind Research Labs Sandton - Redefining Intelligence",
  description: "Redefining Intelligence. Advancing Research. Translating Innovation.",
};

import PageIllustration from "@/components/page-illustration";
import HeroMankind from "@/components/hero-mankind";
import IntroSection from "@/components/intro-section";
import DualArms from "@/components/dual-arms";
import Image from "next/image";
import ReceptionPlaque from "../../assets/MANKINDGOODZ/INSIDE_THE_HQ/RECEPTION_PLAQUE.png";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <HeroMankind />
      <IntroSection />
      <DualArms />
      
      {/* Reception Plaque Section */}
      <section className="relative py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex justify-center" data-aos="fade-up">
            <div className="relative rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-1 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(135deg,var(--color-purple-500),var(--color-pink-500),var(--color-purple-500))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:rounded-[inherit] after:bg-gradient-to-br after:from-purple-500/10 after:to-pink-500/10 after:-z-10">
              <Image
                src={ReceptionPlaque}
                alt="Mankind Research Labs Reception"
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>
      
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

            {/* Motto with Glow */}
            <div className="relative">
              <p className="text-2xl md:text-3xl font-[family-name:var(--font-gt-maru)] font-light text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-[gradient_6s_linear_infinite] bg-[length:200%_auto]">
                "Impossible Is Nothing Through Technology"
              </p>
              <div className="absolute inset-0 blur-xl bg-gradient-to-r from-cyan-400/30 via-purple-400/30 to-pink-400/30 -z-10"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
