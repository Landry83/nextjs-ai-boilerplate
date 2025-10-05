export default function StatsSection() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
                <div className="relative z-10 max-w-xl space-y-6">
                    <h2 className="text-4xl font-medium lg:text-5xl">Accelerate your development with our comprehensive boilerplate.</h2>
                    <p>
                        More than just code templates. <span className="font-medium">We provide a complete ecosystem</span> — from AI integration to production-ready authentication systems.
                    </p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
                    <div>
                        <p>Built for modern web development with Next.js 15, our boilerplate includes everything you need to ship production applications faster than ever before.</p>
                        <div className="mb-12 mt-12 grid grid-cols-2 gap-2 md:mb-0">
                            <div className="space-y-4">
                                <div className="bg-linear-to-r from-zinc-950 to-zinc-600 bg-clip-text text-5xl font-bold text-transparent dark:from-white dark:to-zinc-800">15+</div>
                                <p>AI Models Integrated</p>
                            </div>
                            <div className="space-y-4">
                                <div className="bg-linear-to-r from-zinc-950 to-zinc-600 bg-clip-text text-5xl font-bold text-transparent dark:from-white dark:to-zinc-800">1000+</div>
                                <p>Lines of Production Code</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <blockquote className="border-l-4 pl-4">
                            <p>This boilerplate saved us weeks of development time. The AI integration, authentication system, and beautiful components are exactly what we needed to launch our SaaS platform quickly and professionally.</p>

                            <div className="mt-6 space-y-3">
                                <cite className="block font-medium">Sarah Chen, CTO</cite>
                                <img className="h-5 w-fit dark:invert" src="https://html.tailus.io/blocks/customers/nvidia.svg" alt="Tech Startup Logo" height="20" width="auto" />
                            </div>
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>
    )
}
