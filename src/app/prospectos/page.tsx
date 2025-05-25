"use client"
import { ChevronDown, Mail, Phone } from "lucide-react"

import { Card } from "@/components/ui/card"

import { useState } from "react";

export default function ProspectosPage() {

  const [filterNuevo, setFilterNuevo] = useState("todos");
  const [filterContactado, setFilterContactado] = useState("todos");
  const [filterPre, setFilterPre] = useState("todos");
  const [filterSuscrito, setFilterSuscrito] = useState("todos");

  return (
    <div className="min-h-screen bg-[#F3F3FF]">
      {/* Header/Navigation */}

      
      <div className="container mx-auto p-4">


        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Nuevos Prospectos */}
          <ProspectColumn
            title="Nuevos Prospectos"
            count={110}
            filter={filterNuevo}
            onFilterChange={setFilterNuevo}
            prospects={[
              { name: "Boris Johson", phone: "+591674567", email: "boris@gmai.com", lastContact: "12/02/2024", avatarColor: "bg-gray-200" },
              { name: "Antony Ribera", phone: "+591674567", email: "anton@gmai.com", lastContact: "hoy", avatarColor: "bg-gray-200" },
              { name: "Lula Silva", phone: "+5916223461", email: "lula@gmai.com", lastContact: "12/03/2025", avatarColor: "bg-gray-200" },
              { name: "Mario Lopez", phone: "+5916001111", email: "mario@gmai.com", lastContact: "12/03/2025", avatarColor: "bg-gray-200" },
              { name: "Julia Martinez", phone: "+5916002222", email: "julia@gmai.com", lastContact: "12/03/2025", avatarColor: "bg-gray-200" },
              { name: "Carlos Perez", phone: "+5916003333", email: "carlos@gmai.com", lastContact: "12/03/2025", avatarColor: "bg-gray-200" },
              { name: "Andrea Torres", phone: "+5916004444", email: "andrea@gmai.com", lastContact: "12/03/2025", avatarColor: "bg-gray-200" },
            ]}
          />

          {/* Contactados */}
          <ProspectColumn
            title="Contactados"
            count={55}
            filter={filterContactado}
            onFilterChange={setFilterContactado}
            prospects={[
              { name: "Alina Rojas", phone: "+591665617", email: "alina@gmai.com", lastContact: "ayer", avatarColor: "bg-gray-200" },
              { name: "Ramiro Johs", phone: "+5916744447", email: "ramiror@gmai.com", lastContact: "12/09/2024", avatarColor: "bg-gray-200" },
              { name: "Alina Rojas", phone: "+591665617", email: "alina@gmai.com", lastContact: "ayer", avatarColor: "bg-gray-200" },
              { name: "Luis Gomez", phone: "+5916005555", email: "luis@gmai.com", lastContact: "12/10/2024", avatarColor: "bg-gray-200" },
              { name: "Maria Fernanda", phone: "+5916006666", email: "maria@gmai.com", lastContact: "12/10/2024", avatarColor: "bg-gray-200" },
              { name: "Pedro Castillo", phone: "+5916007777", email: "pedro@gmai.com", lastContact: "12/10/2024", avatarColor: "bg-gray-200" },
            ]}
          />

          {/* Pre Registrado */}
          <ProspectColumn
            title="Pre Registado"
            count={25}
            filter={filterPre}
            onFilterChange={setFilterPre}
            prospects={[
              { name: "Agata Johson", phone: "+5917557567", email: "agata@gmai.com", lastContact: "12/04/2024", avatarColor: "bg-indigo-900" },
              { name: "Anita Rivero", phone: "+591674567", email: "anita@gmai.com", lastContact: "hoy", avatarColor: "bg-indigo-900" },
              { name: "Sofia Delgagdo", phone: "+5916564567", email: "sofia@gmai.com", lastContact: "12/15/2023", avatarColor: "bg-indigo-900" },
              { name: "Jorge Ramirez", phone: "+5916008888", email: "jorge@gmai.com", lastContact: "12/15/2023", avatarColor: "bg-indigo-900" },
              { name: "Claudia Mendez", phone: "+5916009999", email: "claudia@gmai.com", lastContact: "12/15/2023", avatarColor: "bg-indigo-900" },
            ]}
          />

          {/* Clientes Suscritos */}
          <ProspectColumn
            title="Clientes Suscritos"
            count={30}
            filter={filterSuscrito}
            onFilterChange={setFilterSuscrito}
            prospects={[
              { name: "Romero Rios", phone: "+591674567", email: "romero@gmai.com", lastContact: "10/02/2024", avatarColor: "bg-indigo-900", isSubscribed: true },
              { name: "Carla Santos", phone: "+591674567", email: "carla@gmai.com", lastContact: "10/23/12", avatarColor: "bg-indigo-900", isSubscribed: true },
              { name: "Daniela Rojas", phone: "+5916564567", email: "daniela@gmai.com", lastContact: "12/02/2023", avatarColor: "bg-indigo-900", isSubscribed: true },
              { name: "Martin Gomez", phone: "+5916010101", email: "martin@gmai.com", lastContact: "10/23/12", avatarColor: "bg-indigo-900", isSubscribed: true },
              { name: "Natalia Ruiz", phone: "+5916011111", email: "natalia@gmai.com", lastContact: "10/23/12", avatarColor: "bg-indigo-900", isSubscribed: true },
              { name: "Sergio Diaz", phone: "+5916012222", email: "sergio@gmai.com", lastContact: "10/23/12", avatarColor: "bg-indigo-900", isSubscribed: true },
            ]}
          />
        </div>
      </div>
    </div>
  )
}



// Prospect Column Component
function ProspectColumn({ title, count, prospects, filter, onFilterChange }) {
  const filteredProspects = prospects.filter((p) => {
    if (filter.toLowerCase() === "hoy") {
      return p.lastContact.toLowerCase() === "hoy";
    }
    if (filter.toLowerCase() === "ayer") {
      return p.lastContact.toLowerCase() === "ayer";
    }
    // Puedes agregar más reglas, como fechas específicas
    return true;
  });

  return (
    <div className="flex flex-col">
      <div className="mb-2 flex items-center justify-between">
        <h2 className="text-lg font-bold text-gray-800">{title}</h2>
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-xs text-white">
          {count}
        </div>
      </div>

      <div className="relative w-full pb-2">
        <select
          value={filter}
          onChange={(e) => onFilterChange(e.target.value)}
          className="appearance-none w-full bg-[#F3F3FF] text-sm font-semibold px-4 py-1 rounded-md border-4 border-[#4A4A68] text-black focus:outline-none"
        >
          <option value="todos">Todos</option>
          <option value="hoy">Hoy</option>
          <option value="ayer">Ayer</option>
        </select>

        {/* Chevron personalizado a la derecha (el que se ve redondo) */}
        <div className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#4A4A68]">
            <ChevronDown className="w-4 h-4 text-white" />
          </div>
        </div>
      </div>


      <div className="flex flex-col gap-4 overflow-auto max-h-[460px]">
        {filteredProspects.map((prospect, index) => (
          <ProspectCard key={index} prospect={prospect} />
        ))}
      </div>
    </div>
  );
}


// Prospect Card Component
function ProspectCard({ prospect }) {
  return (
    <Card className="bg-[#F3F3FF] rounded-lg border-4 border-[#00A3C4] p-4">
      <div className="mb-2 flex items-center gap-3">
        <div
          className={`relative flex h-10 w-10 items-center justify-center rounded-full ${prospect.avatarColor} text-white`}
        >
          <UserIcon />
          {prospect.isSubscribed && (
            <div className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-white">
              <button className="flex h-4 w-4 items-center justify-center rounded-full bg-[#00A3C4] text-white">
                <CheckIcon />
              </button>
            </div>
          )}
        </div>
        {/* Nombre del prospecto - más grande y más grueso */}
        <span className="text-lg font-bold text-gray-800">{prospect.name}</span>
      </div>

      {/* Teléfono */}
      <div className="flex items-center gap-2 text-base font-bold text-gray-700">
        <Phone className="h-4 w-4" />
        <span>{prospect.phone}</span>
      </div>

      {/* Correo */}
      <div className="flex items-center gap-2 text-base font-bold text-gray-700">
        <Mail className="h-4 w-4" />
        <span>{prospect.email}</span>
      </div>

      {/* Último contacto */}
      <div className="mt-2 text-base font-bold text-gray-700">
        <span>Ult. contacto: {prospect.lastContact}</span>
      </div>
    </Card>

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

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}
