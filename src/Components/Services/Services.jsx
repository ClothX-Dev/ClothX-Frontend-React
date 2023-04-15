import ServiceTile from '../ServiceTile/ServiceTile'

import WashAndFoldIcon from './../../assets/wash_fold.png'
import DryCleanIcon from './../../assets/dry_cleaning.png'
import IronIcon from './../../assets/steam_iron.png'

import './services.css'

const Services = () => {
    const pricing = 45

    const servicesPageObj = [
        {
            id: 'washandfoldservice',
            icon: WashAndFoldIcon,
            heading: 'Wash And Fold',
            pricing: pricing,
        },
        {
            id: 'ironservice',
            icon: IronIcon,
            heading: 'Iron',
            pricing: pricing,
        },
        {
            id: 'dryclearningservice',
            icon: DryCleanIcon,
            heading: 'Dry Cleaning',
            pricing: pricing,
        },
    ]

    return (
        <div className='servicesWrapper'>
            <h1>Services</h1>
            {servicesPageObj.map(({ id, icon, heading, pricing }) => (
                <ServiceTile key={id} icon={icon} heading={heading} pricing={pricing} />
            ))}
        </div>
    )
}

export default Services
