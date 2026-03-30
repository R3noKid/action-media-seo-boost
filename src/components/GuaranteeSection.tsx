import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const GuaranteeSection = () => (
  <section id="guarantee" className="py-24 md:py-32 border-t border-border/30">
    <div className="container max-w-3xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-8">
          <ShieldCheck className="w-8 h-8 text-primary" />
        </div>
        <p className="text-primary font-heading font-semibold text-sm tracking-widest uppercase mb-3">
          Our Guarantee
        </p>
        <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
          Page One or <span className="text-gradient">You Don't Pay</span>
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-8">
          We're so confident in our Local SEO strategies that we guarantee your business will rank on the first page of Google within 90 days — or you don't pay. No other SEO company makes that promise. We put our money where our mouth is because we know our system works.
        </p>
        <a
          href="#contact"
          className="inline-block px-8 py-4 rounded-lg font-heading font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
        >
          Claim Your Spot Now
        </a>
      </motion.div>
    </div>
  </section>
);

export default GuaranteeSection;
