'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from 'next/link'

export default function FAQsFour() {
    const faqItems = [
        {
            id: 'item-1',
            question: 'How do I get started with this boilerplate?',
            answer: 'Simply clone the repository, install dependencies with pnpm install, set up your environment variables, and run the development server with pnpm dev. The boilerplate includes comprehensive documentation to guide you through the setup process.',
        },
        {
            id: 'item-2',
            question: 'What AI models are included?',
            answer: 'The boilerplate includes integration with OpenRouter, providing access to multiple free AI models including Llama 3.1 (8B & 70B), Google Gemini Flash, Microsoft Phi-3, and Mistral 7B. You can easily switch between models in the chat interface.',
        },
        {
            id: 'item-3',
            question: 'How does authentication work?',
            answer: 'Authentication is handled through Supabase with email/password login, protected routes, session management, and password reset functionality. The middleware automatically protects sensitive routes and handles auth state across the application.',
        },
        {
            id: 'item-4',
            question: 'Can I customise the UI components?',
            answer: 'Yes, the boilerplate uses shadcn/ui with ReUI patterns, making it easy to customise components. All components support dark mode, are WCAG AA compliant, and use CSS variables for theming. You can modify the design system to match your brand.',
        },
        {
            id: 'item-5',
            question: 'How do I set up email functionality?',
            answer: 'Email services are configured with Resend, including professional HTML templates for welcome emails, password reset, and notifications. Simply add your Resend API key to the environment variables and the email service will be ready to use.',
        },
        {
            id: 'item-6',
            question: 'What deployment options are available?',
            answer: 'The boilerplate is designed for easy deployment to platforms like Vercel, Netlify, or any Node.js hosting service. It includes proper environment configuration, build optimisation, and production-ready settings for optimal performance.',
        },
    ]

    return (
        <section className="py-16 md:py-24">
            <div className="mx-auto max-w-5xl px-4 md:px-6">
                <div className="mx-auto max-w-xl text-center">
                    <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">Frequently Asked Questions</h2>
                    <p className="text-muted-foreground mt-4 text-balance">Everything you need to know about getting started with our Next.js 15 boilerplate and its powerful features.</p>
                </div>

                <div className="mx-auto mt-12 max-w-xl">
                    <Accordion
                        type="single"
                        collapsible
                        className="bg-muted dark:bg-muted/50 w-full rounded-2xl p-1">
                        {faqItems.map((item) => (
                            <div
                                className="group"
                                key={item.id}>
                                <AccordionItem
                                    value={item.id}
                                    className="data-[state=open]:bg-card dark:data-[state=open]:bg-muted peer rounded-xl border-none px-7 py-1 data-[state=open]:border-none data-[state=open]:shadow-sm">
                                    <AccordionTrigger className="cursor-pointer text-base hover:no-underline">{item.question}</AccordionTrigger>
                                    <AccordionContent>
                                        <p className="text-base">{item.answer}</p>
                                    </AccordionContent>
                                </AccordionItem>
                                <hr className="mx-7 border-dashed group-last:hidden peer-data-[state=open]:opacity-0" />
                            </div>
                        ))}
                    </Accordion>

                    <p className="text-muted-foreground mt-6 px-8">
                        Can't find what you're looking for? Contact our{' '}
                        <Link
                            href="/signup"
                            className="text-primary font-medium hover:underline">
                            customer support team
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    )
}
