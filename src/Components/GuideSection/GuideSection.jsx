import ClothXLogo1 from '../../assets/clothXPrimaryLogo-1.png'
import ClothXLogo2 from '../../assets/clothXPrimaryLogo-2.png'
import './guideSection.css'

const GuideSection = () => {
    return (
        <section className='guideSection'>
            <div className='textSection'>
                <p>
                    Guide <br /> To <br /> Book <br /> A Service
                </p>
            </div>
            <div className='guideVideoSection'>
                <a href='#' className='guideVideoPlayer'>
                    <p>Click To Play</p>
                    <img src={ClothXLogo1} alt='ClothX Icon 1' />
                    <img src={ClothXLogo2} alt='ClothX Icon 2' />
                </a>
            </div>
        </section>
    )
}

export default GuideSection
