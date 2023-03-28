import InstagramLogo from './../../assets/instagram.png'
import TwitterLogo from './../../assets/twitter.png'
import FacebookLogo from './../../assets/facebook.png'
import WhatsappLogo from './../../assets/whatsapp.png'

import './footer.css'

const Footer = () => {
    return (
        <section className='footer'>
            <div className='leftFooter'>
                <div className='followUs'>
                    <h6>Follow Us</h6>
                    <div className='socialsIconCont'>
                        <a href='#'>
                            <img src={InstagramLogo} alt='' />
                        </a>
                        <a href='#'>
                            <img src={TwitterLogo} alt='' />
                        </a>
                        <a href='#'>
                            <img src={FacebookLogo} alt='' />
                        </a>
                        <a href='#'>
                            <img src={WhatsappLogo} alt='' />
                        </a>
                    </div>
                </div>
                <div className='enterEmailCont'>
                    <p>Example@mail.com</p>
                    <p>Enter Email</p>
                </div>
            </div>
            <div className='rightFooter'>
                <section className='rightFooterSections contactUsSection'>
                    <h6>Contact Us</h6>
                    <div>
                        <span></span>
                        <p>9999121212</p>
                    </div>
                    <div>
                        <span></span>
                        <p>helpmeclothx@gmail.com</p>
                    </div>
                    <div>
                        <span></span>
                        <p>Chat Support</p>
                    </div>
                </section>
                <section className='rightFooterSections forUserSection'>
                    <h6>For User</h6>
                    <a href='#'>
                        <p>Our Services</p>
                    </a>
                    <a href='#'>
                        <p>Feedback</p>
                    </a>
                    <a href='#'>
                        <p>Mobile App</p>
                    </a>
                </section>
                <section className='rightFooterSections forBusinessSection'>
                    <h6>For Business</h6>
                    <a href='#'>
                        <p>Become a Partner</p>
                    </a>
                    <a href='#'>
                        <p>Merchant App</p>
                    </a>
                </section>
            </div>
        </section>
    )
}

export default Footer
