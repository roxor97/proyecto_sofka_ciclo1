import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import CrearGif from './components/CrearVideo';
//import CrearVideo from './components/CrearVideo';
import BarraBuscadora from './components/BarraBuscadora'




function App() {
  return (
    <div className="App">
    <Header/>
    <main>

    <BarraBuscadora/>
      
    </main>
    <Footer/>
    </div>
  );
} 

export default App;
