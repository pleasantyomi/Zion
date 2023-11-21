/* eslint-disable react/no-unknown-property */
import { Link } from 'react-router-dom'
import { Heart } from 'lucide-react'

const Branch = () => {
    return ( 
      <div className="w-full py-20 mt-20 mb-10 bg-VeryPaleBlue">
        <div className="grid gap-4">
            <div className="relative flex w-20 h-20 mx-auto bg-blue-900 rounded-full">
                <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-sky-600"></span>
                <Heart className="absolute top-[50%] left-[50%] text-white -translate-x-1/2 -translate-y-1/2 w-[2rem] h-auto"/>
            </div>
            <p className="w-10/12 ml-auto mr-auto text-xl font-semibold text-center text-gray-600 lg:text-2xl lg:w-6/12">“Pray! And listen to God! You can do this alone, but find somebody to do it with you”</p>
            <Link to ="https://www.google.com/maps/place/Zion+Assembly+Church+Of+God,+(ZACOG)/@7.4088178,3.9736126,17z/data=!3m1!4b1!4m6!3m5!1s0x103993ae7cad6c15:0xebb032f5384209bf!8m2!3d7.4088125!4d3.9761875!16s%2Fg%2F11snyp776b?entry=ttu">
              <button className="block px-8 py-2 ml-auto mr-auto font-semibold text-white bg-blue-900 lg:text-lg rounded-xl">Find a branch near you</button>
            </Link>
        </div>

      </div>
     );
}
 
export default Branch;