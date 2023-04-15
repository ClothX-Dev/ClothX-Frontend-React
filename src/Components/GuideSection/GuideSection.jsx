import DressetLogo from '../../assets/dresset_logo.png'

import './guideSection.css'

const GuideSection = () => {
    return (
        <div className='guideSection'>
            <div className='textSection'>
                <p>
                    Guide <br /> To <br /> Book <br /> A Service
                </p>
            </div>
            <div className='guideVideoSection'>
                <a href='#' className='guideVideoPlayer'>
                    <p>Click To Play</p>
                    <img src={DressetLogo} alt='Dresset Logo' />
                </a>
            </div>
        </div>
    )
}

export default GuideSection
