import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <div>
        <div className='d-flex justify-content-between bg-dark text-light p-5'>
          <div className='w-25'>
            <h3>Redux Cart 2024</h3>
            <p style={{ textAlign: 'justify' }}>An online shopping platform to buy daily needs. Online store is a website, app or platform that helps businesses sell their products or services digitally. Online stores offer convenience, accessibility, and often a wider range of products than bricks-and-mortar stores, allowing customers to browse, place orders, and make payments virtually.</p>
          </div>
          <div className='w-25 text-center'>
            <h3>Links</h3>
            <Link to={'/wish'} className='d-block mb-3 mt-3'>WishList</Link>
            <Link to={'/cart'}>Cart</Link>
          </div>
          <div className='w-25'>
            <h3>References</h3>
            <a href="https://react-bootstrap.netlify.app/" className='d-block mt-3 mb-3'>React Bootstrap</a>
            <a href="https://react.dev/" className='d-block mb-3'>React</a>
            <a href="https://react-redux.js.org/">Redux</a>
          </div>
          <div className='w-25'>
            <h3>Contact Us</h3>
            <p>Submit your email, so we can contact you.!!!</p>
            <input type="email" className='form-control' placeholder='Enter Email Address' />
            <button className='btn btn-outline-light mt-3'>Submit</button>
          </div>
        </div>
        <h6 className='text-center'>ReduxCart 2024 &copy; All rights reserved.</h6>
      </div>
    </>
  )
}

export default Footer