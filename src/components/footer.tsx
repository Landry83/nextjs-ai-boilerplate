import { Sparkles } from 'lucide-react'
import Link from 'next/link'

const links = [
    {
        title: 'Sign In',
        href: '/login',
    },
    {
        title: 'Get Started',
        href: '/signup',
    },
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
    {
        title: 'AI Chat',
        href: '/chat',
    },
]

export default function FooterSection() {
    return (
        <footer className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <Link
                    href="/"
                    aria-label="go home"
                    className="mx-auto block size-fit">
                    <div className="flex items-center justify-center space-x-2">
                        <Sparkles className="h-8 w-8 text-primary" />
                        <h3 className="text-2xl font-bold text-foreground">Next.js 15 Boilerplate</h3>
                    </div>
                </Link>

                <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
                    {links.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            className="text-muted-foreground hover:text-primary block duration-150">
                            <span>{link.title}</span>
                        </Link>
                    ))}
                </div>

                <div className="mt-12 pt-8 border-t border-border">
                    <p className="text-muted-foreground text-center text-sm mb-4">
                        A comprehensive boilerplate with AI integration, authentication, beautiful UI components,
                        and everything you need to start building production-ready applications.
                    </p>
                    <div className="text-center">
                        <p className="text-sm text-muted-foreground">
                            Built with ❤️ using modern web technologies
                        </p>
                        <p className="text-sm text-muted-foreground mt-2">
                            Built by{' '}
                            <a
                                href="https://byveya.com"
                                className="text-primary hover:text-primary/80 transition-colors underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                ByVeya
                            </a>
                            {' '} - Modern web development solutions
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
