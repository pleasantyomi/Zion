/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import {Link} from 'react-router-dom'

const Testimony = () => {
    return ( 
        <div>
            <div className="w-11/12 mx-auto h-fit laptop:py-20 py-14 laptop:px-14 px-5 bg-VeryPaleBlue rounded-xl my-14 shadow-md">
                <div className="laptop:flex grid items-center">
                    <div className="laptop:w-8/12 laptop:mr-20">
                        <h1 className="font-secondary text-blue-900 font-semibold laptop:text-[3rem] text-[2rem] leading-none">Testimony</h1>
                        <p className="pt-3 text-md font-semibold text-gray-600">To share the testimonies of what God has done for you during any of our programs, kindly click here so it can be added to the online testimonies during the next Powernight Service.</p>
                    </div>

                    <Link to ="/testimony">
                        <button className="block bg-blue-900 text-white font-semibold text-md py-3 px-14 rounded-xl shadow-sm laptop:mx-0 mx-auto mt-5 laptop:mt-0">Click here</button>
                    </Link>
                </div>

            </div>
        </div>
     );
}
 
export default Testimony;