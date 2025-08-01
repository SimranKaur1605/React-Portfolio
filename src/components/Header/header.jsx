import React from 'react'
import {Link,NavLink} from 'react-router-dom'

export default function Header(){
    return(
          <header className="shadow sticky z-50 top-0">
            <nav className="bg-[#090008] border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center text-white">
                      Simran kaur
                    </Link>
                    <div className="flex items-center lg:order-2">
                        
                      <Link
  to="#"
  className="btn-glow relative inline-block bg-white text-black hover:bg-black hover:text-white font-medium rounded-lg text-sm px-4 lg:px-2 py-2 lg:py-2.5 mr-2 transition-all duration-300"
>
  Get in Touch
</Link>

                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                               <NavLink
  to="/"
  className={({ isActive }) =>
    `nav-underline relative block py-2 pr-4 pl-3 duration-200 transition-all
    ${isActive ? "text-white" : "text-white"} 
    hover:text-white lg:border-0 lg:p-0`
  }
>
  Home
</NavLink>
                            </li>
                            <span className='text-white '>|</span>
                            <li>
           <NavLink
  to="/about"
  className={({ isActive }) =>
    `nav-underline relative block py-2 pr-4 pl-3 duration-200 transition-all
    ${isActive ? "text-white" : "text-white"} 
    hover:text-white lg:border-0 lg:p-0`
  }
>
  About
</NavLink>



                            </li>
                            <span className='text-white '>|</span>
                            <li>
                                  <NavLink
  to="/projects"
  className={({ isActive }) =>
    `nav-underline relative block py-2 pr-4 pl-3 duration-200 transition-all
    ${isActive ? "text-white" : "text-white"} 
    hover:text-white lg:border-0 lg:p-0`
  }
>
  Projects
</NavLink>
                            </li>
                             <span className='text-white '>|</span>
                            <li>
                                 <NavLink
  to="/contact"
  className={({ isActive }) =>
    `nav-underline relative block py-2 pr-4 pl-3 duration-200 transition-all
    ${isActive ? "text-white" : "text-white"} 
    hover:text-white lg:border-0 lg:p-0`
  }
>
  Contact
</NavLink>
                            </li>


                            
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
    

