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

export default function PrivateDriversAndAirportTransfers() {
  return (
    <div className="min-h-screen bg-[#f0f0f0] py-12">
      <h1 className="text-4xl font-bold text-center mb-6">Private Drivers & Airport Transfers</h1>
      <p className="text-lg text-center max-w-2xl mx-auto mb-12">
        Enjoy hassle-free travel with our private drivers and airport transfer services, ensuring a smooth journey to your destination.
      </p>
      {/* Additional content goes here */}
    </div>
  );
}
