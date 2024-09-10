import React, { useContext } from "react";
import NutritionCard from "./NutritionCard";
import { NutritionContext } from "../context/NutritionContext";

export default function Cart() {
  const {nutritions, cart, toggleCartList} = useContext(NutritionContext)
  return (
    <div>
      {cart.length > 0 ? (<h1>Your Cart list</h1>) : (<h1>Cart is Empty</h1>)}
      {cart.map((id) => {
        const nutrition = nutritions.find((nutrition) => nutrition.id === id);
        return (
          <NutritionCard
            key={id}
            nutritions={nutrition}
            toggleCartList={toggleCartList}
            isCartList={true}
          ></NutritionCard>
        );
      })}
    </div>
  );
}
