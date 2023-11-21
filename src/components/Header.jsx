import logo from '../assets/logonew.jpg'
import Hamburger from './Hamburger'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import './Hamburger.css'

const Header = () => {
    const [dropdown, openDropdown] = useState(false)

    const online = () =>{
        alert("Coming soon!")
    }

    return ( 
        <div className="bg-white fixed w-[100%] z-10 py-[1rem] lg:px-12 px-5">
            <div className="flex items-center justify-between font-primary">
                <Link to ="/">
                    <img className="flex-shrink-0 w-auto h-10 lg:h-16 flex-nowrap" src={logo}/>
                </Link>

                <div className="items-center hidden gap-6 text-sm font-semibold text-gray-600 lg:flex">
                    <Link to="/">HOME</Link>
                    <div className="">
                        <span onClick={()=> openDropdown(prev => !prev)}  className="flex items-center gap-1 cursor-pointer" >
                            <span>WHO WE ARE</span>
                            {/* <span className="">
                               <ChevronDown className={`${dropdown ? 'rotate-180' : 'rotate-0'} transition-all ease-out`}/>
                            </span> */}
                        </span>
                        <div className={dropdown? "showdropdown" : "HideHamburger"}>
                            <div className="absolute grid gap-3 px-3 py-5 mt-3 bg-white rounded-lg shadow-sm shadow-gray-600">
                               <Link to ="/about" onClick={()=> openDropdown(prev => !prev)}>About us</Link>
                               <Link to ="https://zionassemblychurchofgod.com/abstract-of-faith/" onClick={()=> openDropdown(prev => !prev)}>Abstract of faith</Link>
                               <Link to ="/leaders" onClick={()=> openDropdown(prev => !prev)}>Staffs</Link>
                            </div> 
                        </div>
                    </div>
                    
                    <Link to ="/">WHAT WE DO</Link>
                    <Link to="/blog">BLOG</Link>
                    <Link to="/events">EVENTS</Link>
                    <Link to="/contact">CONTACT US</Link>
                </div>

                <div>
                    <button onClick={online}  className="relative hidden px-4 py-2 overflow-hidden font-semibold text-white transition-all duration-500 ease-out bg-blue-900 lg:block rounded-xl group hover:bg-gradient-to-r hover:from-blue-900 hover:to-blue-800 hover:ring-2 hover:ring-offset-2 hover:ring-blue-800">
                         <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                         <span className="relative">ONLINE GIVING</span>
                    </button>
                    {/* <button  className="hidden lg:block bg-blue-900 text-white transition-all font-semibold px-4 py-2 rounded-xl hover:bg-transparent hover:border-[1px] hover:border-blue-900  hover:text-blue-900">ONLINE GIVING</button> */}
                </div>

                <div className="block lg:hidden">
                    <Hamburger/> 
                </div>
            </div>
        </div>
     );
}
 
export default Header;