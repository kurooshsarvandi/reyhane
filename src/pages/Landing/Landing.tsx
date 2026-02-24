// src/pages/Landing/Landing.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  ShoppingBag, 
  Users, 
  Truck, 
  ChevronLeft,
  Heart,
  Star,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Instagram,
  ShoppingCart,
  Home,
  Grid,
  Info,
  User,
  LogIn,
  UserPlus,
  Search
} from "lucide-react";

// دیتای محصولات نمونه
const casualProducts = [
  { id: 1, title: "مانتو کتان", image: "/src/assets/p10.webp", price: "۸۵۰,۰۰۰" },
  { id: 2, title: "مانتو مجلسی", image: "/images/p2.jpg", price: "۱,۲۵۰,۰۰۰" },
  { id: 3, title: "مانتو اداری", image: "/images/p3.jpg", price: "۹۸۰,۰۰۰" },
  { id: 4, title: "مانتو تابستانه", image: "/images/p4.jpg", price: "۷۲۰,۰۰۰" },
  { id: 5, title: "مانتو پاییزه", image: "/images/p5.jpg", price: "۱,۱۵۰,۰۰۰" },
];

const trends = [
  { id: 1, title: "مانتو قرمز", image: "/images/t1.jpg", price: "۱,۳۵۰,۰۰۰" },
  { id: 2, title: "مانتو آبی", image: "/images/t2.jpg", price: "۹۹۰,۰۰۰" },
  { id: 3, title: "مانتو کرم", image: "/images/t3.jpg", price: "۱,۴۵۰,۰۰۰" },
  { id: 4, title: "مانتو صورتی", image: "/images/t4.jpg", price: "۸۹۰,۰۰۰" },
  { id: 5, title: "مانتو زیتونی", image: "/images/t5.jpg", price: "۱,۲۸۰,۰۰۰" },
];

const Landing: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-[#f5f3f1] text-gray-800 font-sans">
      {/* هدر با آیکون‌های کامل */}
      <header className="bg-[#e9d4cd2e] px-4 sm:px-10 py-6 flex justify-between items-center backdrop-blur-sm sticky top-0 z-50">
        {/* لوگو و نام برند */}
        <div className="flex items-center gap-2">
          <ShoppingBag className="w-7 h-7 text-burgundy" />
          <h1 className="text-2xl sm:text-3xl font-serif font-bold">ریحانه</h1>
        </div>
        
      

        {/* منوی دسکتاپ با آیکون‌ها */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          <a href="#home" className="hover:text-burgundy transition flex items-center gap-2 group">
            <Home className="w-4 h-4 group-hover:scale-110 transition" />
            <span>خانه</span>
          </a>
          <a href="#products" className="hover:text-burgundy transition flex items-center gap-2 group">
            <Grid className="w-4 h-4 group-hover:scale-110 transition" />
            <span>محصولات</span>
          </a>
          <a href="#about" className="hover:text-burgundy transition flex items-center gap-2 group">
            <Info className="w-4 h-4 group-hover:scale-110 transition" />
            <span>درباره ما</span>
          </a>
          <a href="#contact" className="hover:text-burgundy transition flex items-center gap-2 group">
            <Phone className="w-4 h-4 group-hover:scale-110 transition" />
            <span>تماس</span>
          </a>
        </nav>
        
        {/* بخش دسکتاپ - جستجو و دکمه‌های کاربری */}
        <div className="hidden md:flex items-center gap-4">
          <button className="p-2 hover:bg-white/50 rounded-full transition">
            <Search className="w-5 h-5 text-gray-700" />
          </button>
          
          <button className="p-2 hover:bg-white/50 rounded-full transition relative">
            <Heart className="w-5 h-5 text-gray-700" />
            <span className="absolute -top-1 -right-1 bg-burgundy text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              ۰
            </span>
          </button>
          
          <Link to="/cart" className="p-2 hover:bg-white/50 rounded-full transition relative">
            <ShoppingCart className="w-5 h-5 text-gray-700" />
            <span className="absolute -top-1 -right-1 bg-burgundy text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              ۰
            </span>
          </Link>
          
          <div className="w-px h-6 bg-gray-300 mx-2"></div>
          
          <Link 
            to="/auth/login" 
            className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-white/50 transition"
          >
            <LogIn className="w-4 h-4" />
            <span>ورود</span>
          </Link>
          
          <Link 
            to="/auth/register" 
            className="flex items-center gap-2 bg-burgundy text-white px-4 py-2 rounded-full hover:bg-[#600018] transition shadow-md"
          >
            <UserPlus className="w-4 h-4" />
            <span>ثبت‌نام</span>
          </Link>
        </div>

        {/* نسخه موبایل - دکمه‌های اصلی */}
        <div className="flex md:hidden items-center gap-3">
          <Link to="/cart" className="relative">
            <ShoppingCart className="w-5 h-5 text-gray-700" />
            <span className="absolute -top-2 -right-2 bg-burgundy text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              ۰
            </span>
          </Link>
          <Link to="/auth/login">
            <User className="w-5 h-5 text-gray-700" />
          </Link>
     <button 
    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
    className="p-1"
  >
    {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
  </button>

        </div>
      </header>

      {/* منوی موبایل کشویی */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm absolute top-20 left-0 right-0 z-40 shadow-lg">
          <nav className="flex flex-col p-4">
            <a href="#home" className="py-3 px-4 hover:bg-[#e9d4cd] rounded-lg transition flex items-center gap-4">
              <Home className="w-5 h-5 text-burgundy" />
              <span>خانه</span>
            </a>
            <a href="#products" className="py-3 px-4 hover:bg-[#e9d4cd] rounded-lg transition flex items-center gap-3">
              <Grid className="w-5 h-5 text-burgundy" />
              <span>محصولات</span>
            </a>
            <a href="#about" className="py-3 px-4 hover:bg-[#e9d4cd] rounded-lg transition flex items-center gap-3">
              <Info className="w-5 h-5 text-burgundy" />
              <span>درباره ما</span>
            </a>
            <a href="#contact" className="py-3 px-4 hover:bg-[#e9d4cd] rounded-lg transition flex items-center gap-3">
              <Phone className="w-5 h-5 text-burgundy" />
              <span>تماس</span>
            </a>
            <div className="border-t border-gray-200 my-2"></div>
            <a href="#favorites" className="py-3 px-4 hover:bg-[#e9d4cd] rounded-lg transition flex items-center gap-3">
              <Heart className="w-5 h-5 text-burgundy" />
              <span>علاقه‌مندی‌ها</span>
            </a>
            <a href="#search" className="py-3 px-4 hover:bg-[#e9d4cd] rounded-lg transition flex items-center gap-3">
              <Search className="w-5 h-5 text-burgundy" />
              <span>جستجو</span>
            </a>
            <div className="border-t border-gray-200 my-2"></div>
            <Link to="/auth/login" className="py-3 px-4 hover:bg-[#e9d4cd] rounded-lg transition flex items-center gap-3">
              <LogIn className="w-5 h-5 text-burgundy" />
              <span>ورود به حساب</span>
            </Link>
            <Link to="/auth/register" className="py-3 px-4 bg-burgundy text-white rounded-lg transition flex items-center gap-3 justify-center mt-2">
              <UserPlus className="w-5 h-5" />
              <span>ثبت‌نام</span>
            </Link>
          </nav>
        </div>
      )}

      {/* بخش Hero */}
      <section className="grid md:grid-cols-2 items-center px-4 sm:px-10 py-12 md:py-20 bg-[#f0dfd8]">
        <div className="order-2 md:order-1 text-right">
          <h2 className="text-3xl md:text-5xl font-serif font-bold leading-tight">
            استایل خود را <br /> متحول کنید!
          </h2>
          <p className="mt-6 text-gray-600 max-w-md flex items-start gap-2">
            <Star className="w-5 h-5 text-burgundy flex-shrink-0 mt-1" />
            <span>مجموعه‌ای از شیک‌ترین و باکیفیت‌ترین مانتوها برای زنان مدرن و با سلیقه</span>
          </p>
          <div className="flex gap-5 mt-8">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 bg-burgundy text-white px-6 py-3 rounded-md hover:bg-[#600018] transition"
            >
              <ShoppingBag className="w-5 h-5" />
              خرید تکی
            </Link>
            <Link
              to="/auth/wholesale-request"
              className="inline-flex items-center gap-2 bg-burgundy text-white px-6 py-3 rounded-md hover:bg-[#600018] transition"
            >
              <Users className="w-5 h-5" />
              خرید عمده
            </Link>
          </div>
        </div>
        <div className="order-1 md:order-2 mt-10 md:mt-0">
          <img
            src="/images/hero.jpg"
            alt="مدل مانتو"
            className="rounded-2xl shadow-lg w-full h-auto"
          />
        </div>
      </section>

      {/* بخش محصولات ویژه */}
      <section className="px-4 sm:px-10 py-16" id="products">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Heart className="w-6 h-6 text-burgundy" />
          <h3 className="text-center text-2xl font-semibold">
            جدیدترین محصولات
          </h3>
          <Heart className="w-6 h-6 text-burgundy" />
        </div>
        <p className="text-center text-gray-500 mb-10">مانتوهای پرفروش این فصل</p>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {casualProducts.map((product) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 text-center group"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="rounded-lg mb-4 w-full h-40 object-cover group-hover:scale-105 transition duration-300"
                />
                <button className="absolute top-2 left-2 bg-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition">
                  <Heart className="w-4 h-4 text-gray-600" />
                </button>
              </div>
              <h4 className="font-medium text-sm md:text-base">{product.title}</h4>
              <p className="text-gray-500 text-xs md:text-sm mt-1">
                {product.price} تومان
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* بخش بنر تخفیف - مخصوص مشتریان عمده */}
      <section className="bg-[#e9d4cd] px-4 sm:px-10 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-right md:text-right">
          <div className="flex items-center gap-2 mb-4">
            <Truck className="w-8 h-8 text-burgundy" />
            <h3 className="text-2xl md:text-3xl font-bold">خرید عمده با شرایط ویژه</h3>
          </div>
          <p className="text-lg mt-2 flex items-center gap-2">
            <ChevronLeft className="w-5 h-5 text-burgundy" />
            برای خرید ۳ عدد به بالا، قیمت عمده دریافت کنید
          </p>
          <ul className="mt-4 space-y-2 text-gray-700">
            <li className="flex items-center gap-2">
              <span className="text-burgundy">✓</span>
              قیمت‌های ویژه برای عمده‌فروشان
            </li>
            <li className="flex items-center gap-2">
              <span className="text-burgundy">✓</span>
              حداقل سفارش: ۳ عدد از هر مدل
            </li>
            <li className="flex items-center gap-2">
              <span className="text-burgundy">✓</span>
              ارسال سریع به سراسر کشور
            </li>
          </ul>
          <Link
            to="/auth/wholesale-request"
            className="inline-flex items-center gap-2 mt-6 bg-[#600018] text-white px-6 py-3 rounded-md hover:bg-gray-800 transition"
          >
            <Users className="w-5 h-5" />
            ثبت‌نام عمده‌فروشی
          </Link>
        </div>
        <img
          src="/images/banner.jpg"
          alt="تخفیف ویژه عمده"
          className="rounded-xl w-full md:w-80 h-auto"
        />
      </section>

      {/* بخش پرفروش‌ترین‌ها */}
      <section className="px-4 sm:px-10 py-16">
        <h3 className="text-center text-2xl font-semibold mb-4">
          پرفروش‌ترین‌ها
        </h3>
        <p className="text-center text-gray-500 mb-10">محصولات محبوب مشتریان ما</p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {trends.map((product) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 text-center group"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="rounded-lg mb-4 w-full h-40 object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <h4 className="font-medium text-sm md:text-base">{product.title}</h4>
              <p className="text-gray-500 text-xs md:text-sm mt-1">
                {product.price} تومان
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* فوتر با آیکون‌ها */}
      <footer className="bg-[#430212d8] text-white py-8 px-4">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 text-right">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <ShoppingBag className="w-6 h-6" />
                <h4 className="font-bold text-lg">ریحانه</h4>
              </div>
              <p className="text-sm text-gray-300">
                فروشگاه تخصصی مانتو با بهترین کیفیت و مناسب‌ترین قیمت
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">دسترسی سریع</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <Link to="/shop" className="hover:text-white transition flex items-center gap-2">
                    <ChevronLeft className="w-4 h-4" />
                    فروشگاه
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-white transition flex items-center gap-2">
                    <ChevronLeft className="w-4 h-4" />
                    درباره ما
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-white transition flex items-center gap-2">
                    <ChevronLeft className="w-4 h-4" />
                    تماس
                  </Link>
                </li>
                <li>
                  <Link to="/auth/wholesale-request" className="hover:text-white transition flex items-center gap-2">
                    <ChevronLeft className="w-4 h-4" />
                    خرید عمده
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">تماس با ما</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span dir="ltr">۰۲۱-۱۲۳۴۵۶۷۸</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  info@reyhane.com
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  تهران، خیابان ولیعصر
                </li>
                <li className="flex items-center gap-2">
                  <Instagram className="w-4 h-4" />
                  reyhane_manto
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm text-gray-400">
            <p>© ۲۰۲۶ فروشگاه ریحانه. تمامی حقوق محفوظ است.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;