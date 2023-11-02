import image from '../../assets/3d-rendering-zoom-call-avatar.jpg'
import { Link } from 'react-router-dom'

const Meet = () => {
    return ( 
        <div>
            <div className="lg:w-10/12 w-11/12 mx-auto">
                <div className="grid grid-cols-3 lg:gap-4 gap-2 h-fit mb-10">
                    <div>
                        <img className="w-full h-full object-cover rounded-xl" src={image}/>
                    </div>

                    <div className="grid grid-rows-2 lg:gap-4 gap-2">
                        <img className="rounded-xl" src={image}/>
                        <img className="rounded-xl" src={image}/>
                    </div>

                    <div className="grid grid-rows-2 lg:gap-4 gap-2">
                        <img className="rounded-xl w-full h-full  object-cover lg:row-span-2 row-span-3" src={image}/>
                        <Link to ="/leaders">
                            <button className="w-full bg-blue-900 rounded-xl text-white font-semibold lg:text-xl text-[10px] lg:h-[5rem] h-[3rem] row-span-1">Meet the Leaders</button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
     );
}
 
export default Meet;    