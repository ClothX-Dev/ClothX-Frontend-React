import { useState } from 'react'
import { AiFillCaretUp, AiFillCaretDown } from 'react-icons/ai'
import WashAndFoldIcon from './../../assets/wash_fold.png'
import DryCleanIcon from './../../assets/dry_cleaning.png'
import IronIcon from './../../assets/steam_iron.png'
import './services.css'

const servicesPageObj = [
    {
        id: 'washandfoldservice',
        blockIcon: WashAndFoldIcon,
        blockHeading: 'Wash And Fold Service',
        blockPricing: 45,
        blockClothType: ['Pant', 'Shirt', 'Blazer'],
    },
    {
        id: 'ironservice',
        blockIcon: DryCleanIcon,
        blockHeading: 'Iron Service',
        blockPricing: 45,
        blockClothType: ['Pant', 'Shirt', 'Blazer'],
    },
    {
        id: 'dryclearningservice',
        blockIcon: IronIcon,
        blockHeading: 'Dry Cleaning Service',
        blockPricing: 45,
        blockClothType: ['Pant', 'Shirt', 'Blazer'],
    },
]

const Services = () => {
    const [clothCount, setClothCount] = useState(0)

    return (
        <div className='servicesWrapper'>
            <h1>Services</h1>
            {servicesPageObj.map(
                ({ id, blockIcon, blockHeading, blockPricing, blockClothType }) => (
                    <div className='service' key={id}>
                        <div className='leftServiceSection'>
                            <img src={blockIcon} alt={id} />
                        </div>
                        <div className='centerServiceSection'>
                            <h2>{blockHeading}</h2>
                            <div className='clothSelectionArea'>
                                <div className='topSelectionSection'>
                                    <div className='leftSelectionSection'>
                                        <p>Select Cloth Type</p>
                                    </div>
                                    <div className='rightSelectionSection'>
                                        {blockClothType.map((clothName) => (
                                            <button>{clothName}</button>
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
                                <p>Rs {blockPricing}/Kg</p>
                            </div>
                            <div className='countOfCloths'>
                                <p>Count</p>
                                <div className='countCont'>
                                    <p className='count'>{clothCount}</p>
                                    <div className='countBtnCont'>
                                        <AiFillCaretUp
                                            onClick={() =>
                                                setClothCount((prevCount) => prevCount + 1)
                                            }
                                        />
                                        <AiFillCaretDown
                                            onClick={() =>
                                                setClothCount((prevCount) =>
                                                    prevCount === 0 ? 0 : prevCount - 1
                                                )
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                            <button className='bookNow'>Book Now</button>
                        </div>
                    </div>
                )
            )}
        </div>
    )
}

export default Services
