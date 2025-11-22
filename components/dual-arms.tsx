import Link from "next/link";
import Image from "next/image";

export default function DualArms() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <h2
              className="font-[family-name:var(--font-gt-maru)] text-3xl font-light text-gray-200 md:text-4xl"
              data-aos="fade-up"
            >
              Two Distinct Arms. One Mission.
            </h2>
            <p
              className="mt-4 text-lg text-gray-400 font-[family-name:var(--font-gt-pressura)] font-light"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              Strategic innovation and foundational research, operating independently to deliver precision and impact.
            </p>
          </div>

          {/* Grid */}
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            {/* Lab and Corporate Innovation Arm */}
            <div
              className="group relative rounded-3xl bg-gradient-to-br from-gray-800/40 to-gray-900/40 p-1 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(135deg,var(--color-cyan-500),var(--color-blue-500))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:before:[background:linear-gradient(135deg,var(--color-cyan-400),var(--color-blue-400))_border-box] transition-all duration-500 hover:scale-[1.02]"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="relative h-full rounded-[calc(1.5rem-1px)] bg-gray-900 p-8">
                {/* Icon */}
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20">
                  <Image
                    src="/images/branding/LOGO_NOLETTERS.png"
                    alt="Lab Arm"
                    width={32}
                    height={32}
                    className="opacity-90"
                  />
                </div>
                
                <h3 className="mb-3 font-[family-name:var(--font-gt-maru)] text-2xl font-light text-gray-200">
                  Lab and Corporate Innovation Arm
                </h3>
                <p className="mb-6 text-gray-400 font-[family-name:var(--font-gt-pressura)] font-light leading-relaxed">
                  Applied artificial intelligence system design, product development pipelines, and strategic corporate partnerships. Profit-driven technology development with measurable outcomes and commercial scalability.
                </p>
                
                {/* Key areas */}
                <ul className="mb-6 space-y-2 text-sm text-gray-400">
                  <li className="flex items-start">
                    <Image
                      src="/images/branding/TINY.png"
                      alt=""
                      width={16}
                      height={16}
                      className="mr-2 mt-0.5 opacity-70"
                    />
                    <span className="font-[family-name:var(--font-gt-pressura)] font-light">Applied AI system design and deployment</span>
                  </li>
                  <li className="flex items-start">
                    <Image
                      src="/images/branding/TINY.png"
                      alt=""
                      width={16}
                      height={16}
                      className="mr-2 mt-0.5 opacity-70"
                    />
                    <span className="font-[family-name:var(--font-gt-pressura)] font-light">Product development and innovation incubation</span>
                  </li>
                  <li className="flex items-start">
                    <Image
                      src="/images/branding/TINY.png"
                      alt=""
                      width={16}
                      height={16}
                      className="mr-2 mt-0.5 opacity-70"
                    />
                    <span className="font-[family-name:var(--font-gt-pressura)] font-light">Strategic corporate partnerships</span>
                  </li>
                  <li className="flex items-start">
                    <Image
                      src="/images/branding/TINY.png"
                      alt=""
                      width={16}
                      height={16}
                      className="mr-2 mt-0.5 opacity-70"
                    />
                    <span className="font-[family-name:var(--font-gt-pressura)] font-light">Enterprise AI integration and advisory</span>
                  </li>
                </ul>

                <Link
                  href="/lab-arm"
                  className="inline-flex items-center text-sm font-light text-cyan-400 transition-colors hover:text-cyan-300 font-[family-name:var(--font-gt-pressura)]"
                >
                  Learn More
                  <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>

            {/* Organisation and Collaborative Research Arm */}
            <div
              className="group relative rounded-3xl bg-gradient-to-br from-gray-800/40 to-gray-900/40 p-1 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(135deg,var(--color-purple-500),var(--color-pink-500))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:before:[background:linear-gradient(135deg,var(--color-purple-400),var(--color-pink-400))_border-box] transition-all duration-500 hover:scale-[1.02]"
              data-aos="fade-up"
              data-aos-delay={400}
            >
              <div className="relative h-full rounded-[calc(1.5rem-1px)] bg-gray-900 p-8">
                {/* Icon */}
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                  <Image
                    src="/images/branding/LOGO_NOLETTERS.png"
                    alt="Research Arm"
                    width={32}
                    height={32}
                    className="opacity-90"
                  />
                </div>
                
                <h3 className="mb-3 font-[family-name:var(--font-gt-maru)] text-2xl font-light text-gray-200">
                  Organisation and Collaborative Research Arm
                </h3>
                <p className="mb-6 text-gray-400 font-[family-name:var(--font-gt-pressura)] font-light leading-relaxed">
                  Foundational AI research, academic partnerships, government engagement, and international collaboration. Dedicated to institutional research, long-term scientific advancement, and knowledge-driven innovation.
                </p>
                
                {/* Key areas */}
                <ul className="mb-6 space-y-2 text-sm text-gray-400">
                  <li className="flex items-start">
                    <Image
                      src="/images/branding/TINY.png"
                      alt=""
                      width={16}
                      height={16}
                      className="mr-2 mt-0.5 opacity-70"
                    />
                    <span className="font-[family-name:var(--font-gt-pressura)] font-light">Foundational neural architectures and learning systems</span>
                  </li>
                  <li className="flex items-start">
                    <Image
                      src="/images/branding/TINY.png"
                      alt=""
                      width={16}
                      height={16}
                      className="mr-2 mt-0.5 opacity-70"
                    />
                    <span className="font-[family-name:var(--font-gt-pressura)] font-light">National and international research collaborations</span>
                  </li>
                  <li className="flex items-start">
                    <Image
                      src="/images/branding/TINY.png"
                      alt=""
                      width={16}
                      height={16}
                      className="mr-2 mt-0.5 opacity-70"
                    />
                    <span className="font-[family-name:var(--font-gt-pressura)] font-light">Government and institutional partnerships</span>
                  </li>
                  <li className="flex items-start">
                    <Image
                      src="/images/branding/TINY.png"
                      alt=""
                      width={16}
                      height={16}
                      className="mr-2 mt-0.5 opacity-70"
                    />
                    <span className="font-[family-name:var(--font-gt-pressura)] font-light">Low-resource language AI and speech recognition</span>
                  </li>
                </ul>

                <Link
                  href="/research-arm"
                  className="inline-flex items-center text-sm font-light text-purple-400 transition-colors hover:text-purple-300 font-[family-name:var(--font-gt-pressura)]"
                >
                  Learn More
                  <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 text-center md:mt-20" data-aos="fade-up" data-aos-delay={600}>
            <p className="mb-6 text-gray-400 font-[family-name:var(--font-gt-pressura)] font-light">
              A brand built on technological innovation, transforming lives through intelligent systems.
            </p>
            <Link
              href="/about"
              className="btn-sm bg-linear-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-cyan-500),var(--color-purple-500),var(--color-cyan-500))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] relative hover:text-cyan-300 transition-all duration-300"
            >
              Learn About Our Mission
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
