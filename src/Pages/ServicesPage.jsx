import { motion } from 'framer-motion'
import Services from '../Components/Services/Services'

const ServicesPage = () => {
    return (
        <motion.div
            className='servicesPage'
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: '100%', opacity: 1 }}
            exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}>
            <Services />
        </motion.div>
    )
}

export default ServicesPage
