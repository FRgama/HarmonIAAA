import { ArrowRight, Camera, ScanFace, Shirt, Sparkles } from "lucide-react";
import { EditorialImage } from "@/components/editorial-image";
import { ScrollReveal } from "@/components/scroll-reveal";

const steps = [
  { number: "01", icon: ScanFace, title: "Conheça seu estilo", text: "Colorimetria, proporção e preferências formam o ponto de partida." },
  { number: "02", icon: Camera, title: "Digitalize suas peças", text: "Fotografe. A HarmonIA remove o fundo e organiza cada item no seu acervo." },
  { number: "03", icon: Sparkles, title: "A IA analisa", text: "Visão computacional conecta atributos, contexto e identidade." },
  { number: "04", icon: Shirt, title: "Receba combinações", text: "Novos looks, pensados para você e feitos com o que já tem." },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="how-section"><div className="how-section__inner">
      <div className="how-section__copy"><ScrollReveal><span className="eyebrow">Uma nova rotina, em quatro passos</span><h2 className="display-title">Inteligência que começa <em>em você.</em></h2></ScrollReveal>
        <div className="how-section__steps">{steps.map(({ number, icon: Icon, title, text }, index) => <ScrollReveal key={number} delay={index * 0.07}><article className="how-section__step"><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div><Icon size={19} strokeWidth={1.5} aria-hidden="true" /></article></ScrollReveal>)}</div>
      </div>
      <div className="how-section__image"><EditorialImage src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1300&q=88" alt="Duas pessoas explorando peças de roupa em uma loja" className="step-photo absolute inset-0 rounded-[3px]" sizes="(max-width: 768px) 100vw, 55vw" /><div className="absolute bottom-5 left-5 flex max-w-[250px] items-center gap-3 rounded-[3px] bg-[#f5f3ed] p-4 md:bottom-8 md:left-8"><div className="grid size-9 shrink-0 place-items-center rounded-full bg-[#d8fa57]"><ArrowRight size={15} aria-hidden="true" /></div><p className="m-0 text-[10px] font-semibold leading-4">Uma peça. Novas leituras. Seu jeito de combinar.</p></div><span className="absolute right-5 top-5 bg-[#f5f3ed] px-3 py-2 text-[9px] font-bold uppercase md:right-8 md:top-8">Da câmera ao cotidiano</span></div>
    </div></section>
  );
}
