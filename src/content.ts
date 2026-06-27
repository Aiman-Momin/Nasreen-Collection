import bagKoreanImg from './assets/images/bag-korean.png';
import keychainImg from './assets/images/keychain.png';
import tumblerImg from './assets/images/tumbler.png';
import babyClothesImg from './assets/images/baby-clothes.png';
import plushCatImg from './assets/images/plush-cat.png';
import kidsBottleImg from './assets/images/kids-bottle.png';
import catBagImg from './assets/images/cat-bag.png';
import bikeModelImg from './assets/images/bike-model.png';
import artSetsImg from './assets/images/post-15.jpg';
import pvpStationImg from './assets/images/post-04.jpg';
import instantPrintCameraImg from './assets/images/post-08.jpg';
import stitchBlindBoxImg from './assets/images/stitch .jpeg';

export interface ProductCategory {
  id: string;
  name: string;
  emoji: string;
  description: string;
  startingPrice: string;
  image: string;
  whatsAppText: string;
}

export const productCategories: ProductCategory[] = [
  {
    id: "school-bags",
    name: "Korean School Bags",
    emoji: "🎒",
    description: "Kawaii, multi-pocket, waterproof school bags with pastel shades and extra accessories.",
    startingPrice: "₹499",
    image: bagKoreanImg,
    whatsAppText: "Hi! I'm interested in the Korean School Bags 🎒"
  },
  {
    id: "soft-keychains",
    name: "Soft Keychains",
    emoji: "🧸",
    description: "Fluffy, adorable plush keychains featuring cute animals and cartoon characters.",
    startingPrice: "₹150",
    image: keychainImg,
    whatsAppText: "Hi! I'm interested in the Soft Keychains 🧸"
  },
  {
    id: "diamond-tumblers",
    name: "Diamond Tumblers",
    emoji: "💎",
    description: "Sparkling, diamond-textured leak-proof tumblers that keep drinks cold & stylish.",
    startingPrice: "₹599",
    image: tumblerImg,
    whatsAppText: "Hi! I'm interested in the Diamond Tumblers 💎"
  },
  {
    id: "baby-clothes",
    name: "Newborn Baby Clothes",
    emoji: "👶",
    description: "Ultra-soft cotton rompers, coordination sets, and accessories for sensitive newborn skin.",
    startingPrice: "₹350",
    image: babyClothesImg,
    whatsAppText: "Hi! I'm interested in the Newborn Baby Clothes 👶"
  },
  {
    id: "plush-toys",
    name: "Kawaii Plush Toys",
    emoji: "🐱",
    description: "Cozy penguin and fluffy ragdoll cat plushies made of premium huggable fabrics.",
    startingPrice: "₹290",
    image: plushCatImg,
    whatsAppText: "Hi! I'm interested in the Kawaii Plush Toys (Ragdoll & Penguin) 🐱🐧"
  },
  {
    id: "kids-bottles",
    name: "Kids Water Bottles",
    emoji: "🍼",
    description: "BPA-free adorable water bottles with straws, temperature display, and carry straps.",
    startingPrice: "₹250",
    image: kidsBottleImg,
    whatsAppText: "Hi! I'm interested in the Kids Water Bottles 🍼"
  },
  {
    id: "cat-bags",
    name: "Cat-Shaped Bags",
    emoji: "🐈",
    description: "Cute crossbody purse bags designed like a cat's face with fuzzy ears.",
    startingPrice: "₹399",
    image: catBagImg,
    whatsAppText: "Hi! I'm interested in the Cat-Shaped Bags 🐈"
  },
  {
    id: "diecast-models",
    name: "Die-Cast Bike & Car Models",
    emoji: "🚗",
    description: "High-quality, detailed 1:24 metal alloy replicas of sport bikes and supercars.",
    startingPrice: "₹699",
    image: bikeModelImg,
    whatsAppText: "Hi! I'm interested in the Die-Cast Bike & Car Models 🚗"
  },
  {
    id: "gaming-consoles",
    name: "PVP Station Games",
    emoji: "🎮",
    description: "Retro handheld PVP station-style game consoles preloaded with hundreds of classics.",
    startingPrice: "₹699",
    image: pvpStationImg,
    whatsAppText: "Hi! I'm interested in the PVP Station Games 🎮"
  },
  {
    id: "art-sets",
    name: "Art Sets for Kids",
    emoji: "🎨",
    description: "Deluxe coloring and drawing art cases filled with vibrant markers, crayons, and paints.",
    startingPrice: "₹450",
    image: artSetsImg,
    whatsAppText: "Hi! I'm interested in the Art Sets for Kids 🎨"
  },
  {
    id: "stitch-boxes",
    name: "Stitch Blind Boxes",
    emoji: "📦",
    description: "Exciting mystery boxes containing collectible Lilo & Stitch figures and desk toys.",
    startingPrice: "₹350",
    image: stitchBlindBoxImg,
    whatsAppText: "Hi! I'm interested in the Stitch Blind Boxes 📦"
  },
  {
    id: "print-cameras",
    name: "Instant Print Kids Cameras",
    emoji: "📸",
    description: "Cute digital cameras that instantly print thermal photos of kids' adventures.",
    startingPrice: "₹1200",
    image: instantPrintCameraImg,
    whatsAppText: "Hi! I'm interested in the Instant Print Kids Cameras 📸"
  }
];

export const trustFeatures = [
  {
    title: "Delivery Across India",
    description: "Get cute items delivered to your doorstep.",
    icon: "Truck"
  },
  {
    title: "Easy WhatsApp Orders",
    description: "Just click any product or reel to message us and place your order in 30 seconds.",
    icon: "MessageSquareHeart"
  },
  {
    title: "Premium Quality Guaranteed",
    description: "Carefully sourced products with premium finishes and child-safe materials.",
    icon: "Sparkles"
  },
  {
    title: "Walk-In Welcome",
    description: "Visit our cozy boutique in Mira Road, Mumbai to touch and see our full collection.",
    icon: "MapPin"
  }
];

export const storeFaqs = [
  {
    question: "How do I place an order?",
    answer: "Ordering is incredibly simple! Scroll through our catalog, click on any product category or Instagram Reel that you love, and it will open a pre-filled WhatsApp message directly to our store. We will confirm availability and share payment options."
  },
  {
    question: "Do you deliver all over India?",
    answer: "Yes, we ship across all states and cities in India!"
  },
  {
    question: "Where is your physical shop located?",
    answer: "We are located at Shop No. 8, Poonam Complex 2, Near Banegar School, Mira Road (East), Mumbai. If you live nearby, feel free to visit us to check out the products in person."
  },
  {
    question: "Can I choose specific items from blind boxes or gift sets?",
    answer: "Yes! Simply message us on WhatsApp with screenshots of the specific colors or characters you prefer, and we will do our absolute best to accommodate your choices depending on our stock."
  }
];

export const storeStats = {
  customers: "1.5K+ Happy Families",
  products: "50+ Kawaii Items",
  shipping: "All-India Delivery 🇮🇳"
};
