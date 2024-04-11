import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { AppContextProvider } from "../../contexts/app.context";
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <AppContextProvider>
        <Component {...pageProps} />
      </AppContextProvider>
    </SessionProvider>
  );
}
