import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import "@/styles/global.css";

export const metadata: Metadata = {
  title: "Software Engineering Blog",
  description: "A blog about software engineering, programming, and technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <div className="container">
          {children}
        </div>
      </body>
    </html>
  );
}
