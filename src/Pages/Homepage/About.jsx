/* eslint-disable react/no-unknown-property */
import image from '../../assets/Background.webp'
import { Link } from 'react-router-dom'
import { Heart } from 'lucide-react'
import { BookOpen } from 'lucide-react'

const About = () => {
    return ( 
        <div className="grid w-10/12 ml-auto mr-auto lg:flex">
            <div className="flex-shrink-0 w-full h-auto mx-auto lg:w-6/12 flex-nowrap">
                <img className="rounded-xl" src={image}/>
            </div>

            <div className="pt-10 lg:pl-10 ">
            <p className="text-gray-600 ">Zion Assembly Church Of God is a spirit filled body of believers who have convenanted themselves together with God
                to accept and obey the teachings of christ and His apostles (Exodus 19:3-6; John 14:6-8; Acts 2:42, Ephesians 5:24-32).
            </p>
            <div className="grid gap-4 pt-10 lg:flex">
                <div className="w-full">
                    <div className="relative bg-blue-900 rounded-full w-14 h-14">
                       <Heart className="absolute top-[50%] left-[50%] text-white -translate-x-1/2 -translate-y-1/2 w-[1.5rem] h-auto"/>
                    </div>

                    <h1 className="mt-3 mb-4 text-xl font-bold font-secondary">Place Of Heaven</h1>
                    <p className="text-gray-400">In ZACOG you will feel divinity, piety, goodness, faith or right beliefs.</p>

                </div>

                <div className="w-full">
                    <div className="relative bg-blue-900 rounded-full w-14 h-14">
                      <BookOpen className="absolute top-[50%] left-[50%] text-white -translate-x-1/2 -translate-y-1/2 w-[1.5rem] h-auto"/>
                    </div>
                    <h1 className="mt-3 mb-4 text-xl font-bold font-secondary">Study Bible</h1>
                    <p className="text-gray-400">Learn the Bible enhance your wisdom, give you boldness about your faith. </p>
                </div>
            </div>
            <Link to ="/about">
               <button className="py-2 mt-5 font-semibold text-white bg-blue-900 rounded-lg lg:px-5 px-7">Learn more</button>
            </Link>
            </div>
        </div>

     );
}
 
export default About;