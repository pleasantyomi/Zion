/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import cross from '../assets/cross.webp'
import dove from '../assets/dove.webp'
import pray from '../assets/pray.webp'
import { Link } from 'react-router-dom'
import { X } from 'lucide-react'
import ScrollToTop from "../ScrollToTop";

const MainBlog = () => {
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

    const [page, setPage] = useState(0)

    const readBlogs = (index) => {
        setPage(index + 1);
    }

    const close = () => {
        setPage(0);
    }

    const pageDisplay = () => {
        if (page === 0) {
            return (
                <div>
                    <div className="block w-10/12 pb-20 mx-auto">
                        <h1 className="font-secondary text-[2rem] font-semibold text-blue-900 text-center uppercase pb-6">Blogs</h1>
                        <div className="grid lg:grid-cols-3 mobile:gap-5 laptop:gap-10">
                            {blogs.map((blog, index) => (
                                <div key={blog.id}  >
                                    <div className="relative bg-white shadow-md shadow-gray-400 rounded-xl mobile:w-full  tablet:w-9/12 laptop:w-full mx-auto max-sm:lg:full lg:h-[35rem] h-[30rem] tablet:h-[30rem] flex-nowrap flex-shrink-0 pt-5 overflow-y-hidden">
                                        <div>
                                            <img className="object-cover w-10/12 mx-auto overflow-y-hidden rounded-xl h-2/6" src={blog.image} alt={blog.topic} />
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
                                        <div className="absolute bottom-0 grid w-full py-3 bg-blue-900 rounded-b-xl">
                                            <button className="font-semibold text-white text-md" onClick={() => readBlogs(index)}>Continue reading...</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            );
        } else if (page >= 1 && page <= blogs.length) {
            const currentBlog = blogs[page - 1];
            return (
                <div>
                    <div className="w-11/12 mx-auto lg:w-10/12">
                        <div className="text-gray-600">
                            {/* Display details of the current blog */}
                            <h1 className="grid pb-2 text-2xl font-bold leading-none">
                                {currentBlog.topic}
                                <span className="text-lg font-thin">written by {currentBlog.writer}</span>
                            </h1>
                            <p className="text-base text-justify">{currentBlog.text}</p>
                        </div>
                        
                        <button onClick={close} className="block px-5 py-2 mx-auto mt-10 text-lg font-semibold text-white bg-blue-900 rounded-lg">
                            Back to blogs
                        </button>
                       
                    </div>
                </div>
            );
        }
    }

    return (
        <div className="lg:pt-[7rem] pt-[5.5rem]">
            {pageDisplay()}
        </div>
    );
}

export default MainBlog;
