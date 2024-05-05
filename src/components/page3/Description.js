import React from 'react';
import img1 from "../Images/image 5.png";
import img2 from "../Images/image 6.png";
import "./Description.css";

export default function Description() {
  return (
   <div className='container'>
    <div className='images'>
        <img src={img1} alt='' className='img1'>   
        </img>
        <img src={img2} alt='' className='img2'></img>

    </div>
    <div className='contents'>
        <h3>رموز للتكنولوجيا وبناء المواقع </h3>
        <p>نحن فريق عمل من خبراء  في مجالات البرمجه والتصميم والتسويق الالكتروني </p>
        <p>نستخدم احدث التقنيات لتوفير افضل الخدمات لعملائنا </p>
        <p>فريقنا لديه الكفاءه والخبره الازمه لتصميم مواقع باعلي جوده من الدقه والمعايير </p>
        <p>المطلوبه التي يحتاجها العميل وسهله الاستخدام وتحقيق النجاح </p>
        <p>في تسويق المنتجات </p>
        <p>والخدمات الخاصه بعملائنا </p>
        <button>اطلع علي المزيد </button>
    </div>
   </div>
  )
}
