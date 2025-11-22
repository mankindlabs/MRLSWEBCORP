export const metadata = {
  title: "About - Mankind Research Labs Sandton",
  description: "Mission, philosophy, and dual-arm structure of Mankind Research Labs Sandton.",
};

import PageIllustration from "@/components/page-illustration";
import Image from "next/image";

export default function About() {
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
                About Mankind Research Labs
              </h1>
              <div className="mx-auto max-w-3xl">
                <p
                  className="text-xl text-cyan-200/80 font-[family-name:var(--font-gt-pressura)] font-light"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  A brand built on technological innovation since 2014, transforming lives through intelligent systems.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="pb-12 md:pb-20" data-aos="fade-up">
              <div className="relative rounded-3xl bg-gradient-to-br from-gray-800/40 to-gray-900/40 p-1 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(135deg,var(--color-cyan-500),var(--color-purple-500))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
                <div className="rounded-[calc(1.5rem-1px)] bg-gray-900 p-8 md:p-12">
                  <h2 className="mb-6 font-[family-name:var(--font-gt-maru)] text-3xl font-light text-gray-200">
                    Our Mission
                  </h2>
                  <p className="mb-4 text-lg text-gray-300 font-[family-name:var(--font-gt-pressura)] font-light leading-relaxed">
                    Mankind Research Labs Sandton is a private artificial intelligence research laboratory and organisation headquartered in Sandton, South Africa. We operate with precision, scientific rigor, and a commitment to advancing the frontiers of intelligent systems.
                  </p>
                  <p className="text-lg text-gray-300 font-[family-name:var(--font-gt-pressura)] font-light leading-relaxed">
                    Mankind is a brand. We build our story while building branded technological products and innovations that carry our identity and continue to change and transform lives across the globe.
                  </p>
                </div>
              </div>
            </div>

            {/* Dual-Arm Structure */}
            <div className="pb-12 md:pb-20">
              <div className="text-center pb-12">
                <h2 className="font-[family-name:var(--font-gt-maru)] text-3xl font-light text-gray-200 md:text-4xl" data-aos="fade-up">
                  Dual-Arm Structure
                </h2>
                <p className="mt-4 text-lg text-gray-400 font-[family-name:var(--font-gt-pressura)] font-light" data-aos="fade-up" data-aos-delay={100}>
                  Two distinct arms operating independently to deliver strategic impact.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 md:gap-12">
                {/* Lab Arm */}
                <div data-aos="fade-up" data-aos-delay={200}>
                  <div className="relative rounded-3xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-8 border border-cyan-500/20">
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/30 to-blue-500/30">
                      <Image
                        src="/images/branding/LOGO_NOLETTERS.png"
                        alt="Lab Arm"
                        width={32}
                        height={32}
                        className="opacity-90"
                      />
                    </div>
                    <h3 className="mb-4 font-[family-name:var(--font-gt-maru)] text-2xl font-light text-gray-200">
                      Lab and Corporate Innovation Arm
                    </h3>
                    <p className="mb-4 text-gray-300 font-[family-name:var(--font-gt-pressura)] font-light leading-relaxed">
                      The strategic, applied, and commercial arm translating research into market-ready technologies, corporate partnerships, and innovation initiatives.
                    </p>
                    <p className="text-sm text-gray-400 font-[family-name:var(--font-gt-pressura)] font-light">
                      Focused on measurable outcomes, applied research, and commercial scalability with corporate rigor in project management and technology deployment.
                    </p>
                  </div>
                </div>

                {/* Research Arm */}
                <div data-aos="fade-up" data-aos-delay={400}>
                  <div className="relative rounded-3xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-8 border border-purple-500/20">
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500/30 to-pink-500/30">
                      <Image
                        src="/images/branding/LOGO_NOLETTERS.png"
                        alt="Research Arm"
                        width={32}
                        height={32}
                        className="opacity-90"
                      />
                    </div>
                    <h3 className="mb-4 font-[family-name:var(--font-gt-maru)] text-2xl font-light text-gray-200">
                      Organisation and Collaborative Research Arm
                    </h3>
                    <p className="mb-4 text-gray-300 font-[family-name:var(--font-gt-pressura)] font-light leading-relaxed">
                      Dedicated to foundational AI research, academic partnerships, government engagement, and international collaboration.
                    </p>
                    <p className="text-sm text-gray-400 font-[family-name:var(--font-gt-pressura)] font-light">
                      Focused on shared research initiatives, institutional development, and long-term scientific advancement with intellectual discipline.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Philosophy */}
            <div className="pb-12 md:pb-20" data-aos="fade-up">
              <div className="relative rounded-3xl bg-gradient-to-br from-gray-800/40 to-gray-900/40 p-1 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(135deg,var(--color-purple-500),var(--color-pink-500))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
                <div className="rounded-[calc(1.5rem-1px)] bg-gray-900 p-8 md:p-12">
                  <h2 className="mb-6 font-[family-name:var(--font-gt-maru)] text-3xl font-light text-gray-200">
                    Operational Philosophy
                  </h2>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Image
                        src="/images/branding/TINY.png"
                        alt=""
                        width={20}
                        height={20}
                        className="mr-3 mt-1 opacity-70"
                      />
                      <div>
                        <h4 className="font-[family-name:var(--font-gt-maru)] text-lg font-light text-cyan-300 mb-1">
                          Independence
                        </h4>
                        <p className="text-gray-400 font-[family-name:var(--font-gt-pressura)] font-light">
                          The Lab arm operates independently of the collaborative research arm, ensuring focused execution and accountability.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Image
                        src="/images/branding/TINY.png"
                        alt=""
                        width={20}
                        height={20}
                        className="mr-3 mt-1 opacity-70"
                      />
                      <div>
                        <h4 className="font-[family-name:var(--font-gt-maru)] text-lg font-light text-cyan-300 mb-1">
                          Scientific Rigor
                        </h4>
                        <p className="text-gray-400 font-[family-name:var(--font-gt-pressura)] font-light">
                          Commitment to long-term research, intellectual discipline, and foundational advancement in artificial intelligence.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Image
                        src="/images/branding/TINY.png"
                        alt=""
                        width={20}
                        height={20}
                        className="mr-3 mt-1 opacity-70"
                      />
                      <div>
                        <h4 className="font-[family-name:var(--font-gt-maru)] text-lg font-light text-cyan-300 mb-1">
                          Brand Excellence
                        </h4>
                        <p className="text-gray-400 font-[family-name:var(--font-gt-pressura)] font-light">
                          Building branded technological products that tell our story and transform lives through intelligent innovation.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="text-center" data-aos="fade-up">
              <div className="inline-block rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 px-8 py-6 border border-gray-700/50">
                <p className="text-sm text-gray-400 font-[family-name:var(--font-gt-pressura)] font-light mb-2">
                  Headquartered at
                </p>
                <p className="text-lg text-cyan-300 font-[family-name:var(--font-gt-maru)] font-light">
                  9th Floor, 5th on Atrium, Sandhurst, Sandton, South Africa, 2196
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
