"use client";

import { FaShieldAlt, FaFilePdf, FaArrowLeft, FaDownload, FaWhatsapp } from "react-icons/fa";

const POLICIES = [
  {
    title: "Política de Tratamiento de Datos Personales",
    description:
      "Conoce cómo recopilamos, usamos y protegemos tus datos personales. Esta política describe los principios, derechos y procedimientos que OHI aplica para garantizar la privacidad y seguridad de tu información.",
    file: "/politic/GG-CI-L-01-POLITICA-DE-TRATAMIENTOS-DE-DATOS-PERSONALES.pdf",
    icon: "shield",
  },
  {
    title: "Autorización de Tratamiento de Datos Personales",
    description:
      "Formulario de actualización y autorización para el tratamiento de datos personales conforme a la ley de protección de datos vigente en Colombia (Ley 1581 de 2012).",
    file: "/politic/GH-BO-RS-F-54-ACTUALIZACION-AUTORIZACION-DE-TRATAMIENTO-DE-DATOS-PERSONALES.pdf",
    icon: "file",
  },
];

export default function PoliticasPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=DM+Sans:wght@300;400;500;600;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body {
          font-family: 'DM Sans', sans-serif;
          color: #061A50;
          background: #fff;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        ::selection { background: rgba(194,213,1,0.3); color: #062F87; }
        a { text-decoration: none; }

        /* Custom scrollbar */
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #010c2a; }
        ::-webkit-scrollbar-thumb { background: linear-gradient(180deg, #0B3FAD, #062F87); border-radius: 3px; }
        ::-webkit-scrollbar-thumb:hover { background: linear-gradient(180deg, #C2D501, #d4e818); }

        /* Hero animations */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes orbFloat {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-20px) scale(1.05); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }

        .hero-badge {
          animation: fadeInUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.1s both;
        }
        .hero-title {
          animation: fadeInUp 0.9s cubic-bezier(0.16,1,0.3,1) 0.25s both;
        }
        .hero-desc {
          animation: fadeInUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.4s both;
        }

        /* Card styles */
        .policy-card {
          background: #fff;
          border-radius: 14px;
          border: 1px solid rgba(6,47,135,0.06);
          box-shadow: 0 2px 16px rgba(0,0,0,0.05), 0 12px 48px rgba(0,0,0,0.04);
          overflow: hidden;
          transition: transform 0.45s cubic-bezier(0.16,1,0.3,1), box-shadow 0.45s ease;
          animation: fadeInUp 0.8s cubic-bezier(0.16,1,0.3,1) both;
        }
        .policy-card:nth-child(1) { animation-delay: 0.5s; }
        .policy-card:nth-child(2) { animation-delay: 0.65s; }
        .policy-card:nth-child(3) { animation-delay: 0.8s; }
        .policy-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 48px rgba(0,0,0,0.1), 0 4px 0 0 #C2D501;
        }

        .policy-icon-wrap {
          width: 56px; height: 56px;
          border-radius: 14px;
          display: flex; align-items: center; justify-content: center;
          background: linear-gradient(135deg, rgba(6,47,135,0.08), rgba(6,47,135,0.04));
          color: #062F87;
          font-size: 1.4rem;
          flex-shrink: 0;
          transition: all 0.4s cubic-bezier(0.16,1,0.3,1);
        }
        .policy-card:hover .policy-icon-wrap {
          background: linear-gradient(135deg, #C2D501 0%, #d4e818 100%);
          color: #040f44;
          box-shadow: 0 8px 28px rgba(194,213,1,0.4);
          transform: scale(1.08) rotate(-3deg);
        }

        .btn-download {
          display: inline-flex; align-items: center; gap: 8px;
          background: linear-gradient(135deg, #062F87 0%, #0B3FAD 100%);
          color: #fff;
          padding: 12px 24px;
          border-radius: 10px;
          font-size: 0.88rem;
          font-weight: 600;
          border: none; cursor: pointer;
          transition: all 0.35s cubic-bezier(0.16,1,0.3,1);
          text-decoration: none;
        }
        .btn-download:hover {
          background: linear-gradient(135deg, #C2D501 0%, #d4e818 100%);
          color: #062F87;
          transform: translateY(-2px);
          box-shadow: 0 6px 24px rgba(194,213,1,0.35);
        }
        .btn-download:active {
          transform: translateY(1px) scale(0.97);
          box-shadow: 0 2px 12px rgba(194,213,1,0.25);
        }

        .btn-view {
          display: inline-flex; align-items: center; gap: 8px;
          background: transparent;
          color: #062F87;
          padding: 12px 24px;
          border-radius: 10px;
          font-size: 0.88rem;
          font-weight: 600;
          border: 1.5px solid rgba(6,47,135,0.15);
          cursor: pointer;
          transition: all 0.35s cubic-bezier(0.16,1,0.3,1);
          text-decoration: none;
        }
        .btn-view:hover {
          border-color: #062F87;
          background: rgba(6,47,135,0.04);
          transform: translateY(-2px);
        }
        .btn-view:active {
          transform: translateY(1px) scale(0.97);
        }

        .back-link {
          display: inline-flex; align-items: center; gap: 8px;
          color: rgba(255,255,255,0.7);
          font-size: 0.88rem; font-weight: 500;
          text-decoration: none;
          transition: color 0.25s ease;
          animation: fadeIn 0.6s ease both;
        }
        .back-link:hover { color: #C2D501; }
        .back-link:active { transform: scale(0.95); }

        /* Info banner */
        .info-banner {
          animation: fadeInUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.85s both;
        }

        /* Floating orbs */
        .hero-orb {
          position: absolute; border-radius: 50%;
          filter: blur(90px); pointer-events: none;
        }
      `}</style>

      {/* ── HERO ── */}
      <section style={{
        position: "relative",
        minHeight: "48vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: "linear-gradient(135deg, #010c2a 0%, #041a5c 20%, #062F87 45%, #0B3FAD 70%, #1347bf 90%, #062F87 100%)",
      }}>
        {/* Dot grid */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "34px 34px",
        }} />
        {/* Logo tile */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "url('/LOGOS/LOGO.PNG')",
          backgroundSize: "170px", backgroundRepeat: "repeat",
          opacity: 0.02, pointerEvents: "none",
        }} />
        {/* Ambient orbs */}
        <div className="hero-orb" style={{
          width: 300, height: 300,
          background: "radial-gradient(circle, rgba(194,213,1,0.12), transparent 70%)",
          top: "-5%", right: "10%",
          animation: "orbFloat 8s ease-in-out infinite",
        }} />
        <div className="hero-orb" style={{
          width: 200, height: 200,
          background: "radial-gradient(circle, rgba(6,47,135,0.25), transparent 70%)",
          bottom: "-10%", left: "5%",
          animation: "orbFloat 10s ease-in-out infinite 2s",
        }} />

        <div style={{
          position: "relative", zIndex: 2,
          maxWidth: 1200, margin: "0 auto",
          padding: "7rem 1.5rem 4rem",
          width: "100%",
        }}>
          {/* Back link */}
          <a href="/" className="back-link" style={{ marginBottom: "2rem", display: "inline-flex" }}>
            <FaArrowLeft style={{ fontSize: "0.75rem" }} />
            Volver al inicio
          </a>

          {/* Badge */}
          <div className="hero-badge" style={{
            display: "inline-flex", alignItems: "center", gap: 7,
            background: "rgba(194,213,1,0.1)",
            border: "1px solid rgba(194,213,1,0.25)",
            color: "#C2D501",
            fontSize: "0.72rem", fontWeight: 700,
            letterSpacing: "0.14em", textTransform: "uppercase",
            padding: "6px 18px", borderRadius: 20,
            marginBottom: "1.5rem", marginTop: "1.5rem",
          }}>
            <span style={{
              width: 6, height: 6, borderRadius: "50%",
              background: "#C2D501",
              boxShadow: "0 0 8px rgba(194,213,1,0.5)",
              animation: "pulse 2s ease-in-out infinite",
            }} />
            Marco Legal
          </div>

          {/* Title */}
          <h1 className="hero-title" style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
            fontWeight: 700,
            color: "#fff",
            lineHeight: 1.1,
            marginBottom: "1rem",
            maxWidth: 700,
          }}>
            Políticas de{" "}
            <span style={{
              background: "linear-gradient(135deg, #C2D501 0%, #d4e818 50%, #f7ff80 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}>
              Protección de Datos
            </span>
          </h1>

          {/* Desc */}
          <p className="hero-desc" style={{
            color: "rgba(255,255,255,0.65)",
            fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)",
            lineHeight: 1.7,
            maxWidth: 600,
          }}>
            En OHI – Organización Humana Integral nos comprometemos con la transparencia
            y el cumplimiento de la Ley 1581 de 2012 sobre protección de datos personales.
            Consulta y descarga nuestras políticas vigentes.
          </p>
        </div>
      </section>

      {/* ── POLICIES ── */}
      <section style={{
        maxWidth: 1000,
        margin: "0 auto",
        padding: "4rem 1.5rem 2rem",
      }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {POLICIES.map((policy, idx) => (
            <div key={policy.title} className="policy-card" style={{
              padding: "2rem 2.2rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.2rem",
            }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "1.2rem" }}>
                <div className="policy-icon-wrap">
                  {policy.icon === "shield" ? <FaShieldAlt /> : <FaFilePdf />}
                </div>
                <div style={{ flex: 1 }}>
                  <h2 style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.45rem",
                    fontWeight: 700,
                    color: "#062F87",
                    lineHeight: 1.3,
                    marginBottom: "0.5rem",
                  }}>
                    {policy.title}
                  </h2>
                  <p style={{
                    color: "#4A5A80",
                    fontSize: "0.9rem",
                    lineHeight: 1.7,
                  }}>
                    {policy.description}
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div style={{
                display: "flex", flexWrap: "wrap", gap: "0.75rem",
                paddingTop: "0.5rem",
                borderTop: "1px solid rgba(6,47,135,0.06)",
              }}>
                <a
                  href={policy.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-view"
                >
                  <FaFilePdf style={{ fontSize: "0.9rem" }} />
                  Ver documento
                </a>
                <a
                  href={policy.file}
                  download
                  className="btn-download"
                >
                  <FaDownload style={{ fontSize: "0.85rem" }} />
                  Descargar PDF
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── INFO BANNER ── */}
      <section className="info-banner" style={{
        maxWidth: 1000,
        margin: "0 auto",
        padding: "0 1.5rem 4rem",
      }}>
        <div style={{
          background: "linear-gradient(135deg, #010c2a 0%, #041a5c 50%, #062F87 100%)",
          borderRadius: 20,
          padding: "2.5rem 2.2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: "1rem",
          position: "relative",
          overflow: "hidden",
        }}>
          {/* Dot grid */}
          <div style={{
            position: "absolute", inset: 0, pointerEvents: "none",
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }} />

          <div style={{ position: "relative", zIndex: 2 }}>
            <h3 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.5rem",
              fontWeight: 700,
              color: "#fff",
              marginBottom: "0.5rem",
            }}>
              ¿Tienes dudas sobre tus datos personales?
            </h3>
            <p style={{
              color: "rgba(255,255,255,0.6)",
              fontSize: "0.92rem",
              lineHeight: 1.7,
              maxWidth: 520,
              margin: "0 auto 1.5rem",
            }}>
              Si deseas ejercer tus derechos de acceso, rectificación, supresión o
              revocatoria de la autorización, contáctanos directamente.
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=573175708440&text=Hola, tengo una consulta sobre el tratamiento de datos personales"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "linear-gradient(135deg, #C2D501 0%, #d4e818 100%)",
                color: "#062F87",
                padding: "14px 28px",
                borderRadius: 10,
                fontSize: "0.95rem",
                fontWeight: 700,
                textDecoration: "none",
                boxShadow: "0 6px 24px rgba(194,213,1,0.3)",
                transition: "transform 0.3s cubic-bezier(0.16,1,0.3,1), box-shadow 0.3s ease",
              }}
            >
              <FaWhatsapp style={{ fontSize: "1.1rem" }} />
              Escribir por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{
        background: "#010c2a",
        padding: "2rem 1.5rem",
        textAlign: "center",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}>
        <a href="/" style={{ display: "inline-block", marginBottom: "1rem" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/LOGOS/LOGO OHI HORIZONTAL.PNG"
            alt="OHI"
            style={{ height: 36, filter: "brightness(0) invert(1)", opacity: 0.5 }}
          />
        </a>
        <p style={{ color: "rgba(255,255,255,0.2)", fontSize: "0.77rem" }}>
          © 2025 OHI – Organización Humana Integral. Todos los derechos reservados.
        </p>
      </footer>
    </>
  );
}
