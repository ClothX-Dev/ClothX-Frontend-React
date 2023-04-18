import { useState, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { BsGoogle, BsFacebook } from 'react-icons/bs'
import './registerUser.css'
import { Link } from 'react-router-dom'

const RegisterUser = () => {
    const form = useRef()
    const phoneRegExp =
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    const [name, setName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const schema = yup.object().shape({
        name: yup.string('Should Be A String').required('* Name is Required'),
        phoneNumber: yup
            .string('Should be a Number')
            .matches(phoneRegExp, 'Not a valid Phone Number')
            .required('* Phone Number is Required'),
        email: yup
            .string('Should Be Text')
            .email('Enter an Valid Email Address')
            .required('* Email is Required'),
        password: yup.string('Should Be Text').required('* Subject is Required'),
    })

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) })

    const formSubmit = () => {
        console.log(`${name} ${phoneNumber} ${email} ${password}`)
    }

    const inputObj = [
        {
            id: 1,
            name: 'name',
            type: 'text',
            placeholder: 'Enter Full Name',
            handleChange: setName,
            value: name,
            error: errors.name?.message,
        },
        {
            id: 2,
            name: 'phoneNumber',
            type: 'text',
            placeholder: 'Enter Phone Number',
            handleChange: setPhoneNumber,
            value: phoneNumber,
            error: errors.phoneNumber?.message,
        },
        {
            id: 3,
            name: 'email',
            type: 'email',
            placeholder: 'Enter Email',
            handleChange: setEmail,
            value: email,
            error: errors.email?.message,
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
                <h1>Sign Up</h1>
                <p>
                    Get laundry & dry-cleaning services delivered to your doorstep at the tap of a
                    button with India's first online laundry & dry-cleaning service platform
                </p>
            </div>
            <div className='rightLoginSection'>
                <div className='rightLoginUpperSection'>
                    <h2>Create Your Account</h2>
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
                        <button className='nextbtn'>Next</button>
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
                        Already have a account, <Link to='/login'>Login</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default RegisterUser
