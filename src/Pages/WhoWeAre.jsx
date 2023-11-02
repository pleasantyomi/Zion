import logo from '../assets/logonew.jpg'
import { Link } from 'react-router-dom'

const WhoWeAre = () =>{
    return(
        <div className="pt-[5.5rem] lg:pt-[7rem]">
            <div>
                {/* <h1 className="font-semibold text-blue-900 text-[2rem] lg:text-[2.5rem] font-secondary text-center">Who We Are</h1> */}
                <div className="lg:flex lg:items-center lg:w-10/12 w-11/12 mx-auto">
                    <div className="lg:pr-20">
                        <h1 className="font-tetiary font-semibold text-blue-900 text-[1.8rem] pb-3">About us</h1>
                        <p className="text-justify pb-10 lg:pb-0">
                            Zion Assembly Church of God is a Spirit-filled body of believers who have covenanted themselves together with God to accept and obey the teachings of Christ and His apostles (Exodus 19:3-6; John 14:6, 8, 14; Acts 2:42; Ephesians 5:24-32). This commitment is firm, even in this present time of apostasy, when so many are “falling away” and “[departing] from the faith” (2 Thessalonians 2:1-12; 1 Timothy 4:1-3; 2 Peter 2; 3:1-12; Jude 3-19). <br/><br/>

                            The ministers and members of Zion Assembly have committed themselves to live and worship together in this “most holy faith,” to walk in truth, to “endeavor to keep the unity of the Spirit in the bond of peace,”and to cultivate among themselves the graces of love and holiness. They seek for the perfections of Christ in their fellowship, and by His grace and power to conform to the image of Jesus Christ so completely that when He appears they shall be like Him (Romans 8:29; Colossians 1:1-17; 1 John 3:2).<br/><br/>

                            Besides this internal disposition to cultivate mutual love and care within the household of God, the ministers and members of Zion Assembly have committed themselves to labor for the unity of all believers, until all “see eye to eye,” “speak the same thing,” and “walk by the same rule” (Isaiah 52:8; 1 Corinthians 1:10; Philippians 3:16). In this manner, they seek to carry forward the apostolic vision: “Till we all come in the unity of the faith, and of the knowledge of the Son of God, unto a perfect man, unto the measure of the stature of the fulness of Christ” (Ephesians 4:13).<br/><br/>

                            Zion Assembly has further obligated itself to publish and to proclaim the full gospel into all the world in obedience to Christ’s commission to the church (Matthew 28:19).<br/><br/>

                            Learn more about the teachings of Zion Assembly Church of God by reading our <Link className="text-blue-900" to="">Abstract of Faith.</Link>
                        </p>

                    </div>

                    <div className="flex-shrink-0 flex-nowrap">
                        <img className=""  src={logo}/>
                    </div>

                </div>

            </div>

        </div>
    )
}
export default WhoWeAre;