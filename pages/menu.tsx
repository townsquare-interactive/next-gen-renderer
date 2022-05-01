import HeroHeader from '../components/HeroHeader'
import HeroBanner from '../components/HeroBanner'
import Features from '../components/Features'

const Stories = () => {
    return (
        <div>
            {/*<Header headline="Menu Stuff" imageUrl="https://images.pexels.com/photos/290595/pexels-photo-290595.jpeg" /> */}
            <HeroHeader headline="Our Restaurant" imageUrl="/images/pexels-pixabay-260922.jpg" />
            <HeroBanner headline="Our Menu" imageUrl="/images/pexels-kaboompics-com-6267.jpg" />
            <Features />
        </div>
    )
}

export default Stories
