import { useContext } from "react"
import { StoreContext } from "../../context/StoreContext"


function Placeorder() {
  const{getTotalcartAmount}=useContext(StoreContext)
  return (
    <form className="place order font-outfit flex items-start justify-around  mt-8">
      <div className="placeorder-left w-full max-w-[500px] flex flex-col gap-4">
        <p className="titel text-xl font-medium mb-4">delevery info</p>
        <div className=" multi-fields flex gap-2  p-2 ">
          <input className="p-2  outline-none border-2  border-gray-300" type="text" placeholder="first Name" />
          <input className="p-2 outline-none border-2  border-gray-300" type="text" placeholder="last Name" />
        </div>
        <input className="p-2 outline-none border-2 border-gray-300" type="email" placeholder="Email" />
        <input className="p-2 outline-none border-2  border-gray-300" type="text"  placeholder="street"/>
        <div className="multi-fields flex gap-2 ">
          <input className="p-2 outline-none border-2  border-gray-300" type="text" placeholder="city" />
          <input  className="p-2 outline-none border-2  border-gray-300"type="text" placeholder="state" />
        </div>
        <div className="multi-fields flex gap-2 ">
          <input className="p-2 outline-none border-2  border-gray-300" type="text" placeholder="zipcode" />
          <input className="p-2 outline-none border-2  border-gray-300" type="text" placeholder="country" />
        </div>
        <input className="p-2 outline-none border-2  border-gray-300" type="text" placeholder="phone" />
      </div>  


        <div className="placeorder-right flex flex-col">
        <div className="cart-total flex-1  flex flex-col gap-4">
          <h2 className="text-xl">cart total</h2>
          <div className="text-xl">
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
          <button  className="border-none p-2 rounded-md text-white bg-red-500 text-lg cursor-pointer">proceed to payment</button>
        </div>
      </div>
    </form>
  )
}

export default Placeorder
