import React from "react";
import moment from "moment";

const Header = () => {
  return (
    <div>
      <div className="text-center py-10 ">
        <h1 className="font-satisfy mb-5">The Dragon News</h1>
        <p className="text-nu30 text-[18px] font-medium mb-4">
          Journalism Without Fear or Favour
        </p>
        <p className="text-nu30 text-[20px] font-medium">
          {moment().format("dddd, MMMM D, YYYY")}
        </p>
      </div>
      
    </div>
  );
};

export default Header;
