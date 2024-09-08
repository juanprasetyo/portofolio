export default function Navbar() {
  return (
    <nav className="text-primary mx-auto my-5 flex h-[48px] w-[90%] items-center justify-center rounded-full bg-white shadow-xl">
      <ul className="flex items-center space-x-6">
        <li>
          <a href="#Hero" className="hover:font-bold">Home</a>
        </li>
        <li>
          <a href="#About" className="hover:font-bold">About Me</a>
        </li>
      </ul>
      <button>
        <picture className="bg-custom-black mx-6 flex h-[64px] w-[64px] items-center justify-center rounded-full drop-shadow-2xl">
          <img src="Code-E.png" alt="Logo Code E" className="h-[48px]" />
        </picture>
      </button>
      <ul className="flex items-center space-x-6">
        <li>
          <a href="#Portofolio" className="hover:font-bold">Portofolio</a>
        </li>
        <li>
          <a href="#Contact" className="hover:font-bold">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
