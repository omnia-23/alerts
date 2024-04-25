import React, { useContext } from "react";
import Select from "react-select";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { IoSearch } from "react-icons/io5";
import { TiArrowForward } from "react-icons/ti";
import { FilterContext } from "../utils/showFilters";

export default function Filter() {
  const { showFilter, setShowFilter } = useContext(FilterContext);

  const options = [
    { label: "option1", value: "option1" },
    { label: "option2", value: "option2" },
    { label: "option3", value: "option3" },
    { label: "option4", value: "option4" },
    { label: "option5", value: "option5" },
    { label: "option6", value: "option6" },
  ];

  const industries = [
    "temp1",
    "temp2",
    "temp3",
    "temp4",
    "temp5",
    "temp6",
    "temp7",
    "temp8",
  ];
  const radioOptions = ["opt1", "opt2", "opt3"];

  return (
    <div
      className={`${
        showFilter
          ? "`backdrop-blur-3xl absolute z-10 md:flex w-4/5 h-[90vh] rounded-xl"
          : " md:flex hidden"
      }  text-white bg-black  md:w-2/6 md:h-[95vh]  md:rounded-l-xl items-center justify-center flex-col`}
    >
      {showFilter && (
        <button
          onClick={() => {
            setShowFilter(false);
          }}
          className="block font-bold text-xl ml-auto mr-5"
        >
          x
        </button>
      )}
      <h1 className="font-semibold  text-2xl text-center">Filters</h1>
      <Card className="px-5">
        <form>
          <div className="flex flex-col gap-2">
            <Typography className="text-gray-400">Filters Applied</Typography>
            <Select
              isMulti
              name="filters"
              options={options}
              className="!bg-zinc-800"
              classNamePrefix="select"
            />

            <div className="bg-zinc-800 rounded-md py-1 px-5">
              <Typography className=" font-semibold text-white">
                Stock
              </Typography>
              <div className="flex items-center justify-around space-x-2">
                <div className="flex items-center relative w-4/5">
                  <span className="absolute z-10 top-2 right-3 flex items-center justify-center">
                    <IoSearch className="text-zinc-400" />
                  </span>
                  <Input
                    placeholder="$ TICKER"
                    className="placeholder:text-zinc-400 h-8 rounded-md bg-zinc-700 pl-6 pr-10"
                  />
                </div>

                <button className="bg-blue-400 text-xs w-16 py-1 rounded-md font-medium ">
                  My Filters
                </button>
              </div>

              <Typography className="mt-2 font-semibold text-white">
                Industry
              </Typography>
              <div className="grid grid-cols-2">
                {industries.map((el, index) => (
                  <div
                    className="flex items-center cursor-pointer hover:bg-blue-400 hover:rounded-md hover:text-black"
                    key={index}
                  >
                    <TiArrowForward />
                    <div className="text-zinc-300 hover:text-black mx-1">
                      {el}
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 ">
                <div>
                  <Typography className="mt-2 font-semibold text-white">
                    Market Cap
                  </Typography>
                  {radioOptions.map((option) => (
                    <label
                      key={option}
                      className="cursor-pointer flex items-center space-x-2"
                    >
                      <input
                        className="cursor-pointer"
                        type="radio"
                        name="marketCap"
                        value={option}
                      />
                      <span className="text-white">{option}</span>
                    </label>
                  ))}
                </div>

                <div>
                  <Typography className="mt-2 font-semibold text-white">
                    Risk Level
                  </Typography>
                  {radioOptions.map((option) => (
                    <label
                      key={option}
                      className="cursor-pointer flex items-center space-x-2"
                    >
                      <input
                        type="radio"
                        className="cursor-pointer"
                        name="riskLevel"
                        value={option}
                      />
                      <span className="text-white cursor-pointer">
                        {option}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 ">
                <div>
                  <Typography className="mt-2 font-semibold text-white">
                    Strategy
                  </Typography>
                  <div className="h-16 flex flex-col gap-2 overflow-y-scroll scrollbar-none py-2 ">
                    {radioOptions.map((el, index) => (
                      <div
                        key={index}
                        className="w-1/2 cursor-pointer bg-blue-400 rounded-md p-1 text-center text-white"
                      >
                        {el}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Typography className="mt-2 font-semibold text-white">
                    Asset
                  </Typography>
                  <div className="h-16 flex flex-col gap-2 overflow-y-scroll scrollbar-none py-2 ">
                    {radioOptions.map((el, index) => (
                      <div
                        key={index}
                        className="w-1/2 bg-blue-400 rounded-md p-1 text-center text-white"
                      >
                        {el}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            {showFilter && (
              <Button className="mt-2 mx-auto block border py-1 text-center px-2 text-xl">
                Save Filter
              </Button>
            )}
            <Button className="mt-2 mx-auto block bg-blue-400 py-1 text-center px-5 text-xl">
              Apply
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
