import { motion } from "framer-motion";
import { Search, TrendingUp, Shield } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Rank #1 in 90 Days",
    description:
      "Studies show that 91% of your customers are looking for you online. Majority of them will choose to do business with the #1 website on Google. We get your website ranked #1 in as little as 90 days through our cutting-edge Local SEO strategies — nobody else can guarantee you that, except us.",
  },
  {
    icon: TrendingUp,
    title: "Double Your Sales",
    description:
      "When your site is #1, you'll attract more leads and customers to you, credit card in hand, ready to buy. You'll notice your website traffic and sales increase significantly. Some of our customers have doubled their leads and sales while working with us.",
  },
  {
    icon: Shield,
    title: "100% Full Exclusivity",
    description:
      "We can only work with ONE business category per city, because not everyone can have the #1 spot on Google. So if you get a chance to work with us, you'll get full exclusivity with our Small Business SEO services, and your competitors can't use us anymore.",
  },
];

const ServicesSection = () => {
  return (
    <section id="why-us" className="py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-heading font-semibold text-sm tracking-widest uppercase mb-3">
            Why Choose AMN
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold">
            What Sets Us <span className="text-gradient">Apart</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="surface-elevated rounded-xl p-8 border border-border/50 hover:glow-border transition-shadow duration-500 group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
