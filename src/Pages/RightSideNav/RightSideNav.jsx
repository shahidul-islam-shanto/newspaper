import React from "react";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import sideBer1 from "../../../public/image/sideber-img1.png";
import sideBer2 from "../../../public/image/sideber-img2.png";
import sideBer3 from "../../../public/image/sideber-img3.png";



const RightSideNav = () => {
  return (
    <>
      <div className="">
        <div className="mb-10">
          <h3 className="mb-6">Login With</h3>
          <div className="">
            <div className="mb-3">
              <button className="flex justify-center items-center gap-1 border-2 px-4 py-2 w-full font-semibold rounded-lg hover:text-nu50 duration-500">
                <span>
                  <FaGoogle />
                </span>
                Login With Google
              </button>
            </div>
            <div className="">
              <button className="flex justify-center items-center gap-1 border-2 px-4 py-2 w-full font-semibold rounded-lg hover:text-nu50 duration-500">
                <span>
                  <FaGithub />
                </span>
                Login With Github
              </button>
            </div>
          </div>
        </div>
        <div className="mb-10">
          <h3 className="mb-4">Find Us On</h3>
          <div className="">
            <button className="flex items-center gap-1 border-2 border-nu60 px-4 py-2 w-full font-semibold rounded-lg mb-1 text-nu30">
              <span className="px-3 py-3 bg-nu40 rounded-full">
                <FaFacebookF />
              </span>
              Facebook
            </button>
            <button className="flex items-center gap-1 border-2 border-nu60 px-4 py-2 w-full font-semibold rounded-lg mb-1 text-nu30">
              <span className="px-3 py-3 bg-nu40 rounded-full">
                <FaTwitter />
              </span>
              Twitter
            </button>
            <button className="flex items-center gap-1 border-2 border-nu60 px-4 py-2 w-full font-semibold rounded-lg text-nu30">
              <span className="px-3 py-3 bg-nu40 rounded-full">
                <FaInstagram />
              </span>
              Instagram
            </button>
          </div>
        </div>
        <div className="bg-nu60 px-4 py-4 rounded-2xl">
          <h3 className="mb-4 ">Q-Zone</h3>
          <div className="">
            <img src={sideBer1} className="w-full " alt="" />
            <img src={sideBer2} className="w-full " alt="" />
            <img src={sideBer3} className="w-full " alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default RightSideNav;
