import { ReactNode } from "react";

export type PriceHistoryItem = {
  price: number;
};

export type User = {
  email: string;
};

export type Product = {
  ratings: ReactNode;
  stars: string;
  _id?: string;
  url: string;
  currency: string;
  image: string;
  title: string;
  currentPrice: number;
  originalPrice: number;
  priceHistory: PriceHistoryItem[] | [];
  averagePrice: number;
  highestPrice: number;
  lowestPrice: number;
  discountRate: number;
  description: string;
  category: string;
  reviewsCount: number;
  isOutOfStock: Boolean;
  users?: User[];
};

export type NotificationType =
  | "WELCOME"
  | "CHANGE_OF_STOCK"
  | "LOWEST_PRICE"
  | "THRESHOLD_MET";

export type EmailContent = {
  subject: string;
  body: string;
};

export type EmailProductInfo = {
  title: string;
  url: string;
};
