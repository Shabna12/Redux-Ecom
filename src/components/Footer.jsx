import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div style={{height:'300px'}} className='container-fluid mt-5 w-100 bg-secondary'>
    <div className='d-flex justify-content-between m-3'>
      <div style={{width:'400px'}} className="intro">
        <h4 className='text-dark fw-bold'> <i className="fa-solid fa-truck-fast me-2 mt-5"></i> FF Store</h4>
        <p style={{color:'darkblue'}}>
          Designed and built with all the love in the world by the Luminar Team with the help of our contributors.
        </p>
        <p style={{color:'darkblue'}}>Code licensed LUMINAR, docs CC BY 3.0.</p>
        <p style={{color:'darkblue'}}>Currently v5.3.2.</p>
      </div>
      <div className="links d-flex flex-column mt-5">
        <h5 className='text-dark fw-bold'>Links</h5>
        <Link to={'/'} style={{textDecoration:'none', color:'darkblue'}}>Home</Link>
        <Link to={'/wishlist'} style={{textDecoration:'none', color:'darkblue'}}>Wishlist</Link>
        <Link to={'/cart'} style={{textDecoration:'none', color:'darkblue'}}>Cart</Link>
      </div>
      <div className="guides d-flex flex-column mt-5">
        <h5 className='text-dark fw-bold'>Guides</h5>
        <a href="https://react.dev/" style={{textDecoration:'none', color:'darkblue'}} target='_blank'>React</a> <br />
        <a href="https://react-bootstrap.github.io/" style={{textDecoration:'none', color:'darkblue'}} target='_blank'>React Bootstrap</a> <br />
        <a href="https://reactrouter.com/en/main" style={{textDecoration:'none', color:'darkblue'}} target='_blank'>React Router</a>

      </div>
      <div className="contact d-flex flex-column mt-5">
        <h5 className='text-dark fw-bold'>Contact Us</h5>
        <div className="d-flex">
          <input placeholder='Enter your email here' type="text" className='form-control' />
          <button className='btn btn-info ms-1'> <i className='fa-solid fa-arrow-right'></i> </button>
        </div>
        <div className="icons d-flex justify-content-between mt-3">
          <a href="" style={{textDecoration:'none', color:'darkblue'}} target='_blank'> <i className='fa-brands fa-twitter'></i> </a>
          <a href="" style={{textDecoration:'none', color:'darkblue'}} target='_blank'> <i className='fa-brands fa-facebook'></i> </a>
          <a href="" style={{textDecoration:'none', color:'darkblue'}} target='_blank'> <i className='fa-brands fa-linkedin'></i> </a>
          <a href="" style={{textDecoration:'none', color:'darkblue'}} target='_blank'> <i className='fa-brands fa-instagram'></i> </a>
          <a href="" style={{textDecoration:'none', color:'darkblue'}} target='_blank'> <i className='fa-brands fa-github'></i> </a>
          <a href="" style={{textDecoration:'none', color:'darkblue'}} target='_blank'> <i className='fa-solid fa-phone'></i> </a>
        </div>
      </div>
    </div>
    <p className='text-center mt-3' style={{color:'darkblue'}}>Copyright © Jan Batch, 2024 FF STORE built with REACT.</p>
  </div>
  )
}

export default Footer