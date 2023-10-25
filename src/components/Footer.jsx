import logo from '../assets/newlogo.png'
import top from '../assets/bg-section-top-desktop-1.svg'
import mobiletop from '../assets/bg-section-top-mobile-1.svg'

const Footer = () => {
    return ( 
        <div>
            <img className="hidden lg:block w-full" src={top}/>
            <img className="lg:hidden block w-full" src={mobiletop}/>
            <div className="bg-VeryPaleBlue py-[2rem]">
                <div className="flex justify-center items-center gap-1 pb-5">
                    <img className="w-auto h-12" src={logo}/>
                    <p className="grid leading-tight font-semibold text-blue-900">
                        <span>ZION ASSEMBLY</span>
                        <span>CHURCH OF GOD, NIGERIA</span>
                    </p>
                </div>
                <div>
                  <p className="text-center font-semibold text-gray-600 w-11/12 ml-auto mr-auto">&copy; Copyright ZACOG 2023. All Right Reserved. Designed and Developed by ZACOG IT DEPARTMENT.</p>
                </div>
            </div>
            
        </div>
     );
}
 
export default Footer;