import WashImg from '../../assets/wash_img.png'
import IronImg from '../../assets/iron_img.png'
import DryCleanImg from '../../assets/dry_clean_img.png'
import PickupImg from '../../assets/pickup_img.png'
import './services.css'

const Services = () => {
    return (
        <section className='services'>
            <h2>Our Services</h2>
            <div className='servicesImgCont'>
                <img src={WashImg} alt='Washing Machine Image' />
                <img src={IronImg} alt='Iron Image' />
                <img src={DryCleanImg} alt='Dry Clean Image' />
                <img src={PickupImg} alt='Pickup Image' />
            </div>
        </section>
    )
}

export default Services
