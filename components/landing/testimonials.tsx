"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"

const testimonials = [
  {
    name: "Carlos Mendoza",
    role: "CEO, TechFlow",
    content: "María transformó completamente nuestra presencia en redes. En 3 meses duplicamos seguidores y triplicamos el engagement.",
    initials: "CM",
  },
  {
    name: "Ana Rodríguez",
    role: "Fundadora, Bloom Studio",
    content: "Profesional, creativa y siempre con ideas frescas. Su estrategia nos ayudó a conectar genuinamente con nuestra audiencia.",
    initials: "AR",
  },
  {
    name: "Diego Torres",
    role: "Marketing Director",
    content: "Los resultados hablan por sí solos. Mejor ROI en redes sociales que hemos tenido en años.",
    initials: "DT",
  },
  {
    name: "Fernanda Raspanti",
    role: "Terapeuta",
    content: "Desde que trabajo con María, mi marca ha crecido exponencialmente. Su dedicación es impresionante.",
    initials: "FR",
  },
  {
    name: "Miguel Ángel",
    role: "CEO, Pulse Media",
    content: "La mejor inversión que hicimos. Nuestra comunidad creció un 400% en 6 meses.",
    initials: "MA",
  },
  {
    name: "Valeria Gómez",
    role: "Directora Creativa",
    content: "Resultados reales desde el primer mes. Nuestra audiencia creció y el engagement se disparó.",
    initials: "VG",
  },
]

export function Testimonials() {
  return (
    <>
      <style>{`
        /* ─── Section ─── */
        .t-section {
          position: relative;
          overflow: hidden;
          padding: 6rem 1rem 3rem;
background: radial-gradient(
  ellipse 60% 50% at 50% 60%,
  #6b73fe 0%,
  #4f55c5 20%,
  #2c2f66 40%,
  #0b0c1a 80%,
  #000000 100%
);        }

        /* Full width bottom shadow to fade out the image smoothly across the whole page */
        .t-section::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 600px;
          background: linear-gradient(
            to bottom,
            transparent 0%,
            rgba(5,0,8,0.3) 60%,
            rgba(5,0,8,0.85) 80%,
            rgba(5,0,8,1) 85%
          );
          pointer-events: none;
          z-index: 20;
        }

        /* ─── Watermark ─── */
        .t-watermark {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
          z-index: 0;
          overflow: hidden;
        }
        .t-watermark span {
          font-size: clamp(7rem, 22vw, 20rem);
          font-weight: 900;
          letter-spacing: -0.04em;
          white-space: nowrap;
          line-height: 1;
          user-select: none;
          background: linear-gradient(
            180deg,
            rgb(107,115,254) 0%,
            rgba(107, 115, 254, 0.47) 20%,
            transparent 80%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* ─── Inner ─── */
        .t-inner {
          position: relative;
          z-index: 1;
          max-width: 1280px;
          margin: 0 auto;
        }

        /* ─── Header ─── */
        .t-header {
          text-align: center;
          margin-bottom: 3.5rem;
        }
        .t-header h2 {
          font-size: clamp(2rem, 5vw, 3.75rem);
          font-weight: 800;
          color: #fff;
          margin: 0.75rem 0 0.5rem;
          letter-spacing: -0.025em;
          line-height: 1.1;
        }
        .t-header p {
          color: rgba(196,181,253,0.7);
          font-size: 1rem;
          max-width: 34rem;
          margin: 0 auto;
        }

        /* ─── Desktop scene ─── */
        .t-scene {
          display: none;
          position: relative;
          width: 100%;
          min-height: 800px;
          align-items: center;
          justify-content: center;
        }
        @media (min-width: 1024px) {
          .t-scene { display: flex; }
        }

        /* ─── Phone image ─── */
        .t-phone {
          position: relative;
          z-index: 5;
          flex-shrink: 0;
          width: 800px;
          align-self: flex-end;
          margin-bottom: -2rem;
        }
        .t-phone img {
          width: 100%;
          height: auto;
          display: block;
          /* multiply blends white bg perfectly on any dark surface */
          mix-blend-mode: multiply;
        }

        /* ─── Floating cards ─── */
        .t-card {
          position: absolute;
          background: linear-gradient(145deg, rgba(74,83,224,0.6) 0%, rgba(40,45,150,0.75) 45%, rgba(10,12,25,0.9) 100%);
          border: 1px solid rgba(107,115,254,0.22);
          border-radius: 1rem;
          padding: 1rem 1.15rem;
          backdrop-filter: blur(16px);
          box-shadow:
            0 12px 40px rgba(0,0,0,0.5),
            inset 0 1px 0 rgba(107,115,254,0.18);
          width: 220px;
          transition: transform 0.35s ease, box-shadow 0.35s ease;
          z-index: 10;
        }
        .t-card:hover {
          transform: translateY(-6px) scale(1.03) !important;
          box-shadow: 0 20px 56px rgba(74,83,224,0.45), inset 0 1px 0 rgba(107,115,254,0.35);
        }

        /* cards: efecto esparcido rodeando el celular */
        .t-card-0 { top: 8%;    left:  18%; animation: floatA 4.2s ease-in-out infinite 0s; }
        .t-card-1 { top: 32%;   left:  5%; animation: floatB 5.1s ease-in-out infinite 0.6s; }
        .t-card-2 { top: 58%;   left:  13%;  animation: floatA 4.8s ease-in-out infinite 1.2s; }
        .t-card-3 { top: 8%;    right: 11%;  animation: floatB 4.6s ease-in-out infinite 0.3s; }
        .t-card-4 { top: 31%;   right: 2%; animation: floatA 5.0s ease-in-out infinite 0.9s; }
        .t-card-5 { top: 54%;   right: 14%; animation: floatB 4.4s ease-in-out infinite 1.5s; }

        @keyframes floatA {
          0%,100% { transform: translateY(0px); }
          50%      { transform: translateY(-10px); }
        }
        @keyframes floatB {
          0%,100% { transform: translateY(0px); }
          50%      { transform: translateY(-7px); }
        }

        .t-card-head {
          display: flex;
          align-items: center;
          gap: 0.55rem;
          margin-bottom: 0.55rem;
        }
        .t-avatar {
          width: 2.1rem;
          height: 2.1rem;
          border-radius: 50%;
          background: linear-gradient(135deg, #8f95ff, #4a53e0);
          border: 1.5px solid rgba(107,115,254,0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.65rem;
          font-weight: 700;
          color: #ede9fe;
          flex-shrink: 0;
        }
        .t-name {
          font-size: 0.78rem;
          font-weight: 600;
          color: #ede9fe;
          margin: 0;
          line-height: 1.3;
        }
        .t-role {
          font-size: 0.65rem;
          color: rgba(167,139,250,0.65);
          margin: 0;
          line-height: 1.3;
        }
        .t-content {
          font-size: 0.75rem;
          color: rgba(233,213,255,0.82);
          line-height: 1.6;
          margin: 0 0 0.45rem;
        }
        .t-stars {
          font-size: 0.68rem;
          color: #8f95ff;
          letter-spacing: 0.04em;
        }

        /* ─── Mobile grid ─── */
        .t-mobile {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.875rem;
        }
        @media (min-width: 560px) {
          .t-mobile { grid-template-columns: 1fr 1fr; }
        }
        @media (min-width: 1024px) {
          .t-mobile { display: none; }
        }

        .t-mobile-card {
          background: linear-gradient(145deg, rgba(74,83,224,0.55) 0%, rgba(40,45,150,0.7) 45%, rgba(10,12,25,0.88) 100%);
          border: 1px solid rgba(107,115,254,0.2);
          border-radius: 1rem;
          padding: 1rem 1.15rem;
          backdrop-filter: blur(12px);
          box-shadow: 0 8px 28px rgba(0,0,0,0.4), inset 0 1px 0 rgba(107,115,254,0.14);
        }
      `}</style>

      <section id="testimonials" className="t-section">
        {/* Watermark */}
        {/* <div className="t-watermark">
          <span>GRACIAS</span>
        </div> */}

        <div className="t-inner">
          <div className="relative z-10 w-full flex flex-col items-center justify-center mb-16 px-4">
            <h1
              className="text-[18vw] md:text-[14vw] lg:text-[9vw] tracking-tighter text-center whitespace-nowrap bg-clip-text gradient-text leading-[0.8] pointer-events-none select-none drop-shadow-sm pb-4 md:pb-6"

            >
              Comentarios

            </h1>

            <p className="text-lg md:text-3xl font-light text-center max-w-7xl -mt-4 tracking-wide drop-shadow-md relative z-20">
              De clientes satisfechos.
            </p>
          </div>
          {/* Header */}
          {/* <div className="t-header">
            <Badge
              variant="outline" className="mb-4 px-4 py-1.5 text-sm border-primary/30 text-primary bg-primary/5">
              Testimonios
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Lo que dicen mis clientes
            </h2>
            <h3 className="text-muted-foreground max-w-2xl mx-auto">
              Historias reales de marcas que han transformado su presencia digital.
            </h3>
          </div> */}

          {/* ── Desktop: phone + floating cards ── */}
          <div className="t-scene -mt-10">
            {/* Floating cards */}
            {testimonials.map((t, i) => (
              <div key={t.name} className={`t-card t-card-${i}`}>
                <div className="t-card-head">
                  <div className="t-avatar">{t.initials}</div>
                  <div>
                    <p className="t-name">{t.name}</p>
                    <p className="t-role">{t.role}</p>
                  </div>
                </div>
                <p className="t-content">&ldquo;{t.content}&rdquo;</p>
                <div className="t-stars">★★★★★</div>
              </div>
            ))}

            {/* Phone image center */}
            <div className="t-phone">
              <Image
                src="/images/phone_testimonials.png"
                alt="Celular mostrando el perfil de denicreando en Instagram"
                width={900}
                height={1200}
                style={{ width: "100%", height: "auto" }}
                priority
              />
            </div>
          </div>

          {/* ── Mobile: stacked cards ── */}
          <div className="t-mobile">
            {testimonials.map((t) => (
              <div key={t.name} className="t-mobile-card">
                <div className="t-card-head">
                  <div className="t-avatar">{t.initials}</div>
                  <div>
                    <p className="t-name">{t.name}</p>
                    <p className="t-role">{t.role}</p>
                  </div>
                </div>
                <p className="t-content">&ldquo;{t.content}&rdquo;</p>
                <div className="t-stars">★★★★★</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
