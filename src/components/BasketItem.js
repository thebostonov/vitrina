import React from "react";

const Basketitem = (props) => {
  const { id, name, price, quantity, incrementQuantity, decrementQuantity } =
    props;
  return (
    <li className="collection-item">
      {name} X{quantity} = {price * quantity}$
      <span className="secondary-content">
        <i
          className="material-icons basket-delete"
          onClick={() => props.removeFromBasket(id)}
        >
          delete_forever
        </i>
        <i
          className="material-icons basket-delete"
          onClick={() => decrementQuantity(id)}
        >
          indeterminate_check_box
        </i>
        <i
          className="material-icons basket-delete"
          onClick={() => incrementQuantity(id)}
        >
          add_box
        </i>
      </span>
    </li>
  );
};

export default Basketitem;
