
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Search } from "lucide-react";
import { NavButton } from "../components/routing";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Header único para toda la app */}
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
              <NavButton iconSrc="/home-icon.png" label="Inicio" href="/" active={true} />
              <NavButton iconSrc="/anadir-amigo-icon.png" label="Prospectos" href="/prospectos" />
              <NavButton iconSrc="/correo-electronico-icon.png" label="Mensajería" href="/mensajeria" />
              <NavButton iconSrc="/actividades-icon.png" label="Actividades" href="/actividades" />
              <NavButton iconSrc="/logout-icon.png" label="Salir" href="/logout" />
            </nav>
          </div>
        </header>

        {/* Contenido dinámico de cada página */}
        {children}
      </body>
    </html>
  );
}
