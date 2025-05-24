"use client"
import { ChevronLeft, ChevronRight, Eye, Search } from "lucide-react"
import { useState } from "react";
import { NavButton } from '../../components/routing'

export default function BitacoraPage() {
  const [tab, setTab] = useState<"prospectos" | "moderador">("prospectos");
  const [selectedActivity, setSelectedActivity] = useState<number | null>(null)

  const openActivityModal = (index: number) => {
    setSelectedActivity(index)
  }

  const closeActivityModal = () => {
    setSelectedActivity(null)
  }
  return (
    <div className="min-h-screen bg-[#F3F3FF]">
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
            <NavButton iconSrc="/anadir-amigo-icon.png" label="Prospectos" href="/prospectos" />
            <NavButton iconSrc="/correo-electronico-icon.png" label="Mensajería" href="/mensajeria" />
            <NavButton iconSrc="/actividades-icon.png" label="Actividades" href="/actividades"  active={true}/>
            <NavButton iconSrc="/logout-icon.png" label="Salir" href="/logout" />

          </nav>
        </div>
      </header>

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
            <div className="flex items-center">
              <button className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-900 text-white">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="mx-2 rounded-md  border-4 border-[#4A4A68]  bg-[#F3F3FF] px-8 py-2 text-center">Hoy</div>
              <button className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-900 text-white">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

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

        {/* Tabs: Prospectos / Moderador */}
        <div className="mb-6 flex flex-col items-start">
          <div className="relative flex gap-8">
            <button
              onClick={() => setTab("prospectos")}
              className={`relative pb-1 font-medium ${tab === "prospectos" ? "text-blue-600" : "text-gray-800"
                }`}
            >
              Prospectos
            </button>
            <button
              onClick={() => setTab("moderador")}
              className={`relative pb-1 font-medium ${tab === "moderador" ? "text-blue-600" : "text-gray-800"
                }`}
            >
              Moderador
            </button>

            {/* Barra azul animada debajo del botón activo */}
            <div
              className="absolute bottom-0 h-1 bg-blue-600 transition-all duration-300 rounded-full"
              style={{
                width: "100px", // ajusta al ancho de "Prospectos" o "Moderador"
                left: tab === "prospectos" ? "0px" : "115px", // depende del gap
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
              {activityData.map((activity, index) => (
                <tr key={index} className={`border-b-4 border-[#00A3C4] ${index % 2 === 0 ? "bg-[#F3F3FF]" : "bg-[#F3F3FF]"}`}>
                  <td className="p-4">{activity.fecha}</td>
                  <td className="p-4">{activity.hora}</td>
                  <td className="p-4">{activity.actividad}</td>
                  <td className="p-4">{activity.canal || ""}</td>
                  <td className="p-4">{activity.prospecto}</td>
                  <td className="max-w-xs p-4 text-sm">{activity.resultado}</td>
                  <td className="max-w-xs p-4 text-sm">{activity.recomendacion}</td>
                  <td className="p-4">
                    <button className="rounded-full p-1 hover:bg-gray-100" onClick={() => openActivityModal(index)}>
                      <Eye className="h-5 w-5 text-gray-600" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Activity Detail Modal */}
        {selectedActivity !== null && (
          <ActivityDetailModal activity={activityData[selectedActivity]} onClose={closeActivityModal} />
        )}
      </main>
    </div>
  )
}



// Activity Data
const activityData = [
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
function ActivityDetailModal({ activity, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center ">
      {/* Overlay */}
      <div className="fixed inset-0 bg-[#5A586E]/50 z-40" onClick={onClose} />
      {/* Modal */}
      <div className="relative z-10 w-full max-w-2xl rounded-lg bg-[#B4C5EF] p-4 mx-4">
        <div className="space-y-2">
          {/* Header Row */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Título</label>
              <div className="rounded-md border-4 border-[#4A4A68] bg-[#B4C5EF] px-4 py-2">{activity.fecha}</div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Hora</label>
              <div className="rounded-md border-4 border-[#4A4A68] bg-[#B4C5EF] px-4 py-2">{activity.hora}</div>
            </div>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Actividad</label>
              <div className="rounded-md border-4 border-[#4A4A68] bg-[#B4C5EF] px-4 py-2">{activity.actividad}</div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Canal</label>
              <div className="rounded-md border-4 border-[#4A4A68] bg-[#B4C5EF] px-4 py-2">
                {activity.canal || "N/A"}
              </div>
            </div>
          </div>

          {/* Prospect Row */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Prospecto</label>
            <div className="rounded-md border-4 border-[#4A4A68] bg-[#B4C5EF] px-4 py-2">{activity.prospecto}</div>
          </div>

          {/* Result Section */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Resultado</label>
            <div className="rounded-md border-4 border-[#4A4A68] bg-[#B4C5EF] px-4 py-3 min-h-[120px]">
              {activity.resultadoCompleto || activity.resultado}
            </div>
          </div>

          {/* Recommendation Section */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Recomendación</label>
            <div className="rounded-md border-4 border-[#4A4A68] bg-[#B4C5EF] px-4 py-3 min-h-[80px]">
              {activity.recomendacionCompleta || activity.recomendacion}
            </div>
          </div>

          {/* Close Button */}
          <div className="flex justify-center pt-4">
            <button
              onClick={onClose}
              className="w-full max-w-xs bg-[#4A4A68] text-white py-3 px-6 rounded-md hover:bg-[#3A3A58] transition-colors"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
