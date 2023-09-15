import React from "react";
import Logo from "../assets/tv.png";
import HomeIcon from "@mui/icons-material/Home";
import VideocamIcon from "@mui/icons-material/Videocam";
import UpcomingIcon from "@mui/icons-material/Upcoming";
import OndemandVideo from "@mui/icons-material/OndemandVideo";
import LogoutIcon from "@mui/icons-material/Logout";
import "../index.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="w-[226px] border-4 border-solid h-screen py-8 rounded-r-3xl">
      <div className="pl-4">
        <nav className="flex flex-col w-full items-center justify-center">
          <Link
            to="/"
            className="decoration-none flex items-center mb-16 justify-between text-inherit w-full"
          >
            <img className="h-12 w-12" src={Logo} alt="" />
            <h4 className="text-textMain text-lg font-bold mr-4">Movie Box</h4>
          </Link>
        </nav>
      </div>
      <div className="">
        <nav className="flex flex-col w-full items-center justify-center">
          <ul className="flex flex-col h-full justify-between mt-4 w-full  text-base list-none">
            <li className="homeIcon mb-4 flex h-20 w-full items-center text-textMinor justify-start active:text-activeColor active:bg-bgActive hover:text-activeColor hover:bg-bgActive hover:border-r-4 hover:border-r-activeColor active:border-r-4 active:border-r-activeColor">
              <HomeIcon className="ml-8" />
              <p className="ml-8 font-semibold text-base">Home</p>
            </li>

            <li className="ondemandVideo text-textMinor mb-4 flex h-20 w-full items-center justify-start active:text-activeColor active:bg-bgActive hover:text-activeColor hover:bg-bgActive hover:border-r-4 hover:border-r-activeColor active:border-r-4 active:border-r-activeColor">
              <OndemandVideo className="ml-8" />
              <p className="ml-8 font-semibold text-base">Movies</p>
            </li>
            <li className="videocamIcon text-textMinor mb-4 flex h-20 w-full items-center justify-start active:text-activeColor active:bg-bgActive hover:text-activeColor hover:bg-bgActive hover:border-r-4 hover:border-r-activeColor active:border-r-4 active:border-r-activeColor">
              <VideocamIcon className="ml-8" />
              <p className="ml-8 font-semibold text-base">TV Series</p>
            </li>
            <li className="upcomingIcon text-textMinor mb-4 flex h-20 w-full items-center justify-start active:text-activeColor active:bg-bgActive hover:text-activeColor hover:bg-bgActive hover:border-r-4 hover:border-r-activeColor active:border-r-4 active:border-r-activeColor">
              <UpcomingIcon className="ml-8" />
              <p className="ml-8 font-semibold text-base">Upcoming</p>
            </li>
          </ul>
          <div className="border-solid border text-textMinor text-sm text-left border-[#BE123C] pt-8 m-4 bg-[#FCF5F7] rounded-2xl p-2 flex items-center justify-center flex-col">
            <p className="font-semibold -ml-4">
              Play movie quizes<br></br>and earn<br></br>free tickets
            </p>
            <p className="ml-4">50k people are playing now</p>
            <button className="border-none mt-2 flex justify-center items-center text-sm rounded-full bg-[#F0C8D2] px-4 font-semibold text-activeColor h-7 cursor-pointer">
              Start playing
            </button>
          </div>
          <div className="upcomingIcon text-textMinor mb-4 flex h-20 w-full items-center justify-start active:text-activeColor active:bg-bgActive hover:text-activeColor hover:bg-bgActive hover:border-r-4 hover:border-r-activeColor active:border-r-4 active:border-r-activeColor">
            <LogoutIcon className="ml-8" />
            <p className="ml-8 font-semibold text-base">Log out</p>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
