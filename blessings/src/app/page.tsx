import { Navbar } from '@/components/shared/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';
import { FloatingContactButtons } from '@/components/shared/FloatingContactButtons';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Contact />
        <Footer />
      </main>
      <FloatingContactButtons />
    </>
  );
}
