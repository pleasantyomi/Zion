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
            <div className="flex justify-between items-center font-primary">
                <Link to ="/">
                    <img className="w-auto lg:h-16 h-10 flex-shrink-0 flex-nowrap" src={logo}/>
                </Link>

                <div className="hidden lg:flex items-center gap-6 font-semibold text-sm text-gray-600">
                    <Link to="/">HOME</Link>
                    <div className="">
                        <a onMouseOver={()=> openDropdown(prev => !prev)}  className="cursor-pointer" >WHO WE ARE</a>
                        <div className={dropdown? "showdropdown" : "HideHamburger"}>
                            <div className="absolute grid gap-3  mt-3 bg-white shadow-sm shadow-gray-600 rounded-lg py-5 px-3">
                               <Link to ="/about" onClick={()=> openDropdown(prev => !prev)}>About us</Link>
                               <Link to ="https://zionassemblychurchofgod.com/abstract-of-faith/" onClick={()=> openDropdown(prev => !prev)}>Abstract of faith</Link>
                               <Link to ="/leaders" onClick={()=> openDropdown(prev => !prev)}>Staffs</Link>
                            </div> 
                        </div>
                    </div>
                    
                    <Link to ="/">WHAT WE DO</Link>
                    <Link to="/blog">BLOG</Link>
                    <Link to="/event">EVENTS</Link>
                    <Link to="/contact">CONTACT US</Link>
                </div>

                <div>
                    <button onClick={online} className="hidden lg:block bg-blue-900 text-white transition-all font-semibold px-4 py-2 rounded-xl hover:bg-transparent hover:border-[1px] hover:border-blue-900  hover:text-blue-900">ONLINE GIVING</button>
                </div>

                <div className="lg:hidden block">
                    <Hamburger/> 
                </div>
            </div>
        </div>
     );
}
 
export default Header;