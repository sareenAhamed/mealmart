import React from "react";

const Checkout = () => {
  return (
    <div className="container mx-auto p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Delivery Information Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Delivery Information</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-daraz"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-daraz"
              />
            </div>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-daraz"
            />
            <input
              type="text"
              placeholder="Street"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-daraz"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="City"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-daraz"
              />
              <input
                type="text"
                placeholder="State"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-daraz"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Zip code"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-daraz"
              />
              <input
                type="text"
                placeholder="Country"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-daraz"
              />
            </div>
            <input
              type="text"
              placeholder="Phone"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-daraz"
            />
          </form>
        </div>

        {/* Cart Totals Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Cart Totals</h2>
          <div className="space-y-4 text-gray-700">
            <div className="flex justify-between border-b pb-2">
              <span>Subtotal</span>
              <span>$0</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span>Delivery Fee</span>
              <span>$0</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>$0</span>
            </div>
          </div>
          <button
            className="mt-6 w-full bg-daraz text-white py-3 rounded hover:bg-orange-400 transition"
          >
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
