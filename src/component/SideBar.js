import { useState } from "react";
import controlimg from "./assets/control.png";
import logoimg from './assets/logo.png';
import chartimg from './assets/Chart_fill.png';
import Chatimg from './assets/Chart.png';
import user from './assets/User.png';
import calender from './assets/Calendar.png'
import { Link } from "react-router-dom";
const SideBar = () => {
    const [open, setOpen] = useState(true);
    const Menus = [
      { title: "Expense Tracker", src: chartimg, mpath: '/et' },
      { title: "Gallery", src: Chatimg , mpath:'/gallery' },
      { title: "Gallery2", src: user, mpath:'/gallery2' },
      { title: "Realtime Chat", src: calender , mpath:'/' },
     
    ];
  
    return (
      <div className="flex">
        <div
          className={` ${
            open ? "w-72" : "w-20 "
          } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
        >
          <img
            src={controlimg} alt="cntr"
            className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
             border-2 rounded-full  ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
          />
          <div className="flex gap-x-4 items-center">
            <img
              src={logoimg} alt=""
              className={`cursor-pointer duration-500 ${
                open && "rotate-[360deg]"
              }`}
            />
            <h1
              className={`text-white origin-left font-medium text-xl duration-200 ${
                !open && "scale-0"
              }`}
            >
              Designer
            </h1>
          </div>
          <ul className="pt-6">
            {Menus.map((Menu, index) => (
              <Link to={Menu.mpath} key={index}>
              <li
                key={index}
                className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
                ${Menu.gap ? "mt-9" : "mt-2"} `}
              >
                <img src={Menu.src} alt="" />
                <span className={`${!open && "hidden"} origin-left duration-200`}>
                  {Menu.title}
                </span>
              </li>
              </Link>
            ))}
          </ul>
        </div>
        {/* <div className="h-screen flex-1 p-7">
          <h1 className="text-2xl font-semibold ">Home Page</h1>
        </div> */}
      </div>
    );
};

export default SideBar;
