import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useState } from "react"

interface ReUIExampleProps {
  className?: string
}

export function ReUIExample({ className }: ReUIExampleProps) {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  return (
    <div className={cn("space-y-6", className)}>
      <Card>
        <CardHeader>
          <CardTitle>ReUI Component Example</CardTitle>
          <CardDescription>
            This demonstrates ReUI-style components with shadcn/ui fundamentals
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email Address
            </label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full"
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <input
              id="subscribe"
              type="checkbox"
              checked={isSubscribed}
              onChange={(e) => setIsSubscribed(e.target.checked)}
              className="rounded border-gray-300"
            />
            <label htmlFor="subscribe" className="text-sm font-medium">
              Subscribe to newsletter
            </label>
          </div>

          <div className="flex gap-2">
            <Button 
              onClick={() => setIsSubscribed(!isSubscribed)}
              variant="outline"
            >
              Toggle Subscription
            </Button>
            <Button 
              onClick={() => alert(`Email: ${email}, Subscribed: ${isSubscribed}`)}
            >
              Submit
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Button Variants</CardTitle>
          <CardDescription>
            Different button styles following ReUI patterns
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            <Button variant="default">Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
