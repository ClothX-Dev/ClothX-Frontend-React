import HeroSection from '../Components/HeroSection/HeroSection'
import OurServices from '../Components/OurServices/OurServices'
import HowTo from '../Components/HowTo/HowTo'
import GuideSection from '../Components/GuideSection/GuideSection'
import UserServices from '../Components/UserServices/UserServices'
import { motion } from 'framer-motion'

const HomePage = () => {
    return (
        <motion.div
            className='homePage'
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: '100%', opacity: 1 }}
            exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
        >
            <HeroSection />
            <OurServices />
            <HowTo />
            <GuideSection />
            <UserServices />
        </motion.div>
    )
}

export default HomePage
