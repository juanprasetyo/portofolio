import PropTypes from "prop-types";

export default function Button({ text, url, size = "md" }) {
  const sizeClasses = {
    sm: "text-sm px-8 py-4",
    md: "text-md px-10 py-5",
    lg: "text-lg px-12 py-6",
  };

  const buttonSizeClass = sizeClasses[size] || sizeClasses["md"];

  return (
    <a
      href={url}
      className={`bg-primary text-custom-white hover:brightness-75 rounded-full text-center ${buttonSizeClass}`}
    >
      {text}
    </a>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};
