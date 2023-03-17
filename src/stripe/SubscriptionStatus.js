import React, { useState, useEffect } from "react";

const SubscriptionStatus = ({ email }) => {
  const [loading, setLoading] = useState(true);
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    if (!email) {
      return;
    }

    const fetchSubscriptions = async () => {
      try {
        const response = await fetch(
          `https://api.stripe.com/v1/customers?email=${email}`,
          {
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_stripeSecretKey}`,
            },
            method: "GET",
          }
        );

        const data = await response.json();

        if (data?.data?.length > 0) {
          setSubscriptions(data.data);
        } else {
          setSubscriptions([]);
        }
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    fetchSubscriptions();
  }, [email]);

  console.log(subscriptions);

  if (loading) {
    return <div>Loading subscriptions...</div>;
  }

  if (!subscriptions?.length) {
    return <div>No active subscriptions found for {email}</div>;
  }

  return (
    <div>
      {subscriptions.map((subscription) => (
        <div key={subscription.id}>
          Subscription status: {subscription?.status}
          <br />
          Plan: {subscription?.plan?.nickname}
        </div>
      ))}
    </div>
  );
};

export default SubscriptionStatus;
