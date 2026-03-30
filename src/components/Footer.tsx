const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 flex items-center justify-center">
  <img src="/logo.jpeg" alt="Indus Propower Logo" className="h-9 w-9 object-contain" />
</div>
              <div>
                <div className="font-heading font-bold text-sm">INDUS PROPOWER</div>
                <div className="text-[9px] tracking-[0.2em] uppercase opacity-60">Techno Industries</div>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Your trusted partner for premium solar energy products and solutions across India.
            </p>
          </div>
          <div>
            <h4 className="font-heading font-semibold mb-4 text-sm">Products</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>Solar Panels</li>
              <li>Lithium Batteries</li>
              <li>Solar Inverters</li>
              <li>Mounting Structures</li>
              <li>Charge Controllers</li>
              <li>Cables & Connectors</li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-semibold mb-4 text-sm">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#home" className="hover:text-primary-foreground transition-colors">Home</a></li>
              <li><a href="#products" className="hover:text-primary-foreground transition-colors">Products</a></li>
              <li><a href="#about" className="hover:text-primary-foreground transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-primary-foreground transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-center text-sm text-primary-foreground/50">
          © {new Date().getFullYear()} Indus propower techno industries. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
