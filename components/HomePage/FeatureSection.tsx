import { Users, Rocket, HeadphonesIcon, Sparkles, Award, MessageCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function FeatureSection() {
  return (
    <section className="py-16 px-4 container mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-2">Why we are the best</h2>
        <p className="text-muted-foreground">Who are in extremely love with eco friendly system.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            title: "Expert Technicians",
            icon: Users,
            description:
              "Usage of the internet is becoming more common due to rapid advancement of technology and power.",
          },
          {
            title: "Professional Service",
            icon: Rocket,
            description:
              "Usage of the internet is becoming more common due to rapid advancement of technology and power.",
          },
          {
            title: "Great Support",
            icon: HeadphonesIcon,
            description:
              "Usage of the internet is becoming more common due to rapid advancement of technology and power.",
          },
          {
            title: "Technical Skills",
            icon: Sparkles,
            description:
              "Usage of the internet is becoming more common due to rapid advancement of technology and power.",
          },
          {
            title: "Highly Recomended",
            icon: Award,
            description:
              "Usage of the internet is becoming more common due to rapid advancement of technology and power.",
          },
          {
            title: "Positive Reviews",
            icon: MessageCircle,
            description:
              "Usage of the internet is becoming more common due to rapid advancement of technology and power.",
          },
        ].map((feature, index) => (
          <Card
            key={index}
            className="relative transition-all duration-300 hover:bg-bgBlue group-hover:text-white hover:z-10 hover:-translate-y-1 group"
          >
            <CardHeader>
              <feature.icon className="w-6 h-6 mb-2 transition-colors group-hover:text-white" />
              <CardTitle className="transition-colors group-hover:text-white">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground transition-colors group-hover:text-white">
                {feature.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

