import { useState, useEffect } from 'react';
import { ArrowLeft, Truck, Sparkles, MapPin, Phone, ShoppingBag, Instagram, Menu, X, ExternalLink, Clock, MessageCircle, Heart, Gift, Star, ChevronDown, Compass } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import heroFlatLay from './assets/images/shop-flat-lay.png';
import { storeConfig } from './config';
import { productCategories, storeFaqs } from './content';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(() => {
    if (typeof window === 'undefined') return 'home';
    const storedPage = window.localStorage.getItem('nasreen-current-page');
    if (storedPage === 'tumblr') return 'tumblr';
    return window.location.pathname === '/tumblr' ? 'tumblr' : 'home';
  });
  const [activeTab, setActiveTab] = useState('all');

  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(null);
  const [showBackButton, setShowBackButton] = useState(false);

  const createWhatsAppLink = (text: string) => {
    return `https://wa.me/${storeConfig.whatsAppPhone}?text=${encodeURIComponent(text)}`;
  };

  const getCategoryImage = (_id: string, image: any) => image;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('nasreen-current-page', currentPage);
      const nextPath = currentPage === 'tumblr' ? '/tumblr' : '/';
      if (window.location.pathname !== nextPath) {
        window.history.pushState({}, '', nextPath);
      }
    }
  }, [currentPage]);

  useEffect(() => {
    if (currentPage !== 'home') {
      const onScroll = () => {
        setShowBackButton(window.scrollY > 120);
      };

      onScroll();
      window.addEventListener('scroll', onScroll);
      return () => window.removeEventListener('scroll', onScroll);
    }

    setShowBackButton(false);
  }, [currentPage]);

  const instagramReels: any[] = [];
  const filteredReels = instagramReels;

  const tumblrProducts = [
    {
      id: 'pink-basic',
      title: 'Stainless Steel Tumbler – 1200ml, Leakproof Water Cup with Handle, Lid & Straw for Hot & Cold Drinks, Coffee Mug for Gym, Travel, Office & Outdoor (Pink)',
      image: '/Pink tumblr.png',
      price: '₹399',
      volume: '1200ml',
      description: 'Pink — insulated stainless steel tumbler with handle, lid & straw.'
    },
    {
      id: 'dark-green',
      title: 'Stainless Steel Tumbler – 1200ml, Leakproof Water Cup with Handle, Lid & Straw for Hot & Cold Drinks, Coffee Mug for Gym, Travel, Office & Outdoor (Dark Green)',
      image: '/Dark Green tumblr.png',
      price: '₹399',
      volume: '1200ml',
      description: 'Dark green — insulated stainless steel tumbler, leakproof and double-walled.'
    },
    {
      id: 'bright-green',
      title: 'Stainless Steel Tumbler – 1200ml, Leakproof Water Cup with Handle, Lid & Straw for Hot & Cold Drinks, Coffee Mug for Gym, Travel, Office & Outdoor (Bright Green)',
      image: '/Bright green tumbler.png',
      price: '₹399',
      volume: '1200ml',
      description: 'Bright green — insulated stainless steel tumbler with easy-grip handle.'
    },
    {
      id: 'white',
      title: 'Stainless Steel Tumbler – 1200ml, Leakproof Water Cup with Handle, Lid & Straw for Hot & Cold Drinks, Coffee Mug for Gym, Travel, Office & Outdoor (White)',
      image: '/White tumblr.png',
      price: '₹399',
      volume: '1200ml',
      description: 'White — insulated stainless steel tumbler, stylish matte finish.'
    },
    {
      id: 'black',
      title: 'Stainless Steel Tumbler – 1200ml, Leakproof Water Cup with Handle, Lid & Straw for Hot & Cold Drinks, Coffee Mug for Gym, Travel, Office & Outdoor (Black)',
      image: '/black tumblr.png',
      price: '₹399',
      volume: '1200ml',
      description: 'Black — insulated stainless steel tumbler with premium finish.'
    },
    {
      id: 'offwhite',
      title: 'Stainless Steel Tumbler – 1200ml, Leakproof Water Cup with Handle, Lid & Straw for Hot & Cold Drinks, Coffee Mug for Gym, Travel, Office & Outdoor (Offwhite)',
      image: '/Offwhite tumblr.png',
      price: '₹399',
      volume: '1200ml',
      description: 'Offwhite — insulated stainless steel tumbler with soft-touch finish.'
    },
    {
      id: 'light-blue',
      title: 'Stainless Steel Tumbler – 1200ml, Leakproof Water Cup with Handle, Lid & Straw for Hot & Cold Drinks, Coffee Mug for Gym, Travel, Office & Outdoor (Light Blue)',
      image: '/Light blue tumblr.jpg',
      price: '₹399',
      volume: '1200ml',
      description: 'Light blue — insulated stainless steel tumbler with glossy finish.'
    },
    {
      id: 'navy-blue',
      title: 'Stainless Steel Tumbler – 1200ml, Leakproof Water Cup with Handle, Lid & Straw for Hot & Cold Drinks, Coffee Mug for Gym, Travel, Office & Outdoor (Navy Blue)',
      image: '/Navy blue tumblr.png',
      price: '₹399',
      volume: '1200ml',
      description: 'Navy blue — insulated stainless steel tumbler, sleek design.'
    },
    {
      id: 'neon-blue',
      title: 'Stainless Steel Tumbler – 1200ml, Leakproof Water Cup with Handle, Lid & Straw for Hot & Cold Drinks, Coffee Mug for Gym, Travel, Office & Outdoor (Neon Blue)',
      image: '/neon blue tumblr.png',
      price: '₹399',
      volume: '1200ml',
      description: 'Neon blue — bold insulated tumbler for active use.'
    },
    {
      id: 'red',
      title: 'Stainless Steel Tumbler – 1200ml, Leakproof Water Cup with Handle, Lid & Straw for Hot & Cold Drinks, Coffee Mug for Gym, Travel, Office & Outdoor (Red)',
      image: '/red tumblr.png',
      price: '₹399',
      volume: '1200ml',
      description: 'Red — insulated stainless steel tumbler with non-slip base.'
    },
    {
      id: 'blue-floral',
      title: 'Floral Stainless Steel Tumbler – 1200ml (Blue Floral)',
      image: '/Blue floral tumblr.png',
      price: '₹549',
      volume: '1200ml',
      description: 'Blue floral pattern — insulated stainless steel tumbler, handle & straw included.'
    },
    {
      id: 'purple-floral',
      title: 'Floral Stainless Steel Tumbler – 1200ml (Purple Floral)',
      image: '/Purple floral tumblr.png',
      price: '₹549',
      volume: '1200ml',
      description: 'Purple floral pattern — insulated stainless steel tumbler, handle & straw included.'
    },
    {
      id: 'holiday-waterbottle',
      title: 'Holiday Waterbottle – 900ml, Insulated with Handle, Lid & Straw (Holiday)',
      image: '/Holiday tumblr waterbottle.png',
      price: '₹599',
      volume: '900ml',
      description: 'Holiday design — 900ml insulated waterbottle with handle, lid & straw.'
    },
    {
      id: 'insulated-holiday',
      title: 'Insulated Holiday Tumbler – 900ml (Insulated Holiday)',
      image: '/Insulated Holiday Tumblr.png',
      price: '₹599',
      volume: '900ml',
      description: 'Insulated holiday tumbler — 900ml, handle & straw, keeps drinks hot or cold.'
    },
    {
      id: 'pink-pinterest-daisy',
      title: 'Pinteresty Daisy Tumbler – 900ml (Pink Daisy)',
      image: '/Pink Pinteresty Daisy tumblr.png',
      price: '₹599',
      volume: '900ml',
      description: 'Pink daisy pattern — 900ml insulated tumbler with handle and straw.'
    },
    {
      id: 'purple-pinterest-daisy',
      title: 'Pinteresty Daisy Tumbler – 900ml (Purple Daisy)',
      image: '/Pruple Pinteresty Daisy Tumblr.png',
      price: '₹599',
      volume: '900ml',
      description: 'Purple daisy pattern — 900ml insulated tumbler with handle and straw.'
    },
    {
      id: 'pink-holiday',
      title: 'Holiday Waterbottle – 900ml, Insulated with Handle, Lid & Straw (Pink Holiday)',
      image: '/Pink holiday tumblr waterbottle.png',
      price: '₹599',
      volume: '900ml',
      description: 'Pink holiday design — 900ml insulated tumbler with handle, lid & straw.'
    }
  ];

  const [selectedProduct, setSelectedProduct] = useState<(typeof tumblrProducts)[number] | null>(null);

  return (
    <div className="min-h-screen bg-[#FFFBEB] font-sans antialiased text-gray-800">
      
      {/* 1. SCROLLING MARQUEE BANNER */}
      <div className="w-full bg-pink-700 py-2.5 text-white overflow-hidden whitespace-nowrap border-b border-pink-800 select-none">
        <div className="animate-scroll flex gap-8 items-center text-sm font-semibold tracking-wider uppercase">
          <span>✨ Delivery Across India 🇮🇳</span>
          <span>🎀 Order Via WhatsApp +91 89767 31508 📞</span>
          <span>🧸 Korean Kawaii Aesthetic Kids Collection 🎒</span>
          <span>🍼 Visit Our Shop at Mira Road, Mumbai 📍</span>
          <span>✨ Delivery Across India 🇮🇳</span>
          <span>🎀 Order Via WhatsApp +91 89767 31508 📞</span>
          <span>🧸 Korean Kawaii Aesthetic Kids Collection 🎒</span>
          <span>🍼 Visit Our Shop at Mira Road, Mumbai 📍</span>
        </div>
      </div>

      {/* 2. STICKY NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            
            {/* Logo */}
            <a href="#tumblrs" className="flex items-center space-x-2.5 group">
              <img
                src="/profile.jpg"
                alt="Nasreen Collection profile"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-pink-200 shadow-sm"
              />
              <span className="font-display text-xl sm:text-2xl font-bold tracking-tight text-pink-700 transition duration-300 group-hover:text-pink-800">
                Nasreen Collection
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#categories" className="font-medium text-gray-600 hover:text-pink-600 transition duration-200">
                Categories
              </a>
              <a href="#reels" className="font-medium text-gray-600 hover:text-pink-600 transition duration-200 flex items-center gap-1">
                Watch Reels <span className="text-xs bg-pink-100 text-pink-700 font-semibold px-2 py-0.5 rounded-full">New</span>
              </a>
              <a href="#why-us" className="font-medium text-gray-600 hover:text-pink-600 transition duration-200">
                Why Us
              </a>
              <a href="#find-us" className="font-medium text-gray-600 hover:text-pink-600 transition duration-200">
                Find Us
              </a>
              <a href="#faqs" className="font-medium text-gray-600 hover:text-pink-600 transition duration-200">
                FAQ
              </a>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <a 
                href={createWhatsAppLink("Hi! I'm visiting your website and want to explore your cute collection! 🧸")}
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center space-x-2 bg-pink-600 hover:bg-pink-700 text-white font-semibold px-5 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Chat to Order 🎀</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-pink-700 hover:bg-pink-50 rounded-lg transition duration-200"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden bg-white border-b border-pink-100 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-4">
                <a 
                  href="#categories" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block font-medium text-gray-600 hover:text-pink-600 py-2 border-b border-gray-50"
                >
                  Categories
                </a>
                <a 
                  href="#reels" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block font-medium text-gray-600 hover:text-pink-600 py-2 border-b border-gray-50"
                >
                  Watch Reels
                </a>
                <a 
                  href="#why-us" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block font-medium text-gray-600 hover:text-pink-600 py-2 border-b border-gray-50"
                >
                  Why Us
                </a>
                <a 
                  href="#find-us" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block font-medium text-gray-600 hover:text-pink-600 py-2 border-b border-gray-50"
                >
                  Find Us
                </a>
                <a 
                  href="#faqs" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block font-medium text-gray-600 hover:text-pink-600 py-2"
                >
                  FAQ
                </a>
                <a 
                  href={createWhatsAppLink("Hi! I am visiting your website and want to explore your collection! 🧸")}
                  target="_blank" 
                  rel="noreferrer"
                  className="w-full justify-center inline-flex items-center space-x-2 bg-pink-600 text-white font-semibold py-3 rounded-full shadow-md"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Chat on WhatsApp 🎀</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {currentPage === 'tumblr' ? (
        <div className="min-h-[calc(100vh-5rem)] bg-[#FFF6FB] py-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-pink-600 font-bold">Tumblr Collection</p>
                <h1 className="mt-3 text-2xl sm:text-3xl font-bold text-gray-900">Premium Tumblers</h1>
                <p className="mt-3 text-xs sm:text-sm text-gray-600 max-w-2xl">
                  Insulated stainless steel tumblers with a diamond-textured finish. Premium tumblers starting from ₹399.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setCurrentPage('home')}
                className="inline-flex items-center justify-center rounded-full border border-pink-200 bg-white px-5 py-3 text-sm font-semibold text-pink-700 shadow-sm transition hover:bg-pink-50"
              >
                Back to Home
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
              {tumblrProducts.map((product) => (
                <div
                  key={product.id}
                  onClick={() => setSelectedProduct(product)}
                  className="cursor-pointer rounded-3xl border border-pink-100 bg-white shadow-sm overflow-hidden transition hover:-translate-y-1 hover:shadow-md"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 sm:h-56 md:h-72 object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="p-4 sm:p-5">
                    <h2 className="text-sm sm:text-base font-semibold leading-snug text-gray-900 line-clamp-3">{product.title}</h2>
                    <p className="mt-2 text-xs sm:text-sm text-gray-600">{product.description}</p>
                    {product.volume && (
                      <p className="mt-1 text-xs sm:text-sm text-gray-500">Volume: {product.volume}</p>
                    )}
                    <p className="mt-4 text-lg sm:text-xl font-bold text-pink-600">{product.price}</p>
                    <a
                      href={createWhatsAppLink(`Hi! I want to order: ${product.title} - ${product.price}`)}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-pink-600 px-4 py-3 text-xs sm:text-sm font-semibold text-white transition hover:bg-pink-700"
                    >
                      Order on WhatsApp
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <>
          <section id="tumblrs" className="relative py-12 md:py-20 overflow-hidden bg-gradient-to-b from-white via-[#FFFDF5] to-[#FFFBEB]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                {/* Left Content */}
                <div className="lg:col-span-6 space-y-8 text-center lg:text-left">
                  <span className="inline-flex items-center gap-1.5 bg-pink-50 border border-pink-200 text-pink-700 text-sm font-semibold px-4 py-1.5 rounded-full shadow-sm">
                    <Sparkles className="w-4 h-4 fill-pink-100" />
                    Premium Korean Kawaii Goods Store
                  </span>
                  
                  <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
                    Cute gifts your <br className="hidden sm:inline" />
                    <span className="text-pink-600 relative">
                      little ones
                      <span className="absolute bottom-1 left-0 w-full h-2 bg-pink-100 -z-10 rounded"></span>
                    </span> will love 🎀
                  </h1>
                  
                  <p className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                    Discover a handpicked collection of adorable baby essentials, trendy Korean school bags, interactive toys, sparkling tumblers, and instant print cameras. We make gifting delightful and order placement effortless!
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <a 
                      href="#categories" 
                      className="inline-flex items-center justify-center bg-pink-600 hover:bg-pink-700 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 text-lg"
                    >
                      Shop Categories 🛍️
                    </a>
                    <a 
                      href={createWhatsAppLink("Hi Nasreen Collection! I want to order some cute items. Please guide me!")}
                      target="_blank" 
                      rel="noreferrer"
                      className="inline-flex items-center justify-center bg-white border-2 border-pink-200 text-pink-700 hover:border-pink-300 hover:bg-pink-50 font-semibold px-8 py-4 rounded-full shadow-md transition duration-200 text-lg gap-2"
                    >
                      <MessageCircle className="w-5 h-5 fill-current" />
                      <span>Order on WhatsApp 🎀</span>
                    </a>
                  </div>

                  {/* Stats Bar */}
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-pink-100">
                    <div className="text-center lg:text-left">
                      <p className="text-2xl sm:text-3xl font-display font-bold text-pink-700">1.5K+</p>
                      <p className="text-xs sm:text-sm text-gray-500 font-medium">Happy Families</p>
                    </div>
                    <div className="text-center lg:text-left">
                      <p className="text-2xl sm:text-3xl font-display font-bold text-pink-700">50+</p>
                      <p className="text-xs sm:text-sm text-gray-500 font-medium">Kawaii Items</p>
                    </div>
                    <div className="text-center lg:text-left">
                      <p className="text-2xl sm:text-3xl font-display font-bold text-pink-700">India</p>
                      <p className="text-xs sm:text-sm text-gray-500 font-medium">Delivery Across India</p>
                    </div>
                  </div>
                </div>

                {/* Right Composition Image */}
                <div className="lg:col-span-6 relative flex justify-center">
                  <div className="relative w-full max-w-[480px]">
                    <div className="absolute -top-6 -left-6 w-16 h-16 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
                    <div className="absolute -bottom-8 -right-6 w-24 h-24 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
                    <div className="relative bg-white p-4 rounded-3xl shadow-xl border border-pink-100 transform rotate-1 hover:rotate-0 transition-transform duration-300">
                      <img 
                        src={heroFlatLay} 
                        alt="Cute products composition flat lay" 
                        className="w-full aspect-square object-cover rounded-2xl"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute -bottom-4 -left-4 bg-white border border-pink-100 rounded-2xl p-3 shadow-lg flex items-center space-x-2">
                        <span className="text-2xl">🎁</span>
                        <div>
                          <p className="text-xs font-bold text-gray-900">Custom Gift Sets</p>
                          <p className="text-[10px] text-pink-600 font-medium">Curated with love</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* 4. SHOP BY CATEGORY GRID */}
          <section id="categories" className="py-12 md:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-2xl mx-auto mb-8 md:mb-16 space-y-2 md:space-y-3">
                <span className="text-pink-600 font-bold uppercase tracking-wider text-xs md:text-sm flex items-center justify-center gap-1">
                  <ShoppingBag className="w-4 h-4" /> Shop Our Boutique
                </span>
                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                  Browse Cute Categories 🎀
                </h2>
                <p className="text-sm md:text-base text-gray-500">
                  Tap any card to check pricing and order via WhatsApp!
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-8">
                {productCategories.map((category) => {
                  const isTumblrCategory = category.id === 'diamond-tumblers';

                  return isTumblrCategory ? (
                    <motion.button
                      key={category.id}
                      type="button"
                      onClick={() => setCurrentPage('tumblr')}
                      whileHover={{ y: -4 }}
                      className="category-card group relative rounded-2xl md:rounded-3xl overflow-hidden border border-pink-50 hover:border-pink-200 shadow-sm hover:shadow-md transition-all duration-300 bg-[#FDF2F8]"
                    >
                      <img
                        src={getCategoryImage(category.id, category.image)}
                        alt={category.name}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-2 right-2 md:top-3 md:right-3 bg-white/90 backdrop-blur-sm px-2 py-0.5 md:px-3 md:py-1 rounded-full text-[10px] md:text-xs font-bold text-pink-700 shadow-sm">
                        {category.startingPrice}+
                      </div>
                      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/75 via-black/25 to-transparent">
                        <div className="p-2.5 sm:p-3 md:p-4">
                          <h3 className="font-display font-bold text-white text-[11px] sm:text-sm md:text-base leading-tight line-clamp-2">
                            {category.emoji} {category.name}
                          </h3>
                          <p className="hidden md:block text-xs text-white/80 line-clamp-2 mt-1 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-16 transition-all duration-300 overflow-hidden">
                            {category.description}
                          </p>
                          <span className="mt-1.5 md:mt-2 inline-flex items-center gap-1 bg-pink-600/90 text-white font-bold text-[10px] md:text-xs py-1.5 px-2.5 md:py-2 md:px-3 rounded-lg md:rounded-xl md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                            <MessageCircle className="w-3 h-3 md:w-3.5 md:h-3.5 fill-current shrink-0" />
                            View Tumblers
                          </span>
                        </div>
                      </div>
                    </motion.button>
                  ) : (
                    <motion.a
                      key={category.id}
                      href={createWhatsAppLink(category.whatsAppText)}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ y: -4 }}
                      className="category-card group relative rounded-2xl md:rounded-3xl overflow-hidden border border-pink-50 hover:border-pink-200 shadow-sm hover:shadow-md transition-all duration-300 bg-[#FDF2F8]"
                    >
                      <img
                        src={getCategoryImage(category.id, category.image)}
                        alt={category.name}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-2 right-2 md:top-3 md:right-3 bg-white/90 backdrop-blur-sm px-2 py-0.5 md:px-3 md:py-1 rounded-full text-[10px] md:text-xs font-bold text-pink-700 shadow-sm">
                        {category.startingPrice}+
                      </div>
                      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/75 via-black/25 to-transparent">
                        <div className="p-2.5 sm:p-3 md:p-4">
                          <h3 className="font-display font-bold text-white text-[11px] sm:text-sm md:text-base leading-tight line-clamp-2">
                            {category.emoji} {category.name}
                          </h3>
                          <p className="hidden md:block text-xs text-white/80 line-clamp-2 mt-1 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-16 transition-all duration-300 overflow-hidden">
                            {category.description}
                          </p>
                          <span className="mt-1.5 md:mt-2 inline-flex items-center gap-1 bg-pink-600/90 text-white font-bold text-[10px] md:text-xs py-1.5 px-2.5 md:py-2 md:px-3 rounded-lg md:rounded-xl md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                            <MessageCircle className="w-3 h-3 md:w-3.5 md:h-3.5 fill-current shrink-0" />
                            Order
                          </span>
                        </div>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </section>
        </>
      )}

      {currentPage !== 'tumblr' && (
        <>
          {/* 5. WATCH OUR REELS SECTION */}
          <section id="reels" className="py-12 md:py-20 bg-[#FDF2F8]/60 border-y border-pink-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              <div className="text-center max-w-2xl mx-auto mb-8 md:mb-16 space-y-2 md:space-y-3">
                <span className="text-pink-600 font-bold uppercase tracking-wider text-xs md:text-sm flex items-center justify-center gap-1">
                  <Instagram className="w-4 h-4" /> Instagram Magic
                </span>
                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                  Watch Our Live Reels 🎬
                </h2>
                <p className="text-sm md:text-base text-gray-500 hidden sm:block">
                  See the lovely items in action! Hover a reel to order instantly via WhatsApp.
                </p>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center pt-4 md:pt-6">
              <button 
                onClick={() => setActiveTab('all')}
                className={`px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-bold border transition duration-200 ${
                  activeTab === 'all' 
                    ? 'bg-pink-600 text-white border-pink-600 shadow-sm' 
                    : 'bg-white text-gray-600 border-pink-200 hover:bg-pink-50'
                }`}
              >
                All ✨
              </button>
              <button 
                onClick={() => setActiveTab('bags')}
                className={`px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-bold border transition duration-200 ${
                  activeTab === 'bags' 
                    ? 'bg-pink-600 text-white border-pink-600 shadow-sm' 
                    : 'bg-white text-gray-600 border-pink-200 hover:bg-pink-50'
                }`}
              >
                Bags 🎒
              </button>
              <button 
                onClick={() => setActiveTab('toys')}
                className={`px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-bold border transition duration-200 ${
                  activeTab === 'toys' 
                    ? 'bg-pink-600 text-white border-pink-600 shadow-sm' 
                    : 'bg-white text-gray-600 border-pink-200 hover:bg-pink-50'
                }`}
              >
                Toys 🎮
              </button>
              <button 
                onClick={() => setActiveTab('lifestyle')}
                className={`px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-bold border transition duration-200 ${
                  activeTab === 'lifestyle' 
                    ? 'bg-pink-600 text-white border-pink-600 shadow-sm' 
                    : 'bg-white text-gray-600 border-pink-200 hover:bg-pink-50'
                }`}
              >
                Lifestyle 🍼
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredReels.map((reel) => (
              <div 
                key={reel.shortCode}
                className="bg-white rounded-3xl p-4 shadow-md border border-pink-100/50 flex flex-col h-full space-y-4"
              >
                {/* Embedded Instagram Iframe */}
                <div className="relative rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 flex-grow" style={{ minHeight: '440px' }}>
                  <iframe
                    src={`https://www.instagram.com/p/${reel.shortCode}/embed/`}
                    className="absolute inset-0 w-full h-full rounded-2xl border-0 shadow-inner"
                    scrolling="no"
                    allowTransparency={true}
                    frameBorder="0"
                    loading="lazy"
                  ></iframe>
                </div>

                {/* Info & CTA */}
                <div className="space-y-3 pt-2">
                  <h3 className="font-display font-bold text-gray-900">{reel.title}</h3>
                  <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">{reel.description}</p>
                  
                  <a 
                    href={createWhatsAppLink(reel.whatsAppText)}
                    target="_blank" 
                    rel="noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-4 rounded-xl transition duration-200 text-sm shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Order This Item 🎁</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

          {/* 6. TRUST STRIP */}
          <section id="why-us" className="bg-pink-700 py-16 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="flex flex-col items-center text-center space-y-3 p-4">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-3xl">
                🚚
              </div>
              <h3 className="font-display font-bold text-xl">Delivery Across India</h3>
              <p className="text-sm text-pink-100 leading-relaxed max-w-xs">
                We safely deliver all your lovely products anywhere in India with zero shipping costs.
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-3 p-4">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-3xl">
                💬
              </div>
              <h3 className="font-display font-bold text-xl">Easy WhatsApp Orders</h3>
              <p className="text-sm text-pink-100 leading-relaxed max-w-xs">
                Forget complex checkout processes! Just tap to order straight via WhatsApp.
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-3 p-4">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-3xl">
                ✨
              </div>
              <h3 className="font-display font-bold text-xl">Premium Quality Only</h3>
              <p className="text-sm text-pink-100 leading-relaxed max-w-xs">
                Every baby wear fabric, bag zipper, and toy material is audited for ultimate safety.
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-3 p-4">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-3xl">
                🏠
              </div>
              <h3 className="font-display font-bold text-xl">Walk-In Store</h3>
              <p className="text-sm text-pink-100 leading-relaxed max-w-xs">
                Located right in Poonam Complex 2, Mira Road. Stop by to say hello and view products!
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faqs" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          <div className="text-center mb-16 space-y-3">
            <span className="text-pink-600 font-bold uppercase tracking-wider text-sm flex items-center justify-center gap-1">
              <Compass className="w-4 h-4" /> Got Questions?
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900">
              Frequently Asked Questions 🎀
            </h2>
          </div>

          <div className="space-y-4">
            {storeFaqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="border border-pink-100 rounded-3xl bg-[#FFFBEB]/30 hover:bg-[#FFFBEB]/50 transition-colors duration-200 overflow-hidden"
              >
                <button
                  onClick={() => setFaqOpenIndex(faqOpenIndex === idx ? null : idx)}
                  className="w-full flex justify-between items-center px-6 py-5 text-left font-display font-bold text-gray-900 text-lg hover:text-pink-700 transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-pink-600 transition-transform duration-300 ${faqOpenIndex === idx ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {faqOpenIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-sm text-gray-600 leading-relaxed border-t border-pink-50/50 pt-3">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. FIND US SECTION */}
      <section id="find-us" className="py-20 bg-[#FFFBEB] border-t border-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Info panel */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <span className="text-pink-600 font-bold uppercase tracking-wider text-sm flex items-center gap-1">
                  <MapPin className="w-4 h-4" /> Our Physical Boutique
                </span>
                
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900">
                  Come Visit Us! 🎀
                </h2>
                
                <p className="text-gray-600 leading-relaxed">
                  We are conveniently located in Mira Road, Mumbai. Pop into our lovely physical shop to check out our latest arrivals and experience the kawaii products first hand!
                </p>

                {/* Details list */}
                <div className="space-y-4 pt-4">
                  <div className="flex items-start space-x-3.5">
                    <div className="w-10 h-10 rounded-full bg-pink-100 text-pink-700 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-gray-900 text-sm">Store Address</h4>
                      <p className="text-sm text-gray-600 mt-0.5 leading-relaxed">
                        Shop No. 8, Poonam Complex 2, Near Banegar School, Mira Road (East), Mumbai, Maharashtra - 401107
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3.5">
                    <div className="w-10 h-10 rounded-full bg-pink-100 text-pink-700 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-gray-900 text-sm">Phone / WhatsApp</h4>
                      <p className="text-sm text-gray-600 mt-0.5 font-semibold">
                        +91 89767 31508
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3.5">
                    <div className="w-10 h-10 rounded-full bg-pink-100 text-pink-700 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-gray-900 text-sm">Store Timings</h4>
                      <p className="text-sm text-gray-600 mt-0.5">
                        Open Daily: 11:00 AM - 10:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="bg-white border border-pink-100 rounded-3xl p-6 shadow-sm">
                <p className="text-sm font-semibold text-gray-900 flex items-center gap-1.5">
                  <Truck className="text-pink-600 w-5 h-5" />
                  Not in Mumbai? No worries!
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  We securely package and ship all items with all-India express delivery. Your cute packages will arrive safely!
                </p>
              </div>
            </div>

            {/* Google Maps Frame */}
            <div className="lg:col-span-7">
              <div className="w-full h-full min-h-[380px] bg-white p-4 rounded-3xl shadow-md border border-pink-100 flex overflow-hidden">
                <iframe
                  src={storeConfig.googleMapsEmbedUrl}
                  className="w-full h-full rounded-2xl border-0"
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Nasreen Collection Google Maps Location"
                ></iframe>
              </div>
            </div>

          </div>
        </div>
      </section>
        </>
      )}

      {/* 8. FOOTER */}
      <footer className="bg-white border-t border-pink-100 py-12 text-sm text-gray-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            
            {/* Logo and Brand */}
            <div className="flex items-center space-x-2.5">
              <span className="text-3xl">🧸</span>
              <div>
                <p className="font-display font-bold text-lg text-pink-700">Nasreen Collection</p>
                <p className="text-xs text-gray-400 mt-0.5">Cute clothing, bags, toys, & tumblers</p>
              </div>
            </div>

            {/* Quick social links */}
            <div className="flex space-x-6 items-center">
              <a 
                href={storeConfig.instagramUrl}
                target="_blank" 
                rel="noreferrer"
                className="w-11 h-11 rounded-full bg-pink-50 text-pink-700 hover:bg-pink-600 hover:text-white flex items-center justify-center transition duration-200"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href={createWhatsAppLink("Hi! I came from your website and want to connect! 🧸")}
                target="_blank" 
                rel="noreferrer"
                className="w-11 h-11 rounded-full bg-pink-50 text-pink-700 hover:bg-pink-600 hover:text-white flex items-center justify-center transition duration-200"
                aria-label="WhatsApp Store"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
              </a>
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p>© 2026 Nasreen Collection. All rights reserved.</p>
              <p className="text-xs text-gray-400 mt-1">Mira Road, Mumbai. Made for cute little ones.</p>
            </div>

          </div>
        </div>
      </footer>

      {/* FIXED BACK-TO-HOME BUTTON (TOP-LEFT) */}
      {showBackButton && (
        <button
          onClick={() => { setCurrentPage('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          aria-label="Back to Home"
          className="fixed top-4 left-4 z-50 inline-flex items-center justify-center bg-white/95 hover:bg-pink-50 text-pink-700 rounded-full p-3 shadow-lg transition-transform duration-200 hover:-translate-y-0.5 sm:top-5 sm:left-5 md:top-6 md:left-6"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
      )}

      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 px-4 py-6"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(event) => event.stopPropagation()}
              className="w-full max-w-2xl overflow-hidden rounded-[28px] bg-white shadow-2xl"
            >
              <div className="relative">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  className="h-auto max-h-[70vh] w-full object-contain"
                  referrerPolicy="no-referrer"
                />
                <button
                  type="button"
                  onClick={() => setSelectedProduct(null)}
                  className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-gray-700 shadow-md transition hover:bg-white"
                  aria-label="Close product view"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="space-y-4 p-5 sm:p-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-pink-600">Premium Tumbler</p>
                  <h3 className="mt-2 text-xl font-bold text-gray-900">{selectedProduct.title}</h3>
                </div>
                <p className="text-sm leading-6 text-gray-600">{selectedProduct.description}</p>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-pink-50 px-3 py-1 text-sm font-semibold text-pink-700">{selectedProduct.price}</span>
                  {selectedProduct.volume && (
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700">{selectedProduct.volume}</span>
                  )}
                </div>
                <a
                  href={createWhatsAppLink(`Hi! I want to order: ${selectedProduct.title} - ${selectedProduct.price}`)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-full bg-pink-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-pink-700"
                >
                  Contact to Order
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href={createWhatsAppLink("Hi Nasreen Collection! I want to chat about your cute products! 🧸")}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 text-white rounded-full p-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 group"
        aria-label="Contact on WhatsApp"
      >
        <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping -z-10"></span>
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.174.2-.298.3-.497.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12.001 0C5.372 0 0 5.372 0 12c0 2.102.546 4.087 1.5 5.823L0 24l6.347-1.668A11.94 11.94 0 0 0 12.001 24c6.629 0 12-5.372 12-12S18.63 0 12.001 0zm6.57 17.166c-.269.754-.987 1.34-1.74 1.56a9.22 9.22 0 0 1-4.321.925c-4.657 0-8.444-3.786-8.444-8.443 0-4.657 3.787-8.444 8.444-8.444 2.253 0 4.375.88 5.97 2.476a8.444 8.444 0 0 1 2.476 5.97c0 1.57-.49 3.085-1.42 4.356z"/>
        </svg>
        
        {/* Hover Label */}
        <span className="absolute right-14 bg-gray-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          Message Us Now 🎀
        </span>
      </a>

    </div>
  );
}
