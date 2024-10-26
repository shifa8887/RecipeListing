
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Col, Row } from 'react-bootstrap'

const View = () => {


  const [recipe,setRecipe] =useState({})

  useEffect(()=>{
     setRecipe(JSON.parse(sessionStorage.getItem("recipe")))
    
  },[])
  // console.log(recipe);


  return (
    
    <>
    <Header/>
    <Row className='container-fluid p-5'>
      <Col>
       <img width={"450px"} src={recipe.image} alt="" />
      </Col>
      <Col>
      <h2 className="fw-bolder text-primary">{recipe.name}</h2>
      <h6 className="text-primary mt-3">Cuisine: <span className=''>{recipe.cuisine}</span>
</h6>
      <h3 className="fw-bolder">Ingredients: </h3>
      <p className='fw-bolder'>{recipe.ingredients}</p>
      <h3 className="fw-bolder">Instructions: </h3>
      <p style={{textAlign:"justify"}}>{recipe.instructions}</p>
      <Row className="d-flext justify-content-evenly">
        <Col>
        <h6 className="">prepTimeMinutes: <span className='fw-lighter'>{recipe.prepTimeMinutes}</span>
        </h6>
        </Col>
        <Col>
        <h6 className="fw-bolder">cookTimeMinutes : <span className='fw-lighter' >{recipe.cookTimeMinutes}</span>
        </h6>
        </Col>
      </Row>
      <h6 className='mt-3' >CaloriesPerServing: <span className='fw-lighter'>{recipe.caloriesPerServing}</span>
      </h6>
      <h6 className='mt-3'>Rating: <span className='fw-lighter'>{recipe.rating}</span>
      </h6>
      <h6 className='mt-3'>MealType: <span className='fw-lighter'>{recipe.mealType}</span>
      </h6>
      </Col>
    </Row>
    </>
  )
}

export default View
