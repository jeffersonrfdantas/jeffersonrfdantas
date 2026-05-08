import type { NewsItem } from "@/data/news";

type NewsCardProps = {
  item: NewsItem;
  compact?: boolean;
};

export function NewsCard({ item, compact = false }: NewsCardProps) {
  return (
    <article className={compact ? "news-card compact" : "news-card"}>
      <div className="news-card__media" style={{ background: item.image }} aria-hidden="true" />
      <div className="news-card__content">
        <div className="news-card__meta">
          <span>{item.category}</span>
          <span>{item.time}</span>
        </div>
        <h3>{item.title}</h3>
        {!compact && <p>{item.subtitle}</p>}
        <footer>
          <span>{item.author}</span>
          <span>{item.readTime}</span>
        </footer>
      </div>
    </article>
  );
}
