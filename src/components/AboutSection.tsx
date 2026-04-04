import { Building2, Users, Award, Sun, Mail, Phone } from "lucide-react";
import { Avatar, AvatarImage ,AvatarFallback } from "@/components/ui/avatar";

const stats = [
  { icon: Sun, value: "10MW+", label: "Installed Capacity" },
  { icon: Users, value: "2000+", label: "Happy Clients" },
  { icon: Building2, value: "500+", label: "Projects Completed" },
  { icon: Award, value: "15+", label: "Years Experience" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div>
            <span className="inline-block text-secondary font-semibold text-sm tracking-wider uppercase mb-3">About Us</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Trusted Partner in <span className="text-secondary">Solar Energy</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Indus Propower Techno Industries is a leading supplier of lithium batteries for E-rickshaw,inverter, Solar batteries for industrial use, Solar cells, Solar electric
panels, Solar energy collectors for generating electricity, Solar-powered
battery chargers, Solar wafers, Wafers for solar cells, Lithium-ion batteries,
Inverters [electricity] across India. We are committed to delivering high-quality, cost-effective renewable energy solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              With a comprehensive product range and deep industry expertise, we serve residential, commercial, and industrial clients — helping them transition to clean energy with confidence.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center bg-primary text-primary-foreground px-7 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Partner With Us
            </a>
          </div>
          { false && (
          <div className="grid grid-cols-2 gap-4">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="bg-card rounded-xl p-6 shadow-card text-center">
                <Icon className="w-8 h-8 text-secondary mx-auto mb-3" />
                <div className="font-heading text-2xl font-bold text-foreground mb-1">{value}</div>
                <div className="text-muted-foreground text-sm">{label}</div>
              </div>
          ))}
            
          </div>
          )}
        </div>

        {/* Founder Section */}
        <div className="mt-16 text-center">
          <span className="inline-block text-secondary font-semibold text-sm tracking-wider uppercase mb-3">Leadership</span>
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">Meet Our Founder</h3>
          <div className="max-w-md mx-auto bg-card rounded-xl p-8 shadow-card">
            {/* <Avatar className="w-24 h-24 text-xl"> */}
              <Avatar className="w-28 h-28 border-4 border-primary shadow-lg mx-auto">
  <AvatarImage 
    src="/founder.jpeg" 
    alt="Akhilesh Pratap Singh"
    className="object-cover"
  />
  <AvatarFallback>APS</AvatarFallback>
</Avatar>
            <h4 className="font-heading text-xl font-bold text-foreground">AKHILESH PRATAP SINGH</h4>
            <p className="text-secondary font-medium text-sm mb-4">Founder & Managing Director</p>
            <div className="flex flex-col gap-2 items-center text-muted-foreground text-sm">
              <a href="mailto:hfdtrd@gail.com" className="flex items-center gap-2 hover:text-secondary transition-colors">
                <Mail className="w-4 h-4" /> akhleshprtap2019@gmail.com
              </a>
              <a href="tel:8765435798" className="flex items-center gap-2 hover:text-secondary transition-colors">
                <Phone className="w-4 h-4" /> 9368585008
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Core Member Section */}
<div className="mt-16 text-center">
  <span className="inline-block text-secondary font-semibold text-sm tracking-wider uppercase mb-3">
    {/* Leadership */}
  </span>

  <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-10">
    Core Members
  </h3>

  {/* GRID */}
  <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
    
    {/* Member 1 */}
    <div className="bg-card rounded-xl p-6 shadow-card text-center">
      <Avatar className="w-28 h-28 border-primary shadow-lg mx-auto block">
  <AvatarImage 
    src="/member1.jpeg" 
    alt="K Ganesanh"
    className="object-cover"
  />
  <AvatarFallback>KG</AvatarFallback>
</Avatar>
      <h4 className="font-heading text-xl font-bold text-foreground">
        K Ganesan
      </h4>

      <p className="text-secondary font-medium text-sm mt-1">
        Executive VP - Manufacturing (Automotive)
      </p>

      <p className="text-muted-foreground text-sm mt-1">
        Exide Industries Ltd (Retired)
      </p>

      <p className="text-muted-foreground text-sm mt-1">
        Director - Coslight India Telecom Pvt Ltd (Retired)
      </p>

      <div className="mt-4 space-y-2 text-sm">
        <p>📞 9920406586</p>
        <p>✉️ kganesan28@gmail.com</p>
      </div>
    </div>

    {/* Member 2 */}
    <div className="bg-card rounded-xl p-6 shadow-card text-center">
      <Avatar className="w-28 h-28 border-primary shadow-lg mx-auto block">
  <AvatarImage 
    src="/member2.jpeg" 
    alt="Binay Shankar Prasad"
    className="object-cover"
  />
  <AvatarFallback>BSP</AvatarFallback>
</Avatar>
      <h4 className="font-heading text-xl font-bold text-foreground">
        Binay Shankar Prasad
      </h4>

      <p className="text-secondary font-medium text-sm mt-1">
        {/* MA - HR & Public Relations */}
        Sales & Marketing Head
      </p>

      <p className="text-muted-foreground text-sm mt-1">
        VRLA & Lead Acid Battery Marketing
      </p>

      <p className="text-muted-foreground text-sm mt-1">
        25+ Years Experience
      </p>

      <div className="mt-4 space-y-2 text-sm">
        <p>📞 9625828253</p>
      </div>
    </div>

  </div>
</div>
    </section>
  );
};

export default AboutSection;
