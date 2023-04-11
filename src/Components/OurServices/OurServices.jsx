import WashImg from '../../assets/wash_placeholder_img.png'
import IronImg from '../../assets/iron_placeholder_img.png'
import DryCleanImg from '../../assets/dry_clean_placeholder_img.png'
import PickupImg from '../../assets/pickup_placeholder_img.png'
import './ourServices.css'

const OurServices = () => {
    return (
        <div className='ourServices'>
            <h2>Our Services</h2>
            <div className='ourServicesImgCont'>
                <img src={WashImg} alt='Washing Machine Image' />
                <img src={IronImg} alt='Iron Image' />
                <img src={DryCleanImg} alt='Dry Clean Image' />
                <img src={PickupImg} alt='Pickup Image' />
            </div>
        </div>
    )
}

export default OurServices