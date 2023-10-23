// import './App.css';

import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Navbar from './container/Navbar';
import Footer from './container/Footer';
import AboutUs from './Pages/AboutUs';
import Faq from './Pages/Faq';
import Team from './Pages/Team';
import TeamDetail from './Pages/TeamDetail';
import Testimonial from './Pages/Testimonial';
import Services from './Pages/Services';
import ServiceDetail from './Pages/ServiceDetail';
import Error404 from './Pages/Error404';
import ComingSoon from './Pages/ComingSoon';
import Subscribe from './Pages/Subscribe';
import OurMenu from './Pages/OurMenu';
import Shopping from './Pages/Shopping';
import ShopCart from './Pages/ShopCart';
import ShopWishList from './Pages/ShopWishList';
import ShopCheckOut from './Pages/ShopCheckOut';
import ProductDetail from './Pages/ProductDetail';
import ContactUs from './Pages/ContactUs';
import Blogs from './Pages/Blogs';
import BlogDetail from './Pages/BlogDetail';

function App() {
  return (
    <div className='page-wraper'>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/team' element={<Team />} />
        <Route path='/team-detail' element={<TeamDetail />} />
        <Route path='/testimonial' element={<Testimonial />} />
        <Route path='/services' element={<Services />} />
        <Route path='/service-detail' element={<ServiceDetail />} />
        <Route path='/error-404' element={<Error404 />} />
        <Route path='/coming-soon' element={<ComingSoon />} />
        <Route path='/subscribe' element={<Subscribe />} />
        <Route path='/our-menu' element={<OurMenu />} />
        <Route path='/shop' element={<Shopping />} />
        <Route path='/shop-cart' element={<ShopCart />} />
        <Route path='/shop-wishlist' element={<ShopWishList />} />
        <Route path='/shop-checkout' element={<ShopCheckOut />} />
        <Route path='/product-detail' element={<ProductDetail />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/blog-grid' element={<Blogs />} />
        <Route path='/blog-detail' element={<BlogDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
