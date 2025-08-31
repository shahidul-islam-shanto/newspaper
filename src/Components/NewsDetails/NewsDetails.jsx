import React from "react";
import Header from "../../Pages/Shared/Header/Header";
import RightSideNav from "../../Pages/RightSideNav/RightSideNav";
import { useParams } from "react-router-dom";
import NavBer from "../../Pages/Shared/Navber/NavBer";

const NewsDetails = () => {
  const { id } = useParams();
  return (
    <div>
      <div className="">
        <div className="container-2">
          <Header />
          <NavBer />
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-8">
              <h3>Dragon News</h3>
              <p>news details:{id}</p>
            </div>
            <div className="col-span-4">
              <RightSideNav />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
