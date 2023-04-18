import HomePage from './../Pages/HomePage'
import AboutUsPage from './../Pages/AboutUsPage'
import LocationPage from './../Pages/LocationPage'
import ServicesPage from './../Pages/ServicesPage'
import RegisterUserPage from '../Pages/RegisterUserPage'
import LoginUserPage from '../Pages/LoginUserPage'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

const AnimatedRoutes = () => {
    const location = useLocation()

    return (
        <AnimatePresence mode='wait'>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<HomePage />} />
                <Route path='/about' element={<AboutUsPage />} />
                <Route path='/location' element={<LocationPage />} />
                <Route path='/services' element={<ServicesPage />} />
                <Route path='/registerUser' element={<RegisterUserPage />} />
                <Route path='/login' element={<LoginUserPage />} />
            </Routes>
        </AnimatePresence>
    )
}
export default AnimatedRoutes
