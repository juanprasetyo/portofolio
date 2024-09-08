import { FaArrowDown } from "react-icons/fa";
import Navbar from "../components/Navbar";

export default function Hero() {
  return (
    <section id="Hero">
      <Navbar />
      <div className="grid grid-cols-2">
        <article className="flex flex-col justify-center items-center px-12">
          <h1 className="leading-none text-center">
            <span className="roboto-slab-bold text-[40px]">Hello! I Am</span>
            <br />
            <span className="roboto-slab-black text-[70px]">Juan Prasetyo</span>
          </h1>
          <div className="mt-12">
            <a href="#About">
              <FaArrowDown className="h-[48px] w-[48px] animate-bounce rounded-full bg-primary p-2 text-custom-white" />
            </a>
          </div>
        </article>
        <aside>
          <figure>
            <picture>
              <source srcSet="./Profile.png" />
              <img src="./Profile.png" alt="Profile of Juan Prasetyo" />
            </picture>
          </figure>
        </aside>
      </div>
    </section>
  );
}
