import { motion } from 'framer-motion';
import { Maximize2, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

export default function InteractiveSolarSystem() {
  const handleFullscreen = () => {
    const iframe = document.getElementById('nasa-solar-system') as HTMLIFrameElement;
    if (iframe) {
      if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
      } else if ((iframe as any).webkitRequestFullscreen) {
        (iframe as any).webkitRequestFullscreen();
      }
      toast.info("Entering immersive view...");
    }
  };

  return (
    <section id="explorer" className="relative py-32 overflow-hidden bg-deep-space">
      <div className="absolute inset-0 stars-bg opacity-30" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary font-display font-medium tracking-widest text-sm uppercase">
            Real-Time Explorer
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            <span className="text-foreground">Interactive </span>
            <span className="text-glow bg-gradient-to-r from-primary to-cosmic-glow bg-clip-text text-transparent">
              Solar System
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Experience the solar system in real-time with NASA's interactive explorer. 
            Track planets, spacecraft, and celestial events as they happen.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-video w-full rounded-3xl overflow-hidden border border-primary/20 shadow-elevated group"
        >
          {/* Controls Overlay */}
          <div className="absolute top-4 right-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <Button size="icon" variant="cosmic" onClick={handleFullscreen} title="Full Screen">
              <Maximize2 className="w-4 h-4" />
            </Button>
            <Button size="icon" variant="cosmic-outline" onClick={() => toast.info("Data provided by NASA Eyes on the Solar System")} title="Info">
              <Info className="w-4 h-4" />
            </Button>
          </div>

          <iframe
            id="nasa-solar-system"
            src="https://eyes.nasa.gov/apps/solar-system/#/home?interactPrompt=true"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            title="NASA Interactive Solar System"
          />
        </motion.div>
      </div>
    </section>
  );
}
