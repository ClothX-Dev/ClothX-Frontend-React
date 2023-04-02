import Header from './Components/Header/Header'
import HomePage from './Pages/HomePage'
import AboutUsPage from './Pages/AboutUsPage'
import LocationPage from './Pages/LocationPage'
import Footer from './Components/Footer/Footer'
import './App.css'

function App() {
    return (
        <div className='App'>
            <Header />
            {/* <HomePage /> */}
            {/* <AboutUsPage /> */}
            <LocationPage />
            <Footer />
        </div>
    )
}

export default App
