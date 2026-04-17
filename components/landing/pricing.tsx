"use client"

import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const services = [
  {
    name: "Estrategia & Planificación",
    description: "Desarrollo de planes estratégicos a medida para alcanzar los objetivos de tu marca a corto y largo plazo.",
    icon: "/images/estrategia_y_planificacion.png"
  },
  {
    name: "Gestión de Redes",
    description: "Administración profesional de comunidades para construir audiencias leales y potenciar el engagement.",
    icon: "/images/gestion_de_redes_sociales.png"
  },
  {
    name: "Creación de Contenido",
    description: "Desarrollo de formatos atractivos (reels, posts, stories) que retengan la atención de tu público ideal.",
    icon: "/images/creacion_de_contenido.png"
  },
  {
    name: "Fotografía",
    description: "Producción fotográfica de alta calidad profesional para mostrar productos o servicios en su mejor versión.",
    icon: "/images/fotografia.png"
  },
  {
    name: "Diseño Gráfico",
    description: "Creación de una identidad visual consistente que posicione tu marca y la distinga de sus competidores.",
    icon: "/images/diseño_grafico.png"
  },
  {
    name: "Meta Ads",
    description: "Gestión y optimización de campañas publicitarias en Meta para multiplicar tu alcance y conversiones.",
    icon: "/images/meta_ads.png"
  },
  {
    name: "Vuelos de Drone",
    description: "Fotografía y videografía aérea espectacular para producciones inmersivas y perspectivas únicas.",
    icon: "/images/vuelos_de_drone.png"
  },
  {
    name: "Servicios Personalizados",
    description: "Consultorías y soluciones adaptadas a las necesidades específicas y exclusivas de tu propio negocio.",
    icon: "/images/servicios_personalizados.png"
  }
]

export function Pricing() {
  return (
    <>
      <style>{`
        .service-card {
           position: relative;
           background: linear-gradient(180deg, rgba(18,19,43,0.7) 0%, rgba(10,12,25,0.9) 40%, rgba(74,83,224,0.3) 100%);
           border: 1px solid rgba(107,115,254,0.15);
           border-radius: 1.75rem;
           padding: 2rem 1.5rem;
           /* Se elimina el overflow: hidden para que la imagen pueda sobresalir */
           transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .card-glow-wrapper {
           position: absolute;
           inset: 0;
           overflow: hidden;
           border-radius: 1.75rem;
           pointer-events: none;
        }

        .card-glow {
           position: absolute;
           bottom: -50%;
           left: 50%;
           transform: translateX(-50%);
           width: 150%;
           height: 100%;
           background: radial-gradient(circle at center, rgba(107,115,254,0.3) 0%, transparent 65%);
           pointer-events: none;
           transition: all 0.4s ease;
        }

        
        .service-card:hover {
           transform: translateY(-8px);
           border-color: rgba(107,115,254,0.4);
           box-shadow: 0 15px 35px -10px rgba(74,83,224,0.3);
        }
        
        .service-card:hover .card-glow {
           background: radial-gradient(circle at center, rgba(143,149,255,0.45) 0%, transparent 70%);
        }
        
        .glow-side {
           position: absolute;
           top: 50%;
           transform: translateY(-50%);
           width: 500px;
           height: 800px;
           pointer-events: none;
           z-index: 0;
           filter: blur(100px);
           opacity: 0.8;
           border-radius: 50%;
        }
        .glow-left {
           left: -250px;
           background: radial-gradient(ellipse at center, rgba(107,115,254,0.18) 0%, transparent 70%);
        }
        .glow-right {
           right: -250px;
           background: radial-gradient(ellipse at center, rgba(107,115,254,0.18) 0%, transparent 70%);
        }
      `}</style>
      <section id="pricing" className="relative py-24 px-4 overflow-hidden">
        {/* Luz violeta en los bordes laterales */}
        <div className="glow-side glow-left"></div>
        <div className="glow-side glow-right"></div>

        {/* Encabezado Principal Integrado */}
        <div className="relative z-10 w-full flex flex-col items-center justify-center mb-16  px-4">
          <h1
            className="text-[18vw] md:text-[14vw] lg:text-[9vw] tracking-tighter text-center bg-clip-text gradient-text leading-[0.8] pointer-events-none select-none drop-shadow-sm py-4 md:py-6"
          >
            Soluciones digitales
          </h1>
          <p className="font-light text-lg md:text-3xl font-light text-center max-w-8xl mt-0 md:-mt-4 lg:-mt-6 tracking-wide drop-shadow-md relative z-20 pointer-events-none">
            Las herramientas que necesitas para que tu marca destaque y crezca en el mundo digital.
          </p>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">

          {/* Cards Grid: 4 columnas en desktop */}
          {/* Se agregan pt-8 o más mt en las cards para compensar las imágenes que sobresalen hacia arriba */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16 lg:gap-x-10 lg:gap-y-24 pt-6 pb-12">
            {services.map((service, i) => (
              <div key={i} className="service-card flex flex-col h-full mt-4 lg:mt-4">

                {/* Contenedor con overflow hidden solo para el glow */}
                <div className="card-glow-wrapper">
                  <div className="card-glow"></div>
                </div>

                <div className="relative z-10 flex flex-col h-full">
                  {/* Icono sobresaliendo en la esquina superior izquierda */}
                  <div className="self-start icon-center ml-12 -mt-26 mb-8 pointer-events-none">
                    <Image
                      src={service.icon}
                      alt={service.name}
                      width={140}
                      height={140}
                      className="object-contain drop-shadow-2xl"
                    />
                  </div>
                  {/* Contenido de texto */}
                  <h3 className="text-xl font-bold text-white mb-3 leading-tight z-10">{service.name}</h3>
                  <p className="text-sm text-gray-400 font-light leading-relaxed z-10">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
