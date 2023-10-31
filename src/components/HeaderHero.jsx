/* eslint-disable react/no-unknown-property */
import bottom from '../assets/bg-section-bottom-desktop-2.svg'
import mobilebot from '../assets/bg-section-bottom-mobile-2.svg'

const HeaderHero = () =>{
    return(
        <div className="relative">
            <div>
                <svg className="h-32 w-auto absolute top-[10rem] right-[2rem] z-0" width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.0002 8L8.79795 9.5611C8.14576 9.87904 7.81967 10.038 7.58124 10.278C7.37041 10.4903 7.20988 10.7471 7.11148 11.0297C7.0002 11.3492 7.0002 11.7119 7.0002 12.4375V21H17.0002V12.4375C17.0002 11.7119 17.0002 11.3492 16.8889 11.0297C16.7905 10.7471 16.63 10.4903 16.4192 10.278C16.1807 10.038 15.8546 9.87904 15.2024 9.5611L12.0002 8ZM12.0002 8V3M14.0002 5H10.0002M7.0002 13L4.76897 14.1156C4.12683 14.4366 3.80576 14.5971 3.57118 14.8366C3.36374 15.0484 3.20598 15.3037 3.10931 15.5839C3 15.9009 3 16.2598 3 16.9778V21H21V16.9777C21 16.2598 21 15.9008 20.8907 15.5839C20.794 15.3037 20.6363 15.0484 20.4289 14.8366C20.1943 14.5971 19.8732 14.4366 19.2311 14.1155L17.0002 13M14.0002 21V17C14.0002 15.8954 13.1048 15 12.0002 15C10.8956 15 10.0002 15.8954 10.0002 17V21H14.0002Z" stroke="#C8C8C8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <div className="bg-VeryPaleBlue w-full h-[20rem]">
                <h1 className="font-semibold text-3xl text-center pt-56 text-blue-900 ">EVENTS</h1>
            </div>
            <img className="hidden lg:block w-full" src={bottom}/>
            <img className="lg:hidden block w-full" src={mobilebot}/>


        </div>
    )
}
export default HeaderHero;