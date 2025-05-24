"use client"

import { ChevronDown, Search } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { NavButton } from '../../components/routing'

export default function MensajeriaPage() {
  const [selectedPlatform, setSelectedPlatform] = useState("Whatsapp")
  const [messageText, setMessageText] = useState(
    "Hola, somos una plataforma de streaming diseñada para ofrecer contenido digital de alta calidad, en cualquier momento y lugar. Nos especializamos en la tran",
  )
  const [feedbackType, setFeedbackType] = useState("Esperando")

  return (
    <div className="min-h-screen ">
      {/* Header/Navigation */}
      <header className="bg-[#E6E6E6] p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                <path d="M8 5.14v14l11-7-11-7z" />
              </svg>
            </div>
            <span className="text-xl font-bold text-blue-600">StreamingCRM</span>
          </div>

          <div className="relative mx-4">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
            <div className="h-10 w-10 rounded-full border border-gray-300 bg-white"></div>
          </div>

          <nav className="flex flex-1 items-center justify-center gap-2">
             <NavButton iconSrc="/home-icon.png" label="Inicio" href="/"  />
            <NavButton iconSrc="/anadir-amigo-icon.png" label="Prospectos" href="/prospectos"  />
            <NavButton iconSrc="/correo-electronico-icon.png" label="Mensajería" href="/mensajeria" active={true}  />
            <NavButton iconSrc="/actividades-icon.png" label="Actividades" href="/actividades" />
            <NavButton iconSrc="/logout-icon.png" label="Salir" href="/logout" />

          </nav>
        </div>
      </header>


      <main className="container flex h-[calc(100vh-64px)] gap-4 pt-8 bg-[#F3F3FF]">
        {/* Left Panel - Contact Info */}
        <div className="w-1/3 space-y-4">
          <div className="rounded-lg  p-4">

            <div className="flex items-center gap-3">
              <h3 className="text-lg font-semibold">Juan Carlos Pereira Mejia</h3>
              <span className="rounded bg-blue-600 px-2 py-1 text-xs text-white">NEW</span>
            </div>

            {/* Contact Details */}
            <div className="">
              <div className="flex items-start gap-6">
                {/* Icono de usuario a la izquierda */}
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gray-800 text-white">
                  <UserIcon />
                </div>

                {/* Campos Edad, País, Tendencia a la derecha */}
                <div className="pl-30">
                  <div>
                    <span className="font-semibold">Edad</span>
                    <div>24</div>
                  </div>
                  <div>
                    <span className="font-semibold">País</span>
                    <div>Mexico</div>
                  </div>
                  <div>
                    <span className="font-semibold">Tendencia</span>
                    <div>Drama</div>
                  </div>
                </div>
              </div>


              {/* Contact Methods */}
              <div className="space-y-2">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="text-center">
                    <div className="font-semibold">Whatsapp</div>
                    <div>+59178932232</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold">Correo</div>
                    <div>JcPereira@hotmail.com</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="text-center">
                    <div className="font-semibold">telegram</div>
                    <div>Periira_56_2</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold">Correo alternativo</div>
                    <div>JcMejiaPereira@gmail.com</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="text-center">
                    <div className="font-semibold">Tiktok</div>
                    <div>JCPereira225</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold">Instagram</div>
                    <div>Susana Delgado Mercado</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="text-center">
                    <div className="font-semibold">telegram</div>
                    <div>PeriraJC2025_50</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold">Facebook</div>
                    <div>Juan C Pereira Mejia</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="text-center">
                    <div className="font-semibold">Tiktok</div>
                    <div>perira_mejiaDelr225</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold">Instagram</div>
                    <div>Juan Pereira Mejia</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Platform Selection Buttons */}
            <div className="grid grid-cols-3 gap-2">
              <PlatformButton
                label="Tiktok"
                active={selectedPlatform === "Tiktok"}
                onClick={() => setSelectedPlatform("Tiktok")}
              />
              <PlatformButton
                label="Correo"
                active={selectedPlatform === "Correo"}
                onClick={() => setSelectedPlatform("Correo")}
              />
              <PlatformButton
                label="Facebook"
                active={selectedPlatform === "Facebook"}
                onClick={() => setSelectedPlatform("Facebook")}
              />
              <PlatformButton
                label="Whatsapp"
                active={selectedPlatform === "Whatsapp"}
                onClick={() => setSelectedPlatform("Whatsapp")}
              />
              <PlatformButton
                label="Telegram"
                active={selectedPlatform === "Telegram"}
                onClick={() => setSelectedPlatform("Telegram")}
              />
              <PlatformButton
                label="Instagram"
                active={selectedPlatform === "Instagram"}
                onClick={() => setSelectedPlatform("Instagram")}
              />
            </div>
          </div>
        </div>

        {/* Right Panel - Messages */}
        <div className="flex w-2/3 flex-col h-[calc(100vh-120px)] rounded-lg border-4 border-[#00A3C4] p-4">
          {/* Message History */}
          <div className="flex-1 space-y-3 overflow-y-auto rounded-lg border-4 border-[#00A3C4] p-2">
            {/* Automated Messages */}
            <div className="flex justify-end mb-3">
              <div className="max-w-[70%]  border-4 border-[#00A3C4] rounded-xl rounded-br-none p-3">
                <div className="mb-1 flex items-center justify-between">
                  <span className="font-semibold">Se envie enlace de video de presentacion</span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-blue-600">08 mayo, 2025 - 10:23 AM</span>
                    <CheckmarkIcon />
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Se envia un el cuarto mensaje de presentación para el contacto de México
                </p>
              </div>
            </div>

            <div className="flex justify-end mb-3">
              <div className="max-w-[70%]  border-4 border-[#00A3C4] rounded-xl rounded-br-none p-3">
                <div className="mb-1 flex items-center justify-between">
                  <span className="font-semibold">Se envie enlace de video de presentacion</span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-blue-600">08 mayo, 2025 - 10:23 AM</span>
                    <CheckmarkIcon />
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Se envia un el cuarto mensaje de presentación para el contacto de México
                </p>
              </div>
            </div>

            <div className="flex justify-end mb-3">
              <div className="max-w-[70%]  border-4 border-[#00A3C4] rounded-lg p-3">
                <div className="mb-1 flex items-center justify-between">
                  <span className="font-semibold">Se envie enlace de video de presentacion</span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-blue-600">08 mayo, 2025 - 10:23 AM</span>
                    <CheckmarkIcon />
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Se envia un el cuarto mensaje de presentación para el contacto de México
                </p>
              </div>
            </div>

            {/* Customer Response */}
            <div className="flex justify-start mb-3">
              <div className="max-w-[70%]  border-4 border-[#4A4A68] rounded-lg p-3">
                <div className="mb-1 flex items-center justify-between">
                  <span className="font-semibold">
                    Me interesa el servicio que brindan, ¿podrían darme más información?
                  </span>
                  <span className="text-xs text-blue-600">08 mayo, 2025 - 10:23 AM</span>
                </div>
                <p className="text-sm">
                  Me interesa el servicio que ofrecen me gustaría que me envíen más información
                </p>
              </div>
            </div>


            <div className="flex justify-end mb-3">
              <div className="max-w-[70%]  border-4 border-[#00A3C4] rounded-lg p-3">
                <div className="mb-1 flex items-center justify-between">
                  <span className="font-semibold">Se envie enlace de video de presentacion</span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-blue-600">08 mayo, 2025 - 10:23 AM</span>
                    <CheckmarkIcon />
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Se envia un el cuarto mensaje de presentación para el contacto de México
                </p>
              </div>
            </div>

            {/* Customer Response */}
            <div className="flex justify-start ">
              <div className="max-w-[70%]  border-4 border-[#4A4A68] rounded-lg p-3">
                <div className="mb-1 flex items-center justify-between">
                  <span className="font-semibold">
                    Me interesa el servicio que brindan, ¿podrían darme más información?
                  </span>
                  <span className="text-xs text-blue-600">08 mayo, 2025 - 10:23 AM</span>
                </div>
                <p className="text-sm">
                  Me interesa el servicio que ofrecen me gustaría que me envíen más información
                </p>
              </div>
            </div>



          </div>

          {/* Message Composition */}
          <div className="mt-2 rounded-lg border-4 border-[#00A3C4] p-2">
            <div className=" flex gap-4">
              <div className="flex-1">
                <div className="flex items-center justify-between rounded border-4 border-[#4A4A68] px-3 ">
                  <span>Seleccionar Mensaje</span>
                  <ChevronDown className="h-4 w-4" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between rounded border-4 border-[#4A4A68] px-3">
                  <span>Dirección de Correo</span>
                  <ChevronDown className="h-4 w-4" />
                </div>
              </div>
            </div>

            <div >
              <div className=" text-sm">Retro alimentacion del mensaje anterior</div>
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="feedback"
                    value="Bueno"
                    checked={feedbackType === "Bueno"}
                    onChange={(e) => setFeedbackType(e.target.value)}
                  />
                  <span>Bueno</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="feedback"
                    value="Regular"
                    checked={feedbackType === "Regular"}
                    onChange={(e) => setFeedbackType(e.target.value)}
                  />
                  <span>Regular</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="feedback"
                    value="Esperando"
                    checked={feedbackType === "Esperando"}
                    onChange={(e) => setFeedbackType(e.target.value)}
                  />
                  <span>Esperando</span>
                  <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                </label>
              </div>
            </div>

            <div className=" text-sm">Observacion de la interaccion</div>
            <div className="flex gap-2 border-[#00A3C4] border-4 rounded-lg p-2">
              <textarea
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                className="flex-1 border-[#00A3C4] border-4 rounded-lg bg-[#F3F3FF]  text-sm"
                rows={3}
                placeholder="Escribe tu mensaje aquí..."
              />
              <Button className="bg-[#4A4A68] px-6 hover:bg-indigo-800">Enviar</Button>
            </div>
          </div>


        </div>
      </main>
    </div>
  )
}

// Platform Button Component
function PlatformButton({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-md border-4 border-[#4A4A68]  text-sm font-medium ${active ? "bg-[#4A4A68] text-white" : "border-[#4A4A68] bg-[#F3F3FF] text-gray-700 hover:bg-gray-50"
        }`}
    >
      {label}
    </button>
  )
}





function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}




function CheckmarkIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  )
}
