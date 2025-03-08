"use client"
import Image from "next/image";
import {
  Search,
  Clock,
  User,
  Filter,
  Grid,
  List,
  ChevronDown,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import blog from "@/public/blog/blog.jpg"

export default function AllBlogsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src={blog}
              alt="M&M Associates blog archive"
              fill
              className="object-cover brightness-[0.4]"
              priority
            />
          </div>
          <div className="container relative z-10 py-16 md:py-24">
            <div className="max-w-3xl space-y-5">
              <div className="inline-block rounded-lg bg-golden px-3 py-1 text-sm text-white">
                Blog Archive
              </div>
              <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl">
                All Articles
              </h1>
              <p className="text-xl text-white">
                Browse our complete collection of articles, insights, and
                thought leadership in architecture, construction, and design.
              </p>
            </div>
          </div>
        </section>

        {/* Filter and Search Section */}
        <section className="py-8 bg-gray border-b border-gray-300">
          <div className="container">
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              <div className="w-full md:w-1/3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    type="search"
                    placeholder="Search articles..."
                    className="pl-10 bg-white border-none"
                  />
                </div>
              </div>
              <div className="flex flex-wrap gap-4 w-full md:w-auto">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      className="bg-white border-none gap-2"
                    >
                      <Filter className="h-4 w-4" />
                      Filter
                      <ChevronDown className="h-4 w-4 ml-1" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>Categories</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      {[
                        "Architecture",
                        "Construction",
                        "Interior Design",
                        "Sustainability",
                        "Urban Planning",
                        "Innovation",
                      ].map((category, index) => (
                        <DropdownMenuItem
                          key={index}
                          className="flex items-center gap-2"
                        >
                          <Checkbox id={`category-${index}`} />
                          <label
                            htmlFor={`category-${index}`}
                            className="flex-1 cursor-pointer"
                          >
                            {category}
                          </label>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuLabel>Date</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      {[
                        "Last 7 days",
                        "Last 30 days",
                        "Last 3 months",
                        "Last year",
                        "All time",
                      ].map((timeframe, index) => (
                        <DropdownMenuItem
                          key={index}
                          className="flex items-center gap-2"
                        >
                          <Checkbox id={`timeframe-${index}`} />
                          <label
                            htmlFor={`timeframe-${index}`}
                            className="flex-1 cursor-pointer"
                          >
                            {timeframe}
                          </label>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <div className="p-2">
                      <Button className="w-full bg-golden hover:bg-golden/90 text-white">
                        Apply Filters
                      </Button>
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>

                <Select>
                  <SelectTrigger className="w-[180px] bg-white border-none">
                    <SelectValue placeholder="Sort By" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="recent">Most Recent</SelectItem>
                    <SelectItem value="oldest">Oldest</SelectItem>
                    <SelectItem value="popular">Most Popular</SelectItem>
                    <SelectItem value="az">A-Z</SelectItem>
                    <SelectItem value="za">Z-A</SelectItem>
                  </SelectContent>
                </Select>

                <Tabs defaultValue="grid" className="w-auto">
                  <TabsList className="bg-white border-none">
                    <TabsTrigger
                      value="grid"
                      className="data-[state=active]:bg-golden data-[state=active]:text-white"
                    >
                      <Grid className="h-4 w-4" />
                    </TabsTrigger>
                    <TabsTrigger
                      value="list"
                      className="data-[state=active]:bg-golden data-[state=active]:text-white"
                    >
                      <List className="h-4 w-4" />
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              <Badge className="bg-golden text-white">All</Badge>
              {[
                "Architecture",
                "Construction",
                "Interior Design",
                "Sustainability",
                "Urban Planning",
                "Innovation",
              ].map((category, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="bg-white hover:bg-golden hover:text-white cursor-pointer"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Content */}
        <section className="py-16 bg-white">
          <div className="container">
            <Tabs defaultValue="grid" className="w-full">
              {/* Grid View */}
              <TabsContent value="grid" className="mt-0">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      title: "The Future of Sustainable Architecture",
                      excerpt:
                        "Explore how sustainable design practices are reshaping the future of architecture and creating buildings that are not only beautiful but environmentally responsible.",
                      image: {blog},
                      category: "Sustainability",
                      date: "June 15, 2023",
                      readTime: "5 min read",
                      author: "Sarah Martinez",
                    },
                    {
                      title:
                        "Smart Building Technologies Transforming Construction",
                      excerpt:
                        "Discover how IoT, AI, and other smart technologies are revolutionizing the construction industry and creating more efficient, responsive buildings.",
                      image: {blog},
                      category: "Innovation",
                      date: "May 28, 2023",
                      readTime: "7 min read",
                      author: "David Thompson",
                    },
                    {
                      title: "Biophilic Design: Bringing Nature Indoors",
                      excerpt:
                        "Learn how incorporating natural elements into interior design can improve well-being, productivity, and overall satisfaction with built environments.",
                      image: {blog},
                      category: "Interior Design",
                      date: "June 10, 2023",
                      readTime: "4 min read",
                      author: "Emily Rodriguez",
                    },
                    {
                      title: "The Rise of Modular Construction",
                      excerpt:
                        "Explore how prefabricated and modular construction methods are addressing housing shortages, reducing costs, and improving construction efficiency.",
                      image: {blog},
                      category: "Construction",
                      date: "June 5, 2023",
                      readTime: "6 min read",
                      author: "Michael Chang",
                    },
                    {
                      title:
                        "Adaptive Reuse: Breathing New Life into Old Buildings",
                      excerpt:
                        "Discover the environmental and cultural benefits of repurposing existing structures for new uses rather than demolishing and rebuilding.",
                      image: {blog},
                      category: "Architecture",
                      date: "May 22, 2023",
                      readTime: "5 min read",
                      author: "Sarah Martinez",
                    },
                    {
                      title: "Designing for Accessibility: Beyond Compliance",
                      excerpt:
                        "Why inclusive design should be a fundamental consideration in all projects, not just an afterthought to meet regulatory requirements.",
                      image: {blog},
                      category: "Design",
                      date: "May 15, 2023",
                      readTime: "8 min read",
                      author: "David Thompson",
                    },
                    {
                      title: "Urban Planning for Climate Resilience",
                      excerpt:
                        "How cities are adapting their infrastructure and planning approaches to address the challenges posed by climate change.",
                      image: {blog},
                      category: "Urban Planning",
                      date: "May 8, 2023",
                      readTime: "7 min read",
                      author: "Lisa Patel",
                    },
                    {
                      title:
                        "The Psychology of Space: Designing for Well-being",
                      excerpt:
                        "Understanding how spatial design affects human psychology and how architects can create spaces that promote mental health and well-being.",
                      image: {blog},
                      category: "Interior Design",
                      date: "April 30, 2023",
                      readTime: "6 min read",
                      author: "Emily Rodriguez",
                    },
                    {
                      title: "Innovative Materials Reshaping Construction",
                      excerpt:
                        "From self-healing concrete to transparent wood, discover the cutting-edge materials that are changing how we build.",
                      image: {blog},
                      category: "Innovation",
                      date: "April 22, 2023",
                      readTime: "5 min read",
                      author: "Michael Chang",
                    },
                    {
                      title: "Vertical Forests: The Rise of Green Skyscrapers",
                      excerpt:
                        "How architects are incorporating thousands of plants into high-rise buildings to combat pollution and improve urban biodiversity.",
                      image: {blog},
                      category: "Sustainability",
                      date: "April 15, 2023",
                      readTime: "7 min read",
                      author: "Sarah Martinez",
                    },
                    {
                      title: "Designing for the Post-Pandemic World",
                      excerpt:
                        "How COVID-19 has permanently changed architectural priorities and what the future of public and private spaces might look like.",
                      image: {blog},
                      category: "Architecture",
                      date: "April 8, 2023",
                      readTime: "8 min read",
                      author: "David Thompson",
                    },
                    {
                      title: "The Art of Placemaking in Urban Design",
                      excerpt:
                        "Creating meaningful public spaces that foster community connection and cultural identity in urban environments.",
                      image: {blog},
                      category: "Urban Planning",
                      date: "April 1, 2023",
                      readTime: "6 min read",
                      author: "Lisa Patel",
                    },
                  ].map((post, index) => (
                    <Card
                      key={index}
                      className="overflow-hidden border-none shadow-md"
                    >
                      <div className="aspect-video relative">
                        <Image
                          src={post.image.blog || "/placeholder.svg"}
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-center mb-2">
                          <Badge className="bg-golden hover:bg-golden/90 text-white">
                            {post.category}
                          </Badge>
                          <div className="text-sm text-blue">{post.date}</div>
                        </div>
                        <CardTitle className="text-xl text-darkBlue">
                          {post.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-blue line-clamp-3 mb-4">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-sm text-blue">
                          <div className="flex items-center">
                            <User className="h-4 w-4 mr-1" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button
                          variant="outline"
                          className="w-full border-golden text-golden hover:bg-golden hover:text-white"
                          onClick={()=>window.location.href="/blog-view"}
                        >
                          Read Article
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* List View */}
              <TabsContent value="list" className="mt-0">
                <div className="space-y-6">
                  {[
                    {
                      title: "The Future of Sustainable Architecture",
                      excerpt:
                        "Explore how sustainable design practices are reshaping the future of architecture and creating buildings that are not only beautiful but environmentally responsible.",
                      image: {blog},
                      category: "Sustainability",
                      date: "June 15, 2023",
                      readTime: "5 min read",
                      author: "Sarah Martinez",
                    },
                    {
                      title:
                        "Smart Building Technologies Transforming Construction",
                      excerpt:
                        "Discover how IoT, AI, and other smart technologies are revolutionizing the construction industry and creating more efficient, responsive buildings.",
                      image: {blog},
                      category: "Innovation",
                      date: "May 28, 2023",
                      readTime: "7 min read",
                      author: "David Thompson",
                    },
                    {
                      title: "Biophilic Design: Bringing Nature Indoors",
                      excerpt:
                        "Learn how incorporating natural elements into interior design can improve well-being, productivity, and overall satisfaction with built environments.",
                      image: {blog},
                      category: "Interior Design",
                      date: "June 10, 2023",
                      readTime: "4 min read",
                      author: "Emily Rodriguez",
                    },
                    {
                      title: "The Rise of Modular Construction",
                      excerpt:
                        "Explore how prefabricated and modular construction methods are addressing housing shortages, reducing costs, and improving construction efficiency.",
                      image: {blog},
                      category: "Construction",
                      date: "June 5, 2023",
                      readTime: "6 min read",
                      author: "Michael Chang",
                    },
                    {
                      title:
                        "Adaptive Reuse: Breathing New Life into Old Buildings",
                      excerpt:
                        "Discover the environmental and cultural benefits of repurposing existing structures for new uses rather than demolishing and rebuilding.",
                      image: {blog},
                      category: "Architecture",
                      date: "May 22, 2023",
                      readTime: "5 min read",
                      author: "Sarah Martinez",
                    },
                    {
                      title: "Designing for Accessibility: Beyond Compliance",
                      excerpt:
                        "Why inclusive design should be a fundamental consideration in all projects, not just an afterthought to meet regulatory requirements.",
                      image: {blog},
                      category: "Design",
                      date: "May 15, 2023",
                      readTime: "8 min read",
                      author: "David Thompson",
                    },
                    {
                      title: "Urban Planning for Climate Resilience",
                      excerpt:
                        "How cities are adapting their infrastructure and planning approaches to address the challenges posed by climate change.",
                      image: {blog},
                      category: "Urban Planning",
                      date: "May 8, 2023",
                      readTime: "7 min read",
                      author: "Lisa Patel",
                    },
                    {
                      title:
                        "The Psychology of Space: Designing for Well-being",
                      excerpt:
                        "Understanding how spatial design affects human psychology and how architects can create spaces that promote mental health and well-being.",
                      image: {blog},
                      category: "Interior Design",
                      date: "April 30, 2023",
                      readTime: "6 min read",
                      author: "Emily Rodriguez",
                    },
                  ].map((post, index) => (
                    <Card
                      key={index}
                      className="overflow-hidden border-none shadow-md"
                    >
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/4 relative">
                          <div className="aspect-video md:h-full relative">
                            <Image
                              src={post.image.blog || "/placeholder.svg"}
                              alt={post.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>
                        <div className="md:w-3/4 p-6">
                          <div className="flex justify-between items-center mb-2">
                            <Badge className="bg-golden hover:bg-golden/90 text-white">
                              {post.category}
                            </Badge>
                            <div className="text-sm text-blue">{post.date}</div>
                          </div>
                          <h3 className="text-xl font-bold text-darkBlue mb-2">
                            {post.title}
                          </h3>
                          <p className="text-blue mb-4">{post.excerpt}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center text-sm text-blue gap-4">
                              <div className="flex items-center">
                                <User className="h-4 w-4 mr-1" />
                                <span>{post.author}</span>
                              </div>
                              <div className="flex items-center">
                                <Clock className="h-4 w-4 mr-1" />
                                <span>{post.readTime}</span>
                              </div>
                            </div>
                            <Button
                              variant="outline"
                              className="border-golden text-golden hover:bg-golden hover:text-white"
                              onClick={()=>window.location.href="/blog-view"}
                            >
                              Read Article
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-12">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>
                      1
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-gray">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tighter text-darkBlue mb-4">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-lg text-blue mb-8">
                Stay updated with our latest insights, articles, and industry
                news delivered directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="bg-white border-none"
                />
                <Button className="bg-golden hover:bg-golden/90 text-white whitespace-nowrap">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
