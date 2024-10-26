import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fechAllRecipies =createAsyncThunk ("recipies/fechAllRecipies",async()=>{
    const result = await axios.get("https://dummyjson.com/recipes")
    // console.log(result);
    return result.data.recipes
    
    
})

 const recipeSlice = createSlice({
    name :"recipies",
    initialState:{
        allrecipies:[],
        dummyAllRecipies:[],
        loading:false,
        error:""
    },
    reducers:{
        searchRecipe :(state,dataFromHeader)=>{
            state.allrecipies = state.dummyAllRecipies.filter(recipe=>recipe.cuisine.toLowerCase().includes(dataFromHeader.payload))
        }

    },
   extraReducers:(builder)=>{

    builder.addCase(fechAllRecipies.fulfilled,(state,apiResult)=>{
        state.allrecipies=apiResult.payload
        state.dummyAllRecipies =apiResult.payload
        state.loading=false
        state.error=""
    })
    builder.addCase(fechAllRecipies.pending,(state,apiResult)=>{
        state.allrecipies=[]
        state.dummyAllRecipies =[]
        state.loading=true
        state.error=""
    })
    builder.addCase(fechAllRecipies.rejected,(state,apiResult)=>{
        state.allrecipies=[]
        state.dummyAllRecipies =[]
        state.loading=false
        state.error="API CALL FAILDE"
    })
   }
 })

 export const {searchRecipe} = recipeSlice.actions
 export default recipeSlice.reducer