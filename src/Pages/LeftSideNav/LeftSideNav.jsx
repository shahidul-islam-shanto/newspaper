import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <h3 className="mb-4">All Categories</h3>

      {categories.map((cate) => (
        <Link
          to={`/categories/${cate.id}`}
          key={cate.id}
          className="block ml-4 px-2 py-2 font-semibold"
        >
          {cate.name}
        </Link>
      ))}
    </div>
  );
};

export default LeftSideNav;
