"use client";

export default function Header({ name }: { name: string }) {
  return (
    <header className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-8 px-6 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{name}</h1>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><a href="#home" className="hover:text-blue-200 transition-colors duration-200">Home</a></li>
            <li><a href="#about" className="hover:text-blue-200 transition-colors duration-200">About</a></li>
            <li><a href="#projects" className="hover:text-blue-200 transition-colors duration-200">Projects</a></li>
            <li><a href="#contact" className="hover:text-blue-200 transition-colors duration-200">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}