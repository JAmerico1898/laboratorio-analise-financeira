import Link from "next/link";
import Image from "next/image";
import { MODULES } from "@/data/modules";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-[0_12px_32px_rgba(25,28,29,0.06)] h-20">
      <div className="max-w-7xl mx-auto px-8 h-full flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/logo/finlab-transparent.png"
            alt="FinLab"
            width={48}
            height={40}
            priority
            className="h-10 w-auto"
          />
        </Link>

        {/* Two-row module strip, scrollable, faded at both ends */}
        <div
          className="flex-1 overflow-x-auto scrollbar-none [mask-image:linear-gradient(to_right,transparent,#000_28px,#000_calc(100%_-_28px),transparent)]"
        >
          <div className="grid grid-rows-2 grid-flow-col auto-cols-max gap-x-2 gap-y-1 w-max py-1">
            {MODULES.map((m) => (
              <Link
                key={m.n}
                href={m.href}
                className="px-2.5 py-1 rounded-lg text-xs font-semibold text-slate-600 hover:text-primary hover:bg-primary-container/20 transition-colors whitespace-nowrap"
              >
                {m.navLabel}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-transparent via-[#006b5f]/10 to-transparent h-[1px]" />
    </nav>
  );
}
