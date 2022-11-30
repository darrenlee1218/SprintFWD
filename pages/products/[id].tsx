import React, { useState } from "react";
import Router from "next/router";
import { NextPageContext } from "next";
import { getSingleProduct } from "../../services/product.service";
import Header from "../../components/Header";
import Image from "next/image";
import Currency from "../../components/Currency";
import { IoAddOutline, IoRemoveOutline, IoHeartOutline } from "react-icons/io5";
import { useAppDispatch } from "../../hooks/redux.hook";
import { setCart } from "../../slices/cart/cartSlice";
import QuantityToggle from "../../components/QuantityToggle";

interface Props {
  product: any;
}

function ProductDetails(props: Props) {
  const { product } = props;
  const [itemCount, setItemCount] = useState(1);
  const dispatch = useAppDispatch();

  const getDiscountPrice = (perc: number, price: number) => {
    const discountAmount = (price * perc) / 100;
    const amount = price - discountAmount;
    return {
      discount: discountAmount,
      price: amount,
    };
  };

  const addCart = (product: any) => {
    dispatch(
      setCart({
        product: {...product, amount: itemCount}
      })
    );
  }

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header />
      <div className="flex-1 h-full overflow-scroll">
        <div className="h-full max-w-6xl mx-auto py-10">
          {!product ? (
            <div>Not Found!</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-10">
              <div className="">
                <div className="w-full md:h-full bg-neutral-100 flex items-center justify-center rounded-lg">
                  <Image
                    src={product.thumbnail}
                    alt={product.title}
                    width={100}
                    height={100}
                    className="w-full"
                  />
                </div>
                <div className="border-t-4 mt-2 border-primary-400 hidden md:flex flex-wrap gap-2 py-2">
                  {product.images.map((img: string, index: number) => (
                    <div
                      key={index}
                      className="w-28 h-28 border border-neutral-300 rounded-lg overflow-hidden flex item-center justify-center"
                    >
                      <Image
                        src={img}
                        alt={product.title}
                        width={100}
                        height={100}
                        className="w-fit"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="px-5">
                <div>
                  <p className="text-3xl font-bold">{product.title}</p>
                  <p className="text-neutral-400 mt-1">
                    Brand: <span className="text-dark">{product.brand}</span>
                  </p>
                </div>
                <div className="grid grid-cols-2 mt-5">
                  <p className="text-neutral-400 mt-1">
                    Condition: <span className="text-dark">New</span>
                  </p>
                  <p className="text-neutral-400 mt-1">
                    Stock: <span className="text-dark">{product.stock}</span>
                  </p>
                  <p className="text-neutral-400 mt-1">
                    Category:{" "}
                    <span className="text-dark capitalize">
                      {product.category}
                    </span>
                  </p>
                </div>
                <div className="mt-7 flex-col md:flex-row flex md:items-center justify-between gap-2">
                  <div className="">
                    <p className="text-2xl font-extrabold">
                      <Currency
                        price={
                          Number(
                            getDiscountPrice(
                              product.discountPercentage,
                              product.price
                            ).price
                          ) * itemCount
                        }
                      />
                    </p>
                    <p className="line-through text-neutral-500 mt-1 font-medium text-lg">
                      {getDiscountPrice(
                        product.discountPercentage,
                        product.price
                      ).discount.toFixed(2)}
                      <span className="ml-1">USD</span>
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <QuantityToggle itemCount={itemCount} setItemCount={setItemCount} />
                    <button className="text-light bg-primary-600 px-4 py-3 rounded-full flex items-center justify-center" onClick={() => addCart(product)}>
                      <IoAddOutline />
                      <span>Add to cart</span>
                    </button>
                  </div>
                </div>
                <div className="flex items-center mt-2 gap-2 justify-start md:justify-end">
                  <IoHeartOutline className="text-2xl stroke-primary-600" />
                  <span>Add to my wish list</span>
                </div>
                <div className="mt-7">
                  <p className="text-3xl font-semibold">Description</p>
                  <p className="text-lg font-light text-neutral-500 mt-3">
                    {product.description}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;

export const getServerSideProps = async (ctx: NextPageContext) => {
  try {
    const { id } = ctx.query;
    if (!id) {
      return;
    }
    const product = await getSingleProduct(id.toString());
    return {
      props: {
        product: product,
      },
    };
  } catch (e: any) {
    return {
      props: {},
    };
  }
};
