import React from "react";
import { Button } from "@/components/ui/button";

const InquiryForm = () => {
  return (
    <section className="py-16 md:py-24 bg-darkBlue text-white">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div className="space-y-5">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to Bring Your Vision to Life?
            </h2>
            <p className="text-xl text-white/90">
              Contact our team today to discuss your architecture and
              construction needs. We&apos;re here to transform your ideas into
              exceptional spaces.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="font-medium bg-golden hover:bg-golden/90 text-white"
              >
                Schedule a Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-black hover:bg-white/10"
              >
                View Our Services
              </Button>
            </div>
          </div>
          <div className="bg-blue/10 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6">Request Information</h3>
            <form className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    className="w-full rounded-md border border-white/20 bg-transparent px-3 py-2 text-sm placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full rounded-md border border-white/20 bg-transparent px-3 py-2 text-sm placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="project-type" className="text-sm font-medium">
                  Project Type
                </label>
                <select
                  id="project-type"
                  className="w-full rounded-md border border-white/20 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-white/30"
                >
                  <option value="" className="bg-darkBlue text-white">
                    Select project type
                  </option>
                  <option value="commercial" className="bg-darkBlue text-white">
                    Commercial
                  </option>
                  <option
                    value="residential"
                    className="bg-darkBlue text-white"
                  >
                    Residential
                  </option>
                  <option
                    value="institutional"
                    className="bg-darkBlue text-white"
                  >
                    Institutional
                  </option>
                  <option value="industrial" className="bg-darkBlue text-white">
                    Industrial
                  </option>
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full rounded-md border border-white/20 bg-transparent px-3 py-2 text-sm placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                  placeholder="Tell us about your project"
                  rows={4}
                ></textarea>
              </div>
              <Button
                type="submit"
                className="w-full bg-golden hover:bg-golden/90 text-white"
              >
                Submit Request
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InquiryForm;
