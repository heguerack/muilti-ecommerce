# Frank Notes

we will use bun

## check dependecies

```ts
 "dependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "next": "15.2.4"
  },

    "devDependencies": {
    "typescript": "^5",
    "tailwindcss": "^4",
  }
```

## install shad cn

```ts
bunx --bun shadcn@latest init
bunx --bun shadcn@latest add --all
```

## Customization

### Fonts

remove these

```ts
import { Geist, Geist_Mono } from 'next/font/google'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})


className={`${geistSans.variable} ${geistMono.variable} antialiased`}

```

add this

```ts
import { DM_Sans } from 'next/font/google'

const dmSans = DM_Sans({
  subsets: ['latin'],
})

className={`${dmSans.className}  antialiased`}

```

### Shad cn

instead of modyfying the components in their root,
example here

```ts
import * as React from 'react'

import { cn } from '@/lib/utils'

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot='input'
      className={cn(
        'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-black flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
        'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
        'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
        className
      )}
      {...props}
    />
  )
}

export { Input }
```

we can modify globally in globals css
replace

```ts
 --input: oklch(0.922 0 0);
```

for to make it black

```ts
 --input: oklch(0 0 0);
```

by doing this approach we change the actual theme and not component by componetn!!

and we can do the same for ebverything!!

#### button

```ts
   variant: {
      elevated: 'bg-white hover:shadow-[4px_4px_0px_rgba(0,0,0,1)]',
   },
```

use Use Ctrl + H to serach classes in the file

## push branch to github

### push branch

git add .
git checkout -b 02-customization
git add .
git commit -m "02:Customization message"
git push -u origin 02-customization

### create a pull request for the new branch

go to github and open branch
click on comepea and pull request
click on create new request
click on merge pull request
git checkout main or master branch

## add home page and layout

```ts
import React from 'react'

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      {children}
    </div>
  )
}
```

## push branch to github

```ts
git checkout -b 03-home-layout
```
