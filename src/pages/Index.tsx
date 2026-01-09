import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import LiveEventsSection from '@/components/LiveEventsSection';
import QuizSection from '@/components/QuizSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <LiveEventsSection />
      <QuizSection />
      <Footer />
    </div>
  );
};

export default Index;
