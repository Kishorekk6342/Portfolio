import { BrowserRouter } from "react-router-dom";
import {About, Contact, Experience, Feedbacks,Hero,
        Navbar,Tech, Works, StarsCanvas} from "./components";

const App = () =>{
  return (
   <BrowserRouter>
   <div >
    <div className="bg-primary">
      <Navbar />
      <Hero />
    </div>
    <About />
    <Experience />
    <Works /> 
    <Tech />
    <Feedbacks />
    <div className="bg-primary">
      <StarsCanvas />
      <Contact />
    </div>
   </div>
   </BrowserRouter>
  )
}

export default App
