import React from "react";
import { Card, Typography } from "@material-tailwind/react";
import { Data } from "../assets/data.js";
import { IoPricetagOutline } from "react-icons/io5";
import { RiFilePaper2Line } from "react-icons/ri";
import { MdOutlineStackedLineChart } from "react-icons/md";
import { FaRegMoneyBill1 } from "react-icons/fa6";
export function TableView() {
  return (
    <Card className="h-5/6 w-full mx-auto overflow-y-scroll scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-zinc-900">
      <table className="md:mx-3 rounded-md  text-center border-separate border-spacing-y-3">
        <tbody>
          {Data.map(({ title, count, rate, status }, index) => {
            return (
              <tr
                className="bg-zinc-800 hover:bg-blue-400 rounded-lg"
                key={index}
              >
                <td className="border-r-2 p-2 rounded-l-md  border-zinc-700">
                  <Typography
                    color="blue-gray"
                    className=" text-sm flex items-center justify-center"
                  >
                    <IoPricetagOutline className="mr-2 md:mr-5 text-xl md:text-2xl" />
                    {title}
                  </Typography>
                </td>
                <td className="border-r-2 p-2 border-zinc-700">
                  <Typography
                    color="blue-gray"
                    className=" text-sm flex items-center justify-center"
                  >
                    <RiFilePaper2Line className="mr-2 md:mr-5 text-xl md:text-2xl" />
                    {count}
                  </Typography>
                </td>
                <td className=" border-r-2 p-2 border-zinc-700">
                  <Typography
                    color="blue-gray"
                    className=" text-sm flex items-center justify-center"
                  >
                    <MdOutlineStackedLineChart className="mr-2 md:mr-5 text-xl md:text-2xl" />
                    {rate}
                  </Typography>
                </td>
                <td className="p-2 rounded-r-md">
                  <Typography
                    color="blue-gray"
                    className=" text-sm flex items-center justify-center"
                  >
                    <FaRegMoneyBill1 className="mr-2 md:mr-5 text-xl md:text-2xl" />
                    {status}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
}
