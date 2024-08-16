import Navbar from './Components/Navbar/Navbar';
import Background from "./Components/Background/Background";
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Workenviroment from './Components/Workenviroment/Workenviroment';
import Works from './Components/Works/Works';
import Skills from './Components/Skills/Skills';
import Supports from './Components/Supports/Supports';
import Branches from "./Components/Branches/Branches";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Services from './Components/Services/Services';



function App() {
  return (
    <div >
      <Navbar/>
      <Background/>
      <div className='container' >
        <Title subtitle = "خدماتنــــــــا"/>
        <Services/>
        <Title subtitle ="من نحــــــن"/>
        <About/>
        <Title subtitle ="بيئه العمــــل"/>
        <Workenviroment/>
        <Title subtitle ="بعض اعمالنــا"/>
        <Works/>
        <Skills/>
        <Title subtitle="شركاء النجاح"/>
        <Supports/>
        <Title subtitle="فروعنـــا"/>
        <Branches/>
        <Title subtitle="تواصل معنــا"/>
        <Contact/>
        <Footer/>


      

      </div>
      
     
      
     
    </div>
  );
}

export default App;
