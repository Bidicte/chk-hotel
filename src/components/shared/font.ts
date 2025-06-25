import { Poppins } from 'next/font/google'

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '400', '600', '700'], // ajoute d'autres poids si besoin
  display: 'swap',
})