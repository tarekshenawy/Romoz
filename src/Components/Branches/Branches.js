import React from 'react';
import "./Branches.css";
import img1 from "../Images/Screenshot 2024-05-19 142212.png";
import emirateicon from "../Images/world-flag.png";
import saudiaicon from "../Images/pngwing.com.png";
import locationicon from "../Images/placeholder.png";

export default function Branches() {
  return (
    <div className='branches'>
      
        <p>زورو اقرب فرع لنا لتجربه خدماتنا المتميزه</p>

      <img src={img1} alt=''></img>

      <div className='location'>

      <div className='location-info'>
        <h2>الامارات<img src={emirateicon} alt=''></img> </h2>
        <p> ابوظبي, شارع المرور, بجوار كافيه سي هاوس, الدور الخامس<img src={locationicon} alt=''></img></p>
        <p> دبي, الخليج التجاري, برج بينونة تاور, الدور الحادي و العشرون <img src={locationicon} alt=''></img></p>

      </div>
      <div className='location-info'>
        <h2>المملكة العربية السعودية<img src={saudiaicon} alt=''></img> </h2>
        <p>  الرياض, حي الملز, بجوار شركة بيبسي, برج سلمان, الدور التاسع <img src={locationicon} alt=''></img></p>
        <p> جده, حي الصفا, مقابل مصرف الردحي, بناية رقم ٦, الدور الثالث<img src={locationicon} alt=''></img></p>

      </div>

      </div>

      
    </div>
  )
}
