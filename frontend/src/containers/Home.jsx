import CardLink from "../components/Card/CardLink";
import { cards } from "../data/homeCardsData";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex flex-col items-center justify-center px-4">
      {/* Page title */}
      <h1 className="text-4xl font-bold mb-8 text-blue-700 drop-shadow-lg">
        Welcome to Shop
      </h1>

      {/* Description text below the title */}
      <p className="mb-12 text-gray-700 text-center max-w-md drop-shadow-sm">
        Manage your shopping easily. Browse products, add new items, and
        checkout your cart.
      </p>

      {/* Container for the cards displayed in a responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-4xl w-full">
        {cards.map(
          ({ to, Icon, iconColor, titleColor, title, description }) => (
            <CardLink
              key={to}
              to={to}
              Icon={Icon}
              iconColor={iconColor}
              titleColor={titleColor}
              title={title}
              description={description}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Home;
