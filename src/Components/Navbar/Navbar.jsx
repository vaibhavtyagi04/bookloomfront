import React, { useContext, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import cart_icon from '../Assets/cart_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {

  let [menu,setMenu] = useState("shop");
  const {getTotalCartItems} = useContext(ShopContext);

  return (
    <div className='nav'>
      <Link to='/' style={{ textDecoration: 'none' }} className="nav-logo">
        <div  className="logo">
          <p>B</p>
        </div>
        <p>Book Loom</p>
      </Link>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("home")}}><Link to='/' style={{ textDecoration: 'none', color: 'black' }}>Home</Link>{menu==="home"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("books")}}><Link to='/books' style={{ textDecoration: 'none', color: 'black' }}>Books</Link>{menu==="books"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("articles")}}><Link to='/articles' style={{ textDecoration: 'none', color: 'black' }}>Articles</Link>{menu==="articles"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("comics")}}><Link to='/comics' style={{ textDecoration: 'none', color: 'black' }}>Comics</Link>{menu==="comics"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem('auth-token')
        ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace("/");}}>Logout</button>
        :<Link to='/login' style={{ textDecoration: 'none' }}><button>Login</button></Link>}
        <Link to="/cart"><img src={cart_icon} alt="cart"/></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar