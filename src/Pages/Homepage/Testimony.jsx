/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import {Link} from 'react-router-dom'
import Button from '../../components/Button'


const Testimony = () => {
    return ( 
        <div>
            <div className="w-11/12 px-5 mx-auto shadow-md h-fit laptop:py-20 py-14 laptop:px-14 bg-VeryPaleBlue rounded-xl my-14">
                <div className="grid items-center laptop:flex">
                    <div className="laptop:w-8/12 laptop:mr-20">
                        <h1 className="font-secondary text-blue-900 font-semibold laptop:text-[3rem] text-[2rem] leading-none">Testimony</h1>
                        <p className="pt-3 font-semibold text-gray-600 text-md">To share the testimonies of what God has done for you during any of our programs, kindly click here so it can be added to the online testimonies during the next Powernight Service.</p>
                    </div>

                    <Link to ="/testimony">
                        <Button text="Click here" className="block py-3 mx-auto mt-5 font-semibold text-white text-md px-14 shadow-sm laptop:mx-0 laptop:mt-0"/>
                        {/* <button className=" bg-blue-900  rounded-xl ">Click here</button> */}
                    </Link>
                </div>

            </div>
        </div>
     );
}
 
export default Testimony;