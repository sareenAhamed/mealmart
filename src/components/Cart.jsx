import React from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate()
  const navigateCheckout = () => {
    navigate("/checkout")
  }
  return (
    <div className="container mx-auto p-6 mt-6">
      <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
        {/* Cart Items Section */}
        <div className="col-span-2">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Items</th>
                <th className="text-left py-2">Title</th>
                <th className="text-left py-2">Price</th>
                <th className="text-left py-2">Remove</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="6" className="text-center py-4">
                  Your cart is empty.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Cart Totals Section */}
        <div className="col-span-1 border p-4 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold mb-4">Cart Totals</h2>
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>$0</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Delivery Fee</span>
            <span>$0</span>
          </div>
          <div className="flex justify-between font-bold mb-4">
            <span>Total</span>
            <span>$0</span>
          </div>
          <button className="w-full bg-daraz text-white py-2 rounded-md hover:bg-orange-400" onClick={navigateCheckout}>
            CHECKOUT
          </button>
          <div className="mt-6">
            <p className="text-sm mb-2">If you have a promo code, enter it here.</p>
            <div className="flex">
              <input
                type="text"
                placeholder="Promocode"
                className="border p-2 rounded-l-md w-full"
              />
              <button className="bg-black text-white px-4 rounded-r-md">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
