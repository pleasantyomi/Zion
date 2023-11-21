/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import cross from '../assets/cross.webp'
import dove from '../assets/dove.webp'
import pray from '../assets/pray.webp'
import { Link } from 'react-router-dom'
import { X } from 'lucide-react'


const MainBlog = () => {
    const [blogs, setBlogs] = useState([
        {topic: '15th National Convention', writer: 'Wed. 8th - Sun. 10th November,2023 ', text: 'By his stripes',  image: dove,  id: 1,},
        {topic: '15th National Convention', writer: 'Wed. 8th - Sun. 10th November,2023 ', text: 'By his stripes',  image: cross, id: 2},
        {topic: '15th National Convention', writer: 'Wed. 8th - Sun. 10th November,2023 ', text: 'By his stripes',  image: pray, id: 3},
    ])

    const[page, setPage] = useState(0)
    const readBlogs = () =>{
        setPage(page + 1);
    }
    const close = () =>{
        setPage(page - 1);
    }
    const pageDisplay = () =>{
        if (page === 0){
            return(
                <div>
                <div className="block w-10/12 pb-20 mx-auto">
                    <h1 className="font-secondary text-[2rem] font-semibold text-blue-900 text-center uppercase pb-6">Blogs</h1>
                    <div className="grid lg:grid-cols-3 mobile:gap-5 laptop:gap-10">
                    {blogs.map((blog) => (
                        <div key={blog.id}>
                            <div>
                                <div className="relative bg-white shadow-md shadow-gray-400 rounded-xl mobile:w-full  tablet:w-9/12 laptop:w-full mx-auto max-sm:lg:full lg:h-[35rem] h-[30rem] tablet:h-[30rem] flex-nowrap flex-shrink-0 pt-5">
                                    <div>
                                       <img className="object-cover w-10/12 mx-auto overflow-y-hidden rounded-xl h-2/6" src={blog.image}/>
                                    </div>
    
                                    <div className="absolute bottom-0 grid w-full py-3 bg-blue-900 rounded-b-xl">
                                        <button className="font-semibold text-white text-md" onClick={readBlogs}>Continue reading...</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
    
                    </div>
    
                    {/* <Link to ="/blog">
                       <button className="block w-9/12 mx-auto mt-10 font-semibold text-white bg-blue-900 mobile:py-2 laptop:py-3 laptop:w-3/12 rounded-xl">Read  more blog posts</button>
                    </Link>
     */}
                   
                </div>
    
    
            </div>

            );
        }
        else if (page === 1){
            return(
                <div>
                    <div>
                        {blogs.map((blog) =>(
                            <div key={blog.ref}>
                                <div>
                                    <h1>{blog.topic}</h1>
                                    <p>
                                        <span>by</span>
                                        <span>{blog.writer}</span>
                                    </p>
                                    <p>{blog.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button onClick={close} className="block px-5 py-2 mx-auto text-lg font-semibold text-white bg-blue-900 rounded-lg">
                        Back to blogs
                    </button>
                    
                </div>
            )
        }
    }
    return ( 
        <div className="lg:pt-[7rem] pt-[5.5rem]">
           {pageDisplay()}
        </div>
     );
}
 
export default MainBlog;