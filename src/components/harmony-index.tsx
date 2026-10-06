"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "motion/react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";

export function HarmonyIndex() {
  const sectionRef = useRef<HTMLElement>(null);
  const [reduceMotion, setReduceMotion] = useState(false);
  const completedProgress = useMotionValue(0);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const springProgress = useSpring(scrollYProgress, { stiffness: 90, damping: 24, restDelta: 0.002 });
  const progress = reduceMotion ? completedProgress : springProgress;
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReduceMotion(query.matches);
    updatePreference();
    query.addEventListener("change", updatePreference);
    return () => query.removeEventListener("change", updatePreference);
  }, []);
  useEffect(() => {
    completedProgress.set(reduceMotion ? 1 : 0);
  }, [completedProgress, reduceMotion]);
  const score = useTransform(progress, [0.12, 0.78], [62, 98], { clamp: true });
  const scoreLabel = useTransform(score, (value) => `${Math.round(value)}`);
  const ringProgress = useTransform(progress, [0.12, 0.78], [0, 1], { clamp: true });
  const ringScale = useTransform(progress, [0, 1], [0.92, 1], { clamp: true });
  const noteY = useTransform(progress, [0, 1], [18, -12]);

  return (
    <section ref={sectionRef} className="harmony-index" aria-labelledby="harmony-index-title">
      <div className="harmony-index__sticky">
        <div className="harmony-index__copy">
          <ScrollReveal>
            <span className="eyebrow">IHE / Índice HarmonIA de Estilo</span>
            <h2 id="harmony-index-title" className="display-title">Seu estilo em <em>harmonia.</em></h2>
            <p>Cor, proporção e identidade se encontram em cada combinação. A pontuação evolui conforme a HarmonIA cruza seu perfil com as peças escolhidas.</p>
            <div className="harmony-index__signals"><span><i /> PALETA PESSOAL</span><span><i /> PROPORÇÃO</span><span><i /> ACERVO</span></div>
          </ScrollReveal>
        </div>
        <div className="harmony-index__visual" aria-label="Índice de harmonia visual calculado ao rolar">
          <motion.div className="harmony-index__halo" style={reduceMotion ? undefined : { scale: ringScale }} />
          <div className="harmony-index__ring">
            <svg viewBox="0 0 220 220" role="img" aria-label="Pontuação de harmonia aumentando de 62 para 98">
              <circle cx="110" cy="110" r="96" fill="none" stroke="currentColor" strokeOpacity=".13" strokeWidth="1" />
              <motion.circle cx="110" cy="110" r="96" fill="none" stroke="#d8fa57" strokeWidth="2" strokeLinecap="round" transform="rotate(-90 110 110)" style={{ pathLength: ringProgress }} />
              <motion.circle cx="110" cy="14" r="3" fill="#f26e54" style={{ opacity: ringProgress }} />
            </svg>
            <div className="harmony-index__value"><span>HARMON<span>IA</span></span><strong><motion.span>{scoreLabel}</motion.span><small>/100</small></strong><i><Sparkles size={12} aria-hidden="true" /> ÍNDICE DE ESTILO</i></div>
          </div>
          <motion.div className="harmony-index__note" style={reduceMotion ? undefined : { y: noteY }}><span>LEITURA CONCLUÍDA</span><strong>Harmonia crescente</strong><ArrowUpRight size={15} aria-hidden="true" /></motion.div>
          <div className="harmony-index__dots" aria-hidden="true"><i /><i /><i /><i /><i /></div>
        </div>
      </div>
    </section>
  );
}