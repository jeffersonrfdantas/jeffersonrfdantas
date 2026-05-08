import { highlights, latestNews } from "@/data/news";

export function TrendingWidget() {
  return (
    <aside className="trending-widget" id="destaques">
      <div className="section-heading compact-heading">
        <span>Radar</span>
        <h2>Destaques do dia</h2>
      </div>
      <div className="highlight-tabs">
        {highlights.map((item) => (
          <button key={item}>{item}</button>
        ))}
      </div>
      <ol className="trend-list">
        {latestNews.slice(0, 5).map((item, index) => (
          <li key={item.id}>
            <strong>{String(index + 1).padStart(2, "0")}</strong>
            <div>
              <span>{item.category}</span>
              <p>{item.title}</p>
            </div>
          </li>
        ))}
      </ol>
    </aside>
  );
}

export function AIRecommendations() {
  return (
    <section className="ai-panel">
      <div>
        <span className="eyebrow">IA integrada</span>
        <h2>Resumo automático, tags e recomendação personalizada</h2>
        <p>
          Módulo preparado para OpenAI API, embeddings de comportamento, geração de manchetes SEO e chat contextual na página da notícia.
        </p>
      </div>
      <div className="ai-cards">
        <span>TL;DR inteligente</span>
        <span>Áudio narrado</span>
        <span>SEO score</span>
        <span>Curadoria automática</span>
      </div>
    </section>
  );
}

export function NewsletterBox() {
  return (
    <section className="newsletter" id="newsletter">
      <span className="eyebrow">Newsletter premium</span>
      <h2>Receba manchetes rápidas e relatórios exclusivos.</h2>
      <form>
        <input aria-label="E-mail" placeholder="seu@email.com" type="email" />
        <button type="submit">Assinar</button>
      </form>
    </section>
  );
}

export function AdBanner() {
  return (
    <div className="ad-banner" aria-label="Publicidade">
      <span>AD</span>
      <p>Espaço preparado para AdSense, native ads e campanhas programáticas.</p>
    </div>
  );
}
