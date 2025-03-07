import { Users, Rocket, HeadphonesIcon, Sparkles, Award, MessageCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function FeatureSection() {
  return (
    <section className="py-16 px-4 m-auto bg-bgGray">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-2">Why we are the best</h2>
        <p className="text-muted-foreground">Who are in extremely love with eco friendly system.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {[
          {
            title: "One step solution",
            icon: Users,
            description:
              "M&M creates Holistic projects that are Designed, Planned & Executed for client needs under one roof.",
          },
          {
            title: "Planned & Cost Effective",
            icon: Rocket,
            description:
              "M&M delever Precision Engineered Excellence while Maximizing Value of your Investment & Minimizing unnecessary Expences.",
          },
          {
            title: "Transparent & Easy Payment",
            icon: HeadphonesIcon,
            description:
              "M&M offers Structured & Easy to Follow Payment solutions that does't lead to finincial Complexities.",
          },
          {
            title: "Customised & Client Centric",
            icon: Sparkles,
            description:
              "M&M experties, Your Vision together creates Space that Resonate with Elegance, Comfort & Personilization.",
          },
          {
            title: "Innovation & Excellence",
            icon: Award,
            description:
              "M&M don't just follow Trends, we SET them. Every project is a Fusion of Timeless Elegance & Sustanible Innovation.",
          },
          {
            title: "Quality Assurance & Timely Delivery",
            icon: MessageCircle,
            description:
              "M&M build not only Spaces but Trust, ensuring project meets highest Standereds of Craftmenship, Durability & Timely Completion.",
          },
        ].map((feature, index) => (
          <Card
            key={index}
            className="relative transition-all duration-300 hover:bg-bgBlue group-hover:text-textGolden hover:z-10 hover:-translate-y-1 group"
          >
            <CardHeader>
              <feature.icon className="w-6 h-6 mb-2 transition-colors group-hover:text-textGolden" />
              <CardTitle className="transition-colors text-xl group-hover:text-textGolden">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground transition-colors group-hover:text-gray-500">
                {feature.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

