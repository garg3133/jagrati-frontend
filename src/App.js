import Home from './routes/index/Home'
import Header from 'components/global/header/Header';
import Footer from 'components/global/footer/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
