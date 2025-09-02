import React from "react";
import Header from "../../Pages/Shared/Header/Header";
import RightSideNav from "../../Pages/RightSideNav/RightSideNav";
import { useParams } from "react-router-dom";
import NavBer from "../../Pages/Shared/Navber/NavBer";

const NewsDetails = () => {
  const { id, image_url, title } = useParams();
  return (
    <div>
      <div className="">
        <div className="container-2">
          <div className="mb-6">
            <Header />
            <NavBer />
          </div>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-8">
              <h3>Dragon News</h3>
              <p>news details:{id}</p>
              <div className="">
                <img src={image_url} alt="" />
                <h4>{title}</h4>
              </div>
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
