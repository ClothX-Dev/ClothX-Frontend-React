import Header from './Components/Header/Header'
import HeroSection from './Components/HeroSection/HeroSection'
import Services from './Components/Services/Services'
import HowTo from './Components/HowTo/HowTo'
import GuideSection from './Components/GuideSection/GuideSection'
import './App.css'

function App() {
    return (
        <div className='App'>
            <Header />
            <HeroSection />
            <Services />
            <HowTo />
            <GuideSection />
        </div>
    )
}

export default App
