import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import contact from "@/utils/Contactus/contactus.jpg";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

export default function ContactUsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src={contact}
              alt="M&M Associates office"
              fill
              className="object-cover brightness-[0.4]"
              priority
            />
          </div>
          <div className="container relative z-10 py-24 md:py-32 lg:py-40">
            <div className="max-w-3xl space-y-5">
              <div className="inline-block rounded-lg bg-golden px-3 py-1 text-sm text-white">
                Get in Touch
              </div>
              <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">
                Let&apos;s Build Something Extraordinary Together
              </h1>
              <p className="text-xl text-gray-800">
                Have a project in mind? We&apos;re here to help turn your vision
                into reality. Reach out to us and let&apos;s start a
                conversation.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 md:py-24 bg-gray">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-white border-none shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-golden" />
                    <span>Our Office</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue">
                    AG-12A, Sector 144, Noida
                    <br />
                    Uttar Pradesh 201301
                    <br />
                    India
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white border-none shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-golden" />
                    <span>Phone</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue"> +91 9990666325</p>
                  {/* <p className="text-blue">Fax: (555) 987-6543</p> */}
                </CardContent>
              </Card>
              <Card className="bg-white border-none shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-golden" />
                    <span>Email</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue">mnmassociate13@gmail.com</p>
                  {/* <p className="text-blue">support@mmassociates.com</p> */}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Form and Map */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter text-darkBlue mb-6">
                  Send Us a Message
                </h2>
                <form className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-blue mb-1"
                      >
                        Name
                      </label>
                      <Input id="name" placeholder="Your name" />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-blue mb-1"
                      >
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="Your email" />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-blue mb-1"
                    >
                      Subject
                    </label>
                    <Input id="subject" placeholder="Message subject" />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-blue mb-1"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Your message"
                      rows={6}
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-golden hover:bg-golden/90 text-white"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tighter text-darkBlue mb-6">
                  Our Location
                </h2>
                <div className="aspect-square relative rounded-xl overflow-hidden">
                  <Image
                    src={contact}
                    alt="Map of M&M Associates office location"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Office Hours and Social Media */}
        <section className="py-16 md:py-24 bg-gray">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter text-darkBlue mb-6">
                  Office Hours
                </h2>
                <Card className="bg-white border-none shadow-md">
                  <CardContent className="pt-6">
                    <ul className="space-y-3">
                      <li className="flex justify-between items-center">
                        <span className="font-medium text-blue">
                          Monday - Friday
                        </span>
                        <span className="text-blue">9:00 AM - 6:00 PM</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span className="font-medium text-blue">Saturday</span>
                        <span className="text-blue">10:00 AM - 4:00 PM</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span className="font-medium text-blue">Sunday</span>
                        <span className="text-blue">Closed</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tighter text-darkBlue mb-6">
                  Connect With Us
                </h2>
                <Card className="bg-white border-none shadow-md">
                  <CardContent className="pt-6">
                    <div className="flex gap-4">
                      <Link href="#" className="text-blue hover:text-golden">
                        <Facebook className="h-8 w-8" />
                        <span className="sr-only">Facebook</span>
                      </Link>
                      <Link href="#" className="text-blue hover:text-golden">
                        <Twitter className="h-8 w-8" />
                        <span className="sr-only">Twitter</span>
                      </Link>
                      <Link href="#" className="text-blue hover:text-golden">
                        <Instagram className="h-8 w-8" />
                        <span className="sr-only">Instagram</span>
                      </Link>
                      <Link href="#" className="text-blue hover:text-golden">
                        <Linkedin className="h-8 w-8" />
                        <span className="sr-only">LinkedIn</span>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tighter text-darkBlue mb-6 text-center">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    What services does M&M Associates offer?
                  </AccordionTrigger>
                  <AccordionContent>
                    M&M Associates offers a comprehensive range of services
                    including architectural design, construction management,
                    interior design, and lift services. We provide end-to-end
                    solutions for residential, commercial, and industrial
                    projects.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    How do I request a quote for my project?
                  </AccordionTrigger>
                  <AccordionContent>
                    To request a quote, you can fill out the contact form on
                    this page, call us directly, or send an email with details
                    about your project. Our team will get back to you within
                    24-48 hours to discuss your needs and provide a customized
                    quote.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    Does M&M Associates work on international projects?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes, M&M Associates has experience working on international
                    projects. We have a global network of partners and are
                    equipped to handle projects in various countries, adhering
                    to local regulations and standards.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>
                    What is your approach to sustainable design?
                  </AccordionTrigger>
                  <AccordionContent>
                    Sustainability is at the core of our design philosophy. We
                    incorporate eco-friendly materials, energy-efficient
                    systems, and sustainable practices in all our projects. Our
                    team is well-versed in green building certifications like
                    LEED and BREEAM.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>
                    How long does a typical project take from start to finish?
                  </AccordionTrigger>
                  <AccordionContent>
                    Project timelines can vary greatly depending on the scope
                    and complexity. A small renovation might take a few months,
                    while a large-scale commercial project could span several
                    years. During our initial consultation, we&apos;ll provide a
                    detailed timeline tailored to your specific project.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 md:py-24 bg-darkBlue text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Whether you have a specific project in mind or just want to
              explore possibilities, we&apos;re here to help. Let&apos;s turn
              your vision into reality.
            </p>
            <Button
              size="lg"
              className="bg-golden hover:bg-golden/90 text-white"
            >
              Schedule a Consultation
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
