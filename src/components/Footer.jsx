import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div style={{height:'300px'}} className='bg-primary  mt-5 w-100'>
    <div className="d-flex justify-content-between container pt-5">
      <div style={{width:"400px"}} className="intro">
      <Link style={{textDecoration:"none", color:"white",fontWeight:"600"}} to={'/'}> 
      <i className="fa-solid fa-bowl-food"></i>   
               Recipe List
        </Link>
        <p className='mt-3 text-white'>Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.</p>
        <p className='text-white'>Code licensed MIT, docs CC BY 3.0.</p>
        <p className='text-white'>Currently v5.3.3.</p>
      </div>
      <div>
        <h2 className="text-white" style={{fontWeight:"600",fontSize:"20px"}}>Links</h2>
        <Link style={{textDecoration:"none", color:"white",}} to={'/'}> 
            Landing Page
        </Link> 
      </div>
      <div>
        <h2 className="text-white" style={{fontWeight:"600",fontSize:"20px"}}>Guides</h2>
        <Link style={{textDecoration:"none", color:"white",}} to={''}> 
            React
        </Link> <br />
        <Link style={{textDecoration:"none", color:"white",}} to={''}> 
            React Bootstrap
        </Link><br />
        <Link style={{textDecoration:"none", color:"white",}} to={''}> 
            React Router
        </Link>
      </div>
      <div className="contact">
      <h2 className="text-white" style={{fontWeight:"600",fontSize:"20px"}}>Contact Us</h2>
      <input type="text" placeholder='Enter your email here' className='rounded h-25 text-center'  />
      <button className='btn btn-info ms-1 h-25'><i className="fa-solid fa-arrow-right  " ></i>
      </button>
      <br />
      <div className='d-flex  justify-content-evenly mt-3 text-white'>
      <i class="fa-brands fa-twitter"></i>
      <i class="fa-brands fa-instagram"></i>
      <i class="fa-brands fa-linkedin"></i>
      <i class="fa-brands fa-github"></i>
      <i class="fa-solid fa-phone"></i>
      </div>
     
      </div>
    </div>
    <p className='text-center mt-3 text-white'>Copyright & copy ; June 2024 Batch, Media Player. Buildt with React. </p>
  </div>
      )
}

export default Footer