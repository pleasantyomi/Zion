/* eslint-disable no-unused-vars */
import Header from './components/Header'
import Container from './components/Container'
import Footer from './components/Footer'
import MainContact from './Pages/MainContact'
import Testimony from './Pages/Testimony'
import MainBlog from './Pages/MainBlog'
import MainEvents from './Pages/MainEvents'
import { Route, Link, Routes } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'
import WhoWeAre from './Pages/WhoWeAre'
import Leaders from './Pages/Leaders'


function App() {

  return (
    <>
     <div className="font-other">
      <ScrollToTop/>
      <Header/>
      <Routes>
       <Route path="/" element={<Container/>}/>
       <Route path="/contact" element={<MainContact/>}/>
       <Route path="/testimony" element={<Testimony/>}/>
       <Route path="/blog" element={<MainBlog/>}/>
       <Route path="/events" element={<MainEvents/>}/>
       <Route path="/about" element={<WhoWeAre/>}/>
       <Route path="/leaders" element={<Leaders/>}/>

      </Routes>
      <Footer/>
   

     </div>

    </>
  )
}

export default App
