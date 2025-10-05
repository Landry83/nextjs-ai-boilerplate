'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { toast } from 'react-hot-toast'
import { CheckIcon, BellIcon, BoltIcon, PaintBrushIcon } from '@heroicons/react/24/outline'
import { TextEffect } from '@/components/ui/text-effect'
import { AnimatedGroup } from '@/components/ui/animated-group'

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

export default function ToastDemo() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            <TextEffect per="char" preset="fade">
              Toast Notifications
            </TextEffect>
          </h2>
          <p className="text-muted-foreground">
            Beautiful, accessible toast notifications powered by react-hot-toast
          </p>
        </div>

        <AnimatedGroup
          variants={transitionVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckIcon className="h-5 w-5 text-green-500" />
                Success Toast
              </CardTitle>
              <CardDescription>
                Show success messages for completed actions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                onClick={() => toast.success('Action completed successfully!')}
                className="w-full"
                variant="default"
              >
                Show Success Toast
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BellIcon className="h-5 w-5 text-red-500" />
                Error Toast
              </CardTitle>
              <CardDescription>
                Display error messages for failed operations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                onClick={() => toast.error('Something went wrong! Please try again.')}
                className="w-full"
                variant="destructive"
              >
                Show Error Toast
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BoltIcon className="h-5 w-5 text-blue-500" />
                Info Toast
              </CardTitle>
              <CardDescription>
                Provide informational messages to users
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                onClick={() => toast('This is an informational message')}
                className="w-full"
                variant="outline"
              >
                Show Info Toast
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PaintBrushIcon className="h-5 w-5 text-purple-500" />
                Loading Toast
              </CardTitle>
              <CardDescription>
                Show loading states with promises
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                onClick={() => {
                  const loadingToast = toast.loading('Processing your request...');
                  setTimeout(() => {
                    toast.dismiss(loadingToast);
                    toast.success('Request completed!');
                  }, 2000);
                }}
                className="w-full"
                variant="secondary"
              >
                Show Loading Toast
              </Button>
            </CardContent>
          </Card>
        </AnimatedGroup>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            Toast notifications are styled to match your design system and support WCAG AA contrast requirements
          </p>
        </div>
      </div>
    </section>
  )
}
