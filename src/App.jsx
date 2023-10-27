import Header from './components/Header.jsx'
import Container from './components/Container.jsx'
import Footer from './components/Footer.jsx'
import MainContact from './Pages/MainContact'
import { Route, Link, Routes } from 'react-router-dom'


function App() {

  return (
    <>
     <div>
      <Header/>
      <Routes>
       <Route path="/" element={<Container/>}/>
       <Route path="/Contact" element={<MainContact/>}/>

      </Routes>
      <Footer/>
   

     </div>

    </>
  )
}

export default App
