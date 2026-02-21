import { useState } from "react";

const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    console.log("Form Submitted:", formData);

    // 👉 send to backend / email / CRM here

    setTimeout(() => {
      setLoading(false);
      alert("Submitted successfully!");
      setFormData({ name: "", email: "", phone: "" });
    }, 1000);
  };

  return (
    <div className="bg-white py-2 px-4 border-b w-full">
      <div className="w-full mx-auto bg-gray-50 p-8 rounded-2xl shadow-sm">
        
        <h2 className="text-2xl font-semibold text-center mb-2">
          Get More Details
        </h2>

        <p className="text-gray-500 text-center mb-8">
          Fill the form and our team will contact you shortly.
        </p>

        <form
          onSubmit={handleSubmit}
          className="grid md:grid-cols-4 gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="md:col-span-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            value={formData.email}
            onChange={handleChange}
            className="md:col-span-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            value={formData.phone}
            onChange={handleChange}
            className="md:col-span-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          />

          <button
            type="submit"
            disabled={loading}
            className="md:col-span-1 bg-black text-white rounded-lg px-3 py-2 hover:bg-gray-900 transition"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LeadForm;