// import React, { useState } from "react";
import { FaRegBookmark } from "react-icons/fa";
import { TbManualGearboxFilled } from "react-icons/tb";
import { FaStar } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const DragonNewsHome = ({ newsPaper }) => {
  // const [showText, setShowText] = useState(false);
  console.log(newsPaper);
  const { author, title, image_url, details, rating, total_view, id } =
    newsPaper;

  // show details text
  // const detailText = details;
  // const detailShort = detailText.slice(0, 300) + "...";
  return (
    <div>
      <div className="border-2 border-nu60 rounded-xl mb-6">
        <div className="flex justify-between items-center gap-4 mb-4 bg-nu40 px-3 py-2 rounded-t-xl">
          <div className="flex items-center gap-4">
            <img
              className="w-[60px] h-[60px] rounded-full"
              src={author.img}
              alt=""
            />
            <div className="">
              <p className="text-[18px] font-semibold">{author.name}</p>
              <p>{author.published_date}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <FaRegBookmark />
            <TbManualGearboxFilled />
          </div>
        </div>
        <div className="px-4 py-3 ">
          <h4 className="mb-5">{title}</h4>
          <img className="w-full rounded-lg mb-6" src={image_url} alt="" />
          <div className="border-b-2 border-nu40 pb-3 mb-4">
            <div className="">
              {details.length > 200 ? (
                <p>
                  {details.slice(0, 200)}
                  <Link to={`/news_details/${id}`}>
                    <button className="font-semibold text-secondary1 pl-2">
                      Read More...
                    </button>
                  </Link>
                </p>
              ) : (
                <p className="mb-3">{details}</p>
              )}
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 text-secondary1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p>{rating.number}</p>
            </div>
            <div className="flex items-center gap-2">
              <FaEye />
              <p>{total_view}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DragonNewsHome;
