export const metadata = {
  title: "Lab and Corporate Innovation Arm - Mankind Research Labs",
  description: "Applied AI system design, product development, and strategic corporate partnerships.",
};

import PageIllustration from "@/components/page-illustration";
import Image from "next/image";
import Link from "next/link";
import GitHubGlobe from "@/components/github-globe";

export default function LabArm() {
  return (
    <>
      <PageIllustration />
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="py-12 md:py-20">
            {/* Hero */}
            <div className="pb-12 text-center md:pb-20">
              <div className="inline-block mb-6" data-aos="fade-up">
                <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 mx-auto">
                  <Image
                    src="/images/branding/LOGO_NOLETTERS.png"
                    alt="Lab Arm"
                    width={40}
                    height={40}
                    className="opacity-90"
                  />
                </div>
              </div>
              <h1
                className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-cyan-400),var(--color-blue-400),var(--color-cyan-400))] bg-[length:200%_auto] bg-clip-text pb-5 font-[family-name:var(--font-gt-maru)] text-4xl font-light tracking-tight text-transparent md:text-6xl"
                data-aos="fade-up"
              >
                Lab and Corporate Innovation Arm
              </h1>
              <div className="mx-auto max-w-3xl">
                <p
                  className="text-xl text-cyan-200/80 font-[family-name:var(--font-gt-pressura)] font-light"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  Applied technologies and profit-driven innovation. Translating research into market-ready systems with precision and commercial impact.
                </p>
              </div>
            </div>

            {/* Global Operations Globe */}
            <div className="pb-12 md:pb-20">
              <div className="text-center pb-8" data-aos="fade-up">
                <h2 className="mb-6 font-[family-name:var(--font-gt-maru)] text-3xl font-light text-gray-200 md:text-4xl">
                  Our Labs Are Global
                </h2>
                <p className="text-lg text-gray-300 font-[family-name:var(--font-gt-pressura)] font-light leading-relaxed max-w-4xl mx-auto">
                  Because our Labs are global, that's why it's called <span className="text-cyan-400 font-medium">Mankind Research Labs Sandton</span>. We operate with global teams to maximize global diversity of talent and cultivate a new culture of performance in academic and corporate research.
                </p>
              </div>
              <div data-aos="fade-up" data-aos-delay={200}>
                <GitHubGlobe />
              </div>
            </div>

            {/* Focus Areas */}
            <div className="pb-12 md:pb-20">
              <div className="text-center pb-12">
                <h2 className="font-[family-name:var(--font-gt-maru)] text-3xl font-light text-gray-200 md:text-4xl" data-aos="fade-up">
                  Focus Areas
                </h2>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "Applied AI System Design",
                    description: "End-to-end artificial intelligence system architecture, deployment strategies, and production-grade implementation for enterprise environments."
                  },
                  {
                    title: "Product Development Pipelines",
                    description: "Intelligent solution engineering with rapid prototyping, iterative refinement, and market-focused delivery frameworks."
                  },
                  {
                    title: "Strategic Corporate Partnerships",
                    description: "Industry collaboration for commercial impact, co-development initiatives, and investor-aligned technology programs."
                  },
                  {
                    title: "Innovation Incubation",
                    description: "Technology venture scaling, startup methodology application, and commercialization pathway development for intelligent systems."
                  },
                  {
                    title: "Applied Language Technologies",
                    description: "Automatic speech recognition systems, natural language processing deployment, and multilingual AI implementation for production use."
                  },
                  {
                    title: "Enterprise AI Integration",
                    description: "Advisory services for corporate AI adoption, strategic technology consulting, and intelligent system deployment across business operations."
                  }
                ].map((area, index) => (
                  <div
                    key={index}
                    className="group relative rounded-2xl bg-gradient-to-br from-gray-800/40 to-gray-900/40 p-6 border border-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20">
                      <Image
                        src="/images/branding/TINY.png"
                        alt=""
                        width={20}
                        height={20}
                        className="opacity-80"
                      />
                    </div>
                    <h3 className="mb-3 font-[family-name:var(--font-gt-maru)] text-lg font-light text-gray-200">
                      {area.title}
                    </h3>
                    <p className="text-sm text-gray-400 font-[family-name:var(--font-gt-pressura)] font-light leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Corporate Partnerships Section */}
            <div className="pb-12 md:pb-20" data-aos="fade-up">
              <div className="relative rounded-3xl bg-gradient-to-br from-cyan-500/5 to-blue-500/5 p-1 border border-cyan-500/20">
                <div className="rounded-[calc(1.5rem-1px)] bg-gray-900 p-8 md:p-12">
                  <h2 className="mb-6 font-[family-name:var(--font-gt-maru)] text-3xl font-light text-gray-200">
                    Corporate Partnerships
                  </h2>
                  <p className="mb-6 text-lg text-gray-300 font-[family-name:var(--font-gt-pressura)] font-light leading-relaxed">
                    The Lab and Corporate Innovation Arm engages with industry and corporate partners to co-develop technologies for commercial impact. All collaboration is profit-aligned and strategic.
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Develop market-ready, revenue-generating technologies with measurable business outcomes",
                      "Accelerate adoption of advanced AI solutions in industrial and enterprise environments",
                      "Support strategic investment initiatives and corporate innovation projects with clear ROI",
                      "Enable joint innovation with explicit commercial objectives and accountability frameworks"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <Image
                          src="/images/branding/TINY.png"
                          alt=""
                          width={18}
                          height={18}
                          className="mr-3 mt-1 opacity-70"
                        />
                        <span className="text-gray-300 font-[family-name:var(--font-gt-pressura)] font-light">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Operational Philosophy */}
            <div className="pb-12 md:pb-20" data-aos="fade-up">
              <div className="relative rounded-3xl bg-gradient-to-br from-gray-800/40 to-gray-900/40 p-1 border border-gray-700/50">
                <div className="rounded-[calc(1.5rem-1px)] bg-gray-900 p-8 md:p-12">
                  <h2 className="mb-6 font-[family-name:var(--font-gt-maru)] text-3xl font-light text-gray-200">
                    Operational Philosophy
                  </h2>
                  <div className="grid gap-6 md:grid-cols-3">
                    {[
                      {
                        title: "Independence",
                        description: "The Lab arm operates independently of the collaborative research arm with autonomous decision-making and execution authority."
                      },
                      {
                        title: "Outcome Focus",
                        description: "Measurable results drive all initiatives. Applied research with concrete deliverables and quantifiable commercial impact."
                      },
                      {
                        title: "Corporate Rigor",
                        description: "Structured project management, investment oversight, and technology deployment following enterprise standards and accountability."
                      }
                    ].map((item, index) => (
                      <div key={index}>
                        <h3 className="mb-2 font-[family-name:var(--font-gt-maru)] text-lg font-light text-cyan-300">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-400 font-[family-name:var(--font-gt-pressura)] font-light leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Technologies We Build */}
            <div className="pb-12 md:pb-20">
              <div className="text-center pb-12">
                <h2 className="font-[family-name:var(--font-gt-maru)] text-3xl font-light text-gray-200 md:text-4xl" data-aos="fade-up">
                  Technologies We Build
                </h2>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <div className="relative rounded-3xl bg-gradient-to-br from-blue-500/5 to-cyan-500/5 p-1 border border-blue-500/20" data-aos="fade-right">
                  <div className="rounded-[calc(1.5rem-1px)] bg-gray-900 p-6">
                    <Image
                      src="/images/gifs/superassembly_gitcloning.gif"
                      alt="Open Research Technologies"
                      width={500}
                      height={500}
                      className="rounded-xl mb-4"
                      unoptimized
                    />
                    <h3 className="mb-3 font-[family-name:var(--font-gt-maru)] text-xl font-light text-blue-300">
                      Open Research Technologies
                    </h3>
                    <p className="text-gray-400 font-[family-name:var(--font-gt-pressura)] font-light leading-relaxed mb-4">
                      Our Organisation and Collaborative Research Arm engages in open research initiatives with university and academic institutions across multiple regions. We collaborate with higher education bodies, government research entities, and international organizations committed to advancing foundational artificial intelligence science through shared knowledge and transparent methodologies.
                    </p>
                    <p className="text-gray-400 font-[family-name:var(--font-gt-pressura)] font-light leading-relaxed">
                      Through strategic academic partnerships, we contribute to the global research community by publishing findings, sharing non-proprietary datasets, and participating in collaborative frameworks designed to accelerate innovation. Our open research portfolio operates under permissive licensing structures, ensuring accessibility and reproducibility while maintaining rigorous scientific standards and peer validation processes.
                    </p>
                  </div>
                </div>

                <div className="relative rounded-3xl bg-gradient-to-br from-pink-500/5 to-purple-500/5 p-1 border border-pink-500/20" data-aos="fade-left">
                  <div className="rounded-[calc(1.5rem-1px)] bg-gray-900 p-6 flex flex-col items-center justify-center">
                    <Image
                      src="/images/gifs/POTAIN_SYBOLIZES THAT WE LOVE TO BUILD.png"
                      alt="Closed Proprietary Technologies"
                      width={400}
                      height={400}
                      className="mb-4 opacity-90"
                      unoptimized
                    />
                    <h3 className="mb-3 font-[family-name:var(--font-gt-maru)] text-2xl font-light text-pink-300 text-center">
                      Closed Proprietary Technologies
                    </h3>
                    <p className="text-gray-400 font-[family-name:var(--font-gt-pressura)] font-light leading-relaxed text-center mb-4">
                      Our Lab and Corporate Innovation Arm focuses on the private sector, developing closed-source proprietary technologies designed to empower consumers and organizations across various forms of life. We build market-ready AI products that address real-world challenges through precision engineering and commercial-grade deployment frameworks.
                    </p>
                    <p className="text-gray-400 font-[family-name:var(--font-gt-pressura)] font-light leading-relaxed text-center mb-4">
                      Closed-source research enables strategic intellectual property development, accelerated time-to-market execution, and investor-aligned value creation. Our proprietary methodologies are protected through trade secrets, patents, and exclusive licensing arrangements, ensuring competitive advantage for corporate partners and sustained returns for stakeholders.
                    </p>
                    <p className="text-gray-400 font-[family-name:var(--font-gt-pressura)] font-light leading-relaxed text-center">
                      From concept to deployment, we construct enterprise-grade intelligent systems that transform industries, optimize operational efficiency, and deliver measurable business outcomes. Our approach combines rigorous product development pipelines with commercial viability assessment, ensuring solutions that scale across diverse market segments while maintaining the highest standards of quality and reliability.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="text-center" data-aos="fade-up">
              <div className="inline-block rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 px-8 py-6 border border-gray-700/50">
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
