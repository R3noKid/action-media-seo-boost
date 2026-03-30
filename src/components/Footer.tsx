const Footer = () => (
  <footer className="border-t border-border/30 py-8">
    <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="font-heading font-bold text-gradient">Action Media Network</p>
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Action Media Network. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
