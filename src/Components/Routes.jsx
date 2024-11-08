import { Route, Routes } from 'react-router-dom'
import RedPage from './Links/Red.jsx'
import BluePage from './Links/Blue.jsx'
import HomePage from './Links/Home.jsx'
import PurplePage from './Links/Purple.jsx'
import BoringPage from './Links/Boring.jsx'

const AllRoutes = () => {
  return (
    <div id="main-section">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blue" element={<BluePage />} />
        <Route path="/red" element={<RedPage />} />
        <Route path="/purple" element={<PurplePage />} />
        <Route path="/boring" element={<BoringPage/>}/>
      </Routes>
    </div>
  )
}

export default AllRoutes