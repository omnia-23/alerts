import React, { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import logo from "../assets/street suite logo-04.png";
import { FaBell, FaGraduationCap } from "react-icons/fa";
import { FaChartLine, FaFolderOpen } from "react-icons/fa6";
import { GoGear } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { IoMdNotifications } from "react-icons/io";
export default function Side() {
  const [open, setOpen] = useState(false);
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // useEffect(() => {
  //   window.addEventListener("resize", setWindowWidth(window.innerWidth));
  // }, []);

  let styleAbsolute = {
    position: "absolute",
    left: 0,
    zIndex: 1000,
    backgroundColor: "#27272a",
  };
  return (
    <Sidebar
      breakPoint="xl"
      transitionDuration={300}
      collapsed={!open}
      className="h-full relative"
      backgroundColor="#27272a"
      style={{
        color: "white",
        borderColor: "#27272a",

        ...(open ? styleAbsolute : ""),
      }}
    >
      <Menu>
        <button
          className={`text-2xl font-semibold ml-auto mr-3 block ${
            !open ? "hidden" : ""
          }`}
          onClick={() => {
            setOpen(false);
          }}
        >
          x
        </button>
        <MenuItem
          disabled={open}
          className="my-3"
          onClick={() => {
            setOpen(true);
          }}
        >
          <img src={logo} alt="logo" width={800} className="w-[500px]" />
        </MenuItem>
        <MenuItem
          onClick={() => {
            setOpen(true);
          }}
          icon={<FaBell />}
        >
          Alerts
        </MenuItem>
        <MenuItem
          onClick={() => {
            setOpen(true);
          }}
          icon={<FaGraduationCap />}
        >
          Training
        </MenuItem>
        <MenuItem
          onClick={() => {
            setOpen(true);
          }}
          icon={<GoGear />}
        >
          Automation
        </MenuItem>
        <MenuItem
          onClick={() => {
            setOpen(true);
          }}
          icon={<FaFolderOpen />}
        >
          Profile
        </MenuItem>
        <MenuItem
          onClick={() => {
            setOpen(true);
          }}
          icon={<FaChartLine />}
        >
          Trading
        </MenuItem>

        {!open && (
          <MenuItem
            disabled
            icon={
              <div className="relative -bottom-32 hidden md:flex">
                <IoMdNotifications size={30} className="text-blue-400" />
                <div className="absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/3 bg-green-700 rounded-full w-5 h-5 text-white flex items-center justify-center">
                  {1}
                </div>
              </div>
            }
          ></MenuItem>
        )}
        <MenuItem
          onClick={() => {
            setOpen(true);
          }}
          className="absolute -bottom-36"
          icon={<CgProfile className=" text-2xl md:text-4xl" />}
        >
          <div>
            <h6>Name</h6>
            <h6>Beginner</h6>
          </div>
        </MenuItem>
      </Menu>
    </Sidebar>
  );
}
