import { ArrowDownRight } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";

export function Problem() {
  return (
    <section className="problem-section">
      <div className="problem-section__inner">
        <div className="problem-section__copy">
          <ScrollReveal><span className="eyebrow">O ponto de partida</span><h2 className="display-title">Um armário cheio. <em>E tão pouco usado.</em></h2><p>Peças esquecidas, compras por impulso e combinações que passam despercebidas. O excesso não é falta de estilo: é falta de visibilidade sobre o que já existe.</p></ScrollReveal>
          <ScrollReveal delay={0.12}>
            <div className="problem-section__stats" aria-label="Visualização ilustrativa de uso do guarda-roupa">
              <div className="problem-section__stat-head"><span>UMA ROTINA COMUM</span><span>VISUALIZAÇÃO ILUSTRATIVA</span></div>
              <div className="problem-section__bar-row"><span>Peças que voltam à rotina</span><div><i className="problem-section__bar-used" /></div><b>POUCAS</b></div>
              <div className="problem-section__bar-row"><span>Peças fora de circulação</span><div><i className="problem-section__bar-idle" /></div><b>MUITAS</b></div>
              <div className="problem-section__hanger-line"><span>USE</span>{Array.from({ length: 12 }, (_, index) => <i key={index} className={index < 4 ? "is-used" : ""} />)}<span>ESQUEÇA</span></div>
            </div>
          </ScrollReveal>
        </div>
        <ScrollReveal className="problem-section__side" delay={0.18}>
          <div className="problem-section__index">01 <span>/ 04</span></div>
          <p>O primeiro passo não é comprar mais.</p>
          <a href="#solucao" className="inline-flex items-center gap-2 text-[11px] font-bold">É enxergar o que já está aí <ArrowDownRight size={15} aria-hidden="true" /></a>
        </ScrollReveal>
      </div>
    </section>
  );
}
