/* eslint-disable no-unused-vars */
import image from '../assets/convention.jpg'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const EventPreview = () => {
    const [preview, setPreview] = useState([
        {
            image: image, 
            title: 'About', 
            text: ' It is my pleasure to make known to you the upcoming National Convention of Zion Assembly Church Of God International Ministry 2023 edition which will come up on 8th Nov., to 12th Nov., 2023..\n\n Detail stated here under:\nTHEME : BY HIS STRIPES\nTEXT : 1PET.2:24\n Day 1(8th Nov., 2023) Wednesday - Revival Hour 5pm prompt\nDay 2(9th Nov., 2023) Thursday - Revival Hour 5pm prompt\nDay 3(10th Nov., 2023) Friday - Psalmist Evening 4pm prompt\n Day 4(11th Nov., 2023) Saturday - Ministers / Workers Conference 10am Prompt\nGrand Finale (12th Nov., 2023) Sunday - Thanksgiving 12noon prompt\nOf which we will be experiencing the presence of the OMNIPRESENT in an Unusual dimension in the life of the following Ministers ;\n1. Bishop Dr. Wade H.Philips\n2. Bishop Dr Yomi Adekunle\n3. Bishop S.O. Adeyemo\n4. Bishop Taiwo Akanbi \n5. Rev. Dr Joseph Omidiran\n 6. Bishop Babatunde Aderibigbe\n 7. Evang. Yomi Adekunle O.O\n8. Pst. Mrs Folasade Osobu and other Psalmist 🔥🔥\nZNC23 will be fire-filled, electrifying, powerful, great and wondrous encompasses with Divine Healing(Spiritual, Financial, Marital, Medical, Social, Material et.al) because by HIS STRIPES WE ARE HEALED. THE DIVINE HEALER await your presence embodied with total surrender, faith because without faith we shall receive nothing from GOD🔥🔥\nPray, plan and attend ', 
            id: 1 }
    ])

    return ( 
        <div className="pt-[5.5rem] pb-20">
            {preview.map((prev)=>(
                <div key={prev.id} className="grid grid-cols-2">
                    <div className="relative ">
                      <img className="h-[100vh] w-[50vw] object-cover" src={prev.image}/>
                      <Link to ="/event">
                            <button className="absolute top-[1rem] left-[1rem] bg-black text-white font-semibold text-lg py-2 px-4 rounded-lg">Back</button>
                      </Link>
                    </div>
                    <div>
                        <p>{prev.text}</p>
                    </div>
                </div>
            ))}
           
            
        </div>
     );
}
 
export default EventPreview;