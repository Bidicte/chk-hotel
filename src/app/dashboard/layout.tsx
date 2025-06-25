// app/dashboard/layout.tsx
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { poppins } from '@/components/shared/font';
import "../../styles/globals.css";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={poppins.className}>
      <body className="flex h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="p-6 overflow-y-auto mt-0">{children}</main>
        </div>
      </body>
    </html>
  );
}
