import React, { useState } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import { useRouter } from "next/router";
import { Button, InputForm } from "./forms/input.form";
import { useForm } from "react-hook-form";
import { checkoutSchemaResolver } from "../schema/checkout.schema";
import SplitForm from "./SplitCardElement";

function StripeCheckoutForm({ cart }: { cart: any }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm(checkoutSchemaResolver);

  const [isProcessing, setProcessingTo] = useState(false);
  const elements = useElements();
  const stripe = useStripe();
  const router = useRouter();

  const handleFormSubmit = async (data: any) => {
    if (!stripe || !elements) {
      return;
    }

    const billingDetails = {
      name: data.name,
      email: data.email,
    };
    setProcessingTo(true);
    const cardNumber = elements.getElement("cardNumber");
    try {
      const payload = {
        cart: cart,
        customer: billingDetails,
      };
      axios
        .post("/api/checkout_session", payload)
        .then((res) => {
          const data = res.data;
          if(data.session.id) {
            const url = data.session.success_url;
            router.push(url);
          }
          setProcessingTo(false);
        })
        .catch((err) => {
          console.log(err);
          setProcessingTo(false);
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <div className="max-w-xl flex flex-col gap-7 p-5">
        <div>
          <p className="font-semibold text-xl mb-2 text-neutral-700">
            Personal Info
          </p>
          <InputForm
            label={"Email"}
            type="text"
            placeholder={"example@email.com"}
            register={register}
            name={"email"}
            errors={errors.email}
          ></InputForm>
        </div>
        <div>
          <p className="font-semibold text-xl mb-2 text-neutral-700">
            Payment details
          </p>
          <SplitForm />
          <InputForm
            label={"Card Name"}
            type="text"
            placeholder={"Darren Lee"}
            register={register}
            name={"name"}
            errors={errors.name}
          ></InputForm>
        </div>
        <Button
          type="submit"
          title={`${isProcessing ? "Processing..." : "Pay Now"}`}
          className="bg-primary-600 py-3 text-light"
          disabled={isProcessing || !stripe}
        />
      </div>
    </form>
  );
}

export default StripeCheckoutForm;
