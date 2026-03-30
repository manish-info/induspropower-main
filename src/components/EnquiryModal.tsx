import { useState } from "react";

const EnquiryModal = ({ isOpen, onClose, product }) => {
    const [name, setName] = useState("");
const [phone, setPhone] = useState("");
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");

const handleSubmit = (e) => {
  e.preventDefault();

  const text = `Hello, Indus propower.\n\nI want enquiry for ${product}

Name: ${name}
Phone: ${phone}
Email: ${email}

Message: ${message}`;

  const url = `https://wa.me/919368585008?text=${encodeURIComponent(text)}`;

  window.open(url, "_blank");
};

  if (!isOpen) return null;

  return (

    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">

      <div className="bg-white p-6 rounded-xl w-[90%] max-w-md relative">

        <button
          className="absolute top-3 right-3 text-gray-500"
          onClick={onClose}
        >
          ✕
        </button>

        <h2 className="text-xl font-semibold mb-4">
          Enquiry for {product}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
 type="text"
 placeholder="Full Name"
 value={name}
 onChange={(e)=>setName(e.target.value)}
 className="w-full border rounded-lg p-3"
/>

         <input
 type="tel"
 placeholder="Phone Number"
 value={phone}
 onChange={(e)=>setPhone(e.target.value)}
 className="w-full border rounded-lg p-3"
/>

          <input
 type="email"
 placeholder="Email"
 value={email}
 onChange={(e)=>setEmail(e.target.value)}
 className="w-full border rounded-lg p-3"
/>

          <textarea
 placeholder="Message"
 value={message}
 onChange={(e)=>setMessage(e.target.value)}
 className="w-full border rounded-lg p-3"
/>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg"
          >
            Send Enquiry
          </button>

        </form>

      </div>

    </div>
  );
};

export default EnquiryModal;