/* eslint-disable no-unused-vars */
import web from '../../assets/metrix1.png'
import { Link } from 'react-router-dom';
import Button from '../../components/Button'

const Hero = () => {
    return ( 
        <div className="relative grid gap-6 pb-[4rem]">
            <img className="absolute right-0 w-auto h-full" src={web}/>
            <div className="lg:pt-[15rem] pt-[6rem]">
                <h1 className="grid w-11/12 ml-auto mr-auto leading-none text-center lg:w-9/12 font-secondary">
                    <span className="text-xl font-semibold text-gray-600">Welcome To</span>
                    <span className="lg:text-[60px] text-[42px]  font-bold text-blue-900">Zion Assembly Church Of God</span>
                </h1>
            </div>

            <div>
                <p className="w-10/12 ml-auto mr-auto text-base text-center text-gray-600 font-other lg:w-7/12 lg:text-lg">We are a Spirit-filled body of believers who have covenanted themselves together with God to accept and obey the teachings of Christ and His apostles.</p>
            </div>
            <Link to="/about" className="w-auto mx-auto z-[1000]">
                <Button className="px-10 py-3 text-white " text="Learn More"/>
                {/* <button className="block mx-auto text-lg font-semibold text-white bg-blue-900 rounded-xl">Learn more</button> */}
            </Link>



        </div>
     );
}
 
export default Hero;