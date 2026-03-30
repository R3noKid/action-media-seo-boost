import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Free SEO Audit", desc: "We analyze your current online presence, competitors, and local market to identify opportunities." },
  { num: "02", title: "Custom Strategy", desc: "We build a tailored Local SEO plan focused on getting you to #1 in your specific business category and city." },
  { num: "03", title: "Implementation", desc: "Our team executes the strategy — on-page optimization, local citations, reviews management, and more." },
  { num: "04", title: "Results & Growth", desc: "Watch your rankings climb, traffic increase, and leads double. We track everything with transparent reporting." },
];

const HowItWorksSection = () => (
  <section id="how-it-works" className="py-24 md:py-32 border-t border-border/30">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-primary font-heading font-semibold text-sm tracking-widest uppercase mb-3">
          Our Process
        </p>
        <h2 className="font-heading text-3xl md:text-5xl font-bold">
          How It <span className="text-gradient">Works</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative"
          >
            <span className="font-heading text-6xl font-bold text-primary/10">{step.num}</span>
            <h3 className="font-heading text-lg font-bold mt-2 mb-3">{step.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
