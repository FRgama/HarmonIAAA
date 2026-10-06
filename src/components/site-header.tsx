import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BrandWordmark } from "@/components/brand-wordmark";

const links = [{ href: "#solucao", label: "A plataforma" }, { href: "#funcionalidades", label: "Possibilidades" }, { href: "#tecnologia", label: "Tecnologia" }];

export function SiteHeader() {
  return (
    <header className="relative z-20 border-b border-[#20221e18]">
      <div className="mx-auto flex h-[78px] max-w-[1440px] items-center justify-between px-5 md:px-10">
        <Link href="#inicio" aria-label="HarmonIA, início" className="flex items-center"><BrandWordmark className="text-[13px]" /></Link>
        <nav aria-label="Navegação principal" className="hidden items-center gap-9 md:flex">{links.map((link) => <Link key={link.href} href={link.href} className="header-link text-[12px] font-medium text-[#55574f]">{link.label}</Link>)}</nav>
        <Link href="#conheca" className="button-inverse-label hidden items-center gap-2 rounded-full bg-[#20221e] px-5 py-3 text-[11px] font-semibold transition hover:bg-[#45483e] sm:flex">Conheça o projeto <ArrowUpRight size={14} aria-hidden="true" /></Link>
        <Link href="#conheca" aria-label="Conheça a HarmonIA" className="site-header__mobile-cta grid place-items-center sm:hidden"><ArrowUpRight size={18} aria-hidden="true" /></Link>
      </div>
      <nav id="navegacao" aria-label="Navegação mobile" className="flex justify-center gap-5 border-t border-[#20221e12] px-4 py-3 md:hidden">{links.map((link) => <Link key={link.href} href={link.href} className="text-[10px] font-medium text-[#55574f]">{link.label}</Link>)}</nav>
    </header>
  );
}
