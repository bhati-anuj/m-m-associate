import Image, { StaticImageData } from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import lift from "@/utils/Blogs/lift.jpg"
import construction from "@/utils/Blogs/construction.jpg";
import interior from "@/utils/Blogs/interior.jpg";



interface Author {
  name: string
  role: string
  avatar: string
}

interface BlogPost {
  date: string
  category: string
  title: string
  excerpt: string
  image: string | StaticImageData
  author: Author
}

const blogPosts: BlogPost[] = [
  {
    date: "Mar 16, 2020",
    category: "Marketing",
    title: "Boost your conversion rate",
    excerpt:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla...",
    image: lift,
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    date: "Mar 10, 2020",
    category: "Sales",
    title: "How to use search engine optimization to drive sales",
    excerpt: "Optio cum necessitatibus dolor voluptatum provident commodi et. Qui aperiam fugiat nemo cumque.",
    image: construction,
    author: {
      name: "Lindsay Walton",
      role: "Front-end Developer",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    date: "Feb 12, 2020",
    category: "Business",
    title: "Improve your customer experience",
    excerpt:
      "Cupiditate maiores ullam eveniet adipisci in doloribus nulla minus. Voluptas iusto libero adipisci rem et corporis. Nostrud sint anim sunt aliqua. Nulla eu labore irure...",
    image: interior,
    author: {
      name: "Tom Cook",
      role: "Director of Product",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
]

export default function BlogSection() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">From the blog</h2>
          <p className="text-xl text-muted-foreground">Learn how to grow your business with our expert advice.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="group overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              <CardHeader className="p-0">
                <div className="aspect-[4/3] overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 text-sm mb-4">
                  <time dateTime={post.date} className="text-muted-foreground">
                    {post.date}
                  </time>
                  <span className="text-primary font-medium">{post.category}</span>
                </div>

                <h3 className="text-xl font-semibold mb-3 line-clamp-2">{post.title}</h3>

                <p className="text-muted-foreground mb-6 line-clamp-3">{post.excerpt}</p>

                <div className="flex items-center gap-3">
                  <Image
                    src={post.author.avatar || "/placeholder.svg"}
                    alt={post.author.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-medium">{post.author.name}</div>
                    <div className="text-sm text-muted-foreground">{post.author.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

