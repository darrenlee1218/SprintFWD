import React from "react";
import Image from "next/image";
import Header from "../components/Header";
import { useAppDispatch, useAppSelector } from "../hooks/redux.hook";
import Currency from "../components/Currency";
import QuantityToggle from "../components/QuantityToggle";
import { removeSingleCart, toggleCartAmount } from "../slices/cart/cartSlice";

function CartComponent({ mini }: { mini?: boolean }) {
  const { cartItem, amount, total } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const setItemCount = (count: number, cart: any) => {
    dispatch(
      toggleCartAmount({
        count: count,
        product: cart,
      })
    );
  };

  const removeCart = (cart: any) => {
    dispatch(
      removeSingleCart({
        product: cart,
      })
    );
  };

  return (
    <>
      {cartItem.length ? (
        <div className="flex-1 overflow-scroll">
          <table className="w-[40rem] md:w-full">
            <thead>
              <tr className="text-left text-neutral-400">
                {!mini && (
                  <>
                    <th className="py-2">PRODUCT</th>
                    <th className="py-2">PRICE</th>
                    <th className="py-2">QUANTITY</th>
                    <th className="py-2">TOTAL</th>
                  </>
                )}
              </tr>
            </thead>
            <tbody>
              {cartItem.map((cart: any, index: number) => (
                <tr key={index}>
                  <td>
                    <div className="flex items-center gap-3 py-2">
                      <div className="rounded-full overflow-hidden h-20 bg-neutral-100 p-1 flex items-center w-20">
                        <Image
                          src={cart.thumbnail}
                          height={100}
                          width={100}
                          alt={cart.title}
                          className="h-fit w-full"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-lg">{cart.title}</p>
                        <p className="text-neutral-400">Brand: {cart.brand}</p>
                        <button
                          onClick={() => removeCart(cart)}
                          className="text-primary-600"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </td>
                  {!mini && (
                    <>
                      <td>
                        <p className="font-semibold">
                          <Currency price={cart.price} />
                        </p>
                      </td>
                      <td>
                        <div className="w-[9rem]">
                          <QuantityToggle
                            itemCount={cart.amount}
                            setItemCount={setItemCount}
                            cart={cart}
                          />
                        </div>
                      </td>
                      <td>
                        <p className="font-semibold">
                          <Currency price={cart.price * cart.amount} />
                        </p>
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div>No Cart</div>
      )}
    </>
  );
}

export default CartComponent;
