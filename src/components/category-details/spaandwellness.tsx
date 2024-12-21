import React, { useState } from 'react'
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Minus, Star, ChevronRight, User } from 'lucide-react'
import ReviewsPage from "@/components/reviews-page"

// Type definitions for category details
type CategoryInclude = {
  id: number
  text: string
  isIncluded: boolean
}

type CategoryService = {
  title: string
  image: string
}

type Review = {
  id: number
  name: string
  avatar: string
  rating: number
  date: string
  comment: string
}

type CategoryDetails = {
  id: string
  title: string
  rating: number
  reviewCount: number
  images: string[]
  includes: CategoryInclude[]
  description: string[]
  details: string[]
  basePrice: number
  otherServices: CategoryService[]
  reviews: Review[]
}

// Sample categories data (can be expanded or fetched from an API)
const categoriesData: { [key: string]: CategoryDetails } = {
  'malta-tour': {
    id: 'malta-tour',
    title: 'Malta Historical Tour',
    rating: 5,
    reviewCount: 12,
    images: [
      'https://s3-alpha-sig.figma.com/img/1bd3/3777/d58191cdeebeee1384b5b4101d57c691?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RYXYUYGzdsaDLHTXvTULXj~Lyo9~XO6wAU5LNdyQR00QGGM90avyT7A9OuQWH-z5K7RBNClf4ePAog0eRY01uM0msPd-6ORMLMxazlBuagnua2kGYgR3Z0Azbh1CraRH7~NmKK~FzabdKTdBm0I5GpIOBuIU5cnjkqCkrHTH8GWdUc5-jaR5QIvSSziQ8P0u0LQodIlRXxY9zJKkQSprkDcE9Za~ti3u0ziXIQpNLFzBJQjqZ9KzU-yi4waq~UMQscOjtJZ1B-ZuLAsnXbRQ27ha4a8G4wW9~UlpEhx9CFsRzAF9JmzAQE4y3PhJBpt00nHj5ISmP3xftVVhJKqn3w__',
      'https://s3-alpha-sig.figma.com/img/84a9/e1b3/68b7119f088868899176360f37710cef?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=inq4Sag0PcXjR00mvPVsuJ1jajEObyh3GWw8Hp-ZioWHFrkHCgnZ~BXauDOfO5s-URCYHfAjvCrbv2M9zWJEVkmEFO8flFvOIrV7D7ZG0t2IRZffBuCsKTN-lPQ~PcnFyuXan6QKLfFwZFpi~hGsXNmvWP4QDeWJjYHnYa6Zhcd7xaNibatZaxMBbprPUWufqFbUHYwmXnMD0OD34TotJrws-wHEkGqBxqUDrHLhEoG8IVjgK52FQX-X9ZczZph9-AqaKXhhbmAC6Iknp6TF3cWz6UiSSrmXjt0SJtyDdkhggBSE-oOO6YArjvlZxTLLMj4e-GsqsUkGUsc-Lo~ZkA__'
    ],
    includes: [
      { id: 1, text: 'Guided historical walk', isIncluded: true },
      { id: 2, text: 'Megalithic temple visit', isIncluded: true },
      { id: 3, text: 'Luxury accommodation', isIncluded: true },
      { id: 4, text: 'Personal photographer', isIncluded: true },
      { id: 5, text: 'Airfare', isIncluded: false },
      { id: 6, text: 'Personal expenses', isIncluded: false }
    ],
    description: [
      'Discover the timeless beauty and historical depth of Malta, a Mediterranean gem teeming with ancient marvels and captivating stories.',
      'From the awe-inspiring megalithic temples that predate the Egyptian pyramids, to the storied fortresses that have defended Malta for centuries.'
    ],
    details: [
      'Nov 16 - 20',
      '10 Persons',
      'Free Wifi',
      'Pickup Available'
    ],
    basePrice: 550,
    otherServices: [
      { title: 'Adventure Activities', image: 'https://s3-alpha-sig.figma.com/img/685e/1e29/a958c639e0a6ff8a7bff23dfc45103c6?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hm6OgofRYJ6zlX6Do8SXcKqsGr6uAF8-X8DGP1NriKkZBlOhpHZxiVfY3p8pGGhghL~jFKjZdcFZttwzOv8QSL7K16wByb8pcolFWdDm8KrxOuZ41mE3NngdLlyu0JOwFU0PXigGhcaNLxZqx4r5j-4nq433v5oncCYi4n8Fzr0GJtuh63MyzE0HYB3cKpCTnai4NM8XUQ4XRp7iLXQgSSbfLeFnFbidNDkC0YhMRc8vZcpw1cGZbiTmpHlzBLfQvpI~njb~zgs5SYLAQkMq-VInYs2NjrBA0xlSCbIXwZdqKEN6w5RsAOCy92Bm6WbSp~AbzitVfIc2CGM49dtFSQ__' },
      { title: 'Wellness & Spa', image: 'https://s3-alpha-sig.figma.com/img/ecc6/509f/4ea824898a7bff69c25229940f60cce7?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=olN6Ip7tmml6Hm7rWaTJmT9Z0S7ZRay36PBnFoV~Rkdm7NpXUiiAPTj-JyTXgjPFEQP0LxkJXYCeAKl-VtdDRM0mZAh4vmCNUnpkGid3LVBDqkvOYxOygHpHWXcpWLkYnlHSrkAFH8AqzT7qQJlyeX5hFZieV-3nIwoJ2pL0ZzKoo-PRVWsc0sv69YoAcZQL40dmIQlmI9tM5ZS4U1xfIPVjNvsBsiT93mOEBsCn4ggBZp8sQcn7nMDMo~kSsTQh3esOf84lemUGpK80xWYjYkXT-movju0sB6befAswNzHNIq2Ko5WcD4FaOwNhewk~tflKv-nnNlOO-IO7M2naHg__' },
      { title: 'Shopping & Souvenirs', image: 'https://s3-alpha-sig.figma.com/img/acb2/3c88/9ed8143e2ee77b5e8d8eb9239e0b5b7d?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OVZSKaS6KxbcWE25DEARFNu9OXqoFTWYTiFDfTo45-9gqtXCq0TIRUz148jHvgVfiSaUGiMlchL2YKQ9Vt1XfY2bY0OzZ4cRTLBj1lhTyotD0zH3dmjpmE~wN7VQl7fA68vA1GJ-SmQx3CsQqth3hkXxE97piO-uH-dEeErgN7w9YN3XdtiX8cmsCAuymUwPBX~rjbjXGOKGluuoBbtKGfzs-PJUZxallRxjmBKF~nt~GjFnT8W1v7lRqOGNFhkqQA3O02oAsZeemZ8B1xNG3TiKF-FY6HESkZUpJsQ20fDyD9sc0P6P1mvlFTkhyid6qNob6vKQb6NIClZngYKX~g__' }
    ],
    reviews: [
      {
        id: 1,
        name: "Emily Johnson",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        rating: 5,
        date: "2 weeks ago",
        comment: "An absolutely incredible tour! The historical insights were fascinating and the guide was extremely knowledgeable."
      },
      {
        id: 2,
        name: "Michael Smith",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        rating: 4,
        date: "1 month ago",
        comment: "Great experience overall. The megalithic temples were breathtaking. Would recommend to history enthusiasts!"
      },
      {
        id: 3,
        name: "Sarah Williams",
        avatar: "https://randomuser.me/api/portraits/women/68.jpg",
        rating: 5,
        date: "3 weeks ago",
        comment: "A perfect blend of history, culture, and beautiful landscapes. The tour exceeded all my expectations!"
      }
    ]
  },
  'beach-vacation': {
    id: 'beach-vacation',
    title: 'Tropical Beach Getaway',
    rating: 4,
    reviewCount: 8,
    images: [
      '/beach-1.jpg',
      '/beach-2.jpg'
    ],
    includes: [
      { id: 1, text: 'Beach resort stay', isIncluded: true },
      { id: 2, text: 'Water sports', isIncluded: true },
      { id: 3, text: 'Snorkeling equipment', isIncluded: true },
      { id: 4, text: 'Sunset cruise', isIncluded: true },
      { id: 5, text: 'International flights', isIncluded: false },
      { id: 6, text: 'Travel insurance', isIncluded: false }
    ],
    description: [
      'Experience the ultimate tropical paradise with our Beach Vacation package.',
      'Enjoy pristine beaches, crystal clear waters, and unforgettable adventures.'
    ],
    details: [
      'Dec 10 - 17',
      '8 Persons',
      'All-inclusive resort',
      'Airport transfers'
    ],
    basePrice: 750,
    otherServices: [
      { title: 'Island Hopping', image: '' },
      { title: 'Local Cuisine Tours', image: 'https://s3-alpha-sig.figma.com/img/685e/1e29/a958c639e0a6ff8a7bff23dfc45103c6?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hm6OgofRYJ6zlX6Do8SXcKqsGr6uAF8-X8DGP1NriKkZBlOhpHZxiVfY3p8pGGhghL~jFKjZdcFZttwzOv8QSL7K16wByb8pcolFWdDm8KrxOuZ41mE3NngdLlyu0JOwFU0PXigGhcaNLxZqx4r5j-4nq433v5oncCYi4n8Fzr0GJtuh63MyzE0HYB3cKpCTnai4NM8XUQ4XRp7iLXQgSSbfLeFnFbidNDkC0YhMRc8vZcpw1cGZbiTmpHlzBLfQvpI~njb~zgs5SYLAQkMq-VInYs2NjrBA0xlSCbIXwZdqKEN6w5RsAOCy92Bm6WbSp~AbzitVfIc2CGM49dtFSQ__' },
      { title: 'Cultural Experiences', image: 'https://s3-alpha-sig.figma.com/img/acb2/3c88/9ed8143e2ee77b5e8d8eb9239e0b5b7d?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OVZSKaS6KxbcWE25DEARFNu9OXqoFTWYTiFDfTo45-9gqtXCq0TIRUz148jHvgVfiSaUGiMlchL2YKQ9Vt1XfY2bY0OzZ4cRTLBj1lhTyotD0zH3dmjpmE~wN7VQl7fA68vA1GJ-SmQx3CsQqth3hkXxE97piO-uH-dEeErgN7w9YN3XdtiX8cmsCAuymUwPBX~rjbjXGOKGluuoBbtKGfzs-PJUZxallRxjmBKF~nt~GjFnT8W1v7lRqOGNFhkqQA3O02oAsZeemZ8B1xNG3TiKF-FY6HESkZUpJsQ20fDyD9sc0P6P1mvlFTkhyid6qNob6vKQb6NIClZngYKX~g__' }
    ],
    reviews: []
  }
}

export default function CategoryDetailPage({ categoryId = 'malta-tour' }) {
  const [adults, setAdults] = useState(1)
  const [children, setChildren] = useState(0)
  const [checkInDate, setCheckInDate] = useState('')
  const [checkOutDate, setCheckOutDate] = useState('')
  const [totalDays, setTotalDays] = useState(1)

  // Get category details, default to Malta tour if not found
  const category = categoriesData[categoryId] || categoriesData['malta-tour']

  // Calculate total price based on number of people and days
  const calculateTotalPrice = () => {
    const totalPersons = adults + children
    return Math.round(category.basePrice * totalPersons * totalDays)
  }

  // Render star rating
  const renderStars = (rating: number) => {
    return [1, 2, 3, 4, 5].map((star) => (
      <Star 
        key={star} 
        className={`h-5 w-5 ${star <= rating ? 'fill-orange-400 text-orange-400' : 'text-gray-300'}`} 
      />
    ))
  }

  return (
    <div className="min-h-screen bg-[#fff5f5]">
      <Header />
      <main className="container mx-auto px-4 py-8 md:px-6 space-y-12 pt-20 sm:pt-24">
        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{category.title}</h1>
            <div className="flex items-center gap-2">
              {renderStars(category.rating)}
              <span className="text-sm text-gray-600">({category.reviewCount} reviews)</span>
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="grid md:grid-cols-2 gap-6">
          {category.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${category.title} - Image ${index + 1}`}
              className="rounded-xl object-cover w-full h-[300px] md:h-[400px]"
            />
          ))}
        </div>

        {/* What Includes/Exclude Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What Includes/Exclude</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              {category.includes.filter(item => item.isIncluded).map((item) => (
                <div key={item.id} className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-green-500" />
                  <span className="text-gray-600">{item.text}</span>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {category.includes.filter(item => !item.isIncluded).map((item) => (
                <div key={item.id} className="flex items-center gap-3">
                  <Minus className="h-5 w-5 text-red-500" />
                  <span className="text-gray-600">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* About Tour Section */}
        <div className="grid md:grid-cols-[1fr,400px] gap-8">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">About {category.title}</h2>
              <div className="flex flex-wrap gap-4">
                {category.details.map((detail, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-2 bg-white p-3 rounded-lg shadow-sm"
                  >
                    <span className="text-gray-600">{detail}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="text-gray-600 space-y-4">
              {category.description.map((para, index) => (
                <p key={index}>{para}</p>
              ))}
            </section>
          </div>

          {/* Booking Card */}
          <Card className="bg-white rounded-xl shadow-lg sticky top-24">
            <CardContent className="p-6 space-y-6">
              <div className="flex items-baseline justify-between">
                <h3 className="text-3xl font-bold text-gray-900">${category.basePrice}.00/</h3>
                <span className="text-gray-500">per person</span>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Check In Date</label>
                  <select 
                    value={checkInDate}
                    onChange={(e) => setCheckInDate(e.target.value)}
                    className="w-full rounded-lg border border-gray-200 p-3 text-gray-700"
                  >
                    <option value="">Select Check-in Date</option>
                    <option value="2024-12-25">December 25, 2024</option>
                    <option value="2025-01-15">January 15, 2025</option>
                    <option value="2025-02-20">February 20, 2025</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Adults</label>
                    <div className="flex">
                      <button 
                        onClick={() => setAdults(Math.max(1, adults - 1))} 
                        className="border border-gray-200 px-3 py-2 rounded-l-lg"
                      >-</button>
                      <input
                        type="number"
                        value={adults}
                        readOnly
                        className="w-full border-y border-gray-200 p-2 text-center"
                      />
                      <button 
                        onClick={() => setAdults(adults + 1)} 
                        className="border border-gray-200 px-3 py-2 rounded-r-lg"
                      >+</button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Children</label>
                    <div className="flex">
                      <button 
                        onClick={() => setChildren(Math.max(0, children - 1))} 
                        className="border border-gray-200 px-3 py-2 rounded-l-lg"
                      >-</button>
                      <input
                        type="number"
                        value={children}
                        readOnly
                        className="w-full border-y border-gray-200 p-2 text-center"
                      />
                      <button 
                        onClick={() => setChildren(children + 1)} 
                        className="border border-gray-200 px-3 py-2 rounded-r-lg"
                      >+</button>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-700 mb-1">Total Bill</p>
                  <p className="text-3xl font-bold text-gray-900">
                    ${calculateTotalPrice().toLocaleString()}.00
                  </p>
                </div>

                <Button 
                  className="w-full bg-red-500 hover:bg-red-600 text-white h-12"
                  disabled={!checkInDate}
                >
                  {checkInDate ? 'Book Now' : 'Select Date to Book'}
                </Button>
                
                <p className="text-center text-sm text-gray-500">
                  Contact us for more details
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Reviews Section */}
        <div className="space-y-8">
          <ReviewsPage />
        </div>

        {/* Other Services Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Explore Other Services</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {category.otherServices.map((service) => (
              <div 
                key={service.title} 
                className="group relative bg-white rounded-xl overflow-hidden"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-[280px] w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                <div className="absolute bottom-0 left-0 right-0 p-6 flex items-center justify-between text-white">
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <ChevronRight className="h-6 w-6" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default function SpaAndWellness() {
  return (
    <div className="min-h-screen bg-[#f0f0f0] py-12">
      <h1 className="text-4xl font-bold text-center mb-6">Spa & Wellness</h1>
      <p className="text-lg text-center max-w-2xl mx-auto mb-12">
        Indulge in relaxation and rejuvenation at our top spas and wellness centers, offering a range of treatments and therapies.
      </p>
      {/* Additional content goes here */}
    </div>
  );
}
