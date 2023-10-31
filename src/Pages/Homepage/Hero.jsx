/* eslint-disable no-unused-vars */
import web from '../../assets/metrix1.png'

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

            <div>
                <button className="block ml-auto mr-auto text-white text-lg font-semibold py-3 px-10 rounded-xl bg-blue-900">Learn more</button>
            </div>

        </div>
     );
}
 
export default Hero;