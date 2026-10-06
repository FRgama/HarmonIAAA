import { Activity, Heart, ShoppingBag } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";

const features = [
  { number: "01", icon: Activity, title: "Veja seu armário de outro jeito", text: "Um inventário visual que organiza suas peças e revela o que já faz parte da sua história." },
  { number: "02", icon: Heart, title: "Encontre combinações que são suas", text: "Sugestões guiadas pelo seu acervo, sua colorimetria, seu biótipo e o seu momento." },
  { number: "03", icon: ShoppingBag, title: "Escolha com mais contexto", text: "Compare uma peça nova com o que você já tem, na loja ou no provador." },
];

export function Features() {
  return (
    <section id="funcionalidades" className="features-section">
      <div className="features-section__inner">
        <ScrollReveal>
          <div className="features-section__heading"><div><span className="eyebrow">O que muda no seu dia</span><h2 className="display-title">Um armário inteiro <em>em perspectiva.</em></h2></div><p>Ferramentas que acompanham sua vida real: em casa, na loja e em comunidade.</p></div>
        </ScrollReveal>
        <div className="feature-list">
          {features.map(({ number, icon: Icon, title, text }, index) => (
            <ScrollReveal key={number} delay={index * 0.06}>
              <article className="feature-row"><span className="feature-row__number">{number}</span><Icon size={21} strokeWidth={1.4} aria-hidden="true" /><div><h3>{title}</h3><p>{text}</p></div><span className="feature-row__index">H / {number}</span></article>
            </ScrollReveal>
          ))}
        </div>
        <div className="features-section__ecosystem"><span><strong>COMUNIDADE</strong> Inspiração e ideias que circulam.</span><i /><span><strong>CURADORIA</strong> Recomendações de parceiros que combinam com você.</span></div>
      </div>
    </section>
  );
}
