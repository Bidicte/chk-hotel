import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-md h-full p-4 space-y-4 border-r border-gray-200">
        <div className="flex justify-start space-x-2 pb-4">
          <div className="h-4 w-4 bg-blue-600 rounded-md mt-0.5" />
          <h1 className="text-md font-bold text-black">CHK–PMS</h1>
        </div>
      <nav className="space-y-2  flex flex-col">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/dashboard/clients">Clients</Link>
        <Link href="/dashboard/rooms">Pièces</Link>
        <Link href="/dashboard/pricing">Tarifs</Link>
        <Link href="/dashboard/booking">Réservations</Link>
        <Link href="/dashboard/configurations">configurations</Link>
      </nav>
    </aside>
  );
}