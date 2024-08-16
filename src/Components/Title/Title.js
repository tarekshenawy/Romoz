import React from 'react';
import "./Title.css";

export default function Title({subtitle}) {
  return (
    <div className='title'>
        <h1>{subtitle}</h1>
        <hr></hr>
       
    </div>
  )
}
