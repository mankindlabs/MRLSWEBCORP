import Link from "next/link";
import Image from "next/image";

export default function HeroMankind() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-12 md:py-20">
          {/* Logo at top */}
          <div className="pb-8 text-center" data-aos="fade-down">
            <div className="inline-block">
              <div className="flex h-25 w-25 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mx-auto">
                <Image
                  src="/images/branding/LOGO_NOLETTERS.png"
                  alt="Mankind Research Labs"
                  width={50}
                  height={50}
                  className="opacity-90"
                />
              </div>
            </div>
          </div>

          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <h1
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-cyan-400),var(--color-purple-400),var(--color-pink-400),var(--color-cyan-400))] bg-[length:200%_auto] bg-clip-text pb-5 font-[family-name:var(--font-gt-maru)] text-5xl font-extralight tracking-tight text-transparent md:text-7xl"
              data-aos="fade-up"
            >
              Mankind Research Labs Sandton
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-xl text-cyan-200/80 font-[family-name:var(--font-gt-pressura)] font-light"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                Redefining Intelligence. Advancing Research. Translating Innovation.
              </p>
              <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center gap-4">
                <div data-aos="fade-up" data-aos-delay={400}>
                  <Link
                    className="btn-sm bg-linear-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-cyan-500),var(--color-purple-500),var(--color-cyan-500))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] relative hover:text-cyan-300 transition-all duration-300 mb-4 w-full sm:mb-0 sm:w-auto"
                    href="/research-arm"
                  >
                    Explore Research
                  </Link>
                </div>
                <div data-aos="fade-up" data-aos-delay={600}>
                  <Link
                    className="btn-sm bg-linear-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-cyan-500),var(--color-purple-500),var(--color-cyan-500))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] relative hover:text-cyan-300 transition-all duration-300 w-full sm:w-auto"
                    href="/lab-arm"
                  >
                    Explore Innovation
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div
            className="relative mx-auto max-w-3xl"
            data-aos="fade-up"
            data-aos-delay={800}
          >
            <div className="relative rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-1 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(135deg,var(--color-cyan-500),var(--color-purple-500),var(--color-pink-500))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:rounded-[inherit] after:bg-gradient-to-br after:from-cyan-500/10 after:to-purple-500/10 after:-z-10">
              <img
                src="/images/hq/MANKIND_HQ.png"
                alt="Mankind Research Labs Headquarters"
                className="w-full rounded-xl object-contain"
                style={{ aspectRatio: 'auto' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
