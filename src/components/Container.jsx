import About from '../pages/About';
import Hero from '../pages/Hero'
import Branch from '../pages/Branch'
import Events from '../pages/Events';
import Worship from '../pages/Worship';

const Container = () => {
    return ( 
        <div>
            <Hero/>
            <About/>
            <Branch/>
            <Events/>
            <Worship/>
        </div>
     );
}
 
export default Container;