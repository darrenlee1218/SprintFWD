import React from "react";
import { IoAddOutline, IoRemoveOutline, IoHeartOutline } from "react-icons/io5";

interface QuantityProps {
  itemCount: number;
  setItemCount: Function;
  showItem?: boolean;
  cart?: any;
}

function QuantityToggle({ itemCount, setItemCount, showItem, cart }: QuantityProps) {
  const toggleItemCount = (sign: string) => {
    if (sign == "+") {
      const count = itemCount + 1;
      return setItemCount(count, cart);
    }

    if (sign == "-") {
      let count = itemCount - 1;
      if (count < 1) {
        count = 1;
      }
      return setItemCount(count, cart);
    }
  };

  return (
    <div className="bg-neutral-100 rounded-full flex items-center overflow-hidden justify-center">
      <button className="px-3 bg-neutral-200 py-4 w-full" disabled={itemCount == 1}>
        <IoRemoveOutline onClick={() => toggleItemCount("-")} />
      </button>
      {showItem ? (
        <span className="px-2">{`${itemCount} item${
          itemCount > 1 ? "s" : ""
        }`}</span>
      ) : (
        <span className="px-6">{itemCount}</span>
      )}
      <button
        className="px-3 bg-neutral-200 py-4 w-full"
        onClick={() => toggleItemCount("+")}
      >
        <IoAddOutline />
      </button>
    </div>
  );
}

export default QuantityToggle;
