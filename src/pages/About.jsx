export default function About() {
  return (
    <section id="About" className="grid min-h-screen grid-cols-2">
      <div className="flex items-center">
        <picture>
          <img
            src="./Profile-2.png"
            alt=""
            className="w-full"
          />
        </picture>
      </div>
      <div className="flex flex-col items-start justify-center px-10">
        <div>
          <h2 className="roboto-slab-bold text-left text-4xl">About Me</h2>
          <p className="mt-3 text-justify indent-10">
            Hello, my name is Martinus Juan Prasetyo. I am an enthusiastic
            learner with a strong interest in web programming. I enjoy exploring
            various aspects of web development, from creating responsive and
            user-friendly websites to staying up-to-date with the latest trends
            and technologies in the field. My journey in web programming is
            driven by a curiosity to continuously learn and grow, and I am
            motivated to constantly seek new and creative ways to solve
            challenges in the world of web development.
          </p>
        </div>
        <div className="mt-10">
          <h3 className="roboto-slab-bold text-left text-2xl">My Skills</h3>
          <div className="mt-3 grid grid-cols-4 gap-5">
            <img
              src="./Skills/php-logo.png"
              alt="Logo PHP"
              className="w-full"
            />
            <img
              src="./Skills/javascript-logo.png"
              alt="Logo Javascript"
              className="w-full"
            />
            <img
              src="./Skills/mysql-logo.png"
              alt="Logo MySQL"
              className="w-full"
            />
            <img
              src="./Skills/postgressql-logo.png"
              alt="Logo PostgreSql"
              className="w-full"
            />
          </div>
          <div className="mt-3 grid grid-cols-4 gap-5">
            <img
              src="./Skills/laravel-logo.png"
              alt="Logo Laravel"
              className="w-full"
            />
            <img
              src="./Skills/react-logo.png"
              alt="Logo React"
              className="w-full"
            />
            <img
              src="./Skills/bootstrap-logo.png"
              alt="Logo Bootstrap"
              className="w-full"
            />
            <img
              src="./Skills/tailwindcss-logo.png"
              alt="Logo Tailwind"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
