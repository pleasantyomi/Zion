/* eslint-disable react/no-unknown-property */
import image from '../../assets/Background.webp'

const About = () => {
    return ( 
        <div className="lg:flex grid w-10/12 ml-auto mr-auto">
            <div className="lg:w-6/12 w-full mx-auto  h-auto  flex-nowrap flex-shrink-0">
                <img className="rounded-xl" src={image}/>
            </div>

            <div className="lg:pl-10 pt-10 ">
            <p className="text-gray-600 ">Zion Assembly Church Of God is a spirit filled body of believers who have convenanted themselves together with God
                to accept and obey the teachings of christ and His apostles (Exodus 19:3-6; John 14:6-8; Acts 2:42, Ephesians 5:24-32).
            </p>
            <div className="lg:flex  gap-4 grid pt-10">
                <div className="w-full">
                    <div className="relative bg-blue-900 w-14 h-14 rounded-full">
                    <svg className=" w-8 h-8 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                         <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                     </svg>
                    </div>

                    <h1 class="font-secondary text-xl font-bold mt-3 mb-4">Place Of Heaven</h1>
                    <p class="text-gray-400">In ZACOG you will feel divinity, piety, goodness, faith or right beliefs.</p>

                </div>

                <div className="w-full">
                    <div className="relative bg-blue-900 w-14 h-14 rounded-full">
                        <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-white " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                        </svg>
                    </div>
                    <h1 className="font-secondary text-xl font-bold mt-3 mb-4">Study Bible</h1>
                    <p className="text-gray-400">Learn the Bible enhance your wisdom, give you boldness about your faith. </p>
                </div>
            </div>
            <button className="text-white bg-blue-900 font-semibold lg:px-5 px-7 py-2 rounded-lg mt-5">Learn more</button>
            </div>


        </div>

     );
}
 
export default About;