import { cn } from '@/lib/utils'
import { ExternalLink } from '@/components/external-link'

export function FooterText({ className, ...props }: React.ComponentProps<'p'>) {
    return (
        <p
            className={cn(
                'px-2 text-center text-xs leading-normal text-muted-foreground',
                className
            )}
            {...props}
        >
            By{' '}
            <ExternalLink href="">Aryan</ExternalLink>{' '}
            based on{' '}
            <ExternalLink href="https://github.com/Katty020/chatbot">Vercel AI Chatbot</ExternalLink>
        </p>
    )
}
