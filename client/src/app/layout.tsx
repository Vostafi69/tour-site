import type { Metadata } from "next";
import { Balsamiq_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ReactQueryClientProvider } from "./(providers)/queryProvider";
import { MainLayout } from "./(layouts)/mainLayout";
import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/footer";

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
          <MainLayout headerSlot={<Header />} footerSlot={<Footer />}>
            {children}
          </MainLayout>
        </body>
      </html>
    </ReactQueryClientProvider>
  );
}
