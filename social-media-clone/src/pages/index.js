import { useSession } from "next-auth/react";
import { Inter } from "next/font/google";
import Login from "../../components/login";
import Sidebar from "../../components/sidebar";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data: session } = useSession();
  if (!session) return <Login />;

  return (
    <main className="relative max-w-[1400px] mx-auto">
      <SideBar />
    </main>
  );
}
