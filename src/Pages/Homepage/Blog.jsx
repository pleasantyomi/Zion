/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import cross from '../../assets/cross.webp'
import dove from '../../assets/dove.webp'
import pray from '../../assets/pray.webp'
import { Link } from 'react-router-dom'
import { X } from 'lucide-react'
import Button from '../../components/Button'


const Blog = () => {
    const [blogs, setBlogs] = useState([
        {
            topic: 'The lord is good',
            writer: 'Grace ', 
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            image: dove,
            id: 1
        },
        {
            topic: 'Pray for the church', 
            writer: 'Emmanuel ',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            image: cross,
            id: 2
        },
        {
            topic: 'Pay your tithes',
            writer: 'Tolu', 
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',  
            image: pray, 
            id: 3
        },
    ])

            return(
                <div>
                <div className="block w-10/12 mx-auto">
                    <h1 className="font-secondary text-[2rem] font-semibold text-blue-900 text-center uppercase pb-6">Blogs</h1>
                    <div className="grid lg:grid-cols-3 mobile:gap-5 laptop:gap-10">
                    {blogs.map((blog) => (
                        <div key={blog.id}>
                            <div>
                                <div className="relative bg-white shadow-md shadow-gray-400 rounded-xl mobile:w-full  tablet:w-9/12 laptop:w-full mx-auto max-sm:lg:full lg:h-[35rem] h-[30rem] tablet:h-[30rem] flex-nowrap flex-shrink-0 pt-5 overflow-y-hidden">
                                    <div>
                                       <img className="object-cover w-10/12 mx-auto overflow-y-hidden rounded-xl h-2/6" src={blog.image}/>
                                    </div>
                                    <div className="w-10/12 mx-auto mt-8 overflow-x-hidden">
                                        <h1 className="grid font-semibold text-gray-600">
                                            <span className="text-md">Topic: {blog.topic} </span>
                                            <span className="text-sm font-thin">Written by {blog.writer} </span>
                                        </h1>
                                        <p className="mt-1 overflow-x-hidden text-justify">
                                            {blog.text} 
                                        </p>

                                    </div>
    
                                    <div className="absolute bottom-0 grid w-full h-[2rem]  bg-white bg-opacity-80 blur rounded-b-xl">
                                        {/* <button className="font-semibold text-white text-md" onClick={readBlogs}>Continue reading...</button> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
    
                    </div>
    
                    <Link to ="/blog">
                       <button className="block w-9/12 mx-auto mt-10 font-semibold text-white bg-blue-900 mobile:py-2 laptop:py-3 laptop:w-3/12 rounded-xl">Read  more blog posts</button>
                    </Link>
    
                   
                </div>
    
    
            </div>

            );
}
 
export default Blog;

