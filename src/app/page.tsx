import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function HomePage() {
  const session = await getServerSession(authOptions);

  // Pas de session ? Redirection vers /login
  if (!session) {
    redirect("/login");
  }

  // Si connecté, rediriger vers /dashboard ou autre
  redirect("/dashboard");
}
