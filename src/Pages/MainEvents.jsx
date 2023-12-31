/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import convention from '../assets/convention.jpg'


const MainEvents = () => {
    const [events, setEvents] = useState([
        {
            title: '15th National Convention', 
            date: 'Wed. 8th - Sun. 10th November,2023 ', 
            theme: 'By his stripes', 
            location: 'Church Auditorium', 
            image: convention, 
            subtitle: 'About Event', 
            text: [
            'It is my pleasure to make known to you the upcoming National Convention of Zion Assembly Church Of God International Ministry 2023 edition which will come up on 8th Nov., to 12th Nov., 2023..',
             'Detail stated here under:',
             'THEME : BY HIS STRIPES',
             'TEXT : 1PET.2:24',
             'Day 1(8th Nov., 2023) Wednesday - Revival Hour 5pm prompt',
             'Day 2(9th Nov., 2023) Thursday - Revival Hour 5pm prompt',
             'Day 3(10th Nov., 2023) Friday - Psalmist Evening 4pm prompt',
             'Day 4(11th Nov., 2023) Saturday - Ministers / Workers Conference 10am Prompt',
             'Grand Finale (12th Nov., 2023) Sunday - Thanksgiving 12noon prompt',
             'Of which we will be experiencing the presence of the OMNIPRESENT in an Unusual dimension in the life of the following Ministers ;',
             '1. Bishop Dr. Wade H.Philips',
             '2. Bishop Dr Yomi Adekunle',
             '3. Bishop S.O. Adeyemo',
             '4. Bishop Taiwo Akanbi',
             '5. Rev. Dr Joseph Omidiran',
             '6. Bishop Babatunde Aderibigbe',
             '7. Evang. Yomi Adekunle O.O',
             '8. Pst. Mrs Folasade Osobu and other Psalmist 🔥🔥',
             'ZNC23 will be fire-filled, electrifying, powerful, great and wondrous encompasses with Divine Healing(Spiritual, Financial, Marital, Medical, Social, Material et.al) because by HIS STRIPES WE ARE HEALED. THE DIVINE HEALER await your presence embodied with total surrender, faith because without faith we shall receive nothing from GOD🔥🔥',
             'Pray, plan and attend ', 
            ],
            
            id: 1},
    ])

    const [Page, setPage] = useState(0)

    const previewEvents = () =>{
        setPage(Page + 1);
    }

    const listEvents = () =>{
        setPage(Page - 1);
    }

    const pageDisplay =  () =>{
        if (Page === 0 ){
            return ( 
                <div>
                    <div className="block w-10/12 mx-auto pt-[5.5rem] lg:pt-[7rem] pb-20">
                        <h1 className="fonr-secondary text-[2rem] font-semibold text-blue-900 text-center uppercase pb-8">events</h1>
                        <div className="grid lg:grid-cols-3 mobile:gap-5 tablet:gap-5 laptop:gap-10">
                        {events.map((eve) => (
                            <div key={eve.id}>
                                <div>
                                    <div onClick={previewEvents} className="cursor-pointer relative bg-white shadow-md rounded-xl mobile:w-full  tablet:w-9/12 laptop:w-full mx-auto  h-[22rem]  flex-nowrap flex-shrink-0">
                                        <div>
                                           <img className="rounded-xl w-full h-[22rem] object-cover overflow-y-hidden" src={eve.image}/>
                                        </div>
        
                                        <div className="absolute grid bg-white w-full lg:h-[11rem] h-[11rem]  bottom-0 rounded-b-xl lg:px-5 px-2 py-6">
                                            <h1 className="text-2xl font-semibold text-gray-600">{eve.theme}</h1>
                                            <p className="text-lg text-gray-400">{eve.title}</p>
                                            <div className="flex items-center gap-2 text-gray-400">
                                               <svg className="w-5 h-5" fill="#BDBDBD" width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19,4H17V3a1,1,0,0,0-2,0V4H9V3A1,1,0,0,0,7,3V4H5A3,3,0,0,0,2,7V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm1,15a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V12H20Zm0-9H4V7A1,1,0,0,1,5,6H7V7A1,1,0,0,0,9,7V6h6V7a1,1,0,0,0,2,0V6h2a1,1,0,0,1,1,1Z"/></svg>                                    
                                               <p>{eve.date}</p>
                                            </div>
                                            <div className="flex items-center gap-2 text-gray-400 ">
                                                <svg className="w-5 h-5 text-white" width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                  <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="#BDBDBD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                  <path d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z" stroke="#BDBDBD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>                                   
                                                <p className="">{eve.location}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
        
                        </div>
                       
                    </div>
        
        
                </div>
            
             );
        }

        else if ( Page === 1){
             return(
            <div className="pt-[5.5rem] pb-20 lg:pb-5">
            {events.map((prev)=>(
                <div key={prev.id} className="grid-cols-2 lg:grid">
                    <div className="relative h-[100vh] mb-56 lg:mb-0">
                      <img className="lg:h-[100vh] lg:w-[50vw] object-cover" src={prev.image}/>
                      <div>
                            <button onClick ={listEvents} className="absolute top-[1rem] left-[1rem] bg-black text-white font-semibold text-lg py-2 px-4 rounded-lg">Back</button>
                      </div>
                    </div>
                    <div className="mobile:absolute tablet:absolute laptop:relative bg-white  laptop:px-10 px-5 text-justify pt-10 rounded-t-3xl top-[20rem] laptop:top-[0.1rem]">
                        <h1 className="text-blue-900 font-semibold text-[1.5rem] pb-2">{prev.subtitle}</h1>
                        {prev.text && Array.isArray(prev.text) && (
                            prev.text.map((paragraph, index) => (
                                <div key={index} className="mb-4 text-gray-600">
                                    {paragraph}
                                </div>
                            ))
                        )}                 
                    </div>
                </div>
            ))}
            </div>
            );
        }
    }

    return(
        <div>
            {pageDisplay()}
        </div>
    )

   
    
}
 
export default MainEvents;