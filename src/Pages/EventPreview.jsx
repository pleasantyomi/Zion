import image from '../assets/convention.jpg'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const EventPreview = () => {
    const [preview, setPreview] = useState([
        {
            image: image, 
            title: 'About', 
            text: 'lorem ipsum \n', 
            id: 1 }
    ])

    return ( 
        <div className="pt-32 pb-20">
            {preview.map((prev)=>(
                <div key={prev.id} className="grid grid-cols-2">
                    <div className="relative ">
                      <img className="h-[100vh] w-[50vw] object-cover" src={prev.image}/>
                      <Link to ="/event">
                            <button className="absolute top-[1rem] left-[1rem] bg-black text-white font-semibold text-lg py-2 px-4 rounded-lg">Back</button>
                      </Link>
                    </div>
                </div>
            ))}
           
            
        </div>
     );
}
 
export default EventPreview;