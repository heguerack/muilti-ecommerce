'use client'
import { cn } from '@/lib/utils'
import { Poppins } from 'next/font/google'
import Link from 'next/link'
import NavbarItem from './NavbarItem'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import NavbarSidebar from './NavbarSidebar'
import { useState } from 'react'
import { MenuIcon } from 'lucide-react'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['700'],
})

const navbarItems = [
  { href: '/', tabName: 'Home' },
  { href: '/about', tabName: 'About' },
  { href: '/features', tabName: 'Features' },
  { href: '/pricing', tabName: 'Pricing' },
  { href: '/contact', tabName: 'Contact' },
]

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const pathname = usePathname()
  return (
    <nav className='h-20 flex border-b justify-between font-medium bg-white'>
      <Link href={'/'} className='pl-6 flex items-center'>
        <span className={cn('text-5x font-semibold', poppins.className)}>
          funroad
        </span>
      </Link>
      <NavbarSidebar
        open={isSidebarOpen}
        items={navbarItems}
        onOpenChange={setIsSidebarOpen}
      />
      <div className='items-center gap-4 hidden lg:flex'>
        {navbarItems.map((item) => {
          return (
            <NavbarItem
              key={item.href}
              href={item.href}
              isActive={pathname === item.href}>
              {item.tabName}
            </NavbarItem>
          )
        })}
      </div>
      <div className='hidden lg:flex'>
        <Button
          asChild
          className='border-l border-t-0 border-b-0 border-r-0 px-12 h-full rounded-none bg-white hover:bg-pink-400 transition-colors text-lg'
          variant={'secondary'}>
          <Link href={'/sign-in'}>Login</Link>
        </Button>

        <Button
          asChild
          className='border-l border-t-0 border-b-0 border-r-0 px-12 h-full rounded-none bg-black hover:bg-pink-400 hover:text-black transition-colors text-lg'>
          <Link href={'/sign-up'}> Start Selling</Link>
        </Button>
      </div>
      <div className='flex lg:hidden items-center justify-center'>
        <Button
          variant={'ghost'}
          className='size-12 border-transparent bg-white'
          onClick={() => setIsSidebarOpen(true)}>
          <MenuIcon />
        </Button>
      </div>
    </nav>
  )
}
