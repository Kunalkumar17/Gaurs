const Form = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/60 z-[999] flex items-center justify-center">

      <div className="bg-white rounded-xl p-8 w-[400px] shadow-2xl relative">

        {/* close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-500 hover:text-black"
        >
          ✕
        </button>

        <h3 className="text-2xl font-semibold mb-4">
          Request Floor Plan
        </h3>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            onClose(); // close after submit
          }}
          className="space-y-4"
        >
          <input required placeholder="Full Name" className="w-full border px-4 py-2 rounded" />
          <input required type="email" placeholder="Email" className="w-full border px-4 py-2 rounded" />
          <input required placeholder="Phone" className="w-full border px-4 py-2 rounded" />

          <button className="w-full bg-black text-white py-3 rounded">
            Submit
          </button>
        </form>

      </div>
    </div>
  );
};

export default Form;