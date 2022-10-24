export type OurSubscription = {
  id?: number;
  userId: number;
  stripeId: string | null;
  stripeStatus: string | null;
  stripePriceId: string | null;
  trialEndDate: number | null;
  subscriptionEndDate: number | null;
}