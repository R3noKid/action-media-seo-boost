import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Marcus T.",
    business: "Elite Auto Detailing",
    quote:
      "AMN got us to the top of Google in under 60 days. Our phone hasn't stopped ringing since. Best investment we've made for our business.",
    stars: 5,
  },
  {
    name: "Sarah K.",
    business: "Bloom & Branch Florist",
    quote:
      "We went from page 4 to the #1 spot for our main keyword. The team is transparent, professional, and actually delivers on their promises.",
    stars: 5,
  },
  {
    name: "David R.",
    business: "Summit Roofing Co.",
    quote:
      "Other SEO companies made big promises and never delivered. AMN backed it up with a guarantee — and they came through. Revenue is up 140%.",
    stars: 5,
  },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="py-24 md:py-32 border-t border-border/30 bg-secondary/30">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-primary font-heading font-semibold text-sm tracking-widest uppercase mb-3">
          Testimonials
        </p>
        <h2 className="font-heading text-3xl md:text-5xl font-bold">
          What Our <span className="text-gradient">Clients Say</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="rounded-2xl border border-border/50 bg-card p-8 flex flex-col"
          >
            <div className="flex gap-1 mb-4">
              {Array.from({ length: t.stars }).map((_, s) => (
                <Star key={s} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-foreground leading-relaxed mb-6 flex-1">"{t.quote}"</p>
            <div>
              <p className="font-heading font-semibold text-foreground">{t.name}</p>
              <p className="text-sm text-muted-foreground">{t.business}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
