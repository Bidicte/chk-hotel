import "../styles/globals.css";

import { poppins } from '@/components/shared/font';

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={poppins.className}>
      <body className="flex  h-screen justify-center items-center bg-[#F6F8FF]">
        {children}
      </body>
    </html>
  );
}
