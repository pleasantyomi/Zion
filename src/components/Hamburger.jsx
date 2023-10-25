import {useState} from "react";
import './Hamburger.css'

const Hamburger = () => {
    const [open, isOpen] = useState(false)

    return ( 
        <div className="">
                <div className="grid gap-2" onClick={() => isOpen(prev => !prev)}>
                    <div  className="bg-black w-8 h-[2px]"></div>
                    <div  className="bg-black w-8 h-[2px]"></div>
                    <div  className="bg-black w-8 h-[2px]"></div>
                </div>

                <div className={open? "ShowHamburger" : "HideHamburger"}>
                    <div className="bg-white grid gap-4 text-center font-semibold text-gray-600">
                       <a>HOME</a>
                       <a>WHO WE ARE</a>
                       <a>WHAT WE DO</a>
                       <a>BLOG</a>
                       <a>EVENTS</a>
                       <a>CONTACT US</a>
                       <button className="block bg-blue-900 text-white transition-all font-semibold w-7/12 py-2 rounded-xl hover:bg-transparent hover:border-[1px] hover:border-blue-900  hover:text-blue-900 ml-auto mr-auto">ONLINE GIVING</button>
                    </div>
                </div>
        </div>
     );
}
 
export default Hamburger;