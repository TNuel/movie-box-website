import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Facebook from "../assets/Facebook.png";

function Footer() {
  return (
    <footer className="my-28 h-auto w-full flex items-center justify-center flex-col">
      <div className="flex w-1/2 items-center justify-center gap-x-6 mb-4">
        <img src={Facebook} alt="Facebook Logo" />
        <InstagramIcon />
        <TwitterIcon />
        <YouTubeIcon />
      </div>
      <div className="flex w-1/2 my-6 text-textMain font-bold text-base items-center justify-around mb-4">
        <p>Condition of Use</p>
        <p>Privacy & Policy</p>
        <p>Press Room</p>
      </div>
      <p className="text-textMinor font-bold text-base mb-10">
        © 2021 <span>Movie Discovery App</span> by <span>Tolani Emmanuel</span>
      </p>
    </footer>
  );
}

export default Footer;
