import { useState, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { BsGoogle, BsFacebook } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Login = () => {
    const form = useRef()
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const schema = yup.object().shape({
        name: yup.string('Should Be A String').required('* Name is Required'),
        password: yup.string('Should Be Text').required('* Subject is Required'),
    })

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) })

    const formSubmit = () => {
        console.log(`${name} ${password}`)
    }

    const inputObj = [
        {
            id: 1,
            name: 'name',
            type: 'text',
            placeholder: 'Enter Username',
            handleChange: setName,
            value: name,
            error: errors.name?.message,
        },
        {
            id: 4,
            name: 'password',
            type: 'password',
            placeholder: 'Enter Password',
            handleChange: setPassword,
            value: password,
            error: errors.password?.message,
        },
    ]

    return (
        <div className='loginSignUp'>
            <div className='leftLoginSection'>
                <h1>Login</h1>
                <p>
                    Get laundry & dry-cleaning services delivered to your doorstep at the tap of a
                    button with India's first online laundry & dry-cleaning service platform
                </p>
            </div>
            <div className='rightLoginSection'>
                <div className='rightLoginUpperSection'>
                    <h2>Enter Username and Password</h2>
                    <form ref={form} onSubmit={handleSubmit(formSubmit)}>
                        {inputObj.map((input) => (
                            <>
                                <input
                                    key={input.id}
                                    {...register(`${input.name}`)}
                                    type={input.type}
                                    placeholder={input.placeholder}
                                    onChange={(e) => input.handleChange(e.target.value)}
                                    value={input.value}
                                />
                                <p className='formError'>{input.error}</p>
                            </>
                        ))}
                        <button className='nextbtn'>Login</button>
                    </form>
                </div>
                <div className='rightLoginLowerSection'>
                    <p>or</p>
                    <button className='facebookBtn'>
                        <BsFacebook />
                        <p>Continue with Facebook</p>
                    </button>
                    <button className='googleSignBtn'>
                        <span className='googleIconCont'>
                            <BsGoogle />
                        </span>
                        <p>Sign up with Google</p>
                    </button>
                    <p>
                        I don't have an Account, <Link to='/registerUser'>Create an Account</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login
