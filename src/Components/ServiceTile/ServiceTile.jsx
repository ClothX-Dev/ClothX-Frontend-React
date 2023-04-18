import { useState } from 'react'
import { filterSelection } from '../utilFunctions'
import { AiFillCaretUp, AiFillCaretDown } from 'react-icons/ai'

import './serviceTile.css'

const cloths = [
    { id: 'pant', clothName: 'Pant' },
    { id: 'shirt', clothName: 'Shirt' },
    { id: 'blazer', clothName: 'Blazer' },
]

const ServiceTile = ({ id, icon, heading, pricing }) => {
    const [cothCount, setClothCount] = useState(0)

    return (
        <div className='service'>
            <div className='leftServiceSection'>
                <img src={icon} alt={id} />
            </div>
            <div className='centerServiceSection'>
                <h2>{heading}</h2>
                <div className='clothSelectionArea'>
                    <div className='topSelectionSection'>
                        <div className='leftSelectionSection'>
                            <p>Select Cloth Type</p>
                        </div>
                        <div className='rightSelectionSection'>
                            {cloths.map(({ id, clothName }) => (
                                <button key={id}>{clothName}</button>
                            ))}
                        </div>
                    </div>
                    <div className='bottomSelectionSection'>
                        <p>Free Delivery above order Rs 499</p>
                    </div>
                </div>
            </div>
            <div className='rightServiceSection'>
                <div className='pricePerKG'>
                    <p>Rs {pricing}/Kg</p>
                </div>

                <div className='countOfCloths'>
                    <p>Count</p>
                    <div className='countCont'>
                        <p key={id} className='count'>
                            {cothCount}
                        </p>
                        <div className='countBtnCont'>
                            <AiFillCaretUp
                                onClick={() => setClothCount((currentCount) => currentCount + 1)}
                            />
                            <AiFillCaretDown
                                onClick={() =>
                                    setClothCount((currentCount) =>
                                        currentCount === 0 ? currentCount : currentCount - 1
                                    )
                                }
                            />
                        </div>
                    </div>
                </div>
                <button className='bookNow' disabled={!cothCount}>
                    Book Now
                </button>
            </div>
        </div>
    )
}

export default ServiceTile
