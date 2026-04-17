"use client"

import { Badge } from "@/components/ui/badge"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

import { clients, Client } from "@/lib/data/clients"

const BeamLayer = ({ className, colorClass }: { className?: string; colorClass: string }) => (
  <svg
    viewBox="0 0 1000 400"
    preserveAspectRatio="none"
    className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] sm:w-[110%] ${className} ${colorClass}`}
  >
    <path d="M 0,0 C 400,253 600,253 1000,0 L 1000,400 C 600,146 400,146 0,400 Z" className="fill-current" />
  </svg>
)

export function Clients() {
  //Saber si el modal esta abierto o cerrado
  const [isOpen, setIsOpen] = useState(false)

  // 2. Estado para guardar toda la información del cliente que seleccionamos
  // El "typeof clients[0]" es para que TypeScript sepa qué forma tiene el objeto cliente
  const [selectedClient, setSelectedClient] = useState<typeof clients[0] | null>(null)

  // 3. Función para abrir el modal y cargar los datos del cliente
  const handleOpenModal = (client: typeof clients[0]) => {
    setSelectedClient(client) //Guardamos el cliente seleccionado
    setIsOpen(true) //Abrimos el modal
  }
  return (


    <section id="clients" className="relative py-32 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent z-0" />

      <div className="relative z-10 max-w-[1400px] mx-auto">
        {/* Encabezado Principal Integrado */}
        <div className="relative z-10 w-full flex flex-col items-center justify-center mb-16 px-4">
          <h1
            className="text-[18vw] md:text-[14vw] lg:text-[9vw] tracking-tighter text-center whitespace-nowrap bg-clip-text text-transparent leading-[0.8] pointer-events-none select-none drop-shadow-sm pb-4 md:pb-6 py-4 md:py-6"
            style={{
              backgroundImage: "linear-gradient(180deg, rgba(116, 122, 255, 1) 0%, rgba(77, 86, 255, 0.8) 60%, transparent 100%)"
            }}
          >
            Algunos trabajos
          </h1>
          <p className="text-lg md:text-3xl font-light text-center max-w-3xl md:-mt-4 lg:-mt-6 tracking-wide drop-shadow-md relative z-20">
            adaptados a la marca y al gusto del cliente.
          </p>
        </div>

        {/* Infinite scroll carousel - Modern Card Style */}
        <div className="relative flex overflow-hidden group/track rounded-3xl bg-secondary/5 border border-border/5 -mt-6">
          {/* Figma-style Horizontal Hourglass Glow (Restricted to Carousel Track) */}
          <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-[500px] pointer-events-none z-0 opacity-50 dark:opacity-80">
            <BeamLayer colorClass="text-[#4a53e0]/60 dark:text-[#1c1e45]/80" className="h-[500px] blur-[80px] sm:blur-[100px]" />
            <BeamLayer colorClass="text-[#6b73fe]/70" className="h-[300px] blur-[30px] sm:blur-[40px]" />
            <BeamLayer colorClass="text-[#c1c4ff] dark:text-white/90" className="h-[100px] blur-[20px] sm:blur-[24px]" />
          </div>

          {/* Gradient masks for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 z-20 bg-gradient-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 z-20 bg-gradient-to-l from-background to-transparent pointer-events-none" />

          {/* Track scrolling container */}
          <div className="flex gap-6 md:gap-8 px-4 animate-scroll-continuous hover:[animation-play-state:paused] py-10">
            {[...clients, ...clients, ...clients].map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                onClick={() => handleOpenModal(client)}
                className="relative flex-shrink-0 w-[280px] sm:w-[320px] md:w-[380px] h-[400px] md:h-[480px] rounded-3xl overflow-hidden glass-card group cursor-pointer transition-all duration-700 ease-out hover:scale-[1.05] hover:-translate-y-2 hover:z-30 border border-border/40 hover:border-primary/50 shadow-lg hover:shadow-2xl hover:shadow-primary/20 group-hover/track:opacity-50 hover:!opacity-100"
              >
                {/* Background Image */}
                <Image
                  src={client.image || "/images/profile.jpg"}
                  fill
                  className="object-cover opacity-100 mix-blend-overlay"
                  alt={client.name}
                />
                <div className="absolute inset-0 bg-secondary/30 transition-transform duration-1000 group-hover:scale-110" />

                {/* Custom Gradient derived from Pinterest reference */}
                <div className={`absolute inset-0 bg-gradient-to-tr ${client.gradient} opacity-60 group-hover:opacity-100 transition-opacity duration-700 mix-blend-soft-light`} />
                <div className={`absolute -bottom-20 -right-20 w-64 h-64 bg-gradient-to-tl ${client.gradient} rounded-full blur-3xl opacity-40 group-hover:opacity-80 transition-all duration-700 group-hover:scale-150`} />

                {/* Card Content Layer */}
                <div className="relative h-full flex flex-col p-6 md:p-8 justify-between z-10">
                  {/* Top bar: Client info + Icon */}
                  <div className="flex justify-between items-start opacity-70 group-hover:opacity-100 transition-all duration-500">
                    <div className="flex items-center gap-3">
                      {/* Avatar / Logo */}
                      <div className="w-10 h-10 relative rounded-full bg-background/50 backdrop-blur-sm flex items-center justify-center font-bold text-sm text-foreground/80 border border-border/50 overflow-hidden">
                        {client.logo ? (
                          <Image src={client.logo} fill className="object-cover" alt={`${client.name} logo`} />
                        ) : (
                          client.name.substring(0, 2).toUpperCase()
                        )}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold tracking-wide text-foreground">{client.name}</span>
                        <span className="text-[11px] text-muted-foreground uppercase tracking-widest">{client.role}</span>
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-background/20 backdrop-blur-md flex items-center justify-center border border-border/30 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors">
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>

                  {/* Big Minimal Typography Message */}
                  <div className="mt-auto transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium leading-[1.1] tracking-tight text-foreground text-balance">
                      {client.quote}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- CÓDIGO DEL MODAL --- */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[900px] bg-background/10 backdrop-blur-xl border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] max-h-[85vh] overflow-y-auto overflow-x-hidden custom-scrollbar">

          {/* Solo mostramos el contenido si hay un cliente seleccionado */}
          {selectedClient && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-4 mb-4">
                  {/* El Logo en el Modal */}
                  <div className="w-32 h-32 relative rounded-xl border border-border/30 overflow-hidden bg-secondary/50">
                    {selectedClient.logo ? (
                      <Image
                        src={selectedClient.logo}
                        fill
                        className="object-cover"
                        alt="Logo"
                      />
                    ) : (
                      <span className="flex items-center justify-center w-full h-full text-xl font-bold">
                        {selectedClient.name.substring(0, 2).toUpperCase()}
                      </span>
                    )}
                  </div>
                  <div>
                    {/* Título y Rol en el Modal */}
                    <DialogTitle className="text-4xl font-bold">
                      {selectedClient.name}
                    </DialogTitle>
                    <p className="text-lg text-muted-foreground uppercase tracking-widest mt-1">
                      {selectedClient.role}
                    </p>
                  </div>
                </div>
              </DialogHeader>

              {/* Descripción (acá podés cambiarlo si luego en la lista de clients agregás un campo 'description') */}
              <div className="text-lg text-foreground/90 leading-relaxed font-medium">
                "{selectedClient.quote}"
              </div>
              <p className="text-md text-muted-foreground mt-1">
                {selectedClient.description}
              </p>

              {/* Galería / Collage */}
              {selectedClient.gallery && selectedClient.gallery.length > 0 && (
                <div className="mt-6 mb-2">
                  <h4 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-widest">
                    Galería del Proyecto
                  </h4>
                  <div className="columns-2 md:columns-3 gap-3 space-y-3">
                    {selectedClient.gallery.map((mediaUrl, i) => {
                      const isVideo = mediaUrl.match(/\.(mp4|webm|mov)$/i);
                      return (
                        <div
                          key={i}
                          className="relative rounded-xl overflow-hidden break-inside-avoid group"
                        >
                          {isVideo ? (
                            <video
                              src={mediaUrl}
                              className="w-full h-auto rounded-xl object-cover hover:scale-105 transition-transform duration-500"
                              autoPlay
                              muted
                              loop
                              playsInline
                            />
                          ) : (
                            <img
                              src={mediaUrl}
                              className="w-full h-auto rounded-xl object-cover hover:scale-105 transition-transform duration-500"
                              alt={`Galería ${selectedClient.name} ${i + 1}`}
                              loading="lazy"
                            />
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>

      <style jsx global>{`
        /* Custom scrollbar for modal - Needs to be global because Radix mounts outside component */
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.1);
          border-radius: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(107, 115, 254, 0.2); /* Mismo purpura pero más sutil */
          border-radius: 8px;
          border: 1px solid rgba(255,255,255,0.05); /* Borde vidriado */
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(107, 115, 254, 0.5);
        }
      `}</style>

      <style jsx>{`
        @keyframes scroll-continuous {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 1.5rem)); /* Adjust based on gap */ }
        }
        .animate-scroll-continuous {
          /* Using a longer duration ensures a smooth, majestic pan for large cards */
          animation: scroll-continuous 70s linear infinite;
          width: max-content;
        }
        @media (max-width: 768px) {
          .animate-scroll-continuous {
            animation-duration: 55s;
          }
        }
      `}</style>
    </section>
  )
}
