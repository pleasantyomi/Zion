import logo from '../assets/logonew.jpg'
import Hamburger from './Hamburger'

const Header = () => {
    const online = () =>{
        alert("Coming soon!")
    }
    return ( 
        <div className="bg-white fixed w-[100%] z-10 py-[1rem] lg:px-12 px-5">
            <div className="flex justify-between items-center font-primary">
                <div>
                    <img className="w-auto lg:h-16 h-10 flex-shrink-0 flex-nowrap" src={logo}/>
                </div>

                <div className="hidden lg:flex items-center gap-6 font-semibold text-sm text-gray-600">
                    <a>HOME</a>
                    <a>WHO WE ARE</a>
                    <a>WHAT WE DO</a>
                    <a>BLOG</a>
                    <a>EVENTS</a>
                    <a>CONTACT US</a>
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