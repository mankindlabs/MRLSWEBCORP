export const metadata = {
  title: "Contact - Mankind Research Labs Sandton",
  description: "Reach out for corporate innovation or research collaboration.",
};

import PageIllustration from "@/components/page-illustration";
import Image from "next/image";

export default function Contact() {
  return (
    <>
      <PageIllustration />
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="py-12 md:py-20">
            {/* Hero */}
            <div className="pb-12 text-center md:pb-20">
              <h1
                className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-cyan-400),var(--color-purple-400),var(--color-pink-400),var(--color-cyan-400))] bg-[length:200%_auto] bg-clip-text pb-5 font-[family-name:var(--font-gt-maru)] text-4xl font-light tracking-tight text-transparent md:text-6xl"
                data-aos="fade-up"
              >
                Contact Mankind Research Labs Sandton
              </h1>
              <div className="mx-auto max-w-3xl">
                <p
                  className="text-xl text-gray-300 font-[family-name:var(--font-gt-pressura)] font-light"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  Reach out for corporate innovation or research collaboration.
                </p>
              </div>
            </div>

            {/* Contact Cards */}
            <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto pb-12 md:pb-20">
              {/* Lab Arm Contact */}
              <div
                className="relative rounded-3xl bg-gradient-to-br from-cyan-500/5 to-blue-500/5 p-1 border border-cyan-500/20"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <div className="rounded-[calc(1.5rem-1px)] bg-gray-900 p-8">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20">
                    <Image
                      src="/images/branding/LOGO_NOLETTERS.png"
                      alt="Lab Arm"
                      width={32}
                      height={32}
                      className="opacity-90"
                    />
                  </div>
                  <h2 className="mb-4 font-[family-name:var(--font-gt-maru)] text-2xl font-light text-gray-200">
                    Lab and Corporate Innovation Arm
                  </h2>
                  <p className="mb-6 text-gray-400 font-[family-name:var(--font-gt-pressura)] font-light leading-relaxed">
                    For corporate and innovation enquiries, product development partnerships, and strategic business initiatives.
                  </p>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-500 font-[family-name:var(--font-gt-pressura)] font-light mb-1">
                        Email
                      </p>
                      <a
                        href="mailto:lab@mankindresearch.org"
                        className="text-cyan-300 font-[family-name:var(--font-gt-maru)] font-light hover:text-cyan-200 transition-colors"
                      >
                        lab@mankindresearch.org
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Research Arm Contact */}
              <div
                className="relative rounded-3xl bg-gradient-to-br from-purple-500/5 to-pink-500/5 p-1 border border-purple-500/20"
                data-aos="fade-up"
                data-aos-delay={400}
              >
                <div className="rounded-[calc(1.5rem-1px)] bg-gray-900 p-8">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                    <Image
                      src="/images/branding/LOGO_NOLETTERS.png"
                      alt="Research Arm"
                      width={32}
                      height={32}
                      className="opacity-90"
                    />
                  </div>
                  <h2 className="mb-4 font-[family-name:var(--font-gt-maru)] text-2xl font-light text-gray-200">
                    Organisation and Collaborative Research Arm
                  </h2>
                  <p className="mb-6 text-gray-400 font-[family-name:var(--font-gt-pressura)] font-light leading-relaxed">
                    For research collaborations, institutional inquiries, academic partnerships, and foundational AI research initiatives.
                  </p>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-500 font-[family-name:var(--font-gt-pressura)] font-light mb-1">
                        Email
                      </p>
                      <a
                        href="mailto:research@mankind research.org"
                        className="text-purple-300 font-[family-name:var(--font-gt-maru)] font-light hover:text-purple-200 transition-colors"
                      >
                        research@mankindresearch.org
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="text-center pb-12 md:pb-20" data-aos="fade-up">
              <div className="relative rounded-3xl bg-gradient-to-br from-gray-800/40 to-gray-900/40 p-1 border border-gray-700/50 inline-block">
                <div className="rounded-[calc(1.5rem-1px)] bg-gray-900 px-12 py-8">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-gray-700/30 to-gray-800/30 mx-auto">
                    <Image
                      src="/images/branding/LOGO_NOLETTERS.png"
                      alt="Location"
                      width={32}
                      height={32}
                      className="opacity-90"
                    />
                  </div>
                  <h3 className="mb-4 font-[family-name:var(--font-gt-maru)] text-xl font-light text-gray-200">
                    Headquarters
                  </h3>
                  <p className="text-gray-300 font-[family-name:var(--font-gt-pressura)] font-light mb-2">
                    9th Floor, 5th on Atrium
                  </p>
                  <p className="text-gray-300 font-[family-name:var(--font-gt-pressura)] font-light mb-2">
                    Sandhurst, Sandton
                  </p>
                  <p className="text-gray-300 font-[family-name:var(--font-gt-pressura)] font-light">
                    South Africa, 2196
                  </p>
                </div>
              </div>
            </div>

            {/* HQ Image */}
            <div className="text-center" data-aos="fade-up">
              <div className="relative rounded-3xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-1 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(135deg,var(--color-cyan-500),var(--color-purple-500),var(--color-pink-500))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] inline-block max-w-4xl">
                <img
                  src="/images/hq/OUR_HQ_WITH_LOGO_OUTSIDE.webp"
                  alt="Mankind Research Labs Headquarters"
                  className="rounded-[calc(1.5rem-1px)]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
