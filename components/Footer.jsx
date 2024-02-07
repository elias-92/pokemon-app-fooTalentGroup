// Importar el componente Link de Next.js para enlaces
import Link from 'next/link'
// Importar los iconos de Github y LinkedIn desde React Icons
import { BsGithub, BsLinkedin } from 'react-icons/bs'

// Componente Footer para el pie de página
const Footer = () => {
  return (
    <footer className="relative mt-auto bg-primary flex flex-col items-center py-3 gap-2 md:flex-row md:justify-evenly">
      <div className="flex gap-x-4 text-center md:order-last">
        <Link
          href="https://www.linkedin.com/in/elias--martinez/"
          target="_blank"
          className="text-3xl hover:text-background"
        >
          <BsLinkedin />
        </Link>
        <Link
          href="https://github.com/elias-92"
          target="_blank"
          className="text-3xl hover:text-background"
        >
          <BsGithub />
        </Link>
      </div>
      <p className="md:order-1">Copyright ©2024</p>
      <p>Elias Martinez</p>
    </footer>
  )
}

export default Footer // Exportar el componente Footer
