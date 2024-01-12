export type Tier = {
  name: string;
  id: string | null;
  href: string;
  priceMonthly: number | null;
  currency: string | null;
  desription: string;
  features: string[];
};
