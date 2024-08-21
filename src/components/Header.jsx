import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import { useSelector, useDispatch } from 'react-redux';
import { searchProduct } from '../redux/slices/productSlice';



function Header() {
  const { wishlist } = useSelector(state => state.wishlistReducer)
  const cart = useSelector(state => state.CartReducer)
  const dispatch = useDispatch()
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>
            <Link to={'/'} className='text-decoration-none text-dark'>
              <i className="fa-solid fa-cart-shopping " style={{ color: '#000000' }}> Redux Cart</i>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className='btn me-3'>
                <input type="text" onChange={(e)=>{dispatch(searchProduct(e.target.value.toLowerCase()))}} placeholder='Search Product' name='form-control' />
              </Nav.Link>
              <Nav.Link className='btn border border-dark me-3'>
                <Link to={'/wish'} className='text-decoration-none text-dark'>
                  <i className="fa-solid fa-heart me-1" style={{ color: '#f604c2' }}></i>WishList
                  <Badge bg="secondary" className='ms-1'>{wishlist?.length}</Badge>
                </Link>
              </Nav.Link>
              <Nav.Link className='btn border border-dark me-3'>
                <Link to={'/cart'} className='text-decoration-none text-dark'>
                  <i className="fa-solid fa-cart-shopping me-1" style={{ color: '#d10000' }}></i>Cart
                  <Badge bg="secondary" className='ms-1'>{cart?.length}</Badge>
                </Link>
              </Nav.Link>


            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header