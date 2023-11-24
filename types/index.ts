import { FormikHelpers } from "formik";
import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export type FormState = {
  email: string;
  cardName: string;
  cardNumber: string;
  exp: string;
  cvc: string;
  address: string;
  city: string;
  country: string;
  postal: string;
  billing: boolean;
};

export type UserDetails = {
  email: string;
  cardName: string;
  cardNumber: string;
  exp: string;
  cvc: string;
  address: string;
  city: string;
  country: string;
  postal: string;
  billing: boolean;
};

export type Item = {
  id: number;
  title: string;
  price: number;
  material: string;
  size: string;
  image: StaticImageData;
  discount: number;
};

export type OrderHistoryItem = {
  date: string; 
  trackingId: string// or use a Date object
  items: Item[];
};

export type ContextProviderProps = {
  children: ReactNode;
};

export type CombinedContextProps = {
  cart: Item[];
  userDetails: UserDetails;
  orderHistory: OrderHistoryItem[];
  cartTotalQuantity: number;
  cartSubTotal: number;
  cartTotalAmount: number;
  discount: number;
  tax: number;
  shipping: number;
  addToCart: (item: Item) => void;
  removeFromCart: (itemId: number) => void;
  updateUserDetails: (newDetails: Partial<UserDetails>) => void;
  addToOrderHistory: () => void;
  applyDiscount: (discount: number) => void;
};

export type CheckoutFormType = {
  handleChange: (e: React.ChangeEvent<any>) => void;
  isSubmitting: boolean;
  handleSubmit: (values: FormState, actions: FormikHelpers<FormState>) => void;
  values: FormState;
  errors: Record<string, string>;
  touched: Record<string, boolean>;
  // Add other properties as needed based on the useFormik hook
};
