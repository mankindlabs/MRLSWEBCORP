"use client";

import PageIllustration from "@/components/page-illustration";
import Image from "next/image";

export default function InvestorRelations() {
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
                Investor Relations
              </h1>
              <div className="mx-auto max-w-3xl">
                <p
                  className="text-xl text-gray-300 font-[family-name:var(--font-gt-pressura)] font-light"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  Building the future of artificial intelligence through strategic investments and partnerships.
                </p>
              </div>
            </div>

            {/* Reception Image with Glowing Effect */}
            <div className="pb-12 md:pb-20 flex justify-center" data-aos="fade-up">
              <div className="reception-container group relative w-full max-w-4xl">
                {/* Circulating Glows */}
                <div className="absolute inset-0 -z-10">
                  <div className="glow glow-1"></div>
                  <div className="glow glow-2"></div>
                  <div className="glow glow-3"></div>
                  <div className="glow glow-4"></div>
                  <div className="glow glow-5"></div>
                  <div className="glow glow-6"></div>
                  <div className="glow glow-7"></div>
                  <div className="glow glow-8"></div>
                  <div className="glow glow-9"></div>
                </div>
                
                {/* Image Container */}
                <div className="relative rounded-3xl overflow-hidden border border-purple-500/30 shadow-2xl">
                  <Image
                    src="/images/hq/RECEPTION_PICTURE.webp"
                    alt="Mankind Research Labs Reception"
                    width={1200}
                    height={675}
                    className="w-full h-auto object-cover"
                    quality={100}
                    unoptimized
                  />
                  
                  {/* Hover Caption */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-purple-900/95 via-purple-800/90 to-transparent p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <p className="text-white font-[family-name:var(--font-gt-pressura)] font-light text-center leading-relaxed">
                      We welcome our Investors with open warm welcome at our Head Quarters Reception in Sandton on Atrium on the 5th. We are always open for Investment and Collaboration.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <style jsx>{`
              .reception-container {
                position: relative;
              }
              
              .glow {
                position: absolute;
                width: 200px;
                height: 200px;
                border-radius: 50%;
                filter: blur(60px);
                opacity: 0.4;
                animation: circulate 20s infinite ease-in-out;
              }
              
              .glow-1 {
                background: radial-gradient(circle, rgba(168, 85, 247, 0.8) 0%, transparent 70%);
                animation-delay: 0s;
                top: -100px;
                left: 10%;
              }
              
              .glow-2 {
                background: radial-gradient(circle, rgba(236, 72, 153, 0.8) 0%, transparent 70%);
                animation-delay: -2.2s;
                top: -80px;
                left: 30%;
              }
              
              .glow-3 {
                background: radial-gradient(circle, rgba(139, 92, 246, 0.8) 0%, transparent 70%);
                animation-delay: -4.4s;
                top: -60px;
                right: 30%;
              }
              
              .glow-4 {
                background: radial-gradient(circle, rgba(217, 70, 239, 0.8) 0%, transparent 70%);
                animation-delay: -6.6s;
                top: -90px;
                right: 10%;
              }
              
              .glow-5 {
                background: radial-gradient(circle, rgba(168, 85, 247, 0.8) 0%, transparent 70%);
                animation-delay: -8.8s;
                top: 50%;
                right: -100px;
              }
              
              .glow-6 {
                background: radial-gradient(circle, rgba(236, 72, 153, 0.8) 0%, transparent 70%);
                animation-delay: -11s;
                bottom: -90px;
                right: 20%;
              }
              
              .glow-7 {
                background: radial-gradient(circle, rgba(139, 92, 246, 0.8) 0%, transparent 70%);
                animation-delay: -13.2s;
                bottom: -70px;
                left: 40%;
              }
              
              .glow-8 {
                background: radial-gradient(circle, rgba(217, 70, 239, 0.8) 0%, transparent 70%);
                animation-delay: -15.4s;
                bottom: -100px;
                left: 15%;
              }
              
              .glow-9 {
                background: radial-gradient(circle, rgba(168, 85, 247, 0.8) 0%, transparent 70%);
                animation-delay: -17.6s;
                top: 50%;
                left: -100px;
              }
              
              @keyframes circulate {
                0%, 100% {
                  transform: translate(0, 0) scale(1);
                  opacity: 0.4;
                }
                25% {
                  transform: translate(30px, -30px) scale(1.2);
                  opacity: 0.6;
                }
                50% {
                  transform: translate(0, -60px) scale(0.9);
                  opacity: 0.3;
                }
                75% {
                  transform: translate(-30px, -30px) scale(1.1);
                  opacity: 0.5;
                }
              }
            `}</style>

            {/* Company Overview */}
            <div className="pb-12 md:pb-20">
              <div className="relative rounded-3xl bg-gradient-to-br from-cyan-500/5 to-purple-500/5 p-1 border border-cyan-500/20" data-aos="fade-up">
                <div className="rounded-[calc(1.5rem-1px)] bg-gray-900 p-8 md:p-12">
                  <h2 className="mb-6 font-[family-name:var(--font-gt-maru)] text-3xl font-light text-gray-200">
                    About Mankind Research Labs Sandton
                  </h2>
                  <div className="space-y-4 text-gray-300 font-[family-name:var(--font-gt-pressura)] font-light leading-relaxed">
                    <p>
                      Mankind Research Labs Sandton is a private artificial intelligence research lab and organisation 
                      headquartered in Sandton, South Africa. The organisation is built on a foundation of long-term 
                      scientific exploration, focusing exclusively on the development of advanced artificial intelligence 
                      architectures, new computational paradigms, and the next evolution of intelligent systems.
                    </p>
                    
                    <p>
                      Mankind Research Labs Sandton pursues research that is unconstrained by short product cycles or 
                      commercial pressure. Its work is driven by a belief that major breakthroughs arise only from deep 
                      investigation, original theoretical thinking, and relentless experimentation across multiple layers 
                      of computation, mathematics, and machine intelligence.
                    </p>
                    
                    <p>
                      The organisation maintains a research culture defined by precision, independence, and intellectual rigor. 
                      Researchers operate with complete freedom to explore frontier ideas in high-performance computing, 
                      large-scale model design, intelligent algorithms, and novel frameworks that challenge the limitations 
                      of conventional technology.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Investment Focus Areas */}
            <div className="pb-12 md:pb-20">
              <div className="text-center pb-12">
                <h2 className="font-[family-name:var(--font-gt-maru)] text-3xl font-light text-gray-200 md:text-4xl" data-aos="fade-up">
                  Investment Focus Areas
                </h2>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                {[
                  {
                    title: "Advanced AI Research",
                    description: "Fundamental research in machine learning, neural architectures, and intelligent systems that define the next generation of AI technology."
                  },
                  {
                    title: "Commercial Applications",
                    description: "Translation of research breakthroughs into market-ready solutions through our Lab Arm, generating measurable ROI and strategic value."
                  },
                  {
                    title: "Strategic Infrastructure",
                    description: "Development of computational infrastructure, data systems, and research facilities that enable breakthrough discoveries."
                  },
                  {
                    title: "Talent Development",
                    description: "Investment in world-class researchers, engineers, and innovators who drive technological advancement and organizational growth."
                  },
                  {
                    title: "Academic Partnerships",
                    description: "Collaborative research initiatives with South Africa's leading universities, fostering innovation and knowledge exchange."
                  },
                  {
                    title: "Global Expansion",
                    description: "Strategic growth initiatives to extend our research impact and commercial reach across African and global markets."
                  }
                ].map((area, index) => (
                  <div
                    key={index}
                    className="relative rounded-2xl bg-gradient-to-br from-gray-800/40 to-gray-900/40 p-6 border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <h3 className="mb-3 font-[family-name:var(--font-gt-maru)] text-lg font-light text-purple-300">
                      {area.title}
                    </h3>
                    <p className="text-sm text-gray-400 font-[family-name:var(--font-gt-pressura)] font-light leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Invest */}
            <div className="pb-12 md:pb-20">
              <div className="relative rounded-3xl bg-gradient-to-br from-purple-500/5 to-pink-500/5 p-1 border border-purple-500/20" data-aos="fade-up">
                <div className="rounded-[calc(1.5rem-1px)] bg-gray-900 p-8 md:p-12">
                  <h2 className="mb-6 font-[family-name:var(--font-gt-maru)] text-3xl font-light text-gray-200">
                    Why Invest in Mankind Research Labs
                  </h2>
                  <ul className="space-y-4">
                    {[
                      "Unique dual-arm structure combining fundamental research with commercial applications",
                      "Strategic location in Sandton, South Africa's premier financial and technology hub",
                      "Established partnerships with leading South African universities and research institutions",
                      "Over a decade of experience in AI research and development since 2014",
                      "Strong focus on African market opportunities and global expansion potential",
                      "Independent research culture enabling breakthrough innovations",
                      "Proven track record of translating research into deployable technology"
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

            {/* Headquarters Info */}
            <div className="pb-12 md:pb-20" data-aos="fade-up">
              <div className="relative rounded-3xl bg-gradient-to-br from-gray-800/40 to-gray-900/40 p-1 border border-gray-700/50">
                <div className="rounded-[calc(1.5rem-1px)] bg-gray-900 p-8 md:p-12">
                  <h2 className="mb-6 font-[family-name:var(--font-gt-maru)] text-3xl font-light text-gray-200">
                    Our Headquarters
                  </h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <p className="text-gray-300 font-[family-name:var(--font-gt-pressura)] font-light leading-relaxed mb-4">
                        Located in the heart of Sandton, Johannesburg's premier financial and business district, 
                        our state-of-the-art facilities provide an optimal environment for research, innovation, 
                        and strategic partnerships.
                      </p>
                      <div className="space-y-2 text-gray-300 font-[family-name:var(--font-gt-pressura)] font-light">
                        <p><strong className="text-cyan-300">Address:</strong></p>
                        <p>9th Floor, 5th on Atrium</p>
                        <p>Sandhurst, Sandton</p>
                        <p>Johannesburg, South Africa</p>
                        <p>2196</p>
                      </div>
                    </div>
                    <div>
                      <Image
                        src="/images/hq/OUR_HQ_WITH_LOGO_OUTSIDE.webp"
                        alt="Mankind HQ Building"
                        width={600}
                        height={400}
                        className="rounded-xl"
                        unoptimized
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="text-center" data-aos="fade-up">
              <div className="inline-block rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 px-8 py-6 border border-purple-500/30">
                <p className="text-sm text-gray-400 font-[family-name:var(--font-gt-pressura)] font-light mb-4">
                  For investment inquiries and strategic partnerships
                </p>
                <p className="text-lg text-purple-300 font-[family-name:var(--font-gt-maru)] font-light mb-4">
                  invest@mankindresearch.org
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
