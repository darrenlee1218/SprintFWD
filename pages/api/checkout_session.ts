import type { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2022-08-01",
});
console.log(process.env.STRIPE_SECRET_KEY);

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const { cart, customer } = req.body;

      const lineItems = [];
      for (const key in cart) {
        lineItems.push({
          price_data: {
            currency: "usd",
            product_data: {
              name: cart[key].title,
              images: [cart[key].thumbnail],
            },
            unit_amount: cart[key].price,
          },
          quantity: cart[key].amount,
        });
      }

      const session = await stripe.checkout.sessions.create({
        line_items: [...lineItems],
        mode: "payment",
        success_url: "http://localhost:3000/checkout/success",
        cancel_url: "http://localhost:3000/checkout/cancel",
      });

      res.status(200).json({ session });
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Internal server error";
      res.status(500).json({ statusCode: 500, message: errorMessage });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}

export default handler;
