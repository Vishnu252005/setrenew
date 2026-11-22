import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import DashboardPreview from '@/components/DashboardPreview';
import RoiCalculator from '@/components/RoiCalculator';
import Features from '@/components/Features';
import Comparison from '@/components/Comparison';
import Faq from '@/components/Faq';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col">
      <Navbar />
      <Hero />
      <DashboardPreview />
      <RoiCalculator />
      <Features />
      <Comparison />
      <Faq />
      <Footer />
    </main>
  );
}
