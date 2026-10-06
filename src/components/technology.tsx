import { Activity, BrainCircuit, Cloud, ScanFace, ScanSearch, Sparkles, SwatchBook, Waypoints } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";

const technologies = [
  { icon: ScanSearch, name: "Visão computacional", detail: "Enxerga cada peça e separa a roupa do fundo." },
  { icon: BrainCircuit, name: "Inteligência artificial", detail: "Aprende preferências e encontra combinações relevantes." },
  { icon: SwatchBook, name: "CIE L*a*b*", detail: "Compara cores pela forma como percebemos suas diferenças." },
  { icon: ScanFace, name: "Análise morfocromática", detail: "Cruza paleta pessoal, proporção e características de estilo." },
  { icon: Waypoints, name: "Similaridade vetorial", detail: "Descobre peças com atributos e estilos que conversam." },
  { icon: Activity, name: "Índice de Harmonia Estética", detail: "Resume vários sinais em uma leitura simples do look." },
  { icon: Cloud, name: "Processamento em nuvem", detail: "Organiza análises para acompanhar sua rotina em diferentes dispositivos." },
];

const harmonyFactors = [
  { number: "01", name: "Harmonia cromática", note: "As cores conversam?", score: "92%", icon: SwatchBook },
  { number: "02", name: "Compatibilidade morfológica", note: "O caimento valoriza você?", score: "88%", icon: ScanFace },
  { number: "03", name: "Ocasião e clima", note: "Funciona para o seu momento?", score: "96%", icon: Cloud },
  { number: "04", name: "Similaridade de estilo", note: "Combina com seu jeito?", score: "91%", icon: Waypoints },
];

export function Technology() {
  return (
    <section id="tecnologia" className="technology-section">
      <div className="technology-section__inner">
        <ScrollReveal>
          <div className="technology-section__heading">
            <div><span className="eyebrow">Moda encontra inteligência</span><h2 className="display-title">A inteligência por trás da <em>HarmonIA.</em></h2></div>
            <p>Uma tecnologia complexa por trás de uma ideia simples: ajudar você a perceber quando um look faz sentido.</p>
          </div>
        </ScrollReveal>

        <div className="technology-section__ihe">
          <ScrollReveal className="technology-section__factors">
            <div className="technology-section__label"><Sparkles size={14} aria-hidden="true" /><span>UM LOOK, QUATRO LEITURAS</span></div>
            <div className="technology-section__factor-grid">
              {harmonyFactors.map(({ number, name, note, score, icon: Icon }, index) => (
                <ScrollReveal key={number} delay={index * 0.07}>
                  <article className="technology-factor">
                    <div className="technology-factor__top"><span>{number}</span><Icon size={17} aria-hidden="true" /></div>
                    <h3>{name}</h3><p>{note}</p>
                    <div className="technology-factor__meter"><i style={{ "--factor-score": score } as React.CSSProperties} /></div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
          <div className="technology-section__merge" aria-hidden="true"><span /><span /><span /><span /></div>
          <ScrollReveal className="technology-section__result" delay={0.18}>
            <div className="technology-result__orbit"><div className="technology-result__ring"><svg viewBox="0 0 120 120"><circle cx="60" cy="60" r="52" /><circle className="technology-result__progress" cx="60" cy="60" r="52" /></svg><div className="technology-result__score"><span>HARMON<span>IA</span></span><strong>92<small>%</small></strong><i>LOOK EM HARMONIA</i></div></div></div>
            <div className="technology-result__copy"><span>ÍNDICE DE HARMONIA ESTÉTICA</span><h3>Uma nota. Mais contexto.</h3><p>O IHE reúne os sinais do look em uma pontuação de 0% a 100%. É uma referência para explorar combinações, não uma regra de estilo.</p></div>
          </ScrollReveal>
        </div>

        <div className="technology-section__divider"><span>O que trabalha por trás de cada sugestão</span><i /></div>
        <div className="technology-section__tools">
          {technologies.map(({ icon: Icon, name, detail }, index) => (
            <ScrollReveal key={name} delay={index * 0.04}>
              <article className="technology-tool"><div className="technology-tool__icon"><Icon size={17} strokeWidth={1.5} aria-hidden="true" /></div><div><span>0{index + 1}</span><h3>{name}</h3><p>{detail}</p></div></article>
            </ScrollReveal>
          ))}
        </div>
        <div className="technology-section__foot"><span>Mais inteligência nos bastidores.</span><span>Mais clareza nas suas escolhas.</span></div>
      </div>
    </section>
  );
}
