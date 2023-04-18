import AnimatedRoutes from './Components/animatedRoutes'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { BrowserRouter } from 'react-router-dom'
import './App.css'

const App = () => {
    return (
        <div className='App'>
            <BrowserRouter>
                <Header />
                <AnimatedRoutes />
                <Footer />
            </BrowserRouter>
        </div>
    )
}

export default App
