// app/login/layout.tsx
import { poppins } from '@/components/shared/font';

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={poppins.className}>
      <body className="flex items-center justify-center bg-blue-500">
        {children}
      </body>
    </html>
  );
}
