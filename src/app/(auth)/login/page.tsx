<<<<<<< HEAD
// app/(auth)/login/page.tsx
import LoginPage from './LoginPage';

export default function Login() {
  return <LoginPage />;
=======
import LoginForm from "./LoginForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-sm p-8 space-y-6">
     
        <div className="flex justify-center items-center space-x-2">
          <div className="h-4 w-4 bg-blue-600 rounded-md" />
          <h1 className="text-md font-bold text-black">CHK–PMS</h1>
        </div>
        <h2 className="text-center text-xl font-bold text-black">Connectez-vous</h2>
        <LoginForm />
      </div>
    </div>
  );
>>>>>>> 74a7d045625aa1f69cdd70db1d358c2261eef504
}
