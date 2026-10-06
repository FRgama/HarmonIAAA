import { Accessibility, Gauge, LockKeyhole, ShieldCheck } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";

const principles = [
  {
    icon: ShieldCheck,
    number: "01",
    label: "Segurança",
    title: "Acesso com responsabilidade.",
    text: "Cada conta e cada ação passam por camadas de proteção, da entrada ao uso da plataforma.",
    signals: ["Autenticação", "JWT", "RBAC", "Credenciais protegidas"],
    tone: "security",
  },
  {
    icon: LockKeyhole,
    number: "02",
    label: "Privacidade",
    title: "Seus dados continuam seus.",
    text: "Transparência e controle acompanham as informações do seu perfil e do seu guarda-roupa.",
    signals: ["LGPD", "Consentimento explícito", "Criptografia", "Dados isolados", "Direito ao esquecimento"],
    tone: "privacy",
  },
  {
    icon: Gauge,
    number: "03",
    label: "Performance",
    title: "Pronta para acompanhar seu ritmo.",
    text: "Análises eficientes e infraestrutura escalável ajudam a manter a experiência ágil conforme o acervo cresce.",
    signals: ["Imagens processadas com agilidade", "Recomendações rápidas", "Infraestrutura escalável"],
    tone: "performance",
  },
  {
    icon: Accessibility,
    number: "04",
    label: "Usabilidade",
    title: "Simples desde a primeira peça.",
    text: "Um caminho claro para cadastrar roupas, explorar combinações e usar a HarmonIA em qualquer tela.",
    signals: ["Fluxo simples", "Cadastro rápido de peças", "Interface acessível", "Experiência mobile"],
    tone: "usability",
  },
];

export function Requirements() {
  return (
    <section className="trust-section">
      <div className="trust-section__inner">
        <ScrollReveal>
          <div className="trust-section__heading">
            <div><span className="eyebrow">O essencial, desde o começo</span><h2 className="display-title">Construída para <em>ser confiável.</em></h2></div>
            <p>Tecnologia que cuida do que importa: seus dados, seu tempo e a liberdade de usar a HarmonIA do seu jeito.</p>
          </div>
        </ScrollReveal>
        <div className="trust-grid">
          {principles.map(({ icon: Icon, number, label, title, text, signals, tone }, index) => (
            <ScrollReveal key={label} delay={index * 0.07}>
              <article className={`trust-pillar trust-pillar--${tone}`}>
                <div className="trust-pillar__top"><span>{number} / {label}</span><Icon size={20} strokeWidth={1.5} aria-hidden="true" /></div>
                <h3>{title}</h3>
                <p>{text}</p>
                <ul aria-label={`Princípios de ${label.toLowerCase()}`}>
                  {signals.map((signal) => <li key={signal}>{signal}</li>)}
                </ul>
              </article>
            </ScrollReveal>
          ))}
        </div>
        <div className="trust-section__foot"><span>Confiança em cada interação.</span><span>HarmonIA / Fundamentos do produto</span></div>
      </div>
    </section>
  );
}
