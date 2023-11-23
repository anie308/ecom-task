import { mock } from "@/mock";
import { StaticImageData } from "next/image";
import React, { useState, createContext, ReactNode, useEffect } from "react";

type UserDetails = {
  email: string;
  nameOnCard: string;
  cardNumber: string;
  exp: string;
  cvc: string;
  shippingAddress: string;
  city: string;
  country: string;
  postalCode: string;
  isSameAsShipping: boolean;
  billingAddress: string;
};

type Item = {
  id: number;
  title: string;
  price: number;
  material: string;
  size: string;
  image: StaticImageData;
  discount: number;
};

type OrderHistoryItem = {
  date: string; // or use a Date object
  items: Item[];
};

type ContextProviderProps = {
  children: ReactNode;
};

type CombinedContextProps = {
  cart: Item[];
  userDetails: UserDetails;
  orderHistory: OrderHistoryItem[];
  cartTotalQuantity: number;
  cartSubTotal: number;
  cartTotalAmount: number;
  discount: number;
  addToCart: (item: Item) => void;
  removeFromCart: (itemId: number) => void;
  updateUserDetails: (newDetails: Partial<UserDetails>) => void;
  addToOrderHistory: () => void;
  applyDiscount: (discount: number) => void;
};

const CombinedContext = createContext<CombinedContextProps | undefined>(
  undefined
);

function ContextProvider({ children }: ContextProviderProps) {
  const [cart, setCart] = useState<Item[]>([]);
  const [cartTotalQuantity, setCartTotalQuantity] = useState<number>(0);
  const [cartSubTotal, setCartSubTotal] = useState<number>(0);
  const [cartTotalAmount, setCartTotalAmount] = useState<number>(0);
  const [discount, setDiscount] = useState<number>(0);


 

  const [userDetails, setUserDetails] = useState<UserDetails>({
    email: "",
    nameOnCard: "",
    cardNumber: "",
    exp: "",
    cvc: "",
    shippingAddress: "",
    city: "",
    country: "",
    postalCode: "",
    isSameAsShipping: false,
    billingAddress: "",
  });

  const [orderHistory, setOrderHistory] = useState<OrderHistoryItem[]>([]);

  useEffect(() => {
    const storedOrderHistory = localStorage.getItem("orderHistory");
    if (storedOrderHistory) {
      setOrderHistory(JSON.parse(storedOrderHistory));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("orderHistory", JSON.stringify(orderHistory));
  }, [orderHistory]);

  const addToCart = (item: Item) => {
    setCart((prevCart) => [...prevCart, item]);
    updateCartValues([...cart, item]);
  };

  const removeFromCart = (itemId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const updateCartValues = (updatedCart: Item[]) => {
    const totalQuantity = updatedCart.reduce((total, item) => total + 1, 0);
    const subTotal = updatedCart.reduce((total, item) => total + item.price, 0);
    const totalAmount = subTotal - getTotalDiscount(updatedCart);; // Consider discount in total amount

    setCartTotalQuantity(totalQuantity);
    setCartSubTotal(subTotal);
    setCartTotalAmount(totalAmount);
  };

  const getTotalDiscount = (cart: Item[]) => {
    return cart.reduce((totalDiscount, item) => totalDiscount + item.discount, 0);
  };
  const applyDiscount = (discountValue: number) => {
    setDiscount(discountValue);
    updateCartValues(cart); // Update cart values after applying the discount
  };

  const updateUserDetails = (newDetails: Partial<UserDetails>) => {
    setUserDetails((prevDetails) => ({ ...prevDetails, ...newDetails }));
  };

   const addToOrderHistory = () => {
    const newOrder: OrderHistoryItem = {
      date: new Date().toISOString(), // or use new Date()
      items: cart,
    };

    setOrderHistory((prevOrderHistory) => [...prevOrderHistory, newOrder]);
    setCart([]);
    updateCartValues([]); // Clear the cart after placing an order
  };

  const contextValue: CombinedContextProps = {
    cart,
    userDetails,
    orderHistory,
    cartTotalQuantity,
    cartSubTotal,
    cartTotalAmount,
    discount,
    addToCart,
    removeFromCart,
    updateUserDetails,
    addToOrderHistory,
    applyDiscount,
  };

   useEffect(() => {
    // Initialize the cart with items from the mock data when the component mounts
    setCart(mock);
    updateCartValues(mock);
  }, []);

  return (
    <CombinedContext.Provider value={contextValue}>
      {children}
    </CombinedContext.Provider>
  );
}

export default ContextProvider;

export { CombinedContext, ContextProvider };
