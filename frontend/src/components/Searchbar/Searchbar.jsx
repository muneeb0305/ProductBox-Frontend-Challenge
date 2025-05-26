const SearchBar = ({ searchTerm, onSearchChange, sortOrder, onSortChange }) => (
  <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
    <div className="relative w-full sm:w-1/2">
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={onSearchChange}
        className="w-full px-5 py-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
      />
      <svg
        className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z"
        ></path>
      </svg>
    </div>

    <select
      value={sortOrder}
      onChange={onSortChange}
      className="w-full sm:w-1/4 px-5 py-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
    >
      <option value="default">Sort By</option>
      <option value="price-asc">Price: Low to High</option>
      <option value="price-desc">Price: High to Low</option>
    </select>
  </div>
);

export default SearchBar;
