import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Landing from './pages/Landing/Landing';

function App() {
  return (
    <BrowserRouter>
    <AuthProvider>
      <Routes>
        {/* صفحه لندینگ در مسیر اصلی */}
        <Route path="/" element={<Landing />} />
        
        {/* مسیرهای دیگه رو بعداً اضافه می‌کنیم */}
        {/* <Route path="/shop" element={<Home />} /> */}
        {/* <Route path="/product/:id" element={<ProductPage />} /> */}
        {/* <Route path="/cart" element={<CartPage />} /> */}
      </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;