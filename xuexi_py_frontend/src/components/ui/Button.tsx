import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import type { ComponentProps } from 'react'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-xl font-bold shadow-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/50 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-45 dark:focus-visible:ring-offset-[#07110f] [&_svg]:pointer-events-none',
  {
    variants: {
      variant: {
        default: 'bg-emerald-500 text-emerald-950 hover:-translate-y-0.5 hover:bg-emerald-400 hover:shadow-md active:translate-y-0',
        secondary: 'border border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-200 dark:hover:bg-white/[0.08]',
        outline: 'border border-slate-200 bg-transparent text-slate-600 shadow-none hover:border-emerald-300 hover:text-emerald-600 dark:border-white/10 dark:text-slate-300 dark:hover:border-emerald-400/40 dark:hover:text-mint',
        ghost: 'bg-transparent text-slate-500 shadow-none hover:bg-slate-100 hover:text-slate-800 dark:text-slate-400 dark:hover:bg-white/10 dark:hover:text-white',
        danger: 'bg-rose-500 text-white hover:bg-rose-400',
      },
      size: {
        default: 'h-10 px-4 text-xs',
        sm: 'h-9 rounded-lg px-3 text-xs',
        lg: 'h-12 px-5 text-sm',
        icon: 'h-10 w-10 p-0',
        'icon-sm': 'h-9 w-9 rounded-lg p-0',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ButtonProps extends ComponentProps<'button'>, VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

export function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : 'button'
  return <Comp data-slot="button" className={cn(buttonVariants({ variant, size }), className)} {...props} />
}
