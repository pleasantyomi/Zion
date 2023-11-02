/* eslint-disable no-unused-vars */
import image from '../assets/3d-rendering-zoom-call-avatar.jpg'
import { useState } from 'react';

const Leaders = () => {
    const [nationalLeaders, setNationalLeaders] =useState([
        {name: 'Bsh. Yomi-Adekunle', position: 'National Overseer', email: 'adekunleyomi@gmail.com', phone: '+2347033672742', image: image, id:1},
        {name: 'Bsh. Yomi-Adekunle', position: 'National Overseer', email: 'adekunleyomi@gmail.com', phone: '+2347033672742', image: image, id:1},
        {name: 'Bsh. Yomi-Adekunle', position: 'National Overseer', email: 'adekunleyomi@gmail.com', phone: '+2347033672742', image: image, id:1},
        {name: 'Bsh. Yomi-Adekunle', position: 'National Overseer', email: 'adekunleyomi@gmail.com', phone: '+2347033672742', image: image, id:1},
        {name: 'Bsh. Yomi-Adekunle', position: 'National Overseer', email: 'adekunleyomi@gmail.com', phone: '+2347033672742', image: image, id:1},
        {name: 'Bsh. Yomi-Adekunle', position: 'National Overseer', email: 'adekunleyomi@gmail.com', phone: '+2347033672742', image: image, id:1},
    ])


    return ( 
        <div className="lg:pt-[7rem] pt-[5.5rem] pb-20">
            <div>
                <h1 className="font-semibold font-secondary text-[2rem] lg:text-[2.5rem] text-center text-blue-900">National Staff</h1>
                <div className="grid lg:grid-cols-3 grid-flow-row w-10/12 mx-auto gap-4">
                {nationalLeaders.map((national) => (
                    <div key={national.id}>
                        <div className="relative bg-white w-full h-[25rem] shadow-sm shadow-gray-600 border-t-8 border-t-blue-900 rounded-lg  mt-32">
                            <img className="w-[10rem] h-[10rem] object-cover rounded-lg absolute top-[-5rem] left-1/2 -translate-x-[50%]" src={national.image}/>
                            <div className="pt-[8rem] text-center text-md text-gray-400 grid gap-5">
                                <h1 className="text-gray-600 text-xl">{national.name}</h1>
                                <p className=" ">{national.position}</p>
                                <p>{national.email}</p>
                                <p>{national.phone}</p>

                            </div>

                        </div>

                    </div>
                ))}

            </div>
            </div>



        </div>
     );
}
 
export default Leaders;