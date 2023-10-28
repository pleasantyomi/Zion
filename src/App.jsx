import Header from './components/Header.jsx'
import Container from './components/Container.jsx'
import Footer from './components/Footer.jsx'
import MainContact from './Pages/MainContact'
import Testimony from './Pages/Testimony.jsx'
import MainBlog from './Pages/MainBlog'
import MainEvents from './Pages/MainEvents'
import { Route, Link, Routes } from 'react-router-dom'


function App() {

  return (
    <>
     <div>
      <Header/>
      <Routes>
       <Route path="/" element={<Container/>}/>
       <Route path="/contact" element={<MainContact/>}/>
       <Route path="/testimony" element={<Testimony/>}/>
       <Route path="/blog" element={<MainBlog/>}/>
       <Route path="/event" element={<MainEvents/>}/>

      </Routes>
      <Footer/>
   

     </div>

    </>
  )
}

export default App
