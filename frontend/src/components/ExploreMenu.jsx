import {menu_list} from "../assets/assets"

// eslint-disable-next-line react/prop-types
function ExploreMenu({catogorie,setCategotie}) {
  return (
    <div id="explore-menu" className="flex flex-col gap-3">
      <h1 className="text-3xl font-medium text-slate-600">Explore our Menu</h1>
      <p className="text-lg font-medium text-slate-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda ab quibusdam ad incidunt facere? Quod aut modi quos odit recusandae.</p>
      <div className="flex gap-9  no-scrollbar overflow-x-scroll p-2">
        {menu_list.map((item,index)=>{
            return(
                <div onClick={()=>setCategotie(prev=>prev===item.menu_name? "all": item.menu_name)} key={index} className="min-w-[100px] text-center">
                    <img className={`${catogorie=== item.menu_name? "border-8 border-rose-400 rounded-[50%]": ""}`} src={item.menu_image} alt="img" />
                    <p>{item.menu_name}</p>
                </div>
            )
        })}
      </div>
    </div>
  )
}

export default ExploreMenu
