"use client";

import { loadStripe } from "@stripe/stripe-js";
import { Button } from "../ui/button";

export default function SubscriptionButton({ planId }: { planId: string }) {
  const processSubscription = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}http:///api/subscription/${planId}`
    );

    const data = await response.json();

    const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY!);
    await stripe?.redirectToCheckout({ sessionId: data.id})

  };

  return (
    <Button onClick={async () => processSubscription()}>
      サブスクリプション契約する
    </Button>
  );
}
