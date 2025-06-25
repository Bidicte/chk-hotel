import "../styles/globals.css";
<<<<<<< HEAD

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="fr" className={poppins.className}>
//       <body className="flex h-screen bg-gray-100">
//         <Sidebar />
//         <div className="flex-1 flex flex-col border-b-2 border-gray-200 ">
//           <Header />
//           <main className="p-6 overflow-y-auto">{children}</main>
//         </div>
//       </body>
//     </html>
//   );
// }

// app/login/layout.tsx
import { poppins } from '@/components/shared/font';

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={poppins.className}>
      <body className="flex h-screen bg-[#F6F8FF]">
        {children}
      </body>
    </html>
  );
}
=======
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
>>>>>>> 74a7d045625aa1f69cdd70db1d358c2261eef504
