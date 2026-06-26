import { useState, useEffect } from 'react';
import { 
  Truck, 
  Sparkles, 
  MapPin, 
  Phone, 
  ShoppingBag, 
  Instagram, 
  Menu, 
  X, 
  ExternalLink, 
  Clock, 
  MessageCircle, 
  Heart, 
  Gift, 
  Star, 
  ChevronDown,
  Compass,
  Smile
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Import local configuration and static content
import { storeConfig } from './config';
import { productCategories, trustFeatures, storeFaqs, storeStats } from './content';

// Import local premium assets
import heroFlatLay from './assets/images/shop-flat-lay.png';
import schoolBagImg from './assets/images/bag-korean.png';
import newbornClothesImg from './assets/images/baby-clothes.png';
import plushToyImg from './assets/images/plush-cat.png';

// Map generated images to categories
const getCategoryImage = (categoryId: string, fallbackUrl: string) => {
  switch (categoryId) {
    case 'school-bags':
      return schoolBagImg;
    case 'baby-clothes':
      return newbornClothesImg;
    case 'plush-toys':
      return plushToyImg;
    default:
      return fallbackUrl;
  }
};

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'all' | 'bags' | 'toys' | 'lifestyle'>('all');

  // Reels details extracted from real Instagram scrape
  const instagramReels = [
    {
      shortCode: "DYXAAQrtRka",
      title: "Korean Bags Collection 🎒",
      description: "Super aesthetic bags with plenty of pockets and cute accessories.",
      category: "bags",
      whatsAppText: "Hi! I saw your reel about the Korean School Bags (DYXAAQrtRka) and would love to order one!"
    },
    {
      shortCode: "DZKkFY4s1B5",
      title: "New Born Collection 🍼",
      description: "Organic soft-cotton coordinated babywear for newborns.",
      category: "lifestyle",
      whatsAppText: "Hi! I saw your reel about the Newborn Baby Clothes (DZKkFY4s1B5) and would love to order!"
    },
    {
      shortCode: "DX6rQoUtDzE",
      title: "Korean Kids Water Bottle 🍼",
      description: "BPA-free bottles with straws and temperature displays.",
      category: "lifestyle",
      whatsAppText: "Hi! I saw your reel about the Kids Bottles (DX6rQoUtDzE) and want to order!"
    },
    {
      shortCode: "DXon_nADKk1",
      title: "Diamond Textured Tumbler 💎",
      description: "Premium double-walled sparkling tumblers for stylish sips.",
      category: "lifestyle",
      whatsAppText: "Hi! I saw your reel about the Diamond Tumbler (DXon_nADKk1) and want to buy one!"
    },
    {
      shortCode: "DXZPtcejIvq",
      title: "Die Cast Bike Model 🏍️",
      description: "Realistic metal alloy collectibles for young bike enthusiasts.",
      category: "toys",
      whatsAppText: "Hi! I saw your reel about the Die-Cast Bike Model (DXZPtcejIvq) and want to order!"
    },
    {
      shortCode: "DVQu3yiDD2M",
      title: "Instant Print Kids Camera 📸",
      description: "Digital camera that prints thermal black-and-white photos instantly.",
      category: "toys",
      whatsAppText: "Hi! I saw your reel about the Instant Print Camera (DVQu3yiDD2M) and want to order one!"
    }
  ];

  // Helper for WhatsApp link creation
  const createWhatsAppLink = (text: string) => {
    return `https://wa.me/${storeConfig.whatsAppPhone}?text=${encodeURIComponent(text)}`;
  };

  const filteredReels = activeTab === 'all' 
    ? instagramReels 
    : instagramReels.filter(reel => reel.category === activeTab);

  return (
    <div className="min-h-screen bg-[#FFFBEB] font-sans antialiased text-gray-800">
      
      {/* 1. SCROLLING MARQUEE BANNER */}
      <div className="w-full bg-pink-700 py-2.5 text-white overflow-hidden whitespace-nowrap border-b border-pink-800 select-none">
        <div className="animate-scroll flex gap-8 items-center text-sm font-semibold tracking-wider uppercase">
          <span>✨ Free Shipping Across India 🇮🇳</span>
          <span>🎀 Order Via WhatsApp +91 89767 31508 📞</span>
          <span>🧸 Korean Kawaii Aesthetic Kids Collection 🎒</span>
          <span>🍼 Visit Our Shop at Mira Road, Mumbai 📍</span>
          <span>✨ Free Shipping Across India 🇮🇳</span>
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
            <a href="#home" className="flex items-center space-x-2.5 group">
              <span className="text-3xl filter drop-shadow">🧸</span>
              <span className="font-display text-2xl font-bold tracking-tight text-pink-700 transition duration-300 group-hover:text-pink-800">
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

      {/* 3. HERO SECTION */}
      <section id="home" className="relative py-12 md:py-20 overflow-hidden bg-gradient-to-b from-white via-[#FFFDF5] to-[#FFFBEB]">
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
                  <p className="text-2xl sm:text-3xl font-display font-bold text-pink-700">Free</p>
                  <p className="text-xs sm:text-sm text-gray-500 font-medium">All-India Delivery</p>
                </div>
              </div>
            </div>

            {/* Right Composition Image */}
            <div className="lg:col-span-6 relative flex justify-center">
              <div className="relative w-full max-w-[480px]">
                {/* Decorative Elements */}
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
                <div className="absolute -bottom-8 -right-6 w-24 h-24 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
                
                {/* Image Frame */}
                <div className="relative bg-white p-4 rounded-3xl shadow-xl border border-pink-100 transform rotate-1 hover:rotate-0 transition-transform duration-300">
                  <img 
                    src={heroFlatLay} 
                    alt="Cute products composition flat lay" 
                    className="w-full aspect-square object-cover rounded-2xl"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Floating Overlay Badge */}
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
      <section id="categories" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-pink-600 font-bold uppercase tracking-wider text-sm flex items-center justify-center gap-1">
              <ShoppingBag className="w-4 h-4" /> Shop Our Boutique
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900">
              Browse Cute Categories 🎀
            </h2>
            <p className="text-gray-500">
              Click on any product card below to check out pricing and order immediately via WhatsApp!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {productCategories.map((category) => (
              <motion.div
                key={category.id}
                whileHover={{ y: -6 }}
                className="bg-[#FFFBEB]/40 hover:bg-white rounded-3xl overflow-hidden border border-pink-50 hover:border-pink-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group h-full"
              >
                
                {/* Category Thumbnail */}
                <div className="relative overflow-hidden aspect-square bg-[#FDF2F8]">
                  <img 
                    src={getCategoryImage(category.id, category.image)} 
                    alt={category.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-pink-700 shadow-sm">
                    Starts {category.startingPrice}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-display font-bold text-lg text-gray-900 group-hover:text-pink-700 transition duration-200 flex items-center gap-1.5">
                      <span>{category.emoji}</span>
                      <span>{category.name}</span>
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {category.description}
                    </p>
                  </div>

                  {/* Order Button */}
                  <a 
                    href={createWhatsAppLink(category.whatsAppText)}
                    target="_blank" 
                    rel="noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-pink-50 hover:bg-pink-600 text-pink-700 hover:text-white font-bold py-3 px-4 rounded-2xl transition-all duration-200 border border-pink-100 hover:border-pink-600 text-sm shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Inquire / Order via WhatsApp</span>
                  </a>
                </div>

              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. WATCH OUR REELS SECTION */}
      <section id="reels" className="py-20 bg-[#FDF2F8]/60 border-y border-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-pink-600 font-bold uppercase tracking-wider text-sm flex items-center justify-center gap-1">
              <Instagram className="w-4 h-4" /> Instagram Magic
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900">
              Watch Our Live Reels 🎬
            </h2>
            <p className="text-gray-500">
              See the lovely items in action! Every reel is linked to a WhatsApp order button so you can secure yours instantly.
            </p>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 justify-center pt-6">
              <button 
                onClick={() => setActiveTab('all')}
                className={`px-5 py-2 rounded-full text-xs font-bold border transition duration-200 ${
                  activeTab === 'all' 
                    ? 'bg-pink-600 text-white border-pink-600 shadow-sm' 
                    : 'bg-white text-gray-600 border-pink-200 hover:bg-pink-50'
                }`}
              >
                All Videos ✨
              </button>
              <button 
                onClick={() => setActiveTab('bags')}
                className={`px-5 py-2 rounded-full text-xs font-bold border transition duration-200 ${
                  activeTab === 'bags' 
                    ? 'bg-pink-600 text-white border-pink-600 shadow-sm' 
                    : 'bg-white text-gray-600 border-pink-200 hover:bg-pink-50'
                }`}
              >
                Bags 🎒
              </button>
              <button 
                onClick={() => setActiveTab('toys')}
                className={`px-5 py-2 rounded-full text-xs font-bold border transition duration-200 ${
                  activeTab === 'toys' 
                    ? 'bg-pink-600 text-white border-pink-600 shadow-sm' 
                    : 'bg-white text-gray-600 border-pink-200 hover:bg-pink-50'
                }`}
              >
                Toys & Gadgets 🎮
              </button>
              <button 
                onClick={() => setActiveTab('lifestyle')}
                className={`px-5 py-2 rounded-full text-xs font-bold border transition duration-200 ${
                  activeTab === 'lifestyle' 
                    ? 'bg-pink-600 text-white border-pink-600 shadow-sm' 
                    : 'bg-white text-gray-600 border-pink-200 hover:bg-pink-50'
                }`}
              >
                Tumblers & Clothes 🍼
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
              <h3 className="font-display font-bold text-xl">Free Delivery Across India</h3>
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

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href={createWhatsAppLink("Hi Nasreen Collection! I want to chat about your cute products! 🧸")}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 text-white rounded-full p-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 group"
        aria-label="Contact on WhatsApp"
      >
        <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping -z-10"></span>
        <MessageCircle className="w-7 h-7 fill-current" />
        
        {/* Hover Label */}
        <span className="absolute right-14 bg-gray-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          Message Us Now 🎀
        </span>
      </a>

    </div>
  );
}
