"use client";

import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaWhatsapp } from "react-icons/fa";

const NAV_LINKS = [
  { label: "Inicio",         href: "/#inicio" },
  { label: "Quiénes somos",  href: "/#somos" },
  { label: "Servicios",      href: "/#servicios" },
  { label: "Sedes",          href: "/#sedes" },
  { label: "Testimonios",    href: "/#testimonios" },
  { label: "Contacto",       href: "/#contacto" },
];

export default function SedeNavbar({ whatsapp }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navBg = scrolled
    ? "rgba(6,47,135,0.97)"
    : "linear-gradient(to bottom, rgba(2,11,46,0.65) 0%, transparent 100%)";

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 200,
        background: navBg,
        backdropFilter: scrolled ? "blur(14px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(14px)" : "none",
        boxShadow: scrolled ? "0 2px 24px rgba(6,47,135,0.35)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        transition: "background 0.35s ease, box-shadow 0.35s ease, backdrop-filter 0.35s ease",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 1.5rem",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        {/* Logo */}
        <a href="/" style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/LOGOS/LOGO%20OHI%20HORIZONTAL.PNG"
            alt="OHI - Organización Humana Integral"
            style={{ height: 38, width: "auto", objectFit: "contain", filter: "brightness(0) invert(1)" }}
          />
        </a>

        {/* Desktop nav links */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2rem",
            // hide on small screens — controlled via media query in style tag
          }}
          className="sede-nav-desktop"
        >
          {NAV_LINKS.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="sede-nav-link"
              style={{
                position: "relative",
                color: "rgba(255,255,255,0.85)",
                fontSize: "0.87rem",
                fontWeight: 500,
                textDecoration: "none",
                letterSpacing: "0.01em",
                transition: "color 0.25s cubic-bezier(0.16,1,0.3,1)",
                whiteSpace: "nowrap",
                padding: "4px 0",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.85)")}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Right side: WA button + mobile toggle */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", flexShrink: 0 }}>
          <a
            href={`https://api.whatsapp.com/send?phone=${whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="sede-nav-cta"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              background: "linear-gradient(135deg, #C2D501 0%, #d4e818 100%)",
              color: "#062F87",
              padding: "8px 18px",
              borderRadius: 6,
              fontSize: "0.85rem",
              fontWeight: 700,
              textDecoration: "none",
              whiteSpace: "nowrap",
              boxShadow: "0 2px 12px rgba(194,213,1,0.25)",
              transition: "transform 0.3s cubic-bezier(0.16,1,0.3,1), box-shadow 0.3s ease",
            }}
          >
            <FaWhatsapp style={{ fontSize: "1.05rem" }} />
            <span className="sede-nav-cta-text">Contáctanos</span>
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen(o => !o)}
            className="sede-nav-toggle"
            aria-label="Menú"
            style={{
              color: "#fff",
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "1.35rem",
              padding: "4px",
              lineHeight: 1,
            }}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          style={{
            background: "rgba(4,20,80,0.98)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            padding: "1.25rem 1.5rem 1.75rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.1rem",
            borderTop: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          {NAV_LINKS.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                color: "rgba(255,255,255,0.82)",
                textDecoration: "none",
                fontSize: "1rem",
                fontWeight: 400,
                padding: "0.2rem 0",
              }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}

      {/* Scoped responsive styles */}
      <style>{`
        .sede-nav-link::after {
          content: '';
          position: absolute; bottom: 0; left: 0;
          width: 0; height: 1.5px;
          background: linear-gradient(90deg, #C2D501, #d4e818);
          transition: width 0.3s cubic-bezier(0.16,1,0.3,1);
          border-radius: 1px;
        }
        .sede-nav-link:hover::after { width: 100%; }

        .sede-nav-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 18px rgba(194,213,1,0.4);
        }

        .sede-nav-desktop { display: none; }
        .sede-nav-toggle  { display: flex; }
        @media (min-width: 768px) {
          .sede-nav-desktop { display: flex; }
          .sede-nav-toggle  { display: none; }
        }
        @media (max-width: 420px) {
          .sede-nav-cta-text { display: none; }
        }
      `}</style>
    </nav>
  );
}
