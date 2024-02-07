import Link from 'next/link'
import { BsGithub, BsLinkedin } from 'react-icons/bs'

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

export default Footer
