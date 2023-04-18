import { motion } from 'framer-motion'
import Login from './../Components/Login/Login'

const LoginUserPage = () => {
    return (
        <motion.div
            className='loginSignUpPage'
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: '100%', opacity: 1 }}
            exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}>
            <Login />
        </motion.div>
    )
}
export default LoginUserPage
