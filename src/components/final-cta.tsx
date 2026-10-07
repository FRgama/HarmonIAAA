import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { EditorialImage } from "@/components/editorial-image";
import { ScrollReveal } from "@/components/scroll-reveal";

export function FinalCta() {
  return (
    <section id="conheca" className="section-pad">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="relative grid min-h-[470px] overflow-hidden rounded-[3px] border border-[#2019121a] bg-[linear-gradient(135deg,#b5653f_0%,#9a4d3a_45%,#d5b98d_100%)] md:grid-cols-[1.15fr_.85fr]">
          <ScrollReveal className="relative z-10 flex flex-col items-start justify-between p-7 md:p-12">
            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#fff5ea]">
              HarmonIA / Estilo em movimento
            </span>
            <div className="py-12 md:py-8">
              <h2 className="max-w-[630px] font-(family-name:--serif) text-[clamp(58px,8vw,104px)] font-normal leading-[.86] text-[#f8f2e8]">
                Vista o que você já é.
              </h2>
              <p className="mb-0 mt-6 max-w-[380px] text-[13px] leading-6 text-[#f7e9dc]">
                Descubra como inteligência e estilo podem abrir espaço para novas
                possibilidades.
              </p>
            </div>
            <Link
              href="#solucao"
              className="button-inverse-label flex items-center gap-3 rounded-full bg-[#201912] px-6 py-4 text-[11px] font-bold transition hover:bg-[#3b2e27]"
            >
              Quero conhecer{" "}
              <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          </ScrollReveal>
          <EditorialImage
            src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=88"
            alt="Look de moda com cores e silhueta marcantes"
            className="cta-image relative min-h-[330px] md:min-h-[470px]"
            sizes="(max-width: 768px) 100vw, 42vw"
          />
        </div>
      </div>
    </section>
  );
}
