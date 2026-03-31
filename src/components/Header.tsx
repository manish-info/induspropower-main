import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border relative">
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
              <span>support@induspropower.com</span>
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
          <img
  src="logo.jpeg"
  alt="Logo"
  className="h-19 w-20 object-contain rounded-lg"
/>
          <div>
            <h1 className="font-heading font-bold text-lg leading-tight text-foreground">INDUS PROPOWER</h1>
            <p className="text-[15px] tracking-[0.1`em] uppercase font-medium text-accent-foreground">TECHNO INDUSTRIES</p>
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
        {menuOpen && (
<div
className="fixed inset-0 bg-black/40 z-40"
onClick={() => setMenuOpen(false)}
></div>
)}
        <button
  className="md:hidden text-2xl"
  onClick={() => setMenuOpen(!menuOpen)}
>
  ☰
</button>
        {menuOpen && (
  <div
className={`md:hidden fixed top-0 right-0 h-screen w-1/2 bg-white shadow-lg px-6 py-6 space-y-6 z-40 transform transition-transform duration-300 ${
menuOpen ? "translate-x-0" : "translate-x-full"
}`}
>
  <button
className="text-2xl mb-4"
onClick={() => setMenuOpen(false)}
>
✕
</button>
    <a href="/" className="block" onClick={() => setMenuOpen(false)}>Home</a>
<a href="/products" className="block" onClick={() => setMenuOpen(false)}>Products</a>
<a href="#about" className="block" onClick={() => setMenuOpen(false)}>About</a>
<a href="#contact" className="block" onClick={() => setMenuOpen(false)}>Contact</a>
<a
href="#contact"
className="block bg-green-600 text-green text-center py-1 rounded-lg mt-4"
onClick={() => setMenuOpen(false)}
>
Get Quote
</a>
  </div>
)}
        <a
          href="#contact"
          className="hidden sm:inline-flex bg-secondary text-secondary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">

          Get Quote
        </a>
       
      </div>
    </header>);

};

export default Header;