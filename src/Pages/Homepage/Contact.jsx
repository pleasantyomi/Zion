/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */

const Contact = () => {
    return ( 
        <div>
            <div className="w-11/12 mx-auto h-fit laptop:py-20 py-14 laptop:px-14 px-5 bg-VeryPaleBlue rounded-xl my-14 shadow-md">
                <div className="laptop:flex grid items-center">
                    <div className="laptop:w-8/12 laptop:mr-20">
                        <h1 className="text-blue-900 font-semibold laptop:text-[3rem] text-[2rem] leading-none">You Can Talk to Someone no matter what the challenge is.</h1>
                        <p className="pt-3 text-md font-semibold text-gray-600">There are competent & Spirit filled Counsellors, Pastors & Ministers willing to speak with you at any time. Don't keep it all in, speak to someone now.</p>
                    </div>

                    <div>
                        <button className="block bg-blue-900 text-white font-semibold text-md py-3 px-14 rounded-xl shadow-sm laptop:mx-0 mx-auto mt-5 laptop:mt-0">Contact us</button>
                    </div>
                </div>

            </div>
        </div>
     );
}
 
export default Contact;