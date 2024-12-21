'use client'

import { useState } from 'react'
import { Star, Upload } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

export default function ReviewsPage() {
  const [userRating, setUserRating] = useState(0)
  const [currentPage, setCurrentPage] = useState(3)
  
  const ratings = [
    { stars: 5, count: 15 },
    { stars: 4, count: 0 },
    { stars: 3, count: 0 },
    { stars: 2, count: 0 },
    { stars: 1, count: 0 },
  ]

  const reviews = Array(3).fill({
    name: 'Marco',
    location: 'Italy',
    rating: 5,
    date: 'Dec 12, 2024',
    content: 'Discover the timeless beauty and historical depth of Malta, a Mediterranean gem teeming with ancient marvels and captivating stories. From the awe-inspiring megalithic temples that predate and the Egyptian pyramids, to the storied fortresses that have defended Malta for centuries, this island nation offers a journey through time like no other.',
    image: 'https://s3-alpha-sig.figma.com/img/8b19/ed27/803dab113e243d855f714e99beadfb16?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ksVOxZxPolggiXfPanGsFTu78gw9HS8NsnRmkN8xuqcWEKsPIbukxiZesnOcKhtfdQQ9dnbRNWBXLjIcBg00qDeb7zDI0WoTcZxU9Jzk-c9n4~RfMd5Zty1rkMw3GGaaEQQTRzJsNYBRUtBe79qnfLOE7y-Mvm9oa1ZhfrpAhX9efM8jPK2bKagQn2vYBvbk96FB71TruAZ4BSspBXcwoI5gmLSrLtfyO9M~B0Ciy9D~g4iyoHgfP9vTk-TMqmmXT~nBUNU~7ZBdad0twcEvXL3dVJK0jjTtF0qEZvYvsZrlJK8fvUmv~QaI~lPU0OSs~jhr0nHs~gaaVScH9ykdXg__',
    avatar: 'https://s3-alpha-sig.figma.com/img/025b/2128/cc0250d37d3c563c2cb95df2ca13eae5?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IxXK-GAE6gpsaUO2l9bduAaiE92vEEWIi6m~xOnJZrm5GOPoMe3-A5mg-2N1Cy0b-WbQtfZYo~AlTfmfe9lSJSwOu88KVOKNDDq3NE2zOsrvUE~kgSyuI2lfC87ocmcwB9prNsjmM64ank~au5KeHeSL9Dg7NyneHUUX3e4Q6bNwdiJhj2D-od8eoPSN3pExzJs2-KMxM4cbw9FrUkUPrWSn8peE78dG4jlegfXh2dpuxOBwaCG2jwUHKXGsJ03AoUyVxSZBTEOhS5AkNnDTbzju0o9qLwphIkpSK6gG9FeVOYKTr0V90q41HJj~MDda-CSHVIy2xaaY4EfuiKvKFg__'
  })

  return (
    <div className="min-h-screen bg-pink-50/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">Reviews & Testimonials</h1>
        
        {/* Rating Overview */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-12">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left side - Overall rating */}
            <div className="md:w-[240px] p-4">
              <h2 className="text-2xl font-semibold mb-4">Reviews</h2>
              <div className="text-6xl font-bold mb-2">5.0</div>
              <div className="flex gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-red-500 text-red-500" />
                ))}
              </div>
              <p className="text-gray-600">Out of 5 stars</p>
            </div>

            {/* Right side - Rating bars */}
            <div className="flex-1 space-y-4">
              {[5, 4, 3, 2, 1].map((stars) => (
                <div key={stars} className="flex items-center gap-4">
                  <span className="w-16 text-sm text-gray-600">{stars} star</span>
                  <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-red-500 rounded-full"
                      style={{ 
                        width: stars === 5 ? '100%' : '0%'
                      }}
                    />
                  </div>
                  <span className="w-8 text-sm text-gray-600 text-right">
                    {stars === 5 ? '15' : '0'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Reviews List */}
        <div className="space-y-6 mb-12">
          {reviews.map((review, idx) => (
            <Card key={idx} className="mb-6">
              <CardContent className="p-4 sm:p-6">
                <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                  {/* Content container - 70% width on desktop */}
                  <div className="w-full md:w-[70%] order-2 md:order-1">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex gap-4">
                        <img
                          src={review.avatar}
                          alt={review.name}
                          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                        />
                        <div>
                          <h3 className="font-semibold">{review.name}</h3>
                          <div className="flex items-center gap-1">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                          <p className="text-xs sm:text-sm text-gray-500">{review.date}</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm sm:text-base text-gray-600">{review.content}</p>
                  </div>

                  {/* Image container - 30% width on desktop */}
                  <div className="w-full md:w-[30%] h-[200px] sm:h-[240px] order-1 md:order-2 relative rounded-lg overflow-hidden">
                    <img
                      src={review.image}
                      alt="Review image"
                      className="object-cover h-full w-full"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Write Review Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Write a review</h2>
          <Card>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div>
                  <p className="mb-2 text-gray-700">Your rating</p>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        onClick={() => setUserRating(star)}
                        className="focus:outline-none"
                      >
                        <Star 
                          className={`w-6 h-6 ${
                            star <= userRating 
                              ? 'fill-red-500 text-red-500' 
                              : 'text-gray-300'
                          }`} 
                        />
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="mb-2 text-gray-700">Write your review</p>
                  <Textarea 
                    placeholder="Share your experience with us..."
                    className="min-h-[120px] bg-white"
                  />
                </div>
                <div className="flex gap-4">
                  <Button className="bg-red-500 hover:bg-red-600 text-white">
                    Submit Review
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Upload className="w-4 h-4" />
                    Add Photos
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
