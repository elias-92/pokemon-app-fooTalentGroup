// Importar la fuente Nunito desde Google Fonts y los estilos globales
import { Nunito } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer'

// Configurar la fuente Nunito con los subconjuntos y pesos específicos
const nunito = Nunito({
  subsets: ['latin'], // Subconjunto de caracteres latino
  weight: ['300', '400', '500', '700']
})

// Objeto de metadatos para SEO y descripción de la aplicación
export const metadata = {
  title: 'Pokemon App',
  description:
    'Explora el mundo de Pokémon: encuentra información detallada, filtra y ordena Pokémon según tus preferencias; ¡conviértete en un Maestro Pokémon ahora mismo!', // Descripción de la aplicación
  creator: 'Elias Martinez', // Creador de la aplicación
  publisher: 'Elias Martinez', // Editor de la aplicación
  keywords: ['Pokémon', 'Juego', 'Criaturas', 'Aventura', 'Entrenamiento'] // Palabras clave relacionadas con la aplicación
}

// Componente RootLayout para el diseño principal de la aplicación
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
