import React from 'react'
import { Container, Form, Navbar } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchRecipe } from '../Redux/slice/recipeSlice'


const Header = ({ inLanding }) => {

  const userRecipe = useSelector(state=>state.recipereducer)
  const dispatch = useDispatch()

  
  
  return (
    <>
      <Navbar className="bg-primary">
        <Container>
          <Navbar.Brand >
            <Link to={'/'} className='text-white  fw-bolder' style={{ textDecoration: "none", fontSize: "35px" }}>
              <i className="fa-solid fa-bowl-food me-2"></i>

              Recipe List
            </Link>
          </Navbar.Brand>
          {
            inLanding &&
            
            <Form className="d-flex">
              <Form.Control
                style={{ width: "300px" }}
                type="search"
                placeholder="Search by cuisine"
                className="me-5 rounded"
                aria-label="Search by cuisine"
                onChange={e=>dispatch(searchRecipe(e.target.value.toLowerCase()))}
              />
            </Form>
          }

        </Container>
      </Navbar>
    </>
  )
}

export default Header