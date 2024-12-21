'use client'

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Gift, Calendar, Star } from 'lucide-react'
import Reviews from "@/components/review"
import hero from '../../public/metapasshero.svg'
import bg from '../../public/Rectangle 102.svg'

const reviews = [
  {
    id: 1,
    name: "Sarah Thompson",
    rating: 5,
    comment: "The MaltaPass was the best investment for our trip! We saved so much money and got to see all the major attractions without any hassle. The skip-the-line feature was especially helpful during peak hours.",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    date: "December 15, 2023"
  },
  {
    id: 2,
    name: "Michael Chen",
    rating: 4,
    comment: "Great value for money! We used the pass for museums, boat tours, and historical sites. The only minor issue was that some attractions required advance booking.",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    date: "December 10, 2023"
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    rating: 5,
    comment: "Absolutely fantastic! The digital pass was so convenient, and the included audio guides really enhanced our experience at the historical sites. Would highly recommend!",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    date: "December 5, 2023"
  }
];

export function MetapassPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-[#E5484D] overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center py-12 md:py-20">
              <div className="text-white space-y-6 relative z-10">
                <span className="text-sm font-medium">MaltaPass</span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Unlock the Best of Malta with One Pass
                </h1>
                <p className="text-lg opacity-90">
                  The MaltaPass is your ultimate key to discovering Malta's rich history,
                  stunning landscapes, and vibrant culture—all while saving money and
                  making your journey hassle-free.
                </p>
              </div>
              <div className="relative h-[300px] md:h-[400px]">
                <img
                  src={hero}
                  alt="Malta Harbor"
                  className="absolute inset-0 w-full h-full object-cover rounded-lg"
                />
                <div className="absolute top-4 right-4 bg-white rounded-full p-4 text-[#E5484D] font-bold">
                  <div className="text-2xl">30%</div>
                  <div className="text-sm">UP TO OFF</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What is MaltaPass Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://s3-alpha-sig.figma.com/img/9e8e/459f/547f90de8498547915d5e813462b4486?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N57Aghv5C6zeRw~g-VHaFspsDxxeB773EHl8rwVa0ksRzrXyNE8TQzSufCb2u9pNxiPm9PD4jeSgjLDHOzxl9ieCkAWaqgtD4-114LrSdunFjba4IQ3gOcLAdBGPsV4yaNe8ouRsGJVeUi~nf0me7dr6oKvLhoY2Z105GZ1nLjY1VmIcea8122THbkmZSIXjvsh-cDgQDDfHRyytwkRqHCd5Wj2PaYVKipWJ9Lb0kuYFNEAW~i6dPtsVU1TBOoU6aXnx-nN5h6Onh~cOO24nSgy6UUV7wa0AmjSpURCa-n91lcMvXrKKabFxR00qncok~f8Mi5aS7~i-qApvIc~zHg__"
                  width={300}
                  height={200}
                  alt="Malta Landscape"
                  className="rounded-lg col-span-2"
                />
                <img
                  src="https://s3-alpha-sig.figma.com/img/1299/b1b3/1f15317fa9a9af9a70f739a3d67e707b?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oh6LqwMB~IiP4eB4eFnqfE-sj4iSxCB9qmXayH0u0WMidCIs7beDyOEfPkDcZ1HVTOUe3-pV8D8GJfPTbcqdgRN6mcVqBtGhqVeGS5k-6pAkh250xlS8Kjg5Ds-0TTs1Cu4lYWaDwdU-VdHPKC7dkqXAoyUGQweCbRv1gFBtgFlmx0vJjbkuayEwNq0yr035uu5VFuEkV3PZCeMVtLTa95699V93TAIF7Zbxh~f~2nSbKJkDjSbf8FmV18zWeuP8nH1rj8PZhj13lTL5wzAtnE0Bwc5YCXuR4FLJuIQJ~VwIksuouiSE33bGFCNnv5QVgLUZCLebr1T4FiViBrDEIA__"
                  width={300}
                  height={200}
                  alt="Malta Architecture"
                  className="rounded-lg"
                />
                <img
                  src="https://s3-alpha-sig.figma.com/img/77c6/514f/151e6f6aa8d8c03200b9ae774f496d33?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KbrTsbyb-jL-vfbgO78M9Z0rQptaGLQHq-giNZcayKaUANN~RfEpEMTqcOsPkRUPMWyqs6j0II6mXlGB3HI5uX0fZhFwitUXT5AW0UCIjdlCSi~j0CywhM3n4QUxO0kf1YwR~2WhT-TVvU3ZCZfGDDerMRn5QPu9nxAiFJUWZACVzrrDNGgtep17cKUL6RHdlb3ubjbo6~sSqELAzd-rk7dTUJckSt1jappzsgMHkkUR9jyihlL~eqsCqc7BmOYNHl7eoQqlKvlSQju-z4e7Njc5TwJ8qr7T8EpT6OayHzJkiz2EP8pVseRKfpNhMC8S8-k0X1pjYAYpv8cuQgB2aQ__"
                  width={300}
                  height={200}
                  alt="Malta Coastline"
                  className="rounded-lg"
                />
              </div>
              <div className="space-y-8">
                <h2 className="text-3xl md:text-4xl font-bold">What is the MaltaPass?</h2>
                <p className="text-gray-600">
                  The MaltaPass is an all-inclusive travel pass designed to offer you:
                </p>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <MapPin className="w-6 h-6 text-[#E5484D]" />
                    <div>
                      <h3 className="font-semibold">Free or Discounted Entry</h3>
                      <p className="text-gray-600">to top attractions and experiences.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Gift className="w-6 h-6 text-[#E5484D]" />
                    <div>
                      <h3 className="font-semibold">Exclusive Deals</h3>
                      <p className="text-gray-600">at restaurants, shops, and activities.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Calendar className="w-6 h-6 text-[#E5484D]" />
                    <div>
                      <h3 className="font-semibold">Easy Planning</h3>
                      <p className="text-gray-600">with access to a curated list of the best places to visit.</p>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">
                  Whether you're in Malta for a day or an entire week, the MaltaPass ensures you
                  enjoy everything the island has to offer without overspending.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Overview Section */}
        <section className="py-16 md:py-24 bg-[#FFF1F2]">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Overview of Benefits</h2>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Why Choose MaltaPass?</h3>
              <p className="text-gray-600">
                The MaltaPass offers unmatched convenience, savings, and access,
                making it the ultimate travel companion for exploring Malta.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-white">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-6">Save Money on Top Attractions</h3>
                  <p className="mb-4">With the MaltaPass, you'll enjoy free entry or significant discounts at Malta's most popular and must-see destinations, including:</p>
                  <div className="space-y-6">
                    {[
                      {
                        number: "01",
                        title: "Historic Sites:",
                        description: "The Hypogeum, St. John's Co-Cathedral, and Hagar Qim Temples."
                      },
                      {
                        number: "02",
                        title: "UNESCO World Heritage Locations:",
                        description: "Gain access to sites like the Megalithic Temples and the ancient city of Mdina."
                      },
                      {
                        number: "03",
                        title: "Museums:",
                        description: "Save on admission to the National Museum of Archaeology, Malta Maritime Museum, and many more."
                      }
                    ].map((item) => (
                      <div key={item.number} className="flex gap-4">
                        <span className="text-4xl font-bold text-gray-200">{item.number}</span>
                        <div>
                          <h4 className="font-semibold">{item.title}</h4>
                          <p className="text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-6">Dining Discounts</h3>
                  <p className="mb-4">Taste the flavors of Malta while saving on dining experiences:</p>
                  <div className="space-y-6">
                    {[
                      {
                        number: "01",
                        title: "Exclusive Restaurant Offers:",
                        description: "Enjoy up to 20% off at a curated list of Malta's top-rated restaurants and cafes."
                      },
                      {
                        number: "02",
                        title: "Food Tours:",
                        description: "Discounts on guided food and wine tours to experience Malta's culinary heritage."
                      },
                      {
                        number: "03",
                        title: "Local Markets and Shops:",
                        description: "Save on souvenirs, artisanal products, and gourmet treats."
                      }
                    ].map((item) => (
                      <div key={item.number} className="flex gap-4">
                        <span className="text-4xl font-bold text-gray-200">{item.number}</span>
                        <div>
                          <h4 className="font-semibold">{item.title}</h4>
                          <p className="text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Pass Options Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Choose the Pass That Fits Your Trip
            </h2>
            <p className="text-center mb-8 text-gray-600">
              Whether you're planning a quick getaway or a leisurely vacation, the MaltaPass
              offers flexible options to suit every itinerary.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {/* 1-Day Pass */}
              <Card>
                <CardContent className="p-0">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/dbce/9435/6e5e9262be40a8ad6d3f8cf68622f4a9?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LNR0fmVW~-4QnBYLzjbvO5J86A-clTGdbK9W~VcH3Iz2nnmO3t3ROWLNk2bmmpHoyMHN60kN6T1KTM-ACNEte5xKMXbZfGM8u-d2dRnn00KqrV-nMpouVIMIj3xJ8wfpjJmnr0NQK54ev-ngESVP3QvzEL1bx6m3EeNSEYijOpachUvRAPJSE6LttH0DiJGSfcPmGfvREoabHES7O4~V6jA03l4Z-GAIcp53Z~-eYctty0T0LFq4quO20mXep-xJufkpIkaVaM-YSMFS0KsXp3pV2B6HLn2QMlM0WMcEBl87GVP~i8wPi4r0XDf1fgLDPAR02t3lzHv~zmw5gusMgA__"
                    width={600}
                    height={400}
                    alt="Malta Church"
                    className="w-full object-cover"
                  />
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-2xl font-bold">1-Day Pass</h3>
                      <span className="text-2xl font-bold">$2500</span>
                    </div>
                    <p className="text-gray-600 mb-6">
                      Perfect for short visits or day-trippers looking to make the most of a limited schedule.
                    </p>
                    <div className="space-y-4">
                      <h4 className="font-semibold">What's Included:</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Access to a curated selection of Malta's top attractions.</li>
                        <li>• Discounts at popular restaurants and cafes.</li>
                        <li>• Free entry or discounts on select guided tours, such as harbor cruises or historical walking tours.</li>
                        <li>• Transportation savings, including free use of key public transport routes for the day.</li>
                      </ul>
                    </div>
                    <div className="mt-6 space-y-4">
                      <h4 className="font-semibold">Who It's For:</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Day-travelers or cruise visitors who want a packed day of sightseeing.</li>
                        <li>• Travelers with a tight schedule who prefer the highlights.</li>
                      </ul>
                    </div>
                    <Button className="w-full mt-6 bg-[#E5484D] hover:bg-[#E5484D]/90">
                      Book Now
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* 1-Week Pass */}
              <Card>
                <CardContent className="p-0">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/dbce/9435/6e5e9262be40a8ad6d3f8cf68622f4a9?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LNR0fmVW~-4QnBYLzjbvO5J86A-clTGdbK9W~VcH3Iz2nnmO3t3ROWLNk2bmmpHoyMHN60kN6T1KTM-ACNEte5xKMXbZfGM8u-d2dRnn00KqrV-nMpouVIMIj3xJ8wfpjJmnr0NQK54ev-ngESVP3QvzEL1bx6m3EeNSEYijOpachUvRAPJSE6LttH0DiJGSfcPmGfvREoabHES7O4~V6jA03l4Z-GAIcp53Z~-eYctty0T0LFq4quO20mXep-xJufkpIkaVaM-YSMFS0KsXp3pV2B6HLn2QMlM0WMcEBl87GVP~i8wPi4r0XDf1fgLDPAR02t3lzHv~zmw5gusMgA__"
                    width={600}
                    height={450}
                    alt="Malta Coastline"
                    className="w-full object-cover"
                  />
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-2xl font-bold">1-Week Pass</h3>
                      <span className="text-2xl font-bold">$2500</span>
                    </div>
                    <p className="text-gray-600 mb-6">
                      Designed for longer stays, giving you the freedom to explore at a relaxed pace while maximizing value.
                    </p>
                    <div className="space-y-4">
                      <h4 className="font-semibold">What's Included:</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Unlimited access to all included attractions, tours, and activities.</li>
                        <li>• Extended dining and shopping discounts throughout your trip.</li>
                        <li>• Additional savings on outdoor adventures like diving, kayaking, and cultural workshops.</li>
                        <li>• Discounts on car rentals or weekly transport options, ideal for reaching Malta's hidden gems.</li>
                      </ul>
                    </div>
                    <div className="mt-6 space-y-4">
                      <h4 className="font-semibold">Who It's For:</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Families, couples, or solo travelers on a vacation.</li>
                        <li>• Those who want to immerse themselves in Malta's everything without rushing.</li>
                      </ul>
                    </div>
                    <Button className="w-full mt-6 bg-[#E5484D] hover:bg-[#E5484D]/90">
                      Book Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <Reviews 
          title="What Pass Holders Say"
          subtitle="Discover why travelers love using MaltaPass for their adventures"
          reviews={reviews}
        />

      
        {/* CTA Section */}
        <section className="relative h-[500px] flex items-center justify-center text-white">
          <img
            src="https://s3-alpha-sig.figma.com/img/5191/7d17/b9ffd59f31132d2e75ac2ba73e001f7c?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NMxJOqWiGg0mx~T-kZB6M3WqsR-HJFTZkrfUofgyJva0mWM~4CwLynp2wpfOTd~v1nSBiXej-Cov~a0xfeGn6vzoPlY5HsTlr1YppYu~KOR~enqW3YKGDwNJprh8syzrGjpYqVde3nEjLgvjYFRpqZYCl2xmnbrTJFwnPWIGsgx7sHKmhY8-6jgCCIq3-q0UR35VWobYORmw3cg6sniP~Y~isZTM1~f4P2eUZOdwbxPK48QartJvpXO5ULP~ffmo~lYkNDBxhNF-p-opfE~ROHl~7id6u6z3bIUGW6xNpKk9VTyyG3YT3f0QVjuAxZp6tpjG72pDkc1-Q6xnYJeK7w__"
            alt="Malta Seascape"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-10 text-center space-y-6 max-w-3xl mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to Experience Malta Like Never Before?
            </h2>
            <p className="text-lg opacity-90">
              Start exploring now and book the best tours, activities,
              and dining experiences on the island.
            </p>
            <Button size="lg" className="bg-[#E5484D] hover:bg-[#E5484D]/90">
              Get Malta Pass Now
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
