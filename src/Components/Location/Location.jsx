import { useState } from 'react'

import { filterSelection } from '../utilFunctions'

import EarthImg from './../../assets/earthImg.png'
import './location.css'

const Location = () => {
    const [selectedCity, setSelectedCity] = useState(null)
    const [selectedCityIndex, setSelectedCityIndex] = useState(null)

    const handleCitySelection = ({ target }, index) => {
        const filteredCityName = filterSelection(target.textContent)
        setSelectedCityIndex(index)
        setSelectedCity(filteredCityName)
    }

    const cities = [
        'New Delhi',
        'Palwal',
        'Greater Noida',
        'Faridabad',
        'Gurugram',
        'Kalka Garhi',
        'Nodia',
        'Sonipat',
        'Tughlakabad',
    ]

    return (
        <div className='location'>
            <div className='locationLeftSection'>
                <h1>Location</h1>
                <div className='locationImgCont'>
                    <img src={EarthImg} alt='Earth Image' />
                </div>
            </div>
            <div className='locationRightSection'>
                <div className='cityAvailable'>
                    <h2>We are Available in These City</h2>
                    <ul>
                        {cities.map((city, index) => {
                            return (
                                <li
                                    onClick={(e) => handleCitySelection(e, index)}
                                    key={city}
                                    className={selectedCityIndex === index ? 'selectedCity' : ''}>
                                    {city}
                                </li>
                            )
                        })}
                    </ul>
                    <button>Select</button>
                </div>
            </div>
        </div>
    )
}

export default Location
