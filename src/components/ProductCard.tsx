import EnquiryModal from "./EnquiryModal";
import { useState } from "react";
interface ProductCardProps {
  image: string;
  title: string;
  // category: string;
  description: string;
  features: string[];
}

const ProductCard = ({ image, title,  description, features }: ProductCardProps) => {
  const [showMore, setShowMore] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="group bg-card rounded-xl border border-border shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden">
      <div className="relative overflow-hidden bg-muted aspect-square">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3">
          {/* <span className="bg-secondary text-secondary-foreground text-xs font-semibold px-3 py-1 rounded-full">
            {category}
          </span> */}
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-heading font-bold text-lg text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">

  {showMore ? description : description.slice(0, 80)}

  {description.length > 80 && (
    <span
      className="text-blue-600 cursor-pointer ml-1"
      onClick={() => setShowMore(!showMore)}
    >
      {showMore ? " less" : "...more"}
    </span>
  )}

</p>
        {/* {showMore && (
<ul className="space-y-1.5 mb-5">
  {features.map((f) => (
    <li key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
      <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
      {f}
    </li>
  ))}
</ul>
)} */}
{showMore && (
<>
<p className="text-sm font-semibold mt-2">Key Features</p>

<ul className="space-y-1.5 mb-5">
  {features.map((f) => (
    <li key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
      <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
      {f}
    </li>
  ))}
</ul>

</>
)}
        <button
  onClick={() => setOpenModal(true)}
  className="inline-flex w-full justify-center items-center bg-primary text-white py-2.5 rounded-lg"
>
Enquire Now
</button>

<EnquiryModal
  isOpen={openModal}
  onClose={() => setOpenModal(false)}
  product={title}
/>
      </div>
    </div>
  );
};

export default ProductCard;
