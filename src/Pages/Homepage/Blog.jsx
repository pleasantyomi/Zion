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
            topic: 'Spiritual Growth',
            writer: 'Evang. Adetayo Adeyemi',
            text: [
                'Growth in its physical context connotes progressing from one state to another. As a believer, spiritual growth in its real sense is not just about how long you\'ve lived being a Christian, how much you can fast, how melodious your voice sounds, how fervent you can blast in tongues, the number of years you\'ve been a worker in God\'s vineyard, how gifted you are, etc.  The Criteria to measure your spiritual growth include:',
                '1. LOVE: How your life as a believer is, is it worthy of emulation? The Bible says the greatest of all commandments is LOVE, He that loveth not knoweth not God; for God is love. (1 John 4:8) and the Bible says in Genesis 1:27 that we are God\'s image, and the personality of God is Love which means we being a replica of God ought to love as well. In mathematics, if x=2 it means whenever we see x we use 2 in that case wherever we find a Christian we are to find Love. You say you love your neighbor but you keep doing what hurts your neighbor. Consider 1 John  4:20 if you can\'t express the Genuine love to the one you can see how much more the Invisible God.',
                '2. CHARACTER (A LIFE OF PEACE): The Bible says seek peace with all men and not those that love you alone. Jesus during His mission on Earth depicted the Act of Peace. If you have a bad character and you thought you\'re growing spiritually it\'s a big NO! Our God is Light, definitely our character depict who we are. Many Christians are full of pretentious attitude i.e. they are good to some, bad to others, nice to some, harsh to others etc. All these things end up in vanity. It\'s when you are able to depict God\'s character- Meekness, Joy, Endurance etc. (Galatians 5:22-23), then you can say you\'re growing spiritually. N.B.: There is something people call low self-esteem though it exists but in Christ it\'s non-existent. As a believer when you\'re being insulted and you remain silent, that doesn\'t make you a fool or even seeking peace with someone who hurt you doesn\'t mean you have a low self-esteem. We should all emulate Christ way of Life inspired in the persecution, hatred, spitting on His face etc. Though it is worth fighting the persecutor or even changing His mind for yet He said God should forgive for they know not what they are doing... (Luke 23:34) How many of you can do that if you were to be in His shoes? Certainly none. Food for thought: Anointing takes you up, bad character bring you down.',
                '3. UNDERSTANDING: This is not about how intelligent you are or the number of certificate you possess but it is about how you understand God in some situation of your life. King David went through Hell yet He sees it as a reason to praise God. Many don\'t know that whenever we experience challenge it\'s a way of strengthening our spirit man. Rather they see it as a reason to blaspheme God and utter all sort of negative sayings. Human nature is the flesh in us, but the Apostle Paul says "We should be wise as MEN and be fool as hypocrites" . (1Corinthians 3:18; 10:15) We all tend to the nature of soberness and bitterness when it comes to experience in life but rather let\'s give thanks to God.',
                ' 4. OUTWORKING OF HIS POWER: Possessing God\'s power is not the basis of Spiritual Growth but the dimension at which the  power is being made manifest in your life. With these criteria, examine yourself if you are really growing spiritually or not because the basis that will account hereafter is the spiritual basis not the physical/carnal basis.',
                'Shalom.',
                
            ],
            image: dove,
            id: 1
        },
        {
            topic: 'Five \'L\' that cause deficiency of power and grace',
            writer: 'Evang. Adetayo Adeyemi',
            text: [
                'These are the things that has taken away power and grace and have not made you what God wants for you.',
                '(1) LAZINESS : A lazy man cannot succeed. Proverbs 6:6 tells us to learn from the ants. They have no one to supervise or tell them what to do. Ants are well organized. Poverty,failure comes from laziness. Proverbs 6:6-11. You love food yet you hate work.',
                '(2) LOOSENESS : No moral restraint. Indescent touching of the opposite sex. No restraint in the way you play. No restraint in the way you talk and relate with the opposite sex. Don\'t be loose with your mouth. It is not the nature of Christ to be loose. Looseness will drain you of every grace you carry. We are not ordinary. 1Peter 2:9. Christ in you makes you peculiar. There is grace to control every feeling you have. Looseness makes you display things you should be ashamed of displaying.',
                '(3) LIGHTNESS : They do not take anything serious. Lightness means lacking stability-changeable with ease. A light person doesn\'t know that the purpose of music isn\'t for entertainment but to bring down God\'s presence and enable people to have encounter with God. Anyone who worship God must worship in spirit and truth.',
                '(4) LOQUACIOUSNESS: It means talking too much. Someone who talks too much can drain all power gotten in place of prayer within a short time. Train yourself that every word of your mouth is scriptural. Proverbs 10:19. ',
                '(5) LIKE OTHERS: You cannot be like the majority, if you want to please God. ',
                'You must not follow the crowd. You should rebuke others when you see them doing the wrong things. Dare to be an overcomer and different. Be in the group of people that are spiritually minded. You have to acquire the knowledge of God and anointing now as a youth. 1Timothy4:12. A youth without Christ will be despised. A youth that portrait youthfulness will not be regarded as worthy. Philippians 4:13. You can do all things through Christ. There is grace in Christ to keep you. Out of many prophets who followed Baal there were still 7,000 prophets that didn\'t leave God. God will not change his standard because everyone is doing evil.',
                'THINGS THAT MAKE PEOPLE LOOK DOWN ON YOUTHS.',
                '(1) IMMATURITY: Acting in a childish way. A youth who saturates his mind will be respected and put in place of responsibility. The word of God makes you think, talk and behave wiser than your age. 1Corinthians 13:11, Job 32:6-9 Psalms 119:98-100. Don\'t look down on yourself because of your age. Begin to catch God\'s vision for your life. There is a reason for your existence. Grow up.',
                '(2) IMMORALITY :  Flee all youthful lust. Conform yourself to God\'s ways.2Timothy 2:22.',
                '(3) INDECENT APPEARANCE OR DRESSING:  As a Christian you should dress and comport yourself in a manner that will not expose sensitive parts of your body thereby causing others to stumble through lustful thoughts and temptations. 1Timothy 2:9,1Corinthians 8:9, Romans 14:21.',
                '(4)  INDEPENDENCE/ INSUBORDINATION. Youths believe they should be allowed to make their own decision. As people grow and mature they realize that no one knows all or has all that he needs, that we all need one another. This need for us to depend on one another is called interdependence. That means we can benefit from counsel or talent or grace of other people. 1 Corinthians 12:21-23',
                '(5) INSTABILITY/INCONSISTENCY: You need to overcome the youthful tendency to keep searching from one place to another for excitement and high and strange sounding teachings or spiritual manifestations. Ephesians 4:14.',
                '(6)  INDISCIPLINE: There is need for everyone to discipline his flesh with regards to sleep, television viewing, hand sets, internet browsing, food and drinks and sexual sins. 1corinthians 9:27, 1 John 2:13-14.',
                'Be strong in the Lord. Allow the Word of God to abide in you and you will easily overcome satan, the wicked one. *Ecclesiastes 12:1* says Remember now thy creator in the days of thy youth when the evil days come not and and the years draw near and thou shall say i have no pleasure in them. the glory of the youth is in their strength. use your strength as a youth to add to god\'s kingdom.',
            ],
            image: cross,
            id: 2
        },
        {
            topic: ' What if?',
            writer: 'Evang. Adetayo Adeyemi',
            text: [
                ' WHAT IF HE THOUGHT AS MAN DOES, DID?',
                'I tried to converse about He who sent me but was shy',
                'Kneeling in supplication is a necessity I find impossible',
                'I have duties to perform in the vineyard',
                'But truly time isn\'t a friend',
                'A minute or two with thanks would have been fair',
                'But it is usually a mind-numbing tradition',
                'I wish to help but how much can busy-me render?',
                'I’m just flesh, PLEASE UNDERSTAND;',
                'Understand my hands are tied',
                'Understand I’m the shy type',
                'Understand I have dire family responsibilities',
                'Understand life isn\'t easy, I have to earn',
                'Understand it could sound awkward',
                'Understand my friends will definitely taunt me',
                'Understand I cherish your holy book and day',
                'But friends get my eye red with wine',
                'Please Understand, IF ONLY:',
                'If only you made me a little taller and less timid',
                'If only you made me more vocal and more vibrant',
                'If only you Graced me with heaven-fat wealth',
                'If only you lightened my family responsibilities',
                'If only you made the sun rule the night',
                'If only I had a labour-free life',
                'If only I am a master of miracles',
                'If only you made the seas red and the sky black',
                'Perhaps, I would have been an asset to you',
                'But then, WHAT IF?',
                'What if God was so self centered?',
                'What if He decides to be absent?',
                'What if he cared less about humanrace?',
                'What if He though as men does, did?',
                'What if he says:',
                'I tried to make my presence to he who sort me but was shy',
                'Listening to supplications is a neccesity I find impossible',
                'I have duties to perform in the life of people',
                'But truly, stress has been my friend',
                'Just an outstretched hand would have been fair',
                'Oh! Too bad, my hands are full',
                'I wish to help but how much can busy-me render?',
                'I’m a Supreme Being, PLEASE UNDERSTAND;',
                'Understand I have too many voices on my name',
                'Understand the birds, beasts and fishes all rely on me',
                'Understand the field crave my grace',
                'Understand I have to inhabit the praises of my Angels',
                'Understand the Devil wants me to flaw',
                'Understand my responsibility is to the entire Universe',
                'Understand I cherish your beautiful face',
                'But I wont hesitate to let it rot in Hell when you err',
                'Please understand, IF ONLY:',
                'If only you thanked me a little often',
                'If only your offerings were better than your nags',
                'If only you sacrificed a little time with me',
                'If only your heart and ears were unimpeded',
                'If only you made me rule your hours',
                'If only I had lesser responsibilities to harbour',
                'If only I was the master of your life',
                'If only you kept your lamp blazing with light',
                'Perhaps, I would have been an asset to you',
                'But then, GOD IS',
                'God is a father who provides',
                'God is a father who cares [Matt, 7:11]',
                'God is a father who gives [Jn, 3:16]',
                'God is a father who forgives',
                'God is a father who loves',
            ],
            image: pray,
            id: 3
        }
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
                                                {blog.text && Array.isArray(blog.text) && (
                                                    blog.text.map((paragraph, index) => (
                                                        <div key={index} className="mb-4">
                                                            {paragraph}
                                                       </div>
                                                    ))
                                                )}
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
                        <Button text="Read  more blog posts" className="block w-9/12 mx-auto mt-10 font-semibold text-white mobile:py-2 laptop:py-3 laptop:w-3/12"/>
                       {/* <button className="bg-blue-900 rounded-xl">Read  more blog posts</button> */}
                    </Link>
    
                   
                </div>
    
    
            </div>

            );
}
 
export default Blog;

