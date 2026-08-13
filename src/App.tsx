import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  MessageCircle,
  Menu,
  X,
  Sparkles,
  ShoppingBag,
  Instagram,
  MapPin,
  Phone,
  Clock,
  Truck,
  Compass,
  ChevronDown,
  ArrowLeft
} from 'lucide-react';
import heroFlatLay from './assets/images/shop-flat-lay.png';
import { productCategories, storeFaqs } from './content';
import { storeConfig } from './config';

type ProductCardItem = {
  id: string;
  title: string;
  image: string;
  price: string;
  volume?: string;
  description: string;
};

const createWhatsAppLink = (text: string) =>
  `https://api.whatsapp.com/send?phone=${storeConfig.whatsAppPhone}&text=${encodeURIComponent(
    text
  )}`;

const getCategoryImage = (_id: string, image: any) => {
  return typeof image === 'string' ? image : (image as any);
};

class ErrorBoundary extends React.Component<{}, { error: Error | null }> {
  constructor(props: {}) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  componentDidCatch(error: Error, info: any) {
    // eslint-disable-next-line no-console
    console.error('ErrorBoundary caught:', error, info);
  }

  render() {
    if (this.state.error) {
      return (
        <div style={{ padding: 24, fontFamily: 'Inter, sans-serif' }}>
          <h2 style={{ color: '#BE185D' }}>Application Error</h2>
          <pre style={{ whiteSpace: 'pre-wrap', background: '#fff', padding: 12, borderRadius: 8, border: '1px solid #f0e7ed' }}>
            {String(this.state.error && this.state.error.stack ? this.state.error.stack : this.state.error)}
          </pre>
          <p>Please paste the error shown here into the chat and I'll fix it.</p>
        </div>
      );
    }
    // @ts-ignore
    return this.props.children;
  }
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'tumblr' | 'plush' | 'makeup' | 'fun' | 'camera' | 'diecast' | 'gaming' | 'diaries' | 'keychains'>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(null);
  const [showBackButton, setShowBackButton] = useState(true);

  useEffect(() => {
    // Quick runtime log to help diagnose white screen issues in browser console
    // Refresh the page and check DevTools Console for this message.
    // It will confirm whether the App component mounted.
    // Remove after debugging.
    // eslint-disable-next-line no-console
    console.log('App component initializing');
  }, []);

  


  const keychainProducts: ProductCardItem[] = [
    {
      id: 'kuromi-bag-charm',
      title: 'Kuromi Bag Charm & Keychain Set',
      image: '/kuromi bag charm and keychain.png',
      price: '₹199',
      volume: '',
      description: 'Cute Kuromi-themed accessory set designed for backpacks, bags, and keys.'
    },
    {
      id: 'panda-bag-charm',
      title: 'Panda Bag Charm & Keychain Set',
      image: '/panda keychain and bagcharm.png',
      price: '₹199',
      volume: '',
      description: 'A soft, playful panda accessory set for a charming everyday finish.'
    },
    {
      id: 'teddy-bear-bag-charm',
      title: 'Teddy Bear Bag Charm & Keychain Set',
      image: '/teddy bear bag charm and keychain.png',
      price: '₹199',
      volume: '',
      description: 'Classic teddy bear styling in a compact bag accessory set.'
    },
    {
      id: 'brown-bunny-charm',
      title: 'Brown Bunny Bag Charm & Keychain Set',
      image: '/brown bunny bagcharm and keychain.png',
      price: '₹199',
      volume: '',
      description: 'A warm-toned bunny charm set that adds a sweet, collectible touch.'
    },
    {
      id: 'pink-bunny-charm',
      title: 'Pink Bunny Bag Charm & Keychain Set',
      image: '/pink bunny bagcharm and keychain.png',
      price: '₹199',
      volume: '',
      description: 'Pastel pink bunny design made for stylish, adorable bag details.'
    },
    {
      id: 'bunny-in-dress-charm',
      title: 'Bunny in Dress Bag Charm & Keychain Set',
      image: '/bunny in dress bagcharm and keychain.png',
      price: '₹199',
      volume: '',
      description: 'A dress-wearing bunny accessory set with a whimsical look.'
    },
    {
      id: 'elephant-bag-charm',
      title: 'Elephant Bag Charm & Keychain Set',
      image: '/elephant bagcharm and keychain.png',
      price: '₹199',
      volume: '',
      description: 'A cuddly elephant charm set for bags, backpacks, and keyrings.'
    },
    {
      id: 'lion-bag-charm',
      title: 'Lion Bag Charm & Keychain Set',
      image: '/lion bag charm and keychain.png',
      price: '₹199',
      volume: '',
      description: 'Bold lion-inspired accessory set with playful character detailing.'
    },
    {
      id: 'orange-lion-bag-charm',
      title: 'Orange Lion Bag Charm & Keychain Set',
      image: '/orange lion keychain and bagcharm.png',
      price: '₹199',
      volume: '',
      description: 'Bright orange lion design for a lively, standout accessory look.'
    },
    {
      id: 'alpaca-bag-charm',
      title: 'Alpaca Bag Charm & Keychain Set',
      image: '/alpaca bagcharm and keychain.png',
      price: '₹199',
      volume: '',
      description: 'A soft alpaca-themed accessory set with a cute, collectible appeal.'
    },
    {
      id: 'blue-dog-bag-charm',
      title: 'Blue Dog Bag Charm & Keychain Set',
      image: '/blue dog bag charm and key chain.png',
      price: '₹199',
      volume: '',
      description: 'Blue dog design crafted for a playful, cheerful finish to everyday bags.'
    },
    {
      id: 'camel-bag-charm',
      title: 'Camel Bag Charm & Keychain Set',
      image: '/camel bag charm and keychain.png',
      price: '₹199',
      volume: '',
      description: 'A charming camel design with a polished yet cute accessory look.'
    },
    {
      id: 'ginger-cat-bag-charm',
      title: 'Ginger Cat Bag Charm & Keychain Set',
      image: '/ginger cat bagcharm and keychain.png',
      price: '₹199',
      volume: '',
      description: 'Ginger cat inspired charm set with a warm and adorable personality.'
    },
    {
      id: 'lamb-bag-charm',
      title: 'Lamb Bag Charm & Keychain Set',
      image: '/lamb bagcharm and keychain.png',
      price: '₹199',
      volume: '',
      description: 'Cute lamb-inspired charm set for a soft, sweet accessory statement.'
    },
    {
      id: 'penguin-bag-charm',
      title: 'Penguin Bag Charm & Keychain Set',
      image: '/penguin bagcharm and keychain.png',
      price: '₹199',
      volume: '',
      description: 'A playful penguin accessory set that adds personality to any bag.'
    },
    {
      id: 'fluffy-sheep-bag-charm',
      title: 'Fluffy Sheep Bag Charm & Keychain Set',
      image: '/fluffy sheep bagcharm and keychain.png',
      price: '₹199',
      volume: '',
      description: 'A soft, fluffy sheep accessory set with a boutique charm aesthetic.'
    },
    {
      id: 'bunny-with-bag-charm',
      title: 'Bunny with Bag Bag Charm & Keychain Set',
      image: '/bunny with bag bagcharm and keychain.png',
      price: '₹199',
      volume: '',
      description: 'A cheerful bunny accessory featuring a tiny bag silhouette and playful charm.'
    },
    {
      id: 'bunny-with-cap-charm',
      title: 'Bunny with Cap Bag Charm & Keychain Set',
      image: '/bunny with cap bagcharm and keychain.png',
      price: '₹199',
      volume: '',
      description: 'Bright and friendly bunny design with a cap detail for extra character.'
    },
    {
      id: 'two-in-one-panda-squirrel-charm',
      title: 'Two-in-One Panda & Squirrel Bag Charm & Keychain Set',
      image: '/Two-in-one panda and squirrel keychain and bagcharm.png',
      price: '₹199',
      volume: '',
      description: 'A playful two-in-one character accessory set featuring a panda and squirrel theme.'
    },
    {
      id: 'spiderman-face-changer-keychain',
      title: 'Spiderman Face Changer Keychain',
      image: '/spiderman face changer keychain.png',
      price: '₹99',
      volume: '',
      description: 'Fun Spider-Man face-changer keychain with a playful character twist.'
    },
    {
      id: 'spiderwoman-face-changer-keychain',
      title: 'Spider-Woman Face Changer Keychain',
      image: '/spiderwoman face changer keychain.png',
      price: '₹99',
      volume: '',
      description: 'Cute Spider-Woman face-changer keychain in a fun, collectible style.'
    },
    {
      id: 'chu-chu-grey-hammer-keychain',
      title: 'Chu-Chu Grey Hammer Keychain',
      image: '/chu chu grey cartoon hammer keychain.png',
      price: '₹149',
      volume: '',
      description: 'Grey Chu-Chu cartoon hammer keychain with a cute, collectible finish.'
    },
    {
      id: 'chu-chu-orange-hammer-keychain',
      title: 'Chu-Chu Orange Hammer Keychain',
      image: '/Chu-Chu orange cartoon hammer keychain.png',
      price: '₹149',
      volume: '',
      description: 'Orange Chu-Chu cartoon hammer keychain designed for a playful accessory look.'
    },
    {
      id: 'hello-kitty-hammer-keychain',
      title: 'Hello Kitty Hammer Keychain',
      image: '/hello kitty hammer keychain.png',
      price: '₹149',
      volume: '',
      description: 'Hello Kitty-themed hammer keychain with a cute and charming personality.'
    },
    {
      id: 'ice-cream-bear-keychain',
      title: 'Ice Cream Bear Keychain',
      image: '/ice cream bear keychain.png',
      price: '₹149',
      volume: '',
      description: 'Sweet ice cream bear keychain with a fun, soft pastel aesthetic.'
    },
    {
      id: 'pink-ice-cream-cone-keychain',
      title: 'Pink Ice Cream Cone Keychain',
      image: '/pink icecream cone keychain.jpg',
      price: '₹149',
      volume: '',
      description: 'Pastel pink ice cream cone keychain for a cheerful, dreamy finish.'
    },
    {
      id: 'super-mario-hammer-keychain',
      title: 'Super Mario Hammer Keychain',
      image: '/super mario hammer keychain.png',
      price: '₹149',
      volume: '',
      description: 'Classic Super Mario-inspired hammer keychain for a playful gaming vibe.'
    }
  ];

  const makeupProducts: ProductCardItem[] = [
    {
      id: 'barbie-makeup-kit',
      title: 'Barbie Makeup Kit',
      image: '/barbie makeup kit.png',
      price: '₹1050',
      volume: '',
      description: 'Fashion girls organic Barbie makeup kit.'
    },
    {
      id: 'airel-makeup-kit',
      title: 'Ariel Makeup Kit',
      image: '/airel makeup kit.jpg',
      price: '₹649',
      volume: '',
      description: 'Fashion girls organic Ariel makeup kit.'
    },
    {
      id: 'unicorn-makeup-kit',
      title: 'Unicorn Makeup Kit',
      image: '/unicorn makeup kit.jpg',
      price: '₹349',
      volume: '',
      description: 'Fashion girls organic Unicorn makeup kit.'
    },
    {
      id: 'frozen-makeup-kit',
      title: 'Frozen Makeup Kit',
      image: '/frozen makeup kit.png',
      price: '₹999',
      volume: '',
      description: 'Fashion girls organic Frozen makeup kit.'
    },
    {
      id: 'kpop-makeup-kit',
      title: 'K-pop Makeup Kit',
      image: '/kpop makeup kit.jpg',
      price: '₹749',
      volume: '',
      description: 'K-pop makeup set, Beauty Girl Best Friend Set, designed for kids.'
    },
    {
      id: 'white-pearl-necklace-set',
      title: 'White Pearl Necklace Set',
      image: '/white pearl necklace kit.jpeg',
      price: '₹199',
      volume: '',
      description: 'This set includes a hidden pearl and a heart-shaped caged pendant for gifts.'
    }
  ];

  const tumblrProducts: ProductCardItem[] = [
    {
      id: 'black',
      title: 'Black Insulated Stainless Steel Tumbler – 1200ml',
      image: '/black tumblr.png',
      price: '₹399',
      volume: '1200ml',
      description: 'Black — insulated stainless steel tumbler with sleek matte finish.'
    },
    {
      id: 'offwhite',
      title: 'Offwhite Insulated Stainless Steel Tumbler – 1200ml',
      image: '/Offwhite tumblr.png',
      price: '₹399',
      volume: '1200ml',
      description: 'Offwhite — insulated stainless steel tumbler with soft-touch finish.'
    },
    {
      id: 'light-blue',
      title: 'Light Blue Insulated Stainless Steel Tumbler – 1200ml',
      image: '/Light blue tumblr.jpg',
      price: '₹399',
      volume: '1200ml',
      description: 'Light blue — insulated stainless steel tumbler with glossy color.'
    },
    {
      id: 'navy-blue',
      title: 'Navy Blue Insulated Stainless Steel Tumbler – 1200ml',
      image: '/Navy blue tumblr.png',
      price: '₹399',
      volume: '1200ml',
      description: 'Navy blue — insulated stainless steel tumbler with premium finish.'
    },
    {
      id: 'neon-blue',
      title: 'Neon Blue Insulated Stainless Steel Tumbler – 1200ml',
      image: '/neon blue tumblr.png',
      price: '₹399',
      volume: '1200ml',
      description: 'Neon blue — insulated stainless steel tumbler with bold design.'
    },
    {
      id: 'red',
      title: 'Red Insulated Stainless Steel Tumbler – 1200ml',
      image: '/red tumblr.png',
      price: '₹399',
      volume: '1200ml',
      description: 'Red — insulated stainless steel tumbler with non-slip base.'
    },
    {
      id: 'blue-floral',
      title: 'Blue Floral Insulated Stainless Steel Tumbler – 1200ml',
      image: '/Blue floral tumblr.png',
      price: '₹599',
      volume: '1200ml',
      description: 'Blue floral pattern — insulated stainless steel tumbler with handle & straw.'
    },
    {
      id: 'purple-floral',
      title: 'Purple Floral Insulated Stainless Steel Tumbler – 1200ml',
      image: '/Purple floral tumblr.png',
      price: '₹599',
      volume: '1200ml',
      description: 'Purple floral pattern — insulated stainless steel tumbler with handle & straw.'
    },
    {
      id: 'holiday-waterbottle',
      title: 'Holiday Insulated Waterbottle – 900ml',
      image: '/Holiday tumblr waterbottle.png',
      price: '₹599',
      volume: '',
      description: 'Holiday design — insulated stainless steel water bottle with handle, lid & straw.'
    },
    {
      id: 'insulated-holiday',
      title: 'Insulated Holiday Waterbottle – 900ml',
      image: '/Insulated Holiday Tumblr.png',
      price: '₹599',
      volume: '',
      description: 'Holiday style — insulated stainless steel water bottle with handle & straw.'
    },
    {
      id: 'pink-pinterest-daisy',
      title: 'Pink Daisy Insulated Waterbottle – 900ml',
      image: '/Pink Pinteresty Daisy tumblr.png',
      price: '₹599',
      volume: '',
      description: 'Pink daisy pattern — insulated stainless steel tumbler with handle & straw.'
    },
    {
      id: 'purple-pinterest-daisy',
      title: 'Purple Daisy Insulated Waterbottle – 900ml',
      image: '/Pruple Pinteresty Daisy Tumblr.png',
      price: '₹599',
      volume: '',
      description: 'Purple daisy pattern — insulated stainless steel tumbler with handle & straw.'
    },
    {
      id: 'pink-holiday',
      title: 'Pink Holiday Insulated Waterbottle – 900ml',
      image: '/Pink holiday tumblr waterbottle.png',
      price: '₹599',
      volume: '',
      description: 'Pink holiday design — insulated stainless steel water bottle with lid & straw.'
    },
    {
      id: 'black-gucci-stanley',
      title: 'Black Gucci & Stanley Style Insulated Tumbler – 1200ml',
      image: '/black gucci&stanley tumblr.png',
      price: '₹850',
      volume: '1200ml',
      description: 'Black Gucci and Stanley inspired insulated stainless steel tumbler with luxe print.'
    },
    {
      id: 'blue-gucci-stanley',
      title: 'Blue Gucci & Stanley Style Insulated Tumbler – 1200ml',
      image: '/blue gucci&stanley tumblr.png',
      price: '₹899',
      volume: '1200ml',
      description: 'Blue Gucci and Stanley inspired insulated stainless steel tumbler with premium style.'
    },
    {
      id: 'black-golden-sleek',
      title: 'Black with Golden Sleek Accent Insulated Tumbler – 1200ml',
      image: '/black with golden sleek tumblr.png',
      price: '₹550',
      volume: '1200ml',
      description: 'Black tumbler with golden sleek accent — insulated stainless steel with elegant style.'
    },
    {
      id: 'blue-diamond',
      title: 'Blue Diamond Insulated Stainless Steel Tumbler – 1200ml',
      image: '/blue diamond tumblr.jpg',
      price: '₹599',
      volume: '1200ml',
      description: 'Blue diamond texture — insulated stainless steel tumbler with premium finish.'
    },
    {
      id: 'green-diamond',
      title: 'Green Diamond Insulated Stainless Steel Tumbler – 1200ml',
      image: '/green diamond tumblr.jpg',
      price: '₹599',
      volume: '1200ml',
      description: 'Green diamond texture — insulated stainless steel tumbler with sparkling style.'
    },
    {
      id: 'pink-diamond',
      title: 'Pink Diamond Insulated Stainless Steel Tumbler – 1200ml',
      image: '/pink diamond tumblr.jpg',
      price: '₹599',
      volume: '1200ml',
      description: 'Pink diamond texture — insulated stainless steel tumbler with stylish shine.'
    },
    {
      id: 'purple-diamond',
      title: 'Purple Diamond Insulated Stainless Steel Tumbler – 1200ml',
      image: '/purple diamond tumblr.png',
      price: '₹599',
      volume: '1200ml',
      description: 'Purple diamond texture — insulated stainless steel tumbler with premium finish.'
    },
    {
      id: 'blue-watercolor',
      title: 'Blue Watercolor Insulated Stainless Steel Tumbler – 1200ml',
      image: '/blue watercolor tumblr.png',
      price: '₹550',
      volume: '1200ml',
      description: 'Blue watercolor design — insulated stainless steel tumbler with artistic finish.'
    },
    {
      id: 'football-blue-handle',
      title: 'Football Insulated Stainless Steel Tumbler – 1200ml (Blue Handle)',
      image: '/football tumblr(blue handle).png',
      price: '₹599',
      volume: '1200ml',
      description: 'Football print — insulated stainless steel tumbler with blue handle.'
    },
    {
      id: 'football-white-handle',
      title: 'Football Insulated Stainless Steel Tumbler – 1200ml (White Handle)',
      image: '/football tumblr(white handle).png',
      price: '₹599',
      volume: '1200ml',
      description: 'Football print — insulated stainless steel tumbler with white handle.'
    },
    {
      id: 'hello-kitty',
      title: 'Hello Kitty Insulated Stainless Steel Tumbler – 1200ml',
      image: '/Hello kitty tumblr.png',
      price: '₹599',
      volume: '1200ml',
      description: 'Hello Kitty design — insulated stainless steel tumbler with cute character print.'
    },
    {
      id: 'light-blue-500ml',
      title: 'Light Blue Insulated Stainless Steel Tumbler – 500ml',
      image: '/light blue 500ml tumblr.png',
      price: '₹450',
      volume: '500ml',
      description: 'Light blue — compact insulated stainless steel tumbler with handle and lid.'
    },
    {
      id: 'pink-500ml',
      title: 'Pink Insulated Stainless Steel Tumbler – 500ml',
      image: '/pink 500ml tumblr.png',
      price: '₹450',
      volume: '500ml',
      description: 'Pink — compact insulated stainless steel tumbler with handle and lid.'
    },
    {
      id: 'purple-500ml',
      title: 'Purple Insulated Stainless Steel Tumbler – 500ml',
      image: '/purple 500 ml tumblr.png',
      price: '₹450',
      volume: '500ml',
      description: 'Purple — compact insulated stainless steel tumbler with handle and lid.'
    },
    {
      id: 'limited-edition-barbie-stanley',
      title: 'Limited Edition Barbie Stanley Style Insulated Tumbler – 1200ml',
      image: '/limited edition barbie stanley tumblr.png',
      price: '₹900',
      volume: '1200ml',
      description: 'Limited edition Barbie Stanley inspired insulated stainless steel tumbler with luxe print.'
    },
    {
      id: 'magic-dream-unicorn',
      title: 'Magic Dream Unicorn Insulated Stainless Steel Tumbler – 1200ml',
      image: '/magic dream unicorn tumblr.png',
      price: '₹599',
      volume: '1200ml',
      description: 'Unicorn fantasy — insulated stainless steel tumbler with dreamy unicorn artwork.'
    },
    {
      id: 'spiderman',
      title: 'Spiderman Insulated Stainless Steel Tumbler – 1200ml',
      image: '/spiderman tumblr.jpg',
      price: '₹599',
      volume: '1200ml',
      description: 'Spiderman design — insulated stainless steel tumbler with bold superhero print.'
    },
    {
      id: 'stanley-quencher-flowstate',
      title: 'Stanley Quencher Flowstate Insulated Tumbler – 1200ml',
      image: '/stanley quencher flowstate tumblr.png',
      price: '₹599',
      volume: '1200ml',
      description: 'Stanley Quencher style — insulated stainless steel tumbler with flowstate design.'
    },
    {
      id: 'tri-color',
      title: 'Tri-Color Pastel Insulated Stainless Steel Tumbler – 1200ml',
      image: '/tri-color (blue, prink and purple design) tumblr.png',
      price: '₹850',
      volume: '1200ml',
      description: 'Tri-color pastel design — insulated stainless steel tumbler with playful finish.'
    },
    {
      id: 'neon-pink',
      title: 'Neon Pink Insulated Stainless Steel Tumbler – 1200ml',
      image: '/Neon Pink tumblr.png',
      price: '₹550',
      volume: '1200ml',
      description: 'Neon pink — insulated stainless steel tumbler with bright statement finish.'
    },
    {
      id: 'light-blue-stanley-ribbed',
      title: 'Light Blue Stanley Ribbed Tumbler – 1200ml',
      image: '/light blue stanley ribbed.jpeg',
      price: '₹799',
      volume: '1200ml',
      description: 'This is a stainless steel vacuum insulated tumbler with a light blue ribbed finish. 1200 ml.'
    },
    {
      id: 'light-pink-stanley-ribbed',
      title: 'Light Pink Stanley Ribbed Tumbler – 1200ml',
      image: '/light pink stanley ribbed.jpeg',
      price: '₹799',
      volume: '1200ml',
      description: 'This is a stainless steel vacuum insulated tumbler with a light pink ribbed finish. 1200 ml.'
    },
    {
      id: 'black-stanley-ribbed',
      title: 'Black Stanley Ribbed Tumbler – 1200ml',
      image: '/black stanley ribbed.jpeg',
      price: '₹799',
      volume: '1200ml',
      description: 'This is a stainless steel vacuum insulated tumbler with a black ribbed finish. 1200 ml.'
    },
    {
      id: 'offwhite-stanley-ribbed',
      title: 'Off-White Stanley Ribbed Tumbler – 1200ml',
      image: '/offwhite stanley ribbed.jpeg',
      price: '₹799',
      volume: '1200ml',
      description: 'This is a stainless steel vacuum insulated tumbler with an off-white ribbed finish. 1200 ml.'
    },
    {
      id: 'dark-blue-stanley',
      title: 'Dark Blue Stanley Tumbler – 1200ml',
      image: '/dark blue stanley.jpeg',
      price: '₹599',
      volume: '1200ml',
      description: 'This is a dark blue Stanley tumbler featuring a 40 oz capacity. It is constructed from recycled stainless steel with vacuum insulation and designed to keep drinks cold for hours. 1200 ml.'
    },
    {
      id: 'offwhite-stanley',
      title: 'Off-White Stanley Tumbler – 1200ml',
      image: '/offwhite stanley.jpeg',
      price: '₹599',
      volume: '1200ml',
      description: 'This is an off-white Stanley tumbler featuring a 40 oz capacity. It is constructed from recycled stainless steel with vacuum insulation and designed to keep drinks cold for hours. 1200 ml.'
    },
    {
      id: 'light-purple-stanley',
      title: 'Light Purple Stanley Tumbler – 1200ml',
      image: '/light purple stanley.jpeg',
      price: '₹599',
      volume: '1200ml',
      description: 'This is a light purple Stanley tumbler featuring a 40 oz capacity. It is constructed from recycled stainless steel with vacuum insulation and designed to keep drinks cold for hours. 1200 ml.'
    },
    {
      id: 'dark-pink-stanley',
      title: 'Dark Pink Stanley Tumbler – 1200ml',
      image: '/dark pink stanley.jpeg',
      price: '₹599',
      volume: '1200ml',
      description: 'This is a dark pink Stanley tumbler featuring a 40 oz capacity. It is constructed from recycled stainless steel with vacuum insulation and designed to keep drinks cold for hours. 1200 ml.'
    },
    {
      id: 'pink-roses-stanley',
      title: 'Pink Roses Stanley Tumbler – 1200ml',
      image: '/pink roses stanley.jpeg',
      price: '₹850',
      volume: '1200ml',
      description: 'Stanley x Love Shack Fancy Ice Flow Floral. This insulated stainless steel tumbler features double vacuum insulation and a sturdy handle. 1200 ml.'
    },
    {
      id: 'floral-stanley-with-handle',
      title: 'Floral Stanley With Handle – 1200ml',
      image: '/floral stanley with handle.jpeg',
      price: '₹850',
      volume: '1200ml',
      description: 'Stanley x Love Shack Fancy Ice Floral pattern with stainless steel, designed to keep drinks cold for hours, with a sturdy handle. 1200 ml.'
    },
    {
      id: 'black-and-silver-stanley',
      title: 'Black and Silver Stanley Tumbler – 1200ml',
      image: '/black and silver stanley.jpeg',
      price: '₹999',
      volume: '1200ml',
      description: 'This is a Stanley Quencher Tumbler featuring a customized design inspired by Taylor Swift\'s Reputation album. 1200 ml.'
    },
    {
      id: 'skin-color-stanley',
      title: 'Skin Color Stanley Tumbler – 1200ml',
      image: '/skin color stanley.jpeg',
      price: '₹999',
      volume: '1200ml',
      description: 'This is a Stanley Tumbler featuring Taylor Swift Reputation-themed fan art. 1200 ml.'
    },
    {
      id: 'pink-floral-stanley',
      title: 'Pink Floral Stanley Tumbler – 1200ml',
      image: '/pink floral stanley.jpeg',
      price: '₹1050',
      volume: '1200ml',
      description: 'This is a Stanley Quencher Tumbler from the Love Shack Fancy collaboration. It is designed to keep drinks cold for hours and is 1200 ml.'
    },
    {
      id: 'brown-gucci-stanley',
      title: 'Brown Gucci Stanley Tumbler – 1200ml',
      image: '/brown gucci stanley.jpeg',
      price: '₹1050',
      volume: '1200ml',
      description: 'Stanley featuring a customized laser engraved Gucci GG Morgan pattern. 1200 ml.'
    },
    {
      id: 'blue-and-gold-bow-stanley',
      title: 'Blue and Gold Bow Stanley Tumbler – 1200ml',
      image: '/blue and gold bow stanley.jpeg',
      price: '₹1050',
      volume: '1200ml',
      description: 'This is a 40-ounce Stanley Quencher Flowstate Tumbler featuring a blue Nightfall glass deco floral design. 1200 ml.'
    },
    {
      id: 'black-and-gold-gucci-stanley',
      title: 'Black and Gold Gucci Stanley Tumbler – 1200ml',
      image: '/black and gold gucci stanley.jpeg',
      price: '₹1050',
      volume: '1200ml',
      description: 'This tumbler features a custom Gucci-inspired monogram logo design with stainless steel double-walled vacuum insulation. 1200 ml.'
    },
    {
      id: 'blue-bow-stanley',
      title: 'Blue Bow Stanley Tumbler – 1200ml',
      image: '/blue bow stanley.jpeg',
      price: '₹1050',
      volume: '1200ml',
      description: 'Stanley x Love Shack Fancy Tumbler featuring a white body with a blue and pink floral pattern. 1200 ml.'
    },
    {
      id: 'floral-stanley',
      title: 'Floral Stanley Tumbler – 1200ml',
      image: '/floral stanley.jpeg',
      price: '₹999',
      volume: '1200ml',
      description: 'This is a limited edition Stanley x Love Shack Fancy Flowstate Tumbler in a pink floral Ribbon Rosa pattern. 1200 ml.'
    },
    {
      id: 'black-leopard-print-stanley',
      title: 'Black Leopard Print Stanley Tumbler – 1200ml',
      image: '/black leopard print stanley.jpeg',
      price: '₹999',
      volume: '1200ml',
      description: 'This is a Stanley Quencher featuring a black leopard print design. 1200 ml.'
    },
    {
      id: 'skin-leopard-print-stanley',
      title: 'Skin Leopard Print Stanley Tumbler – 1200ml',
      image: '/skin leopard print stanley.jpeg',
      price: '₹999',
      volume: '1200ml',
      description: 'This is a Stanley Quencher featuring a skin leopard print design. 1200 ml.'
    },
    {
      id: 'white-pink-flowers-stanley',
      title: 'White Pink Flowers Stanley Tumbler – 1200ml',
      image: '/white pink flowers stanley.jpeg',
      price: '₹899',
      volume: '1200ml',
      description: 'This is a Stanley Quencher Tumbler featuring a floral pattern with stainless steel double wall. 1200 ml.'
    }
  ];

  const plushProducts: ProductCardItem[] = [
    {
      id: 'sound-3-mode-cat',
      title: 'Sound & 3-Mode Light Cat Plush Toy',
      image: '/sound and 3 mode light cat.png',
      price: '₹199',
      volume: '',
      description: 'Realistic plush white and black kitten with blue nestled inside a pink lace-trimmed blanket, featuring 3 light modes and sound.'
    },
    {
      id: 'sleeping-grey-cat',
      title: 'Sleeping Grey Cat Plush Toy',
      image: '/sleeping cat grey.png',
      price: '₹149',
      volume: '',
      description: 'Grey tabby cat plushy toy with sound.'
    },
    {
      id: 'sleeping-black-white-cat',
      title: 'Sleeping Black & White Cat Plush Toy',
      image: '/sleeping cat black and white.jpg',
      price: '₹149',
      volume: '',
      description: 'Black and white cat plushy toy with sound.'
    },
    {
      id: 'sleeping-orange-cat',
      title: 'Sleeping Orange Cat Plush Toy',
      image: '/sleeping cat orange.png',
      price: '₹149',
      volume: '',
      description: 'Orange cat plushy toy with sound.'
    },
  ];

  const funProducts: ProductCardItem[] = [
    {
      id: 'shinchan-toy',
      title: 'Wind-Up Shinchan Crawling Toy',
      image: '/shinchan.jpg',
      price: '₹150',
      volume: '',
      description: 'Wind-up Shinchan crawling toy holding a small alarm clock.'
    },
    {
      id: 'mini-fan',
      title: 'Mini Yellow & Blue Portable Handheld Fan',
      image: '/fan.jpg',
      price: '₹99',
      volume: '',
      description: 'Mini yellow and blue portable handheld fan.'
    },
    {
      id: 'panda-toy',
      title: 'Wind-Up Skipping Panda Toy',
      image: '/panda.jpg',
      price: '₹119',
      volume: '',
      description: 'Wind-up skipping panda toy with bright green exercise bar.'
    },
    {
      id: 'pink-squishy',
      title: 'Pink Squishy Toy',
      image: '/pink squishy.png',
      price: '₹99',
      volume: '',
      description: 'Scented donut shaped squishy toy designed for stress relief.'
    },
    {
      id: 'green-squishy',
      title: 'Green Squishy Toy',
      image: '/green squishy.jpg',
      price: '₹99',
      volume: '',
      description: 'Scented donut shaped squishy toy designed for stress relief.'
    },
    {
      id: 'stress-toy',
      title: 'Unicorn Squishy Stress Toy',
      image: '/stress toy.png',
      price: '₹99',
      volume: '',
      description: 'Unicorn shaped squishy stress toy designed for relaxation. Also available in purple, yellow and blue colors.'
    },
    {
      id: 'oreo-pinch',
      title: 'Oreo Pinch Squishy Toy',
      image: '/oreo pinch.png',
      price: '₹199',
      volume: '',
      description: 'A cookie shaped squishy squeeze toy for stress relief.'
    },
    {
      id: 'hello-kitty-squishy',
      title: 'Hello Kitty Squishy Stress Toy',
      image: '/hello kitty squishy.png',
      price: '₹199',
      volume: '',
      description: 'Hello Kitty stress toy packaged with yellow hat and pink outfit.'
    },
    {
      id: 'dark-pink-squishy',
      title: 'Dark Pink Cat Paw Squishy',
      image: '/dark pink squishy.png',
      price: '₹199',
      volume: '',
      description: 'Dark pink cat paw squishy toy for stress relief.'
    },
    {
      id: 'light-pink-squishy',
      title: 'Light Pink Cat Paw Squishy',
      image: '/light pink squishy.png',
      price: '₹199',
      volume: '',
      description: 'Light pink cat paw squishy toy for stress relief.'
    }
  ];

  const cameraProducts: ProductCardItem[] = [
    {
      id: 'instant-camera',
      title: 'Unicorn Themed Instant Print Kids Camera',
      image: '/instant print camera.png',
      price: '₹1299',
      volume: '',
      description: 'Unicorn themed kids camera includes instant print and comes with a USB cable for charging.'
    }
  ];
  const gamingProducts: ProductCardItem[] = [
    {
      id: 'video-game',
      title: 'Video Game Handheld Console',
      image: '/video game.png',
      price: '₹399',
      volume: '',
      description: 'Includes 400+ classic builtin games, handheld console.'
    }
  ];

  const diecastProducts: ProductCardItem[] = [
    {
      id: 'black-diecast-car',
      title: 'Black Die-Cast Police SUV',
      image: '/black diecast.png',
      price: '₹249',
      volume: '',
      description: 'Die-cast model of a black police SUV with opening doors.'
    },
    {
      id: 'black-model-car',
      title: 'Rolls Royce Black & Silver Die-Cast Model',
      image: '/black model car.png',
      price: '₹999',
      volume: '',
      description: 'Rolls Royce model with black and silver finish, golden detailing, lights, and sound.'
    },
    {
      id: 'blue-diecast-car',
      title: 'Blue Die-Cast Car',
      image: '/blue diecast.png',
      price: '₹249',
      volume: '',
      description: 'Die-cast model of a blue car with opening doors.'
    },
    {
      id: 'blue-diecast-scooter',
      title: 'Blue Die-Cast Scooter',
      image: '/diecast scooter.png',
      price: '₹249',
      volume: '',
      description: 'Die-cast model of a blue scooter with opening doors.'
    },
    {
      id: 'green-model-car',
      title: 'Green Die-Cast Model Car',
      image: '/green model car.png',
      price: '₹999',
      volume: '',
      description: 'Green LJX model die-cast car with light and sound.'
    },
    {
      id: 'red-diecast-car',
      title: 'Red Die-Cast Car',
      image: '/red diecast with light and sound.jpg',
      price: '₹249',
      volume: '',
      description: 'Die-cast model of a red car with opening doors and light and sound.'
    }
    ,
    {
      id: 'aircraft-plane',
      title: 'Interstellar Fighter Plane RC (EPP Foam)',
      image: '/aircraft plane.jpg',
      price: '₹850',
      volume: '',
      description: 'S1/S2 Interstellar Fighter Plane RC Drone with LED lights. Constructed from EPP foam for durability against crashes; rated for ages 14 and up.'
    },
    {
      id: 'drone-e88',
      title: 'E88 Pro Foldable Drone with Camera',
      image: '/drone.jpg',
      price: '₹999',
      volume: '',
      description: 'E88 Pro foldable drone with camera, designed for beginners. Package includes foldable drone, HD camera, and remote controller.'
    },
    {
      id: 'follow-car',
      title: 'Follow Car RC',
      image: '/follow car.jpg',
      price: '₹850',
      volume: '',
      description: 'Dream Racing Mini Multifunctional Vehicle for Kids. Features 2.4GHz remote control, 360-degree rotation, and follow & escape modes.'
    },
    {
      id: 'hot-wheels-3-pack',
      title: 'Hot Wheels 3-Pack',
      image: '/hotwheels.jpg',
      price: '₹200',
      volume: '',
      description: 'Hot Wheels 3-pack featuring three die-cast metal vehicles branded with the Speed logo. Recommended age 3+'
    }
  ];

  const diaryProducts: ProductCardItem[] = [
    {
      id: 'doce-encanto',
      title: 'Doce Encanto Diary',
      image: '/doce encanto.png',
      price: '₹449',
      volume: '',
      description: 'This notebook features a built-in solar-powered calculator on its cover. The design is titled Doce Encanto and is decorated with cherries, hearts, and stars, and comes with metal spiral binding.'
    },
    {
      id: 'kuromi-diary',
      title: 'Kuromi Diary',
      image: '/kuromi diary.png',
      price: '₹249',
      volume: '',
      description: 'Kuromi-themed notebook featuring a love club design.'
    },
    {
      id: 'kuromi-lock-diary',
      title: 'Kuromi Lock Diary',
      image: '/kuromi lock diary.png',
      price: '₹350',
      volume: '',
      description: 'Hello Kitty themed password log diary for girls and teenagers.'
    },
    {
      id: 'lilo-diary',
      title: 'Lilo Diary',
      image: '/lilo diary.jpg',
      price: '₹199',
      volume: '',
      description: 'Spiral bound notebook with a Hello Summer theme featuring Stitch wearing sunglasses.'
    },
    {
      id: 'unicorn-design-diary',
      title: 'Unicorn Design Diary',
      image: '/unicorn design diary.png',
      price: '₹199',
      volume: '',
      description: 'Trendy unicorn design regular notebook with a liquid-filled cover with floating glitter and unicorn graphics for girls.'
    }
  ];

  const [selectedProduct, setSelectedProduct] = useState<ProductCardItem | null>(null);

  const renderCatalogPage = (eyebrow: string, title: string, description: string, items: ProductCardItem[]) => (
    <div className="min-h-[calc(100vh-5rem)] bg-[radial-gradient(circle_at_top_left,_rgba(251,207,232,0.35),_transparent_30%),linear-gradient(135deg,_#fffaf7_0%,_#fff0f7_100%)] py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-pink-600 font-bold">{eyebrow}</p>
            <h1 className="mt-3 text-2xl sm:text-3xl font-bold text-gray-900">{title}</h1>
            <p className="mt-3 text-xs sm:text-sm text-gray-600 max-w-2xl">{description}</p>
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
          {items.map((product) => (
            <div
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className="cursor-pointer rounded-[1.75rem] border border-pink-100 bg-white/95 shadow-[0_18px_45px_-20px_rgba(190,24,93,0.35)] overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_-18px_rgba(190,24,93,0.4)]"
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
  );

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
        renderCatalogPage(
          'Tumblr Collection',
          'Premium Tumblers',
          'Insulated stainless steel tumblers with a diamond-textured finish. Premium tumblers starting from ₹399.',
          tumblrProducts
        )
      ) : currentPage === 'plush' ? (
        renderCatalogPage(
          'Kawaii Plush Toys',
          'Cute Plushies & Toy Gifts',
          'Adorable plush toys with sound, lights, and playful details for kids and gift lovers.',
          plushProducts
        )
      ) : currentPage === 'makeup' ? (
        renderCatalogPage(
          'Makeup Kits',
          'Fashion Makeup Kits',
          'Organic and themed makeup play sets for kids. Tap any kit to order via WhatsApp.',
          makeupProducts
        )
      ) : currentPage === 'fun' ? (
        renderCatalogPage(
          'Fun Toys',
          'Playful Toy Picks',
          'Cute and interactive toys including Shinchan, mini fans, and panda toys for fun gifts.',
          funProducts
        )
      ) : currentPage === 'camera' ? (
        renderCatalogPage(
          'Instant Print Kids Cameras',
          'Cute Camera Picks',
          'Instant print cameras with fun themes and easy USB charging for kids.',
          cameraProducts
        )
      ) : currentPage === 'diecast' ? (
        renderCatalogPage(
          'Die-Cast Bike & Car Models',
          'Mini Collectibles',
          'Detailed die-cast cars and scooters with opening doors, lights, and sound features.',
          diecastProducts
        )
      ) : currentPage === 'gaming' ? (
        renderCatalogPage(
          'PVP Station Games',
          'Handheld Video Games',
          'Classic handheld gaming consoles with built-in fun for road trips and parties.',
          gamingProducts
        )
      ) : currentPage === 'keychains' ? (
        renderCatalogPage(
          'Keychains & Bag Charms',
          'Cute Character Accessories',
          'A curated collection of adorable keychains and bag charms, each designed to add a charming personal touch to bags, backpacks, and everyday essentials.',
          keychainProducts
        )
      ) : currentPage === 'diaries' ? (
        renderCatalogPage(
          'Diaries & Notebooks',
          'Trendy Diaries',
          'Spiral bound and lockable diaries with themed covers and fun features.',
          diaryProducts
        )
      ) : (
        <>
          <section id="tumblrs" className="relative py-12 md:py-20 overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(251,207,232,0.35),_transparent_28%),linear-gradient(135deg,_#fffdf8_0%,_#fff7fb_50%,_#fffaf0_100%)]">
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
                    <div className="relative bg-white/95 p-4 rounded-[2rem] shadow-[0_24px_60px_-24px_rgba(190,24,93,0.45)] border border-pink-100 transform rotate-1 hover:rotate-0 transition-transform duration-300">
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
          <section id="categories" className="py-12 md:py-20 bg-white/80 backdrop-blur-sm">
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
                  const isPlushCategory = category.id === 'plush-toys';
                  const isFunCategory = category.id === 'soft-keychains';
                  const isKeychainsCategory = category.id === 'keychains-bag-charms';
                  const isCameraCategory = category.id === 'print-cameras';
                  const isDiecastCategory = category.id === 'diecast-models';
                  const isGamingCategory = category.id === 'gaming-consoles';
                  const isMakeupCategory = category.id === 'makeup-kits';
                  const isDiaryCategory = category.id === 'diaries';

                  return isTumblrCategory || isPlushCategory || isFunCategory || isKeychainsCategory || isCameraCategory || isDiecastCategory || isGamingCategory || isMakeupCategory || isDiaryCategory ? (
                    <motion.button
                      key={category.id}
                      type="button"
                      onClick={() => {
                        if (isTumblrCategory) setCurrentPage('tumblr');
                        else if (isPlushCategory) setCurrentPage('plush');
                        else if (isFunCategory) setCurrentPage('fun');
                        else if (isKeychainsCategory) setCurrentPage('keychains');
                        else if (isCameraCategory) setCurrentPage('camera');
                        else if (isDiecastCategory) setCurrentPage('diecast');
                        else if (isGamingCategory) setCurrentPage('gaming');
                        else if (isMakeupCategory) setCurrentPage('makeup');
                        else if (isDiaryCategory) setCurrentPage('diaries');
                      }}
                      whileHover={{ y: -4 }}
                      className="category-card group relative rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border border-pink-100 hover:border-pink-200 shadow-[0_16px_40px_-20px_rgba(190,24,93,0.35)] hover:shadow-[0_20px_45px_-18px_rgba(190,24,93,0.4)] transition-all duration-300 bg-[#FDF2F8]"
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
                            {isTumblrCategory ? 'View Tumblers' : isPlushCategory ? 'View Plush Toys' : isMakeupCategory ? 'View Makeup Kits' : isFunCategory ? 'View Fun Toys' : isKeychainsCategory ? 'View Keychains' : isCameraCategory ? 'View Cameras' : isDiecastCategory ? 'View Die-Cast Models' : isGamingCategory ? 'View Games' : isDiaryCategory ? 'View Diaries' : 'Order'}
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
                      className="category-card group relative rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border border-pink-100 hover:border-pink-200 shadow-[0_16px_40px_-20px_rgba(190,24,93,0.35)] hover:shadow-[0_20px_45px_-18px_rgba(190,24,93,0.4)] transition-all duration-300 bg-[#FDF2F8]"
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

      {currentPage === 'home' && (
        <>
          
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
              className="w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-[28px] bg-white shadow-2xl"
            >
              <div className="relative">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  className="h-auto max-h-[60vh] w-full object-contain sm:max-h-[70vh]"
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
