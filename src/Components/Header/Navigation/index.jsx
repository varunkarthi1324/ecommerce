import React from "react";
import Button from "@mui/material/Button";
import { RiMenu2Line } from "react-icons/ri";
import { LiaAngleDownSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="py-2">
      <div className=" container flex items-center justify-end gap-5">
        <div className="col_1 w-[20%] font-[500]">
          <Button className="!text-black gap-2 w-full">
            <RiMenu2Line className="text-[16px]" />
            Shop by categories
            <LiaAngleDownSolid className="text-[14px] ml-auto font-[500]" />
          </Button>
        </div>
        <div className="col-2 w-[80%] pl-5">
          <ul className="flex items-center gap-5">
            <li className="list-none">
              <Link to="/" className=" link transition text-[16px] font-[500]">
                Home
              </Link>
            </li>
            <li className="list-none">
              <Link to="/" className=" link transition text-[16px] font-[500]">
                Fashion
              </Link>
            </li>
            <li className="list-none">
              <Link to="/" className=" link transition text-[16px] font-[500]">
                Electronics
              </Link>
            </li>
            <li className="list-none">
              <Link to="/" className=" link transition text-[16px] font-[500]">
                Bags
              </Link>
            </li>
            <li className="list-none">
              <Link to="/" className=" link transition text-[16px] font-[500]">
                Footwear
              </Link>
            </li>
            <li className="list-none">
              <Link to="/" className=" link transition text-[16px] font-[500]">
                Groceries
              </Link>
            </li>
            <li className="list-none">
              <Link to="/" className=" link transition text-[16px] font-[500]">
                Beauty
              </Link>
            </li>
            <li className="list-none">
              <Link to="/" className=" link transition text-[16px] font-[500]">
                Wellness
              </Link>
            </li>
            <li className="list-none">
              <Link to="/" className=" link transition text-[16px] font-[500]">
                Jewellery
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
