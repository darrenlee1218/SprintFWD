import { StripeCardElementOptions } from "@stripe/stripe-js";

export const CARD_OPTIONS: StripeCardElementOptions = {
    iconStyle: 'solid',
    hidePostalCode: true,
    style: {
        base: {
            fontWeight: 500,
            fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
            fontSize: "16px",
            backgroundColor: "#fff",
        }
    }
};