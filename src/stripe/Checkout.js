import React, { useState } from "react";
import SubscriptionStatus from "./SubscriptionStatus";

const Checkout = () => {
  const [email, setEmail] = useState("");
  const [plan, setPlan] = useState("price_1MkQZnFSVT0dmAsfrQ9iVzxO");

  const handleSubscribe = async () => {
    const stripe = window.Stripe(process.env.REACT_APP_stripeKey);
    const { error } = await stripe.redirectToCheckout({
      mode: "subscription",
      lineItems: [{ price: plan, quantity: 1 }],
      customerEmail: email,
      successUrl: "https://your_website.com/success",
      cancelUrl: "https://your_website.com/cancel",
    });

    if (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-whiteHigh p-12 rounded-xl">
      <h1>Subscribe to our service</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <select value={plan} onChange={(e) => setPlan(e.target.value)}>
        <option value="price_1MkQZnFSVT0dmAsfrQ9iVzxO">
          Regular Subscription ($29/month)
        </option>
        <option value="price_1MkQZnFSVT0dmAsfMHTKCzov">
          Pro Subscription ($49/month)
        </option>
      </select>
      <button onClick={handleSubscribe}>Subscribe</button>
      <div>
        <SubscriptionStatus email={email} />
      </div>
    </div>
  );
};

export default Checkout;
