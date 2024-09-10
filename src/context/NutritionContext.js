import React,{ createContext, useState, useEffect } from "react";

export const NutritionContext = createContext();

export const NutritionProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [nutritions, setNutrition] = useState([]);
  const toggleCartList = (nutritionId) =>
    setCart((prev) =>
      prev.includes(nutritionId)
        ? prev.filter((id) => id !== nutritionId)
        : [...prev, nutritionId]
    );
  useEffect(() => {
    fetch("/nutrition-list.json")
      .then(response => response.json())
      .then(data => setNutrition(data))
},[]);
  return (
    <NutritionContext.Provider value={{ nutritions, cart, toggleCartList }}>
      {children}
    </NutritionContext.Provider>
  );
};
