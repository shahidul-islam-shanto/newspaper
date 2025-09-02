import React from "react";

const NewsShow = ({ news }) => {
  const { title } = news;
  console.log(title);

  return (
    <div>
      <div className="">
        
        <p>{title}</p>
      </div>
    </div>
  );
};

export default NewsShow;
