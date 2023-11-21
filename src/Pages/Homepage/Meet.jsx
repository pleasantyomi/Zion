import image from '../../assets/3d-rendering-zoom-call-avatar.jpg'
import { Link } from 'react-router-dom'

const Meet = () => {
    return ( 
        <div>
            <div className="w-11/12 mx-auto lg:w-10/12">
                <div className="grid grid-cols-3 gap-2 mb-10 lg:gap-4 h-fit">
                    <div>
                        <img className="object-cover w-full h-full rounded-xl" src={image}/>
                    </div>

                    <div className="grid grid-rows-2 gap-2 lg:gap-4">
                        <img className="rounded-xl" src={image}/>
                        <img className="rounded-xl" src={image}/>
                    </div>

                    <div className="grid grid-rows-2 gap-2 lg:gap-4">
                        <img className="object-cover w-full h-full row-span-3 rounded-xl lg:row-span-2" src={image}/>
                        <Link to ="/leaders">
                           <button className="relative inline-flex items-center justify-center  w-full overflow-hidden text-blue-900 transition duration-700 ease-out border-2 border-blue-900 shadow-md rounded-xl group font-semibold lg:text-xl text-[10px] lg:h-[5rem] h-[3rem] row-span-">
                               <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-700 -translate-x-full bg-blue-900 group-hover:translate-x-0 ease">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                               </span>
                               <span className="absolute flex items-center justify-center w-full h-full text-blue-900 transition-all duration-300 transform group-hover:translate-x-full ease">Meet the Leaders</span>
                               <span className="relative invisible">Meet the Leaders</span>
                            </button>
                            {/* <button className="w-full bg-blue-900 rounded-xl text-white font-semibold lg:text-xl text-[10px] lg:h-[5rem] h-[3rem] row-span-1">Meet the Leaders</button> */}
                        </Link>
                    </div>

                </div>
            </div>
        </div>
     );
}
export default Meet;    