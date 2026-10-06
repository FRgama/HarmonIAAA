import { ArrowDown, ArrowUpRight, ScanLine } from "lucide-react";
import Link from "next/link";
import { BrandWordmark } from "@/components/brand-wordmark";
import { EditorialImage } from "@/components/editorial-image";
import { ScrollReveal } from "@/components/scroll-reveal";

export function Hero() {
  return (
    <section id="inicio" className="mx-auto grid max-w-[1440px] gap-12 px-5 pb-16 pt-12 md:grid-cols-[.88fr_1.12fr] md:gap-8 md:px-10 md:pb-24 md:pt-20">
      <div className="flex flex-col items-start justify-center md:pb-10">
        <span className="eyebrow mb-7">Moda / inteligência artificial / tecnologia</span>
        <ScrollReveal><h1 className="m-0 max-w-[720px] font-normal leading-none"><BrandWordmark className="hero-brand" /><span className="hero-headline">Vista-se de <em>possibilidades.</em></span></h1></ScrollReveal>
        <ScrollReveal delay={0.12} className="mt-9 flex max-w-[440px] items-start gap-5"><span className="mt-1 h-12 w-px shrink-0 bg-[#f26e54]" /><p className="m-0 text-[14px] leading-7 text-[#62645c] md:text-[15px]">A HarmonIA transforma seu guarda-roupa em uma experiência inteligente: mais combinações, mais consciência, mais você.</p></ScrollReveal>
        <div className="mt-9 flex items-center gap-5"><Link href="#solucao" className="flex items-center gap-3 rounded-full bg-[#d8fa57] px-6 py-4 text-[12px] font-bold transition hover:bg-[#c5e83d]">Descubra a HarmonIA <ArrowUpRight size={15} aria-hidden="true" /></Link><span className="hidden text-[10px] font-semibold uppercase text-[#81837b] sm:inline">Estilo com intenção</span></div>
        <div className="mt-16 hidden items-center gap-3 text-[10px] font-semibold uppercase text-[#85877f] md:flex"><ArrowDown size={14} aria-hidden="true" /> Role para explorar</div>
      </div>
      <div className="relative min-h-[470px] md:min-h-[690px]">
        <EditorialImage src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1500&q=88" alt="Modelo em look contemporâneo de alfaiataria em uma rua urbana" className="hero-image absolute inset-0 rounded-[3px]" priority sizes="(max-width: 768px) 100vw, 55vw" />
        <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-[#f5f3edeb] px-3 py-2 text-[9px] font-bold uppercase text-[#34362f] md:left-6 md:top-6"><ScanLine size={13} aria-hidden="true" /> Seu estilo, em foco</div>
        <div className="hero-float absolute -bottom-8 left-4 w-[min(235px,76%)] rounded-[24px] border border-white/50 bg-[#20221e] p-[7px] text-white md:-left-10 md:bottom-8 md:w-[248px]">
          <div className="overflow-hidden rounded-[19px] bg-[#f5f3ed] text-[#20221e]">
            <div className="flex items-center justify-between px-3 pb-2 pt-3"><span className="text-[9px] font-bold tracking-normal">HARMON<span className="text-[#f26e54]">IA</span></span><span className="text-[9px] text-[#777970]">09:41&nbsp; ◉</span></div>
            <div className="relative h-[142px] overflow-hidden bg-[#d8d7ce]">
              <EditorialImage src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=600&q=85" alt="Casaco catalogado na sugestão de look da HarmonIA" className="absolute inset-0" sizes="240px" />
              <span className="absolute bottom-2 left-2 bg-[#d8fa57] px-2 py-1 text-[9px] font-bold uppercase text-[#20221e]">Peça identificada</span>
            </div>
            <div className="p-3">
              <div className="flex items-center justify-between"><span className="text-[9px] font-bold uppercase text-[#777970]">Sugestão para hoje</span><span className="text-[9px] font-bold text-[#f26e54]">IA / 94%</span></div>
              <p className="mb-0 mt-2 font-(family-name:--serif) text-[24px] leading-none">Camadas leves</p>
              <div className="mt-3 flex items-center gap-1.5"><span className="size-5 rounded-full bg-[#d8fa57]" /><span className="size-5 rounded-full bg-[#52636b]" /><span className="size-5 rounded-full bg-[#d6b59c]" /><span className="ml-1 text-[9px] text-[#777970]">3 peças do seu acervo</span></div>
            </div>
          </div>
          <span className="absolute -right-2 top-8 bg-[#d8fa57] px-2 py-1 text-[9px] font-bold uppercase text-[#20221e]">Style match</span>
        </div>
        <span className="absolute bottom-1 right-1 hidden text-[9px] font-semibold uppercase text-white md:block">01 / 08 &nbsp; Estilo em movimento</span>
      </div>
    </section>
  );
}
