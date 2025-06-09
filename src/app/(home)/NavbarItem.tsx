import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'

interface NavbarItemsProps {
  href: string
  children: React.ReactNode
  isActive?: boolean
}

export default function NavbarItem({
  href,
  children,
  isActive,
}: NavbarItemsProps) {
  return (
    <Button
      asChild
      variant={'outline'}
      className={cn(
        'bg-transparent hover:bg-transparent rounded-full hover:border-primary border-transparent px-3.5 text-lg',
        isActive && 'bg-black text-white hover:bg-black over:tetx-white'
      )}>
      <Link href={href}> {children}</Link>
    </Button>
  )
}
