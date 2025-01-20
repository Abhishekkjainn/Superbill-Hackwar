import { useState } from 'react';

export default function Inventory() {
  const [searchQuery, setSearchQuery] = useState(''); // State to handle search input
  const [selectedCategory, setSelectedCategory] = useState('All'); // State to track active category

  const categories = [
    'All',
    'Shoes',
    'Clothing',
    'Accessories',
    'Watches',
    'Home Appliances',
    'Furniture',
    'Electronics',
    'Stationary',
    'Shoes',
    'Clothing',
    'Accessories',
    'Watches',
    'Home Appliances',
    'Furniture',
    'Electronics',
    'Stationary',
  ];

  // Handle search input
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle category click
  const handleCategoryClick = (category) => {
    setSelectedCategory(category); // Update the selected category
  };

  return (
    <div className="inventory">
      <div className="categoriesandsearchbar">
        <div className="categories-container">
          <div className="categories">
            {categories.map((category, index) => (
              <div
                key={index}
                className={`category ${
                  selectedCategory === category ? 'categoryactive' : ''
                }`}
                onClick={() => handleCategoryClick(category)} // Set active category on click
              >
                {category}
              </div>
            ))}
          </div>
        </div>
        <div className="searchbar">
          <input
            type="text"
            name="searchinventory"
            id="searchinventory"
            className="searchinventory"
            placeholder="Search For Product ID, Name etc"
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
      </div>
    </div>
  );
}
