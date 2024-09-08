import Button from "../components/Button";

export default function Contact() {
  return (
    <section id="Contact" className="flex min-h-screen flex-col items-center justify-center">
      <h2 className="roboto-slab-bold text-center text-5xl">WANT TO CONNECT?</h2>
      <p className="roboto-slab-bold text-3xl my-5">Feel free to mail me: <a href="mailto:juanprasetyo000@gmail.com" className="text-primary">juanprasetyo000@gmail.com</a></p>
      <Button text="Contact Me" url="mailto:juanprasetyo000@gmail.com" size="lg"/>
    </section>
  );
}
