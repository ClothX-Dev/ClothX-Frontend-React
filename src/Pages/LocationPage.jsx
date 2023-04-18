import { motion } from 'framer-motion'
import Location from '../Components/Location/Location'

const LocationPage = () => {
    return (
        <motion.div
            className='locationPage'
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: '100%', opacity: 1 }}
            exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}>
            <Location />
        </motion.div>
    )
}

export default LocationPage
