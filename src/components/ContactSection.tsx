import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
  name: "",
  phone: "",
  email: "",
  message: "",
});

const handleChange = (e: any) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = (e: any) => {
  e.preventDefault();

  const whatsappMessage = `
New Enquiry

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email || "Not Provided"}

Message:
${formData.message}
`;

  window.open(
    `https://wa.me/919368585008?text=${encodeURIComponent(whatsappMessage)}`,
    "_blank"
  );

  setFormData({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
};
  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="inline-block text-secondary font-semibold text-sm tracking-wider uppercase mb-3">Contact</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Ready to go solar? Reach out for a free consultation and custom quote.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="space-y-6">
            {[
              { icon: Phone, title: "Phone", detail: "+91 93685 85008", href: "tel:+919368585008" },
              { icon: Mail, title: "Email", detail: "akhleshprtap2019@gmail.com", href: "mailto:akhleshprtap2019@gmail.com" },
              {
  icon: MapPin,
  title: "Address",
  detail: "Ward No.1, Bharwain Road, Dev Nagar, Una, Himachal Pradesh - 177201",
  href: "https://www.google.com/maps/search/?api=1&query=Dev+Nagar+Una+Himachal+Pradesh+177201"
},
              
            ].map(({ icon: Icon, title, detail, href }) => (
              <a
  key={title}
  href={href}
  // className={`flex items-start gap-4 bg-card p-5 rounded-xl border border-border shadow-card hover:shadow-card-hover transition-all group ${title === "Address" ? "min-h-[280px]" : ""}`}
 className={`flex items-start gap-4 bg-card p-5 rounded-xl border border-border shadow-card hover:shadow-card-hover transition-all group ${title === "Address" ? "min-h-[320px]" : ""}`}
>
                <div className="w-11 h-11 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 transition-colors">
                  <Icon className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground text-sm">{title}</h3>
                  <p className="text-muted-foreground text-sm mt-0.5">{detail}</p>
           {title === "Address" && (
<div className="mt-auto">
<a
href={href}
target="_blank"
className="inline-block bg-green-600 text-white px-4 py-2 rounded-md text-sm hover:bg-green-700"
>
View on Google Map
</a>

<iframe
src="https://maps.google.com/maps?q=Dev%20Nagar%20Una%20Himachal%20Pradesh%20177201&t=&z=13&ie=UTF8&iwloc=&output=embed"
className="w-full h-40 rounded-lg border mt-3"
loading="lazy"
></iframe>
</div>
)}
                </div>
              </a>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="bg-card p-6 rounded-xl border border-border shadow-card space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Full Name</label>
              <input
  type="text"
  name="name"
  value={formData.name}
  onChange={handleChange}
  required
  className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
  placeholder="Your name"
/>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Phone Number</label>
              <input
  type="tel"
  name="phone"
  value={formData.phone}
  onChange={handleChange}
  required
  className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
  placeholder="+91 XXXXX XXXXX"
/>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
              
              <input
  type="email"
  name="email"
  value={formData.email}
  onChange={handleChange}
  className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
  placeholder="you@example.com"
/>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
             
              <textarea
  name="message"
  value={formData.message}
  onChange={handleChange}
  rows={4}
  className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
  placeholder="Tell us about your requirements..."
/>
            </div>
            <button
              type="submit"
              className="w-full bg-secondary text-secondary-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Send Enquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
