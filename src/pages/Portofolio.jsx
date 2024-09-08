import { useEffect, useState } from "react";
import ListPortofolio from "../components/Portofolio/List";
import { getAll } from '../utils/portofolio';

export default function Portofolio() {
  const [portofolio, setPortofolio] = useState([]);

  useEffect(() => {
    const fetchPortofolio = async () => {
      const data = getAll();
      setPortofolio(data);
    };
    
    fetchPortofolio()
  }, [portofolio]);

  return (
    <section id="Portofolio" className="flex min-h-screen flex-col items-center justify-center">
      <h2 className="roboto-slab-bold text-center text-4xl">Portofolio</h2>
      <ListPortofolio portofolio={portofolio} />
    </section>
  );
}
