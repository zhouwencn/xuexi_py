import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import type { ComponentProps } from 'react'
import { cn } from '@/lib/utils'

export function TooltipProvider(props: ComponentProps<typeof TooltipPrimitive.Provider>) {
  return <TooltipPrimitive.Provider {...props} />
}

export function Tooltip(props: ComponentProps<typeof TooltipPrimitive.Root>) {
  return <TooltipPrimitive.Root {...props} />
}

export function TooltipTrigger(props: ComponentProps<typeof TooltipPrimitive.Trigger>) {
  return <TooltipPrimitive.Trigger {...props} />
}

export function TooltipContent({ className, sideOffset = 6, ...props }: ComponentProps<typeof TooltipPrimitive.Content>) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        sideOffset={sideOffset}
        className={cn('z-50 rounded-lg bg-slate-950 px-2.5 py-1.5 text-xs text-white shadow-lg dark:bg-slate-100 dark:text-slate-900', className)}
        {...props}
      />
    </TooltipPrimitive.Portal>
  )
}
