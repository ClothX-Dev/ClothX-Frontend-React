import HeroSection from '../Components/HeroSection/HeroSection'
import Services from '../Components/Services/Services'
import HowTo from '../Components/HowTo/HowTo'
import GuideSection from '../Components/GuideSection/GuideSection'
import UserServices from '../Components/UserServices/UserServices'

const HomePage = () => {
    return (
        <>
            <HeroSection />
            <Services />
            <HowTo />
            <GuideSection />
            <UserServices />
        </>
    )
}

export default HomePage
