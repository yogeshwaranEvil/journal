import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-scroll";
import face from "./assets/facebook.svg";
import twe from "./assets/twitter.svg";
import linkin from "./assets/linked.svg";
import jf from "./assets/jf-everyday.svg";
import About from "./components/About";
import Home from "./components/Home";
import Journal from "./components/journal";
import Fulljournal from "./components/Fulljournal";
import All from "./components/All";
import Publish from "./components/Publish";

interface ChildProps {
  onChange: (newValue: boolean) => void;
}

function MyComponent({onChange}: ChildProps) {
  const location = useLocation();
  const id = new URLSearchParams(location.search).get('id');
  if(id){
    onChange(false);
  }
  else{
    onChange(true);
  }
  // Your component logic

  return (<></>
    // Your component JSX
  );
}
function App() {

  const [showNav, setShowNav] = useState(true);
  const handelShownav  = (newValue: boolean) => {
    setShowNav(newValue);
  };
 
 

  return (
    <Router>
      <MyComponent  onChange={handelShownav}/>
      
         {showNav && (
          <>
      <div className="">
        <div className=" h-24 border-b-[1px] border-[#c9f570] flex flex-col w-full  fixed top-0 z-30">
          <div className="h-10 bg-gray-100 flex flex-row justify-between items-center px-32 ">
            <a
              href="mailto:yogeshwaran.rlcse2022.sece.ac.in"
              className=" font-light text-sm"
            >
              yogeshwaran.rlcse2022.sece.ac.in
            </a>
            <div className=" h-fit flex flex-row gap-3 items-center">
              <a>
                <img src={face} className=" size-7"></img>
              </a>
              <a>
                <img src={twe} className="  size-6"></img>
              </a>
              <a>
                <img src={linkin} className=" size-6"></img>
              </a>
            </div>
          </div>

          <nav className="flex flex-row px-32 items-center justify-between h-14 bg-white">
            <img src={jf}></img>
            <div className=" flex flex-row gap-4 items-center">
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="font-light text-xs mr-7 cursor-pointer"
              >
                Home
              </Link>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="font-light text-xs mr-7 cursor-pointer"
              >
                About
              </Link>
              <Link
                to="Journal"
                smooth={true}
                duration={500}
                className="font-light text-xs mr-7 cursor-pointer"
              >
                Journal
              </Link>
              <button className=" bg-neutral-900 text-white px-6   min-h-8 min-w-12  rounded-full font-light text-xs">
                Login
              </button>
            </div>
          </nav>
        </div>
       
      </div>
      <section id="home" className=" overflow-hidden h-[700px] border-b-[1px] border-[#c9f570]">
          <Home />
        </section>
      <section id="about">
        <About />
      </section>
      <section id="Journal">
        <Journal></Journal>
      </section>
      </> )}
      <Routes>
      <Route path="/fulljournal" element={<Fulljournal />} />
      <Route path="/Alljournal" element={<All></All>} />
      <Route path="/publish" element={<Publish></Publish>}/>

      </Routes>
    </Router>
  );
}

export default App;
