import React from 'react';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Section from "@/components/ui/section";
import { ImageWithOverlay } from "@/components/ui/image-with-overlay";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { LinkedinIcon, TwitterIcon, InstagramIcon, MapPin, Phone, Mail } from 'lucide-react';
import { TeamMember } from "@/types";

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Selena Smite",
    role: "Expert Team Guide",
    image: "https://s3-alpha-sig.figma.com/img/4f19/d451/e86fb8f152473931f274cf7a73a7ced2?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eQZ1eqrzdPuES1oznlA8Lm4nC-2tPPQJGICjw1J6kSBUUPPOWQUc~jIjDH19XpIxhSAVU-HUsAQVQX9ZLdocxiEp2vhbAZEVjL38IE-ypAdbV6atwoaeoMBPLEYifZmC9M5Wj44yCcg0nXX6fdm14XsZE-IFR63miCP3ZISP4uhT48wN4AGnuRjPfbWCjCAPV7HGi4OrtDq~bEE9Mj2ZgI4Ht5c3juPSEggFL4-0ojNRBQEifU82U7KP5Z-B5bsB2V-TtJkwt9uEl~-bB4l1fn0rRTNkwWtiK1j1MoJyU6juXiVCOryUzHd071A79MCONuriFXGCmrwtGQ2sjDlFyw__",
    socialLinks: {
      linkedin: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    id: 2,
    name: "Marco Rivera",
    role: "Expert Team Guide",
    image: "https://s3-alpha-sig.figma.com/img/46f8/39b4/b5419fc961bfe2f09951830ccc8691ad?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VTPjkHhbH7eQ3nCXw~GLHVhrtHqEGqNJoVSjomfpocR4AY4Sd7-YibrpbESqKVD2gvPm31ekMyUvMZGPx9whiKB7TNnfrbNo2RU3EE3eQh5i31R180nTQQLLvHtIDu-YqHFgEF9~zqWEsvgK2JIHpkO6ylmeOeZemlN3skFfVjGs4~XST8JPONIbnhokxYej1gYla1~fbrd4f~ST66RUy6NTOfSfGh2s567TPokV9iyMKp85Swhw-W56P6-vaAG2uxGuWKhnoObGFC55A1352DmIv2mSZgyFd62iVRY4jQrBqf-pEns01wJv0S-dPsGyZGriS6aj2E1QmUjAT6wi0A__",
    socialLinks: {
      linkedin: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    id: 3,
    name: "Sarah Johnson",
    role: "Expert Team Guide",
    image: "https://s3-alpha-sig.figma.com/img/f93f/b915/f6a596df6e82c3005a11cf0050875142?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hDBQzb-mY9HdT1vJ0YehoJierf01qEcrlk8AFKeoxUQo-ClEHfFlmvaP7JiRu3L3gIqizgeQEG-6iL8ZzFFxa0VTBctyKB1SJ88u0kaMaYAs2Oriy4PtNcnA7mYXyZjUliI-J~~z7V08w3sxrS2ox~OERODAZzkjPIoaMRuMLPRpYkgVyuJvEd5Rl18Mp0FFUV328tUF7QXSUv8OOn9GkvBFFnZHihqxqygTljEpmmAHuW39Og~T2xHwVJOuIaLtkPMhexHGYwQ~Jc8lGQovgJ~7O97FUaozf74ybeOuVz6nJgnec0-LzbR1~b6n7HzsXfMA9U-lFHS~iqva5-zKRA__",
    socialLinks: {
      linkedin: "#",
      twitter: "#",
      instagram: "#",
    },
  },
];

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#fff5f5]">
      <Header />
      
      {/* Hero Banner */}
      <div className="relative h-[400px] w-full mt-16">
        <ImageWithOverlay
          src="https://s3-alpha-sig.figma.com/img/aed9/11f9/5766b3ca66f433c1089322fba55fa4ea?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dmoa03QWtuJMoyDk6in8fyx6l1yxVLvaOCYgqXvb7CJXoFMTyxu67fdybruH8nhBcRywIPFGBNsEPHw9iEqB0wqN-EBiN2FGukb7DvahC~XCPPYVAaSpI~QdizQpmmPaYaZEX-0NUanvoU1foIdxXgR0ORQeDbXDqv~UI9YxIf7B6piu6n62SwIGEiegNy7dxfE9e9CJO~lo5DSvFDHRch7Xw~8wd8wOQcgkdfctO0e1M1uyZD3hJevz6gXWaaGOqgiO1cmzL4ykDFWdPAz3pn-zYOTxWtV2h44T0z3J01bILGAHur9Y2MAO4LCeUE1GgJ8x-eSJ~-rzFXGvc0t4aA__"
          priority
          overlay
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            About Us
          </h1>
        </div>
      </div>

      {/* Welcome Section */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Welcome to MaltaXplore
            </h2>
            <div className="space-y-4">
              <p className="text-xl text-gray-600">
                Your ultimate guide to discovering the rich heritage, stunning landscapes, and
                vibrant culture of Malta.
              </p>
              <p className="text-gray-600">
                Whether you're planning a relaxing getaway, an adventure-filled trip, or exploring Malta's history and traditions,
                MaltaXplore is here to make your journey unforgettable.
              </p>
              <p className="text-gray-600">
                As a team of passionate locals and travel enthusiasts, we bring together firsthand knowledge and insider tips to help you
                explore Malta like never before. From iconic landmarks to hidden gems, from culinary delights to thrilling experiences, we
                aim to connect you with the very best Malta has to offer.
              </p>
            </div>
          </div>
          <div className="relative h-[400px] md:h-[500px]">
            <div className="absolute right-0 top-0 w-3/4 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://s3-alpha-sig.figma.com/img/05ed/4852/698f5c735a490086d2e974a69457a819?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QnbzC-WUrsIkV-TyHCI0Ez6pNcZqXYwxDuv2vNLtaNzITqJ-YxRK7Cmf7fgSToK3jmEMVnWOkrfKzIa3pTTegyQHv3inNUtrPPHhEcyznPwENO8b-jB7Zy4QCV0kI9YkFbPHWfi03Zo6AGFTtv7-ZtwE~eYhvxA0tIHGyR79mFGYeRlvAUQCyWenodtzdZaNf5jCbxCrhJsoqoaj8sB-mxWbk5G9LPuHkj6LoPVa43aqiI~dH2xu8nRlw06DGkfZiq7-9tbzD87AYf5UT8VGGWwBDSELODaG04Zfb3lB1m~xr4vy9vvLWtfX3T6McSVyZvtLMz6XV~6ts6M1up6Lcg__"
                alt="Malta landscape"
                width={500}
                height={300}
                className="h-[250px] w-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-3/4 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://s3-alpha-sig.figma.com/img/7c56/b84f/3f11707386056417983e788ae19c9be0?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q9kIs6TYU0d0kB0kKonJoL-EM4qLQG5b04hhAPxqNBP-~RCgvTj~mQpw3c2t2ccP5ehfmWDBlIECgKSVR-8JQ9x1GH~FeGPzzPUFwkvPq0CX52dahwl4SQQP9DOU5JFvIunwMx8YfAY6vCyzLRSzlkGuMN-TS2WAvjF49mwBW7Mx6xJMreGQtyozqEkWfhph9o~ApYP8f0hXew3u~Vdty8TmLwPbVpFStowWhR2yLvAjtZvRHMspM~3BMBNhXWGoOKOajY-jqxOF-4mhGjTNaxloqAgkw64Mx1OJlHtY2-d9ofLdxmXWLRrgDb-z3d9PIDbfX0M00TTcPMBswxaWxg__"
                alt="Malta architecture"
                width={500}
                height={300}
                className="h-[250px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Our Story Section */}
      <Section className="bg-white">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://s3-alpha-sig.figma.com/img/6eb3/2fe2/8d42b38ec73af2fce03a4c3f84e7e8c3?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k4RbZwgzU~5nI8CLG94VzQqCAmKQzsT~riFx0OmyiL22jDDLHTZO8kUFy2KjrB2qY7L~0iu2cQvrw3irFb-hoLPFa8nREiZRI6bdQj-xhgtt88PRMw7lnGC5a9ppbSLSseL6aob5cp0Kotrl0yPipEXF7Of9V99bkIUqLY3mT9At7knw-J1XEYTwRgFy21ko8DsFB83rQmFOlpK1gXcFhxNdMRX0V2X7gEPVFg8~cINifD8AT9f87x5Ekkj7J-4Iaa0BAJnorSslklI-t6M6bkKY58rCfgYK6yOiWWm0-yw9WoOUYTSC4nk5hn8y3OhWONOeIiy-M2oxpFLBxP-kRQ__"
              alt="Malta coastal village"
              width={600}
              height={400}
              className="w-full h-[400px] object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Story</h2>
            <div className="space-y-4">
              <p className="text-gray-600">
                MaltaXplore began with a simple idea: to share the unmatched beauty and rich culture of
                Malta with the world. What started as a passion project by a group of avid travelers
                and proud locals has grown into a trusted platform for exploring everything the Maltese
                Islands have to offer.
              </p>
              <p className="text-gray-600">
                Driven by a love for Malta's history, stunning vistas, and warm hospitality, we set out
                to create a space where visitors can find authentic insights and practical advice to make
                their trip unforgettable. Our story is one of connection, inspiration, and a deep
                commitment to showcasing the heart of Malta to travelers from all walks of life.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CEO Quote Section */}
      <Section>
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <span className="text-red-500 text-7xl font-serif leading-none block">
            "
          </span>
          <p className="text-2xl md:text-3xl font-medium leading-relaxed text-gray-800">
            At MaltaXplore, we aim to inspire and guide travelers, ensuring
            every visit to Malta is unforgettable and authentic.
          </p>
          <div className="flex flex-col items-center gap-3 py-6">
            <div className="relative w-20 h-20 rounded-full overflow-hidden">
              <img
                src="https://s3-alpha-sig.figma.com/img/b040/a8ec/478885ddff72c629f05c598763239495?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D9PiKDYgt0RC5uRxZ7c36IHbGhFEYCxCgvwWAhxKLRA4CLO0Steuo9PEY8nHNDxZ3xg72Mwi5B505wvxvBlq096JL33JyQ-Oe2yv1ImYgzSUg~uJ9AuTPdAmNe4hY8XetJoDpnK7-IznmU-eiqltGQ~TvyFdJW5nZaGXMoOyJf1edw5OyckP14oF-nz0QQsCDLd-iMKmGV9E5sGvluCLwFA0e~jEIaAmGLIe8vUHPCBfWq8huRr8B-QfFl8pjN03de~iW4xNUuYEXtUAY9BxAGcyWH0BtQY5J2YaLnNZPeXoRlKNVlc7pY343H0L7EQq0QylxqsLUYQpc1ca8o-0MA__"
                alt="Cleven D'amato"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Cleven D'amato</h3>
            <p className="text-gray-600">CEO & Founder</p>
          </div>
          <span className="text-red-500 text-7xl font-serif leading-none block rotate-180">
            "
          </span>
        </div>
      </Section>

      {/* Mission Section */}
      <section className="relative">
        <div className="relative h-[600px] w-full overflow-hidden">
          <img
            src="https://s3-alpha-sig.figma.com/img/1412/37ab/99047aad843ef25732a1da260b74a1fb?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dXtkcytkoe3p2TLAbfrZZt3xSPu4IF4hHtrgj~9zJ1ij-Dud0yTAAczWn1CcMbhdmkpfh0gpdnpL8fT3yIz~6vlQTKMHKuBST65nI-YNMYwGVdFGUVK4uMnqhP-RgAJ1Uo62tPcmB-N5Cgfntx8NASXAoWCodIj5-HNx3-zfFCrthIlyS21cfsg8NyeY2S-zL77dvwfre4eBxOz1u4q~3izMkzS-uxsVCvR-p-7tyc5wsq-e8N~4a6eZmXIbKm94uOiP26lpsnaFaSk2yCT8KY490JnIuG45e730wVogIC-qy6~Jbjsbrg9tPu1BaCPs8N3xaKZJvVE0JGJcsIzfAQ__"
            alt="Malta coastline"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="bg-white rounded-full px-8 py-2 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              We are on a mission
            </h2>
          </div>
          <div className="container px-4 mx-auto">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  At MaltaXplore, our mission is to inspire and empower travelers by
                  providing reliable, in-depth information about Malta's attractions,
                  activities, and accommodations. We are committed to being your
                  trusted resource, ensuring every visitor to Malta has access to
                  accurate, up-to-date, and personalized travel insights.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To become the leading platform for exploring Malta, recognized
                  globally for fostering meaningful travel experiences, promoting
                  sustainable tourism, and celebrating the unique beauty of the
                  Maltese Islands.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <Section>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
          Meet with our smart team
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member) => (
            <div key={member.id} className="group">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={533}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
                <div className="flex gap-2">
                  <a 
                    href={member.socialLinks.linkedin}
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <LinkedinIcon className="h-5 w-5 text-gray-600" />
                  </a>
                  <a 
                    href={member.socialLinks.twitter}
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                    aria-label={`${member.name}'s Twitter`}
                  >
                    <TwitterIcon className="h-5 w-5 text-gray-600" />
                  </a>
                  <a 
                    href={member.socialLinks.instagram}
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                    aria-label={`${member.name}'s Instagram`}
                  >
                    <InstagramIcon className="h-5 w-5 text-gray-600" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section className="bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions or want to start your Malta adventure? Reach out to us, and our expert team will be happy to assist you.
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
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
      </Section>

      <Footer />
    </div>
  );
}

export default AboutPage;
