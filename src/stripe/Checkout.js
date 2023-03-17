import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Checkout = () => {
  const { user } = useContext(AuthContext);
  const [plan, setPlan] = useState("price_1MkQZnFSVT0dmAsfrQ9iVzxO");

  const handleSubscribe = async () => {
    const stripe = window.Stripe(process.env.REACT_APP_stripePublicKey);
    const { error } = await stripe.redirectToCheckout({
      mode: "subscription",
      lineItems: [{ price: plan, quantity: 1 }],
      customerEmail: user?.email,
      successUrl: "https://aisaastools.netlify.app/",
      cancelUrl: "https://aisaastools.netlify.app/",
    });

    if (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 bg-whiteMid text-blackMid p-4 py-44 rounded-xl">
      <h1>Subscribe to our service with {user?.email}</h1>
      <select value={plan} onChange={(e) => setPlan(e.target.value)}>
        <option value="price_1MkQZnFSVT0dmAsfrQ9iVzxO">
          Regular Subscription ($29/month)
        </option>
        <option value="price_1MkQZnFSVT0dmAsfMHTKCzov">
          Pro Subscription ($49/month)
        </option>
      </select>
      <button onClick={handleSubscribe}>Subscribe</button>
    </div>
  );
};

export default Checkout;
