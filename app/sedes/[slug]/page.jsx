import { notFound } from "next/navigation";
import {
  FaMapMarkerAlt, FaWhatsapp, FaPhone, FaArrowLeft,
  FaHeartbeat, FaAmbulance, FaBaby, FaBed, FaFlask,
  FaSyringe, FaTint, FaPills, FaCheckCircle, FaHospitalAlt,
  FaStethoscope, FaClinicMedical,
} from "react-icons/fa";
import { MdLocalHospital, MdBiotech, MdEmergency } from "react-icons/md";
import { RiMicroscopeLine } from "react-icons/ri";
import { BiDna } from "react-icons/bi";
import SedeAnimations from "./SedeAnimations";

// ── DATA ──────────────────────────────────────────────────────────────────────

const SEDES_DATA = {
  "sede-centro": {
    name: "Sede Centro",
    address: "Carrera 19 #14-47 San Vicente, Valledupar – Cesar",
    phones: [
      { label: "Ref. y Contrarref.", value: "(5) 580 35 35", ext: "Ext. 1160" },
      { label: "", value: "318 221 2020" },
      { label: "", value: "316 830 7181" },
      { label: "", value: "315 347 1357" },
      { label: "Citas médicas", value: "317 570 8440" },
    ],
    whatsapp: "573175708440",
    description:
      "Institución prestadora de servicios de salud reconocida en la región Caribe y a nivel nacional, con más de 20 años de experiencia ofreciendo servicios de mediana y alta complejidad. Nuestro crecimiento ha sido proporcional a las necesidades de la población, proyectando la infraestructura con mayor capacidad logística, tecnología de punta y talento humano idóneo, capacitado y comprometido con la buena atención en todos los servicios.",
    sections: [
      {
        icon: "emergency",
        title: "Urgencias Adultos 24 horas",
        desc: "Atención integral en urgencias adulto las 24 horas, con equipo interdisciplinar dispuesto a brindar la mejor atención con integralidad y oportunidad. El servicio de urgencias consta de:",
        items: [
          "Consultorios de triage",
          "Sala de reanimación",
          "Sala de observación – Hombres y Mujeres",
          "Salas de procedimientos",
        ],
      },
      {
        icon: "surgery",
        title: "Cirugías de Mediana y Alta Complejidad",
        desc: "Amplio portafolio quirúrgico con especialistas disponibles. Quirófanos equipados y habilitados con los más altos estándares de calidad.",
        items: [
          "Cirugía General",
          "Neurocirugía",
          "Cirugía Plástica y Estética",
          "Cirugía Ortopédica",
          "Cirugía Gastrointestinal",
          "Cirugía Maxilofacial",
          "Cirugía Vascular y Angiología",
          "Cirugía Urológica",
          "Otorrinolaringología",
          "Cirugía de Tórax",
          "Cirugía Cabeza y Cuello",
          "Cirugía Oftalmológica",
          "Dermatología",
          "Coloproctología",
          "Anestesiología",
          "Cirugía Laparoscópica",
        ],
      },
      {
        icon: "bed",
        title: "Hospitalización Adulto",
        desc: "Habitaciones unipersonales y bipersonales cómodas, dotadas con sistemas tecnológicos que permiten mayor seguridad del paciente y seguimiento oportuno por el grupo interdisciplinario. Se ofertan las siguientes interconsultas:",
        items: [
          "Medicina interna",
          "Anestesiología",
          "Medicina intensiva",
          "Urología",
          "Neurología",
          "Neurocirugía",
          "Psiquiatría",
          "Gastroenterología",
          "Cardiología",
          "Oftalmología",
          "Hematología",
          "Neumología",
          "Nefrología",
          "Medicina del dolor",
          "Otorrinolaringología",
          "Quirúrgicas",
        ],
      },
      {
        icon: "icu",
        title: "Unidad de Cuidados Críticos",
        desc: "UCI dotada con equipos de tecnología de punta y talento humano capacitado y entrenado para la atención y el monitoreo permanente del paciente crítico, liderado las 24 horas por:",
        items: [
          "Especialistas en Medicina de Cuidado Crítico",
          "Especialistas en Medicina Interna",
          "Profesionales de Enfermería",
          "Medicina general",
          "Terapistas respiratorios",
          "Terapistas físicos",
        ],
      },
      {
        icon: "baby",
        title: "Centro Materno Infantil – CEMIC",
        desc: "Pioneros en la región con acceso diferencial y atención especializada al binomio madre-hijo y patologías del sistema reproductor femenino, con atención las 24 horas en especialidades de:",
        items: [
          "Gineco-Obstetricia",
          "Anestesiología",
          "Pediatría",
          "Neonatología",
          "Perinatología",
          "Ginecología con entrenamiento en piso pélvico",
          "Urgencias pediátricas 24h",
          "Hospitalización materna e infantil",
          "UCI Neonatal (más moderna de la región)",
          "UCI Pediátrica",
          "Programa Madre Canguro intrahospitalario (IAMI)",
          "Tamizaje ocular, auditivo y cardíaco neonatal",
        ],
      },
      {
        icon: "lab",
        title: "Laboratorio Clínico",
        desc: "Equipos de última tecnología y profesionales calificados, generando confianza en los resultados. Contamos con:",
        items: [
          "Área de Microbiología: filmArray Torch BIOFIRE",
          "BACT/ALERT 3D 240",
          "VITEK Compact 60",
          "Área de Hematología: ADVIA 2120",
          "Área de Hemostasia: CS-2500",
          "Área de Inmunoensayos: VIDAS",
          "Área Química: Atellica Solution",
          "Área de Microscopía: Clinitek Advantus",
          "Servicio Transfusional",
        ],
      },
      {
        icon: "imaging",
        title: "Apoyo Diagnóstico e Imágenes",
        desc: "Servicio articulado con todas las áreas asistenciales, con equipos de tecnología avanzada que garantizan precisión, seguridad y oportunidad en cada diagnóstico.",
        items: [
          "Tomografía Axial Computarizada (TAC) de alta resolución",
          "Rayos X – Radiología Convencional Digital",
          "Ecografía (Ultrasonido) en tiempo real",
          "Apoyo a medicina general, ginecología, obstetricia y especialidades",
        ],
      },
      {
        icon: "therapy",
        title: "Apoyo Terapéutico",
        desc: "Grupo de profesionales que apoyan las diferentes especialidades médicas para una atención integral del paciente:",
        items: [
          "Terapia respiratoria y física",
          "Nutrición y Psicología",
          "Servicio transfusional",
          "Servicio farmacéutico de alta complejidad",
          "Trabajo social",
          "Central de mezclas parenterales certificada BPE – INVIMA",
        ],
      },
      {
        icon: "cardio",
        title: "Intervencionismo Cardiovascular – UNICARC",
        desc: "Servicio integral de cardiología intervencionista y hemodinamia con enfoque interdisciplinario y tecnología avanzada para enfermedades cardiovasculares, neurovasculares y periféricas.",
        items: [
          "Sala de Hemodinamia con equipos de última generación",
          "Consulta externa: Cardiología adulta y pediátrica",
          "Ecocardiografía, Holter de ritmos, Prueba de esfuerzo",
          "Cardiología Clínica – diagnóstico y manejo integral",
          "Cardiología Intervencionista: cateterismo, coronariografía, angioplastia, stents",
          "Cirugía Vascular – técnicas de mínima invasión",
          "Radiología Intervencionista: angiografías, embolizaciones, drenajes",
          "Neurointervencionismo: aneurismas, malformaciones arteriovenosas, trombectomías",
        ],
      },
      {
        icon: "pharmacy",
        title: "Central de Mezclas",
        desc: "Servicio especializado en preparación y control de medicamentos estériles, con infraestructura de alta tecnología certificada en Buenas Prácticas de Manufactura (BPM) y avalada por el INVIMA.",
        items: [
          "Nutriciones parenterales personalizadas",
          "Mezclas intravenosas en condiciones de esterilidad controlada",
          "Reempaque y dosificación de fármacos bajo estándares de calidad",
          "Asesoría farmacéutica en compatibilidad y estabilidad",
          "Control de calidad microbiológico y fisicoquímico",
        ],
      },
      {
        icon: "endoscopy",
        title: "Unidad Endoscópica",
        desc: "Equipos de última generación y equipo médico especializado para evaluación y tratamiento de patologías del sistema digestivo.",
        items: [
          "Endoscopia digestiva alta (gastroduodenoscopia)",
          "Colonoscopia diagnóstica y terapéutica",
          "Rectosigmoidoscopia",
          "Extracción de cuerpos extraños",
          "Ligadura de várices esofágicas",
          "Toma de biopsias y muestras histopatológicas",
        ],
      },
    ],
  },

  "santa-isabel": {
    name: "Sede Santa Isabel",
    address: "Av. Simón Bolívar #22-39, Valledupar – Cesar",
    phones: [
      { label: "Ref. y Contrarref.", value: "(5) 580 35 35", ext: "Ext. 1160" },
      { label: "", value: "318 221 2020" },
      { label: "", value: "316 830 7181" },
      { label: "", value: "315 347 1357" },
      { label: "Citas médicas", value: "317 570 8440" },
      { label: "Prog. Quirúrgica", value: "315 354 6567" },
    ],
    whatsapp: "573175708440",
    description:
      "Ubicada estratégicamente en la ciudad, la Sede Santa Isabel presta servicios de salud de mediana y alta complejidad, con especialización en el abordaje integral del paciente politraumatizado. Cuenta con un grupo de ortopedistas con amplia experiencia en trauma y patologías ortopédicas, y quirófanos construidos con los más altos estándares de calidad, dotados con central de esterilización de alta tecnología.",
    sections: [
      {
        icon: "emergency",
        title: "Urgencias Adultos 24 horas",
        desc: "Servicio de urgencias con atención inmediata y equipo interdisciplinario disponible las 24 horas del día. El servicio está conformado por:",
        items: [
          "Consultorios de triage",
          "Sala de reanimación",
          "Sala de observación – Hombres y Mujeres",
          "Salas de procedimientos",
          "Sala de yeso",
        ],
      },
      {
        icon: "surgery",
        title: "Cirugías de Alta Complejidad",
        desc: "Quirófanos perfectamente equipados con sistema seguro, eficaz y efectivo. Sala de recuperación post-quirúrgica con monitoreo cardiorrespiratorio individual. Disponibilidad permanente de especialistas en:",
        items: [
          "Cirugía General",
          "Neurocirugía",
          "Ortopedia adulto",
          "Cirugía Plástica y Estética",
          "Cirugía Gastrointestinal",
          "Cirugía Maxilofacial",
          "Cirugía Vascular y Angiológica",
          "Cirugía Urológica",
          "Cirugía Reconstructiva",
          "Cirugía Artroscópica",
          "Cirugía de Mano",
          "Cirugía de Pelvis",
          "Cirugía de Columna",
          "Otorrinolaringología",
          "Cirugía Cabeza y Cuello",
          "Cirugía Oftalmológica",
          "Dermatología",
          "Coloproctología",
          "Anestesiología",
          "Cirugía Laparoscópica",
        ],
      },
      {
        icon: "bed",
        title: "Hospitalización Adulto",
        desc: "Habitaciones cómodas dotadas con sistemas tecnológicos que permiten mayor seguridad del paciente y seguimiento oportuno por el grupo interdisciplinario. Servicios disponibles:",
        items: [
          "Medicina interna",
          "Anestesiología",
          "Urología",
          "Infectología",
          "Neurología",
          "Neurocirugía",
          "Psiquiatría",
          "Gastroenterología",
          "Cirugía vascular",
          "Cirugía de tórax",
          "Fisiatría y rehabilitación",
          "Radiología intervencionista",
          "Neumología",
          "Hemodinamia",
          "Dermatología",
          "Ortopedia",
          "Cirugía Maxilofacial",
          "Cardiología",
          "Oftalmología",
          "Hematología",
          "Nefrología",
          "Medicina del dolor",
          "Otorrinolaringología",
          "Cirugía general",
        ],
      },
      {
        icon: "icu",
        title: "Unidad de Cuidados Críticos Adultos",
        desc: "Cubículos equipados para atender al paciente crítico, coordinada por médicos intensivistas que brindan atención inmediata a quienes padecen patologías catastróficas y urgentes, con soporte posoperatorio de cirugías de alta complejidad y disfunción orgánica severa. Equipo 24 horas:",
        items: [
          "Especialistas en Medicina de Cuidado Crítico",
          "Especialistas en Medicina Interna",
          "Profesionales de Enfermería",
          "Medicina general",
          "Terapistas respiratorios",
          "Terapistas físicos",
        ],
      },
      {
        icon: "lab",
        title: "Laboratorio Clínico",
        desc: "Equipos de última tecnología y equipo de profesionales calificados para exámenes especializados. Contamos con:",
        items: [
          "Área de Microbiología: filmArray Torch BIOFIRE",
          "BACT/ALERT 3D 240",
          "VITEK Compact 60",
          "Área de Hematología: ADVIA 2120",
          "Área de Hemostasia: CS-2500",
          "Área de Inmunoensayos: VIDAS",
          "Área Química: Atellica Solution",
          "Área de Microscopía: Clinitek Advantus",
          "Servicio Transfusional",
        ],
      },
      {
        icon: "imaging",
        title: "Apoyo Diagnóstico",
        desc: "Servicio de imágenes diagnósticas convencionales y especializadas como soporte para el manejo integral del paciente, con alta tecnología y equipo humano calificado.",
        items: [
          "Ecografía",
          "Radiología convencional",
          "Tomografía Axial Computarizada (TAC)",
          "Laboratorio Clínico integrado",
        ],
      },
      {
        icon: "therapy",
        title: "Apoyo Terapéutico",
        desc: "Atención integral con profesionales especializados que apoyan las diferentes especialidades médicas:",
        items: [
          "Terapia física – rehabilitación y control del dolor",
          "Terapia respiratoria – prevención, diagnóstico y tratamiento",
          "Psicología",
          "Nutrición",
          "Servicio Transfusional",
          "Servicio farmacéutico de alta complejidad",
          "Trabajo social",
          "Central de mezclas parenterales certificada BPE – INVIMA",
        ],
      },
      {
        icon: "renal",
        title: "Terapia de Soporte Renal",
        desc: "Personal altamente calificado y tecnología de punta para terapias de soporte renal en pacientes críticamente enfermos y con enfermedad renal aguda. Todos los tipos de terapia disponibles:",
        items: [
          "Hemodiálisis intermitente",
          "Terapias de reemplazo renal continuo (Hemo-diafiltración)",
          "Hemofiltración",
          "SLED (Sustained Low-Efficiency Dialysis)",
          "Hemo-perfusión",
          "Plasmaféresis",
        ],
      },
      {
        icon: "ambulance",
        title: "Ambulancias 24 horas",
        desc: "Servicio de ambulancias para traslados asistenciales en Valledupar y todo el territorio nacional, con llamado gratuito disponible para toda la población.",
        items: [
          "Traslado asistencial básico",
          "Traslado medicalizado",
          "Llamado gratuito 24 horas para urgencias",
          "Cobertura en Valledupar y territorio nacional",
        ],
      },
    ],
  },

  "banco-de-sangre": {
    name: "Banco de Sangre y Centro de Aféresis",
    address: "Carrera 19 #14-47 San Vicente, Valledupar – Cesar",
    phones: [
      { label: "Ref. y Contrarref.", value: "(5) 580 35 35", ext: "Ext. 1160" },
      { label: "", value: "318 221 2020" },
      { label: "", value: "316 830 7181" },
      { label: "", value: "315 347 1357" },
      { label: "Citas médicas", value: "317 570 8440" },
    ],
    whatsapp: "573175708440",
    description:
      "Nuestro Banco de Sangre cuenta con tecnología avanzada y personal altamente capacitado para garantizar la seguridad, calidad y disponibilidad de los componentes sanguíneos requeridos en la atención médica. Ofrecemos un servicio integral enfocado en cubrir las necesidades transfusionales de pacientes hospitalizados y ambulatorios, cumpliendo las normas nacionales e internacionales de bioseguridad y trazabilidad. Nuestro compromiso es salvar vidas mediante la excelencia en cada proceso, con control riguroso desde la donación hasta la transfusión.",
    sections: [
      {
        icon: "blood",
        title: "Servicios de Banco de Sangre",
        desc: "Servicio completo para la obtención, procesamiento y distribución segura de hemocomponentes:",
        items: [
          "Promoción de la Donación Habitual – sensibilización comunitaria",
          "Flebotomía para donantes, atendida por bacteriólogo profesional",
          "Flebotomía terapéutica bajo prescripción médica",
          "Distribución de Hemocomponentes a instituciones de salud de la ciudad",
          "Preparación de sangre modificada según requerimientos clínicos",
          "Crioprecipitados – concentrados ricos en factores de coagulación",
        ],
      },
      {
        icon: "components",
        title: "Hemocomponentes Especializados",
        desc: "Producción y suministro de productos sanguíneos de alta calidad para necesidades clínicas específicas:",
        items: [
          "Plaquetas pobres en leucocitos – reduce reacciones transfusionales",
          "Plasma fresco congelado con factores de coagulación activos",
          "Glóbulos rojos leucorreducidos para pacientes con múltiples transfusiones",
          "Alícuotas GRPL y GRL – fraccionamiento controlado de glóbulos rojos",
          "Plaquetaféresis – recolección selectiva mediante aféresis",
        ],
      },
      {
        icon: "apheresis",
        title: "Centro de Aféresis",
        desc: "Tecnología avanzada para procedimientos especializados de aféresis con los más altos estándares de seguridad y calidad:",
        items: [
          "Plasmaféresis terapéutica",
          "Plaquetaféresis – recolección selectiva de plaquetas",
          "Flebotomía terapéutica",
        ],
      },
      {
        icon: "lab",
        title: "Procesamiento de Pruebas Infecciosas",
        desc: "A todas las unidades de sangre se les realizan los siete marcadores exigidos por la normatividad vigente:",
        items: [
          "Hepatitis B",
          "Hepatitis C",
          "HIV (VIH)",
          "HTLV",
          "Core",
          "Chagas",
          "Sífilis",
        ],
      },
      {
        icon: "ambulance",
        title: "Unidad Móvil",
        desc: "Unidad Móvil que garantiza todo el confort a nuestros donantes, cumpliendo la normatividad vigente para el desplazamiento permanente y siendo más accesible a todos los municipios de la región.",
        items: [
          "Jornadas extramurales de donación de sangre",
          "Desplazamiento a todos los municipios",
          "Confort y comodidad para los donantes",
          "Cumplimiento total de normatividad vigente",
        ],
      },
    ],
  },
};

// ── ICON MAP ──────────────────────────────────────────────────────────────────

const ICONS = {
  emergency:   MdEmergency,
  baby:        FaBaby,
  surgery:     FaStethoscope,
  imaging:     RiMicroscopeLine,
  cardio:      FaHeartbeat,
  pharmacy:    FaPills,
  endoscopy:   FaClinicMedical,
  bed:         FaBed,
  icu:         FaHospitalAlt,
  lab:         FaFlask,
  therapy:     FaSyringe,
  renal:       MdLocalHospital,
  ambulance:   FaAmbulance,
  blood:       FaTint,
  components:  BiDna,
  apheresis:   MdBiotech,
};

// ── HERO IMAGES (per sede) ─────────────────────────────────────────────────────

const HERO_IMAGES = {
  "sede-centro":     "/IMG/CENTRO/centro-entrada.webp",
  "santa-isabel":    "/IMG/SANTA/SANTA-ISABEL-entrada.webp",
  "banco-de-sangre": "/IMG/bancosangre.webp",
};

// ── SECTION IMAGE MAP (slug + icon → image path) ───────────────────────────────

const IMAGE_MAP = {
  // sede-centro
  "sede-centro-emergency":  "/IMG/servicios/Urgencias-24-CEMIC-OHI.webp",
  "sede-centro-surgery":    "/IMG/servicios/Cirugia-OHI-2.webp",
  "sede-centro-bed":        "/IMG/servicios/Hospitalizacion-adulto-OHI-1.webp",
  "sede-centro-icu":        "/IMG/servicios/UCI-OHI-1.webp",
  "sede-centro-baby":       "/IMG/servicios/Hospitalizacion-Materna-OHI-1.webp",
  "sede-centro-lab":        "/IMG/servicios/Laboratorio-Clinico-OHI-1.webp",
  "sede-centro-imaging":    "/IMG/servicios/Apoyo-Diagnostico-OHI.webp",
  "sede-centro-therapy":    "/IMG/CENTRO/apoyo terapeutico.webp",
  "sede-centro-cardio":     "/IMG/servicios/Intervencionista-H-OHI.webp",
  "sede-centro-pharmacy":   "/IMG/centralmezclas.webp",
  "sede-centro-endoscopy":  "/IMG/servicios/Sala-Procedimiento-OHI.webp",
  // santa-isabel
  "santa-isabel-emergency": "/IMG/servicios/Urgencias-Santa-Isabel-OHI.webp",
  "santa-isabel-surgery":   "/IMG/SANTA/cirugias.webp",
  "santa-isabel-bed":       "/IMG/SANTA/hospitalizacion unipersonal.webp",
  "santa-isabel-icu":       "/IMG/SANTA/unidad de cuidados criticos.webp",
  "santa-isabel-lab":       "/IMG/servicios/Laboratorio-Clinico-OHI-1.webp",
  "santa-isabel-imaging":   "/IMG/SANTA/apoyo diagnostico.webp",
  "santa-isabel-therapy":   "/IMG/SANTA/apoyo terapeutico.webp",
  "santa-isabel-renal":     "/IMG/servicios/T-Renal-OHI.webp",
  "santa-isabel-ambulance": "/IMG/servicios/Urgencias-OHI-1.webp",
  // banco-de-sangre
  "banco-de-sangre-blood":      "/IMG/BANCO/promocion de donacion.webp",
  "banco-de-sangre-components": "/IMG/BANCO/distribucion de hemocomponentes.webp",
  "banco-de-sangre-apheresis":  "/IMG/BANCO/flrbotomia.webp",
  "banco-de-sangre-lab":        "/IMG/BANCO/procesamiento de pruebas.webp",
  "banco-de-sangre-ambulance":  "/IMG/BANCO/unidad movil.webp",
};

// ── HIGHLIGHTS (per sede) ──────────────────────────────────────────────────────

const HIGHLIGHTS = {
  "sede-centro": [
    { value: "20+",  label: "Años de experiencia" },
    { value: "24/7", label: "Urgencias disponibles" },
    { value: "11",   label: "Servicios especializados" },
  ],
  "santa-isabel": [
    { value: "24/7", label: "Urgencias disponibles" },
    { value: "20+",  label: "Especialidades quirúrgicas" },
    { value: "9",    label: "Servicios disponibles" },
  ],
  "banco-de-sangre": [
    { value: "7",    label: "Marcadores infecciosos" },
    { value: "5",    label: "Hemocomponentes especializados" },
    { value: "100%", label: "Garantía de calidad" },
  ],
};

// ── STATIC PARAMS ─────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return Object.keys(SEDES_DATA).map((slug) => ({ slug }));
}

// ── METADATA ──────────────────────────────────────────────────────────────────

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const sede = SEDES_DATA[slug];
  if (!sede) return {};
  return {
    title: `${sede.name} – OHI`,
    description: sede.description.slice(0, 155),
  };
}

// ── PAGE ──────────────────────────────────────────────────────────────────────

export default async function SedePage({ params }) {
  const { slug } = await params;
  const sede = SEDES_DATA[slug];
  if (!sede) notFound();

  const heroImg = HERO_IMAGES[slug];
  const highlights = HIGHLIGHTS[slug] || [];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=DM+Sans:wght@300;400;500;600;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'DM Sans', sans-serif; color: #061A50; background: #fff; }
        .display-font { font-family: 'Cormorant Garamond', serif; }
        a { text-decoration: none; }
        ul { list-style: none; }
        /* Hero elements start hidden — GSAP animates them in */
        .hero-badge, .hero-title, .hero-desc, .hero-chip, .hero-stat { opacity: 0; }
        /* Card layout: stacked on mobile, horizontal on tablet+ */
        .service-card { display: flex; flex-direction: column; transition: box-shadow 0.4s ease, transform 0.4s ease; }
        .service-card:hover { transform: translateY(-4px); box-shadow: 0 24px 64px rgba(6,47,135,0.13) !important; }
        .card-img-wrap { position: relative; width: 100%; aspect-ratio: 4/3; overflow: hidden; flex-shrink: 0; background: linear-gradient(145deg,#062F87,#1347bf); }
        .card-img-wrap::after { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg,#C2D501,#d4e818 60%,transparent); pointer-events: none; z-index: 1; }
        .card-img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.75s ease; }
        .service-card:hover .card-img { transform: scale(1.04); }
        .card-body { flex: 1; min-width: 0; }
        /* Horizontal layout on tablet+ */
        @media (min-width: 580px) {
          .service-card { flex-direction: row; align-items: stretch; }
          .card-img-wrap { width: 42%; max-width: 300px; aspect-ratio: auto; min-height: 220px; }
        }
        /* 2-col grid on large screens */
        @media (min-width: 1100px) { .grid-services { grid-template-columns: repeat(2, 1fr); } }
        /* Stats strip dividers */
        .stat-item:not(:last-child) { border-right: 1px solid rgba(255,255,255,0.1); }
      `}</style>

      <SedeAnimations />

      {/* ── Navbar ── */}
      <nav style={{
        position: "sticky", top: 0, zIndex: 100,
        background: "#062F87",
        padding: "0 1.5rem",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: 64, boxShadow: "0 2px 20px rgba(6,47,135,0.3)",
      }}>
        <a href="/#sedes" style={{
          display: "flex", alignItems: "center", gap: 8,
          color: "rgba(255,255,255,0.75)", fontSize: "0.85rem", fontWeight: 500,
        }}>
          <FaArrowLeft style={{ fontSize: "0.8rem" }} />
          Volver al inicio
        </a>
        <a href="/" style={{ display: "flex", alignItems: "center" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/LOGOS/LOGO OHI HORIZONTAL.PNG"
            alt="OHI"
            style={{ height: 36, filter: "brightness(0) invert(1)" }}
          />
        </a>
        <a
          href={`https://api.whatsapp.com/send?phone=${sede.whatsapp}`}
          target="_blank" rel="noopener noreferrer"
          style={{
            display: "flex", alignItems: "center", gap: 6,
            background: "#C2D501", color: "#062F87",
            padding: "7px 16px", borderRadius: 4,
            fontSize: "0.82rem", fontWeight: 700,
          }}
        >
          <FaWhatsapp />
          Contáctanos
        </a>
      </nav>

      {/* ── Hero ── */}
      <section className="hero-section" style={{
        position: "relative", minHeight: "92vh",
        display: "flex", flexDirection: "column", overflow: "hidden",
      }}>
        {/* Background image (parallax target) */}
        <div className="hero-bg" style={{
          position: "absolute", inset: 0,
          backgroundImage: heroImg ? `url(${heroImg})` : undefined,
          backgroundSize: "cover", backgroundPosition: "center",
          background: heroImg ? undefined : "linear-gradient(135deg, #062F87 0%, #0B3FAD 60%, #1A52CC 100%)",
          willChange: "transform",
        }} />
        {/* Gradient overlay */}
        <div style={{
          position: "absolute", inset: 0,
          background: heroImg
            ? "linear-gradient(135deg, rgba(4,16,68,0.94) 0%, rgba(6,47,135,0.87) 50%, rgba(10,58,162,0.64) 100%)"
            : "transparent",
        }} />
        {/* Dot grid */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "34px 34px",
        }} />
        {/* Floating geometric shapes (GSAP animates these) */}
        <div className="shape-circle-lg" style={{
          position: "absolute", top: "8%", right: "5%",
          width: 260, height: 260, borderRadius: "50%",
          border: "1px solid rgba(194,213,1,0.13)", pointerEvents: "none",
        }} />
        <div className="shape-circle-sm" style={{
          position: "absolute", top: "22%", right: "13%",
          width: 140, height: 140, borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.07)", pointerEvents: "none",
        }} />
        <div className="shape-diamond" style={{
          position: "absolute", bottom: "24%", left: "4%",
          width: 72, height: 72, border: "1px solid rgba(194,213,1,0.12)",
          transform: "rotate(45deg)", pointerEvents: "none",
        }} />
        <div className="shape-diamond-sm" style={{
          position: "absolute", top: "20%", left: "2%",
          width: 38, height: 38, border: "1px solid rgba(255,255,255,0.08)",
          transform: "rotate(45deg)", pointerEvents: "none",
        }} />

        {/* Content */}
        <div style={{
          position: "relative", zIndex: 1, flex: 1,
          display: "flex", alignItems: "center",
          padding: "5rem 1.5rem 3rem",
        }}>
          <div style={{ maxWidth: 900, margin: "0 auto", width: "100%" }}>
            <div className="hero-badge" style={{
              display: "inline-block",
              background: "rgba(194,213,1,0.13)",
              border: "1px solid rgba(194,213,1,0.38)",
              color: "#C2D501", fontSize: "0.72rem", fontWeight: 600,
              letterSpacing: "0.18em", textTransform: "uppercase",
              padding: "5px 16px", borderRadius: 20, marginBottom: "1.4rem",
            }}>
              OHI – Organización Humana Integral
            </div>

            <h1 className="hero-title display-font" style={{
              fontSize: "clamp(2.4rem, 6vw, 4.2rem)",
              fontWeight: 700, color: "#fff",
              lineHeight: 1.08, marginBottom: "1.5rem",
              textShadow: "0 2px 24px rgba(0,0,0,0.35)",
            }}>
              {sede.name}
            </h1>

            <p className="hero-desc" style={{
              color: "rgba(255,255,255,0.82)", fontSize: "1.02rem",
              lineHeight: 1.78, maxWidth: 680, marginBottom: "2.2rem",
            }}>
              {sede.description}
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.65rem" }}>
              <span className="hero-chip" style={{
                display: "flex", alignItems: "center", gap: 7,
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.18)",
                borderRadius: 6, padding: "7px 16px",
                color: "rgba(255,255,255,0.9)", fontSize: "0.83rem",
                backdropFilter: "blur(8px)",
              }}>
                <FaMapMarkerAlt style={{ color: "#C2D501", flexShrink: 0 }} />
                {sede.address}
              </span>

              {sede.phones.slice(0, 2).map((p, i) => (
                <span key={i} className="hero-chip" style={{
                  display: "flex", alignItems: "center", gap: 7,
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.18)",
                  borderRadius: 6, padding: "7px 16px",
                  color: "rgba(255,255,255,0.9)", fontSize: "0.83rem",
                  backdropFilter: "blur(8px)",
                }}>
                  <FaPhone style={{ color: "#C2D501", flexShrink: 0, fontSize: "0.75rem" }} />
                  {p.label ? `${p.label}: ` : ""}{p.value}{p.ext ? ` ${p.ext}` : ""}
                </span>
              ))}

              <a className="hero-chip"
                href={`https://api.whatsapp.com/send?phone=${sede.whatsapp}&text=Hola, me gustaría información sobre ${encodeURIComponent(sede.name)}`}
                target="_blank" rel="noopener noreferrer"
                style={{
                  display: "flex", alignItems: "center", gap: 7,
                  background: "rgba(194,213,1,0.18)",
                  border: "1px solid rgba(194,213,1,0.38)",
                  borderRadius: 6, padding: "7px 16px",
                  color: "#C2D501", fontSize: "0.83rem", fontWeight: 600,
                  backdropFilter: "blur(8px)",
                }}
              >
                <FaWhatsapp />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        {highlights.length > 0 && (
          <div style={{
            position: "relative", zIndex: 1,
            borderTop: "1px solid rgba(255,255,255,0.1)",
            background: "rgba(4,16,68,0.55)",
            backdropFilter: "blur(16px)",
          }}>
            <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", padding: "1.5rem" }}>
              {highlights.map((h) => (
                <div key={h.label} className="hero-stat stat-item" style={{
                  flex: "1 1 0", textAlign: "center", padding: "0.5rem 1rem",
                }}>
                  <div className="display-font" style={{
                    fontSize: "2.4rem", fontWeight: 700, color: "#C2D501",
                    lineHeight: 1, letterSpacing: "-0.02em",
                  }}>
                    {h.value}
                  </div>
                  <div style={{
                    fontSize: "0.76rem", color: "rgba(255,255,255,0.6)",
                    marginTop: "0.35rem", textTransform: "uppercase", letterSpacing: "0.07em",
                  }}>
                    {h.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* ── Services grid ── */}
      <section style={{
        background: "linear-gradient(180deg, #eef1fc 0%, #e4e9fa 100%)",
        padding: "5rem 1.5rem", position: "relative",
      }}>
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: "repeating-linear-gradient(135deg, transparent, transparent 40px, rgba(6,47,135,0.025) 40px, rgba(6,47,135,0.025) 41px)",
        }} />

        <div style={{ maxWidth: 1260, margin: "0 auto", position: "relative" }}>
          <div className="services-header" style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span style={{
              color: "#062F87", fontSize: "0.72rem", fontWeight: 600,
              letterSpacing: "0.18em", textTransform: "uppercase",
            }}>
              Portafolio de Servicios
            </span>
            <div style={{
              width: 48, height: 3,
              background: "linear-gradient(90deg, #C2D501, #d4e818)",
              borderRadius: 2, margin: "0.75rem auto 1rem",
            }} />
            <h2 className="display-font" style={{
              fontSize: "clamp(1.7rem, 3.5vw, 2.6rem)",
              fontWeight: 600, color: "#062F87",
            }}>
              Nuestros servicios
            </h2>
            <p style={{
              color: "#4A5A80", fontSize: "0.95rem", lineHeight: 1.7,
              maxWidth: 520, margin: "0.75rem auto 0",
            }}>
              Tecnología de punta y talento humano especializado para su bienestar.
            </p>
          </div>

          <div className="grid-services services-grid" style={{
            display: "grid", gridTemplateColumns: "1fr", gap: "2rem",
          }}>
            {sede.sections.map((section) => {
              const Icon = ICONS[section.icon] || FaCheckCircle;
              const imgSrc = IMAGE_MAP[`${slug}-${section.icon}`];

              return (
                <div key={section.title} className="service-card" style={{
                  background: "#fff", borderRadius: 20, overflow: "hidden",
                  boxShadow: "0 4px 28px rgba(6,47,135,0.07), 0 1px 4px rgba(6,47,135,0.04)",
                  border: "1px solid rgba(6,47,135,0.06)",
                }}>
                  {/* Image */}
                  <div className="card-img-wrap">
                    {imgSrc ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={imgSrc}
                        alt={section.title}
                        className="card-img"
                      />
                    ) : null}
                  </div>

                  {/* Content */}
                  <div className="card-body" style={{
                    padding: "1.4rem 1.5rem",
                    display: "flex", flexDirection: "column", gap: "0.9rem",
                  }}>
                    {/* Icon + title */}
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <div style={{
                        width: 42, height: 42, borderRadius: 10, flexShrink: 0,
                        background: "linear-gradient(135deg, #eef1ff 0%, #dde3ff 100%)",
                        border: "1.5px solid rgba(6,47,135,0.12)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        color: "#062F87", fontSize: "1.15rem",
                      }}>
                        <Icon />
                      </div>
                      <h3 className="display-font" style={{
                        color: "#062F87", fontSize: "1.08rem", fontWeight: 600, lineHeight: 1.28,
                      }}>
                        {section.title}
                      </h3>
                    </div>

                    <p style={{
                      color: "#4A5A80", fontSize: "0.875rem", lineHeight: 1.72,
                      borderLeft: "3px solid #C2D501", paddingLeft: "0.75rem",
                    }}>
                      {section.desc}
                    </p>

                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                      {section.items.map((item) => (
                        <span key={item} style={{
                          display: "inline-flex", alignItems: "center", gap: 5,
                          background: "#f0f3ff", border: "1px solid rgba(6,47,135,0.1)",
                          borderRadius: 20, padding: "3px 10px",
                          color: "#062F87", fontSize: "0.77rem", fontWeight: 500,
                        }}>
                          <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#C2D501", flexShrink: 0 }} />
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Contact band ── */}
      <section className="contact-section" style={{
        background: "linear-gradient(135deg, #040f44 0%, #062F87 100%)",
        padding: "4.5rem 1.5rem", position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }} />
        <div style={{
          position: "absolute", top: -100, right: -100,
          width: 340, height: 340, borderRadius: "50%",
          border: "1px solid rgba(194,213,1,0.07)", pointerEvents: "none",
        }} />

        <div className="contact-content" style={{
          maxWidth: 900, margin: "0 auto",
          display: "flex", flexWrap: "wrap",
          gap: "2.5rem", justifyContent: "space-between", alignItems: "flex-start",
          position: "relative", zIndex: 1,
        }}>
          <div style={{ flex: "1 1 280px" }}>
            <h3 className="display-font" style={{
              color: "#fff", fontSize: "1.8rem", fontWeight: 600, marginBottom: "1.4rem",
            }}>
              Contáctenos
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
              <span style={{
                display: "flex", alignItems: "flex-start", gap: 8,
                color: "rgba(255,255,255,0.8)", fontSize: "0.88rem",
              }}>
                <FaMapMarkerAlt style={{ color: "#C2D501", marginTop: 3, flexShrink: 0 }} />
                {sede.address}
              </span>
              {sede.phones.map((p, i) => (
                <span key={i} style={{
                  display: "flex", alignItems: "center", gap: 8,
                  color: "rgba(255,255,255,0.75)", fontSize: "0.85rem",
                }}>
                  <FaPhone style={{ color: "#C2D501", flexShrink: 0, fontSize: "0.75rem" }} />
                  {p.label ? <strong style={{ color: "rgba(255,255,255,0.52)", fontWeight: 500 }}>{p.label}:&nbsp;</strong> : null}
                  {p.value}
                  {p.ext ? <span style={{ color: "rgba(255,255,255,0.42)" }}> {p.ext}</span> : null}
                </span>
              ))}
            </div>
          </div>

          <div style={{
            flex: "1 1 240px", display: "flex", flexDirection: "column",
            gap: "1rem", justifyContent: "center",
          }}>
            <a
              href={`https://api.whatsapp.com/send?phone=${sede.whatsapp}&text=Hola, me gustaría obtener información sobre ${encodeURIComponent(sede.name)}`}
              target="_blank" rel="noopener noreferrer"
              style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                background: "#C2D501", color: "#062F87",
                padding: "14px 24px", borderRadius: 8,
                fontSize: "0.95rem", fontWeight: 700,
                boxShadow: "0 4px 20px rgba(194,213,1,0.28)",
              }}
            >
              <FaWhatsapp style={{ fontSize: "1.1rem" }} />
              Escribir por WhatsApp
            </a>
            <a
              href="/#sedes"
              style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                background: "transparent",
                border: "1px solid rgba(255,255,255,0.22)",
                color: "rgba(255,255,255,0.78)",
                padding: "13px 24px", borderRadius: 8,
                fontSize: "0.88rem", fontWeight: 500,
              }}
            >
              <FaArrowLeft style={{ fontSize: "0.8rem" }} />
              Ver todas las sedes
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{
        background: "#060c22",
        padding: "1.4rem 1.5rem",
        textAlign: "center",
        color: "rgba(255,255,255,0.28)", fontSize: "0.78rem",
      }}>
        © 2025 OHI – Organización Humana Integral. Todos los derechos reservados.
      </footer>
    </>
  );
}
