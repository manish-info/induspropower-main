import { Phone, Mail, MapPin } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-2 flex flex-wrap items-center justify-between text-sm gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <a href="tel:+919876543210" className="flex items-center gap-1.5 hover:text-accent transition-colors">
              <Phone className="w-3.5 h-3.5" />
              <span>+91 9368585008</span>
            </a>
            <a href="mailto:info@induspropower.com" className="flex items-center gap-1.5 hover:text-accent transition-colors">
              <Mail className="w-3.5 h-3.5" />
              <span>support@indusecofuels.com</span>
            </a>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5" />
            <span>India</span>
          </div>
        </div>
      </div>
      {/* Main nav */}
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* <div className="w-10 h-10 rounded-lg bg-gradient-hero flex items-center justify-center">
            <span className="text-primary-foreground font-heading font-bold text-lg">IP</span> 
          </div> */}
          <img
  src="logo.jpeg"
  alt="Logo"
  className="h-10 w-10 object-contain rounded-lg"
/>
          <div>
            <h1 className="font-heading font-bold text-lg leading-tight text-foreground">INDUS PROPOWER</h1>
            <p className="text-[10px] tracking-[0.2em] uppercase font-medium text-accent-foreground">TECHNO INDUSTRIES</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          {["Home", "Products", "About", "Contact"].map((item) =>
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">

              {item}
            </a>
          )}
        </nav>
        <a
          href="#contact"
          className="hidden sm:inline-flex bg-secondary text-secondary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">

          Get Quote
        </a>
      </div>
    </header>);

};

export default Header;