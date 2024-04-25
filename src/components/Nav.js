import { Button } from "@material-tailwind/react";
import React, { useContext } from "react";
import { IoMdNotifications } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { FilterContext } from "../utils/showFilters";

export default function Nav() {
  const { setShowFilter } = useContext(FilterContext);

  return (
    <div className="flex justify-center md:justify-around items-center py-5">
      <h1 className="text-4xl md:text-5xl font-bold">Alerts</h1>
      <div class="relative block w-1/2">
        <span class="absolute inset-y-0 right-3 flex items-center">
          <IoSearch className="md:bg-zinc-800 text-2xl md:text-xl" />
        </span>
        <input
          class=" placeholder:text-white  bg-zinc-800 w-full  rounded-md py-2 px-3  shadow-sm focus:outline-none focus:border-gray-500 text-sm hidden md:block "
          placeholder="Search By ..."
          type="text"
          name="search"
        />
      </div>

      <div className="relative hidden md:flex">
        <IoMdNotifications size={30} className="text-blue-400" />
        <div className="absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/3 bg-green-700 rounded-full w-5 h-5 text-white flex items-center justify-center">
          {1}
        </div>
      </div>

      <Button
        onClick={() => {
          setShowFilter(true);
        }}
        className=" ml-2 visible md:hidden py-1 px-2 text-lg bg-blue-500"
      >
        Filter
      </Button>
    </div>
  );
}
