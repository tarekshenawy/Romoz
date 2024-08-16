import React, { useState } from 'react';
import './Navbar.css';
import menu_icon from "../Images/menu-icon.png";
import { Link } from 'react-scroll';

export default function Navbar() {
  const [state,setState]=useState(false);
  const [mobileicon,setMobileicon]=useState(false);

  window.addEventListener("scroll",function(){
  
  this.scrollY >50 ? setState(true):setState(false)
     
  })
  return (
    <div className='container'>
      
       
            <nav className={state ? "nav_color" : ""}>
            <button><Link to='contact' offset={-200} smooth={true} duration={500}>تواصل معنا</Link></button>
        <ul className={mobileicon ? "sidebar":""}>
            <li>02588898555</li>
            <li><Link to='branches' offset={-200} smooth={true} duration={500}>فروعنــا</Link></li>
            <li><Link to='works' offset={-200} smooth={true} duration={500}>أعمالنــا</Link></li>
            <li><Link to='services' offset={-200} smooth={true} duration={500}>خدماتنــا</Link></li>
            <li><Link to='about' offset={-200} smooth={true} duration={500}>من نحــن</Link></li>
            <li className='home'><Link to='background' offset={0} smooth={true} duration={500} >الرئيسيه </Link></li>
        </ul>
        <img src={menu_icon} alt='' className='menu_icon' onClick={()=>setMobileicon(!mobileicon)}></img>
    </nav>


    </div>

  )
}
