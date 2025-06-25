<<<<<<< HEAD
import { User, LayoutGrid } from 'lucide-react';
export default function Header() {
  return (
    <div className="bg-white border-b border-gray-200 px-6 py-4 mt-0">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Clients</h1>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div><LayoutGrid /></div>
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-gray-600" />
                </div>
                <div>
                    <div className="text-sm font-bold">John Doe</div>
                    <div className="text-xs text-gray-500">Utilisateur</div>
                  </div>
              </div>
            </div>
          </div>
        </div>
=======
export default function Header() {
  return (
    <header className="bg-white shadow p-4 flex justify-between">
      <div className="text-left text-2xl font-bold">Clients</div>
      <div className="text-right text-sm text-gray-500">Bonjour, utilisateur</div>
    </header>
>>>>>>> 74a7d045625aa1f69cdd70db1d358c2261eef504
  );
}