

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from "./Pages/Main";
import LogIn from './Pages/LogIn';
import ImageLibrary from "./Pages/ImageLibrary";

function App() {
  
  return (
    <Router>
    <Switch>
      <Route path='/' exact={true} component={Main}/>
      <Route path='/LogIn' exact={true} component={LogIn}/>
      <Route path="/ImageLibrary" exact={true} component={ImageLibrary} />
      {/* <Route path='/clients/:id' component={ClientEdit}/> */}
    </Switch>
  </Router>
  );
}

export default App;



















// const App = () => {
//   return (
//     <div>
//      <Header />
//       <Hero />
//       <Parents /> 
//       <Intro />
//       <About />
//       <Button />
//       <Contact />
//       <Footer />

//     </div>
//   );
// };

// export default App;









// import Button from "./Components/Buttons/Upload"
// import Header from "./Components/Header";
// import Hero from "./Components/Hero";
// import Parents from "./Components/Parents"
// import Intro from "./Components/Intro";
// import About from "./Components/About";
// import Contact from "./Components/Contact";
// import Footer from "./Components/Footer";