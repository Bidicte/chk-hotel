// app/login/layout.tsx
import { poppins } from '@/components/shared/font';

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={poppins.className}>
      <body className="flex items-center justify-center h-screen bg-[#F6F8FF]">
        {children}
      </body>
    </html>
  );
}
