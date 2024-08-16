/* eslint-disable react/prop-types */
import { useContext, useState } from "react"
import { assets } from "../assets/assets"
import { StoreContext } from "../context/StoreContext"


function FoodItem({id,name,price,description,image}) {
    
    const{cartItems,addtoCart,removeFromCart}= useContext(StoreContext)
  return (
    <div className="food-item w-full m-auto rounded-lg shadow-xl ">
      <div className="food-item-image-containor">
        <img className="food-item-img w-full rounded-lg" src={image} alt="" />
        {
            !cartItems[id]
            ? <img className="add" onClick={()=>addtoCart(id)} src={assets.add_icon_white} alt=""/>

            : <div className="flex justify-end p-2 items-center gap-2">
                <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt=""/>
                <p>{cartItems[id]}</p>
                <img onClick={()=>addtoCart(id)} src={assets.add_icon_green} alt="" />
            </div>

        }
      </div>
      <div className="food-item-info p-1">
        <div className="food-item-namerating flex justify-between items-center mb-2">
            <p className="text-lg font-medium">{name}</p>
            <img className="w-20" src={assets.rating_starts} alt="" />
        </div>
        <p className="food-tem-description text-zinc-500">{description}</p>
        <p className="fooditem-price text-red-500 font-medium text-lg">${price}</p>
      </div>
    </div>
  )
}

export default FoodItem
