import { motion } from 'framer-motion';
import { Calendar, Clock, Users, Play, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { toast } from 'sonner';

const initialLiveEvents = [
  {
    id: 1,
    title: 'Journey to Mars',
    instructor: 'Dr. Sarah Chen',
    time: 'Today, 7:00 PM',
    viewers: 1243,
    isLive: true,
    category: 'Planetary Science',
  },
  {
    id: 2,
    title: 'Black Holes Explained',
    instructor: 'Prof. James Webb',
    time: 'Tomorrow, 3:00 PM',
    viewers: 856,
    isLive: false,
    category: 'Astrophysics',
  },
  {
    id: 3,
    title: 'Upcoming: Solar Eclipse',
    instructor: 'Dr. Maya Patel',
    time: 'Jan 15, 11:00 AM',
    viewers: 2100,
    isLive: false,
    category: 'Special Event',
  },
];

const upcomingEvents = [
  {
    title: 'Meteor Shower Peak',
    date: 'Jan 12',
    type: 'Celestial Event',
  },
  {
    title: 'SpaceX Starship Launch',
    date: 'Jan 18',
    type: 'Space Mission',
  },
  {
    title: 'Full Moon Night Session',
    date: 'Jan 25',
    type: 'Live Observation',
  },
];

export default function LiveEventsSection() {
  const [reminders, setReminders] = useState<number[]>([]);

  const handleAction = (event: typeof initialLiveEvents[0]) => {
    if (event.isLive) {
      toast.success(`Joining ${event.title}...`);
    } else {
      if (reminders.includes(event.id)) {
        setReminders(reminders.filter(id => id !== event.id));
        toast.info(`Reminder removed for ${event.title}`);
      } else {
        setReminders([...reminders, event.id]);
        toast.success(`Reminder set for ${event.title}!`);
      }
    }
  };

  const handleUpcomingClick = (title: string) => {
    toast.info(`Details for ${title} coming soon!`);
  };

  return (
    <section id="live" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 stars-bg opacity-20" />
      
      {/* Decorative gradient orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-display font-medium tracking-widest text-sm uppercase">
            Live & Upcoming
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            <span className="text-foreground">Never Miss A </span>
            <span className="text-glow-solar bg-gradient-to-r from-accent to-[hsl(15,100%,50%)] bg-clip-text text-transparent">
              Cosmic Event
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Join live sessions with experts and get notified about celestial events happening around the world.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Live Sessions */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="font-display text-xl font-semibold text-foreground flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
              Live & Upcoming Sessions
            </h3>

            {initialLiveEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-cosmic glow-border rounded-2xl p-6 group hover:translate-y-[-2px] transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      {event.isLive && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-500/20 text-red-400 text-xs font-semibold">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                          LIVE
                        </span>
                      )}
                      <span className="text-xs font-medium text-primary/70 uppercase tracking-wider">
                        {event.category}
                      </span>
                    </div>
                    <h4 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {event.title}
                    </h4>
                    <p className="text-muted-foreground text-sm mt-1">
                      with {event.instructor}
                    </p>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="text-right hidden sm:block">
                      <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
                        <Clock className="w-4 h-4" />
                        {event.time}
                      </div>
                      <div className="flex items-center gap-1.5 text-muted-foreground text-sm mt-1">
                        <Users className="w-4 h-4" />
                        {event.viewers.toLocaleString()} watching
                      </div>
                    </div>
                    <Button 
                      variant={event.isLive ? "solar" : reminders.includes(event.id) ? "cosmic" : "cosmic-outline"} 
                      size="lg"
                      onClick={() => handleAction(event)}
                    >
                      <Play className="w-4 h-4" />
                      {event.isLive ? 'Join Now' : reminders.includes(event.id) ? 'Reminder Set' : 'Set Reminder'}
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Upcoming Events Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card-cosmic rounded-2xl p-6"
          >
            <h3 className="font-display text-xl font-semibold text-foreground flex items-center gap-2 mb-6">
              <Calendar className="w-5 h-5 text-accent" />
              Space Events
            </h3>

            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  onClick={() => handleUpcomingClick(event.title)}
                  className="flex items-center gap-4 p-3 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors cursor-pointer group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-foreground text-sm group-hover:text-primary transition-colors">
                      {event.title}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {event.date} • {event.type}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button 
              variant="cosmic-outline" 
              className="w-full mt-6"
              onClick={() => toast.info("Viewing all cosmic events...")}
            >
              View All Events
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
