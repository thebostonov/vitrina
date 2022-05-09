import React from "react";
import Gooditem from "./GoodItem";
import Loader from "./Loader";
const Goodlist = (props) => {
  const { goods = [], addToBasket } = props;
  if (!goods.length) {
    return <Loader /> && <h5>Nothing here</h5>;
  }
  return (
    <div className="goods">
      {goods.map((item) => (
        <Gooditem key={item.id} {...item} addToBasket={addToBasket} />
      ))}
    </div>
  );
};

export default Goodlist;
