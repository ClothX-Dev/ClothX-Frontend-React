import WashImg from '../../assets/wash_fold.png'
import IronImg from '../../assets/steam_iron.png'
import DryCleanImg from '../../assets/dry_cleaning.png'
import PickupImg from '../../assets/dry_cleaning.png'
import './ourServices.css'

const ourServicesObj = [
    {
        icon: WashImg,
        heading: 'Wash',
        serviceText: 'Get back your dirty linen washed, folded and fresh',
    },
    {
        icon: IronImg,
        heading: 'Iron',
        serviceText: 'Get your clothes ironed and pressed to look the best',
    },
    {
        icon: DryCleanImg,
        heading: 'Dry-Clean',
        serviceText: 'Few clothes require special attention!',
    },
    {
        icon: PickupImg,
        heading: 'Pickup/Delivery',
        serviceText: 'Doorstep Pickup and Delivery for free*',
    },
]

const OurServices = () => {
    return (
        <div className='ourServices'>
            <h2>Our Services</h2>
            <div className='ourServicesCont'>
                {ourServicesObj.map(({ icon, heading, serviceText }) => (
                    <div className='ourService'>
                        <img src={icon} alt={heading} />
                        <div className='ourServiceMainText'>
                            <p>{heading}</p>
                        </div>
                        <div className='ourServiceText'>
                            <p>{serviceText}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OurServices
