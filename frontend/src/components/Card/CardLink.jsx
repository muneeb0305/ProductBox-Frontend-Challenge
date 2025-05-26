import { Link } from "react-router-dom";

const CardLink = ({ to, Icon, title, description, iconColor, titleColor }) => {
  return (
    <Link
      to={to}
      className="bg-white bg-opacity-90 shadow-xl rounded-xl p-8 flex flex-col items-center transform transition hover:scale-105 hover:shadow-2xl"
    >
      <Icon
        className={`w-14 h-14 mb-4 ${iconColor}`}
        aria-hidden="true"
        strokeWidth={1.5}
      />
      <h2 className={`text-xl font-semibold mb-2 ${titleColor}`}>{title}</h2>
      <p className="text-gray-600 text-center">{description}</p>
    </Link>
  );
};

export default CardLink;
