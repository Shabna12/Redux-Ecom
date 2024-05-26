import React from 'react'
import Header from '../components/Header'
import { Card, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { removeWishlistItem } from '../Redux/Slices/wishlistSlice'
import { addToCart } from '../Redux/Slices/cartSlice'


const Wishlist = () => {

  const ourWishlist = useSelector(state => state.wishlistReducer)
  const dispatch = useDispatch()

  const ourCart = useSelector(state=>state.cartReducer)
  const handleCart = (product)=>{
    const existingProduct = ourCart?.find(item=>item.id==product.id)
    if (existingProduct) {
      dispatch(addToCart(product))
      dispatch(removeWishlistItem(product.id))
      alert("Product quantity is Incrementing !!")
    } else {
      dispatch(addToCart(product))
      dispatch(removeWishlistItem(product.id))
      
    }
  }

  return (
    <>
      <div>
        <Header/>
        <div style={{marginTop:'150px'}} className="container-fluid">
          {
            ourWishlist?.length>0?
            <div>
             <h2 className='text-danger fw-bolder'>Your Wishlist</h2>
             <Row className='my-5'>
               {
                 ourWishlist?.map(product =>(
                   <Col className='mt-5 mb-5 me-2' sm={12} md={6} lg={4} xl={3} >
                     <Card className='shadow rounded' style={{ width: '18rem' }}>
                       <Card.Img height={'180px'} variant="top" src={product?.thumbnail} />
                       <Card.Body>
                         <Card.Title> {product?.title.slice(0,20)} </Card.Title>
                         <div className="d-flex justify-content-around mt-3">
                           <button onClick={()=>dispatch(removeWishlistItem(product?.id))} className='btn'> <i className='fa-solid fa-trash text-danger'></i> </button>
                           <button onClick={()=>handleCart(product)} className='btn'> <i className='fa-solid fa-cart-shopping text-success'></i> </button>
                         </div>
                       </Card.Body>
                     </Card>
                   </Col>
                  ))
                }
             </Row>
            </div>
           :
           <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center flex-column'>
             <img width={'500px'} height={'300px'} src="https://w7.pngwing.com/pngs/91/848/png-transparent-empty-cart-illustration.png" alt="" />
             <h3 className='text-danger mt-5 fw-bolder'>Your Wishlist is Empty !!</h3>
           </div> 
          }
        </div>
     </div>
    </>
    
  )
}

export default Wishlist