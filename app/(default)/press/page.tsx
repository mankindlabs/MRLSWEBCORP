export const metadata = {
  title: "Mankind Press - Mankind Research Labs Sandton",
  description: "News, updates, and announcements from Mankind Research Labs.",
};

import PageIllustration from "@/components/page-illustration";
import Image from "next/image";

export default function Press() {
  return (
    <>
      <PageIllustration />
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="py-12 md:py-20">
            {/* Hero */}
            <div className="pb-12 text-center md:pb-20">
              <div className="inline-block mb-6" data-aos="fade-up">
                <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 border border-cyan-500/30 mx-auto">
                  <Image
                    src="/images/branding/LOGO_NOLETTERS.png"
                    alt="Mankind Press"
                    width={40}
                    height={40}
                    className="opacity-90"
                  />
                </div>
              </div>
              <h1
                className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-cyan-400),var(--color-purple-400),var(--color-pink-400),var(--color-cyan-400))] bg-[length:200%_auto] bg-clip-text pb-5 font-[family-name:var(--font-gt-maru)] text-4xl font-light tracking-tight text-transparent md:text-6xl"
                data-aos="fade-up"
              >
                Mankind Press
              </h1>
              <div className="mx-auto max-w-3xl">
                <p
                  className="text-xl text-gray-300 font-[family-name:var(--font-gt-pressura)] font-light"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  News, updates, and announcements from Mankind Research Labs Sandton. Daily publishing of research progress, product developments, and institutional collaborations.
                </p>
              </div>
            </div>

            {/* Coming Soon Section */}
            <div className="pb-12 md:pb-20" data-aos="fade-up">
              <div className="relative rounded-3xl bg-gradient-to-br from-gray-800/40 to-gray-900/40 p-1 border border-gray-700/50">
                <div className="rounded-[calc(1.5rem-1px)] bg-gray-900 p-12 md:p-20 text-center">
                  <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 mx-auto">
                    <Image
                      src="/images/branding/LOGO_NOLETTERS.png"
                      alt="Coming Soon"
                      width={48}
                      height={48}
                      className="opacity-90"
                    />
                  </div>
                  <h2 className="mb-6 font-[family-name:var(--font-gt-maru)] text-3xl font-light text-gray-200 md:text-4xl">
                    Press Releases Coming Soon
                  </h2>
                  <p className="mb-8 text-lg text-gray-400 font-[family-name:var(--font-gt-pressura)] font-light leading-relaxed max-w-2xl mx-auto">
                    Mankind Press will publish daily updates on research breakthroughs, product launches, partnerships, and institutional developments. Stay tuned for comprehensive coverage of our work advancing artificial intelligence.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <div className="inline-block rounded-xl bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 px-6 py-4 border border-cyan-500/20">
                      <p className="text-sm text-gray-500 font-[family-name:var(--font-gt-pressura)] font-light mb-1">
                        Research Updates
                      </p>
                      <p className="text-cyan-300 font-[family-name:var(--font-gt-maru)] font-light">
                        Foundational AI Progress
                      </p>
                    </div>
                    <div className="inline-block rounded-xl bg-gradient-to-br from-purple-500/10 to-purple-500/5 px-6 py-4 border border-purple-500/20">
                      <p className="text-sm text-gray-500 font-[family-name:var(--font-gt-pressura)] font-light mb-1">
                        Product Launches
                      </p>
                      <p className="text-purple-300 font-[family-name:var(--font-gt-maru)] font-light">
                        Innovation Announcements
                      </p>
                    </div>
                    <div className="inline-block rounded-xl bg-gradient-to-br from-pink-500/10 to-pink-500/5 px-6 py-4 border border-pink-500/20">
                      <p className="text-sm text-gray-500 font-[family-name:var(--font-gt-pressura)] font-light mb-1">
                        Partnerships
                      </p>
                      <p className="text-pink-300 font-[family-name:var(--font-gt-maru)] font-light">
                        Collaboration News
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Press Contact */}
            <div className="text-center" data-aos="fade-up">
              <div className="inline-block rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 px-8 py-6 border border-gray-700/50">
                <p className="text-sm text-gray-400 font-[family-name:var(--font-gt-pressura)] font-light mb-4">
                  For press inquiries and media relations
                </p>
                <p className="text-lg text-cyan-300 font-[family-name:var(--font-gt-maru)] font-light mb-4">
                  press@mankindresearch.org
                </p>
                <p className="text-sm text-gray-500 font-[family-name:var(--font-gt-pressura)] font-light">
                  Sandton, South Africa
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
