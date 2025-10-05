import { cn } from '@/lib/utils'
import { Sparkles } from 'lucide-react'

export const Logo = ({ className }: { className?: string }) => {
    return (
        <div className={cn('flex items-center space-x-2', className)}>
            <Sparkles className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold text-foreground">Next.js 15 Boilerplate</span>
        </div>
    )
}

export const LogoIcon = ({ className }: { className?: string }) => {
    return (
        <Sparkles className={cn('h-6 w-6 text-primary', className)} />
    )
}

export const LogoStroke = ({ className }: { className?: string }) => {
    return (
        <Sparkles className={cn('h-7 w-7 text-primary', className)} />
    )
}
