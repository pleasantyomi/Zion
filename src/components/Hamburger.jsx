import {useState} from "react";
import './Hamburger.css'
import { Link } from "react-router-dom";

const Hamburger = () => {
    const [open, isOpen] = useState(false)
    const online = () =>{
        alert("Coming soon!")
        isOpen(false)
    }
    const genericHamburgerLine = `h-[2px] w-8 my-1 rounded-full bg-black transition ease transform duration-300`;

    return ( 
        <div className="">
            <button className="flex flex-col h-12 w-12  justify-center items-center group" onClick={() => isOpen(!open)}>
      <div
        className={`${genericHamburgerLine} ${
          open
            ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
            : "opacity-50 group-hover:opacity-100"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          open ? "opacity-0" : "opacity-50 group-hover:opacity-100"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          open
            ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
            : "opacity-50 group-hover:opacity-100"
        }`}
      />
    </button>

                {/* <div className="grid gap-2" onClick={() => isOpen(prev => !prev)}>
                    <div  className="bg-black w-8 h-[2px]"></div>
                    <div  className="bg-black w-8 h-[2px]"></div>
                    <div  className="bg-black w-8 h-[2px]"></div>
                </div> */}

                <div className={open? "ShowHamburger" : "HideHamburger"}>
                    <div className="bg-white grid gap-4 text-center font-semibold text-gray-600">
                       <Link to="/" onClick={()=>isOpen(false)}>HOME</Link>
                       <Link to ="/about" onClick={()=>isOpen(false)}>WHO WE ARE</Link>
                       <a onClick={()=>isOpen(false)}>WHAT WE DO</a>
                       <Link to="/blog" onClick={()=>isOpen(false)}>BLOG</Link>
                       <Link to ="/event" onClick={()=>isOpen(false)}>EVENTS</Link>
                       <Link to ="/contact" onClick={()=>isOpen(false)}>CONTACT US</Link>
                       <button onClick={online} className="block bg-blue-900 text-white transition-all font-semibold w-7/12 py-2 rounded-xl hover:bg-transparent hover:border-[1px] hover:border-blue-900  hover:text-blue-900 ml-auto mr-auto">ONLINE GIVING</button>
                    </div>
                </div>
        </div>
     );
}
 
export default Hamburger;