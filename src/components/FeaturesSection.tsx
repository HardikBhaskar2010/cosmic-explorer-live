import { motion } from 'framer-motion';
import { Globe, Brain, Video, Bell, TrendingUp, Telescope } from 'lucide-react';

const features = [
  {
    icon: Globe,
    title: '3D Space Exploration',
    description: 'Navigate through stunning 3D models of planets, moons, stars, and galaxies with interactive controls.',
    gradient: 'from-primary to-cosmic-glow',
  },
  {
    icon: Brain,
    title: 'AI-Powered Quizzes',
    description: 'Experience adaptive quizzes that adjust difficulty based on your performance and learning pace.',
    gradient: 'from-cosmic-nebula to-primary',
  },
  {
    icon: Video,
    title: 'Live Streaming',
    description: 'Join live sessions with astronomy experts and space scientists from around the world.',
    gradient: 'from-accent to-[hsl(15,100%,50%)]',
  },
  {
    icon: Bell,
    title: 'Smart Notifications',
    description: 'Get AI-powered alerts about upcoming space events, eclipses, meteor showers, and more.',
    gradient: 'from-primary to-accent',
  },
  {
    icon: TrendingUp,
    title: 'Progress Tracking',
    description: 'AI analyzes your learning journey and suggests personalized topics to explore next.',
    gradient: 'from-cosmic-glow to-cosmic-nebula',
  },
  {
    icon: Telescope,
    title: 'Virtual Observatory',
    description: 'Access real telescope feeds and explore current celestial phenomena in real-time.',
    gradient: 'from-cosmic-nebula to-accent',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export default function FeaturesSection() {
  return (
    <section id="explore" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-cosmic-gradient" />
      <div className="absolute inset-0 stars-bg opacity-30" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-primary font-display font-medium tracking-widest text-sm uppercase">
            Features
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            <span className="text-foreground">Learn Space </span>
            <span className="text-glow bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Your Way
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Our platform combines cutting-edge technology with educational excellence
            to make space learning immersive and engaging.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              className="group relative"
            >
              <div className="card-cosmic glow-border rounded-2xl p-8 h-full transition-all duration-500 hover:translate-y-[-4px]">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
