/* eslint-disable no-unused-vars */
import web from '../../assets/metrix1.png'
import { Link } from 'react-router-dom'

const Hero = () => {
    return ( 
        <div className="relative grid gap-6 pb-[4rem]">
            <img className="absolute right-0 h-full w-auto" src={web}/>
            <div className="lg:pt-[15rem] pt-[6rem]">
                <h1 className="grid text-center leading-none lg:w-9/12 w-11/12 ml-auto mr-auto font-secondary">
                    <span className="font-semibold text-gray-600 text-xl">Welcome To</span>
                    <span className="lg:text-[60px] text-[42px]  font-bold text-blue-900">Zion Assembly Church Of God</span>
                </h1>
            </div>

            <div>
                <p className="font-other text-center text-gray-600 lg:w-7/12 w-10/12 ml-auto mr-auto text-base lg:text-lg">We are a Spirit-filled body of believers who have covenanted themselves together with God to accept and obey the teachings of Christ and His apostles.</p>
            </div>

            <Link to = "/about" className="relative pb-[5rem]">
               <button className="absolute left-[50%] -translate-x-1/2 text-white text-lg font-semibold py-3 w-3/12 lg:w-2/12 rounded-xl bg-blue-900">Learn more</button>
            </Link>



        </div>
     );
}
 
export default Hero;