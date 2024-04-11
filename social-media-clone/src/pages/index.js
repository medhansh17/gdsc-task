import { useSession } from "next-auth/react";
import Login from "../../components/login";
import Sidebar from "../../components/sidebar";
import Feed from "../../components/feed";
import { AppContext } from "../../contexts/app.context";

export default function Home() {
  const { data: session } = useSession();
  if (!session) return <Login />;

  return (
    <main className="relative max-w-[1400px] mx-auto">
      <Sidebar />
      <div className="flex gap-6">
        <Feed />
      </div>
    </main>
  );
}
