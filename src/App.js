import './App.scss';
import { Home } from './pages/home/home.component';
import { Shop } from './pages/shop/shop.component';
import { About } from './pages/about/about.component';
import {Contact} from './pages/contact/contact.component';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { Header } from './components/header/header.component';
import { BasketProvider } from './provider/basketProvider/basketProvider';
import { Cart } from './pages/cart/cart.component';


function App() {
  return (
    <BrowserRouter basename="/">
      <BasketProvider>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />}/>
        <Route path="/shop" element={<Shop />}/>
        <Route path="/shop/:productId" element={<Shop />}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<h1>Gallery</h1>} />
      </Routes>
      </BasketProvider>
    </BrowserRouter>
  );
}

export default App;