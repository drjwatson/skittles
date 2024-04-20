import './globals.css'
import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast'

export const metadata = {
  metadataBase: new URL('https://postgres-starter.vercel.app'),
  title: 'Skittles',
  description:
    'You might have one skittle, you might have none.',
}

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/img/favicon.ico" />
      </head>
      <body className={inter.variable}>
        <Toaster position="bottom-center" toastOptions={{
            error: { duration: 3000, className: '!bg-rose-600 !text-white mb-5' },
          }
        }/>
        {children}
      </body>
    </html>
  )
}
