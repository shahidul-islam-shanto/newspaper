import React from "react";
import Header from "../Shared/Header/Header";
import NavBer from "../Shared/Navber/NavBer";
import LeftSideNav from "../LeftSideNav/LeftSideNav";
import RightSideNav from "../RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews/BreakingNews";

const Home = () => {
  return (
    <>
      <div className="container-2">
        <Header />
        <BreakingNews />
        <NavBer />
        <div className="grid grid-cols-12 gap-4 justify-center">
          <div className="col-span-2">
            <LeftSideNav />
          </div>
          <div className="col-span-8">
            <h1>News Coming Soon?</h1>
          </div>
          <div className="col-span-2">
            <RightSideNav />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
