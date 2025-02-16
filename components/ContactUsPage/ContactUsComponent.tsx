'use client'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail } from "lucide-react"

export default function ContactUsComponent() {
  return (
    <div className="container mx-auto px-4 py-24 py-8">
        <div className="text-center mb-12">
      <h2 className="text-4xl font-bold mb-2">Want to contact us?</h2>
      <p className="text-muted-foreground">Who are in extremely love with eco friendly system.</p>
    </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="hover-effect-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MapPin className="h-5 w-5" />
              <span>Address</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center">
              123 Main Street,
              <br />
              Anytown, ST 12345
            </p>
          </CardContent>
        </Card>

        <Card className="hover-effect-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Phone className="h-5 w-5" />
              <span>Phone</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center">{process.env.NEXT_PUBLIC_PHONE_NUMBER}</p>
          </CardContent>
        </Card>

        <Card className="hover-effect-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Mail className="h-5 w-5" />
              <span>Email</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center">{process.env.NEXT_PUBLIC_EMAIL}</p>
          </CardContent>
        </Card>
      </div>

      <style jsx global>{`
        .hover-effect-card {
          position: relative;
          overflow: hidden;
          transition: color 0.3s ease;
        }

        .hover-effect-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 0;
          background-color: hsl(var(--primary));
          transition: height 0.3s ease;
          z-index: 0;
        }

        .hover-effect-card:hover::before {
          height: 100%;
        }

        .hover-effect-card:hover {
          color: hsl(var(--primary-foreground));
        }

        .hover-effect-card > * {
          position: relative;
          z-index: 1;
        }
      `}</style>
    </div>
  )
}

