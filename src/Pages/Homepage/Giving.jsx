/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import Button from '../../components/Button.jsx'

const Giving = () => {
    const online = () =>{
        alert("Coming soon!")
    }
    return ( 
        <div>
            <div className="w-11/12 mx-auto h-fit laptop:py-20 py-14 laptop:px-14 px-5 bg-VeryPaleBlue rounded-xl my-14 shadow-md">
                <div className="laptop:flex grid items-center">
                    <div className="laptop:w-8/12 laptop:mr-20">
                        <h1 className="font-secondary text-blue-900 font-semibold laptop:text-[3rem] text-[2rem] leading-none">Online Giving</h1>
                        <p className="pt-3 text-md font-semibold text-gray-600">All forms of giving be it Giving to the needy, Tithe & Offering can be made via a click if the button below.</p>
                    </div>

                    <div>
                        <Button text="Pay Now" className="block text-white font-semibold text-md py-3 px-14 shadow-sm laptop:mx-0 mx-auto mt-5 laptop:mt-0" onclick={online}/>
                        {/*  <button onClick={online} className="bg-blue-900 rounded-xl ">Pay Now</button> */}
                    </div>
                </div>

            </div>
        </div>
     );
}
 
export default Giving;