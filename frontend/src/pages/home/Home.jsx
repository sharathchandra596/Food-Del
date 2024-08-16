import { useState } from "react"
import ExploreMenu from "../../components/ExploreMenu"
import Header from "../../components/Header"
import FoodDisplay from "../../components/FoodDisplay"
import AppDownload from "../../components/AppDownload"

function Home() {
  const[catogorie,setCategotie]=useState("all")
  return (
    <div className="font-outfit w-[90%] m-auto">
      <Header/>
      <ExploreMenu catogorie={catogorie} setCategotie={setCategotie}/>
      <FoodDisplay catogorie={catogorie}/ >
      <AppDownload/>
    </div>
  )
}

export default Home
