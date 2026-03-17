"use client";

import { useCart } from "@/context/CartContext";

export default function CartDrawer() {
  const { cart, cartOpen, setCartOpen, updateQty, cartTotal, cartCount } = useCart();

  return (
    <>
      {cartOpen && (
        <div
          onClick={() => setCartOpen(false)}
          className="fixed inset-0 bg-black/40 z-[300] transition-opacity"
        />
      )}
      <div
        className="fixed top-0 h-screen w-[400px] max-w-[90vw] bg-white z-[301] flex flex-col transition-all duration-300 ease-in-out"
        style={{
          right: cartOpen ? 0 : -420,
          boxShadow: "-8px 0 30px rgba(0,0,0,0.1)",
        }}
      >
        {/* Header */}
        <div className="p-5 px-6 border-b border-border flex justify-between items-center">
          <h3 className="font-bold text-lg text-navy">Your Cart ({cartCount})</h3>
          <button
            onClick={() => setCartOpen(false)}
            className="bg-transparent border-none text-2xl cursor-pointer text-text-light"
          >
            &times;
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {cart.length === 0 ? (
            <div className="text-center py-12 text-text-light">
              <p className="text-4xl mb-3">&#128722;</p>
              <p>Your cart is empty</p>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center py-3.5 border-b border-border">
                <div className="flex-1">
                  <p className="font-semibold text-sm text-navy mb-1">{item.name}</p>
                  <p className="text-sm text-teal font-semibold">${item.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQty(item.id, item.qty - 1)}
                    className="w-7 h-7 rounded-md border border-border bg-white cursor-pointer text-base flex items-center justify-center"
                  >
                    -
                  </button>
                  <span className="text-sm font-semibold min-w-[20px] text-center">{item.qty}</span>
                  <button
                    onClick={() => updateQty(item.id, item.qty + 1)}
                    className="w-7 h-7 rounded-md border border-border bg-white cursor-pointer text-base flex items-center justify-center"
                  >
                    +
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="p-5 px-6 border-t border-border">
            <div className="flex justify-between mb-4">
              <span className="font-semibold text-navy">Total</span>
              <span className="font-bold text-xl text-navy">${cartTotal.toFixed(2)}</span>
            </div>
            <button className="w-full py-3.5 rounded-full bg-teal text-white border-none text-base font-semibold cursor-pointer transition-all duration-300 hover:bg-teal-dark">
              Checkout
            </button>
            <p className="text-center text-xs text-text-light mt-2.5">
              Delivery available across Los Angeles
            </p>
          </div>
        )}
      </div>
    </>
  );
}
