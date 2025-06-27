import Link from "next/link";
import {SquareDashedMousePointer, House, Users, Settings, ChevronDown} from 'lucide-react'
import HotelInfo from "./HotelInfo";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-[#F6F8FF] shadow-md h-full p-4 space-y-4 border-r border-gray-200">
        <div className="flex justify-start space-x-2 pb-7">
          <div className="h-4 w-4 bg-blue-600 rounded-md mt-0.5" />
          <h1 className="text-md font-bold text-black">CHK–PMS</h1>
        </div>
        <HotelInfo />
      <nav className="mt-8 space-y-4  flex flex-col">
        <Link href="/dashboard" className="flex"> <House className="w-5 h-5 mr-2"/> Tableau de bord</Link>
        <Link href="/dashboard/exploitations" className="flex"><SquareDashedMousePointer className="w-5 h-5 mr-2"/> Exploitations <ChevronDown /></Link>
        <Link href="/dashboard/clients" className="flex"><Users className="w-5 h-5 mr-2"/>Clients</Link>
        <Link href="/dashboard/configurations" className="flex"><Settings className="w-5 h-5 mr-2"/>configurations <ChevronDown /> </Link>
      </nav>
    </aside>
  );
}