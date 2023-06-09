import { motion } from 'framer-motion'
import About from '../Components/About/About'

const AboutUsPage = () => {
    return (
        <motion.div
            className='aboutPage'
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: '100%', opacity: 1 }}
            exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}>
            <About />
        </motion.div>
    )
}

export default AboutUsPage
