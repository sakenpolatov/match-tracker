import type { Metadata } from "next";
import "./globals.css";
import { QueryProvider } from "@/services/QueryProvider";

export const metadata: Metadata = {
  title: "Match Tracker",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
