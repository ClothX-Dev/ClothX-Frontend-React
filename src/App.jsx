import Home from './Pages/Home'
import Header from './Components/Header/Header'
import HeroSection from './Components/HeroSection/HeroSection'
import Services from './Components/Services/Services'
import HowTo from './Components/HowTo/HowTo'
import GuideSection from './Components/GuideSection/GuideSection'
import UserServices from './Components/UserServices/UserServices'
import Footer from './Components/Footer/Footer'
import './App.css'

function App() {
    return (
        <div className='App'>
            <Header />
            <Home>
                <HeroSection />
                <Services />
                <HowTo />
                <GuideSection />
                <UserServices />
            </Home>
            <Footer/>
        </div>
    )
}

export default App
