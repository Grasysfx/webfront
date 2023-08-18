import React from 'react';
import { Button, } from "react-bootstrap"
import Header from "../Components/MainPage/Header";
import Hero from "../Components/MainPage/Hero";
import Parents from "../Components/MainPage/Parents"
import Intro from "../Components/MainPage/Intro";
import About from "../Components/MainPage/About";
import Contact from "../Components/MainPage/Contact";
import Footer from "../Components/MainPage/Footer";

function Main(){
    return (
        <div>           
            <Header />
            <Hero />
            <Parents /> 
            <Intro />
            <About />
            <Button />
            <Contact />
            <Footer />           
        </div>
    );

}

export default Main;










// const App = () => {
//     return (
//       <div>
//        <Header />
//         <Hero />
//         <Parents /> 
//         <Intro />
//         <About />
//         <Button />
//         <Contact />
//         <Footer />
  
//       </div>
//     );
//   };