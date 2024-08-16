/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null)


function StoreContextProvider(props){
    
    const[cartItems,setCartItems]=useState({})
    

    function addtoCart(itemId)
    {
        if(!cartItems[itemId])
        {
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }
        else
        {
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }

    function removeFromCart(itemId)
    {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    
    const getTotalcartAmount=()=>{
        let totalAmount=0;

        for(const item in cartItems)
        {
            
            
            if(cartItems[item]>0)
            {

                // console.log(food_list[item]);
                let itemInfo=food_list.find((product)=>product._id==item);
                totalAmount+=itemInfo.price*cartItems[item]
                
            }
            
        }
        return totalAmount;
    }

    


    const contextValue={food_list,cartItems,setCartItems,addtoCart,removeFromCart,getTotalcartAmount}

    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>

    )
}

export default StoreContextProvider