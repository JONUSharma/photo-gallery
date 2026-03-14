import React from 'react';

const SearchBar = ({ search, onSearch }) => {
  return (
    <div className="relative mx-auto max-w-2xl w-full group cursor-pointer">
      {/* Search Icon */}
      <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
        <svg 
          className="w-5 h-5 text-gray-400 transition-colors group-focus-within:text-blue-500" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>

      {/* Improved Input */}
      <input
        type="text"
        value={search}
        onChange={onSearch}
        placeholder="Search for photos or authors..."
        className="w-full bg-white py-4 pl-12 pr-4 rounded-2xl border border-gray-200 
                   shadow-sm transition-all duration-300 
                   placeholder:text-gray-400 text-gray-700
                   focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 
                   hover:border-gray-300"
      />
    </div>
  );
};

export default SearchBar;