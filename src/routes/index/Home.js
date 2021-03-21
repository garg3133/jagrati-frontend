import './Home.css'
import Showcase from 'components/home/Showcase'
import Contact from 'components/home/Contact'
import Footer from 'components/global/footer/Footer';
import IndexHeader from 'components/global/header/IndexHeader';
import IndexNavbar from 'components/global/header/IndexNavbar';


const Home = () => {
    return (
        <>
            <IndexHeader />
            <IndexNavbar />
            <div className="container">
                <Showcase />
                <Contact />
            </div>
            <Footer />
        </>

    )
}

export default Home
