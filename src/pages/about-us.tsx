import React from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { MapPin, Mail, Phone } from 'lucide-react'

export function AboutUsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="pt-16 md:pt-20">
        {/* Hero Section */}
        <div className="relative h-[300px] flex items-center justify-center">
          <img
            src="/placeholder.svg"
            alt="About Us Background"
            className="absolute inset-0 w-full h-full object-cover brightness-50"
          />
          <h1 className="text-4xl font-bold text-white relative z-10">About MaltaXplore</h1>
        </div>

        <main className="container mx-auto px-4 py-12">
          <section className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Story</h2>
              <p className="text-gray-600 mb-4">
                MaltaXplore was born from a passion for the beautiful Maltese Islands and a desire to help travelers 
                discover their hidden gems. Founded by a team of local experts, we aim to provide authentic, 
                immersive travel experiences that go beyond typical tourist routes.
              </p>
              <p className="text-gray-600">
                Our mission is to connect travelers with the rich culture, history, and natural beauty of Malta, 
                creating memories that last a lifetime.
              </p>
            </div>
            <div>
              <img 
                src="/placeholder.svg" 
                alt="MaltaXplore Team" 
                className="rounded-lg shadow-lg object-cover w-full h-[400px]"
              />
            </div>
          </section>

          <section className="mt-16 bg-gray-50 p-12 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((member) => (
                <div key={member} className="text-center">
                  <img 
                    src="/placeholder.svg" 
                    alt={`Team Member ${member}`} 
                    className="w-48 h-48 mx-auto rounded-full object-cover mb-4"
                  />
                  <h3 className="text-xl font-semibold">Team Member {member}</h3>
                  <p className="text-gray-600">Founder & Travel Expert</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-8">Contact Information</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4">
                <MapPin className="w-8 h-8 text-[#E5484D]" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Our Location</h3>
                  <p className="text-gray-600">20, Guze Ellul Mercer Str, Iklin, Malta</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4">
                <Mail className="w-8 h-8 text-[#E5484D]" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Email Address</h3>
                  <p className="text-gray-600">maltaxplore@gmail.com</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4">
                <Phone className="w-8 h-8 text-[#E5484D]" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Phone Number</h3>
                  <p className="text-gray-600">+356 123-456-789</p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  )
}
