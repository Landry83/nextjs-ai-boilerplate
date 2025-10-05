import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Database,
  Mail,
  BellRing,
  Code,
  Palette,
  Zap,
  UserRound,
  Check,
  ShieldCheck,
  ArrowRight
} from 'lucide-react'

// Phosphor Icons
import {
  House as PhosphorHouse,
  Chats as PhosphorChats,
  Phone as PhosphorPhone,
  Gear as PhosphorGear
} from 'phosphor-react'

// Tabler Icons
import {
  IconBrandNextjs as TablerNextjs,
  IconBrandSupabase as TablerSupabase,
  IconBrandOpenai as TablerOpenAI,
  IconMail as TablerMail
} from '@tabler/icons-react'

// Lucide Icons
import { Sparkles } from 'lucide-react'
import HeroSection from '@/components/hero-section'
import { TextEffect } from '@/components/ui/text-effect'
import { AnimatedGroup } from '@/components/ui/animated-group'
import FAQsFour from '@/components/faqs-4'
import StatsSection from '@/components/stats-4'
import ToastDemo from '@/components/toast-demo'
import FooterSection from '@/components/footer'

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: 'blur(12px)',
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        type: 'spring' as const,
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <TextEffect
              preset="fade-in-blur"
              speedSegment={0.3}
              as="h2"
              className="text-4xl font-bold text-foreground mb-6">
              Everything You Need to Build Modern Apps
            </TextEffect>
            <TextEffect
              preset="fade-in-blur"
              speedSegment={0.3}
              delay={0.2}
              as="p"
              className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive boilerplate with AI integration, authentication, beautiful UI components, 
              and everything you need to start building production-ready applications.
            </TextEffect>
          </div>

          <AnimatedGroup
            variants={{
              container: {
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.3,
                  },
                },
              },
              item: transitionVariants.item,
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* AI Integration */}
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
                    <PhosphorChats className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <CardTitle className="text-xl">AI Integration</CardTitle>
                </div>
                <CardDescription className="text-base">
                  OpenRouter integration with multiple free AI models
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span>Llama 3.1 (8B & 70B)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span>Google Gemini Flash</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span>Microsoft Phi-3</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span>Mistral 7B</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span>Model selection UI</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Authentication */}
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="p-2 bg-green-100 dark:bg-green-900/20 rounded-lg">
                    <ShieldCheck className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <CardTitle className="text-xl">Authentication</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Secure authentication with Supabase
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span>Email/password auth</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span>Protected routes</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span>Session management</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span>Password reset</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span>Middleware protection</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* UI Components */}
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="p-2 bg-pink-100 dark:bg-pink-900/20 rounded-lg">
                    <Palette className="h-6 w-6 text-pink-600 dark:text-pink-400" />
                  </div>
                  <CardTitle className="text-xl">UI Components</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Beautiful components with shadcn/ui + ReUI
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span>shadcn/ui base components</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span>ReUI patterns</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span>Heroicons integration</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span>Dark mode support</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span>WCAG AA compliant</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Email Service */}
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                    <TablerMail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <CardTitle className="text-xl">Email Service</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Professional email templates with Resend
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span>Welcome emails</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span>Password reset</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span>Notifications</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span>HTML templates</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span>ByVeya branding</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Notifications */}
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="p-2 bg-yellow-100 dark:bg-yellow-900/20 rounded-lg">
                    <BellRing className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <CardTitle className="text-xl">Notifications</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Toast notifications with react-hot-toast
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span>Success messages</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span>Error handling</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span>Custom styling</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span>Design system integration</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span>Accessibility support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Performance */}
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="p-2 bg-orange-100 dark:bg-orange-900/20 rounded-lg">
                    <Zap className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <CardTitle className="text-xl">Performance</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Optimised for speed and efficiency
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span>Next.js 15 optimisations</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span>Server Components</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span>Code splitting</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span>Image optimisation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span>TypeScript strict mode</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </AnimatedGroup>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <TextEffect
              preset="fade-in-blur"
              speedSegment={0.3}
              as="h2"
              className="text-4xl font-bold text-foreground mb-6">
              Built with Modern Technologies
            </TextEffect>
            <TextEffect
              preset="fade-in-blur"
              speedSegment={0.3}
              delay={0.2}
              as="p"
              className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Leveraging the latest tools and frameworks for optimal performance and developer experience.
            </TextEffect>
          </div>

          <AnimatedGroup
            variants={{
              container: {
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.3,
                  },
                },
              },
              item: transitionVariants.item,
            }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-blue-100 dark:bg-blue-900/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <TablerNextjs className="h-10 w-10 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Next.js 15</h3>
              <p className="text-sm text-muted-foreground">App Router & TypeScript</p>
            </div>
            <div className="text-center group">
              <div className="bg-green-100 dark:bg-green-900/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <TablerSupabase className="h-10 w-10 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Supabase</h3>
              <p className="text-sm text-muted-foreground">Backend & Auth</p>
            </div>
            <div className="text-center group">
              <div className="bg-purple-100 dark:bg-purple-900/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <TablerOpenAI className="h-10 w-10 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">OpenRouter</h3>
              <p className="text-sm text-muted-foreground">AI Models</p>
            </div>
            <div className="text-center group">
              <div className="bg-pink-100 dark:bg-pink-900/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Palette className="h-10 w-10 text-pink-600 dark:text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">shadcn/ui</h3>
              <p className="text-sm text-muted-foreground">UI Components</p>
            </div>
          </AnimatedGroup>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <TextEffect
              preset="fade-in-blur"
              speedSegment={0.3}
              as="h2"
              className="text-4xl font-bold text-foreground mb-6">
              Choose Your Plan
            </TextEffect>
            <TextEffect
              preset="fade-in-blur"
              speedSegment={0.3}
              delay={0.2}
              as="p"
              className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Start building with our comprehensive boilerplate. All plans include full access to all features.
            </TextEffect>
          </div>

          <AnimatedGroup
            variants={{
              container: {
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.3,
                  },
                },
              },
              item: transitionVariants.item,
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            
            {/* Free Plan */}
            <Card className="relative border-2 hover:border-primary/20 transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold">Free</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-foreground">£0</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <CardDescription className="mt-4">
                  Perfect for getting started with modern web development
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <Check className="h-5 w-5 text-green-600" />
                    <span>Full boilerplate code</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-5 w-5 text-green-600" />
                    <span>AI integration</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-5 w-5 text-green-600" />
                    <span>Authentication system</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-5 w-5 text-green-600" />
                    <span>UI components</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-5 w-5 text-green-600" />
                    <span>Email templates</span>
                  </li>
                </ul>
                <Button asChild className="w-full mt-6">
                  <Link href="/signup">Get Started</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card className="relative border-2 border-primary hover:border-primary/40 transition-all duration-300 hover:-translate-y-1">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
              <CardHeader className="text-center pb-8 pt-8">
                <CardTitle className="text-2xl font-bold">Pro</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-foreground">£29</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <CardDescription className="mt-4">
                  Everything you need for production applications
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <Check className="h-5 w-5 text-green-600" />
                    <span>Everything in Free</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-5 w-5 text-green-600" />
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-5 w-5 text-green-600" />
                    <span>Advanced AI models</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-5 w-5 text-green-600" />
                    <span>Custom email templates</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-5 w-5 text-green-600" />
                    <span>Deployment assistance</span>
                  </li>
                </ul>
                <Button asChild className="w-full mt-6">
                  <Link href="/signup">Start Pro</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="relative border-2 hover:border-primary/20 transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold">Enterprise</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-foreground">£99</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <CardDescription className="mt-4">
                  Custom solutions for large-scale applications
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <Check className="h-5 w-5 text-green-600" />
                    <span>Everything in Pro</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-5 w-5 text-green-600" />
                    <span>Dedicated support</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-5 w-5 text-green-600" />
                    <span>Custom integrations</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-5 w-5 text-green-600" />
                    <span>White-label options</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-5 w-5 text-green-600" />
                    <span>SLA guarantee</span>
                  </li>
                </ul>
                <Button asChild variant="outline" className="w-full mt-6">
                  <Link href="/signup">Contact Sales</Link>
                </Button>
              </CardContent>
            </Card>
          </AnimatedGroup>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* FAQ Section */}
      <FAQsFour />

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <TextEffect
            preset="fade-in-blur"
            speedSegment={0.3}
            as="h2"
            className="text-4xl font-bold mb-6">
            Ready to Start Building?
          </TextEffect>
          <TextEffect
            preset="fade-in-blur"
            speedSegment={0.3}
            delay={0.2}
            as="p"
            className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Get started with this production-ready boilerplate today. Join thousands of developers building modern applications.
          </TextEffect>
          
          <AnimatedGroup
            variants={{
              container: {
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.4,
                  },
                },
              },
              item: transitionVariants.item,
            }}
            className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              variant="secondary" 
              className="w-full sm:w-auto bg-white text-primary hover:bg-white/90">
              <Link href="/signup">
                <UserRound className="h-5 w-5 mr-2" />
                Create Account
              </Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="w-full sm:w-auto bg-transparent border-white text-white hover:bg-white hover:text-primary">
              <Link href="/dashboard">
                <ArrowRight className="h-5 w-5 mr-2" />
                View Demo
              </Link>
            </Button>
          </AnimatedGroup>
        </div>
      </section>

      {/* Toast Demo Section */}
      <ToastDemo />

      {/* Footer */}
      <FooterSection />
    </div>
  );
}