import { useContext } from "react"
import { StoreContext } from "../../context/StoreContext"
import {useNavigate} from  'react-router-dom'


function Cart() {
  const {food_list,cartItems,removeFromCart,getTotalcartAmount}=useContext(StoreContext)
  const navigate= useNavigate()
  return (
    <div className="cart mt-20 font-outfit">
      <div className="cart-Items">
        <div className="cartItems-titel grid grid-cols-6 items-center text-lg ">
          <p>items</p>
          <p>titel</p>
          <p>price</p>
          <p>quantity</p>
          <p>total</p>
          <p>remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item,index)=>{
          if(cartItems[item._id]>0)
          {
            return(
              <>
              <div key={index} className="cartItems-titel grid grid-cols-6 items-center text-lg my-4 text-black">
                <img className="w-12" src={item.image} alt="" />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>${item.price*cartItems[item._id]}</p>
                <p onClick={()=>removeFromCart(item._id)} className="cross  cursor-pointer">X</p>
              </div>
              <hr className="text-black h-1"/>
              </>
            )
          }
        })}
      </div>
      <div className="cart-bottom m-10 flex justify-around gap-40 ">
        <div className="cart-total flex-1  flex flex-col gap-4">
          <h2>cart total</h2>
          <div>
            <div className="cart-total-details flex justify-between text-zinc-500">
              <p>subtotal</p>
              <p>${getTotalcartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details flex justify-between text-zinc-500">
            <p>deleviry fee</p>
            <p>${getTotalcartAmount()==0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details flex justify-between text-zinc-500">
           <b>total</b>
           <b>${getTotalcartAmount()==0?0:getTotalcartAmount()+2}</b>
            </div>
          </div>
          <button onClick={()=>navigate('/order')} className="border-none p-2 rounded-md text-white bg-red-500 text-lg cursor-pointer">proceed to checkout</button>
        </div>

        <div className="cartpeomo flex-1 text-zinc-500 ">
          <div>
            <p>if yu have promo code enter it</p>
            <div className="cartpromo-input mt-5 flex justify-between items-center bg-slate-300 rounded-md">
              <input className="bg-transparent outline-none p-2" type="text" placeholder="promocode" />
              <button className="border-none p-2 px-9 rounded-md text-white bg-red-500 text-lg cursor-pointer">apply</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
