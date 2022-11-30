import React from "react";
import { IoCartOutline, IoHeartOutline } from "react-icons/io5";
import { useAppDispatch } from "../hooks/redux.hook";
import { setCart } from "../slices/cart/cartSlice";
import Link from "next/link";

function Product({ product }: { product: any }) {
  const dispatch = useAppDispatch();

  const addToCart = (product: any) => {
    dispatch(
      setCart({
        product: { ...product, amount: 1 },
      })
    );
  };
  return (
    <div className="rounded-2xl overflow-hidden border border-neutral-300 group">
      <div className="bg-neutral-100 flex items-center justify-center h-56 relative overflow-hidden">
        <Link href={`/products/${product.id}`} key={product.id}>
          <img
            className="group-hover:scale-125 transition-all duration-700"
            src={product.thumbnail}
          />
        </Link>
        <div className="absolute z-50 top-0 left-0 right-0 py-2 flex items-center px-5 bg-dark bg-opacity-10">
          <button className="mt-3">
            <IoHeartOutline className="text-3xl stroke-primary-500" />
          </button>
        </div>
      </div>
      <div className="p-5 border-t border-neutral-300 w-full">
        <Link href={`/products/${product.id}`} key={product.id}>
          <p className="font-semibold text-xl truncate">{product.title}</p>
        </Link>
        <div className="flex justify-between items-center mt-4">
          <div>
            <p className="text-sm text-neutral-300">Price</p>
            <p className="font-bold text-xl">${product.price}</p>
          </div>
          <button
            onClick={() => addToCart(product)}
            className="bg-primary-500 h-10 w-10 rounded-xl flex items-center justify-center"
          >
            <IoCartOutline className="text-2xl stroke-light" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
