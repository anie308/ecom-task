import Image from "next/image";
import React from "react";
import image from "../../assets/suit1.webp";
import image2 from "../../assets/suit2.webp";
import { FaCheck } from "react-icons/fa";
function History() {
  return (
    <div className="p-[20px] lg:px-[50px] bg-[#F9FAFB]">
      <h5 className="font-[600] text-[30px] font-notosans text-primary">
        Order history
      </h5>
      <p className="text-[18px] font-notosans font-[400] text-secondary">
        See your recent orders, download your invoices.
      </p>

      <div className="flex flex-col space-y-[40px]">
        <div>
          <div className="bg-white flex flex-col lg:flex-row items-start lg:items-center justify-between p-[16px] rounded-[6px] mt-[29px] border border-[#DDE0E5]">
            <div className="flex flex-col items-start lg:items-center space-y-[10px] lg:space-y-0 lg:space-x-[50px]">
              <div>
                <p className="font-notosans text-secondary text-[16px]">
                  Order Id
                </p>
                <p className="font-notosans text-primary font-[600] text-[16px]">
                  13423
                </p>
              </div>
              <div>
                <p className="font-notosans text-secondary text-[16px]">
                  Date of placement
                </p>
                <p className="font-notosans text-primary font-[600] text-[16px]">
                  April 3, 2024
                </p>
              </div>
              <div>
                <p className="font-notosans text-secondary text-[16px]">
                  Amount
                </p>
                <p className="font-notosans text-primary font-[600] text-[16px]">
                  $2,570
                </p>
              </div>
            </div>
            <button className="mt-[10px] lg:mt-0 bg-primary text-white font-notosans rounded-[6px] p-[8px_20px] text-[13px] w-full lg:w-fit">
              View Invoice
            </button>
          </div>

          <div className="bg-white relative overflow-x-auto mt-[10px] border">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
              <thead className="text-xs text-gray-700 font-notosans font-[700] border-b    ">
                <tr>
                  <th scope="col" className="px-6 py-[20px]">
                    Product
                  </th>
                  <th scope="col" className="px-6 ">
                    Amount
                  </th>
                  <th scope="col" className="px-6 ">
                    Status
                  </th>
                  <th scope="col" className="px-6 ">
                    Date
                  </th>
                  <th scope="col" className="px-6 ">
                    Details
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b ">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    <div className="flex items-center ">
                      <div className="h-[60px] w-[45px] object-cover  flex items-center justify-center overflow-hidden">
                        <Image src={image} alt="" layout="fill" />
                      </div>
                      <p className="font-notosans font-[500] text-[14px]">
                        Premium Suit
                      </p>
                    </div>
                  </th>
                  <td className="px-6 py-4 font-notosans text-[14px] text-secondary">
                    $790
                  </td>
                  <td className="px-6 py-4">
                    <div className="bg-[#F0F9EB] border border-[#C2E7B0] w-fit p-[3px_10px] rounded-[6px] flex items-center space-x-[5px]">
                      <FaCheck className="text-[#67C23A] text-[12px]" />
                      <span className="text-[#67C23A] font-[700] text-[14px] font-notosans">
                        Delivered
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-notosans text-[14px] text-secondary">
                    Apr 6, 2022
                  </td>
                  <td className="px-6 py-4 ">
                    <button className="font-notosans text-[14px] text-primary">
                      Download
                    </button>
                  </td>
                </tr>
                <tr className="bg-white border-b ">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    <div className="flex items-center ">
                      <div className="h-[60px] w-[45px] object-cover  flex items-center justify-center overflow-hidden">
                        <Image src={image2} alt="" layout="fill" />
                      </div>
                      <p className="font-notosans font-[500] text-[14px]">
                        Linen Suit
                      </p>
                    </div>
                  </th>
                  <td className="px-6 py-4 font-notosans text-[14px] text-secondary">
                    $790
                  </td>
                  <td className="px-6 py-4">
                    <div className="bg-[#F0F9EB] border border-[#C2E7B0] w-fit p-[3px_10px] rounded-[6px] flex items-center space-x-[5px]">
                      <FaCheck className="text-[#67C23A] text-[12px]" />
                      <span className="text-[#67C23A] font-[700] text-[14px] font-notosans">
                        Delivered
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-notosans text-[14px] text-secondary">
                    Apr 6, 2022
                  </td>
                  <td className="px-6 py-4 ">
                    <button className="font-notosans text-[14px] text-primary">
                      Download
                    </button>
                  </td>
                </tr>

                <tr className="bg-white border-b ">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    <div className="flex items-center ">
                      <div className="h-[60px] w-[45px] object-cover  flex items-center justify-center overflow-hidden">
                        <Image src={image} alt="" layout="fill" />
                      </div>
                      <p className="font-notosans font-[500] text-[14px]">
                        Tweed Suit
                      </p>
                    </div>
                  </th>
                  <td className="px-6 py-4 font-notosans text-[14px] text-secondary">
                    $990
                  </td>
                  <td className="px-6 py-4">
                    <div className="bg-[#F0F9EB] border border-[#C2E7B0] w-fit p-[3px_10px] rounded-[6px] flex items-center space-x-[5px]">
                      <FaCheck className="text-[#67C23A] text-[12px]" />
                      <span className="text-[#67C23A] font-[700] text-[14px] font-notosans">
                        Delivered
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-notosans text-[14px] text-secondary">
                    Apr 6, 2022
                  </td>
                  <td className="px-6 py-4 ">
                    <button className="font-notosans text-[14px] text-primary">
                      Download
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <div className="bg-white flex flex-col lg:flex-row items-start lg:items-center justify-between p-[16px] rounded-[6px] mt-[29px] border border-[#DDE0E5]">
            <div className="flex flex-col lg:flex-row item-start lg:items-center space-y-[10px] lg:space-y-0 lg:space-x-[50px]">
              <div>
                <p className="font-notosans text-secondary text-[16px]">
                  Order Id
                </p>
                <p className="font-notosans text-primary font-[600] text-[16px]">
                  10962
                </p>
              </div>
              <div>
                <p className="font-notosans text-secondary text-[16px]">
                  Date of placement
                </p>
                <p className="font-notosans text-primary font-[600] text-[16px]">
                  June 3, 2024
                </p>
              </div>
              <div>
                <p className="font-notosans text-secondary text-[16px]">
                  Amount
                </p>
                <p className="font-notosans text-primary font-[600] text-[16px]">
                  $2,080
                </p>
              </div>
            </div>
            <button className="mt-[10px] lg:mt-0 bg-primary text-white font-notosans rounded-[6px] p-[8px_20px] text-[13px] w-full lg:w-fit">
              View Invoice
            </button>
          </div>

          <div className="bg-white relative overflow-x-auto mt-[10px] border">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
              <thead className="text-xs text-gray-700 font-notosans font-[700] border-b    ">
                <tr>
                  <th scope="col" className="px-6 py-[20px]">
                    Product
                  </th>
                  <th scope="col" className="px-6 ">
                    Amount
                  </th>
                  <th scope="col" className="px-6 ">
                    Status
                  </th>
                  <th scope="col" className="px-6 ">
                    Date
                  </th>
                  <th scope="col" className="px-6 ">
                    Details
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b ">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    <div className="flex items-center ">
                      <div className="h-[60px] w-[45px] object-cover  flex items-center justify-center overflow-hidden">
                        <Image src={image} alt="" layout="fill" />
                      </div>
                      <p className="font-notosans font-[500] text-[14px]">
                        Pink Blouse
                      </p>
                    </div>
                  </th>
                  <td className="px-6 py-4 font-notosans text-[14px] text-secondary">
                  $1,290
                  </td>
                  <td className="px-6 py-4">
                    <div className="bg-[#F0F9EB] border border-[#C2E7B0] w-fit p-[3px_10px] rounded-[6px] flex items-center space-x-[5px]">
                      <FaCheck className="text-[#67C23A] text-[12px]" />
                      <span className="text-[#67C23A] font-[700] text-[14px] font-notosans">
                        Delivered
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-notosans text-[14px] text-secondary">
                    Apr 6, 2022
                  </td>
                  <td className="px-6 py-4 ">
                    <button className="font-notosans text-[14px] text-primary">
                      Download
                    </button>
                  </td>
                </tr>
                <tr className="bg-white border-b ">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    <div className="flex items-center ">
                      <div className="h-[60px] w-[45px] object-cover  flex items-center justify-center overflow-hidden">
                        <Image src={image2} alt="" layout="fill" />
                      </div>
                      <p className="font-notosans font-[500] text-[14px]">
                        Premium Suit
                      </p>
                    </div>
                  </th>
                  <td className="px-6 py-4 font-notosans text-[14px] text-secondary">
                    $790
                  </td>
                  <td className="px-6 py-4">
                    <div className="bg-[#F0F9EB] border border-[#C2E7B0] w-fit p-[3px_10px] rounded-[6px] flex items-center space-x-[5px]">
                      <FaCheck className="text-[#67C23A] text-[12px]" />
                      <span className="text-[#67C23A] font-[700] text-[14px] font-notosans">
                        Delivered
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-notosans text-[14px] text-secondary">
                    Apr 6, 2022
                  </td>
                  <td className="px-6 py-4 ">
                    <button className="font-notosans text-[14px] text-primary">
                      Download
                    </button>
                  </td>
                </tr>

                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default History;
