import { ContactsSection } from "@/components/contactsSection/contactsSection";
import { Footer } from "@/components/footer/footer";
import { GallerySection } from "@/components/gallerySection/gallerySection";
import { Header } from "@/components/header/header";
import { Hero } from "@/components/hero/hero";
import { PartnersSection } from "@/components/partnersSection/partnersSection";
import { ToursSection } from "@/components/toursSection/toursSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <Hero />
        <div className="relative w-full pt-[50px]">
          <div className="absolute -top-[140px] z-[60] h-[150px] w-full">
            <Image src={"/fog.png"} alt="Туман" fill />
          </div>
          <ToursSection />
        </div>
        {/* <PartnersSection /> */}
        {/* <ContactsSection /> */}
        {/* <GallerySection /> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
}
