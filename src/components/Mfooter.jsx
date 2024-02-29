import React from 'react'
import { Link } from 'react-router-dom'

function Mfooter() {
    return (
        <div style={{height:"300px"}} className="container mt-5 w-100">
        <div className="footer-content d-flex justify-content-between">
            <div style={{width:"400px"}} className="media">
                <h5 className='d-flex'><i style={{height:"25px"}} className='fa-solid fa-music me-3'></i>Media Player</h5>
                <p style={{textAlign:"justify"}}>Designed and built with all the love in the world by the Bootsytrap</p>
                <span>Code licensed MLT,docs </span>
                <span>Currently v5.3.2</span>
            </div>
            <div className="links d-flex flex-column">
                <h5>Links</h5>
            
                <Link to={"/"} style={{textDecoration:"none",color:""}} >Landing Page</Link>
                <Link to={"/home"} style={{textDecoration:"none",color:""}} >Home Page</Link>
                <Link to={"/watch"} style={{textDecoration:"none",color:""}} >Watch Page</Link>

            </div>
            <div className="guides d-flex flex-column">
            <h5>Guides</h5>
            
            <a href='/' target='_blank' style={{textDecoration:"none",color:""}}>React js</a>
            <a href='/' target='_blank' style={{textDecoration:"none",color:""}}>React Router</a>
            <a href='/' target='_blank' style={{textDecoration:"none",color:""}}>React Bootstrap</a>
            </div>
            <div className="contact d-block">
          <h5 style={{height:'30px'}}>Contact Us</h5>
          <div className="d-flex">
            <input type="text" className='form-control' placeholder='Email Id please' />
            <button className='btn btn-info ms-1'><i className="fa-solid fa-arrow-right"></i></button>
          </div>
          <div className="icons d-flex justify-content-between mt-3">
            <a href="https://react.dev/" target='_blank' style={{textDecoration:'none',color:'white'}}><i className="fa-brands fa-twitter fa-1x"></i></a>
            <a href="https://react.dev/" target='_blank' style={{textDecoration:'none',color:'white'}}><i className="fa-brands fa-instagram fa-1x"></i></a>
            <a href="https://react.dev/" target='_blank' style={{textDecoration:'none',color:'white'}}><i className="fa-brands fa-facebook fa-1x"></i></a>
            <a href="https://react.dev/" target='_blank' style={{textDecoration:'none',color:'white'}}><i className="fa-brands fa-linkedin fa-1x"></i></a>
            <a href="https://react.dev/" target='_blank' style={{textDecoration:'none',color:'white'}}><i className="fa-brands fa-github fa-1x"></i></a>
            <a href="https://react.dev/" target='_blank' style={{textDecoration:'none',color:'white'}}><i className="fa-solid fa-phone fa-1x"></i></a>

          </div>
            </div>

            </div>
        </div>
    )
}

export default Mfooter