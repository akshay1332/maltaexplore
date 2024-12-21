'use client'

import { type FC } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Banner from "@/components/banner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Phone } from 'lucide-react';
import { ChatSection } from "@/components/ChatSection";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const faqData = [
  {
    question: "What are your business hours?",
    answer: "Our customer service team is available Monday through Friday, 9:00 AM to 6:00 PM (CET). During peak season (June-September), we also offer weekend support from 10:00 AM to 4:00 PM."
  },
  {
    question: "How can I book a tour?",
    answer: "You can book a tour directly through our website by selecting your preferred tour and date. Alternatively, you can contact our team via email or phone for assistance with group bookings or custom tour requests."
  },
  {
    question: "What is your cancellation policy?",
    answer: "We offer free cancellation up to 48 hours before your scheduled tour. For cancellations within 48 hours, a 50% fee applies. No-shows are charged in full. Special conditions may apply for private tours and peak season bookings."
  },
  {
    question: "Do you offer private tours?",
    answer: "Yes, we offer private tours for all our destinations. Private tours can be customized to your preferences and schedule. Please contact us directly to arrange a private tour."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. For group bookings, we can also arrange special payment terms."
  }
];

const ContactPage: FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <div className="pt-16 md:pt-20">
          <Banner url="https://s3-alpha-sig.figma.com/img/fc25/458a/3e1b4f4a9926b7f3d91b10f931a0568a?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q3bswHrQWskga2vcPwHIvSTBWovCIByZaU5rh1ZDxkpb1IyeWDBPmBfxUXiCUMuHHzVtNm6CRkPWLv-Vmi~CkVIjS6Dbj4izvR19gEySHGDT2h9FEqqLsV8AGfXBRcTzCFOTheXedbBcRZANt7xuiY6qPw7GMqBYIMyDZfv5i12~o1w~XCOWgsPHW6PRwcZNK9budzAGLiGOLSK-~abL5zk279Pf5zzQgM~7L1J97DPpadwTkMYGTgC94va3tbMqcAseONRDQIhDvj~myu9RT3Iz-Bmy71UTspGFPwXerfLaho4sqDM1oxAIQIwaZp5URosmsipsVCdrLX3y4P41Eg__">
            <h1 className="text-4xl font-bold text-white">Contact Us</h1>
          </Banner>
        </div>

        <div className="container mx-auto px-4 py-12">
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
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="max-w-3xl mx-auto space-y-4">
              {faqData.map((item, index) => (
                <AccordionItem key={index} value={`item-${index + 1}`} className="bg-white rounded-lg border">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;