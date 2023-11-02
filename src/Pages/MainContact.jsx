/* eslint-disable react/no-unknown-property */
import logo from '../assets/whitelogo.png'



const MainContact = () =>{
    return(
        <div className="pt-[5.5rem] lg:pt-[7rem] lg:pb-10">
            <div className="laptop:w-10/12 h-[90vh] w-full mx-auto bg-white laptop:shadow-sm laptop:shadow-gray-400 rounded-xl">
                <div className="flex">
                    <div className="flex-shrink-0 flex-nowrap relative hidden lg:block bg-contact bg-black bg-opacity-80 bg-blend-darken w-4/12 h-[90vh] bg-cover bg-right rounded-l-xl">
                        <div className="absolute bottom-0 left-[1rem] flex justify-center items-center gap-1 pb-5">
                            <img className="w-auto h-12" src={logo}/>
                            <p className="grid leading-tight font-semibold text-white">
                              <span>ZION ASSEMBLY</span>
                              <span>CHURCH OF GOD, NIGERIA</span>
                            </p>
                        </div>
                    </div>

                    <div className="px-10 py-5 w-full">
                        <h1 className="font-secandary grid text-gray-600 text-xl leading-tight">
                            <span className="text-black">GET IN <span className="font-semibold">TOUCH</span></span>
                            <span className="text-base">24/7 We will answer your questions and problems.</span>   
                        </h1>

                        <form id="emailForm" className="mt-5 w-full">
                           <div className="flex justify-between gap-4">
                               <div className="flex items-center outline outline-[1px] outline-gray-400 w-full p-2 rounded-md hover:ring focus:ring-green-200 transition ease-in-out duration-400">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                        </svg>
                                    </div>
    
                                    <div className="w-full relative">
                                       <input type="text" placeholder="First name" className="outline-none border-0 pl-1 py-2 w-full" id="firstName"/>
                                    </div>
                                </div>

                                <div className="flex items-center outline outline-[1px] outline-gray-400 w-full p-2  rounded-md hover:ring focus:ring-green-200 transition ease-in-out duration-400">
                                     <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                        </svg>
                                    </div>
    
                                    <div className="w-full relative">
                                       <input type="text" placeholder="Last name" className="outline-none border-0 pl-1 py-2 w-full" id="lastName"/>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center outline outline-[1px] outline-gray-400 w-full p-2 mt-5 rounded-md hover:ring focus:ring-green-200 transition ease-in-out duration-400">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                       <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z" />
                                    </svg>
                                </div>

                                <div className="w-full relative rounded-md">
                                   <input type="email" placeholder="Email" name="email" required className="outline-none border-0 py-2 font-lg w-full pl-2  bg-transparent" id="email"/>
                                </div>
                            </div>
                    
                            <div className="flex items-center outline outline-[1px] outline-gray-400 w-full p-2 mt-5 rounded-md hover:ring focus:ring-green-200 transition ease-in-out duration-400">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                                    </svg>
                                </div>

                                <div className="w-full relative">
                                   <input type="tel" placeholder="Phone" name="contact" required className="outline-none border-0 py-2 font-lg min-w-full pl-2 bg-transparent" id="phone"/>
                                </div>
                            </div>

                            <div className="mt-5  ">
                               <textarea  type="text" placeholder="Message" name="message" className=" pt-2 align w-full h-40 outline outline-[1px] outline-gray-500 px-2  rounded-md hover:ring focus:ring-green-200 transition ease-in-out duration-400" id="message"></textarea>
                            </div>

                            <button type="button" id="submitBtn" className="block bg-blue-900 w-full py-3 text-white text-center text-lg font-semibold mt-5 rounded-md">Send Message</button>
                        </form>
                    </div>


                </div>
            </div>
        </div>
    )   
}
export default MainContact;