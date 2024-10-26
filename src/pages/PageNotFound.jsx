import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

const PageNotFount = () => {
  return (
    <>
    <Header/>
    <div className='d-flex justify-content-center align-items-center flex-column'>
      <h1 className="fw-bolder" style={{fontSize:"90px"}}>404</h1>
      <img width={'500px'}  src="https://cdn.svgator.com/images/2024/04/electrocuted-caveman-animation-404-error-page.gif" alt="" />
      <h3 className="fw-bolder"style={{fontSize:"30px"}} >Looks Like You Are Lost</h3>
      <p>The page your looking for not available</p>
      <Link className='btn bg-success text-white' to={'/'}>Go To Home</Link>

    </div>
    </>
  )
}

export default PageNotFount