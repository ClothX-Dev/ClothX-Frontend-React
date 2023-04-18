import { motion } from 'framer-motion'
import RegisterUser from '../Components/RegisterUser/RegisterUser'

const RegisterUserPage = () => {
    return (
        <motion.div
            className='loginSignUpPage'
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: '100%', opacity: 1 }}
            exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}>
            <RegisterUser />
        </motion.div>
    )
}
export default RegisterUserPage
