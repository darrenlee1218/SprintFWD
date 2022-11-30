import React, { useEffect } from "react";
import StripeCheckoutForm from "../../components/Checkout";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe, StripeElementsOptions } from "@stripe/stripe-js";
import { useAppSelector } from "../../hooks/redux.hook";
import CartComponent from "../../components/Cart";
import Header from "../../components/Header";
import Currency from "../../components/Currency";
import { useRouter } from "next/router";

export default function Checkout() {
  const { cartItem, amount, total } = useAppSelector((state) => state.cart);
  const router = useRouter();
  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
  );
  const option: StripeElementsOptions = {
    appearance: {
      theme: "stripe",
    },
  };

  useEffect(() => {
    if(cartItem.length < 1) {
        router.back();
    }
  }, [])
 
  if(cartItem.length < 1) {
    return <div></div>
  }

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header />
      <div className="flex-1 h-full overflow-scroll">
        <div className="h-full max-w-6xl mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5 h-full">
            <div className="px-5 mt-5">
              <div className="md:mb-8">
                <p className="text-neutral-500">Proceed with payment</p>
                <p className="text-3xl font-bold">
                  <Currency price={total} />
                </p>
                <p className="text-neutral-400">Total Qty {amount}</p>
              </div>
              <div className="hidden md:block">
                <CartComponent mini={true} />
              </div>
            </div>
            <div className="h-full md:border-l md:px-5 border-neutral-300">
              <div className="max-w-md">
                <Elements stripe={stripePromise} options={option}>
                <StripeCheckoutForm cart={cartItem} />
              </Elements>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
