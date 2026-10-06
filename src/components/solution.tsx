import { PinnedStory } from "@/components/pinned-story";

export function Solution() {
  return <PinnedStory id="solucao" mode="closet" eyebrow="A resposta é HarmonIA" title="Do armário físico ao seu universo digital." chapters={[
    { number: "01", title: "Tudo começa no real", text: "As peças que você já tem, fotografadas no seu espaço e no seu tempo." },
    { number: "02", title: "A imagem ganha contexto", text: "A HarmonIA separa a peça do fundo e reconhece atributos que importam." },
    { number: "03", title: "Seu acervo ganha vida", text: "Um inventário visual organizado, pronto para revelar novas combinações." },
  ]} />;
}
