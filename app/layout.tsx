import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "../components/navigation";

export const metadata: Metadata = {
  title: "My Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
