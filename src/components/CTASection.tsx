import { motion } from "framer-motion";

const CTASection = () => (
  <section id="contact" className="py-24 md:py-32 border-t border-border/30">
    <div className="container max-w-2xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
          Ready to <span className="text-gradient">Dominate Google?</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
          Don't let your competitors take the #1 spot. Contact Action Media Network today and let us get your business ranking where it belongs.
        </p>
        <a
          href="mailto:contact@actionmedianetwork.com"
          className="inline-block px-10 py-4 rounded-lg font-heading text-lg font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-opacity animate-pulse-glow"
        >
          Get Started Today
        </a>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
