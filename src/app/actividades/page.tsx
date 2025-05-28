"use client"
import { ChevronLeft, ChevronRight, Search } from "lucide-react"
import { useState, useEffect } from "react";
import Image from 'next/image'
import NextLink from "next/link"

interface Activity {
  fecha: string
  hora: string
  actividad: string
  canal: string
  prospecto: string
  resultado: string
  recomendacion: string
  // estos dos son opcionales — sólo si los usas
  resultadoCompleto?: string
  recomendacionCompleta?: string
}

// Activity Data
const prospectActivities = [
  {
    fecha: "15/05/2025",
    hora: "11:25 AM",
    actividad: "Llamada",
    canal: "Whatsapp",
    prospecto: "Roberto Salas Rome",
    resultado: "El prospecto confirmó su interés por el plan...",
    recomendacion: "Enviar el PDF de la promoción del plan ...",
  },
  {
    fecha: "15/05/2025",
    hora: "11:25 AM",
    actividad: "Rechazo",
    canal: "Messenger",
    prospecto: "Valentina Torres Delgado",
    resultado: "Prospecto rechazó la propuesta alegando...",
    recomendacion: "Agendar recordatorio para contactarla...",
  },
  {
    fecha: "15/05/2025",
    hora: "11:20 AM",
    actividad: "Estado Recien",
    canal: "",
    prospecto: "Martín Chávez Herrera",
    resultado: "Prospecto respondió mostrando interés ge...",
    recomendacion: "Enviar mensaje de seguimiento con pre...",
  },
  {
    fecha: "15/05/2025",
    hora: "11:15 AM",
    actividad: "Estado Suscripto",
    canal: "",
    prospecto: "Diego Herrera Castaño",
    resultado: "Prospecto atendió pero pidió que lo contacta...",
    recomendacion: "Agendar una nueva llamada para el mismo...",
  },
  {
    fecha: "15/05/2025",
    hora: "11:10 AM",
    actividad: "Mensaje",
    canal: "Kik",
    prospecto: "Lucía Mendoza Salazar",
    resultado: "Prospecto se mostró desinteresada y pidió...",
    recomendacion: "Marcar como no viable y archivar contacto",
  },
  {
    fecha: "15/05/2025",
    hora: "11:05 AM",
    actividad: "Llamada",
    canal: "Instagram",
    prospecto: "Andrés Rodríguez Varela",
    resultado: "Prospecto fue contactado hace más de un mes...",
    recomendacion: "Enviar mensaje de reactivación pregun...",
  },
  {
    fecha: "15/05/2025",
    hora: "11:00 AM",
    actividad: "Rechazo",
    canal: "Telegram",
    prospecto: "Carla Pineda Montoya",
    resultado: "Prospecto respondió positivamente y solicitó...",
    recomendacion: "Enviar brochure del servicio junto con video ...",
  },
  {
    fecha: "15/05/2025",
    hora: "10:55 AM",
    actividad: "Estado Hace tiempo",
    canal: "",
    prospecto: "Felipe Ramírez Guzmán",
    resultado: "Prospecto respondió mostrando interés ge...",
    recomendacion: "Enviar mensaje de seguimiento con pre...",
  },
  {
    fecha: "15/05/2025",
    hora: "10:50 AM",
    actividad: "Estado Recien",
    canal: "",
    prospecto: "Mariana López Fernández",
    resultado: "Prospecto atendió pero pidió que lo contacta...",
    recomendacion: "Agendar una nueva llamada para el mismo...",
  },
  {
    fecha: "15/05/2025",
    hora: "10:45 AM",
    actividad: "Estado Antiguo",
    canal: "",
    prospecto: "Daniel Jiménez Calderón",
    resultado: "Prospecto se mostró desinteresada y pidió...",
    recomendacion: "Marcar como no viable y archivar contacto",
  },
  {
    fecha: "15/05/2025",
    hora: "10:40 AM",
    actividad: "Estado Suscripto",
    canal: "",
    prospecto: "Sofía Castillo Benítez",
    resultado: "Prospecto fue contactado hace más de un mes...",
    recomendacion: "Enviar mensaje de reactivación pregun...",
  },
  {
    fecha: "15/05/2025",
    hora: "10:35 AM",
    actividad: "Mensaje",
    canal: "Telegram",
    prospecto: "Javier Morales Domínguez",
    resultado: "Prospecto respondió positivamente y solicitó...",
    recomendacion: "Enviar brochure del servicio junto con video ...",
  },
]

const moderadorActivities = [
  {
    fecha: "16/05/2025",
    hora: "09:00 AM",
    actividad: "Llamada",
    canal: "Whatsapp",
    prospecto: "Ana García López",
    resultado: "La prospecta mostró interés en el plan premium.",
    recomendacion: "Enviar cotización detallada por email."
  },
  {
    fecha: "16/05/2025",
    hora: "09:15 AM",
    actividad: "Mensaje",
    canal: "Telegram",
    prospecto: "Carlos Pérez Suárez",
    resultado: "No respondió tras varios intentos.",
    recomendacion: "Programar reintento mañana a primera hora."
  },
  {
    fecha: "16/05/2025",
    hora: "09:30 AM",
    actividad: "Rechazo",
    canal: "Messenger",
    prospecto: "Laura Fernández Jiménez",
    resultado: "Prospecta descartó la oferta por precio.",
    recomendacion: "Ofrecer plan básico con descuento."
  },
  {
    fecha: "16/05/2025",
    hora: "09:45 AM",
    actividad: "Estado Recien",
    canal: "",
    prospecto: "Miguel Torres Ramos",
    resultado: "Prospecto abrió el enlace pero no interactuó.",
    recomendacion: "Enviar recordatorio con beneficios clave."
  },
  {
    fecha: "16/05/2025",
    hora: "10:00 AM",
    actividad: "Estado Suscripto",
    canal: "",
    prospecto: "Sofía Ramírez Vela",
    resultado: "Ya está suscripta al boletín informativo.",
    recomendacion: "Invitarla a webinar de demostración."
  },
  {
    fecha: "16/05/2025",
    hora: "10:15 AM",
    actividad: "Llamada",
    canal: "Instagram",
    prospecto: "Diego Castillo Mena",
    resultado: "Respondió mensaje de voz, solicita más info.",
    recomendacion: "Enviar brochure y agendar llamada de seguimiento."
  },
  {
    fecha: "16/05/2025",
    hora: "10:30 AM",
    actividad: "Mensaje",
    canal: "Kik",
    prospecto: "María López Acosta",
    resultado: "Prospecta mostró curiosidad por la promoción.",
    recomendacion: "Enviar link a video explicativo del servicio."
  },
  {
    fecha: "16/05/2025",
    hora: "10:45 AM",
    actividad: "Rechazo",
    canal: "Telegram",
    prospecto: "Javier Montoya Rojas",
    resultado: "No está interesado en cambiar de proveedor.",
    recomendacion: "Dejar pasar un mes antes de recontactar."
  },
  {
    fecha: "16/05/2025",
    hora: "11:00 AM",
    actividad: "Estado Hace tiempo",
    canal: "",
    prospecto: "Patricia Salinas Durán",
    resultado: "Hace dos meses no hay respuesta.",
    recomendacion: "Marcar como prospecto frío y archivar."
  },
  {
    fecha: "16/05/2025",
    hora: "11:15 AM",
    actividad: "Estado Antiguo",
    canal: "",
    prospecto: "Roberto Quiroga Pérez",
    resultado: "Prospecto mostró interés inicial, luego silencio.",
    recomendacion: "Enviar encuesta breve para reactivar diálogo."
  },

]
export default function BitacoraPage() {
  const [tab, setTab] = useState<"prospectos" | "moderador">("prospectos");
  const [selectedActivity, setSelectedActivity] = useState<number | null>(null)

  const openActivityModal = (index: number) => {
    setSelectedActivity(index)
  }

  const closeActivityModal = () => {
    setSelectedActivity(null)
  }

  useEffect(() => {
    setSelectedActivity(null);
  }, [tab])
  const activities = tab === "prospectos" ? prospectActivities : moderadorActivities;
  return (
    <div className="min-h-screen bg-[#F3F3FF]">
      <main className="container mx-auto p-4">
        {/* Search and Filters */}
        <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="relative w-full md:w-2/3 bg-[#F3F3FF] border-4 border-[#4A4A68] rounded-md">
            <input
              type="text"
              placeholder="Buscar una actividad"
              className="w-full rounded-md border border-gray-300 bg-[#F3F3FF] py-2 pl-4 pr-10 text-gray-700"
            />
            <Search className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
          </div>
          <div className="flex items-center gap-4">
            {/* Date Pagination */}
            <div className="flex items-center">
              <button className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-900 text-white">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="mx-2 rounded-md border-4 border-[#4A4A68] bg-[#F3F3FF] px-8 py-2 text-center">Hoy</div>
              <button className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-900 text-white">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
            {/* Filter Pagination */}
            <div className="flex items-center">
              <button className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-900 text-white">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="mx-2 rounded-md border-4 border-[#4A4A68] bg-[#F3F3FF] px-8 py-2 text-center">Todos</div>
              <button className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-900 text-white">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-6 flex flex-col items-start">
          <div className="relative flex gap-8">
            <button
              onClick={() => setTab("prospectos")}
              className={`relative pb-1 font-medium ${tab === "prospectos" ? "text-blue-600" : "text-gray-800"}`}
            >
              Prospectos
            </button>
            <button
              onClick={() => setTab("moderador")}
              className={`relative pb-1 font-medium ${tab === "moderador" ? "text-blue-600" : "text-gray-800"}`}
            >
              Moderador
            </button>
            <div
              className="absolute bottom-0 h-1 bg-blue-600 transition-all duration-300 rounded-full"
              style={{
                width: tab === "prospectos" ? "100px" : "115px",
                left: tab === "prospectos" ? "0px" : "115px",
              }}
            />
          </div>
        </div>

        {/* Activity Table */}
        <div className="overflow-x-auto rounded-lg border-4 border-[#00A3C4]">
          <table className="w-full border-collapse bg-white">
            <thead>
              <tr className="border-b-4 border-[#00A3C4] bg-[#F3F3FF] text-left">
                <th className="p-4 font-semibold text-gray-700">Fecha</th>
                <th className="p-4 font-semibold text-gray-700">Hora</th>
                <th className="p-4 font-semibold text-gray-700">Actividad</th>
                <th className="p-4 font-semibold text-gray-700">Canal</th>
                <th className="p-4 font-semibold text-gray-700">Prospecto</th>
                <th className="p-4 font-semibold text-gray-700">Resultado</th>
                <th className="p-4 font-semibold text-gray-700">Recomendación</th>
                <th className="p-4 font-semibold text-gray-700">Acción</th>
              </tr>
            </thead>
            <tbody>
              {activities.map((activity, index) => (
                <tr key={index} className="border-b-4 border-[#00A3C4] bg-[#F3F3FF]">
                  <td className="p-4">{activity.fecha}</td>
                  <td className="p-4">{activity.hora}</td>
                  <td className="p-4">{activity.actividad}</td>
                  <td className="p-4">{activity.canal || ""}</td>
                  <td className="p-4">{activity.prospecto}</td>
                  <td className="max-w-xs p-4 text-sm">{activity.resultado}</td>
                  <td className="max-w-xs p-4 text-sm">{activity.recomendacion}</td>
                  <td className="p-4">
                    <NextLink
                      href="#"
                      onClick={(e) => {
                        e.preventDefault()
                        openActivityModal(index)
                      }}
                      className="rounded-full p-1 hover:bg-gray-100 inline-flex"
                    >
                      <Image
                        src="/expandir.png"
                        alt="Expandir detalles"
                        className="h-5 w-5"
                        width={20}
                        height={20}
                      />
                    </NextLink>

                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Detail Modal */}
        {selectedActivity !== null && (
          <ActivityDetailModal activity={activities[selectedActivity]} onClose={closeActivityModal} />
        )}
      </main>
    </div>
  )
}




function ActivityDetailModal({
  activity,
  onClose,
}: {
  activity: Activity
  onClose: () => void
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-[#5A586E]/50 z-40" onClick={onClose} />
      <div className="relative z-10 w-full max-w-2xl rounded-lg bg-[#B4C5EF] p-4 mx-4">
        <div className="space-y-2">
          {/* Header Row */}
          <div className="grid grid-cols-2 gap-4">
            <DetailField label="Fecha" value={activity.fecha} />
            <DetailField label="Hora" value={activity.hora} />
          </div>
          {/* Second Row */}
          <div className="grid grid-cols-2 gap-4">
            <DetailField label="Actividad" value={activity.actividad} />
            <DetailField label="Canal" value={activity.canal || "N/A"} />
          </div>
          <DetailField label="Prospecto" value={activity.prospecto} />
          <DetailField label="Resultado" value={activity.resultadoCompleto || activity.resultado} multiline />
          <DetailField label="Recomendación" value={activity.recomendacionCompleta || activity.recomendacion} multiline />
          <div className="flex justify-center pt-4">
            <button
              onClick={onClose}
              className="w-full max-w-xs bg-[#4A4A68] text-white py-3 px-6 rounded-md hover:bg-[#3A3A58] transition-colors"
            >Cerrar</button>
          </div>
        </div>
      </div>
    </div>
  )
}
function DetailField({ label, value, multiline }: { label: string; value: string; multiline?: boolean }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <div className={`rounded-md border-4 border-[#4A4A68] bg-[#B4C5EF] px-4 py-2 ${multiline ? 'min-h-[80px]' : ''}`}>{value}</div>
    </div>
  )
}
// This component displays the details of an activity in a modal format