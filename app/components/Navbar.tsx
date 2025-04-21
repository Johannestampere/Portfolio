export default function Navbar() {
    return (
      <nav className="fixed top-0 left-0 w-full bg-white shadow z-50 p-4 flex justify-between items-center">
        <h1 className="font-bold text-lg">Johannes Tampere</h1>
        <ul className="flex space-x-6 text-sm">
          <li><a href="#skills" className="hover:underline">Skills</a></li>
          <li><a href="#projects" className="hover:underline">Projects</a></li>
          <li><a href="#resume" className="hover:underline">Resume</a></li>
        </ul>
      </nav>
    )
}