import Image from "next/image";
import React from "react";
import image from "../../assets/suit1.webp";
import CardIcon from "@/icons/CardIcon";

function Details() {
  return (
    <div>
      <div className="mt-[30px] px-[10px] lg:px-[50px]">
        <p className="font-notosans font-[600]text-[#64748B] ">Thank you!</p>
        <h3 className="text-[#1E293B] text-[20px] lg:text-[30px] font-[700] font-notosans ">
          Order shipped!
        </h3>
        <p className="text-[#64748B] font-notosans">
          Your order #1324 has been sent and will arrive soon.
        </p>

        <div className="mt-[55px]">
          <p className="text-[#64748B] font-notosans">Tracking number</p>
          <p className="text-primary font-[600]">8976785568756</p>

          <div className="flex flex-col space-y-[16px] mt-[12px]">
            <div className="border bg-white rounded-[6px] p-[20px] flex items-start lg:items-center flex-col lg:flex-row lg:space-x-[30px]">
              <div className="border rounded-[6px] h-[140px] min-w-[140px] overflow-hidden">
                <Image src={image}  alt="" />
              </div>
              <div className="flex flex-col items-start justify-between mt-[10px] lg:mt-0 h-[140px] w-full lg:w-[50%]">
                <h5 className="font-[600] text-[20px] font-notosans text-primary">
                  Sofa
                </h5>
                <p className="font-notosans text-[14px] lg:text-[16px] font-[400]">
                  The time is now for it to be okay to be great. People in this
                  world shun people for being great. For being a bright color.
                  For standing out.
                </p>

                <div className="flex items-center space-x-[20px]">
                  <p className=" font-notosans text-[16px] ">
                    {" "}
                    <span className="text-secondary font-[400]">
                      Quantity:
                    </span>{" "}
                    <span className=" font-[600] text-primary">1</span>{" "}
                  </p>
                  <p className=" font-notosans text-[16px] ">
                    {" "}
                    <span className="text-secondary font-[400]">
                      Price:
                    </span>{" "}
                    <span className=" font-[600] text-primary">$790</span>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-[36px] py-[36px] ">
            <div className="space-y-[36px] h-[250px] flex-1 w-full">
              <div className="border p-[16px] rounded-[6px] bg-white flex flex-col lg:flex-row items-start lg:items-center flex-1">
                <div className="flex-1 ">
                  <p className="text-primary font-[600] text-[16px] font-notosans">
                    Shipping address
                  </p>
                  <p className="text-secondary font-[400] font-notosans">
                    362 Ridgewood Dr, <br />
                    Soldotna, Alaska 99669, USA
                  </p>
                </div>
                <div className="flex-1 mt-[10px] lg:mt-0">
                  <p className="text-primary font-[600] text-[16px] font-notosans">
                    Billing address
                  </p>
                  <p className="text-secondary font-[400] font-notosans">
                    362 Ridgewood Dr, <br />
                    Soldotna, Alaska 99669, USA
                  </p>
                </div>
              </div>
              <div className="w-full border p-[16px] rounded-[6px] bg-white flex flex-col lg:flex-row items-start lg:items-center flex-1">
                <div className="flex-1 ">
                  <p className="text-primary font-[600] text-[16px] font-notosans">
                    Payment method
                  </p>
                  <div className="text-secondary font-[400] font-notosans flex space-x-[10px] mt-[5px]">
                    <CardIcon />{" "}
                    <p>
                      Visa 1234 <br /> Expiry 06/2026
                    </p>
                  </div>
                </div>
                <div className="flex-1 mt-[10px] lg:mt-0">
                  <p className="text-primary font-[600] text-[16px] font-notosans">
                    Shipping method
                  </p>
                  <p className="text-secondary font-[400] font-notosans mt-[5px]">
                    Best Courier <br />
                    Between 1-2 working days
                  </p>
                </div>
              </div>
            </div>
            <div className="border p-[16px] rounded-[6px] bg-white flex flex-col  items-start flex-1 h-[250px] w-full">
              <div className="flex flex-col space-y-[10px]  w-full">
                <div className="flex items-center justify-between">
                  <p className="text-secondary font-notosans text-[16px]">
                    Subtotal
                  </p>
                  <p className="text-secondary font-notosans text-[16px]">
                    $358
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-secondary font-notosans text-[16px]">
                    Shopping Estimate
                  </p>
                  <p className="text-secondary font-notosans text-[16px]">
                    $50
                  </p>
                </div>
                <div className="flex items-center justify-between border-b pb-[20px]">
                  <p className="text-secondary font-notosans text-[16px]">
                    Tax estimate
                  </p>
                  <p className="text-secondary font-notosans text-[16px]">
                    $00
                  </p>
                </div>
              </div>
              <div className="flex w-full items-start justify-between mt-[20px]">
                <p className="text-primary font-notosans font-[600] text-[20px]">
                  Order Total
                </p>
                <p className="text-primary font-notosans text-[20px] font-[600]">
                  $408
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
