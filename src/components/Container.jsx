import About from '../Pages/Homepage/About';
import Hero from '../Pages/Homepage/Hero'
import Branch from '../Pages/Homepage/Branch'
import Events from '../Pages/Homepage/Events';
import Contact from '../Pages/Homepage/Contact'
import Blog from '../Pages/Homepage/Blog'
import Giving from '../Pages/Homepage/Giving'
import Testimony from '../Pages/Homepage/Testimony'
import Worship from '../Pages/Homepage/Worship';
import Meetings from '../Pages/Homepage/Meetings'

const Container = () => {
    return ( 
        <div>
            <Hero/>
            <About/>
            <Branch/>
            <Events/>
            <Contact/>
            <Blog/>
            <Giving/>
            <Testimony/>
            <Meetings/>
            <Worship/>
        </div>
     );
}
 
export default Container;