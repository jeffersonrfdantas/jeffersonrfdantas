"use client";

import { Bell, Menu, Moon, Search, Sun, UserRound } from "lucide-react";
import { categories } from "@/data/news";
import { useThemeStore } from "@/store/use-theme-store";

export function Header() {
  const { mode, toggleMode } = useThemeStore();

  return (
    <header className="site-header">
      <div className="topbar container">
        <a className="logo" href="#top" aria-label="NEWS IA home">
          <span>NEWS</span> IA
        </a>
        <nav className="desktop-menu" aria-label="Menu principal">
          <a href="#ultimas">Últimas</a>
          <a href="#destaques">Destaques</a>
          <a href="#videos">Vídeos</a>
          <a href="#newsletter">Newsletter</a>
        </nav>
        <div className="header-actions">
          <button className="icon-button" aria-label="Buscar">
            <Search size={18} />
          </button>
          <button className="login-button">
            <UserRound size={17} /> Login
          </button>
          <button className="icon-button social" aria-label="Alertas em tempo real">
            <Bell size={18} />
          </button>
          <button className="icon-button" onClick={toggleMode} aria-label="Alternar tema">
            {mode === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button className="icon-button mobile-only" aria-label="Abrir menu">
            <Menu size={20} />
          </button>
        </div>
      </div>
      <div className="category-shell">
        <nav className="category-nav container" aria-label="Categorias">
          {categories.map((category, index) => (
            <a className={index === 4 ? "active" : ""} href={`#${category.toLowerCase()}`} key={category}>
              {category}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
