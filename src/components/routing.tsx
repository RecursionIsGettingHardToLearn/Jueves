interface NavButtonProps {
  iconSrc: string;  // Ruta a imagen: por ejemplo "/logout-icon.png"
  label: string;
  href: string;
  active?: boolean;
}
import Image from 'next/image'
import Link from "next/link"
export function NavButton({ iconSrc, label, href, active = false }: NavButtonProps) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-2 rounded-md px-4 py-2 transition-colors
        ${active ? "bg-[#4A4A68] text-white" : "bg-[#2B4EFF] text-white hover:bg-[#1e3acc]"}`}
    >
      <Image src={iconSrc} alt={label} className="h-5 w-5" width={20} height={20} />
      <span>{label}</span>
    </Link>
  );
}