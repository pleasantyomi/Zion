/* eslint-disable react/no-unknown-property */

const Branch = () => {
    return ( 
      <div className="bg-VeryPaleBlue w-full py-20 mt-20 mb-10">
        <div className="grid gap-4">
            <div className="relative bg-blue-900 w-14 h-14 rounded-full mx-auto">
                <svg className=" w-8 h-8 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
            </div>
            <p className="text-center text-gray-600 lg:text-2xl text-xl font-semibold lg:w-6/12 w-10/12 ml-auto mr-auto">“Pray! And listen to God! You can do this alone, but find somebody to do it with you”</p>
            <button className="text-white bg-blue-900 font-semibold lg:text-lg py-2 px-8 block ml-auto mr-auto rounded-xl">Find a branch near you</button>
        </div>

      </div>
     );
}
 
export default Branch;