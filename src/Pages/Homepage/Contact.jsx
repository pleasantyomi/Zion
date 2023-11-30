/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import Button from "../../components/Button";

const Contact = () => {
    return ( 
        <div>
            <div className="w-11/12 px-5 mx-auto shadow-md h-fit laptop:py-20 py-14 laptop:px-14 bg-VeryPaleBlue rounded-xl my-14">
                <div className="grid items-center laptop:flex">
                    <div className="laptop:w-8/12 laptop:mr-20">
                        <h1 className="font-secondary text-blue-900 font-semibold laptop:text-[3rem] text-[2rem] leading-none">You Can Talk to Someone no matter what the challenge is.</h1>
                        <p className="pt-3 font-semibold text-gray-600 text-md">There are competent & Spirit filled Counsellors, Pastors & Ministers willing to speak with you at any time. Don't keep it all in, speak to someone now.</p>
                    </div>

                    <Link to ="/contact">
                        <Button text="Contact us" className="block py-3 mx-auto mt-5 font-semibold text-white text-md px-14 hadow-sm laptop:mx-0 laptop:mt-0 "/>
                        {/* <button className="bg-blue-900 rounded-xl s">Contact us</button> */}
                    </Link>
                </div>

            </div>
        </div>
     );
}
 
export default Contact;