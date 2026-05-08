"use client";

import { motion } from "framer-motion";
import { heroNews, latestNews } from "@/data/news";
import { NewsCard } from "@/components/news-card";

export function HeroCarousel() {
  const [main, secondary] = heroNews;

  return (
    <section className="hero-grid" aria-label="Notícias principais">
      <motion.article
        className="hero-main"
        style={{ background: main.image }}
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
      >
        <div className="video-pill">● vídeo autoplay silencioso</div>
        <div className="hero-overlay">
          <span className="eyebrow">{main.category} • {main.time}</span>
          <h1>{main.title}</h1>
          <p>{main.subtitle}</p>
          <a className="primary-cta" href="#materia">Leia Mais</a>
        </div>
      </motion.article>
      <aside className="hero-side">
        <NewsCard item={secondary} compact />
        {latestNews.slice(0, 2).map((item) => (
          <NewsCard item={item} compact key={item.id} />
        ))}
      </aside>
    </section>
  );
}
