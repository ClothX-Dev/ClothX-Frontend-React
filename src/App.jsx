import Header from './Components/Header/Header'
import HomePage from './Pages/HomePage'
import AboutUsPage from './Pages/AboutUsPage'
import LocationPage from './Pages/LocationPage'
import ServicesPage from './Pages/ServicesPage'
import Footer from './Components/Footer/Footer'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'

function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/about' element={<AboutUsPage />} />
                    <Route path='/location' element={<LocationPage />} />
                    <Route path='/services' element={<ServicesPage />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    )
}

export default App
