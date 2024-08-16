import { useContext } from "react"
import { StoreContext } from "../context/StoreContext"
import FoodItem from "./FoodItem"


function FoodDisplay({catogorie}) {
    const{food_list} =useContext(StoreContext)
  return (
    <div className="food_display mt-5" id="food_display">
      <h2 className="text-2xl font-medium ">Top dishes near you</h2>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))]  mt-8 gap-8 row-gap-12">
        {food_list.map((item,index)=>{
            if(catogorie==="all"||catogorie===item.category)
            return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
        })}
      </div>
    </div>
  )
}

export default FoodDisplay
