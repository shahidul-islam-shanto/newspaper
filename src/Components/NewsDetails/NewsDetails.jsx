import React, { useEffect, useState } from "react";
import Header from "../../Pages/Shared/Header/Header";
import RightSideNav from "../../Pages/RightSideNav/RightSideNav";
import { useParams } from "react-router-dom";
import NavBer from "../../Pages/Shared/Navber/NavBer";
import NewsShow from "../NewsShow/NewsShow";

const NewsDetails = () => {
  const [newsDetail, setNewsDetail] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://openapi.programming-hero.com/api/news/${id}`)
      .then((res) => res.json())
      .then((data) => console.log(data.data));
  }, []);

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
              <div className="">
                <h1>Dragon News: {newsDetail.length}</h1>
                {newsDetail.map((item) => (
                  <NewsShow news={item} />
                ))}
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
