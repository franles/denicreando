"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Heart, Briefcase, MessageCircle, Play } from "lucide-react"

const socialLinks = [
  { icon: Heart, href: "#https://www.instagram.com/denidegese/", label: "Instagram" },
  { icon: MessageCircle, href: "#", label: "Twitter" },
  { icon: Briefcase, href: "#", label: "LinkedIn" },
  { icon: Play, href: "#", label: "YouTube" },
]

const skills = [
  "Estrategia",
  "Planificación",
  "Creación",
  "Fotografía",
  "Diseño",
  "Meta Ads",
  "Personalización",
  "Comunidad",
]

const BeamLayer = ({ className, colorClass }: { className?: string; colorClass: string }) => (
  <svg
    viewBox="0 0 1000 400"
    preserveAspectRatio="none"
    className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] sm:w-[110%] ${className} ${colorClass}`}
  >
    <path d="M 0,0 C 400,253 600,253 1000,0 L 1000,400 C 600,146 400,146 0,400 Z" className="fill-current" />
  </svg>
)

export function About() {
  return (
    <section id="about" className="relative py-24 px-4 overflow-hidden bg-background">
      {/* Figma-style Horizontal Hourglass Glow */}
      <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-[500px] pointer-events-none z-0 opacity-70 dark:opacity-100">
        <BeamLayer colorClass="text-[#4a53e0]/60 dark:text-[#1c1e45]/80" className="h-[500px] blur-[80px] sm:blur-[100px]" />
        <BeamLayer colorClass="text-[#6b73fe]/70" className="h-[300px] blur-[30px] sm:blur-[40px]" />
        <BeamLayer colorClass="text-[#c1c4ff] dark:text-white/90" className="h-[100px] blur-[20px] sm:blur-[24px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        {/* <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-1.5 text-sm border-primary/30 text-primary bg-primary/5">
            Sobre mí
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-balance">
            Conocé mi historia
          </h2>
        </div> */}

        {/* Content */}
        <div className="relative mt-12 md:mt-24">
          <div className="flex flex-col-reverse md:flex-row gap-16 md:gap-12 items-center justify-between">

            {/* Text content (Left side) */}
            <div className="relative z-20 w-full md:w-3/5 md:-rotate-1">
              {/* Sombra difusa negra sin fondo para lectura */}
              <div className="absolute inset-0 bg-black/90 blur-3xl -z-10 scale-110 translate-y-2 rounded-[100px]" />
              <div className="absolute inset-y-0 left-0 right-10 bg-black/80 blur-2xl -z-10 rounded-[100px]" />

              <div className="space-y-8 p-4">
                <div className="relative inline-block">
                  <h3 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2 tracking-tighter relative z-10">
                    Denise Degese
                  </h3>
                  {/* Detalle alocado */}
                  <div />
                  <p className="text-xl md:text-2xl lg:text-3xl font-light italic text-primary/90 mt-2 tracking-wide font-sans">
                    Social Media Manager
                  </p>
                </div>

                <div className="space-y-6 text-zinc-300 text-lg lg:text-xl leading-relaxed z-10 relative left-0 md:left-4 border-l-4 border-primary/40 pl-6 lg:pl-8 py-2">
                  <p>
                    Con más de 5 años de experiencia en el mundo digital, me especializo en crear estrategias que transforman la presencia online de marcas y emprendedores.
                  </p>
                  <p className="hidden sm:block">
                    Mi enfoque combina creatividad con análisis de datos para desarrollar contenido que no solo atrae, sino que genera una comunidad leal y comprometida.
                  </p>
                  <p>
                    He trabajado con más de 50 marcas en diversos sectores, siempre con un objetivo claro: <span className="text-white font-bold drop-shadow-md">resultados medibles y crecimiento sostenible.</span>
                  </p>
                </div>

                {/* Skills alocadas */}
                <div className="flex flex-wrap gap-4 pt-8 md:pl-4">
                  {skills.map((skill, i) => (
                    <span
                      key={skill}
                      className={`px-5 py-2.5 text-sm md:text-base font-semibold rounded-2xl bg-black/80 backdrop-blur-md text-white border border-primary/30 shadow-[0_5px_15px_rgba(0,0,0,0.5)] transform ${i % 2 === 0 ? 'rotate-3 translate-y-1' : '-rotate-2 -translate-y-2'} hover:scale-110 hover:border-primary hover:rotate-0 hover:z-10 transition-all duration-300 cursor-default`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Image (Right side) */}
            <div className="relative w-full sm:w-4/5 md:w-2/5 mx-auto group perspective-[1000px] mb-12 md:mb-0">
              <div className="absolute -inset-8 bg-gradient-to-tr from-[#6b73fe] via-[#8f95ff] to-[#1c1e45] rounded-[3rem] blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-700 animate-pulse" />

              <div className="relative aspect-[3/4] md:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-white/10 transform md:rotate-[4deg] group-hover:rotate-0 group-hover:scale-105 transition-all duration-700">
                <Image
                  src="/images/profile.jpg"
                  alt="María García - Community Manager"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-1000"
                  priority
                />

                {/* Overlay sutil */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
              </div>

              {/* Social links floating alocados */}
              {socialLinks.map(({ icon: Icon, href, label }, idx) => {
                const rotations = ["rotate-[-15deg] origin-bottom-right", "rotate-[12deg] origin-bottom-left", "rotate-[-20deg]", "rotate-[25deg]"];
                const positions = [
                  "top-[5%] -left-4 sm:-left-8",
                  "top-[35%] -right-4 sm:-right-6",
                  "bottom-[30%] -left-6 sm:-left-10",
                  "bottom-[5%] -right-2 sm:-right-8"
                ];

                return (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className={`absolute ${positions[idx]} w-12 h-12 sm:w-14 sm:h-14 rounded-2xl glass flex items-center justify-center text-foreground hover:text-white hover:bg-primary border border-white/10 shadow-xl transition-all duration-500 hover:scale-125 hover:rotate-0 z-30 ${rotations[idx]}`}
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 drop-shadow-md" />
                  </a>
                )
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
