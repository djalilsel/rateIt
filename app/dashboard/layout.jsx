import { SessionProvider } from "next-auth/react";

export default function Dashboard({
  children,
  //   pageProps: { session, ...pageProps },
}) {
  return (
    <html lang="en">
      <main>
        {/* <SessionProvider session={session}> */}
        {children}
        {/* </SessionProvider> */}
      </main>
    </html>
  );
}
