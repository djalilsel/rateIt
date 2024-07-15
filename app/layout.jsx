import { Lato } from "next/font/google";
import "./globals.css";
import { getServerSession } from "next-auth";

const lato = Lato({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Rate It",
  description: "The first ever meetings rating app",
};

export default function RootLayout({ children }) {
  const session = getServerSession();

  return (
    <html lang="en">
      <body className={lato.className}>{children}</body>
    </html>
  );
}
