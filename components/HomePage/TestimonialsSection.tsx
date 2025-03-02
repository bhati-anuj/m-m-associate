"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Users } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-md bg-golden/10 px-3 py-1 text-sm font-medium text-golden">
            <Users className="h-4 w-4" />
            <span>Client Testimonials</span>
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tighter text-darkBlue sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-blue">
            Don&apos;t just take our word for it. Hear from clients who have
            experienced the M&M Associates difference.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              quote:
                "M&M Associates transformed our vision into reality. Their architectural design was innovative and their construction execution was flawless. We couldn't be happier with our new headquarters.",
              author: "Sarah Johnson",
              position: "CEO, TechInnovate Inc.",
            },
            {
              quote:
                "The attention to detail throughout both the design and construction phases was impressive. The team at M&M Associates anticipated challenges before they became problems and delivered our project on time and on budget.",
              author: "Michael Chen",
              position: "Director of Facilities, Meridian Healthcare",
            },
            {
              quote:
                "Working with M&M Associates on our residential development was a seamless experience. Their integrated approach to architecture and construction eliminated the usual coordination headaches and resulted in a superior final product.",
              author: "David Rodriguez",
              position: "Principal, Horizon Development Group",
            },
          ].map((testimonial, i) => (
            <Card key={i} className="relative border-none shadow-md">
              <CardHeader className="pb-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-12 w-12 text-golden/20"
                >
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                </svg>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="mb-6 text-blue">{testimonial.quote}</p>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-golden/10 flex items-center justify-center">
                    <span className="text-lg font-medium text-golden">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-darkBlue">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-blue">{testimonial.position}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
