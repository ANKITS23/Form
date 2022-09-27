import { NavLink } from "react-router-dom";
import { useState } from "react";
import SignIn from "./Sign";


export default function NavBar() {
  const [hidden, setHidden] = useState(true); 
  return (
    <div className="main-container">
      <div className="wrapper ">
        <div className=" navbar-container  ">
          <nav className="w-full bg-black py-4">
            <div className="flex w-full justify-between items-center gap-5  md:px-8 ">
              <div className="w-[100px] ">
                <a>
                  <img src="./images/logo.png" className="w-full  block"  />
                </a>
              </div>



              <div className="lg:flex flex-1 justify-self-center  mt-8 md:block md:pb-0 md:mt-0 ">
                <ul className="items-center my-0 mx-auto justify-center md:flex flex-col md:flex-row gap-7">
                  <li className="text-white hover:text-indigo-200">
                    <NavLink className="navbar-item" to="/">
                      Home
                    </NavLink>
                  </li>

                  <li className="text-white hover:text-indigo-200">
                    <NavLink className="navbar-item" to="/about">
                      About
                    </NavLink>
                  </li>

                  <li className="text-white hover:text-indigo-200">
                    <NavLink className="navbar-item" to="/contact">
                      Contact Us
                    </NavLink>
                  </li>
                  <li className="text-white hover:text-indigo-200">
                    <NavLink className="navbar-item" to="/help">
                      Help Us
                    </NavLink>
                  </li>
                </ul>
              </div>
             
              <button onClick={() => { setHidden(false) }} className="text-white hover:text-indigo-200">
                Sign In</button>


                {!hidden &&

              <SignIn/>
                }
        


            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
