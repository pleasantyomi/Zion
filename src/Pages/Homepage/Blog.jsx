/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import cross from '../../assets/cross.webp'
import dove from '../../assets/dove.webp'
import pray from '../../assets/pray.webp'


const Blog = () => {
    const [blogs, setBlogs] = useState([
        {topic: '15th National Convention', writer: 'Wed. 8th - Sun. 10th November,2023 ', text: 'By his stripes',  image: dove, id: 1},
        {topic: '15th National Convention', writer: 'Wed. 8th - Sun. 10th November,2023 ', text: 'By his stripes',  image: cross, id: 2},
        {topic: '15th National Convention', writer: 'Wed. 8th - Sun. 10th November,2023 ', text: 'By his stripes',  image: pray, id: 3},
    ])
    return ( 
        <div>
            <div className="block w-10/12 mx-auto">
                <h1 className="text-[2rem] font-semibold text-blue-900 text-center uppercase pb-6">Blogs</h1>
                <div className="grid lg:grid-cols-3 mobile:gap-5 laptop:gap-10">
                {blogs.map((blog) => (
                    <div key={blog.id}>
                        <div>
                            <div className="relative bg-white shadow-md shadow-gray-400 rounded-xl mobile:w-full  tablet:w-9/12 laptop:w-full mx-auto max-sm:lg:full lg:h-[70vh] h-[60vh] flex-nowrap flex-shrink-0 pt-5">
                                <div>
                                   <img className="rounded-xl w-10/12 h-2/6 mx-auto object-cover overflow-y-hidden" src={blog.image}/>
                                </div>

                                <div className="absolute grid bg-blue-900 w-full bottom-0 rounded-b-xl py-3">
                                    <button className="text-white font-semibold text-md">Continue reading...</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                </div>

                <button className=" mt-10 block bg-blue-900 text-white font-semibold mobile:py-2 laptop:py-3 w-9/12  laptop:w-3/12 rounded-xl mx-auto ">Read  more blog posts</button>
               
            </div>


        </div>
    
     );
}
 
export default Blog;