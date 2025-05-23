"use client";
import { ChevronLeft, ChevronRight, Clock, Plus, Search } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { useState } from "react"
import {
  HomeIcon,
  UserIcon,
  EnvelopeIcon,
  GearIcon,
  DocumentIcon,
  MenuIcon,
  FunnelIcon,
  SubscriptionIcon,
  WhatsappIcon,
} from "@/components/icons/Icons";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<"pendientes" | "automaticos">("pendientes");

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
            <NavButton icon={<HomeIcon />} label="Inicio" active />
            <NavButton icon={<UserIcon />} label="Prospectos" />
            <NavButton icon={<EnvelopeIcon />} label="Mensajería" />
            <NavButton icon={<GearIcon />} label="AutoMensaje" />
            <NavButton icon={<DocumentIcon />} label="Bitácora" />
            <NavButton icon={<MenuIcon />} label="" />
          </nav>
        </div>
      </header>

      <main className="container mx-auto p-4 ">
        {/* Key Metrics Section */}
        <div className="mb-6 flex items-center justify-between  ">
          <h2 className="text-2xl font-bold text-gray-800">Métricas Claves</h2>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="rounded border border-gray-300 bg-white px-4 py-1">1 semana</span>
            <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
              <ChevronRight className="h-4 w-4" />
            </Button>
            <span className="ml-4 rounded border border-gray-300 bg-white px-4 py-1">Mayo</span>
          </div>
        </div>

        {/* Metrics Cards */}
        <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-5">
          <MetricCard icon={<FunnelIcon />} title="Tiempo promedio de conversión" value="22 hrs" />
          <MetricCard icon={<SubscriptionIcon />} title="Tasa de suscripción" value="60 %" />
          <MetricCard icon={<WhatsappIcon />} title="Canal de comunicación con mayor efectividad" value="70 %" />
          <MetricCard icon={<UserIcon />} title="Prospectos suscritos" value="1,000" />
          <Card className="flex flex-col p-4 bg-[#F3F3FF] border-4 border-[#00A3C4] rounded-lg">  {/* qk border-4 border-[#00A3C4] rounded-lg*/}
            <h3 className="mb-2 text-center font-medium">Objetivo de Suscripciones por mes</h3>
            <div className="mt-auto">
              <div className="mb-1 flex justify-between">
                <span className="text-sm">50 %</span>
                <span className="text-sm">1,000</span>
              </div>
              <Progress value={50} className="h-2" />
              <div className="mt-1 text-center">
                <span className="font-medium">500</span>
              </div>
              <Progress value={50} className="mt-4 h-1" />
            </div>
          </Card>
        </div>

        {/* Additional Metrics */}
        <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-5">
          <StatCard label="Total de suscriptores:" value="15,000" />
          <StatCard label="Total de prospectos:" value="7,000" />
          <StatCard label="Prospectos nuevos:" value="200" />
          <StatCard label="Respuesta a solicitudes:" value="100" />
          <StatCard label="Prospectos a renovar:" value="400" />
        </div>

        {/* Tasks Section */}
        <div className="mb-4 flex gap-8 border-b-2 border-cyan-400">
          <button
            onClick={() => setActiveTab("pendientes")}
            className={`relative pb-2 text-xl font-bold transition-colors ${activeTab === "pendientes" ? "text-[#0A0A32]" : "text-gray-400"
              }`}
          >
            Tareas Pendientes
            {activeTab === "pendientes" && (
              <span className="absolute left-0 bottom-0 h-1 w-full rounded-full bg-blue-600"></span>
            )}
          </button>
          <button
            onClick={() => setActiveTab("automaticos")}
            className={`relative pb-2 text-xl font-bold transition-colors ${activeTab === "automaticos" ? "text-[#0A0A32]" : "text-gray-400"
              }`}
          >
            Mensajes automáticos
            {activeTab === "automaticos" && (
              <span className="absolute left-0 bottom-0 h-1 w-full rounded-full bg-blue-600"></span>
            )}
          </button>
        </div>
        {activeTab === "pendientes" && (
          <div>
            {/* Tasks Cards */}
            {/* toda las tareas estan dentro*/}
            {/* border-4 border-[#00A3C4] rounded-lg*/}
            <div className="relative overflow-hidden  border-4 border-[#00A3C4] rounded-lg  bg-[#F3F3FF] p-6">
              <Button
                variant="outline"
                size="icon"
                className="absolute left-2 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full"
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

                <div className="flex items-center justify-center rounded-lg border-2 border-dashed border-gray-300 p-6">
                  <div className="flex flex-col items-center">
                    <div className="mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-900 text-white">
                      <Plus className="h-8 w-8" />
                    </div>
                    <span className="text-lg font-medium">Agregar Tarea</span>
                  </div>
                </div>
              </div>

              <Button
                variant="outline"
                size="icon"
                className="absolute right-2 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </div>
        )}

        {activeTab === "automaticos" && (
          <div className="relative overflow-hidden border-4 border-[#00A3C4] rounded-lg bg-[#F3F3FF] p-6">
            <Button
              variant="outline"
              size="icon"
              className="absolute left-2 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
              {/* Tarjeta 1 */}
              <Card className="border-2 border-[#00A3C4] p-4">
                <h3 className="mb-2 text-center text-lg font-bold">Mensaje saludo</h3>
                <p className="text-sm mb-4">
                  ¡Bienvenido a CinePlus! ✨ Somos una plataforma de suscripción donde puedes disfrutar del mejor cine en casa.
                </p>
                <div className="flex justify-between text-sm mb-2">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>1 hr</span>
                  </div>
                  <span className="font-medium">Nuevo prospecto</span>
                </div>
                <div className="flex justify-between text-sm mb-4">
                  <span>👥 Grupo</span>
                </div>
                <div className="flex gap-2">
                  <Button className="flex-1">Editar</Button>
                  <Button className="flex-1">Pausar</Button>
                </div>
              </Card>

              {/* Tarjeta 2 */}
              <Card className="border-2 border-[#00A3C4] p-4">
                <h3 className="mb-2 text-center text-lg font-bold">Mensaje promoción</h3>
                <p className="text-sm mb-4">
                  ¡Mes gratis para nuevos usuarios! 🎉 ¿Aún no formas parte de CinePlus? Aprovecha esta oportunidad única y accede gratis duran…
                </p>
                <div className="flex justify-between text-sm mb-2">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>12 hrs</span>
                  </div>
                  <span>⭐ Estado: Recién</span>
                </div>
                <div className="flex justify-between text-sm mb-4">
                  <span>👥 Todos</span>
                </div>
                <div className="flex gap-2">
                  <Button className="flex-1">Editar</Button>
                  <Button className="flex-1">Reanudar</Button>
                </div>
              </Card>

              {/* Tarjeta 3 */}
              <Card className="border-2 border-[#00A3C4] p-4">
                <h3 className="mb-2 text-center text-lg font-bold">Mensaje saludo</h3>
                <p className="text-sm mb-4">
                  ¡Bienvenido a CinePlus! ✨ Somos una plataforma de suscripción donde puedes disfrutar del mejor cine en casa.
                </p>
                <div className="flex justify-between text-sm mb-2">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>2 días</span>
                  </div>
                  <span>No contesta</span>
                </div>
                <div className="text-sm mb-4">
                  <span>👤 Sebastián Ramírez Orosco</span>
                </div>
                <div className="flex gap-2">
                  <Button className="flex-1">Editar</Button>
                  <Button className="flex-1">Pausar</Button>
                </div>
              </Card>

              {/* Tarjeta agregar */}
              <div className="flex items-center justify-center rounded-lg border-2 border-dashed border-gray-300 p-6">
                <div className="flex flex-col items-center">
                  <div className="mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-900 text-white">
                    <Plus className="h-8 w-8" />
                  </div>
                  <span className="text-lg font-medium">Agregar Tarea</span>
                </div>
              </div>
            </div>

            <Button
              variant="outline"
              size="icon"
              className="absolute right-2 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        )}




      </main>
    </div>
  )
}



// Navigation Button Component
function NavButton({ icon, label, active = false }) {
  return (
    <Link
      href="#"
      className={`flex items-center gap-2 rounded-md px-4 py-2 ${active ? "bg-[#4A4A68] text-white"
        : "bg-[#2B4EFF] text-white"
        }`}
    >
      {icon}
      <span>{label}</span>
    </Link>
  )
}

// 20,60,70,100<Card className="flex flex-col items-center p-4 text-center bg-[#F3F3FF]  border-4 border-[#00A3C4] rounded-lg">
// bg-[#F3F3FF]  border-4 border-[#00A3C4] rounded-lg
function MetricCard({ icon, title, value }) {
  return (
    <Card className="flex flex-col items-center p-4 text-center bg-[#F3F3FF]  border-4 border-[#00A3C4] rounded-lg">
      <div className="mb-2">{icon}</div>
      <h3 className="mb-2 text-sm font-medium">{title}</h3>
      <p className="mt-auto text-xl font-bold">{value}</p>
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
      <span className="text-sm font-medium">{label}</span>
      <span className="font-bold">{value}</span>
    </Card>
  )
}

// Task Card Component
//< className="rounded-lg border border-cyan-300 p-4">
//<div className=" border-4 border-[#00A3C4] rounded-lg p-4">
function TaskCard({ title, description, time, type }) {
  return (
    <div className=" border-4 border-[#00A3C4] rounded-lg p-4">
      <h3 className="mb-2 text-center text-lg font-bold text-indigo-900">{title}</h3>
      <p className="mb-4 text-sm text-gray-600">{description}</p>
      <div className="flex items-center justify-between ">
        <div className="flex items-center gap-1">
          <Clock className="h-4 w-4 text-gray-500" />
          <span className="text-sm">{time}</span>
        </div>
        <span className="text-sm">{type}</span>
      </div>
      <div className="mt-4 flex gap-2">
        <Button variant="secondary" className="flex-1">
          Posponer
        </Button>
        <Button variant="secondary" className="flex-1">
          Finalizar
        </Button>
      </div>
    </div>
  )
}

