import AppleIcon from "@/icons/AppleIcon";
import DividerIcon from "@/icons/DividerIcon";
import React, { useContext } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Image from "next/image";
import { mock } from "@/mock";
import { CombinedContext } from "@/context";
function CheckOut() {
  type FormState = {
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
  });

  const checkout = (values: FormState) => {
    console.log(values);
  };

  const form = useFormik({
    validationSchema,
    initialValues: initialFormValues,
    validateOnBlur: true,
    validateOnChange: true,
    validateOnMount: true,
    onSubmit: checkout,
  });

  const { handleChange, isSubmitting, handleSubmit, values, errors, touched } =
    form;

  const {
    cart,
    cartTotalQuantity,
    cartSubTotal,
    cartTotalAmount,
    discount,
    applyDiscount,
  } = useContext(CombinedContext);

  return (
    <div className="bg-[#F9FAFB]  lg:m-h-screen w-full flex flex-col lg:flex-row">
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
              onChange={handleChange}
              value={values.cardNumber}
              maxLength={16}
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
                onChange={handleChange}
                value={values.exp}
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
                autoComplete="true"
                className="p-[11px_12px] font-notosans text-[13px] text-primary w-full rounded-[6px] border placeholder:text-secondary placeholder:font-notosans placeholder:text-[14px] outline-none"
                placeholder="Enter City"
              />
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
                autoComplete="true"
                className="p-[11px_12px] font-notosans text-[13px] text-primary w-full rounded-[6px] border placeholder:text-secondary placeholder:font-notosans placeholder:text-[14px] outline-none"
                placeholder="Enter your country"
              />
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
                className="p-[11px_12px] font-notosans text-[13px] text-primary w-full rounded-[6px] border placeholder:text-secondary placeholder:font-notosans placeholder:text-[14px] outline-none"
                placeholder="Postal code"
              />
            </div>
          </div>
          <div className="flex items-center space-x-[4px] cursor-pointer">
            <input
              className="h-[24px] w-[24px] text-primary checked:text-primary"
              type="checkbox"
              id="checkbox"
            />
            <label
              htmlFor="checkbox"
              className="cursor-pointer font-notosans text-[14px]"
            >
              Billing address the same as shipping address
            </label>
          </div>
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
          {mock.map(
            (
              { id, title, image, discount, size, material, price },
              index,
              array
            ) => (
              <div
                className={`${
                  index !== array.length - 1
                    ? "border-b border-[#e0e1e215]"
                    : "border-b border-[#e0e1e215]"
                } flex  items-center space-x-[30px] py-[24px] `}
                key={id}
              >
                <div className="h-[180px] w-[175px] overflow-hidden ">
                  <Image
                    src={image}
                    className="object-cover"
                    alt="product-thumb"
                    layout="fill"
                  />
                </div>
                <div className="flex flex-col items-start space-y-[15px]">
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
              <label htmlFor="discount" className="text-white font-notosans text-[13px] font-[600]">Discount</label>
              <input type="text" className="w-full  p-[10px] outline-none rounded-[6px]" />
            </div>
            <button className="text-white font-notosans font-[600] text-[16px]  h-fit p-[10px]">Apply</button>
          </div>
          <div></div>
        </div>
      </section>
    </div>
  );
}

export default CheckOut;
