/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import logo from '../assets/newlogo.png'
import top from '../assets/bg-section-top-desktop-1.svg'
import mobiletop from '../assets/bg-section-top-mobile-1.svg'
import { Link } from 'react-router-dom'
import { Facebook } from 'lucide-react'
import { Instagram } from 'lucide-react'
import { Twitter } from 'lucide-react'
import { Youtube } from 'lucide-react'
import { useState } from 'react'

const Footer = () => {
    const [icons, setICons] = useState([
        {
            title: <Facebook/>,
            link :'https://web.facebook.com/groups/zionassemblychurchofgodnigeria',
            id :1,
        },
        {
            title: <Instagram/>,
            link :'https://www.instagram.com/zacog_nigeria/',
            id :2,
        },        {
            title: <Twitter/>,
            link :'/',
            id :3,
        },        {
            title: <Youtube/>,
            link :'https://www.youtube.com/@YomiAdekunle',
            id :4,
        },
    ])
    return ( 
        <div>
            <img className="hidden w-full lg:block" src={top}/>
            <img className="block w-full lg:hidden" src={mobiletop}/>
            <div className="bg-VeryPaleBlue py-[2rem]">
                <Link to="/" className="flex items-center justify-center gap-1 pb-5">
                    <img className="w-auto h-12" src={logo}/>
                    <p className="grid font-semibold leading-tight text-blue-900 font-tetiary">
                        <span>ZION ASSEMBLY</span>
                        <span>CHURCH OF GOD, NIGERIA</span>
                    </p>
                </Link>
                <div>
                  <p className="w-11/12 ml-auto mr-auto font-semibold text-center text-gray-600">&copy; Copyright ZACOG 2023. All Right Reserved. Designed and Developed by ZACOG IT DEPARTMENT.</p>
                </div>

                <div className="grid items-center w-6/12 grid-cols-4 mx-auto my-2 laptop:w-2/12 ">
                    {icons.map((icon)=>(
                        <div key={icon.id}>
                            <Link className="text-gray-600" to={icon.link}>
                                {icon.title}
                            </Link>

                        </div>
                    ))}
                </div>
            </div>
            
        </div>
     );
}
 
export default Footer;