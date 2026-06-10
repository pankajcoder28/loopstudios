import logo from './images/logo.svg'
import interactive from "./images/mobile/image-interactive.jpg"
import deepearth from "./images/desktop/image-deep-earth.jpg"
import mobiledeepearth from "./images/mobile/image-deep-earth.jpg"
import { useState } from "react"
import nightarcade from "./images/desktop/image-night-arcade.jpg"
import mobilnightarcade from "./images/mobile/image-night-arcade.jpg" 
import above from "./images/desktop/image-from-above.jpg" 
import mobileabove from "./images/mobile/image-from-above.jpg"
import pocket from "./images/desktop/image-pocket-borealis.jpg"
import mobilepok from "./images/mobile/image-pocket-borealis.jpg"
import grid from "./images/desktop/image-grid.jpg"
import mobilgrid from "./images/mobile/image-grid.jpg" 
import curiosity from "./images/desktop/image-curiosity.jpg"
import mobilcuro from "./images/mobile/image-curiosity.jpg"
import fish from "./images/mobile/image-fisheye.jpg"
import mobilfish from "./images/mobile/image-fisheye.jpg"
import fromabove from "./images/desktop/image-from-above.jpg"
import mobilfromabove from "./images/mobile/image-from-above.jpg"
import borialis from "./images/desktop/image-pocket-borealis.jpg"
import mobilborialis from "./images/mobile/image-pocket-borealis.jpg"
import soc from "./images/desktop/image-soccer-team.jpg"
import mobilsoc from "./images/mobile/image-soccer-team.jpg"
import twi from "./images/icon-twitter.svg"
import insta from "./images/icon-instagram.svg"
import face from "./images/icon-facebook.svg"
import pin from "./images/icon-pinterest.svg"

function App() {

  const [open, setOpen] = useState(false);


  return (
    <div>
      <section id="hero">
      
      <div className="container max-w-6xl px-6 py-10 mx-auto ">
        
        <nav className="flex items-center justify-between text-white font-bold ">
          <img src={logo} alt="" />
          <div className="hidden font-alata md:flex md:space-x-6  ">
            <div className="group">
            <a href="#">About</a>
            <div className="group-hover:border-b group-hover:border-blue-100 mx-2 duration-200"></div>
          </div>

          <div className="group">
            <a href="#">Event</a>
            <div className="group-hover:border-b group-hover:border-blue-100 mx-2 duration-200"></div>
          </div>

          <div className="group">
            <a href="#">Carrier</a>
            <div className="group-hover:border-b group-hover:border-blue-100 mx-2 duration-200"></div>
          </div>

          <div className="group">
            <a href="#">Products</a>
            <div className="group-hover:border-b group-hover:border-blue-100 mx-2 duration-200"></div>
          </div>

          <div className="group">
            <a href="#">Support</a>
            <div className="group-hover:border-b group-hover:border-blue-100 mx-2 duration-200"></div>
          </div>
          </div>
          <div className="md:hidden">
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className={`z-40 block hamburger md:hidden ${
              open ? "open" : ""
            }`}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
        </nav>
       <div
        className={`absolute top-0 left-0 bottom-0 w-full min-h-screen bg-black text-white pt-40 text-2xl pl-3 uppercase space-y-8 self-end ${
          open ? "flex flex-col" : "hidden"
        }`}
      >
        <a href="#" className="hover:text-pink-500">About</a>
        <a href="#" className="hover:text-pink-500">Event</a>
        <a href="#" className="hover:text-pink-500">Career</a>
        <a href="#" className="hover:text-pink-500">Products</a>
        <a href="#" className="hover:text-pink-500">Support</a>
      </div>
        <div className="my-32 border-2 max-w-sm p-4 font-sans text-4xl text-white uppercase md:p-10 md:text-6xl md:max-w-lg  ">
          impresive experiences that deliver
        </div>
      </div>
    </section>

    <section id="features">
      <div className="container relative px-3 my-32 flex flex-col mx-auto text-gray-900 md:flex-row md:px-0 max-w-6xl ">
        <img src={interactive} alt="" />

        <div className="bg-white md:absolute  md:right-0 md:py-20 md:top-50 md:pl-10 lg:right-20">
            <h2 className="max-w-lg uppercase text-center mt-10 mb-6 text-4xl text-gray-900 font-sans md:text-5xl md:mt-0 md:text-left ">the leader in interactive vr</h2>

            <p className="max-w-md text-center md:text-left">
                Founded in 2011, Loopstudios has been producing world-class virtual
                reality projects for some of the best companies around the globe.
                Our award-winning creations have transformed businesses through
                digital experiences that bind to their brand.
            </p>

        </div>

      </div>

    </section>

    <section id="gallery" >
      <div className="container mx-auto max-w-6xl px-6 my-30 md:px-0 ">

      <div className="flex flex-col justify-between mb-12 mt-40 items-center md:flex-row ">
        <h1 className="text-4xl uppercase text-center md:text-left md:pl-1  ">our creation</h1>

          <button className="hidden py-2  text-black text-xl hover:bg-black hover:text-shadow-white uppercase  border-2 px-10 font-alata 
          hover:text-white
          md:block ">see all</button>
      </div>
          <div className="item-container ">
            <div className="group relative md:w-1/4 overflow-hidden">
              <img src={deepearth} alt="" className="hidden w-full md:block duration-200  group-hover:scale-110"/>
              
              <img src={mobiledeepearth} alt="" className="w-full md:hidden group-hover:scale-110 duration-200" />

              <div className="absolute top-0 right-0 bottom-0 left-0 bg-linear-to-b  from transparent to-gray-900 group-hover:from-gray-50 group-hover:to-white group-hover:opacity-70">

              </div>

              <h2 className="absolute text-white bottom-0 p-2 group-hover:scale-110 group-hover:text-black ">deep earth</h2>
              
            </div>

            <div className="group relative md:w-1/4 overflow-hidden">
              <img src={nightarcade} alt="" className="hidden w-full md:block duration-200  group-hover:scale-110"/>
              
              <img src={mobilnightarcade} alt="" className="w-full md:hidden group-hover:scale-110 duration-200" />

              <div className="absolute top-0 right-0 bottom-0 left-0 bg-linear-to-b  from transparent to-gray-900 group-hover:from-gray-50 group-hover:to-white group-hover:opacity-70">

              </div>

              <h2 className="absolute text-white bottom-0 p-2 group-hover:scale-110 group-hover:text-black ">night arcade</h2>
              
            </div>

            <div className="group relative md:w-1/4 overflow-hidden">
              <img src={above} alt="" className="hidden w-full md:block duration-200  group-hover:scale-110"/>
              
              <img src={mobileabove} alt="" className="w-full md:hidden group-hover:scale-110 duration-200" />

              <div className="absolute top-0 right-0 bottom-0 left-0 bg-linear-to-b  from transparent to-gray-900 group-hover:from-gray-50 group-hover:to-white group-hover:opacity-70">

              </div>

              <h2 className="absolute text-white bottom-0 p-2 group-hover:scale-110 group-hover:text-black ">from up above vr</h2>
              
            </div>

            <div className="group relative md:w-1/4 overflow-hidden">
              <img src={pocket} alt="" className="hidden w-full md:block duration-200  group-hover:scale-110"/>
              
              <img src={mobilepok} alt="" className="w-full md:hidden group-hover:scale-110 duration-200" />

              <div className="absolute top-0 right-0 bottom-0 left-0 bg-linear-to-b  from transparent to-gray-900 group-hover:from-gray-50 group-hover:to-white group-hover:opacity-70">

              </div>

              <h2 className="absolute text-white bottom-0 p-2 group-hover:scale-110 group-hover:text-black ">borealis</h2>
              
            </div>

            <div className="group relative md:w-1/4 overflow-hidden">
              <img src={grid} alt="" className="hidden w-full md:block duration-200  group-hover:scale-110"/>
              
              <img src={mobilgrid} alt="" className="w-full md:hidden group-hover:scale-110 duration-200" />

              <div className="absolute top-0 right-0 bottom-0 left-0 bg-linear-to-b  from transparent to-gray-900 group-hover:from-gray-50 group-hover:to-white group-hover:opacity-70">

              </div>

              <h2 className="absolute text-white bottom-0 p-2 group-hover:scale-110 group-hover:text-black ">the grid</h2>
              
            </div>
          </div>
          <div className="item-container mt-10">
            <div className="group relative md:w-1/4 overflow-hidden">
              <img src={curiosity} alt="" className="hidden w-full md:block duration-200  group-hover:scale-110"/>
              <img src={mobilcuro} alt="" className="w-full md:hidden group-hover:scale-110 duration-200" />
              <div className="absolute top-0 right-0 bottom-0 left-0 bg-linear-to-b  from transparent to-gray-900 group-hover:from-gray-50 group-hover:to-white group-hover:opacity-70">

              </div>

              <h2 className="absolute text-white bottom-0 p-2 group-hover:scale-110 group-hover:text-black ">curiosity</h2>
              
            </div>

            <div className="group relative md:w-1/4 overflow-hidden">
              <img src={fish} alt="" className="hidden w-full md:block duration-200  group-hover:scale-110"/>
              
              <img src={mobilfish} alt="" className="w-full md:hidden group-hover:scale-110 duration-200" />

              <div className="absolute top-0 right-0 bottom-0 left-0 bg-linear-to-b  from transparent to-gray-900 group-hover:from-gray-50 group-hover:to-white group-hover:opacity-70">

              </div>

              <h2 className="absolute text-white bottom-0 p-2 group-hover:scale-110 group-hover:text-black ">fish eye</h2>
              
            </div>

            <div className="group relative md:w-1/4 overflow-hidden">
              <img src= {fromabove} alt="" className="hidden w-full md:block duration-200  group-hover:scale-110"/>
              
              <img src={mobilfromabove} alt="" className="w-full md:hidden group-hover:scale-110 duration-200" />

              <div className="absolute top-0 right-0 bottom-0 left-0 bg-linear-to-b  from transparent to-gray-900 group-hover:from-gray-50 group-hover:to-white group-hover:opacity-70">

              </div>

              <h2 className="absolute text-white bottom-0 p-2 group-hover:scale-110 group-hover:text-black ">from up above vr</h2>
              
            </div>

            <div className="group relative md:w-1/4 overflow-hidden">
              <img src= {borialis} alt="" className="hidden w-full md:block duration-200  group-hover:scale-110"/>
              
              <img src={mobilborialis} alt="" className="w-full md:hidden group-hover:scale-110 duration-200" />

              <div className="absolute top-0 right-0 bottom-0 left-0 bg-linear-to-b  from transparent to-gray-900 group-hover:from-gray-50 group-hover:to-white group-hover:opacity-70">

              </div>

              <h2 className="absolute text-white bottom-0 p-2 group-hover:scale-110 group-hover:text-black ">borealis</h2>
              
            </div>

            <div className="group relative md:w-1/4 overflow-hidden">
              <img src={soc} alt="" className="hidden w-full md:block duration-200  group-hover:scale-110"/>
              
              <img src={mobilsoc} alt="" className="w-full md:hidden group-hover:scale-110 duration-200" />

              <div className="absolute top-0 right-0 bottom-0 left-0 bg-linear-to-b  from transparent to-gray-900 group-hover:from-gray-50 group-hover:to-white group-hover:opacity-70">

              </div>

              <h2 className="absolute text-white bottom-0 p-2 group-hover:scale-110 group-hover:text-black ">the grid</h2>
              
            </div>
          </div> 
          <div className="flex items-center justify-center mt-7 md:hidden"> 
            <button className="text-2xl w-full border py-2 uppercase flex items-center justify-center hover:bg-black hover:text-white font-alata tracking-wider cursor-pointer">
              see all
            </button>
          </div>
      </div>
    </section>

    <footer className="bg-black p-2">
      <div className="w-full flex flex-col md:flex-row md:justify-between">
      <div className="flex flex-col">{/**1st cont */}
          <div className="flex justify-center md:justify-start">
            <img src={logo} alt=""  />
          </div>

          <div className="text-gray-200 font-alata text-lg flex flex-col my-4 gap-5 items-center md:flex-row">
            <a href="#">About</a>
            <a href="#">Careers</a>
            <a href="#">Events</a>
            <a href="#">Products</a>
            <a href="#">Support</a>
          </div>
      </div>

      <div className="">
        <div className="flex justify-center items-center gap-4  md:justify-start">
          <img src={twi} alt="" />
          <img src={insta} alt="" />
          <img src={face} alt="" />
          <img src={pin} alt="" />
          
        </div>
        <div className="font-bold text-gray-400 flex justify-center my-6 md:justify-start">
            &copy; 2026 Loopstudios. All Rights Reserved
        </div>
      </div>

      </div>
    </footer>
    </div>
  )
}

export default App
