import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Dashboard({ children }) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return redirect("/login");
  }
  return <main>{children}</main>;
}
