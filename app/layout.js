import { Nunito } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer'

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700']
})

export const metadata = {
  title: 'Pokemon App',
  description:
    'Explore the world of Pokémon: find detailed information, filter and sort Pokémon according to your preferences - become a Pokémon Master now!',
  creator: 'Elias Martinez',
  publisher: 'Elias Martinez',
  keywords: ['Pokémon', 'Game', 'Creatures', 'Adventure', 'Training']
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <div className="flex flex-col min-h-screen">
          <main className="flex-1">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  )
}
