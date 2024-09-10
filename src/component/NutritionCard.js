import { useContext } from "react";
import "../styles.css";
import { NutritionContext } from "../context/NutritionContext";

export default function NutritionCard({nutritions,
  isCartList
}) {
  const {toggleCartList} = useContext(NutritionContext)
  return (
    <div className="nutrition-cart">
      <div className="nutrition">
        <img
          className="nutrition-image"
          src={`./images/${nutritions.id}.jpg`}
          alt={nutritions.title}
        ></img>
      </div>
      <div className="details">
        <h3>{nutritions.title}</h3>
      </div>
      <div>
        <span>
          <p>{nutritions.nutritionType}</p>
          <p>{nutritions.nutritionAmount}</p>
        </span>
          <label className="switch">
            <input
              type="checkbox"
              checked={isCartList}
              onChange={() => toggleCartList(nutritions.id)}
            />
            <span className="slider">
              <span className="slider-label">
                {isCartList ? "In CartList" : "Add to Cart"}
              </span>
            </span>
          </label>
        </div>
      </div>
  );
}
