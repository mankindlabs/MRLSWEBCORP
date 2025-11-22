export const metadata = {
  title: "Organisation and Collaborative Research Arm - Mankind Research Labs",
  description: "Foundational AI research, academic partnerships, and international collaboration.",
};

import PageIllustration from "@/components/page-illustration";
import Image from "next/image";
import TypewriterText from "@/components/typewriter-text";

export default function ResearchArm() {
  const researchFocus = [
    "Advanced Neural Architectures: transformers, graph networks, modular systems, hierarchical networks",
    "Scalable Learning Systems: distributed model training, parallel inference, efficiency optimization",
    "Algorithmic Foundations: provable learning algorithms, adaptive optimization, reinforcement frameworks",
    "Emergent Reasoning and Cognitive Modeling: multi-step reasoning, abstraction, planning, knowledge representation",
    "Next-Generation Data Representation: tokenized media, dynamic reconstruction, storage-computation paradigms",
    "Self-Supervised Learning, Few-Shot Learning, and Representation Learning",
    "Computer Vision: object recognition, scene understanding, multi-modal fusion",
    "Natural Language Processing: language modeling, text generation, low-resource language systems",
    "Speech and Audio Processing: automatic speech recognition, synthesis, multilingual systems",
    "Reinforcement Learning and Decision Systems",
    "Generative Models and Simulation Systems",
    "Ethical AI and Bias Mitigation in Large Models"
  ];

  const nationalCollaborations = [
    { name: "Stellenbosch University", url: "" },
    { name: "University of Pretoria", url: "" },
    { name: "University of Johannesburg", url: "" },
    { name: "University of Cape Town", url: "" },
    { name: "Sol Plaatjie University", url: "" },
    { name: "North-West University", url: "" },
    { name: "University of Witwatersrand", url: "" },
    { name: "Data Science for Social Impact, University of Pretoria", url: "https://www.dsfsi.co.za" },
    { name: "Material Science Innovation and Modelling, North-West University", url: "https://natural-sciences.nwu.ac.za/masim" },
    { name: "Unit for Data Science and Computing, North-West University", url: "https://natural-sciences.nwu.ac.za/unit-data-science-and-computing/home" },
    { name: "Forestry and Agricultural Biotechnology Institute, University of Pretoria", url: "https://www.fabinet.up.ac.za/" },
    { name: "Biomedical Research Institute, Stellenbosch University", url: "https://www.su.ac.za/en/faculties/medicine/research/biomedical-research-institute" },
    { name: "UJ Institute for Intelligent Systems", url: "" }
  ];

  const hpcCentres = [
    "CSIR - CHPC",
    "SADILAR",
    "NICIS",
    "NITheCS"
  ];

  const governmentPartners = [
    { name: "Department of Tourism", url: "https://www.tourism.gov.za" },
    { name: "Department of Education", url: "https://www.education.gov.za" },
    { name: "Gauteng Provincial Government", url: "https://www.gauteng.gov.za" },
    { name: "Western Cape Provincial Government", url: "https://www.westerncape.gov.za" }
  ];

  const internationalCollaborations = [
    "University of Hawai'i at Manoa",
    "Cornell University",
    { name: "African Digital Transformation Centre", url: "https://adtc.co.za" },
    { name: "International Telecommunication Union", url: "https://www.itu.int" },
    { name: "Department of Communications and Digital Technologies", url: "https://www.dt.gov.za" },
    { name: "Centre for Public Service Innovation", url: "https://www.cpsi.co.za" },
    { name: "Microsoft Research South Africa", url: "https://www.microsoft.com/en-za/research" },
    { name: "Microsoft Research Kenya", url: "https://www.microsoft.com/en-ke/research" },
    { name: "Bill and Melinda Gates Foundation", url: "https://www.gatesfoundation.org" }
  ];

  const aiOrganisations = [
    "Black in AI",
    "National Institutes of Health – Center for Transformative Infectious Disease Research (CCHANGE)",
    "NeurIPS"
  ];

  return (
    <>
      <PageIllustration />
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="py-12 md:py-20">
            {/* Hero */}
            <div className="pb-12 text-center md:pb-20">
              <div className="inline-block mb-6" data-aos="fade-up">
                <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 mx-auto">
                  <Image
                    src="/images/branding/LOGO_NOLETTERS.png"
                    alt="Research Arm"
                    width={40}
                    height={40}
                    className="opacity-90"
                  />
                </div>
              </div>
              <h1
                className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-purple-400),var(--color-pink-400),var(--color-purple-400))] bg-[length:200%_auto] bg-clip-text pb-5 font-[family-name:var(--font-gt-maru)] text-4xl font-light tracking-tight text-transparent md:text-6xl"
                data-aos="fade-up"
              >
                Organisation and Collaborative Research Arm
              </h1>
              <div className="mx-auto max-w-3xl">
                <p
                  className="text-xl text-purple-200/80 font-[family-name:var(--font-gt-pressura)] font-light"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  Foundational research and institutional partnerships. Dedicated to long-term scientific advancement and knowledge-driven innovation.
                </p>
              </div>
            </div>

            {/* Research Focus */}
            <div className="pb-12 md:pb-20" data-aos="fade-up">
              <div className="relative rounded-3xl bg-gradient-to-br from-purple-500/5 to-pink-500/5 p-1 border border-purple-500/20">
                <div className="rounded-[calc(1.5rem-1px)] bg-gray-900 p-8 md:p-12">
                  <h2 className="mb-6 font-[family-name:var(--font-gt-maru)] text-3xl font-light text-gray-200">
                    Research Focus
                  </h2>
                  <p className="mb-6 text-gray-300 font-[family-name:var(--font-gt-pressura)] font-light leading-relaxed">
                    Mankind Research Labs Sandton advances the state of artificial intelligence through foundational research across multiple domains.
                  </p>
                  <div className="grid gap-4 md:grid-cols-2">
                    {researchFocus.map((focus, index) => (
                      <div key={index} className="flex items-start">
                        <Image
                          src="/images/branding/TINY.png"
                          alt=""
                          width={16}
                          height={16}
                          className="mr-3 mt-0.5 opacity-70 flex-shrink-0"
                        />
                        <span className="text-sm text-gray-400 font-[family-name:var(--font-gt-pressura)] font-light">
                          {focus}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* South African Academic Institutions */}
            <div className="pb-12 md:pb-20">
              <div className="mb-10 text-center" data-aos="fade-up">
                <TypewriterText 
                  text="We appreciate the opportunity to work with some of the most excellent institutions of research and Innovation in Machine Learning, Data Science and AI. Among them we have worked with these South African Respective Institutions..."
                  className="text-lg text-gray-300 font-[family-name:var(--font-gt-pressura)] font-light leading-relaxed max-w-4xl mx-auto"
                  speed={20}
                />
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {nationalCollaborations.map((collab, index) => (
                  <div
                    key={index}
                    className="rounded-2xl bg-gradient-to-br from-purple-500/5 to-pink-500/5 p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]"
                    data-aos="fade-up"
                    data-aos-delay={index * 50}
                  >
                    <div className="mb-4 flex h-18 w-18 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 mx-auto">
                      <Image
                        src="/images/institutions/ACADEMICS.png"
                        alt="Academic Institution"
                        width={42}
                        height={42}
                        className="opacity-90"
                        unoptimized
                      />
                    </div>
                    <p className="text-sm text-gray-300 font-[family-name:var(--font-gt-pressura)] font-semibold leading-relaxed text-center hover:text-blue-400 transition-colors duration-300">
                      {collab.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* International Academic Institutions */}
            <div className="pb-12 md:pb-20">
              <div className="mb-10 text-center" data-aos="fade-up">
                <h2 className="mb-6 font-[family-name:var(--font-gt-maru)] text-3xl font-light text-gray-200">
                  International Academic Collaborations
                </h2>
                <TypewriterText 
                  text="Our research extends globally through strategic partnerships with leading international universities, fostering knowledge exchange and collaborative innovation..."
                  className="text-lg text-gray-300 font-[family-name:var(--font-gt-pressura)] font-light leading-relaxed max-w-4xl mx-auto"
                  speed={20}
                />
              </div>
              <div className="grid gap-6 md:grid-cols-2 justify-center max-w-2xl mx-auto">
                <div
                  className="rounded-2xl bg-gradient-to-br from-cyan-500/5 to-blue-500/5 p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]"
                  data-aos="fade-up"
                >
                  <div className="mb-4 flex h-18 w-18 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 mx-auto">
                    <Image
                      src="/images/institutions/ACADEMICS.png"
                      alt="Academic Institution"
                      width={42}
                      height={42}
                      className="opacity-90"
                      unoptimized
                    />
                  </div>
                  <p className="text-sm text-gray-300 font-[family-name:var(--font-gt-pressura)] font-semibold text-center hover:text-blue-400 transition-colors duration-300">
                    University of Hawai'i at Manoa
                  </p>
                </div>
                <div
                  className="rounded-2xl bg-gradient-to-br from-cyan-500/5 to-blue-500/5 p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]"
                  data-aos="fade-up"
                  data-aos-delay={100}
                >
                  <div className="mb-4 flex h-18 w-18 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 mx-auto">
                    <Image
                      src="/images/institutions/ACADEMICS.png"
                      alt="Academic Institution"
                      width={42}
                      height={42}
                      className="opacity-90"
                      unoptimized
                    />
                  </div>
                  <p className="text-sm text-gray-300 font-[family-name:var(--font-gt-pressura)] font-semibold text-center hover:text-blue-400 transition-colors duration-300">
                    Cornell University
                  </p>
                </div>
              </div>
            </div>

            {/* Private Research Institutions */}
            <div className="pb-12 md:pb-20" data-aos="fade-up">
              <div className="mb-10 text-center">
                <TypewriterText 
                  text="We collaborate with leading private research institutions and high-performance computing centers that drive scientific innovation across South Africa..."
                  className="text-lg text-gray-300 font-[family-name:var(--font-gt-pressura)] font-light leading-relaxed max-w-4xl mx-auto"
                  speed={20}
                />
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {hpcCentres.map((centre, index) => (
                  <div
                    key={index}
                    className="rounded-xl bg-gradient-to-br from-orange-500/5 to-amber-500/5 p-6 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(249,115,22,0.3)] text-center"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="mb-4 flex h-18 w-18 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500/20 to-amber-500/20 border border-orange-500/30 mx-auto">
                      <Image
                        src="/images/institutions/PRIVATE_RESEARCH_INSTITUTIONS_RESEARCH.png"
                        alt="Private Research Institution"
                        width={42}
                        height={42}
                        className="opacity-90"
                        unoptimized
                      />
                    </div>
                    <p className="text-gray-300 font-[family-name:var(--font-gt-pressura)] font-semibold text-center hover:text-blue-400 transition-colors duration-300">
                      {centre}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Government Partnerships */}
            <div className="pb-12 md:pb-20" data-aos="fade-up">
              <div className="mb-10 text-center">
                <TypewriterText 
                  text="We have had an amazing opportunity to collaborate with some of the most respected governmental institutions and are grateful for the opportunity and support in advancing AI research and development across South Africa..."
                  className="text-lg text-gray-300 font-[family-name:var(--font-gt-pressura)] font-light leading-relaxed max-w-4xl mx-auto"
                  speed={20}
                />
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {governmentPartners.map((partner, index) => (
                  <div
                    key={index}
                    className="rounded-xl bg-gradient-to-br from-emerald-500/5 to-teal-500/5 p-6 border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="mb-4 flex h-18 w-18 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 mx-auto">
                      <Image
                        src="/images/institutions/GOVERNMENT_INSTITUTIONS.webp"
                        alt="Government Institution"
                        width={42}
                        height={42}
                        className="opacity-90"
                        unoptimized
                      />
                    </div>
                    <p className="text-sm text-gray-300 font-[family-name:var(--font-gt-pressura)] font-semibold text-center hover:text-blue-400 transition-colors duration-300">
                      {partner.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Engineering & Philanthropic Organizations */}
            <div className="pb-12 md:pb-20" data-aos="fade-up">
              <div className="mb-10 text-center">
                <TypewriterText 
                  text="We have had an amazing opportunity to collaborate with one of the most respected institutions of research and philanthropic research and development and are grateful for the opportunity and funding..."
                  className="text-lg text-gray-300 font-[family-name:var(--font-gt-pressura)] font-light leading-relaxed max-w-4xl mx-auto"
                  speed={20}
                />
              </div>
              <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
                <div
                  className="rounded-xl bg-gradient-to-br from-blue-500/5 to-indigo-500/5 p-6 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"
                  data-aos="fade-up"
                >
                  <div className="mb-4 flex h-18 w-18 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border border-blue-500/30 mx-auto">
                    <Image
                      src="/images/institutions/POTAIN_FOR_ENGINEERING_INSTITUTIONS.png"
                      alt="Engineering Institution"
                      width={42}
                      height={42}
                      className="opacity-90"
                      unoptimized
                    />
                  </div>
                  <p className="text-sm text-gray-300 font-[family-name:var(--font-gt-pressura)] font-semibold text-center hover:text-blue-400 transition-colors duration-300">
                    Microsoft Research South Africa
                  </p>
                </div>
                <div
                  className="rounded-xl bg-gradient-to-br from-blue-500/5 to-indigo-500/5 p-6 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"
                  data-aos="fade-up"
                  data-aos-delay={100}
                >
                  <div className="mb-4 flex h-18 w-18 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border border-blue-500/30 mx-auto">
                    <Image
                      src="/images/institutions/POTAIN_FOR_ENGINEERING_INSTITUTIONS.png"
                      alt="Engineering Institution"
                      width={42}
                      height={42}
                      className="opacity-90"
                      unoptimized
                    />
                  </div>
                  <p className="text-sm text-gray-300 font-[family-name:var(--font-gt-pressura)] font-semibold text-center hover:text-blue-400 transition-colors duration-300">
                    Microsoft Research Kenya
                  </p>
                </div>
                <div
                  className="rounded-xl bg-gradient-to-br from-blue-500/5 to-indigo-500/5 p-6 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  <div className="mb-4 flex h-18 w-18 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border border-blue-500/30 mx-auto">
                    <Image
                      src="/images/institutions/POTAIN_FOR_ENGINEERING_INSTITUTIONS.png"
                      alt="Engineering Institution"
                      width={42}
                      height={42}
                      className="opacity-90"
                      unoptimized
                    />
                  </div>
                  <p className="text-sm text-gray-300 font-[family-name:var(--font-gt-pressura)] font-semibold text-center hover:text-blue-400 transition-colors duration-300">
                    Bill and Melinda Gates Foundation
                  </p>
                </div>
              </div>
            </div>

            {/* Innovation Centers */}
            <div className="pb-12 md:pb-20" data-aos="fade-up">
              <div className="mb-10 text-center">
                <TypewriterText 
                  text="We always have a pleasure collaborating with our partners from these key centers of innovation both Government and Private..."
                  className="text-lg text-gray-300 font-[family-name:var(--font-gt-pressura)] font-light leading-relaxed max-w-4xl mx-auto"
                  speed={20}
                />
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <div
                  className="rounded-xl bg-gradient-to-br from-violet-500/5 to-fuchsia-500/5 p-6 border border-violet-500/20 hover:border-violet-500/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]"
                  data-aos="fade-up"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 border border-violet-500/30 mx-auto">
                    <Image
                      src="/images/institutions/GOVERNMENT_INSTITUTIONS.webp"
                      alt="Innovation Center"
                      width={28}
                      height={28}
                      className="opacity-90"
                      unoptimized
                    />
                  </div>
                  <p className="text-sm text-gray-300 font-[family-name:var(--font-gt-pressura)] font-light text-center">
                    Centre for Public Service Innovation
                  </p>
                </div>
                <div
                  className="rounded-xl bg-gradient-to-br from-violet-500/5 to-fuchsia-500/5 p-6 border border-violet-500/20 hover:border-violet-500/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]"
                  data-aos="fade-up"
                  data-aos-delay={100}
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 border border-violet-500/30 mx-auto">
                    <Image
                      src="/images/institutions/GOVERNMENT_INSTITUTIONS.webp"
                      alt="Innovation Center"
                      width={28}
                      height={28}
                      className="opacity-90"
                      unoptimized
                    />
                  </div>
                  <p className="text-sm text-gray-300 font-[family-name:var(--font-gt-pressura)] font-light text-center">
                    Department of Communications and Digital Technologies
                  </p>
                </div>
                <div
                  className="rounded-xl bg-gradient-to-br from-violet-500/5 to-fuchsia-500/5 p-6 border border-violet-500/20 hover:border-violet-500/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 border border-violet-500/30 mx-auto">
                    <Image
                      src="/images/institutions/GOVERNMENT_INSTITUTIONS.webp"
                      alt="Innovation Center"
                      width={28}
                      height={28}
                      className="opacity-90"
                      unoptimized
                    />
                  </div>
                  <p className="text-sm text-gray-300 font-[family-name:var(--font-gt-pressura)] font-light text-center">
                    International Telecommunication Union
                  </p>
                </div>
                <div
                  className="rounded-xl bg-gradient-to-br from-violet-500/5 to-fuchsia-500/5 p-6 border border-violet-500/20 hover:border-violet-500/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]"
                  data-aos="fade-up"
                  data-aos-delay={300}
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 border border-violet-500/30 mx-auto">
                    <Image
                      src="/images/institutions/GOVERNMENT_INSTITUTIONS.webp"
                      alt="Innovation Center"
                      width={28}
                      height={28}
                      className="opacity-90"
                      unoptimized
                    />
                  </div>
                  <p className="text-sm text-gray-300 font-[family-name:var(--font-gt-pressura)] font-light text-center">
                    African Digital Transformation Centre
                  </p>
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="text-center" data-aos="fade-up">
              <div className="inline-block rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 px-8 py-6 border border-gray-700/50">
                <p className="text-sm text-gray-400 font-[family-name:var(--font-gt-pressura)] font-light mb-4">
                  For research collaborations, institutional inquiries, and academic partnerships
                </p>
                <p className="text-lg text-purple-300 font-[family-name:var(--font-gt-maru)] font-light mb-4">
                  research@mankindresearch.org
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
