import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BrandWordmark } from "@/components/brand-wordmark";

export function Footer() {
  return (
    <footer className="border-t border-[#20221e20]"><div className="mx-auto flex max-w-360 flex-col gap-8 px-5 py-8 md:flex-row md:items-end md:justify-between md:px-10">
      <div><Link href="#inicio" aria-label="HarmonIA, início"><BrandWordmark className="text-[18px]" /></Link><p className="mb-0 mt-2 text-[10px] text-[#777970]">Tecnologia para vestir com intenção.</p></div>
      <div className="flex flex-wrap gap-x-6 gap-y-3 text-[10px] font-medium text-[#55574f]"><Link href="#solucao">Plataforma</Link><Link href="#funcionalidades">Funcionalidades</Link><Link href="#tecnologia">Tecnologia</Link><Link href="#conheca" className="inline-flex items-center gap-1">Conheça <ArrowUpRight size={11} aria-hidden="true" /></Link></div>
      <span className="text-[9px] text-[#85877f]">© 2026 HarmonIA</span>
    </div></footer>
  );
}
