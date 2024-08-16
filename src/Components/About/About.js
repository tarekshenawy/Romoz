import React from 'react';
import "./About.css";
import image1 from "../Images/about/image 5.png";
import image2 from "../Images/about/image 6.png";

export default function About() {
  return (
    <div className='about'>
        <div className='col1'>
            <img src={image1} alt='' className='img1'></img>
            <img src={image2 } alt='' className='img2'></img>

        </div>
        <div className='col2'>
            <h2>رموز للتكنولوجيا وبناء المواقع</h2>
            <hr></hr>
            <p> نحن فريق عمل من خبراء في مجالات البرمجه والتصميم والتسويق الالكنروني
            نستخدم احدث التقنيات لتوفير افضل الخدمات لعملائنا
            فريقنا لديه الكفاءه والخبره لتصميم
             مواقع باعلي جوده من الدقه والمعايير المطلوبه التي يحتاجها العميل وسهله الاستخدام وتحقيق النجاح في
              تسويق المنتجات والخدمات الخاصه بعملائنا
            </p>
            <button>اطلع علي المزيد</button>
        </div>
    </div>
  )
}
