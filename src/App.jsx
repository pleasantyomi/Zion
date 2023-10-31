/* eslint-disable no-unused-vars */
import Header from './components/Header'
import Container from './components/Container'
import Footer from './components/Footer'
import MainContact from './Pages/MainContact'
import Testimony from './Pages/Testimony'
import MainBlog from './Pages/MainBlog'
import MainEvents from './Pages/MainEvents'
import EventPreview from './Pages/EventPreview'
import { Route, Link, Routes } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'


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
       <Route path="/event" element={<MainEvents/>}/>
       <Route path="/eventpreview" element={<EventPreview/>}/>

      </Routes>
      <Footer/>
   

     </div>

    </>
  )
}

export default App
