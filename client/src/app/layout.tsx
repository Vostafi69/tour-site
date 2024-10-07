import type { Metadata } from "next";
import { Balsamiq_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ReactQueryClientProvider } from "./(providers)/queryProvider";

const balsamiq = Balsamiq_Sans({
  subsets: ["cyrillic"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "ДВ каникулы",
  description: "Туры и экскурсии по всему дальнему востоку",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryClientProvider>
      <html lang="en">
        <body className={cn("mx-auto max-w-[1920px]", balsamiq.className)}>
          {children}
        </body>
      </html>
    </ReactQueryClientProvider>
  );
}
