import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <img
        src={heroBg}
        alt="Digital network background"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />

      <div className="container relative z-10 text-center py-32">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-primary font-heading font-semibold text-sm tracking-widest uppercase mb-6"
        >
          Local SEO Experts — Guaranteed Results
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6"
        >
          Work With a Business{" "}
          <span className="text-gradient">You Can Trust</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-2xl mx-auto text-muted-foreground text-lg md:text-xl mb-10 leading-relaxed"
        >
          Here at AMN, we get your website ranked #1 on Google. Ranking on the first page takes more than sponsored ads — we ensure the highest integrity, taking your privacy and business security very seriously.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contact"
            className="px-8 py-4 rounded-lg font-heading font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-opacity animate-pulse-glow text-lg"
          >
            Get Started Today
          </a>
          <a
            href="#how-it-works"
            className="px-8 py-4 rounded-lg font-heading font-semibold border border-border text-foreground hover:bg-secondary transition-colors text-lg"
          >
            How It Works
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-8 text-sm text-muted-foreground"
        >
          How Do You Rank On Google? — 91% of customers are looking for you online.
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;
