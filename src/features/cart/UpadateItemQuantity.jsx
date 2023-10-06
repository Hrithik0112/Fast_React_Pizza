import React from "react";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { IncreaseQuantityItem, decreaseQuantityItem } from "./cartSlice";

function UpadateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();
  return (
    <div className="flex gap-2 items-center md:gap-3">
      <Button type="round" onClick={() => dispatch(decreaseQuantityItem(pizzaId))}>
        -
      </Button>
      <span>{currentQuantity}</span>
      <Button type="round" onClick={() => dispatch(IncreaseQuantityItem(pizzaId))}>
        +
      </Button>
    </div>
  );
}

export default UpadateItemQuantity;
