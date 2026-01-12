
import Home from './pages/Home'
import Facilities from './pages/Facilities'
import Rooms from './pages/Rooms'
import Contact from './pages/Contact'
import { Route, Routes } from 'react-router-dom'
import Section from './components/Section'

const App = () => {
 
  return (
    <>
    <Routes>
        <Route path="/" element={<Section bg="/hotel.png"><Home/></Section>} />
        <Route path="/facilities" element={<Section bg="/facilities-img.png"><Facilities/></Section>} />
        <Route path="/rooms" element={<Section bg="/rooms-img.png"><Rooms/></Section>} />
        <Route path="/contact" element={<Section bg="/hotel.png"><Contact/></Section>} />
      </Routes>
    </>


  )
}

export default App