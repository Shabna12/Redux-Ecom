import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { decQuantity, emptyCart, incQuantity, removeCartItem } from '../Redux/Slices/cartSlice'
import { Link, useNavigate } from 'react-router-dom'



const Cart = () => {

  const dispatch = useDispatch()

  const ourCart = useSelector(state=>state.cartReducer)

  const navigate = useNavigate()

  const [cartTotal,setCartTotal] = useState(0)

  const handleDecrement = (product) => {
    if (product.quantity>1) {
      dispatch(decQuantity(product.id))
    } else {
      dispatch(removeCartItem(product.id))
    }
  }

  useEffect(()=>{
    if(ourCart?.length>0){
      setCartTotal(ourCart?.map(item=>item.totalPrice).reduce((t1,t2)=>t1+t2))
    }else{
      setCartTotal(0)
    }
  }, [ourCart])


  const checkout = () => {
    dispatch(emptyCart())
    alert("Order successfully placed. Thank you for purchasing with us !!")
    navigate('/')
  }

  return (
    <div>
      <Header/>
      <div style={{marginTop:'150px'}} className="container">
       {
         ourCart?.length>0 ?
         <div className="cart">
        <h1 className='fw-bold'>Cart Summary</h1>
        <div className="row mt-5">
          <div className="col-lg-8">
            <table className='table shadow'>
             <thead>
               <tr>
                 <th>#</th>
                 <th>Name</th>
                 <th>Image</th>
                 <th>  Quantity</th>
                 <th>Price</th>
                 <th>....</th>
               </tr>
             </thead>  
              <tbody>
               {
                 ourCart?.map((product,index)=>(
                   <tr key={product?.id}>
                     <td> {index+1} </td>
                     <td> {product?.title.slice(0,20)}  </td>
                     <td> <img width={'50px'} height={'50px'} src={product?.thumbnail} alt="" /> </td>
                     <td>
                       <div className="d-flex">
                         <button onClick={()=>handleDecrement(product)} className='btn fw-bolder text-dark'>-</button>
                         <input value={product?.quantity} style={{width:'40px'}} className='fw-bolder me-1 ms-1' type="text" readOnly />
                         <button onClick={()=>dispatch(incQuantity(product?.id))} className='btn fw-bolder text-dark'>+</button>
                        </div>
                     </td>
                     <td> $ {product?.totalPrice} </td>
                     <td>
                       <button onClick={()=>dispatch(removeCartItem(product?.id))} className='btn'> <i className='fa-solid fa-trash text-danger'></i> </button>
                     </td>
                   </tr>
                  ))
                }
             </tbody>
            </table>
            <div className="float-end mt-3">
              <button onClick={()=>dispatch(emptyCart())} className='btn btn-danger me-2'>Empty Cart</button>
              <Link to={'/'} className='btn btn-success me-2 fw-bolder'>Shop More..</Link>
            </div>
          </div>            
          <div className="col-lg-4">
            <div className="border rounded p-3">
              <h3>Total Amount :  <span className='text-danger'>$ {cartTotal}</span> </h3>
              <hr />
              <div className='d-grid'>
                <button onClick={checkout} className='btn btn-info'>Checkout</button>
              </div>
            </div>
          </div>
        </div>
         </div>
         :
         <div style={{height:'90vh'}} className='d-flex justify-content-center align-items-center flex-column'>
            <img width={'500px'} height={'300px'} src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-5521508-4610092.png" alt="" />
            <h3 className='text-danger mt-3 fw-bolder'>Your Cart is Empty !!</h3>
         </div> 
        }
      </div>
    </div>
  )
}

export default Cart