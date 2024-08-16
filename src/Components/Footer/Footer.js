import React from 'react';
import "./Footer.css";
import mailicon from "../Images/mail.png";
import phoneicon from "../Images/telephone.png";
import whatsappicon from "../Images/whatsapp.png";
import instgramicon from "../Images/instagram.png";
import whatsicon from "../Images/whatsapp (1).png";
import twittericon from "../Images/twitter.png";
import facebook from "../Images/facebook.png";

export default function Footer() {
  return (
    <div className='footer'>

        <div className='col-1'>
            <h3 className='head'>كن علي تواصل</h3>
            <h2><span>المملكة العربية السعودية</span></h2>
            <p >rmoztec8@gmail.com<img src={mailicon} alt=''></img></p>
            <p >966570869472<img src={phoneicon} alt=''></img></p>
            <p >0568056221<img src={whatsappicon} alt=''></img></p>

        </div>

        <div className='col-2'>
        <h3 >خدمـــاتنــــــــا</h3>
        <p>تصميم تطبيقات الجوال </p>
        <p>فيديو موشن جرافيك </p>
        <p>التسويق الالكترونى </p>
        <p>الدعم الفنى </p>
        <p>تصميم الهوية التجارية </p>

        </div>

        <div className='col-3'>
        <h3>رموز للتكنولوجيا وبناء المواقع </h3>
        <p>يسعدنا متابعتكم لنا</p>
        <div className='icons'>
          <img src={facebook} alt=''></img>
          <img src={twittericon} alt=''></img>
          <img src={instgramicon} alt=''></img>
          <img src={whatsicon} alt=''></img>
            
        </div>
       

        </div>

    </div>
  )
}
