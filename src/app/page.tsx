"use client";
import { ChevronLeft, ChevronRight, Clock, Plus, Search, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { useState } from "react"
import {
  UserIcon,
  FunnelIcon,
  WhatsappIcon,
  SubscriptionIcon,
} from "@/components/icons/Icons";

//[#F3F3FF]F3F3FF 
export default function Dashboard() {
  const [showTaskModal, setShowTaskModal] = useState(false)
  return (
    <div className="min-h-screen bg-[#F3F3FF]  ">
      
      <main className="container mx-auto p-4 ">
        {/* Key Metrics Section */}
        <div className="mb-2 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-800">Métricas Claves</h2>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" className="h-8 w-8 rounded-full  bg-[#4A4A68] text-white">
              <ChevronLeft className="h-4 w-4 " />
            </Button>
            <span className="rounded-md border-4 border-[#4A4A68]  px-4 py-1">1 semana</span>
            <Button variant="outline" size="icon" className="h-8 w-8 rounded-full  bg-[#4A4A68] text-white">
              <ChevronRight className="h-4 w-4" />
            </Button>
            <span className="ml-4 rounded-md border-4 border-[#4A4A68]  px-4 py-1">Mayo</span>
          </div>
        </div>


        {/* Metrics Cards   border-4 border-[#00A3C4] rounded-md*/}
        <div className="mb-2 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-5">
          <MetricCard icon={<FunnelIcon />} title="Tiempo promedio de conversión" value="22 hrs" />
          <MetricCard icon={<SubscriptionIcon />} title="Tasa de suscripción" value="60 %" />
          <MetricCard icon={<WhatsappIcon />} title="Canal de comunicación con mayor efectividad" value="70 %" />
          <MetricCard icon={<UserIcon />} title="Prospectos suscritos" value="1,000" />
          <Card className="flex flex-col p-4 bg-[#F3F3FF]  border-4 border-[#00A3C4] rounded-lg">
            <h3 className=" text-center font-medium">Objetivo de Suscripciones por mes</h3>
            <div className="mt-auto">
              <div className=" flex justify-between">
                <span className="text-sm">50 %</span>
                <span className="text-sm">1,000</span>
              </div>
              <Progress value={50} className="h-2" />
              <div className="text-center">
                <span className="font-medium">500</span>
              </div>
              <Progress value={50} className=" h-1" />
            </div>
          </Card>


        </div>

        {/* Additional Metrics */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-5">
          <StatCard label="Total de suscriptores:" value="15,000" />
          <StatCard label="Total de prospectos:" value="7,000" />
          <StatCard label="Prospectos nuevos:" value="200" />
          <StatCard label="Respuesta a solicitudes:" value="100" />
          <StatCard label="Prospectos a renovar:" value="400" />
        </div>


        {/* Tasks Section */}
        <div className="mb-1 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <h2 className="text-2xl font-bold text-gray-800">Tareas Pendientes</h2>
          </div>
        </div>



        {/* Tasks Cards */}
        <div className="relative overflow-hidden  border-4 border-[#00A3C4] rounded-lg  p-2">
          <Button
            variant="outline"
            size="icon"
            className="absolute left-2 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full  bg-[#4A4A68] text-white"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            <TaskCard
              title="Seguimiento a Susana Delgado"
              description="Realizar un seguimiento personalizado a Susana Delgado, quien mostró interés en el plan premium hace 3 días."
              time="12:00 PM"
              type="Seguimiento"
            />

            <TaskCard
              title="Enviar promoción mensual a clientes activos"
              description="Redactar y enviar un correo promocional destacando los estrenos del mes y los beneficios del plan anual."
              time="08:00 PM"
              type="Promoción"
            />

            <TaskCard
              title="Revisar renovación de cuentas premium"
              description="Verificar que las cuentas premium configuradas con renovación automática no existan fallos en la facturación."
              time="12:00 PM"
              type="Revisión"
            />
            <button
              onClick={() => setShowTaskModal(true)}

            >
              <div className="flex items-center justify-center rounded-lg border-4 border-[#00A3C4] p-14">
                <div className="flex flex-col items-center">
                  <div className="mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-[#4A4A68] text-white hover:bg-[#B4C5EF]">
                    <Plus className="h-8 w-8 " />
                  </div>
                  <span className="text-lg font-medium">Agregar Tarea</span>
                </div>
              </div>
            </button>

            <Button
              variant="outline"
              size="icon"
              className="absolute right-2 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full  bg-[#4A4A68] text-white"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {showTaskModal && (
          <TaskModal
            onClose={() => setShowTaskModal(false)}
            onSave={(taskData) => {
              console.log("Nueva tarea:", taskData)
              setShowTaskModal(false)
            }}
          />
        )}




      </main>
    </div>
  )
}
function TaskModal({ onClose, onSave }) {
  const [formData, setFormData] = useState({
    titulo: "",
    prospecto: "",
    tipoActividad: "",
    hora: "",
    descripcion: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave(formData)
  }

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay  fixed inset-0 bg-[#5A586E]/50 z-40*/}
    <div className="fixed inset-0 bg-black opacity-50"></div>



      {/* Modal */}
      <div className="relative z-10 w-full max-w-md rounded-lg bg-[#C8C8E6] p-6 mx-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Título */}
          <div>
            <input
              type="text"
              placeholder="Título"
              value={formData.titulo}
              onChange={(e) => handleInputChange("titulo", e.target.value)}
              className="w-full rounded-md border-2 border-[#4A4A68] bg-[#C8C8E6] px-4 py-3 text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Prospecto */}
          <div className="relative">
            <input
              type="text"
              placeholder="Prospecto"
              value={formData.prospecto}
              onChange={(e) => handleInputChange("prospecto", e.target.value)}
              className="w-full rounded-md border-2 border-[#4A4A68] bg-[#C8C8E6] px-4 py-3 pr-10 text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <Search className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-600" />
          </div>

          {/* Tipo de actividad */}
          <div className="relative">
            <select
              value={formData.tipoActividad}
              onChange={(e) => handleInputChange("tipoActividad", e.target.value)}
              className="w-full  rounded-md border-2 border-[#4A4A68] bg-[#C8C8E6] px-4 py-3 pr-10 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Tipo de actividad</option>
              <option value="llamada">Llamada</option>
              <option value="seguimiento">Seguimiento</option>
              <option value="promocion">Promoción</option>
              <option value="revision">Revisión</option>
              <option value="mensaje">Mensaje</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-600 pointer-events-none" />
          </div>

          {/* Hora */}
          <div className="relative">
            <select
              value={formData.hora}
              onChange={(e) => handleInputChange("hora", e.target.value)}
              className="w-full appearance-none rounded-md border-2 border-[#4A4A68] bg-[#C8C8E6] px-4 py-3 pr-10 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Hora</option>
              <option value="08:00 AM">08:00 AM</option>
              <option value="09:00 AM">09:00 AM</option>
              <option value="10:00 AM">10:00 AM</option>
              <option value="11:00 AM">11:00 AM</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="01:00 PM">01:00 PM</option>
              <option value="02:00 PM">02:00 PM</option>
              <option value="03:00 PM">03:00 PM</option>
              <option value="04:00 PM">04:00 PM</option>
              <option value="05:00 PM">05:00 PM</option>
              <option value="06:00 PM">06:00 PM</option>
              <option value="07:00 PM">07:00 PM</option>
              <option value="08:00 PM">08:00 PM</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-600 pointer-events-none" />
          </div>

          {/* Descripción */}
          <div>
            <textarea
              placeholder="Descripción"
              value={formData.descripcion}
              onChange={(e) => handleInputChange("descripcion", e.target.value)}
              rows={4}
              className="w-full rounded-md border-2 border-[#4A4A68] bg-[#C8C8E6] px-4 py-3 text-gray-800 placeholder-gray-600 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <Button
              type="button"
              onClick={onClose}
              className="flex-1 bg-[#4A4A68] text-white hover:bg-[#3A3A58] rounded-md py-3"
            >
              Cancelar
            </Button>
            <Button type="submit" className="flex-1 bg-[#4A4A68] text-white hover:bg-[#3A3A58] rounded-md py-3">
              Guardar
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}






// 20,60,70,100<Card className="flex flex-col items-center p-4 text-center bg-[#F3F3FF]  border-4 border-[#00A3C4] rounded-lg">
// bg-[#F3F3FF]  border-4 border-[#00A3C4] rounded-lg
//<Card className="flex flex-col items-center p-2 text-center bg-[#F3F3FF] border-2 border-[#00A3C4] rounded-md h-[120px] justify-center text-sm">

function MetricCard({ icon, title, value }) {
  return (
    <Card className="flex flex-col items-center  text-center bg-[#F3F3FF] border-4 border-[#00A3C4] rounded-md">
      <div className=" text-sm font-medium text-[#4A4A68]">{icon}</div>
      <h3 className=" text-sm font-medium">{title}</h3>
      <p className=" text-xl font-bold">{value}</p>
    </Card>
  )
}

// Stat Card Component
//Total de suscriptores:
/*
15,000
Total de prospectos:
7,000
Prospectos nuevos:
200
Respuesta a solicitudes:
100
Prospectos a renovar:
400
*/
// <Card className="flex items-center justify-between p-4 bg-[#F3F3FF] border-4 border-[#00A3C4] rounded-lg"></Card>
//bg-[#F3F3FF] border-4 border-[#00A3C4] rounded-lg
function StatCard({ label, value }) {
  return (
    <Card className="flex items-center justify-between p-4 bg-[#F3F3FF] border-4 border-[#00A3C4] rounded-lg">
      <span className="text-sm font-medium">{label} {value}</span>
    </Card>
  )
}

// Task Card Component
//< className="rounded-lg border border-cyan-300 p-4">
//<div className=" border-4 border-[#00A3C4] rounded-lg p-4">
function TaskCard({ title, description, time, type }) {
  return (
    <div className=" border-4 border-[#00A3C4] rounded-lg p-4 bg-[#F3F3FF]">
      <h3 className=" text-center text-lg font-bold text-indigo-900">{title}</h3>
      <p className="mb-2 text-sm text-gray-600">{description}</p>
      <div className="flex items-center justify-between ">
        <div className="flex items-center gap-1">
          <Clock className="h-4 w-4 text-gray-500" />
          <span className="text-sm">{time}</span>
        </div>
        <span className="text-sm">{type}</span>
      </div>
      <div className=" flex gap-2">
        <Button variant="secondary" className="flex-1 bg-[#4A4A68] text-white">
          Posponer
        </Button>
        <Button variant="secondary" className="flex-1 bg-[#4A4A68] text-white">
          Finalizar
        </Button>
      </div>
    </div>
  )
}

