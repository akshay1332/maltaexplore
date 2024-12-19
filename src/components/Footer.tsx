import { Facebook, Twitter, Instagram, Github } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-[#E5484D] text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Newsletter Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 pb-12 border-b border-white/20">
          <h2 className="text-2xl font-bold mb-4 md:mb-0">SO WHY LATE? ONE STEEP FAR FROM A TOUR</h2>
          <div className="flex w-full md:w-auto">
            <Input placeholder="Your mail address" className="rounded-r-none border-white bg-white/10 text-white placeholder-white/70" />
            <Button className="rounded-l-none bg-white text-[#E5484D] hover:bg-white/90">Send</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-4">Logo Here</h3>
            <p className="text-white/80 mb-4">
              Immerse yourself in stunning visuals and captivating stories as you navigate through our website.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 border border-white/20 rounded-full hover:bg-white/10">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 border border-white/20 rounded-full hover:bg-white/10">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 border border-white/20 rounded-full hover:bg-white/10">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 border border-white/20 rounded-full hover:bg-white/10">
                <Github className="w-4 h-4" />
              </a>
            </div>
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
  )
}
