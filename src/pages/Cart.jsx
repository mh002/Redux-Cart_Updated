import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart, emptyCart, incQuantity, decQuantity } from '../redux/slices/cartSlice'
import { useNavigate } from 'react-router-dom'

function Cart() {
  const cart = useSelector((state) => state.CartReducer)
  console.log(cart)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleCheckout = () => {
    dispatch(emptyCart())
    alert("Every Items Checked OUT!!!!")
    navigate('/')
  }

  const handleDecrease = (product) => {
    if (product.quantity == 1) {
      dispatch(removeFromCart(product?.id))
    }
    else {
      dispatch(decQuantity(product?.id))
    }
  }

  return (
    <>
      <div className='container p-5'>
        <Row>
          <Col sm={12} md={8}>
            <h3>Cart Summary</h3>
            {
              cart?.length > 0 ?

                <table className='table table-bordered shadow'>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Product Name</th>
                      <th>Product Image</th>
                      <th>Product Price</th>
                      <th>Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      cart?.length > 0 ?
                        cart?.map(item => (
                          <tr>
                            <td>{item.id}</td>
                            <td>{item?.title}</td>
                            <td>
                              <img height={'180px'} src={item?.thumbnail} alt="img" />
                            </td>
                            <td>{item?.price}</td>
                            <td>
                              <button className='btn' onClick={() => { dispatch(incQuantity(item?.id)) }}>+</button>
                                <input type="text" name="" value={item?.quantity} id="" className='form-control' />
                              <button className='btn' onClick={() => { handleDecrease(item) }}>-</button>
                            </td>
                            <td>
                              <button className='btn' onClick={() => { dispatch(removeFromCart(item?.id)) }}>
                                <i className="fa-solid fa-trash" style={{ color: '#ce2c3c' }}></i>
                              </button>
                            </td>
                          </tr>
                        ))
                        :
                        <h1>No items in cart!!</h1>
                    }
                  </tbody>
                </table>
                :
                <h3 className='text-danger'>NO items in CART!!!</h3>
            }
          </Col>
          <Col sm={12} md={4}>
            <div className='border shadow p-5 mt-5'>
              <h3>Total Products: <span className='text-info'>{cart?.length}</span></h3>
              <h3>Total Amount: <span className='text-warning'>{
                cart?.length > 0 ?
                  cart?.map(item => item.quantity * item.price).reduce((total, item) => total + item)
                  : 0
              }</span></h3>
            </div>
            <div className='d-grid mt-5'>
              <button className='btn btn-success btn-block' onClick={handleCheckout}>CheckOut</button>
            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Cart