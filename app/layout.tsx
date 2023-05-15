import Image from 'next/image'
import './globals.css'
import { JetBrains_Mono, Poppins } from 'next/font/google'
import Link from 'next/link'


const lato = Poppins({ subsets: ['latin'], weight: ['100', '300', '400', '500', '600', '700', '900'], })


export const metadata = {
  title: 'SM & YTM Movement',
  description: 'Blog for SM & YTM Movement',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
          <nav className="flex items-center justify-between py-10">
            <div>
              <Link href='/'><Image src='/smytmlogo.png' alt='SM YTM icon' width='140' height='140' /></Link>
            </div>
            <div className='flex items-center text-base leading-5'>
              <div>
                <Link href='/' className='font-bold text-xl sm:text-2xl mr-4'>Home</Link>
              </div>
              <div>
                <Link href='/about' className='font-bold text-xl sm:text-2xl'>About</Link>
              </div>

            </div>
          </nav>
          <main className='mb-auto'>
            {children}
          </main>
        </div>

      </body>
    </html>
  )
}
