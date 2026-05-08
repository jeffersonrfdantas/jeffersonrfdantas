import { Header } from "@/components/header";
import { HeroCarousel } from "@/components/hero-carousel";
import { NewsCard } from "@/components/news-card";
import { AdBanner, AIRecommendations, NewsletterBox, TrendingWidget } from "@/components/widgets";
import { latestNews } from "@/data/news";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsMediaOrganization",
  name: "NEWS IA",
  url: "https://news-ia.example.com",
  description: "Portal de notícias com IA nativa, SEO avançado e arquitetura edge-first.",
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="container" id="top">
        <HeroCarousel />
        <section className="content-layout">
          <div>
            <div className="section-heading" id="ultimas">
              <span>Feed dinâmico • WebSockets ready</span>
              <h2>Últimas notícias</h2>
              <p>Cards com lazy loading, infinite scroll preparado e atualização em tempo real.</p>
            </div>
            <div className="news-grid">
              {latestNews.map((item) => (
                <NewsCard item={item} key={item.id} />
              ))}
            </div>
          </div>
          <TrendingWidget />
        </section>
        <AdBanner />
        <AIRecommendations />
        <section className="video-section" id="videos">
          <div className="section-heading">
            <span>Vídeos e podcasts</span>
            <h2>Experiência app-like para conteúdo multimídia</h2>
          </div>
          <div className="video-player">
            <div className="play-button">▶</div>
            <p>Player pronto para autoplay silencioso, legendas, anúncios e cortes para Shorts/Reels/TikTok.</p>
          </div>
        </section>
        <NewsletterBox />
      </main>
      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <a className="logo" href="#top"><span>NEWS</span> IA</a>
            <p>Credibilidade, velocidade, tecnologia e jornalismo moderno.</p>
          </div>
          <div>
            <strong>Arquitetura</strong>
            <p>Next.js 15, Supabase, OpenAI API, Vercel, Cloudflare e PostHog/GA4.</p>
          </div>
          <div>
            <strong>Monetização</strong>
            <p>Ads, premium, afiliados, cursos, relatórios, podcasts e conteúdo exclusivo.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
