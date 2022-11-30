import React from "react";
import Header from "../components/Header";
import { useAppSelector } from "../hooks/redux.hook";
import Currency from "../components/Currency";
import CartComponent from "../components/Cart";
import Link from "next/link";

function Cart() {
  const { cartItem, amount, total } = useAppSelector((state) => state.cart);

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header />
      <div className="flex-1 h-full overflow-scroll">
        <div className="h-full max-w-6xl mx-auto py-10 px-5">
          <p className="font-bold text-3xl">Cart items</p>
          <div className="flex gap-1 flex-col md:flex-row mt-5">
            <CartComponent />
            {cartItem.length > 0 && (
              <div className="w-full md:w-72">
                <div className="w-full bg-neutral-100 rounded-lg">
                  <div className="p-5">
                    <p className="font-semibold">Order Summary</p>
                    <p className="text-neutral-500 flex justify-between items-center">
                      Item(s) Total <span className="text-dark">{amount}</span>
                    </p>
                  </div>
                  <div className="border-t-4 border-light px-5 py-2 flex items-center justify-between">
                    <div>
                      <p className="text-neutral-500">Total Price</p>
                      <p className="font-bold">
                        <Currency price={total} />
                      </p>
                    </div>
                    <Link href={`/checkout`}>
                      <button className="bg-primary-600 py-2 px-5 text-light rounded-sm">
                        Checkout
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
