import PropTypes from "prop-types";

export default function Card({ portofolio }) {
  return (
    <div className="flex w-1/3 scale-[.8] flex-col items-center rounded-xl bg-white p-5 duration-500 ease-in-out hover:scale-100">
      <div className="min-h-[200px] w-full rounded-xl bg-gray-300">
        <picture>
          <img
            src={portofolio.image}
            alt={`Image ${portofolio.title}`}
            className="h-[200px] w-full rounded-xl"
            loading="lazy"
          />
        </picture>
      </div>
      <div className="roboto-slab-bold mt-3 self-start text-xl">
        {portofolio.title}
      </div>
    </div>
  );
}

Card.propTypes = {
  portofolio: PropTypes.object.isRequired,
};
