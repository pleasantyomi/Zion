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
            topic: 'Spiritual Growth',
            writer: 'Evang. Adetayo',
            text: '
                Growth in its physical context connotes progressing from one state to another. As a believer, spiritual growth in its real sense is not just about how long you've lived being a Christian, how much you can fast, how melodious your voice sounds, how fervent you can blast in tongues, the number of years you've been a worker in God's vineyard, how gifted you are, etc.  The Criteria to measure your spiritual growth include:
                          <ul>
                              <li>
                                1. LOVE
                                How your life as a believer is, is it worthy of emulation? The Bible says the greatest of all commandments is LOVE, "He that loveth not knoweth not God; for God is love." (1 John 4:8) and the Bible says in Genesis 1:27 that we are God's image, and the personality of God is Love which means we being a replica of God ought to love as well. In mathematics, if x=2 it means whenever we see x we use 2 in that case wherever we find a Christian we are to find Love.
                                You say you love your neighbor but you keep doing what hurts your neighbor. Consider 1 John  4:20 if you can't express the Genuine love to the one you can see how much more the Invisible God.
                              </li>
    
                              <li>
                                2. CHARACTER (A LIFE OF PEACE)
                                The Bible says seek peace with all men and not those that love you alone. Jesus during His mission on Earth depicted the Act of Peace. If you have a bad character and you thought you're growing spiritually it's a big NO!
                                Our God is Light, definitely our character depict who we are. Many Christians are full of pretentious attitude i.e. they are good to some, bad to others, nice to some, harsh to others etc. All these things end up in vanity. It's when you are able to depict God's character- Meekness, Joy, Endurance etc. (Galatians 5:22-23), then you can say you're growing spiritually.
                                N.B.: There is something people call low self-esteem though it exists but in Christ it's non-existent. As a believer when you're being insulted and you remain silent, that doesn't make you a fool or even seeking peace with someone who hurt you doesn't mean you have a low self-esteem. We should all emulate Christ way of Life inspired in the persecution, hatred, spitting on His face etc. Though it is worth fighting the persecutor or even changing His mind for yet He said God should forgive for they know not what they are doing... (Luke 23:34) How many of you can do that if you were to be in His shoes? Certainly none. Food for thought: Anointing takes you up, bad character bring you down.
                              </li>
    
                              <li>
                                3. UNDERSTANDING
                                This is not about how intelligent you are or the number of certificate you possess but it is about how you understand God in some situation of your life. King David went through Hell yet He sees it as a reason to praise God. Many don't know that whenever we experience challenge it's a way of strengthening our spirit man. Rather they see it as a reason to blaspheme God and utter all sort of negative sayings. Human nature is the flesh in us, but the Apostle Paul says "We should be wise as MEN and be fool as hypocrites" . (1Corinthians 3:18; 10:15)
                                We all tend to the nature of soberness and bitterness when it comes to experience in life but rather let's give thanks to God.
                              </li>
    
                              <li>
                                4. OUTWORKING OF HIS POWER
                                Possessing God's power is not the basis of Spiritual Growth but the dimension at which the  power is being made manifest in your life.
                                With these criteria, examine yourself if you are really growing spiritually or not because the basis that will account hereafter is the spiritual basis not the physical/carnal basis.    
                              </li>
                          </ul>


                          <p>Shalom</p>  '
            image: dove,
            id: 1
        },
        {
            topic: 'Pray for the church',
            writer: 'Evang. Adetayo',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            image: cross,
            id: 2
        },
        {
            topic: 'Pay your tithes',
            writer: 'Evang. Adetayo',
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
