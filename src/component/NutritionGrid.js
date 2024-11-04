import React, {useContext, useState} from "react";
import NutritionCard from "./NutritionCard";
import { NutritionContext } from "../context/NutritionContext";

export default function NutritionGrid(){
    const {nutritions, cart} = useContext(NutritionContext)
    const [search, setSearch] = useState("");
    const [type, setType] = useState("All Category");
    const [amount, setAmount] = useState("All");

    const handleSearchTerm = (e)=> setSearch(e.target.value)
    const handleType = (e)=> setType(e.target.value)
    const handleAmount = (e)=> setAmount(e.target.value)
    const matchSearch = (nutrition, search)=>(
        nutrition.title.toLowerCase().includes(search.toLowerCase())
    )
    const matchType = (nutritions, type) => type==="All Category" || nutritions.nutritionType.toLowerCase()===type.toLowerCase()
    const matchAmount = (nutritions, amount) => {
        if(amount==="Good") return nutritions.nutritionAmount>=8
        else if(amount==="Ok") return nutritions.nutritionAmount<8 && nutritions.nutritionAmount>=5
        else if(amount==="Bad") return nutritions.nutritionAmount<5
        else return true
       } 
    const filterCondition =  nutritions.filter((nutrition)=>{
        return matchSearch(nutrition,search) && matchType(nutrition,type) && matchAmount(nutrition,amount)
        
})
    return(
        <div className="container">
            <input className="search" type="text" placeholder="Type the nutrition food here..." value={search} onChange={handleSearchTerm}/>
            <div>
                <select className="category" value={type} onChange={handleType}>
                <option>All Category</option>
                <option>Vegetable</option>
                <option>Non-Veg</option>
                <option>Dry-Fruits</option>
            </select>
            <select className="category" value={amount} onChange={handleAmount}>
                <option>All</option>
                <option>Good</option>
                <option>Ok</option>
                <option>Bad</option>
            </select>
            </div>
            <div className="nutrition-grid">
                {
                    filterCondition.map((nutrition)=>(
                        <NutritionCard key={nutrition.id} nutritions={nutrition} isCartList={cart.includes(nutrition.id)} ></NutritionCard>

                    ))
                }
            </div>
        </div>
    )
}
