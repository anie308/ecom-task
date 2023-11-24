import { mock } from "@/mock";
import {
  CombinedContextProps,
  ContextProviderProps,
  Item,
  OrderHistoryItem,
  UserDetails,
} from "@/types";
import { generateRandomCode } from "@/utils";
import React, { useState, createContext, useEffect } from "react";

const CombinedContext = createContext<CombinedContextProps | undefined>(
  undefined
);

function ContextProvider({ children }: ContextProviderProps) {
  const [cart, setCart] = useState<Item[]>([]);
  const [cartTotalQuantity, setCartTotalQuantity] = useState<number>(0);
  const [cartSubTotal, setCartSubTotal] = useState<number>(0);
  const [cartTotalAmount, setCartTotalAmount] = useState<number>(0);
  const [discount, setDiscount] = useState<number>(0);
  const [tax] = useState<number>(0);
  const [shipping] = useState<number>(10);
  const [orderHistory, setOrderHistory] = useState<OrderHistoryItem[]>([]);


  const [userDetails, setUserDetails] = useState<UserDetails>({
    email: "",
    cardName: "",
    cardNumber: "",
    exp: "",
    cvc: "",
    address: "",
    city: "",
    country: "",
    postal: "",
    billing: false,
  });


  useEffect(() => {
    const storedOrderHistory = localStorage.getItem("orderHistory");
    if (storedOrderHistory) {
      setOrderHistory(JSON.parse(storedOrderHistory));
    } else {
      // Set a default order history when there is no stored data
      setOrderHistory([]);
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
    const totalAmount = subTotal - getTotalDiscount(updatedCart) - shipping; // Consider discount in total amount
    const discount = getTotalDiscount(updatedCart);
    setCartTotalQuantity(totalQuantity);
    setCartSubTotal(subTotal);
    setCartTotalAmount(totalAmount);
    setDiscount(discount);
  };

  const getTotalDiscount = (cart: Item[]) => {
    return cart.reduce(
      (totalDiscount, item) => totalDiscount + item.discount,
      0
    );
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
      date: new Date().toISOString(),
      trackingId: generateRandomCode(), // or use new Date()
      items: cart,
    };

    const lastOrderIndex = orderHistory.length - 1;

  // If there are previous orders, update the last order with new items
  if (lastOrderIndex >= 0) {
    const updatedOrderHistory = [...orderHistory];
    updatedOrderHistory[lastOrderIndex] = {
      ...updatedOrderHistory[lastOrderIndex],
      items: [...updatedOrderHistory[lastOrderIndex].items, ...cart],
    };
    setOrderHistory(updatedOrderHistory);
  } else {
    // If there are no previous orders, add a new order to the history
    setOrderHistory([newOrder]);
  }

    setCart([]);
    updateCartValues([]); // Clear the cart after placing an order
  };

  const contextValue: CombinedContextProps = {
    cart,
    tax,
    shipping,
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
