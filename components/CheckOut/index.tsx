import AppleIcon from "@/icons/AppleIcon";
import DividerIcon from "@/icons/DividerIcon";
import React, { useContext } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Image from "next/image";
import { CombinedContext } from "@/context";
import { CombinedContextProps, FormState, Item } from "@/types";
import { formatCardNumber, formatExpiryDate } from "@/utils";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
function CheckOut() {
  const router = useRouter();
  const initialFormValues: FormState = {
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
  };

  const validationSchema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Required"),
    cardName: yup.string().required("Required"),
    cardNumber: yup
      .string()
      .min(16, "Card number must be at least 16 characters")
      .required("Required"),
    cvc: yup.string().max(3).required("Required"),
    exp: yup.string().required("Required"),
    address: yup.string().required("Required"),
    city: yup.string().required("Required"),
    country: yup.string().required("Required"),
    postal: yup.string().required("Required"),
    billing: yup.boolean().oneOf([true], "Billing address must be the same as shipping address").required("You must accept the billing agreement"),
    // other fields...,
  });

  const {
    cart,
    tax,
    shipping,
    cartSubTotal,
    cartTotalAmount,
    discount,
    updateUserDetails,
    addToOrderHistory,
  } = useContext(CombinedContext) as CombinedContextProps;

  const checkout = async (values: FormState) => {
    try {
      await updateUserDetails(values);
      await addToOrderHistory();
      toast.success("Checkout Successful");
      router.push("/order-detail");
    } catch (error) {
      console.log(error);
    }
  };

  const form = useFormik({
    validationSchema,
    initialValues: initialFormValues,
    validateOnBlur: true,
    validateOnChange: true,
    validateOnMount: true,
    onSubmit: () => checkout(form.values),
  });

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Format the card number before updating the form state
    const formattedCardNumber = formatCardNumber(e.target.value);

    // Update the form state with the formatted card number
    handleChange({
      target: {
        id: "cardNumber",
        value: formattedCardNumber,
      },
    });
  };

  const handleExpiryDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Format the expiry date before updating the form state
    const formattedExpiryDate = formatExpiryDate(e.target.value);

    // Update the form state with the formatted expiry date
    handleChange({
      target: {
        id: "exp",
        value: formattedExpiryDate,
      },
    });
  };

  const { handleChange,
     isSubmitting,
      handleSubmit,
       values,
        errors,
         touched } =
    form;

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      handleChange({
        target: {
          id: "billing",
          value: e.target.checked,
        },
      });
    };

  return (
    <div className="bg-[#F9FAFB]  lg:min-h-screen w-full flex flex-col lg:flex-row">
      <section className="w-full lg:w-[65%] p-[20px] md:p-[50px_100px] xl:p-[50px_200px] flex-col space-y-[36px] items-center justify-center">
        <div>
          <button className="flex items-center border h-[40px]  rounded-[6px] bg-white w-full justify-center space-x-[4px] border-[#ADB5BD]">
            <AppleIcon />{" "}
            <span className="font-notosans font-[700] text-primary">
              Apple Pay
            </span>
          </button>
        </div>
        <div className="flex items-center w-full justify-center">
          <div className="flex items-center justify-center space-x-[20px]">
            <DividerIcon />
            <h3 className="text-center text-secondary text-[20px] font-[600]">
              or
            </h3>
            <DividerIcon />
          </div>
        </div>
        <div className="flex flex-col space-y-[24px]">
          <div className="flex flex-col space-y-[4px]">
            <label
              htmlFor="email"
              className="font-notosans text-[13px] font-[600]"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              autoComplete="true"
              onChange={handleChange}
              value={values.email}
              className="p-[11px_12px] font-notosans text-[13px] text-primary w-full rounded-[6px] border placeholder:text-secondary placeholder:font-notosans placeholder:text-[14px] outline-none"
              placeholder="Enter your email address"
            />
            {errors.email && touched.email && (
              <p className="text-[12px] text-red-500 font-notosans">
                {errors.email}
              </p>
            )}
          </div>
          <div className="flex flex-col space-y-[4px]">
            <label
              htmlFor="cardName"
              className="font-notosans text-[13px] font-[600]"
            >
              Name on Card
            </label>
            <input
              type="text"
              id="cardName"
              onChange={handleChange}
              value={values.cardName}
              className="p-[11px_12px] font-notosans text-[13px] text-primary w-full rounded-[6px] border placeholder:text-secondary placeholder:font-notosans placeholder:text-[14px] outline-none"
              placeholder="Enter the cardholder’s name"
            />
            {errors.cardName && touched.cardName && (
              <p className="text-[12px] text-red-500 font-notosans">
                {errors.cardName}
              </p>
            )}
          </div>
          <div className="flex flex-col space-y-[4px]">
            <label
              htmlFor="cardNumber"
              className="font-notosans text-[13px] font-[600]"
            >
              Card number
            </label>
            <input
              type="text"
              id="cardNumber"
              onChange={(e) => {
                handleChange(e);
                handleCardNumberChange(e);
              }}
              value={values.cardNumber}
              maxLength={19}
              className="p-[11px_12px] font-notosans text-[13px] text-primary w-full rounded-[6px] border placeholder:text-secondary placeholder:font-notosans placeholder:text-[14px] outline-none"
              placeholder="Enter the cardholder’s name"
            />
            {errors.cardNumber && touched.cardNumber && (
              <p className="text-[12px] text-red-500 font-notosans">
                {errors.cardNumber}
              </p>
            )}
          </div>
          <div className="grid lg:grid-cols-2 gap-x-[16px] space-y-[24px] lg:space-y-0">
            <div className="flex flex-col space-y-[4px]">
              <label
                htmlFor="exp"
                className="font-notosans text-[13px] font-[600]"
              >
                Expiration Date
              </label>
              <input
                type="text"
                id="exp"
                onChange={(e) => {
                  handleChange(e);
                  handleExpiryDateChange(e);
                }}
                value={values.exp}
                maxLength={5}
                className="p-[11px_12px] font-notosans text-[13px] text-primary w-full rounded-[6px] border placeholder:text-secondary placeholder:font-notosans placeholder:text-[14px] outline-none"
                placeholder="Enter the date"
              />
              {errors.exp && touched.exp && (
                <p className="text-[12px] text-red-500 font-notosans">
                  {errors.exp}
                </p>
              )}
            </div>
            <div className="flex flex-col space-y-[4px]">
              <label
                htmlFor="cvc"
                className="font-notosans text-[13px] font-[600]"
              >
                CVC
              </label>
              <input
                type="text"
                id="cvc"
                onChange={handleChange}
                value={values.cvc}
                maxLength={3}
                className="p-[11px_12px] font-notosans text-[13px] text-primary w-full rounded-[6px] border placeholder:text-secondary placeholder:font-notosans placeholder:text-[14px] outline-none"
                placeholder="Enter the three digits"
              />
              {errors.cvc && touched.cvc && (
                <p className="text-[12px] text-red-500 font-notosans">
                  {errors.cvc}
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-col space-y-[4px]">
            <label
              htmlFor="address"
              className="font-notosans text-[13px] font-[600]"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              autoComplete="true"
              onChange={handleChange}
              value={values.address}
              className="p-[11px_12px] font-notosans text-[13px] text-primary w-full rounded-[6px] border placeholder:text-secondary placeholder:font-notosans placeholder:text-[14px] outline-none"
              placeholder="Street, no"
            />
            {errors.address && touched.address && (
              <p className="text-[12px] text-red-500 font-notosans">
                {errors.address}
              </p>
            )}
          </div>
          <div className="grid lg:grid-cols-3 gap-x-[16px] space-y-[24px] lg:space-y-0">
            <div className="flex flex-col space-y-[4px]">
              <label
                htmlFor="city"
                className="font-notosans text-[13px] font-[600]"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                onChange={handleChange}
                value={values.city}
                autoComplete="true"
                className="p-[11px_12px] font-notosans text-[13px] text-primary w-full rounded-[6px] border placeholder:text-secondary placeholder:font-notosans placeholder:text-[14px] outline-none"
                placeholder="Enter City"
              />
              {errors.city && touched.city && (
                <p className="text-[12px] text-red-500 font-notosans">
                  {errors.address}
                </p>
              )}
            </div>
            <div className="flex flex-col space-y-[4px]">
              <label
                htmlFor="country"
                className="font-notosans text-[13px] font-[600]"
              >
                Country
              </label>
              <input
                type="text"
                id="country"
                onChange={handleChange}
                value={values.country}
                autoComplete="true"
                className="p-[11px_12px] font-notosans text-[13px] text-primary w-full rounded-[6px] border placeholder:text-secondary placeholder:font-notosans placeholder:text-[14px] outline-none"
                placeholder="Enter your country"
              />
              {errors.country && touched.country && (
                <p className="text-[12px] text-red-500 font-notosans">
                  {errors.address}
                </p>
              )}
            </div>
            <div className="flex flex-col space-y-[4px]">
              <label
                htmlFor="postal"
                className="font-notosans text-[13px] font-[600]"
              >
                Postal code
              </label>
              <input
                type="text"
                id="postal"
                onChange={handleChange}
                value={values.postal}
                className="p-[11px_12px] font-notosans text-[13px] text-primary w-full rounded-[6px] border placeholder:text-secondary placeholder:font-notosans placeholder:text-[14px] outline-none"
                placeholder="Postal code"
              />
              {errors.postal && touched.postal && (
                <p className="text-[12px] text-red-500 font-notosans">
                  {errors.postal}
                </p>
              )}
            </div>
          </div>
          <div className="flex items-center space-x-[4px] cursor-pointer">
            <input
              className="h-[15px] lg:h-[24px] w-[15px] lg:w-[24px] text-primary checked:text-primary"
              type="checkbox"
              id="checkbox"
              checked={values.billing}
              onChange={handleCheckboxChange}
            />
            <label
              htmlFor="checkbox"
              className="cursor-pointer font-notosans text-[12px] lg:text-[14px]"
            >
              Billing address the same as shipping address
            </label>
          </div>
          {errors.billing && touched.billing && (
            <p className="text-[12px] text-red-500 font-notosans">
              {errors.billing}
            </p>
          )}
        </div>
        <div className="mt-[36px]">
          <button
            disabled={isSubmitting}
            type="submit"
            onClick={() => handleSubmit()}
            className="h-[40px] bg-primary rounded-[6px] w-full text-white font-notosans flex items-center justify-center text-[13px] font-[600] space-x-[4px]"
          >
            <span>Pay</span> <span>${cartTotalAmount}</span>
          </button>
        </div>
      </section>
      <section className="w-full lg:w-[35%] bg-primary p-[50px_20px]  flex flex-col ">
        <div>
          {cart.map(
            (
              { id, title, image, discount, size, material, price }: Item,
              index: number
            ) => (
              <div
                className={`${
                  index !== cart.length - 1
                    ? "border-b border-[#e0e1e215]"
                    : "border-b border-[#e0e1e215]"
                } flex flex-col lg:flex-row  lg:items-center lg:space-x-[30px] py-[24px] `}
                key={id}
              >
                <div className="h-[180px] w-full lg:w-[175px] overflow-hidden ">
                  <Image
                    src={image}
                    className="object-cover"
                    alt="product-thumb"
                    layout="fill"
                  />
                </div>
                <div className="flex flex-col items-start space-y-[15px] mt-[10px] lg:mt-0">
                  <div className="flex flex-col space-y-[4px]">
                    <h5 className="text-[20px] font-[600] font-notosans text-white">
                      {title}
                    </h5>
                    <h5 className="text-[20px] font-[600] font-notosans text-white">
                      ${price}
                    </h5>
                    <p className="font-notosans text-[16px] text-white capitalize font-[400]">
                      {material}
                    </p>
                    <p className="font-notosans font-[400] text-[14px] text-white">
                      Size: {size}
                    </p>
                  </div>
                  <div className="flex items-center space-x-[16px]">
                    <button className="border border-[#FFFFFF73] bg-[#FFFFFF33] p-[4px_16px] font-notosans text-[14px] font-[600] rounded-[6px] text-white">
                      Edit
                    </button>
                    <button className="text-white text-[14px] font-notosans ">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
        <div className="mt-[31px]">
          <div className="flex flex-col lg:flex-row items-end lg:space-x-[16px]">
            <div className="flex flex-col w-full lg:w-[60%]">
              <label
                htmlFor="discount"
                className="text-white font-notosans text-[13px] font-[600] mb-[5px]"
              >
                Discount
              </label>
              <input
                id="discount"
                type="text"
                className="w-full  p-[10px] outline-none rounded-[6px]"
              />
            </div>
            <button className="text-white border w-full lg:w-fit mt-[20px] lg:mt-0 rounded-[6px] font-notosans font-[600] text-[16px]  h-fit p-[10px]">
              Apply
            </button>
          </div>
          <div className="flex flex-col space-y-[8px] mt-[31px] ">
            <div className="flex items-center justify-between">
              <p className="text-white font-notosans text-[16px]">Subtotal</p>
              <p className="text-white font-notosans text-[16px]">
                ${cartSubTotal}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-white font-notosans text-[16px]">Discount</p>
              <p className="text-white font-notosans text-[16px]">
                -${discount}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-white font-notosans text-[16px]">
                Tax estimate
              </p>
              <p className="text-white font-notosans text-[16px]">${tax}</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-white font-notosans text-[16px]">
                Shipping estimate
              </p>
              <p className="text-white font-notosans text-[16px]">
                ${shipping}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between mt-[50px]">
            <p className="text-white font-notosans font-[600] text-[20px]">
              Order Total
            </p>
            <p className="text-white font-notosans text-[20px] font-[600]">
              ${cartTotalAmount}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CheckOut;
