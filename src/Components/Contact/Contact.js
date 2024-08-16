import React from 'react';
import "./Contact.css";
import logocontact from "../Images/Screenshot 2024-05-20 093937.png";
export default function Contact() {
  return (
    <div className='contact'>
        <div className='col-1'>
            <img src={logocontact} alt=''></img>
        </div>

        <div className='col-2'>
            <form>
               
                <input type='text' placeholder='الاسم' required></input>
                <input type='text' placeholder="البريد الالكتروني" required></input>
                <input type='text' placeholder="رقم الهاتف" required></input>
                <input type='text' placeholder="نوع الخدمه" required></input>
                <textarea type="text" placeholder='قم بادخال رسالتك' rows={7} cols={30}></textarea>
                <button>إرســــــــــــــا ل</button>
            </form>

        </div>

    </div>
  )
}
