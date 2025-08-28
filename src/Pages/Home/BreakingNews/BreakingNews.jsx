import React from "react";
import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  return (
    <div>
      <div className="">
        <div className="flex items-center gap-3 px-4 py-4 bg-nu40 mb-4">
          <div className="">
            <button className="px-6 py-2 bg-primary text-nu10 font-semibold">
              Latest
            </button>
          </div>
          <Marquee>
            <p className="text-[18px] font-semibold">
              Match Highlights: Germany vs Spain — as it happened ! Match
              Highlights: Germany vs Spain as...
            </p>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default BreakingNews;
