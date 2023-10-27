import logo from '../assets/newlogo.png'


const MainContact = () =>{
    return(
        <div className="pt-32 pb-10">
            <div className="laptop:w-10/12 h-[80vh] w-full mx-auto bg-white laptop:shadow-sm shadow-gray-400 rounded-xl">
                <div className="">
                    <div className="bg-contact bg-gray-900 bg-opacity-70 bg-blend-overlay w-4/12 h-[80vh] bg-cover bg-right rounded-l-xl">
                        <div className="flex justify-center items-center gap-1 pb-5">
                            <img className="w-auto h-12" src={logo}/>
                            <p className="grid leading-tight font-semibold text-blue-900">
                              <span>ZION ASSEMBLY</span>
                              <span>CHURCH OF GOD, NIGERIA</span>
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )   
}
export default MainContact;