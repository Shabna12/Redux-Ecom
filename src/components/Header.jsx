import React from 'react'
import { Container, Nav, Navbar, Badge } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchProduct } from '../Redux/Slices/productSlice'


const Header = ({insideHome}) => {
  const dispatch = useDispatch()

  const yourWishlist = useSelector(state => state.wishlistReducer)

  const yourCart = useSelector(state=>state.cartReducer)

  return (
    <>
      <Navbar expand="lg" className='bg-secondary w-100 position-fixed top-0' style={{zIndex:'10'}}>
       <Container>
         <Navbar.Brand> 
           <Link className='fw-bolder fs-3' to={'/'} style={{color:'black', textDecoration:'none'}} > <i className='fa-solid fa-truck-fast'></i> FF Store </Link>   
         </Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
           <Nav className="ms-auto">
             { insideHome &&  
               <Nav.Link>
                 <input onChange={(e)=>dispatch(searchProduct(e.target.value.toLowerCase()))} style={{width:'400px'}} type="text" className='rounded p-2' placeholder='Search Products Here !!' />
               </Nav.Link> 
              }
             <Nav.Link >  
               <Link className='fw-bolder' style={{color:'black',textDecoration:'none'}} to={'/wishlist'}> <i className='fa-solid fa-heart text-danger'></i> Wishlist <Badge> {yourWishlist?.length} </Badge> </Link> 
             </Nav.Link>
             <Nav.Link >
               <Link className='fw-bolder' style={{color:'black',textDecoration:'none'}} to={'/cart'}> <i className='fa-solid fa-cart-shopping text-success'></i> Cart <Badge> {yourCart?.length} </Badge> </Link> 
             </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
     </Navbar>
    </>
  )
}

export default Header