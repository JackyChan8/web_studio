import Technologies from "@/components/Technologies/Technologies";
import Benefits from "@/components/Benefits/Benefits";
import Contacts from "@/components/Contacts/Contacts";
import Footer from "@/components/Footer/Footer";
import MainBlock from "@/components/Main/Main";

export default function Home() {
  return (
    <main>
      <MainBlock />
      <Technologies />
      <Benefits />
      <Contacts />
      <Footer />
    </main>
  );
}
