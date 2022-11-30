import React from "react";
import {
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement
} from "@stripe/react-stripe-js";
import { CARD_OPTIONS } from "../constant/stripe";

const SplitForm = () => {
  const options = CARD_OPTIONS;

  return (
    <div className="flex flex-col gap-2 justify-start">
      <label className="text-neutral-500">
        Card number
        <CardNumberElement
          options={options}
          className="py-3 bg-light px-2 mt-1 shadow-sm border border-neutral-300 rounded-md"
        />
      </label>
      <div className="grid grid-cols-2 gap-5">
        <label className="text-neutral-500">
          Expiration date
          <CardExpiryElement
            options={options}
            className="py-3 bg-light px-2 mt-1 shadow-sm border border-neutral-300 rounded-md"
          />
        </label>
        <label className="text-neutral-500">
          CVC
          <CardCvcElement
            options={options}
            className="py-3 bg-light px-2 mt-1 shadow-sm border border-neutral-300 rounded-md"
          />
        </label>
      </div>
    </div>
  );
};

export default SplitForm;
