
import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (city: string) => void;
  loading: boolean;
}

const SearchIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
);


const SearchBar: React.FC<SearchBarProps> = ({ onSearch, loading }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 items-center">
      <div className="relative flex-grow">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Search for a city..."
          className="w-full pl-10 pr-4 py-3 bg-white/20 rounded-full text-white placeholder-white/70 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
          disabled={loading}
        />
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/70" />
      </div>
      <button
        type="submit"
        className="bg-white/30 hover:bg-white/40 text-white font-bold p-3 rounded-full focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={loading}
      >
        {loading ? (
            <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
        ) : (
            <SearchIcon className="w-6 h-6"/>
        )}
      </button>
    </form>
  );
};

export default SearchBar;
