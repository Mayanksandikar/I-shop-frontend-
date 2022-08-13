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
        <div class="dropdown">

          <p><Link to='' className="none dropbtn">Home</Link></p>
        
        <div className="dropdown-content">
        <a href="/accessories">Accessories</a>
         <a href="/mobile">Mobile</a>
       <a href="/ipad">Ipad</a>
       
       <a href="/macbook">MacBook</a>
       </div>
       </div>
          <p><Link to='/accessories' className="none dropbtn">Accessories</Link></p>

          <p><Link to='/mobile' className="none dropbtn">Mobile</Link></p>
          <p><Link to='/ipad' className="none dropbtn">Ipad</Link></p>
          
          <p><Link to='/macbook' className="none dropbtn">MacBook</Link></p>
        </div>
  
    </div>

  )
}

export default Header;