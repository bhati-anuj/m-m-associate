"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Quote } from "lucide-react"
// import kamal from "@/utils/Testimonial/kamal.jpeg"
// import anuj from"@/utils/Testimonial/anuj.jpeg";
// import anuj2 from "@/utils/Testimonial/anuj2.jpeg"
// import img from "../../utils/Testimonial/kamal.jpeg"

interface Testimonial {
  name: string
  role: string
  image: string
  quote: string
}

const testimonials: Testimonial[] = [
  {
    name: "Cloe Marena",
    role: "OWNER OF BUILDING CO.",
    image: "../../utils/Testimonial/kamal.jpeg",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium non eligendi totam natus ullam cumque! Assumenda optio, ad in! Nesciunt natus veritatis hic iste quas. Sunt iste autem vel repudiandae.",
  },
  {
    name: "Nathalie Channie",
    role: "OWNER OF BUILDING CO.",
    image:"@/utils/Testimonial/anuj.jpeg",
    quote:
      "Eveniet, laboriosam impedit facilis. Voluptatem, repudiandae eligendi maiores sunt itaque, dolores voluptas labore perferendis, illum tenetur suscipit vero officia. Quaerat facilis cum ex a labore iusto, beatae fuga nam rem, quos vel aliquam nobis.",
  },
  {
    name: "Will Turner",
    role: "OWNER OF BUILDING CO.",
    image: "@/utils/Testimonial/anuj2.jpeg",
    quote:
      "Laboriosam nisi natus quos soluta blanditis iste in distinctio fugiat perferendis, architecto eveniet provident, consequatur dolore ab nihil voluptatibus laborum magnam cum assumenda nobis, nam quam quae! Unde porro laboriosam nam qui! Eligendi, qui!",
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h3 className="text-textGolden font-medium mb-2">HAPPY CLIENTS</h3>
        <h2 className="text-4xl font-semibold">Testimonials</h2>
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">
              <Card className="border-none shadow-none">
                <CardContent className="flex flex-col items-center text-center p-6">
                  <Avatar className="w-24 h-24 mb-4">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-semibold mb-1">{testimonial.name}</h3>
                  <p className="text-textGolden text-sm font-medium mb-6">{testimonial.role}</p>
                  <div className="relative">
                    <Quote className="absolute -top-4 -left-4 w-8 h-8 text-gray-200 rotate-180" />
                    <p className="italic text-gray-600 max-w-2xl mx-auto">{testimonial.quote}</p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex -left-12" />
        <CarouselNext className="hidden md:flex -right-12" />
      </Carousel>
    </section>
  )
}

