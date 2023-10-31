const Testimony = () => {
    return ( 
        <div>
            <div className="grid laptop:grid-cols-3 grid-cols-1 w-full mb-0">
                <div className="bg-VeryPaleBlue w-full py-10 px-5">
                    <h1 className="font-secondary text-center font-semibold text-blue-900 text-[2rem]">Sunday service</h1>
                    <p className="text-center text-lg text-gray-600">Worship with us sunday between the hours of 9am and 12pm in the church auditorium.</p>

                </div>

                <div className="bg-white w-full py-10 px-5">
                    <h1 className="font-secondary text-center font-semibold text-gray-600 text-[2rem]">Midweek service</h1>
                    <p className="text-center text-lg text-black">We meet every wednesday between the hours of 6pm and 7:30pm to listen to the word and also pray</p>
                </div>

                <div className="bg-VeryPaleBlue w-full py-10 px-5">
                    <h1 className="font-secondary text-center font-semibold text-blue-900 text-[2rem]">Powernight service</h1>
                    <p className="text-center text-lg text-gray-600">The powernight is a wonderful and special program that comes up on the last friday within an interval of three months.</p>
                </div>

            </div>
           
        </div>
     );
}
 
export default Testimony;