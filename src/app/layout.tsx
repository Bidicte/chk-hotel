import "../styles/globals.css";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="flex h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="p-6 overflow-y-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}