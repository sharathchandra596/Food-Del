import express from "express"
import { addFood } from "../controllers/foodController";

const foodRouter= express.Router();

foodRouter.post("/add",addFood)
{
    
}


export default foodRouter

