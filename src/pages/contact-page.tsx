'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion"
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import { MapPin, Mail, Phone } from 'lucide-react'
import { ChatSection } from "../components/ChatSection"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Add padding top to account for fixed header */}
      <div className="pt-16 md:pt-20">
        {/* Hero Section */}
        <div className="relative h-[300px] flex items-center justify-center">
          <img
            src="https://s3-alpha-sig.figma.com/img/fc25/458a/3e1b4f4a9926b7f3d91b10f931a0568a?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q3bswHrQWskga2vcPwHIvSTBWovCIByZaU5rh1ZDxkpb1IyeWDBPmBfxUXiCUMuHHzVtNm6CRkPWLv-Vmi~CkVIjS6Dbj4izvR19gEySHGDT2h9FEqqLsV8AGfXBRcTzCFOTheXedbBcRZANt7xuiY6qPw7GMqBYIMyDZfv5i12~o1w~XCOWgsPHW6PRwcZNK9budzAGLiGOLSK-~abL5zk279Pf5zzQgM~7L1J97DPpadwTkMYGTgC94va3tbMqcAseONRDQIhDvj~myu9RT3Iz-Bmy71UTspGFPwXerfLaho4sqDM1oxAIQIwaZp5URosmsipsVCdrLX3y4P41Eg__"
            alt="Contact Us Background"
            className="absolute inset-0 w-full h-full object-cover brightness-50"
          />
          <h1 className="text-4xl font-bold text-white relative z-10">Contact Us</h1>
        </div>

        <main className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-lg rounded-lg overflow-hidden">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">First Name</label>
                      <Input placeholder="First Name" className="border-gray-300 focus:border-red-500 focus:ring-red-500" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Last Name</label>
                      <Input placeholder="Last Name" className="border-gray-300 focus:border-red-500 focus:ring-red-500" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Email</label>
                    <Input type="email" placeholder="your mail address" className="border-gray-300 focus:border-red-500 focus:ring-red-500" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Phone Number</label>
                    <Input placeholder="your phone number" className="border-gray-300 focus:border-red-500 focus:ring-red-500" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Message</label>
                    <Textarea placeholder="leave a message for us" rows={4} className="border-gray-300 focus:border-red-500 focus:ring-red-500" />
                  </div>
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 text-lg">Send Now</Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Our Location:</h2>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-1 text-red-600" />
                  <p className="text-gray-600">20, Guze Ellul Mercer Str, Iklin<br />IKL1371 MALTA</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Contact us:</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-red-600" />
                    <p className="text-gray-600">123-456-789</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-red-600" />
                    <p className="text-gray-600">maltaxplore@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Chat Section */}
          <div className="mt-16">
            <ChatSection />
          </div>

          {/* FAQ Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Frequently Asked Question</h2>
            <Accordion type="single" collapsible className="max-w-3xl mx-auto">
              <AccordionItem value="item-1" className="border-b border-gray-200">
                <AccordionTrigger className="text-lg font-medium text-gray-700 hover:text-red-600">What services does MaltaXplore offer?</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  MaltaXplore provides comprehensive travel information about Malta, including top attractions,
                  local experiences, accommodations, dining options, and booking services. Our platform is
                  designed to help you plan and enjoy a seamless and memorable trip to the Maltese Islands.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-b border-gray-200">
                <AccordionTrigger className="text-lg font-medium text-gray-700 hover:text-red-600">How can I make a booking through MaltaXplore?</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  You can easily make bookings through our website by selecting your desired service or tour
                  and following the simple booking process. Our system is secure and user-friendly.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-b border-gray-200">
                <AccordionTrigger className="text-lg font-medium text-gray-700 hover:text-red-600">Is my personal information secure on MaltaXplore?</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Yes, we take data security seriously and use industry-standard encryption to protect your
                  personal information. Our privacy policy ensures your data is handled safely and securely.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  )
}