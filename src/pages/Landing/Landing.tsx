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
  { id: 1, title: "مانتو کتان", image: "/src/assets/sticker (5).webp", price: "۸۵۰,۰۰۰", bgClass: "bg-product-1" },
  { id: 2, title: "مانتو مجلسی", image: "/src/assets/sticker (6).webp", price: "۱,۲۵۰,۰۰۰", bgClass: "bg-product-2" },
  { id: 3, title: "مانتو اداری", image: "/src/assets/sticker (7).webp", price: "۹۸۰,۰۰۰", bgClass: "bg-product-3" },
  { id: 4, title: "مانتو تابستانه", image: "/src/assets/sticker (8).webp", price: "۷۲۰,۰۰۰", bgClass: "bg-product-4" },
  { id: 5, title: "مانتو پاییزه", image: "/src/assets/sticker (9).webp", price: "۱,۱۵۰,۰۰۰", bgClass: "bg-product-5" },
];

const trends = [
  { id: 1, title: "مانتو قرمز", image: "/src/assets/sticker (10).webp", price: "۱,۳۵۰,۰۰۰", bgClass: "bg-trend-1" },
  { id: 2, title: "مانتو آبی", image: "/src/assets/sticker (11).webp", price: "۹۹۰,۰۰۰", bgClass: "bg-trend-2" },
  { id: 3, title: "مانتو کرم", image: "/src/assets/sticker (12).webp", price: "۱,۴۵۰,۰۰۰", bgClass: "bg-trend-3" },
  { id: 4, title: "مانتو صورتی", image: "/src/assets/sticker (13).webp", price: "۸۹۰,۰۰۰", bgClass: "bg-trend-4" },
  { id: 5, title: "مانتو زیتونی", image: "/src/assets/sticker (14).webp", price: "۱,۲۸۰,۰۰۰", bgClass: "bg-trend-5" },
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
      <section className="grid md:grid-cols-2 items-center px-4 sm:px-40 py-12 md:py-20 bg-[#f0dfd8]">
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
        <div className="order-1 md:order-2 mt-10 md:mt-0 flex justify-center">
          <div className="w-full max-w-md bg-[#e9d4cd] p-4 rounded-3xl shadow-lg">
            <img
              src="/src/assets/sticker (5).webp"
              alt="مدل مانتو"
              className="w-full h-64 md:h-80 object-contain"
            />
          </div>
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
              <div className={`relative ${product.bgClass} rounded-lg p-4 mb-4`}>
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-32 md:h-36 object-contain group-hover:scale-105 transition duration-300"
                />
                <button className="absolute top-2 left-2 bg-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition shadow-md">
                  <Heart className="w-4 h-4 text-burgundy" />
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
      <section className="bg-[#e9d4cd] px-4 sm:px-10 py-16">
        <div className="flex flex-col md:flex-row items-stretch justify-between gap-8">
          
          {/* بخش متن و اطلاعات */}
          <div className="text-right md:text-right max-w-xl flex flex-col justify-center">
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
                <span className="text-burgundy text-xl">✓</span>
                قیمت‌های ویژه برای عمده‌فروشان
              </li>
              <li className="flex items-center gap-2">
                <span className="text-burgundy text-xl">✓</span>
                حداقل سفارش: ۳ عدد از هر مدل
              </li>
              <li className="flex items-center gap-2">
                <span className="text-burgundy text-xl">✓</span>
                ارسال سریع به سراسر کشور
              </li>
            </ul>
            <Link
              to="/auth/wholesale-request"
              className="inline-flex items-center gap-2 mt-6 bg-[#600018] text-white px-6 py-3 rounded-md hover:bg-[#800020] transition w-fit"
            >
              <Users className="w-5 h-5" />
              ثبت‌نام عمده‌فروشی
            </Link>
          </div>

          {/* بخش راست - نقشه و دو عکس */}
          <div className="flex flex-col md:flex-row gap-4 flex-1">
            
            {/* ستون نقشه (سمت راست) - ارتفاع بیشتر */}
            <div className="md:w-1/2">
              <div className="bg-white p-4 rounded-3xl shadow-lg h-full">
                <div className="flex items-center gap-2 mb-3 text-burgundy">
                  <MapPin className="w-5 h-5" />
                  <span className="font-semibold">دفتر مرکزی فروش عمده</span>
                </div>
                <div className="bg-gray-200 rounded-xl h-48 md:h-64 flex items-center justify-center relative overflow-hidden">
                  <img 
                    
                    alt="دفتر مرکزی"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="bg-white p-2 rounded-full shadow-lg">
                      <MapPin className="w-6 h-6 text-burgundy" />
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-3 text-center font-medium">
                  تهران، خیابان ولیعصر، پلاک ۱۲۳
                </p>
                <p className="text-xs text-gray-500 mt-1 text-center">
                  شنبه تا پنجشنبه ۹ صبح تا ۶ عصر
                </p>
              </div>
            </div>

            {/* ستون دو عکس (کنار هم) */}
            <div className="md:w-1/2">
              <div className="flex gap-4 full">
                
                {/* عکس اول - دفتر عمده */}
                <div className="bg-white p-4 rounded-3xl shadow-lg flex-1">
                  <div className="flex items-center gap-2 mb-2 text-burgundy">
                    <ShoppingBag className="w-4 h-4" />
                    <span className="font-semibold text-sm">نمایشگاه عمده</span>
                  </div>
                  <img
                    src="/src/assets/stic.webp"
                    alt="نمایشگاه عمده"
                    className="w-full h-32 md:h-36 object-contain"
                  />
                </div>

                {/* عکس دوم - انبار محصولات */}
                <div className="bg-white p-4 rounded-3xl shadow-lg flex-1">
                  <div className="flex items-center gap-2 mb-2 text-burgundy">
                    <Truck className="w-4 h-4" />
                    <span className="font-semibold text-sm">انبار مرکزی</span>
                  </div>
                  <img
                    src="/src/assets/sti.webp"
                    alt="انبار مرکزی"
                    className="w-full h-32 md:h-36 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
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
              <div className={`relative ${product.bgClass} rounded-lg p-4 mb-4`}>
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-32 md:h-36 object-contain group-hover:scale-105 transition duration-300"
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