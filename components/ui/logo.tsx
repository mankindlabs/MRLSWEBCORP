import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex items-center group" aria-label="Mankind Research Labs">
      <div className="relative">
        <Image
          src="/images/branding/FullLogo_White.png"
          alt="Mankind Research Labs"
          width={160}
          height={40}
          className="h-8 w-auto transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(6,182,212,0.6)]"
        />
      </div>
    </Link>
  );
}
