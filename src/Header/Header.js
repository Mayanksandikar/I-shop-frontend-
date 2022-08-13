import React from 'react'
import {Link} from 'react-router-dom';
import "../Style/Style.css"

const Header = () => {
  return (
    <div className='container'>
        <div>
            <span></span>
            <span></span>
        </div>
        <div className='i-shop'>
         .... <span className="span2">Welcome</span> <span className="span"> to </span> I-SHOP....
        </div>
        <div className='page-section'>
          <p><Link to='' className="none">Home</Link></p>
          <p><Link to='/accessories' className="none">Accessories</Link></p>

          <p><Link to='/mobile' className="none">Mobile</Link></p>
          <p><Link to='/ipad' className="none">Ipad</Link></p>
          <p><Link to='/laptop' className="none">Laptop</Link></p>
          <p><Link to='/macbook' className="none">MacBook</Link></p>
        </div>
    </div>
  )
}

export default Header;