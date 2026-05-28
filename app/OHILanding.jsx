"use client";

import { useState, useEffect, useRef } from "react";
import {
  FaHeartbeat, FaAmbulance, FaBaby, FaUserMd, FaBed,
  FaFlask, FaSyringe, FaTint, FaBriefcaseMedical,
  FaShieldAlt, FaMapMarkerAlt, FaWhatsapp, FaPhone,
  FaBars, FaTimes, FaQuoteLeft, FaAward, FaClock,
  FaHandsHelping, FaHospitalAlt, FaStethoscope, FaHeart,
  FaFacebookF, FaInstagram,
  FaArrowRight, FaChevronDown, FaStar,
} from "react-icons/fa";
import { MdHealthAndSafety, MdBiotech, MdLocalHospital, MdVaccines } from "react-icons/md";
import { RiHeartPulseLine, RiMicroscopeLine, RiSurgicalMaskLine } from "react-icons/ri";
import { BiDna, BiBuildings } from "react-icons/bi";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// ─── GLOBAL STYLES ────────────────────────────────────────────────────────────
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&display=swap');

    *, *::before, *::after { box-sizing: border-box; }

    :root {
      --cream:      #FFFFFF;
      --cream-dark: #F0F3FF;
      --navy:       #062F87;
      --navy-mid:   #0B3FAD;
      --teal:       #1A52CC;
      --gold:       #C2D501;
      --gold-light: #d4e818;
      --sage:       #C2D501;
      --text:       #061A50;
      --text-muted: #4A5A80;
      --white:      #FFFFFF;
    }

    html { scroll-behavior: smooth; }

    body {
      font-family: 'DM Sans', system-ui, sans-serif;
      background: var(--cream);
      color: var(--text);
      overflow-x: hidden;
    }

    .display-font { font-family: 'Cormorant Garamond', Georgia, serif; }

    /* ── Navbar ──────────────────────────────── */
    .navbar {
      position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
      transition: background 0.4s ease, box-shadow 0.4s ease, backdrop-filter 0.4s ease;
    }
    .navbar.scrolled {
      background: rgba(13, 46, 78, 0.96) !important;
      backdrop-filter: blur(16px);
      box-shadow: 0 1px 24px rgba(0,0,0,0.18);
    }

    /* ── Hero ────────────────────────────────── */
    @keyframes heroGradient {
      0%   { background-position: 0% 50%; }
      50%  { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    .hero-bg {
      background: linear-gradient(135deg, #010c2a 0%, #062F87 35%, #0B3FAD 65%, #062F87 100%);
      background-size: 300% 300%;
      animation: heroGradient 14s ease infinite;
    }

    /* ── Entry animations ────────────────────── */
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(28px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeIn {
      from { opacity: 0; }
      to   { opacity: 1; }
    }

    .fade-up     { opacity: 0; animation: fadeUp 0.75s ease forwards; }
    .delay-100   { animation-delay: 0.1s; }
    .delay-200   { animation-delay: 0.2s; }
    .delay-300   { animation-delay: 0.3s; }
    .delay-400   { animation-delay: 0.4s; }
    .delay-500   { animation-delay: 0.5s; }
    .delay-600   { animation-delay: 0.6s; }
    .delay-700   { animation-delay: 0.7s; }
    .delay-800   { animation-delay: 0.8s; }

    /* ── Service cards ───────────────────────── */
    .service-card {
      position: relative;
      transition: box-shadow 0.3s ease, border-color 0.3s ease;
      cursor: default;
    }
    .service-card::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; height: 3px;
      background: linear-gradient(90deg, var(--gold) 0%, var(--gold-light) 100%);
      border-radius: 10px 10px 0 0;
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.35s cubic-bezier(0.25,0.46,0.45,0.94);
    }
    .service-card:hover::before { transform: scaleX(1); }
    .service-card:hover {
      transform: translateY(-6px);
      box-shadow: 0 20px 48px rgba(6,47,135,0.14);
      border-color: var(--gold) !important;
    }
    .service-card:hover .s-icon { color: var(--gold) !important; }
    .s-icon { transition: color 0.3s ease; }

    /* ── Service icon wrapper ────────────────── */
    .s-icon-wrap {
      width: 54px; height: 54px; border-radius: 13px;
      background: linear-gradient(135deg, rgba(6,47,135,0.06) 0%, rgba(11,63,173,0.1) 100%);
      border: 1px solid rgba(6,47,135,0.1);
      display: flex; align-items: center; justify-content: center;
      margin-bottom: 1.1rem;
      transition: background 0.35s ease, transform 0.35s ease, box-shadow 0.35s ease;
    }
    .service-card:hover .s-icon-wrap {
      background: linear-gradient(135deg, rgba(194,213,1,0.12) 0%, rgba(194,213,1,0.05) 100%);
      transform: scale(1.08);
      box-shadow: 0 4px 18px rgba(194,213,1,0.18);
    }

    /* ── Eyebrow pill chips ──────────────────── */
    .eyebrow-pill {
      display: inline-flex; align-items: center;
      background: rgba(6,47,135,0.07);
      border: 1px solid rgba(6,47,135,0.14);
      color: var(--teal);
      font-size: 0.72rem; font-weight: 600;
      letter-spacing: 0.18em; text-transform: uppercase;
      padding: 5px 14px 5px 10px; border-radius: 100px;
    }
    .eyebrow-pill::before {
      content: ''; width: 6px; height: 6px; border-radius: 50%;
      background: var(--gold); flex-shrink: 0; margin-right: 8px;
    }
    .eyebrow-pill-dark {
      background: rgba(194,213,1,0.08);
      border: 1px solid rgba(194,213,1,0.22);
      color: rgba(194,213,1,0.9);
    }
    .eyebrow-pill-dark::before { background: var(--gold); }

    /* ── Pillar cards ────────────────────────── */
    .pillar-card {
      transition: box-shadow 0.3s ease;
    }
    .pillar-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 16px 40px rgba(6,47,135,0.12);
    }
    .pillar-card-dark {
      transition: box-shadow 0.3s ease, border-color 0.35s ease !important;
    }
    .pillar-card-dark:hover {
      transform: translateY(-6px) !important;
      box-shadow: 0 24px 56px rgba(0,0,0,0.35), 0 0 0 1px rgba(194,213,1,0.4) !important;
      border-color: rgba(194,213,1,0.4) !important;
    }

    /* ── Stat counters ───────────────────────── */
    @keyframes countUp {
      from { opacity: 0; transform: scale(0.85); }
      to   { opacity: 1; transform: scale(1); }
    }
    .stat-num { animation: countUp 0.6s ease forwards; }

    /* ── Testimonial cards ───────────────────── */
    .testimonial-card {
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .testimonial-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 20px 48px rgba(6,47,135,0.12);
    }

    /* ── Buttons ─────────────────────────────── */
    .btn-primary {
      position: relative; overflow: hidden;
      transition: background 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
    }
    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(194,213,1,0.5);
    }
    .btn-outline {
      transition: background 0.3s ease, color 0.3s ease, transform 0.2s ease;
    }
    .btn-outline:hover {
      background: rgba(255,255,255,0.09);
      border-color: rgba(255,255,255,0.65) !important;
      transform: translateY(-2px);
    }

    /* ── Nav links ───────────────────────────── */
    .nav-link {
      position: relative;
      transition: color 0.2s ease;
    }
    .nav-link::after {
      content: '';
      position: absolute; bottom: -4px; left: 0;
      width: 0; height: 1.5px;
      background: var(--gold);
      transition: width 0.3s ease;
    }
    .nav-link:hover::after { width: 100%; }

    /* ── Wave / SVG decorators ───────────────── */
    .wave-top    { display: block; margin-bottom: -2px; }
    .wave-bottom { display: block; margin-top: -2px; }

    /* ── Form ────────────────────────────────── */
    .form-input {
      transition: border-color 0.2s ease, box-shadow 0.2s ease;
      outline: none;
    }
    .form-input:focus {
      border-color: var(--navy) !important;
      box-shadow: 0 0 0 3px rgba(6,47,135,0.15);
    }

    /* ── Scroll indicator ─────────────────────── */
    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50%       { transform: translateY(8px); }
    }
    .scroll-bounce { animation: bounce 1.8s ease infinite; }

    /* ── Gold accent line ─────────────────────── */
    @keyframes goldShimmer {
      0%   { background-position: -96px 0; }
      100% { background-position: 144px 0; }
    }
    .gold-line {
      width: 48px; height: 2px;
      background: linear-gradient(90deg, var(--gold) 0%, #f7ff80 45%, var(--gold) 100%);
      background-size: 240px 100%;
      animation: goldShimmer 3s linear infinite;
      display: inline-block;
    }

    /* ── Mobile menu ─────────────────────────── */
    .mobile-menu {
      transition: opacity 0.3s ease, transform 0.3s ease;
    }
    .mobile-menu.open {
      opacity: 1; transform: translateY(0); pointer-events: all;
    }
    .mobile-menu.closed {
      opacity: 0; transform: translateY(-12px); pointer-events: none;
    }

    /* ── Decorative circle ───────────────────── */
    @keyframes rotateSlow {
      from { transform: rotate(0deg); }
      to   { transform: rotate(360deg); }
    }
    .deco-ring {
      animation: rotateSlow 28s linear infinite;
    }

    /* ── Floating WhatsApp ───────────────────── */
    @keyframes waPulse {
      0%   { box-shadow: 0 0 0 0 rgba(194,213,1,0.55); }
      70%  { box-shadow: 0 0 0 16px rgba(194,213,1,0); }
      100% { box-shadow: 0 0 0 0 rgba(194,213,1,0); }
    }
    .wa-float {
      position: fixed; bottom: 28px; right: 28px; z-index: 1100;
      width: 58px; height: 58px; border-radius: 50%;
      background: #C2D501; color: #062F87;
      display: flex; align-items: center; justify-content: center;
      font-size: 1.8rem; text-decoration: none;
      animation: waPulse 2.4s ease infinite;
      transition: transform 0.2s ease, background 0.2s ease;
    }
    .wa-float:hover { transform: scale(1.12); background: #d4e818; }

    /* ── Float badge ─────────────────────────── */
    @keyframes floatBadge {
      0%, 100% { transform: translateY(0px); }
      50%       { transform: translateY(-5px); }
    }

    /* ── Specialty tags ─────────────────────── */
    .spec-tag {
      cursor: default;
      transition: transform 0.2s ease, background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
    }
    .spec-tag:hover {
      transform: translateY(-2px);
      background: rgba(6,47,135,0.14) !important;
      color: var(--navy) !important;
      border-color: rgba(6,47,135,0.3) !important;
    }

    /* ── WhatsApp tooltip ───────────────────── */
    .wa-float::before {
      content: "¡Escríbenos!";
      position: absolute;
      right: calc(100% + 12px); top: 50%;
      transform: translateY(-50%) translateX(8px);
      background: rgba(6,47,135,0.94);
      color: #fff; font-size: 0.77rem; font-weight: 500;
      padding: 6px 13px; border-radius: 6px;
      white-space: nowrap;
      opacity: 0;
      transition: opacity 0.22s ease, transform 0.22s ease;
      pointer-events: none;
      font-family: 'DM Sans', sans-serif;
    }
    .wa-float:hover::before {
      opacity: 1;
      transform: translateY(-50%) translateX(0);
    }

    /* ── Photo gallery strip ─────────────────── */
    .gallery-item { overflow: hidden; cursor: default; }
    .gallery-item img {
      transition: transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94);
    }
    .gallery-item:hover img { transform: scale(1.06); }

    /* ── Hero image frame ─────────────────────── */
    .hero-img-wrap {
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 32px 80px rgba(0,0,0,0.45), 0 0 0 1px rgba(194,213,1,0.15);
    }

    /* ── Scroll Reveal ─────────────────────── */
    /* Initial hidden state — GSAP takes over on hydration */
    [data-reveal] { opacity: 0; }

    /* ── Custom scrollbar ─────────────────────── */
    ::-webkit-scrollbar { width: 5px; }
    ::-webkit-scrollbar-track { background: #010c2a; }
    ::-webkit-scrollbar-thumb { background: var(--navy-mid); border-radius: 3px; }
    ::-webkit-scrollbar-thumb:hover { background: var(--gold); }

    /* ── Page preloader ───────────────────────── */
    .page-loader {
      position: fixed; inset: 0; z-index: 9999;
      background: #010c2a;
      display: flex; flex-direction: column;
      align-items: center; justify-content: center;
      gap: 1.9rem;
    }
    .loader-logo-img { opacity: 0; transform: translateY(14px); }
    .loader-tagline  { opacity: 0; }
    .loader-bar {
      width: 200px; height: 2px;
      background: rgba(255,255,255,0.07);
      border-radius: 1px; overflow: hidden;
    }
    .loader-bar-fill {
      height: 100%;
      background: linear-gradient(90deg, var(--navy-mid), var(--gold));
      transform: scaleX(0); transform-origin: left;
    }

    /* ── Marquee / trust ticker ───────────────── */
    @keyframes marqueeAnim {
      0%   { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .marquee-wrap { overflow: hidden; }
    .marquee-track {
      display: flex; width: max-content;
      animation: marqueeAnim 38s linear infinite;
    }
    .marquee-wrap:hover .marquee-track { animation-play-state: paused; }
    .marquee-item {
      display: inline-flex; align-items: center; gap: 9px;
      padding: 0 2.4rem;
      color: rgba(255,255,255,0.52);
      font-size: 0.79rem; font-weight: 500; letter-spacing: 0.06em;
      white-space: nowrap; cursor: default;
    }
    .marquee-sep { color: rgba(194,213,1,0.32); margin-left: 0.6rem; font-size: 0.72rem; }

    /* ── Sede visual link cards ───────────────── */
    .sede-vcard {
      display: block; text-decoration: none;
      border-radius: 14px; overflow: hidden;
      box-shadow: 0 4px 22px rgba(6,47,135,0.08), 0 0 0 1px rgba(6,47,135,0.07);
      transition: box-shadow 0.4s ease, transform 0.35s ease;
      background: #fff;
    }
    .sede-vcard:hover {
      box-shadow: 0 28px 72px rgba(6,47,135,0.22), 0 0 0 1px rgba(6,47,135,0.14);
      transform: translateY(-6px);
    }
    .sede-vcard:hover .sede-vcard-arr { transform: translateX(5px); }
    .sede-vcard:hover .sede-vcard-media { transform: scale(1.06); }
    .sede-vcard-arr { display: inline-flex; transition: transform 0.25s ease; }
    .sede-vcard-media { transition: transform 0.6s ease; }
    .sede-vcard-body { padding: 1.5rem 1.6rem 1.7rem; }

    /* ── Stat glow ────────────────────────────── */
    .stat-glow { filter: drop-shadow(0 0 22px rgba(194,213,1,0.32)); }

    /* ── Logo tile pattern (navy sections) ────── */
    /* mix-blend-mode:screen makes the white PNG background glow white   */
    /* while the navy logo shapes become invisible → negative-space tile  */
    .logo-tile-bg {
      position: absolute; inset: 0; pointer-events: none; z-index: 0;
      background-image: url('/LOGOS/LOGO.PNG');
      background-repeat: repeat;
      background-size: 82px 82px;
      mix-blend-mode: screen;
      opacity: 0.055;
      -webkit-mask-image: radial-gradient(ellipse 75% 95% at 100% 0%, black 0%, black 12%, rgba(0,0,0,0.6) 40%, transparent 72%);
      mask-image:         radial-gradient(ellipse 75% 95% at 100% 0%, black 0%, black 12%, rgba(0,0,0,0.6) 40%, transparent 72%);
    }
    .logo-tile-bg-bl {
      position: absolute; inset: 0; pointer-events: none; z-index: 0;
      background-image: url('/LOGOS/LOGO.PNG');
      background-repeat: repeat;
      background-size: 82px 82px;
      mix-blend-mode: screen;
      opacity: 0.055;
      -webkit-mask-image: radial-gradient(ellipse 65% 80% at 0% 100%, black 0%, black 12%, rgba(0,0,0,0.5) 42%, transparent 70%);
      mask-image:         radial-gradient(ellipse 65% 80% at 0% 100%, black 0%, black 12%, rgba(0,0,0,0.5) 42%, transparent 70%);
    }
    .logo-tile-bg-center {
      position: absolute; inset: 0; pointer-events: none; z-index: 0;
      background-image: url('/LOGOS/LOGO.PNG');
      background-repeat: repeat;
      background-size: 70px 70px;
      mix-blend-mode: screen;
      opacity: 0.042;
      -webkit-mask-image: radial-gradient(ellipse 50% 50% at 50% 50%, black 0%, rgba(0,0,0,0.4) 50%, transparent 80%);
      mask-image:         radial-gradient(ellipse 50% 50% at 50% 50%, black 0%, rgba(0,0,0,0.4) 50%, transparent 80%);
    }

    /* ── Hero glow orbs ───────────────────────── */
    @keyframes orbFloat {
      0%, 100% { transform: translate(0, 0) scale(1); }
      33%       { transform: translate(18px, -22px) scale(1.06); }
      66%       { transform: translate(-12px, 14px) scale(0.96); }
    }
    .hero-orb {
      position: absolute; border-radius: 50%;
      filter: blur(90px); pointer-events: none;
      animation: orbFloat 14s ease-in-out infinite;
    }
  `}</style>
);

// ─── DATA ─────────────────────────────────────────────────────────────────────
const NAV_LINKS = [
  { label: "Inicio",         href: "#inicio" },
  { label: "Quiénes somos",  href: "#somos" },
  { label: "Servicios",      href: "#servicios" },
  { label: "Sedes",          href: "#sedes" },
  { label: "Testimonios",    href: "#testimonios" },
  { label: "Contacto",       href: "#contacto" },
];

const SERVICES = [
  { icon: FaAmbulance,         label: "Urgencias 24 horas",                    desc: "Atención de emergencias continua, los 365 días del año." },
  { icon: FaSyringe,           label: "Cirugías de alta complejidad",          desc: "Intervenciones quirúrgicas de mediana y alta complejidad con tecnología avanzada." },
  { icon: FaBaby,              label: "CEMIC",                                 desc: "Centro de Excelencia Materno Infantil del Cesar — atención integral a la madre y el niño." },
  { icon: FaHeart,             label: "Pediatría",                             desc: "Cuidado especializado para los pacientes más pequeños de la familia." },
  { icon: RiHeartPulseLine,    label: "UNICAR",                                desc: "Unidad de Intervencionismo Cardiovascular con equipamiento de última generación." },
  { icon: MdHealthAndSafety,   label: "UCI Adultos",                           desc: "Unidad de Cuidados Intensivos para adultos con monitoreo permanente." },
  { icon: FaUserMd,            label: "UCI Pediátrica",                        desc: "Cuidados intensivos pediátricos y neonatales con personal altamente especializado." },
  { icon: FaBed,               label: "Hospitalización adulto",                desc: "Habitaciones equipadas con sistemas tecnológicos para un seguimiento oportuno." },
  { icon: FaHospitalAlt,       label: "Hospitalización pediátrica",            desc: "Áreas pediátricas seguras y confortables para niños y sus familias." },
  { icon: RiMicroscopeLine,    label: "Laboratorio clínico",                   desc: "Diagnóstico de mediana y alta complejidad con resultados ágiles y precisos." },
  { icon: FaTint,              label: "Banco de sangre y aféresis",            desc: "Obtención, procesamiento y distribución segura de hemocomponentes." },
  { icon: MdBiotech,           label: "Central de mezclas",                    desc: "Preparación especializada de medicamentos de alta complejidad." },
];

const SPECIALTIES = [
  "Medicina Interna", "Cardiología", "Neurología", "Neurocirugía",
  "Gastroenterología", "Nefrología", "Neumología", "Urología",
  "Hematología", "Psiquiatría", "Medicina del Dolor", "Anestesiología",
  "Oftalmología", "Otorrinolaringología", "Medicina Intensiva",
];

const PILLARS = [
  {
    icon: FaAward,
    title: "+20 años de trayectoria",
    desc: "Más de dos décadas consolidando confianza, excelencia y resultados en salud para la comunidad de Valledupar y el norte de Colombia.",
  },
  {
    icon: MdLocalHospital,
    title: "Tecnología de vanguardia",
    desc: "Equipos biomédicos de última generación que garantizan diagnósticos precisos y tratamientos efectivos a nivel de alta complejidad.",
  },
  {
    icon: FaHandsHelping,
    title: "Atención humanizada",
    desc: "Cada paciente recibe trato digno, escucha activa y acompañamiento integral — porque detrás de cada caso hay una persona.",
  },
  {
    icon: FaStethoscope,
    title: "Equipo especializado",
    desc: "Profesionales de la salud altamente calificados, con especialistas en más de 15 áreas clínicas y quirúrgicas.",
  },
];

const STATS = [
  { value: "+20",  count: 20,   prefix: "+", suffix: "",   label: "Años de experiencia" },
  { value: "3",    count: 3,    prefix: "",  suffix: "",   label: "Sedes en Valledupar" },
  { value: "+15",  count: 15,   prefix: "+", suffix: "",   label: "Especialidades médicas" },
  { value: "24/7", count: null, prefix: "",  suffix: "/7", label: "Atención en urgencias" },
];

const TESTIMONIALS = [
  {
    quote: "Pasaba los días con calmantes, sin poder jugar con mis hijos ni trabajar. Desde la primera consulta en OHI sentí que estaba en buenas manos. Hoy camino sin dolor y agradezco profundamente a todo su personal.",
    highlight: "Volví a caminar sin dolor gracias a ellos.",
    name: "Rafael Martínez",
    role: "Paciente",
  },
  {
    quote: "Estaba embarazada cuando sufrí dos paros cardiorrespiratorios. Gracias al equipo de OHI, que actuó con rapidez, profesionalismo y sobre todo humanidad, hoy puedo contar esta historia. No solo salvaron mi vida, sino también la de mi hijo.",
    highlight: "OHI no fue solo un hospital… fue donde volví a nacer.",
    name: "Paola Rodríguez",
    role: "Paciente",
  },
  {
    quote: "En OHI fue diferente. La doctora se tomó el tiempo de conocer mi historia, ajustaron el tratamiento con precisión y me ofrecieron apoyo psicológico. Hoy tengo mi presión controlada y me siento respetada, cuidada y escuchada.",
    highlight: "Me trataron como ser humano, no como un número.",
    name: "María García",
    role: "Paciente",
  },
];

const SEDES = [
  {
    name: "Sede Centro",
    slug: "sede-centro",
    image: "/IMG/CENTRO/centro-entrada.webp",
    address: "Carrera 19 #14-47 San Vicente, Valledupar – Cesar",
    whatsapp: "573175708440",
    phone: "317 570 8440",
    ext: "Ext. 1160",
    desc: "Institución líder con más de 20 años brindando atención integral de mediana y alta complejidad, con tecnología de punta y talento humano comprometido.",
    services: [
      "Urgencias Adulto 24h",
      "Maternidad · Ginecología · Obstetricia",
      "Urgencias Pediátricas 24h",
      "UCI Adultos y Neonatal",
      "Cirugías de alta complejidad",
      "Intervencionismo Cardiovascular",
      "Central de Mezclas",
    ],
  },
  {
    name: "Sede Santa Isabel",
    slug: "santa-isabel",
    image: "/IMG/SANTA/SANTA-ISABEL-entrada.webp",
    address: "Av. Simón Bolívar #22-39, Valledupar – Cesar",
    whatsapp: "573175708440",
    phone: "317 570 8440",
    surgery: "315 354 6567",
    desc: "Especializada en cirugía de alta complejidad, cuidados críticos adultos y pediátricos, apoyo diagnóstico y programación quirúrgica.",
    services: [
      "Urgencias 24h",
      "Cirugías de alta complejidad",
      "Hospitalización adulto",
      "UCI Adultos",
      "UCI Pediátrica (pioneros)",
      "Imágenes diagnósticas",
      "Apoyo terapéutico",
    ],
  },
  {
    name: "Banco de Sangre y Aféresis",
    slug: "banco-de-sangre",
    image: "/IMG/BANCO/unidad movil.webp",
    address: "Calle 14 #18-97 San Vicente, Valledupar – Cesar",
    whatsapp: "573175708440",
    phone: "317 570 8440",
    desc: "Servicio integral de hemocomponentes con los más altos estándares de bioseguridad y trazabilidad nacional e internacional.",
    services: [
      "Donación Habitual",
      "Flebotomía terapéutica",
      "Distribución de Hemocomponentes",
      "Pruebas Infecciosas",
      "Unidad Móvil",
      "Sangre modificada y adecuación de componentes",
    ],
  },
];

const MARQUEE_ITEMS = [
  { icon: FaAward,          text: "+20 Años de trayectoria" },
  { icon: BiBuildings,      text: "3 Sedes en Valledupar" },
  { icon: FaStethoscope,    text: "+15 Especialidades médicas" },
  { icon: FaClock,          text: "Urgencias 24 / 7" },
  { icon: FaBaby,           text: "UCI Neonatal pionera" },
  { icon: FaShieldAlt,      text: "Alta complejidad certificada" },
  { icon: MdBiotech,        text: "Tecnología de vanguardia" },
  { icon: FaHeartbeat,      text: "Atención humanizada" },
  { icon: FaUserMd,         text: "Equipo altamente especializado" },
  { icon: RiHeartPulseLine, text: "Cuidados críticos adultos y pediátricos" },
];

// ─── WAVE SVG ─────────────────────────────────────────────────────────────────
const WaveDown = ({ fill = "#F8F5EF", fromFill = "transparent" }) => (
  <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="wave-bottom w-full" preserveAspectRatio="none">
    <path d="M0,0 C360,60 1080,0 1440,40 L1440,60 L0,60 Z" fill={fill} />
  </svg>
);

const WaveUp = ({ fill = "#F8F5EF" }) => (
  <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="wave-top w-full" preserveAspectRatio="none">
    <path d="M0,60 C360,0 1080,60 1440,20 L1440,0 L0,0 Z" fill={fill} />
  </svg>
);

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function OHILanding() {
  const [scrolled, setScrolled]       = useState(false);
  const [menuOpen, setMenuOpen]       = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [scrollProgress, setScrollProgress]       = useState(0);
  const loaderRef = useRef(null);

  // Navbar scroll detection + progress bar
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const el = document.documentElement;
      setScrollProgress((el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Auto-advance testimonials
  useEffect(() => {
    const t = setInterval(() => setActiveTestimonial(p => (p + 1) % TESTIMONIALS.length), 6000);
    return () => clearInterval(t);
  }, []);

  // Page preloader
  useEffect(() => {
    const loader = loaderRef.current;
    if (!loader) return;
    gsap.timeline()
      .to(".loader-logo-img",  { opacity: 1, y: 0,       duration: 0.65, ease: "power2.out" })
      .to(".loader-tagline",   { opacity: 1,             duration: 0.5  }, 0.5)
      .fromTo(".loader-bar-fill", { scaleX: 0 }, { scaleX: 1, duration: 1.1, ease: "power2.inOut" }, 0.4)
      .to(loader, { autoAlpha: 0, duration: 0.55, delay: 0.12, ease: "power2.in" })
      .set(loader, { display: "none" });
  }, []);

  // Scroll reveal via GSAP ScrollTrigger.batch (one trigger per group, no per-element overhead)
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pre-hide all reveal elements synchronously before ScrollTrigger wires up
      gsap.set('[data-reveal="up"]',    { autoAlpha: 0, y: 28 });
      gsap.set('[data-reveal="left"]',  { autoAlpha: 0, x: -28 });
      gsap.set('[data-reveal="right"]', { autoAlpha: 0, x: 28 });
      gsap.set('[data-reveal="scale"]', { autoAlpha: 0, scale: 0.88 });
      gsap.set('[data-reveal="fade"]',  { autoAlpha: 0 });

      const batchIn = (to) => ({
        start: "top 90%",
        once: true,
        onEnter: (batch) => gsap.to(batch, { ...to, stagger: 0.06, overwrite: "auto" }),
      });

      ScrollTrigger.batch('[data-reveal="up"]',    batchIn({ autoAlpha: 1, y: 0,     duration: 0.65, ease: "power3.out",   clearProps: "transform" }));
      ScrollTrigger.batch('[data-reveal="left"]',  batchIn({ autoAlpha: 1, x: 0,     duration: 0.65, ease: "power3.out",   clearProps: "transform" }));
      ScrollTrigger.batch('[data-reveal="right"]', batchIn({ autoAlpha: 1, x: 0,     duration: 0.65, ease: "power3.out",   clearProps: "transform" }));
      ScrollTrigger.batch('[data-reveal="scale"]', batchIn({ autoAlpha: 1, scale: 1, duration: 0.6,  ease: "back.out(1.3)", clearProps: "transform" }));
      ScrollTrigger.batch('[data-reveal="fade"]',  batchIn({ autoAlpha: 1,           duration: 0.75, ease: "power2.out" }));

      // Animated counters for stats
      const counterEls = document.querySelectorAll("[data-count]");
      if (counterEls.length) {
        ScrollTrigger.create({
          trigger: counterEls[0],
          start: "top 85%",
          once: true,
          onEnter() {
            counterEls.forEach(el => {
              const target = +el.getAttribute("data-count");
              if (!target) return;
              const prefix = el.getAttribute("data-prefix") || "";
              const suffix = el.getAttribute("data-suffix") || "";
              const obj = { n: 0 };
              gsap.to(obj, {
                n: target, duration: 2.4, ease: "power2.out",
                onUpdate() { el.textContent = prefix + Math.round(obj.n) + suffix; },
              });
            });
          },
        });
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* ─── PRELOADER ────────────────────────────────────────────────────── */}
      <div ref={loaderRef} className="page-loader" aria-hidden="true">
        <img
          src="/LOGOS/LOGO%20OHI%20HORIZONTAL.PNG"
          alt=""
          className="loader-logo-img"
          style={{ height: 56, filter: "brightness(0) invert(1)" }}
        />
        <p
          className="loader-tagline display-font"
          style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.87rem", fontStyle: "italic", letterSpacing: "0.07em" }}
        >
          Donde la medicina se vuelve humana
        </p>
        <div className="loader-bar">
          <div className="loader-bar-fill" />
        </div>
      </div>

      <GlobalStyles />

      {/* Scroll progress bar */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed", top: 0, left: 0, zIndex: 1002,
          height: 3, width: `${scrollProgress}%`,
          background: "linear-gradient(90deg, #C2D501, #d4e818)",
          transition: "width 0.1s linear",
          pointerEvents: "none",
        }}
      />

      <div style={{ fontFamily: "'DM Sans', system-ui, sans-serif", background: "var(--cream)", color: "var(--text)" }}>

        {/* ─── NAVBAR ────────────────────────────────────────────────── */}
        <nav
          className={`navbar ${scrolled ? "scrolled" : ""}`}
          style={{ background: scrolled ? undefined : "transparent" }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-3 flex items-center justify-between">

            {/* Logo */}
            <a href="#inicio" className="flex items-center no-underline">
              <img
                src="/LOGOS/LOGO%20OHI%20HORIZONTAL.PNG"
                alt="OHI - Organización Humana Integral"
                style={{ height: 42, width: "auto", objectFit: "contain", filter: "brightness(0) invert(1)" }}
              />
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map(l => (
                <a
                  key={l.href}
                  href={l.href}
                  className="nav-link"
                  style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.87rem", fontWeight: 400, textDecoration: "none" }}
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contacto"
                className="btn-primary"
                style={{
                  background: "#C2D501",
                  color: "#062F87",
                  padding: "9px 22px",
                  borderRadius: 4,
                  fontSize: "0.87rem",
                  fontWeight: 700,
                  textDecoration: "none",
                  letterSpacing: "0.02em",
                }}
              >
                Agenda tu consulta
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              className="md:hidden"
              onClick={() => setMenuOpen(o => !o)}
              style={{ color: "#fff", background: "none", border: "none", cursor: "pointer", fontSize: "1.4rem" }}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Mobile menu */}
          <div
            className={`mobile-menu ${menuOpen ? "open" : "closed"} md:hidden`}
            style={{
              position: "absolute", top: "100%", left: 0, right: 0,
              background: "rgba(6,47,135,0.97)", backdropFilter: "blur(12px)",
              padding: "1.5rem 2rem 2rem",
              display: menuOpen ? "flex" : "none",
              flexDirection: "column", gap: "1.2rem",
            }}
          >
            {NAV_LINKS.map(l => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                style={{ color: "rgba(255,255,255,0.85)", textDecoration: "none", fontSize: "1rem", fontWeight: 400 }}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setMenuOpen(false)}
              style={{
                background: "#C2D501",
                color: "#062F87", padding: "10px 20px", borderRadius: 4,
                fontSize: "0.9rem", fontWeight: 700, textDecoration: "none",
                textAlign: "center", marginTop: "0.5rem",
              }}
            >
              Agenda tu consulta
            </a>
          </div>
        </nav>

        {/* ─── HERO ──────────────────────────────────────────────────── */}
        <section
          id="inicio"
          className="hero-bg relative flex flex-col items-center justify-center overflow-hidden"
          style={{ minHeight: "100vh", paddingTop: 80 }}
        >
          {/* Decorative rings */}
          <div className="absolute opacity-5 pointer-events-none" style={{ top: "-10%", right: "-8%", width: 480, height: 480, border: "1px solid #fff", borderRadius: "50%" }} />
          <div className="absolute opacity-5 pointer-events-none" style={{ top: "-4%", right: "-2%", width: 320, height: 320, border: "1px solid #C2D501", borderRadius: "50%" }} />
          <div className="absolute opacity-10 pointer-events-none deco-ring" style={{ bottom: "12%", left: "-6%", width: 260, height: 260, border: "1px solid #C2D501", borderRadius: "50%" }} />

          {/* Glow orbs */}
          <div className="hero-orb" style={{ width: 500, height: 500, background: "rgba(11,63,173,0.45)", top: "-12%", right: "10%", animationDelay: "0s" }} />
          <div className="hero-orb" style={{ width: 340, height: 340, background: "rgba(194,213,1,0.08)", bottom: "5%", left: "5%", animationDelay: "-5s" }} />
          <div className="hero-orb" style={{ width: 260, height: 260, background: "rgba(6,47,135,0.5)", top: "30%", left: "20%", animationDelay: "-9s" }} />

          {/* Subtle pattern overlay — logo tile */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0,
              backgroundImage: "url('/LOGOS/LOGO.PNG')",
              backgroundRepeat: "repeat",
              backgroundSize: "110px 110px",
              mixBlendMode: "screen",
              opacity: 0.038,
              WebkitMaskImage: "radial-gradient(ellipse 85% 95% at 100% 100%, black 0%, black 10%, rgba(0,0,0,0.5) 45%, transparent 72%)",
              maskImage:        "radial-gradient(ellipse 85% 95% at 100% 100%, black 0%, black 10%, rgba(0,0,0,0.5) 45%, transparent 72%)",
            }}
          />

          {/* Hero content */}
          <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-14" style={{ paddingBottom: "6rem" }}>
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

              {/* Left: text */}
              <div className="lg:w-[52%] text-center lg:text-left">

                {/* Eyebrow */}
                <div className="fade-up delay-100 flex items-center justify-center lg:justify-start gap-3 mb-6">
                  <div className="gold-line" />
                  <span style={{ color: "var(--gold-light)", fontSize: "0.78rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase" }}>
                    Servicios de salud de mediana y alta complejidad
                  </span>
                  <div className="gold-line hidden lg:block" />
                </div>

                {/* Main headline */}
                <h1
                  className="display-font fade-up delay-200"
                  style={{
                    fontSize: "clamp(2.8rem, 6vw, 5rem)",
                    fontWeight: 600,
                    color: "#FFFFFF",
                    lineHeight: 1.1,
                    letterSpacing: "-0.01em",
                    marginBottom: "1.4rem",
                  }}
                >
                  Donde la medicina<br />
                  <em style={{ color: "var(--gold-light)", fontStyle: "italic", fontWeight: 300 }}>se vuelve humana</em>
                </h1>

                {/* Subtitle */}
                <p
                  className="fade-up delay-300"
                  style={{
                    color: "rgba(255,255,255,0.72)",
                    fontSize: "clamp(1rem, 1.8vw, 1.12rem)",
                    fontWeight: 300,
                    lineHeight: 1.7,
                    maxWidth: 560,
                    margin: "0 auto 2.8rem",
                  }}
                >
                  Somos una institución líder en Valledupar con más de 20 años brindando atención integral, oportuna y humanizada, respaldada por tecnología avanzada y un equipo profesional comprometido.
                </p>

                {/* CTAs */}
                <div className="fade-up delay-400 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                  <a
                    href="#servicios"
                    className="btn-primary"
                    style={{
                      background: "#C2D501",
                      color: "#062F87",
                      padding: "14px 32px",
                      borderRadius: 4,
                      fontWeight: 700,
                      fontSize: "0.95rem",
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    Conoce nuestros servicios <FaArrowRight style={{ fontSize: "0.85rem" }} />
                  </a>
                  <a
                    href="#contacto"
                    className="btn-outline"
                    style={{
                      border: "1.5px solid rgba(255,255,255,0.35)",
                      color: "rgba(255,255,255,0.85)",
                      padding: "14px 32px",
                      borderRadius: 4,
                      fontWeight: 400,
                      fontSize: "0.95rem",
                      textDecoration: "none",
                    }}
                  >
                    Contáctanos
                  </a>
                </div>

                {/* Location strip */}
                <div className="fade-up delay-600 flex flex-wrap items-center justify-center lg:justify-start gap-6 mt-10" style={{ opacity: 0.7 }}>
                  {[
                    "Sede Centro · Carrera 19 #14-47",
                    "Sede Santa Isabel · Av. Simón Bolívar #22-39",
                  ].map(loc => (
                    <span key={loc} className="flex items-center gap-2" style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.78rem", fontWeight: 300 }}>
                      <FaMapMarkerAlt style={{ color: "var(--gold)", fontSize: "0.7rem" }} />
                      {loc}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right: hero image — desktop only */}
              <div className="lg:w-[48%] hidden lg:flex items-center justify-end fade-up delay-300">
                <div className="hero-img-wrap" style={{ width: "100%", maxWidth: 500, position: "relative" }}>
                  <img
                    src="/IMG/enfermera%20y%20ni%C3%B1o.webp"
                    alt="Atención humanizada OHI"
                    style={{ width: "100%", height: 520, objectFit: "cover", objectPosition: "center", display: "block" }}
                  />
                  {/* Gradient overlay — left blend with hero bg */}
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(6,47,135,0.35) 0%, transparent 40%)" }} />
                  {/* Bottom caption */}
                  <div
                    style={{
                      position: "absolute", bottom: 0, left: 0, right: 0,
                      background: "linear-gradient(to top, rgba(6,47,135,0.85) 0%, transparent 100%)",
                      padding: "2rem 1.5rem 1.4rem",
                    }}
                  >
                    <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "0.82rem", fontWeight: 500, letterSpacing: "0.03em" }}>
                      Atención humanizada · CEMIC OHI
                    </p>
                  </div>

                  {/* Floating stat badges */}
                  <div style={{ position: "absolute", top: "1.4rem", left: "-1.1rem", display: "flex", flexDirection: "column", gap: "0.55rem" }}>
                    {[
                      { icon: FaAward,       label: "+20 años" },
                      { icon: FaClock,       label: "Urgencias 24/7" },
                      { icon: FaStethoscope, label: "+15 especialidades" },
                    ].map((b, i) => (
                      <div key={b.label} style={{
                        background: "rgba(6,47,135,0.88)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(194,213,1,0.3)",
                        borderRadius: 50, padding: "7px 14px 7px 10px",
                        display: "flex", alignItems: "center", gap: 7,
                        color: "#fff", fontSize: "0.76rem", fontWeight: 500,
                        boxShadow: "0 4px 16px rgba(0,0,0,0.3)", whiteSpace: "nowrap",
                        animation: "floatBadge 3.5s ease-in-out infinite",
                        animationDelay: `${i * 0.85}s`,
                      }}>
                        <b.icon style={{ color: "var(--gold)", fontSize: "0.82rem" }} />
                        {b.label}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 scroll-bounce" style={{ transform: "translateX(-50%)", color: "rgba(255,255,255,0.3)" }}>
            <FaChevronDown />
          </div>
        </section>

        {/* ─── TRUST MARQUEE ─────────────────────────────────────────── */}
        <section style={{ background: "var(--navy)", overflow: "visible", position: "relative" }}>
          <div className="logo-tile-bg-center" />
          <div style={{ borderBottom: "1px solid rgba(194,213,1,0.13)", borderTop: "1px solid rgba(255,255,255,0.05)", padding: "13px 0" }}>
            <div className="marquee-wrap">
              <div className="marquee-track">
                {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
                  <span key={idx} className="marquee-item">
                    <item.icon style={{ color: "var(--gold)", fontSize: "0.82rem", flexShrink: 0 }} />
                    {item.text}
                    <span className="marquee-sep">•</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
          <WaveDown fill="var(--cream)" />
        </section>

        {/* ─── SOBRE NOSOTROS ────────────────────────────────────────── */}
        <section id="somos" className="relative py-24 px-6" style={{ background: "var(--cream)" }}>
          <div className="max-w-6xl mx-auto">

            <div className="flex flex-col lg:flex-row gap-16 items-start">

              {/* Left: heading */}
              <div className="lg:w-2/5">
                <span data-reveal="up" className="eyebrow-pill">Quiénes somos</span>
                <div data-reveal="fade" data-delay="100" className="gold-line block mt-3 mb-6" />
                <h2
                  data-reveal="up" data-delay="150"
                  className="display-font"
                  style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600, color: "var(--navy)", lineHeight: 1.15 }}
                >
                  Organización<br />Humana Integral
                </h2>
                <p data-reveal="up" data-delay="250" style={{ color: "var(--text-muted)", marginTop: "1.2rem", lineHeight: 1.8, fontSize: "0.97rem" }}>
                  Somos una institución líder en la región, en la prestación de servicios de salud de mediana y alta complejidad, caracterizados por una atención integral de calidad, eficiente, oportuna y humanizada; con tecnología médica avanzada, apoyada en un talento humano idóneo y comprometido con el paciente.
                </p>
                <p data-reveal="up" data-delay="300" style={{ color: "var(--text-muted)", marginTop: "1rem", lineHeight: 1.8, fontSize: "0.97rem" }}>
                  Nuestro principal objetivo es brindar un servicio humanizado por vocación a toda la población, con accesos especiales para urgencias adulto, urgencias maternidad, urgencias pediátricas y politraumatizados, contando con profesionales especializados las 24 horas.
                </p>

                {/* Team photo */}
                <div
                  data-reveal="up" data-delay="320"
                  style={{ marginTop: "2rem", borderRadius: 12, overflow: "hidden", position: "relative", boxShadow: "0 12px 40px rgba(6,47,135,0.14)" }}
                >
                  <img
                    src="/IMG/trabajadores.webp"
                    alt="Equipo profesional OHI"
                    style={{ width: "100%", height: 230, objectFit: "cover", objectPosition: "center top", display: "block" }}
                  />
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(to top, rgba(6,47,135,0.75) 0%, transparent 100%)", padding: "1.4rem 1.2rem 1rem" }}>
                    <p style={{ color: "rgba(255,255,255,0.92)", fontSize: "0.8rem", fontWeight: 500, letterSpacing: "0.04em", textTransform: "uppercase" }}>Nuestro equipo profesional</p>
                  </div>
                </div>

                <a
                  data-reveal="up" data-delay="350"
                  href="#servicios"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    marginTop: "2rem",
                    color: "var(--navy)", fontWeight: 500, fontSize: "0.9rem",
                    textDecoration: "none",
                    borderBottom: "1.5px solid var(--gold)", paddingBottom: 2,
                  }}
                >
                  Ver todos los servicios <FaArrowRight style={{ fontSize: "0.8rem" }} />
                </a>
              </div>

              {/* Right: creencia / propósito / misión / diferencial */}
              <div className="lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: FaHeart,
                    title: "Nuestra Creencia",
                    image: "/IMG/nuestra%20creencia.webp",
                    text: "Creemos que no hay mejor cuidado para la salud como el que te hace sentir en casa.",
                  },
                  {
                    icon: FaHandsHelping,
                    title: "Nuestro Propósito",
                    image: "/IMG/nuestro%20proposito.webp",
                    text: "Ser toda una familia especializada en cuidar tu salud de forma integral, con calidad humana y segura.",
                  },
                  {
                    icon: FaAward,
                    title: "Nuestro Diferencial",
                    image: "/IMG/nuestro%20diferencial.webp",
                    list: [
                      "Accesos de urgencias diferenciadas (adulto, maternidad, pediátrica, politrauma)",
                      "Unidad de intervencionismo cardiovascular de la Costa",
                      "Centro materno infantil integral en la región",
                      "Banco de Sangre y centro de aféresis",
                      "Centro especializado de trauma",
                      "Central de Mezclas — Unidosis / Microdosis",
                    ],
                  },
                ].map((item, i) => (
                  <div
                    key={item.title}
                    className="pillar-card"
                    data-reveal="up"
                    data-delay={String(i * 100 + 100)}
                    style={{
                      background: "#FFFFFF",
                      border: "1px solid rgba(6,47,135,0.08)",
                      borderRadius: 8,
                      overflow: "hidden",
                      padding: item.image && !item.list ? 0 : "1.75rem",
                      gridColumn: item.list ? "1 / -1" : undefined,
                      display: item.list && item.image ? "flex" : "block",
                    }}
                  >
                    {/* Top image — regular cards */}
                    {item.image && !item.list && (
                      <div style={{ height: 155, overflow: "hidden" }}>
                        <img
                          src={item.image}
                          alt={item.title}
                          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.5s ease" }}
                        />
                      </div>
                    )}

                    {/* Left image — Diferencial card (full-width, flex row) */}
                    {item.image && item.list && (
                      <div style={{ width: "38%", flexShrink: 0, overflow: "hidden" }}>
                        <img
                          src={item.image}
                          alt={item.title}
                          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                        />
                      </div>
                    )}

                    {/* Card content */}
                    <div style={{ padding: item.image ? "1.4rem 1.6rem 1.6rem" : 0, flex: 1 }}>
                      <div
                        style={{
                          width: 40, height: 40, borderRadius: 8,
                          background: "linear-gradient(135deg, rgba(6,47,135,0.06), rgba(6,47,135,0.1))",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          marginBottom: "0.85rem",
                          color: "var(--teal)", fontSize: "1.1rem",
                        }}
                      >
                        <item.icon />
                      </div>
                      <h3 className="display-font" style={{ fontSize: "1.15rem", fontWeight: 600, color: "var(--navy)", marginBottom: "0.5rem" }}>
                        {item.title}
                      </h3>
                      {item.list ? (
                        <ul style={{ color: "var(--text-muted)", fontSize: "0.86rem", lineHeight: 1.85, paddingLeft: "1.1rem", margin: 0 }}>
                          {item.list.map(li => <li key={li}>{li}</li>)}
                        </ul>
                      ) : (
                        <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>
                          {item.text}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── STATS BAND ────────────────────────────────────────────── */}
        <section style={{ background: "var(--navy)", position: "relative", overflow: "hidden" }}>
          <div className="logo-tile-bg" />
          <WaveUp fill="var(--navy)" />
          <div className="py-16 px-6">
            <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {STATS.map((s, i) => {
                const StatIcon = [FaAward, BiBuildings, FaStethoscope, FaClock][i];
                return (
                  <div key={s.label} data-reveal="scale" data-delay={String(i * 100)} className="flex flex-col items-center">
                    <div style={{
                      width: 54, height: 54, borderRadius: "50%",
                      background: "rgba(194,213,1,0.1)",
                      border: "1px solid rgba(194,213,1,0.25)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      marginBottom: "0.9rem",
                    }}>
                      <StatIcon style={{ color: "var(--gold)", fontSize: "1.3rem" }} />
                    </div>
                    <div
                      className="display-font stat-num stat-glow"
                      data-count={s.count ?? undefined}
                      data-prefix={s.prefix}
                      data-suffix={s.suffix}
                      style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.2rem)", fontWeight: 600, color: "var(--gold-light)", lineHeight: 1 }}
                    >
                      {s.value}
                    </div>
                    <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.82rem", fontWeight: 400, marginTop: "0.5rem", letterSpacing: "0.03em" }}>
                      {s.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <WaveDown fill="var(--cream)" />
        </section>

        {/* ─── SERVICIOS ─────────────────────────────────────────────── */}
        <section id="servicios" className="py-24 px-6" style={{ background: "var(--cream)" }}>
          <div className="max-w-6xl mx-auto">

            <div data-reveal="up" className="text-center mb-16">
              <span className="eyebrow-pill">Lo que ofrecemos</span>
              <div className="gold-line block mt-3 mb-4 mx-auto" />
              <h2
                data-reveal="up" data-delay="150"
                className="display-font"
                style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 600, color: "var(--navy)" }}
              >
                Nuestros servicios
              </h2>
              <p data-reveal="up" data-delay="250" style={{ color: "var(--text-muted)", marginTop: "1rem", maxWidth: 520, margin: "1rem auto 0", fontSize: "0.97rem", lineHeight: 1.7 }}>
                Contamos con una amplia red de servicios especializados para garantizar la atención integral que cada paciente merece.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {SERVICES.map((svc, i) => (
                <div
                  key={svc.label}
                  className="service-card"
                  data-reveal="up"
                  data-delay={String(Math.min(i * 60, 360))}
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid rgba(6,47,135,0.09)",
                    borderRadius: 10,
                    padding: "1.6rem 1.5rem",
                  }}
                >
                  <div className="s-icon-wrap">
                    <svc.icon className="s-icon" style={{ color: "var(--teal)", fontSize: "1.5rem" }} />
                  </div>
                  <div aria-hidden="true" style={{ position: "absolute", top: "0.6rem", right: "0.8rem", fontSize: "2.8rem", fontWeight: 700, color: "rgba(6,47,135,0.04)", lineHeight: 1, fontFamily: "'Cormorant Garamond', serif", pointerEvents: "none", userSelect: "none" }}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h4 style={{ fontSize: "0.96rem", fontWeight: 600, color: "var(--navy)", marginBottom: "0.5rem", lineHeight: 1.3 }}>
                    {svc.label}
                  </h4>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.84rem", lineHeight: 1.65 }}>
                    {svc.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Specialties */}
            <div
              style={{
                marginTop: "4rem",
                background: "#FFFFFF",
                border: "1px solid rgba(6,47,135,0.09)",
                borderRadius: 10,
                padding: "2rem 2.5rem",
              }}
            >
              <h3
                className="display-font"
                style={{ fontSize: "1.4rem", fontWeight: 600, color: "var(--navy)", marginBottom: "1.2rem" }}
              >
                Especialidades médicas disponibles
              </h3>
              <div className="flex flex-wrap gap-2">
                {SPECIALTIES.map(sp => (
                  <span
                    key={sp}
                    className="spec-tag"
                    style={{
                      background: "rgba(6,47,135,0.07)",
                      color: "var(--teal)",
                      fontSize: "0.82rem",
                      fontWeight: 500,
                      padding: "5px 14px",
                      borderRadius: 20,
                      border: "1px solid rgba(11,63,173,0.15)",
                    }}
                  >
                    {sp}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── POR QUÉ ELEGIRNOS ─────────────────────────────────────── */}
        <section
          style={{
            background: "linear-gradient(180deg, #062F87 0%, #0B3FAD 100%)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <WaveUp fill="#062F87" />
          <div className="py-24 px-6 relative z-10">

            {/* Subtle bg decoration — replaced by logo tile */}
            <div className="logo-tile-bg" />
            <div className="logo-tile-bg-bl" />

            <div className="max-w-6xl mx-auto relative">
              <div data-reveal="up" className="text-center mb-16">
                <span className="eyebrow-pill eyebrow-pill-dark">Nuestra diferencia</span>
                <div className="gold-line block mt-3 mb-4 mx-auto" />
                <h2 data-reveal="up" data-delay="150" className="display-font" style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 600, color: "#FFFFFF" }}>
                  ¿Por qué elegir OHI?
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {PILLARS.map((p, i) => (
                  <div
                    key={p.title}
                    className="pillar-card pillar-card-dark"
                    data-reveal="up"
                    data-delay={String(i * 100 + 100)}
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: 10,
                      padding: "2rem 1.5rem",
                      textAlign: "center",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <div aria-hidden="true" style={{ position: "absolute", bottom: "-1.2rem", right: "0.3rem", fontSize: "8rem", fontWeight: 700, color: "rgba(255,255,255,0.038)", lineHeight: 1, fontFamily: "'Cormorant Garamond', serif", pointerEvents: "none" }}>
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div
                      style={{
                        width: 52, height: 52, borderRadius: "50%",
                        background: "rgba(194,213,1,0.15)",
                        border: "1px solid rgba(194,213,1,0.4)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        margin: "0 auto 1.2rem",
                        color: "var(--gold-light)", fontSize: "1.4rem",
                      }}
                    >
                      <p.icon />
                    </div>
                    <h4 className="display-font" style={{ fontSize: "1.1rem", fontWeight: 600, color: "#FFFFFF", marginBottom: "0.7rem", lineHeight: 1.3 }}>
                      {p.title}
                    </h4>
                    <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.87rem", lineHeight: 1.7 }}>
                      {p.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <WaveDown fill="var(--cream-dark)" />
        </section>

        {/* ─── GALERÍA CLÍNICA ───────────────────────────────────── */}
        <section style={{ background: "var(--cream-dark)", overflow: "hidden" }}>
          <div
            className="grid grid-cols-1 md:grid-cols-3"
            style={{ height: "clamp(280px, 35vw, 440px)" }}
          >
            {[
              { src: "/IMG/laboratorio.webp",      label: "Laboratorio Clínico",         sub: "Diagnóstico de alta complejidad" },
              { src: "/IMG/bancosangre.webp",       label: "Banco de Sangre y Aféresis", sub: "Hemocomponentes seguros y certificados" },
              { src: "/IMG/centralmezclas.webp",   label: "Central de Mezclas",          sub: "Medicamentos de alta complejidad" },
            ].map((item, i) => (
              <div
                key={item.label}
                className="gallery-item"
                data-reveal="fade"
                data-delay={String(i * 150)}
                style={{ position: "relative", height: "100%" }}
              >
                <img
                  src={item.src}
                  alt={item.label}
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }}
                />
                {/* Gradient overlay */}
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(6,47,135,0.82) 0%, rgba(6,47,135,0.1) 55%, transparent 100%)" }} />
                {/* Vertical separator */}
                {i < 2 && (
                  <div style={{ position: "absolute", top: "15%", bottom: "15%", right: 0, width: 1, background: "rgba(194,213,1,0.3)" }} />
                )}
                {/* Label */}
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "1.5rem 1.6rem 1.6rem" }}>
                  <div style={{ width: 28, height: 2, background: "var(--gold)", marginBottom: "0.6rem" }} />
                  <p style={{ color: "#FFFFFF", fontSize: "1rem", fontWeight: 600, lineHeight: 1.3, marginBottom: "0.3rem" }}>
                    {item.label}
                  </p>
                  <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.77rem", fontWeight: 400 }}>
                    {item.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── SEDES ─────────────────────────────────────────────────── */}
        <section id="sedes" className="py-24 px-6" style={{ background: "var(--cream-dark)" }}>
          <div className="max-w-6xl mx-auto">

            <div data-reveal="up" className="text-center mb-16">
              <span className="eyebrow-pill">Dónde estamos</span>
              <div className="gold-line block mt-3 mb-4 mx-auto" />
              <h2 data-reveal="up" data-delay="150" className="display-font" style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 600, color: "var(--navy)" }}>
                Nuestras sedes
              </h2>
              <p data-reveal="up" data-delay="250" style={{ color: "var(--text-muted)", marginTop: "1rem", maxWidth: 440, margin: "1rem auto 0", fontSize: "0.97rem" }}>
                Tres puntos estratégicos en Valledupar para acercarte la atención que necesitas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
              {SEDES.map((sede, i) => (
                <a
                  key={sede.slug}
                  href={`/sedes/${sede.slug}`}
                  className="sede-vcard"
                  data-reveal="up"
                  data-delay={String(i * 120 + 80)}
                >
                  {/* Image header */}
                  <div style={{
                    height: 136, position: "relative", overflow: "hidden",
                  }}>
                    <img
                      src={sede.image}
                      alt={sede.name}
                      className="sede-vcard-media"
                      style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }}
                    />
                    {/* Navy gradient overlay for readability */}
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(6,47,135,0.18) 0%, rgba(6,47,135,0.76) 100%)" }} />
                    {/* Dot grid overlay */}
                    <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
                    {/* Gold bottom accent */}
                    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, transparent 0%, rgba(194,213,1,0.55) 40%, rgba(194,213,1,0.55) 60%, transparent 100%)" }} />
                    {/* Sede number badge */}
                    <div style={{ position: "absolute", top: "0.95rem", left: "1.2rem", fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", fontWeight: 600 }}>
                      Sede {String(i + 1).padStart(2, "0")}
                    </div>
                    {/* Watermark icon */}
                    <div style={{ position: "absolute", right: "0.8rem", bottom: "-1rem", fontSize: "6rem", color: "rgba(255,255,255,0.05)", lineHeight: 1 }}>
                      <FaHospitalAlt />
                    </div>
                    {/* Sede name */}
                    <div style={{ position: "absolute", bottom: "1rem", left: "1.2rem", color: "#fff", fontSize: "1.08rem", fontWeight: 600, fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                      {sede.name}
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="sede-vcard-body">
                    <p style={{ display: "flex", alignItems: "flex-start", gap: 7, color: "var(--text-muted)", fontSize: "0.81rem", lineHeight: 1.6, marginBottom: "1.1rem" }}>
                      <FaMapMarkerAlt style={{ color: "var(--gold)", marginTop: 3, flexShrink: 0 }} />
                      {sede.address}
                    </p>
                    <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.2rem", display: "flex", flexDirection: "column", gap: "0.45rem" }}>
                      {sede.services.slice(0, 4).map(s => (
                        <li key={s} style={{ color: "var(--text)", fontSize: "0.81rem", display: "flex", alignItems: "center", gap: 8 }}>
                          <span style={{ width: 5, height: 5, background: "var(--gold)", borderRadius: "50%", flexShrink: 0 }} />
                          {s}
                        </li>
                      ))}
                      {sede.services.length > 4 && (
                        <li style={{ color: "var(--teal)", fontSize: "0.78rem", fontWeight: 500, paddingLeft: 13 }}>
                          +{sede.services.length - 4} servicios más
                        </li>
                      )}
                    </ul>
                    <div style={{ borderTop: "1px solid rgba(6,47,135,0.08)", paddingTop: "1rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <span style={{ color: "var(--navy)", fontSize: "0.83rem", fontWeight: 600, display: "flex", alignItems: "center", gap: 6 }}>
                        Ver sede completa
                        <span className="sede-vcard-arr" style={{ color: "var(--gold)" }}>
                          <FaArrowRight style={{ fontSize: "0.72rem" }} />
                        </span>
                      </span>
                      <button
                        type="button"
                        onClick={e => {
                          e.preventDefault();
                          e.stopPropagation();
                          window.open(`https://api.whatsapp.com/send?phone=${sede.whatsapp}`, "_blank", "noopener,noreferrer");
                        }}
                        style={{ color: "var(--sage)", fontSize: "0.82rem", fontWeight: 500, display: "flex", alignItems: "center", gap: 5, background: "none", border: "none", cursor: "pointer", padding: 0, fontFamily: "inherit" }}
                      >
                        <FaWhatsapp />
                        {sede.phone}
                      </button>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ─── TESTIMONIOS ───────────────────────────────────────────── */}
        <section id="testimonios" className="py-24 px-6 relative overflow-hidden" style={{ background: "var(--cream)" }}>

          {/* Decorative quote mark */}
          <div className="absolute pointer-events-none select-none" style={{ top: "6%", left: "3%", fontSize: "16rem", color: "rgba(194,213,1,0.08)", fontFamily: "Georgia, serif", lineHeight: 1 }}>
            "
          </div>

          <div className="max-w-5xl mx-auto relative z-10">

            <div data-reveal="up" className="text-center mb-14">
              <span className="eyebrow-pill">Historias reales</span>
              <div className="gold-line block mt-3 mb-4 mx-auto" />
              <h2 data-reveal="up" data-delay="150" className="display-font" style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 600, color: "var(--navy)" }}>
                Testimonios
              </h2>
            </div>

            {/* Featured testimonial */}
            <div
              data-reveal="up" data-delay="100"
              className="testimonial-card"
              style={{
                background: "#FFFFFF",
                border: "1px solid rgba(6,47,135,0.09)",
                borderRadius: 12,
                padding: "clamp(1.5rem, 4vw, 3rem)",
                marginBottom: "2rem",
                position: "relative",
              }}
            >
              <div className="flex items-center justify-between mb-5">
                <div style={{ display: "flex", gap: 3 }}>
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} style={{ color: "var(--gold)", fontSize: "0.88rem" }} />
                  ))}
                </div>
                <div style={{ color: "var(--gold)", fontSize: "1.4rem", opacity: 0.5 }}>
                  <FaQuoteLeft />
                </div>
              </div>
              <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "1.4rem", fontStyle: "italic", fontWeight: 300 }}>
                "{TESTIMONIALS[activeTestimonial].quote}"
              </p>
              <p className="display-font" style={{ color: "var(--navy)", fontSize: "1.1rem", fontWeight: 600, fontStyle: "italic" }}>
                {TESTIMONIALS[activeTestimonial].highlight}
              </p>
              <div className="flex items-center gap-3 mt-5 pt-5" style={{ borderTop: "1px solid rgba(6,47,135,0.07)" }}>
                <div
                  style={{
                    width: 40, height: 40, borderRadius: "50%",
                    background: "linear-gradient(135deg, var(--navy-mid), var(--navy))",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#fff", fontWeight: 600, fontSize: "0.95rem",
                    flexShrink: 0,
                  }}
                >
                  {TESTIMONIALS[activeTestimonial].name.charAt(0)}
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: "0.92rem", color: "var(--navy)" }}>
                    {TESTIMONIALS[activeTestimonial].name}
                  </div>
                  <div style={{ color: "var(--gold)", fontSize: "0.8rem" }}>
                    {TESTIMONIALS[activeTestimonial].role}
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial navigation dots */}
            <div className="flex justify-center gap-2 mb-8">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  style={{
                    width: i === activeTestimonial ? 28 : 10,
                    height: 10, borderRadius: 5,
                    background: i === activeTestimonial ? "var(--gold)" : "rgba(6,47,135,0.18)",
                    border: "none", cursor: "pointer",
                    transition: "width 0.3s ease, background 0.3s ease",
                  }}
                />
              ))}
            </div>

            {/* Mini testimonial preview cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {TESTIMONIALS.map((t, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveTestimonial(i)}
                  style={{
                    all: "unset", display: "block", boxSizing: "border-box",
                    width: "100%", cursor: "pointer",
                    background: i === activeTestimonial ? "rgba(6,47,135,0.05)" : "#FFFFFF",
                    border: "1px solid " + (i === activeTestimonial ? "rgba(194,213,1,0.4)" : "rgba(6,47,135,0.09)"),
                    borderLeft: i === activeTestimonial ? "3px solid var(--gold)" : "1px solid rgba(6,47,135,0.09)",
                    borderRadius: 10, padding: "1rem 1.15rem",
                    textAlign: "left",
                    transition: "border-color 0.3s ease, background 0.3s ease",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: "0.55rem" }}>
                    <div style={{
                      width: 30, height: 30, borderRadius: "50%", flexShrink: 0,
                      background: i === activeTestimonial
                        ? "linear-gradient(135deg, var(--navy-mid), var(--navy))"
                        : "rgba(6,47,135,0.08)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: i === activeTestimonial ? "#fff" : "var(--navy)",
                      fontWeight: 700, fontSize: "0.82rem",
                    }}>
                      {t.name.charAt(0)}
                    </div>
                    <div style={{ minWidth: 0 }}>
                      <div style={{ fontWeight: 600, fontSize: "0.78rem", color: "var(--navy)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                        {t.name}
                      </div>
                      <div style={{ fontSize: "0.7rem", color: "var(--gold)" }}>{t.role}</div>
                    </div>
                  </div>
                  <p style={{ fontSize: "0.76rem", color: "var(--text-muted)", lineHeight: 1.5, margin: 0, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                    {t.highlight}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CONTACTO ──────────────────────────────────────────────── */}
        <section
          id="contacto"
          style={{ background: "var(--navy)", position: "relative", overflow: "hidden" }}
        >
          <WaveUp fill="var(--navy)" />
          <div className="py-24 px-6 relative z-10">

            {/* Subtle background texture — replaced by logo tile */}
            <div className="logo-tile-bg" />
            <div className="logo-tile-bg-bl" />

            <div className="max-w-4xl mx-auto relative">

              {/* Contact info */}
              <div className="flex flex-col gap-8">

                <div data-reveal="left">
                  <span className="eyebrow-pill eyebrow-pill-dark">Estamos aquí</span>
                  <div className="gold-line block mt-3 mb-5" />
                  <h2 data-reveal="up" data-delay="150" className="display-font" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 600, color: "#FFFFFF", lineHeight: 1.2 }}>
                    Contáctanos
                  </h2>
                  <p data-reveal="up" data-delay="250" style={{ color: "rgba(255,255,255,0.6)", marginTop: "1rem", lineHeight: 1.8, fontSize: "0.93rem", maxWidth: 560 }}>
                    Nuestro equipo está disponible para orientarte y agendar tu consulta. Acércate a la sede más cercana o escríbenos.
                  </p>
                </div>

                {/* WhatsApp CTA */}
                <a
                  href="https://api.whatsapp.com/send?phone=573175708440"
                  target="_blank" rel="noopener noreferrer"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "0.75rem",
                    background: "linear-gradient(90deg, #C2D501 0%, #d4e818 100%)",
                    color: "#062F87", padding: "1rem 2.2rem", borderRadius: 6,
                    fontSize: "1rem", fontWeight: 700, textDecoration: "none",
                    boxShadow: "0 8px 28px rgba(194,213,1,0.35)",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                    alignSelf: "flex-start",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 12px 36px rgba(194,213,1,0.5)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "0 8px 28px rgba(194,213,1,0.35)"; }}
                >
                  <FaWhatsapp style={{ fontSize: "1.25rem" }} />
                  Agenda tu consulta ahora
                </a>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {SEDES.map(sede => (
                    <div key={sede.name} style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.09)",
                      borderRadius: 10, padding: "1.25rem 1.4rem",
                    }}>
                      <h4 style={{ color: "var(--gold-light)", fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.75rem", letterSpacing: "0.03em" }}>
                        {sede.name}
                      </h4>
                      <p className="flex items-start gap-2" style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.84rem", lineHeight: 1.6 }}>
                        <FaMapMarkerAlt style={{ color: "var(--gold)", marginTop: 3, flexShrink: 0 }} />
                        {sede.address}
                      </p>
                      <a
                        href={`https://api.whatsapp.com/send?phone=${sede.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 no-underline mt-1"
                        style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.84rem" }}
                      >
                        <FaWhatsapp style={{ color: "var(--sage)" }} />
                        {sede.phone}
                      </a>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                  {[
                    { href: "https://www.facebook.com/", icon: FaFacebookF },
                    { href: "https://www.instagram.com/", icon: FaInstagram },
                    { href: "https://api.whatsapp.com/send?phone=573175708440", icon: FaWhatsapp },
                  ].map((social) => (
                    <a
                      key={social.href}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        width: 36, height: 36, borderRadius: "50%",
                        background: "rgba(255,255,255,0.08)",
                        border: "1px solid rgba(255,255,255,0.12)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        color: "rgba(255,255,255,0.6)", fontSize: "0.9rem",
                        textDecoration: "none",
                        transition: "background 0.2s ease, color 0.2s ease",
                      }}
                      onMouseEnter={e => { e.currentTarget.style.background = "rgba(194,213,1,0.2)"; e.currentTarget.style.color = "var(--gold-light)"; }}
                      onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; e.currentTarget.style.color = "rgba(255,255,255,0.6)"; }}
                    >
                      <social.icon />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── FOOTER ────────────────────────────────────────────────── */}
        <footer style={{ background: "#020b2e", borderTop: "1px solid rgba(255,255,255,0.06)", position: "relative", overflow: "hidden" }}>
          <div className="logo-tile-bg-bl" />
          <div className="max-w-6xl mx-auto px-6 py-12">
            <div className="flex flex-col md:flex-row items-start justify-between gap-10">

              {/* Brand */}
              <div className="flex flex-col gap-4 max-w-xs">
                <div>
                  <img
                    src="/LOGOS/LOGO%20OHI%20HORIZONTAL.PNG"
                    alt="OHI - Organización Humana Integral"
                    style={{ height: 44, width: "auto", objectFit: "contain", filter: "brightness(0) invert(1)", marginBottom: "0.75rem" }}
                  />
                </div>
                <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.82rem", lineHeight: 1.7 }}>
                  Institución líder en servicios de salud de mediana y alta complejidad en Valledupar, Cesar.
                </p>
              </div>

              {/* Quick links */}
              <div>
                <h5 style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1rem" }}>
                  Navegación
                </h5>
                <div className="flex flex-col gap-2">
                  {NAV_LINKS.map(l => (
                    <a
                      key={l.href}
                      href={l.href}
                      style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.85rem", textDecoration: "none", transition: "color 0.2s" }}
                      onMouseEnter={e => { e.currentTarget.style.color = "var(--gold-light)"; }}
                      onMouseLeave={e => { e.currentTarget.style.color = "rgba(255,255,255,0.45)"; }}
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div>
                <h5 style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1rem" }}>
                  Contacto
                </h5>
                <div className="flex flex-col gap-2">
                  <span className="flex items-start gap-2" style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.83rem" }}>
                    <FaMapMarkerAlt style={{ color: "var(--gold)", marginTop: 3, flexShrink: 0 }} />
                    Valledupar, Cesar – Colombia
                  </span>
                  <a
                    href="https://api.whatsapp.com/send?phone=573175708440"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 no-underline"
                    style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.83rem" }}
                  >
                    <FaWhatsapp style={{ color: "var(--sage)" }} />
                    317 570 8440
                  </a>
                  <a
                    href="https://ohi.buk.co/trabaja-con-nosotros"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.83rem", textDecoration: "none" }}
                  >
                    Ofertas laborales
                  </a>
                </div>
              </div>

              {/* Legal */}
              <div>
                <h5 style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1rem" }}>
                  Políticas
                </h5>
                <div className="flex flex-col gap-2">
                  {[
                    ["Tratamiento de Datos", "#"],
                    ["PQRS", "/peticion-queja-reclamo-sugerencia-y-felicitaciones/"],
                    ["Participación Social en Salud", "/ppss/"],
                    ["Línea Ética y Transparencia", "#"],
                  ].map(([label, href]) => (
                    <a
                      key={label}
                      href={href}
                      style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.83rem", textDecoration: "none", transition: "color 0.2s" }}
                      onMouseEnter={e => { e.currentTarget.style.color = "rgba(255,255,255,0.7)"; }}
                      onMouseLeave={e => { e.currentTarget.style.color = "rgba(255,255,255,0.4)"; }}
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div
              className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-10 pt-6"
              style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
            >
              <p style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.77rem" }}>
                © 2025 OHI – Organización Humana Integral. Todos los derechos reservados.
              </p>
              <p style={{ color: "rgba(255,255,255,0.18)", fontSize: "0.77rem" }}>
                Valledupar, Cesar – Colombia
              </p>
            </div>
          </div>
        </footer>

        {/* ─── FLOATING WHATSAPP ────────────────────────────────────── */}
        <a
          href="https://api.whatsapp.com/send?phone=573175708440"
          target="_blank"
          rel="noopener noreferrer"
          className="wa-float"
          aria-label="Contáctanos por WhatsApp"
        >
          <FaWhatsapp />
        </a>

      </div>
    </>
  );
}

