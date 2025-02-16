import React from 'react';
import "./style.css"
import Navbar from './components/Navbar';
import About from './components/About';
import Section from './components/Section';


let sectionData = [
  {
    title: "Skills",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptatibus."
  },
  {
    title: "Qualifications",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptatibus."
  },
  {
    title: "Experience",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptatibus."
  }
]


const App = ()=>{
    return(
        <div>
            <Navbar/>
            <About/>

            {/* <Section title="Mr Beast" des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptatibus."/>
            <Section title="Mr Beast" des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptatibus."/>
            <Section title="Mr Beast" des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptatibus."/> */}

            {
              sectionData.map((item, index)=>(
                      <Section 
                          title={item.title}
                          des={item.des}                      
                      />
              ))
            }
        </div>
    )
}

export default App;