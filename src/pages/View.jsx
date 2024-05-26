import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToWishlist } from '../Redux/Slices/wishlistSlice'
import { addToCart } from '../Redux/Slices/cartSlice'


const View = () => {

  const [product,setProduct] = useState({})


  const { id } = useParams()
  // console.log(product);

  const userWishlist = useSelector(state=>state.wishlistReducer)
  const dispatch = useDispatch()
  console.log(userWishlist);

  

  useEffect(()=>{
    if (localStorage.getItem("allProducts")) {
      const allProducts = JSON.parse(localStorage.getItem("allProducts"))
      setProduct(allProducts.find((item) => item.id==id))
    }
  }, [])

  const handleWishlist = () => {
    if (userWishlist?.includes(product)) {
      alert("Item already exist in your Wishlist !!")
    } else {
      dispatch(addToWishlist(product));
    }
  }

  const yourCart = useSelector(state=>state.cartReducer)

  const handleCart = () => {
    const existingProduct = yourCart?.find(item=>item.id==product.id)
    if (existingProduct) {
      dispatch(addToCart(product))
      alert("Existing product quantity is Incrementing !!")
    } else {
      dispatch(addToCart(product))
    }
  }

  return (
    <>
     <Header/>
     <div style={{marginTop:'150px', height:'100vh'}} className="container d-flex align-items-center">
       <div className="row align-items-center w-100">
        <div className="col-lg-5">
          <img className='img-fluid' width={'500px'} height={'800px'} src={product?.thumbnail} alt="" />
        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-6">
          <h4>PID : {product?.id} </h4>
          <h1>{product?.title}</h1>
          <h3 className='fw-bolder text-danger'>$ {product?.price}</h3>
          <p style={{textAlign:'justify'}}>    
            <span className='fw-bolder fs-4'>Description : </span> {product?.description}
          </p>
          <div className='d-flex justify-content-between mt-5 mb-5'>
            <button onClick={handleWishlist} className='btn btn-outline-dark p-3'> <i className='fa-solid fa-heart text-danger'></i> ADD TO WISHLIST</button>
            <button onClick={handleCart} className='btn btn-outline-dark p-3'> <i className='fa-solid fa-cart-shopping text-danger'></i> ADD TO CART</button>
          </div>
        </div>
       </div>
     </div>  
    </>
  )
}

export default View