import { FinalCta } from "@/components/final-cta";
import { Features } from "@/components/features";
import { Footer } from "@/components/footer";
import { HarmonyIndex } from "@/components/harmony-index";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { Problem } from "@/components/problem";
import { PinnedStory } from "@/components/pinned-story";
import { Requirements } from "@/components/requirements";
import { SiteHeader } from "@/components/site-header";
import { Solution } from "@/components/solution";
import { Technology } from "@/components/technology";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <SiteHeader />
      <main id="conteudo" tabIndex={-1}>
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <Features />
        <PinnedStory
          mode="outfit"
          eyebrow="IA / Look em composição"
          title="Peças diferentes. Uma leitura só sua."
          chapters={[
            { number: "01", title: "Escolha o ponto de partida", text: "A IA seleciona uma peça do seu acervo para começar o look." },
            { number: "02", title: "Encontre uma camada", text: "Cor, proporção e ocasião ajudam a construir uma combinação coerente." },
            { number: "03", title: "Ajuste ao seu estilo", text: "Cada peça acrescenta uma possibilidade, sem perder o que faz o look ser seu." },
            { number: "04", title: "Look pronto para você", text: "Uma combinação completa, pensada para o seu corpo e para o seu dia." },
          ]}
        />
        <PinnedStory
          mode="compare"
          eyebrow="COMPRA / Paridade de estilo"
          title="Uma nova peça. Mil conexões com o que você já tem."
          chapters={[
            { number: "01", title: "Você encontra algo", text: "Uma peça chama atenção na loja. Antes da decisão, entra em cena o seu acervo." },
            { number: "02", title: "A HarmonIA compara", text: "Cor, estilo e combinações possíveis são cruzados com suas peças." },
            { number: "03", title: "A escolha ganha contexto", text: "Entenda como a novidade conversa com seu armário antes de levar." },
          ]}
        />
        <PinnedStory
          mode="ar"
          eyebrow="AR / Provador em realidade aumentada"
          title="Experimente a possibilidade, antes do provador."
          chapters={[
            { number: "01", title: "A câmera reconhece", text: "A realidade aumentada enquadra a peça e entende o espaço à sua volta." },
            { number: "02", title: "Você se vê na combinação", text: "Visualize proporção e presença no seu corpo, com contexto do seu estilo." },
          ]}
        />
        <Technology />
        <Requirements />
        <HarmonyIndex />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
