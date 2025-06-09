import { ScrollArea } from '@/components/ui/scroll-area'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import Link from 'next/link'

interface NavbarItemProps {
  href: string
  tabName: string
}

interface SidebarProps {
  items: NavbarItemProps[]
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function NavbarSidebar({
  items,
  open,
  onOpenChange,
}: SidebarProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side='left' className='p-0 transition-none'>
        <SheetHeader>
          <div className='flex border-b'>
            <SheetTitle>Menu</SheetTitle>
          </div>
        </SheetHeader>
        <ScrollArea className=' overflow-y-auto h-full pb-2 bg-amber-400'>
          {items.map((item) => (
            <Link
              onClick={() => onOpenChange(false)}
              key={item.href}
              href={item.href}
              className='w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium'>
              {item.tabName}
            </Link>
          ))}
          <div className='border-t'>
            <Link
              href={'/sign-in'}
              className='w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium'>
              Log in
            </Link>
            <Link
              href={'/sign-up'}
              className='w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium'>
              Start Selling
            </Link>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}
