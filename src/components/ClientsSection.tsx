import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const clients = [
  { name: "Bushidokan", url: "http://bushidokan.us/" },
  { name: "Captain Remodeling", url: "#" },
  { name: "Digital Pool", url: "https://digitalpool.com/" },
];

const ClientsSection = () => (
  <section id="clients" className="py-24 md:py-32 border-t border-border/30">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-primary font-heading font-semibold text-sm tracking-widest uppercase mb-3">
          Our Clients
        </p>
        <h2 className="font-heading text-3xl md:text-5xl font-bold">
          Action Media Network <span className="text-gradient">Clients</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
        {clients.map((client, i) => (
          <motion.a
            key={client.name}
            href={client.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="surface-elevated rounded-xl p-6 border border-border/50 hover:glow-border transition-shadow duration-500 text-center group"
          >
            <h3 className="font-heading text-lg font-bold mb-2 group-hover:text-primary transition-colors">
              {client.name}
            </h3>
            <ExternalLink className="w-4 h-4 text-muted-foreground mx-auto group-hover:text-primary transition-colors" />
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default ClientsSection;
