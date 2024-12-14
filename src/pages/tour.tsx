import { useState, useRef, useEffect } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Heart, MapPin, Share2, Star, ChevronLeft, ChevronRight, Menu, X } from 'lucide-react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { SignupModal } from '../components/SignupModal';
import { useSpring, animated, to } from '@react-spring/web';
import ParallaxTilt from 'react-parallax-tilt';
import hero1 from '../assets/hero 1.jpg'
import hero2 from '../assets/hero 2.png'
import hero3 from '../assets/hero 3.png'
import hero4 from '../assets/hero 4.jpg'
import g1 from '../assets/g1.png'
import g2 from '../assets/g2.png'
import g3 from '../assets/g3.png'
import g4 from '../assets/g4.png'
import g5 from '../assets/g5.png'
import a1 from '../assets/a1.jpg'
import a2 from '../assets/a2.png'
import a3 from '../assets/a3.png'
import a4 from '../assets/a4.png'

const cardVariants = {
  hover: {
    scale: 1.02,
    transition: { duration: 0.3 }
  }
};

const textVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const buttonVariants = {
  hover: { scale: 1.05, transition: { duration: 0.2 } },
  tap: { scale: 0.95 }
};

const menuVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      staggerChildren: 0.07,
      delayChildren: 0.1
    }
  },
  closed: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.2
    }
  }
};

const menuItemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2 }
  },
  closed: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.2 }
  }
};

export default function TourismPage() {
  const [adults, setAdults] = useState(1)
  const [children, setChildren] = useState(0)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const reviewsRef = useRef(null)
  const isInView = useInView(reviewsRef, { once: true })
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView, mainControls])

  const reviews = [
    {
      text: "We had the most amazing time! Booking through MaltaXplore was easy and seamless. Highly recommend the sunset boat tour!",
      author: "Sarah",
      country: "United Kingdom"
    },
    {
      text: "MaltaXplore made our trip unforgettable. We loved the restaurant recommendations and the personal touch!",
      author: "Marco",
      country: "Italy"
    },
    {
      text: "From the moment we arrived, everything was perfectly planned. Thanks to MaltaXplore, we made the most of every day!",
      author: "Anna",
      country: "Germany"
    }
  ]

  const adventures = [
    {
      title: "Explore Malta's Ancient Wonders",
      description: "From UNESCO World Heritage sites to hidden catacombs, explore Malta's rich history with our guided tours.",
      price: "€500",
      image: a1
    },
    {
      title: "Luxury Yacht Charters",
      description: "Sail the Mediterranean in style. Enjoy breathtaking views, exclusive access to hidden coves, and VIP service.",
      price: "€500",
      image: a2
    },
    {
      title: "Dine by the Sea - Seaside Restaurants",
      description: "Taste authentic Maltese cuisine at our top seaside restaurants. From fresh seafood to local delicacies, you'll love the view as much as the food.",
      price: "€500",
      image: a3
    },
    {
      title: "Scuba Diving Adventures",
      description: "Dive into the crystal-clear waters of the Mediterranean. Perfect for beginners and experienced divers alike.",
      price: "€500",
      image: a4
    }
  ]

  // 3D hover animation for cards
  const calc = (x: number, y: number) => [
    -(y - window.innerHeight / 2) / 20,
    (x - window.innerWidth / 2) / 20,
    1.1,
  ];
  const trans = (x: number, y: number, s: number) =>
    `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

  const createCardSpring = () => useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  const cardSprings = Array(6).fill(null).map(() => createCardSpring());

  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      {/* Modals */}
      <SignupModal isOpen={isSignupOpen} onClose={() => setIsSignupOpen(false)} />

      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.a 
              href="/"
              className="text-xl md:text-2xl font-bold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Logo Here
            </motion.a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <motion.a 
                href="/"
                className="text-[#E5484D] font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Home
              </motion.a>
              {['About us', 'Services', 'Tour Listing', 'Supplier Registration'].map((item) => (
                <motion.a
                  key={item}
                  href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-gray-600 hover:text-[#E5484D] transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.a>
              ))}
            </nav>

            {/* Desktop Sign Up Button */}
            <motion.div className="hidden md:block">
              <Button 
                className="bg-[#FFE4E5] text-[#E5484D] hover:bg-[#E5484D] hover:text-white transition-colors duration-300"
                onClick={() => setIsSignupOpen(true)}
              >
                Sign Up
              </Button>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-600" />
              ) : (
                <Menu className="w-6 h-6 text-gray-600" />
              )}
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <motion.div
            className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
            initial="closed"
            animate={isMenuOpen ? "open" : "closed"}
            variants={menuVariants}
          >
            <nav className="py-4 space-y-2">
              <motion.a 
                href="/"
                className="block px-4 py-2 text-[#E5484D] font-medium rounded-lg hover:bg-gray-50"
                variants={menuItemVariants}
                whileTap={{ scale: 0.95 }}
              >
                Home
              </motion.a>
              {['About us', 'Services', 'Tour Listing', 'Supplier Registration'].map((item) => (
                <motion.a
                  key={item}
                  href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="block px-4 py-2 text-gray-600 rounded-lg hover:bg-gray-50 hover:text-[#E5484D] transition-colors duration-200"
                  variants={menuItemVariants}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.a>
              ))}
              <motion.div 
                className="px-4 pt-2"
                variants={menuItemVariants}
              >
                <Button 
                  className="w-full bg-[#FFE4E5] text-[#E5484D] hover:bg-[#E5484D] hover:text-white transition-colors duration-300"
                >
                  Sign Up
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        </div>
      </header>

      {/* Hero Section with 3D Tilt */}
      <ParallaxTilt
        tiltMaxAngleX={8}
        tiltMaxAngleY={8}
        perspective={1000}
        scale={1.02}
        transitionSpeed={2000}
        className="pt-16 md:pt-24 container mx-auto px-4"
      >
        <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 md:mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Explore Malta's Ancient Wonders
        </motion.h1>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mb-4 md:mb-6"
          initial="initial"
          animate="animate"
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {/* Large main image */}
          <motion.div 
            className="md:col-span-2 relative group overflow-hidden rounded-2xl h-full"
            variants={textVariants}
          >
            <img
              src={hero1}
              alt="Malta Ancient Ruins"
              className="w-full h-[300px] sm:h-[350px] md:h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
          </motion.div>

          {/* Right side images */}
          <motion.div 
            className="grid grid-rows-3 gap-3 md:gap-4"
            variants={textVariants}
          >
            <div className="relative group overflow-hidden rounded-2xl">
              <img
                src={hero2}
                alt="Malta City"
                className="w-full h-[140px] sm:h-[165px] md:h-[120px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
            </div>
            <div className="relative group overflow-hidden rounded-2xl">
              <img
                src={hero3}
                alt="Malta Coast"
                className="w-full h-[140px] sm:h-[165px] md:h-[120px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
            </div>
            <div className="relative group overflow-hidden rounded-2xl">
              <img
                src={hero4}
                alt="Malta Architecture"
                className="w-full h-[140px] sm:h-[165px] md:h-[120px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
            <div className="flex items-center">
              {[1, 2, 3, 4].map((star) => (
                <Star key={star} className="w-4 h-4 sm:w-5 sm:h-5 fill-[#E5484D] text-[#E5484D]" />
              ))}
              <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-[#E5484D]/50 text-[#E5484D]" />
              <span className="ml-2 text-sm sm:text-base text-gray-600">4.5 (235 review)</span>
            </div>
            <div className="flex items-center gap-2 text-sm sm:text-base text-gray-600">
              <MapPin className="w-4 h-4" />
              <span className="line-clamp-1">Dar Merhba Bik, 130, Triq Birbal, BZN 1708, Malta</span>
            </div>
          </div>
          <div className="flex gap-2 self-end sm:self-auto">
            <motion.button 
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center hover:bg-[#FFE4E5] hover:text-[#E5484D] transition-all duration-300"
            >
              <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>
            <motion.button 
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center hover:bg-[#FFE4E5] hover:text-[#E5484D] transition-all duration-300"
            >
              <Share2 className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>
          </div>
        </motion.div>
      </ParallaxTilt>

      {/* Booking Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">About Destination</h2>
            <div className="prose prose-lg max-w-none">
              <p>
                Discover the timeless beauty and historical depth of Malta, a Mediterranean gem teeming
                with ancient marvels and captivating stories. From the awe-inspiring megalithic temples
                that predate the Egyptian pyramids, to the storied fortresses that have defended Malta
                for centuries, this island nation offers a journey through time like no other.
              </p>
              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Megalithic Temples:</h3>
                  <p>
                    Visit the Ġgantija Temples on Gozo, one of the world's oldest
                    freestanding structures, recognized as a UNESCO World Heritage site.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Mdina - The Silent City:</h3>
                  <p>
                    Explore this ancient walled city, where quiet, winding streets and
                    medieval architecture transport you back in time.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Stunning Fortifications:</h3>
                  <p>
                    Tour the iconic fortresses of Valletta, including the Grandmaster's
                    Palace and Fort St. Elmo, testaments to Malta's storied past.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="sticky top-24">
              <CardHeader className="bg-[#E5484D] text-white rounded-t-lg">
                <CardTitle className="text-3xl">€550.00</CardTitle>
                <p className="text-white/90">per person</p>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block">Check In</label>
                    <Select defaultValue="nov-4">
                      <SelectTrigger>
                        <SelectValue placeholder="Select date" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="nov-4">November 4, 2024</SelectItem>
                        <SelectItem value="nov-5">November 5, 2024</SelectItem>
                        <SelectItem value="nov-6">November 6, 2024</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Adults</label>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setAdults(Math.max(1, adults - 1))}
                        className="hover:bg-[#FFE4E5] hover:text-[#E5484D] transition-colors"
                      >
                        -
                      </Button>
                      <span className="w-12 text-center">{adults}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setAdults(adults + 1)}
                        className="hover:bg-[#FFE4E5] hover:text-[#E5484D] transition-colors"
                      >
                        +
                      </Button>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Children</label>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setChildren(Math.max(0, children - 1))}
                        className="hover:bg-[#FFE4E5] hover:text-[#E5484D] transition-colors"
                      >
                        -
                      </Button>
                      <span className="w-12 text-center">{children}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setChildren(children + 1)}
                        className="hover:bg-[#FFE4E5] hover:text-[#E5484D] transition-colors"
                      >
                        +
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between mb-2">
                    <span>Total</span>
                    <span className="font-bold">€{550 * (adults + children * 0.5)}.00</span>
                  </div>
                  <Button 
                    className="w-full bg-[#E5484D] hover:bg-[#E5484D]/90 text-white transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    Book Now
                  </Button>
                  <p className="text-center text-sm text-gray-500 mt-4">
                    <button className="text-[#E5484D] hover:underline transition-all duration-300">
                      Contact us for more details
                    </button>
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section with Independent Hover Effects */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Explore Gallery
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[g1, g2, g3].map((image, index) => (
              <animated.div
                key={index}
                className="relative group overflow-hidden rounded-2xl cursor-pointer"
                onMouseMove={({ clientX: x, clientY: y }) => {
                  const [newX, newY, newS] = calc(x, y);
                  cardSprings[index][1]({ xys: [newX, newY, newS] });
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => {
                  cardSprings[index][1]({ xys: [0, 0, 1] });
                  setHoveredCard(null);
                }}
                style={{
                  transform: cardSprings[index][0].xys.to(trans),
                }}
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-[300px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
              </animated.div>
            ))}
          </div>

          {/* Last two images in full width */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {[g4, g5].map((image, index) => (
              <animated.div
                key={index}
                className="relative group overflow-hidden rounded-2xl cursor-pointer"
                onMouseMove={({ clientX: x, clientY: y }) => {
                  const [newX, newY, newS] = calc(x, y);
                  cardSprings[index + 3][1]({ xys: [newX, newY, newS] });
                }}
                onMouseEnter={() => setHoveredCard(index + 3)}
                onMouseLeave={() => {
                  cardSprings[index + 3][1]({ xys: [0, 0, 1] });
                  setHoveredCard(null);
                }}
                style={{
                  transform: cardSprings[index + 3][0].xys.to(trans),
                }}
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 4}`}
                  className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
              </animated.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section ref={reviewsRef} className="bg-[#FFF0F0] py-16">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 text-[#E5484D]"
            initial={{ opacity: 0, y: 20 }}
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            What Our Guests Are Saying
          </motion.h2>
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
            initial="hidden"
            animate={mainControls}
          >
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <Card className="bg-white border-none shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-[#E5484D] text-[#E5484D]" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-4">"{review.text}"</p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gray-200" />
                      <div>
                        <p className="font-semibold text-[#E5484D]">{review.author}</p>
                        <p className="text-sm text-gray-500">{review.country}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          <div className="text-center mt-10">
            <Button className="bg-white text-[#E5484D] hover:bg-[#E5484D] hover:text-white transition-all duration-300">
              Read More Reviews
            </Button>
          </div>
        </div>
      </section>

      {/* Top Picks */}
      <section className="py-16 md:py-24 bg-white">
          <div className="container px-4 mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Top Picks for Your<br />
                Maltese Adventure
              </h2>
              <p className="text-gray-600 md:max-w-md text-lg">
                Start with our most popular experiences and tours—perfect for getting the most out of Malta.
              </p>
            </motion.div>

            <div className="relative overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 20}%)` }}
              >
                {[
                  {
                    title: "Explore Malta's Ancient Wonders",
                    description: "From UNESCO World Heritage sites to hidden catacombs, explore Malta's rich history with our guided tours.",
                    price: "$500",
                    image: a1
                  },
                  {
                    title: "Luxury Yacht Charters",
                    description: "Sail the Mediterranean in style. Enjoy breathtaking views, exclusive access to hidden coves, and VIP service.",
                    price: "$500",
                    image: a2
                  },
                  {
                    title: "Dine by the Sea - Seaside Restaurants",
                    description: "Taste authentic Maltese cuisine at our top seaside restaurants. From fresh seafood to local delicacies, you'll love the view as much as the food.",
                    price: "$500",
                    image: a3
                  },
                  {
                    title: "Scuba Diving Adventures",
                    description: "Dive into the crystal-clear waters of the Mediterranean. Perfect for beginners and experienced divers alike.",
                    price: "$500",
                    image: a4
                  }
                ].map((pick, index) => (
                  <motion.div 
                    key={index} 
                    className={`transition-all duration-500 ${
                      index === currentSlide 
                        ? 'w-full md:w-[40%] px-4' 
                        : 'hidden md:block md:w-[20%] px-2'
                    }`}
                    variants={cardVariants}
                    whileHover="hover"
                  >
                    <div 
                      className={`bg-white rounded-2xl overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-300 ${
                        index === currentSlide 
                          ? 'transform-none' 
                          : 'transform scale-95'
                      }`}
                    >
                      <div className="relative overflow-hidden">
                        <motion.img
                          src={pick.image}
                          alt={pick.title}
                          className={`w-full object-cover transition-all duration-500 ${
                            index === currentSlide 
                              ? 'h-[300px] md:h-[500px]'
                              : 'h-[200px] md:h-[300px]'
                          }`}
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.4 }}
                        />
                        <motion.div 
                          className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 shadow-lg"
                          whileHover={{ scale: 1.05 }}
                        >
                          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                          <span className="text-sm font-medium">Restaurant & More Info</span>
                        </motion.div>
                      </div>
                      <motion.div 
                        className="p-6"
                        variants={textVariants}
                        initial="initial"
                        whileInView="animate"
                      >
                        <div className="flex justify-between items-start mb-4">
                          <h3 className={`font-bold text-gray-900 group-hover:text-[#E5484D] transition-colors duration-300 ${
                            index === currentSlide ? 'text-xl md:text-2xl' : 'text-lg'
                          }`}>
                            {pick.title}
                          </h3>
                          <div className="text-right">
                            <div className="text-sm text-gray-500">Starting at:</div>
                            <div className="text-[#E5484D] font-bold text-xl">{pick.price}</div>
                          </div>
                        </div>
                        <p className={`text-gray-600 mb-6 ${
                          index === currentSlide ? 'text-base' : 'text-sm'
                        }`}>
                          {pick.description}
                        </p>
                        <motion.div
                          variants={buttonVariants}
                          whileHover="hover"
                          whileTap="tap"
                        >
                          <Button 
                            className="w-full bg-[#E5484D] text-white hover:bg-[#E5484D]/90 transform hover:-translate-y-1 transition-all duration-300"
                          >
                            Book Now
                          </Button>
                        </motion.div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.button 
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 bg-white rounded-full shadow-lg flex items-center justify-center z-10 hover:scale-110 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-[#E5484D]"
                onClick={() => {
                  setCurrentSlide((prev) => (prev > 0 ? prev - 1 : 3));
                }}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
              </motion.button>
              <motion.button 
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 bg-white rounded-full shadow-lg flex items-center justify-center z-10 hover:scale-110 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-[#E5484D]"
                onClick={() => {
                  setCurrentSlide((prev) => (prev < 3 ? prev + 1 : 0));
                }}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
              </motion.button>
            </div>

            <motion.div 
              className="flex justify-center items-center gap-4 md:gap-8 mt-8 md:mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-3xl md:text-4xl font-bold text-gray-900">0{currentSlide + 1}</span>
              <div className="h-[2px] w-20 md:w-32 bg-gray-200">
                <motion.div 
                  className="h-full bg-[#E5484D]"
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentSlide + 1) / 4) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <span className="text-3xl md:text-4xl font-bold text-gray-400">04</span>
            </motion.div>
          </div>
        </section>


      {/* Footer */}
      <footer className="bg-[#E5484D] text-white mt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-4">Malta Tours</h3>
              <p className="text-white/80">
                Immerse yourself in stunning visuals and captivating stories as you navigate through our website.
              </p>
            </div>
            {[
              {
                title: 'About Us',
                links: ['Home', 'About Us', 'Destination', 'Contact us']
              },
              {
                title: 'Services',
                links: ['Support', 'Explore', 'Get in Touch', 'Testimonials']
              },
              {
                title: 'Contact Info',
                content: [
                  '20, Guze Ellul Mercer Str, Iklin',
                  'IKL1371 MALTA',
                  'maltaxplore@gmail.com',
                  '123-456-789'
                ]
              }
            ].map((section, index) => (
              <div key={index}>
                <h4 className="font-semibold text-lg mb-4">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links ? (
                    section.links.map((link) => (
                      <li key={link}>
                        <a 
                          href="#" 
                          className="text-white/80 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                        >
                          {link}
                        </a>
                      </li>
                    ))
                  ) : (
                    section.content?.map((item) => (
                      <li key={item} className="text-white/80">
                        {item}
                      </li>
                    ))
                  )}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-white/20 mt-12 pt-8 text-center">
            <p className="text-white/60">&copy; maltaxplore 2024 , All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </main>
  );
}