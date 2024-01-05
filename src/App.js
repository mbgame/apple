import './App.scss';
import { Home } from './pages/home/home.component';
import { Shop } from './pages/shop/shop.component';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { Header } from './components/header/header.component';
import { BasketProvider } from './provider/basketProvider/basketProvider';

function App() {
  return (
    <BrowserRouter basename="/">
      <BasketProvider>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />}/>
          <Route path="/shop/:productId" element={<Shop />}/>
          <Route path="/contact" element={<h1>CONTACT</h1>} />
          <Route path="/about" element={<h1>ABOUT</h1>} />
          <Route path="/gallery" element={<h1>Gallery</h1>} />
        </Routes>
      </BasketProvider>
    </BrowserRouter>
  );
}

export default App;