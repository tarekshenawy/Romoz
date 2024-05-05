import React from 'react';
import Navbar from './components/Navbar';
import Background from './components/Background/Background';
import Content from './components/Contents/Content';
import Cards from './components/page2/Cards';
import Description from './components/page3/Description';

export default function Projects() {
  return (
    <div>
         <Navbar/>
         <Content/>
  <Background/>
  <Cards/>
  <Description/>
  

    </div>
 
  )
}
