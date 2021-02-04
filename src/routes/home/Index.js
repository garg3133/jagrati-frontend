import Header from 'components/home/Header'
import Navbar from 'components/home/Navbar'
import Showcase from 'components/home/Showcase'
import Contact from 'components/home/Contact'


const Home = () => {
    return (
        <div className="container">
            <Header />
            <Navbar />
            <Showcase />
            <Contact />
        </div>
    )
}

export default Home
