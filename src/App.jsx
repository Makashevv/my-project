import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/UI/Header/Header';
import Home from './components/pages/Home';
import Contacts from './components/pages/Contacts';
import About from './components/pages/About';
import Cards from './components/UI/Cards/Cards';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contacts" element={<Contacts />} />
        </Routes>
        <Cards />
      </BrowserRouter>
    </div>
  );
}

export default App;
