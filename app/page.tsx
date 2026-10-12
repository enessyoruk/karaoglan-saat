import { ActionScene } from "@/components/ActionScene";
import { Boutique } from "@/components/Boutique";
import { Footer } from "@/components/Footer";
import { IntroSequence } from "@/components/IntroSequence";
import { Navbar } from "@/components/Navbar";
import { Trust } from "@/components/Trust";

export default function Home() {
  return (
    <>
      <IntroSequence />
      <Navbar />
      <main>
        <ActionScene />
        <Boutique />
        <Trust />
      </main>
      <Footer />
    </>
  );
}
