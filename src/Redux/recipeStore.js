import { configureStore } from "@reduxjs/toolkit";
import recipeSlice from './slice/recipeSlice'

 const recipeStore = configureStore({
    reducer:{
        recipereducer : recipeSlice,
        

    }
 })
 export default recipeStore