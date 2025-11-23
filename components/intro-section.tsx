"use client";

import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import TypewriterText from "./typewriter-text";
import ModelLoader from "../assets/MANKINDGOODZ/Model_Loader.gif";

export default function IntroSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Main intro text */}
        <div className="mb-16" data-aos="fade-up">
          <h2 className="mb-8 text-center font-[family-name:var(--font-gt-maru)] text-4xl font-extralight text-gray-200 md:text-5xl">
            About Mankind Research Labs Sandton
          </h2>

          <div className="space-y-6 font-[family-name:var(--font-gt-pressura)] text-lg leading-relaxed text-gray-300 text-left max-w-5xl">
            <p className="text-lg text-gray-300 font-[family-name:var(--font-gt-pressura)] font-light leading-relaxed">
              Mankind Research Labs Sandton is a private artificial intelligence research lab and organisation headquartered in Sandton, South Africa. The organisation is built on a foundation of long-term scientific exploration, focusing exclusively on the development of advanced artificial intelligence architectures, new computational paradigms, and the next evolution of intelligent systems.
            </p>

            <p className="text-lg text-gray-300 font-[family-name:var(--font-gt-pressura)] font-light leading-relaxed">
              Mankind Research Labs Sandton pursues research that is unconstrained by short product cycles or commercial pressure. Its work is driven by a belief that major breakthroughs arise only from deep investigation, original theoretical thinking, and relentless experimentation across multiple layers of computation, mathematics, and machine intelligence.
            </p>

            <p className="text-lg text-gray-300 font-[family-name:var(--font-gt-pressura)] font-light leading-relaxed">
              The organisation maintains a research culture defined by precision, independence, and intellectual rigor. Researchers operate with complete freedom to explore frontier ideas in high-performance computing, large-scale model design, intelligent algorithms, and novel frameworks that challenge the limitations of conventional technology. The goal is not to follow global trends, but to redefine the foundations upon which future artificial intelligence systems will be built.
            </p>

            <p className="text-lg text-gray-300 font-[family-name:var(--font-gt-pressura)] font-light leading-relaxed">
              Mankind Research Labs Sandton is committed to building technologies that shift entire paradigms, elevate scientific understanding, and open pathways for new generations of researchers, engineers, and visionaries across the African continent and the world.
            </p>
          </div>
        </div>

        {/* GIF showcases with text */}
        <div className="space-y-16">
          {/* Advanced LLM Engineering - Left aligned */}
          <div className="flex flex-col md:flex-row items-center gap-8" data-aos="fade-right">
            <div className="md:w-1/3">
              <Image
                src="/images/gifs/superassembly_gitcloning.gif"
                alt="Advanced LLM Engineering"
                width={400}
                height={400}
                className="rounded-2xl shadow-2xl"
                unoptimized
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="mb-4 font-[family-name:var(--font-gt-maru)] text-3xl font-extralight text-pink-400">
                Advanced LLM Engineering
              </h3>
              <TypewriterText 
                text="Africa's leading manufacturer and developer of advanced ground-built LLMs and Language Modelling. We specialize in engineering the most advanced Large Language Models on the continent of Africa. Our research in natural language processing and large language models focuses on building multilingual systems, contextual understanding, and advanced reasoning capabilities. We develop LLMs that understand nuance, context, and complex linguistic structures across multiple African and global languages."
                className="font-[family-name:var(--font-gt-pressura)] text-lg leading-relaxed text-gray-300"
                speed={15}
              />
            </div>
          </div>

          {/* Advanced Machine Learning R&D - Right aligned */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8" data-aos="fade-left">
            <div className="md:w-1/3">
              <Image
                src={ModelLoader}
                alt="Machine Learning R&D"
                width={400}
                height={400}
                className="rounded-2xl shadow-2xl"
                unoptimized
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="mb-4 font-[family-name:var(--font-gt-maru)] text-3xl font-extralight text-cyan-400">
                Advanced Machine Learning R&D and Cutting Edge Product Development
              </h3>
              <TypewriterText 
                text="We offer cutting-edge product development roadmaps and pipelines in cutting-edge machine learning frameworks and development tools that meet industry standards and are ethical. Our team delivers precision-engineered solutions that bridge the gap between research breakthroughs and real-world applications, ensuring scalable, responsible AI deployment."
                className="font-[family-name:var(--font-gt-pressura)] text-lg leading-relaxed text-gray-300"
                speed={15}
              />
            </div>
          </div>

          {/* Advanced Data Science Engines - Left aligned */}
          <div className="flex flex-col md:flex-row items-center gap-8" data-aos="fade-right">
            <div className="md:w-1/3">
              <Image
                src="/images/gifs/Synthetic_Chrome_Representing_Synthetic_Data_Generation_DIVISION.gif"
                alt="Data Science Engines"
                width={280}
                height={280}
                className="rounded-2xl shadow-2xl"
                unoptimized
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="mb-4 font-[family-name:var(--font-gt-maru)] text-3xl font-extralight text-purple-400">
                Advanced Data Science Engines and Pipeline Research Design and Development
              </h3>
              <TypewriterText 
                text="Our cutting-edge R&D specializes in advanced data science engines and pipeline research design and development. We build sophisticated data infrastructure, processing frameworks, and analytical pipelines that power next-generation AI systems. From high-performance data ingestion to complex transformation workflows, we engineer the backbone of intelligent data operations."
                className="font-[family-name:var(--font-gt-pressura)] text-lg leading-relaxed text-gray-300"
                speed={15}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
