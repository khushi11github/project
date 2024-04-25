import {Router} from 'express';
import{ sample_foods} from "../data";
import{FoodModel} from '../models/food.model';
import asynceHandler from 'express-async-handler';
const router =Router();
router.get("/seed",asynceHandler(
    async(req,res)=>{
        const  foodsCount = await FoodModel.countDocuments();

    if(foodsCount >0){
        res.send("Seed is already done");
        return;
    }
    await FoodModel.create(sample_foods);
    res.send("Seed is Done");
    
  
}))

router.get("/",(req,res)=>{
    res.send(sample_foods);
  
})
router.get("/search/:searchTerm",asynceHandler(
   async (req,res)=>{
    // const searchRegex = new RegExp(req.params.searchTerm,'i');
    // const foods = await FoodModel.find({name:{$regex:searchRegex}})
    const searchTerm = req.params.searchTerm;
    const foods = sample_foods.filter(food=>food.name.toLowerCase().includes(searchTerm.toLowerCase()));
    res.send(foods);
}))
router.get("/:id",(req,res)=>{
    const foodId =req.params.id ;
     const food = sample_foods.find(food=>food.id == foodId);
     res.send(food);
})
export  default router;
// import { Router, Request, Response } from 'express';
// import { sample_foods } from '../data';
// import { FoodModel } from '../models/food.model';
// import asyncHandler from 'express-async-handler';

// const router = Router();

// router.get("/seed", asyncHandler(async (req: Request, res: Response) => {
//     const foodsCount = await FoodModel.countDocuments();
//     if (foodsCount > 0) {
//         res.send('Seed is already done');
//         return;
//     }
//     await FoodModel.create(sample_foods);
//     res.send('Seed is Done');
// }));

// router.get('/search/:searchTerm', (req: Request, res: Response) => {
//     const searchTerm: string = req.params.searchTerm;
//     const foods = sample_foods.filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()));
//     res.send(foods);
// });

// router.get('/:id', (req: Request, res: Response) => {
//     const foodId: string = req.params.id;
//     const food = sample_foods.find(food => food.id === foodId);
//     res.send(food);
// });

// router.get('/', (req: Request, res: Response) => {
//     res.send(sample_foods);
// });

// export default router;
