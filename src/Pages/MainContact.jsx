/* eslint-disable react/no-unknown-property */
import logo from '../assets/whitelogo.png'
import { useRef } from "react"
import emailjs from '@emailjs/browser'; 


// const options = {method: 'GET'};
//     fetch('https://emailvalidation.abstractapi.com/v1', options)
//       .then(response => response.json())
//       .then(response => console.log(response))
//       .catch(err => console.error(err));


// function httpGetAsync(url, callback) {
//     const xmlHttp = new XMLHttpRequest();
//     xmlHttp.onreadystatechange = function() {
//         if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
//         callback(xmlHttp.responseText);
//     }
//     xmlHttp.open("GET", url, true); // true for asynchronous
//     xmlHttp.send(null);
// }

// const url = "https://emailvalidation.abstractapi.com/v1/?api_key=154df721011e45b5911ba6d2807a3277&email=pleasantyomi@gmail.com"

// httpGetAsync(url)

const MainContact = () =>{
    
const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_in1wpfo', 'template_grf4n3x', form.current, 'PeRkfj8XfMon1azpQ')
    .then((result) => {
        alert(result.text);
    }, (error) => {
        alert(error.text);
    });
};
  

    return(
        <div className="pt-[5.5rem] lg:pt-[7rem] lg:pb-10">
            <div className="laptop:w-10/12 h-[90vh] w-full mx-auto bg-white laptop:shadow-sm laptop:shadow-gray-400 rounded-xl">
                <div className="flex">
                    <div className="flex-shrink-0 flex-nowrap relative hidden lg:block bg-contact bg-black bg-opacity-80 bg-blend-darken w-4/12 h-[90vh] bg-cover bg-right rounded-l-xl">
                        <div className="absolute bottom-0 left-[1rem] flex justify-center items-center gap-1 pb-5">
                            <img className="w-auto h-12" src={logo}/>
                            <p className="grid font-semibold leading-tight text-white">
                              <span>ZION ASSEMBLY</span>
                              <span>CHURCH OF GOD, NIGERIA</span>
                            </p>
                        </div>
                    </div>

                    <div className="w-full px-10 py-5">
                        <h1 className="grid text-xl leading-tight text-gray-600 font-secandary">
                            <span className="text-black">GET IN <span className="font-semibold">TOUCH</span></span>
                            <span className="text-base">24/7 We will answer your questions and problems.</span>   
                        </h1>
 
                        <form ref={form} onSubmit={sendEmail}  className="w-full mt-5">
                           <div className="flex justify-between gap-4">
                               <div className="flex items-center outline outline-[1px] outline-gray-400 w-full p-2 rounded-md hover:ring focus:ring-green-200 transition ease-in-out duration-400">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                        </svg>
                                    </div>
    
                                    <div className="relative w-full">
                                       <input type="text" placeholder="First name"name="user_name" required  className="w-full py-2 pl-1 border-0 outline-none"/>
                                    </div>
                                </div>

                                <div className="flex items-center outline outline-[1px] outline-gray-400 w-full p-2  rounded-md hover:ring focus:ring-green-200 transition ease-in-out duration-400">
                                     <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                        </svg>
                                    </div>
    
                                    <div className="relative w-full">
                                       <input type="text" placeholder="Last name" name="user_name" required className="w-full py-2 pl-1 border-0 outline-none"/>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center outline outline-[1px] outline-gray-400 w-full p-2 mt-5 rounded-md hover:ring focus:ring-green-200 transition ease-in-out duration-400">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                       <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z" />
                                    </svg>
                                </div>

                                <div className="relative w-full rounded-md">
                                   <input type="email" placeholder="Email" name="user_email" required className="w-full py-2 pl-2 bg-transparent border-0 outline-none font-lg" id="email"/>
                                </div>
                            </div>
                    
                            <div className="flex items-center outline outline-[1px] outline-gray-400 w-full p-2 mt-5 rounded-md hover:ring focus:ring-green-200 transition ease-in-out duration-400">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                                    </svg>
                                </div>

                                <div className="relative w-full">
                                   <input type="tel" placeholder="Phone" name="contact" required className="min-w-full py-2 pl-2 bg-transparent border-0 outline-none font-lg" id="phone"/>
                                </div>
                            </div>

                            <div className="mt-5 ">
                               <textarea  type="text" placeholder="Message" name="message" className=" pt-2 align w-full h-40 outline outline-[1px] outline-gray-500 px-2  rounded-md hover:ring focus:ring-green-200 transition ease-in-out duration-400" id="message"></textarea>
                            </div>

                            <input type="submit" value="send Message" id="submitBtn" className="block w-full py-3 mt-5 text-lg font-semibold text-center text-white bg-blue-900 rounded-md"/>      
                       </form>
                    </div>


                </div>
            </div>
        </div>
    )   
}
export default MainContact;