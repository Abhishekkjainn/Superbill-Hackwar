import { useState } from 'react';

export default function Inventory() {
  const mockData = [
    {
      id: '200001',
      name: 'Samsung Galaxy S23 Ultra',
      category: 'Electronics',
      image:
        'https://images.unsplash.com/photo-1580910051071-e1029c9a68ac?fm=jpg&q=60&w=3000',
      stockCount: 10,
      buyingPrice: 95000,
      sellingPrice: 110000,
      gstPercentage: 18,
      status: 'In Stock',
    },
    {
      id: '200002',
      name: 'Apple MacBook Pro M2 - 16GB RAM, 512GB SSD',
      category: 'Electronics',
      image:
        'https://images.unsplash.com/photo-1579840393856-f7a2a8d187f8?fm=jpg&q=60&w=3000',
      stockCount: 8,
      buyingPrice: 185000,
      sellingPrice: 205000,
      gstPercentage: 18,
      status: 'In Stock',
    },
    {
      id: '200003',
      name: 'Sony WH-1000XM5 Noise Cancelling Headphones',
      category: 'Accessories',
      image:
        'https://images.unsplash.com/photo-1612535672467-2b1b209ba25b?fm=jpg&q=60&w=3000',
      stockCount: 15,
      buyingPrice: 25000,
      sellingPrice: 29000,
      gstPercentage: 12,
      status: 'In Stock',
    },
    {
      id: '200004',
      name: 'Nike Air Zoom Pegasus 39 Running Shoes',
      category: 'Shoes',
      image:
        'https://images.unsplash.com/photo-1591886971697-63a4573f4852?fm=jpg&q=60&w=3000',
      stockCount: 20,
      buyingPrice: 8000,
      sellingPrice: 9500,
      gstPercentage: 12,
      status: 'In Stock',
    },
    {
      id: '200005',
      name: 'Ray-Ban Aviator Sunglasses',
      category: 'Accessories',
      image:
        'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?fm=jpg&q=60&w=3000',
      stockCount: 25,
      buyingPrice: 10000,
      sellingPrice: 12000,
      gstPercentage: 18,
      status: 'In Stock',
    },
    {
      id: '200006',
      name: 'LG 65-Inch 4K OLED TV',
      category: 'Home Appliances',
      image:
        'https://images.unsplash.com/photo-1598887142488-bf652c16624c?fm=jpg&q=60&w=3000',
      stockCount: 5,
      buyingPrice: 150000,
      sellingPrice: 180000,
      gstPercentage: 18,
      status: 'In Stock',
    },
    {
      id: '200007',
      name: 'IKEA Poäng Armchair',
      category: 'Furniture',
      image:
        'https://images.unsplash.com/photo-1582578562451-bce3b7e3d38c?fm=jpg&q=60&w=3000',
      stockCount: 12,
      buyingPrice: 8000,
      sellingPrice: 9500,
      gstPercentage: 12,
      status: 'In Stock',
    },
    {
      id: '200008',
      name: 'BoAt BassHeads 100 Earphones',
      category: 'Accessories',
      image:
        'https://images.unsplash.com/photo-1600180758895-72d824bb7da6?fm=jpg&q=60&w=3000',
      stockCount: 50,
      buyingPrice: 500,
      sellingPrice: 800,
      gstPercentage: 5,
      status: 'In Stock',
    },
    {
      id: '200009',
      name: 'Fossil Gen 6 Smartwatch',
      category: 'Watches',
      image:
        'https://images.unsplash.com/photo-1610390358536-fc02237ec927?fm=jpg&q=60&w=3000',
      stockCount: 18,
      buyingPrice: 22000,
      sellingPrice: 25000,
      gstPercentage: 12,
      status: 'In Stock',
    },
    {
      id: '200010',
      name: 'Casio Scientific Calculator FX-991EX',
      category: 'Stationery',
      image:
        'https://images.unsplash.com/photo-1576092765117-0bd9d3e65ab2?fm=jpg&q=60&w=3000',
      stockCount: 30,
      buyingPrice: 1200,
      sellingPrice: 1500,
      gstPercentage: 5,
      status: 'In Stock',
    },
    {
      id: '200011',
      name: 'Philips Air Fryer HD9252/90',
      category: 'Home Appliances',
      image:
        'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?fm=jpg&q=60&w=3000',
      stockCount: 7,
      buyingPrice: 12000,
      sellingPrice: 14000,
      gstPercentage: 18,
      status: 'In Stock',
    },
    {
      id: '200012',
      name: 'Decathlon Trekking Backpack - 60L',
      category: 'Accessories',
      image:
        'https://images.unsplash.com/photo-1517949903275-a444ae1b55c4?fm=jpg&q=60&w=3000',
      stockCount: 10,
      buyingPrice: 3500,
      sellingPrice: 4500,
      gstPercentage: 12,
      status: 'In Stock',
    },
    {
      id: '200013',
      name: 'Tata Tea Premium - 1kg Pack',
      category: 'Groceries',
      image:
        'https://images.unsplash.com/photo-1618873925456-71dfbf99196c?fm=jpg&q=60&w=3000',
      stockCount: 50,
      buyingPrice: 400,
      sellingPrice: 500,
      gstPercentage: 5,
      status: 'In Stock',
    },
    {
      id: '200014',
      name: 'Adidas Tracksuit - Men’s',
      category: 'Clothing',
      image:
        'https://images.unsplash.com/photo-1586090720577-36baf5196c80?fm=jpg&q=60&w=3000',
      stockCount: 15,
      buyingPrice: 6000,
      sellingPrice: 7500,
      gstPercentage: 12,
      status: 'In Stock',
    },
    {
      id: '200015',
      name: 'Havells Ceiling Fan - 1200mm',
      category: 'Home Appliances',
      image:
        'https://images.unsplash.com/photo-1592194996308-872eac80d3df?fm=jpg&q=60&w=3000',
      stockCount: 20,
      buyingPrice: 2500,
      sellingPrice: 3000,
      gstPercentage: 5,
      status: 'In Stock',
    },
    {
      id: '200016',
      name: 'Woodland Casual Boots - Men',
      category: 'Shoes',
      image:
        'https://images.unsplash.com/photo-1600180758656-55e1e19eb0a5?fm=jpg&q=60&w=3000',
      stockCount: 10,
      buyingPrice: 5000,
      sellingPrice: 6500,
      gstPercentage: 12,
      status: 'In Stock',
    },
    {
      id: '200017',
      name: 'Puma Polo T-shirt',
      category: 'Clothing',
      image:
        'https://images.unsplash.com/photo-1542291026-7eec264c27ff?fm=jpg&q=60&w=3000',
      stockCount: 25,
      buyingPrice: 1500,
      sellingPrice: 2000,
      gstPercentage: 5,
      status: 'In Stock',
    },
    {
      id: '200018',
      name: 'Prestige Non-Stick Cookware Set',
      category: 'Home Appliances',
      image:
        'https://images.unsplash.com/photo-1564836235912-47e03c30d9f9?fm=jpg&q=60&w=3000',
      stockCount: 15,
      buyingPrice: 4000,
      sellingPrice: 5000,
      gstPercentage: 12,
      status: 'In Stock',
    },
    {
      id: '200019',
      name: 'Amul Butter - 500g',
      category: 'Groceries',
      image:
        'https://images.unsplash.com/photo-1604937228763-59aebdbd1301?fm=jpg&q=60&w=3000',
      stockCount: 100,
      buyingPrice: 200,
      sellingPrice: 250,
      gstPercentage: 5,
      status: 'In Stock',
    },
    {
      id: '200020',
      name: 'H&M Slim Fit Jeans - Men',
      category: 'Clothing',
      image:
        'https://images.unsplash.com/photo-1578706822472-29703f5a53a5?fm=jpg&q=60&w=3000',
      stockCount: 30,
      buyingPrice: 2500,
      sellingPrice: 3500,
      gstPercentage: 12,
      status: 'In Stock',
    },
  ];

  const [searchQuery, setSearchQuery] = useState(''); // State to handle search input
  const [selectedCategory, setSelectedCategory] = useState('All'); // State to track active category

  const categories = [
    'All',
    ...new Set(mockData.map((product) => product.category)),
  ];

  // Filtered Products based on Search Query and Selected Category
  const filteredProducts = mockData.filter((product) => {
    const query = searchQuery.toLowerCase();

    const matchesSearch =
      product.name.toLowerCase().includes(query) || // Search in name
      product.id.includes(query) || // Search in ID
      product.category.toLowerCase().includes(query) || // Search in category
      product.stockCount.toString().includes(query) || // Search in stock count
      product.buyingPrice.toString().includes(query) || // Search in buying price
      product.sellingPrice.toString().includes(query) || // Search in selling price
      product.gstPercentage.toString().includes(query); // Search in GST percentage

    const matchesCategory =
      selectedCategory === 'All' || product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // Handle search input
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle category click
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
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
      <div className="products">
        <div className="stockalertandinsights"></div>
        <div className="inventoryitems">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div className="productcard" key={product.id}>
                <img src={product.image} alt="" className="productimage" />
                <div className="productinfo">
                  <div className="productname">{product.name}</div>
                  <div className="productstatus">
                    <div className="smallcircle"></div>
                    <div className="prodcat">Id : {product.id}</div>
                    <div className="smallcircle"></div>
                    <div className="prodcat">{product.category}</div>
                    <div className="smallcircle"></div>
                    <img src="/stock.png" alt="Stock" className="stockicon" />
                    <div className="stockcount">
                      {product.stockCount} in Stock
                    </div>
                  </div>
                </div>
                <div className="sep"></div>
                <div className="productprice">
                  <div className="buyingprice">
                    <div className="buyinghead">
                      <div className="smallcirclegreen"></div>
                      <div className="buyingtext">Buying Price</div>
                    </div>
                    <div className="buyingpriceamount">
                      {product.buyingPrice} Rs
                    </div>
                  </div>
                  <div className="sep"></div>
                  <div className="sellingprice">
                    <div className="sellinghead">
                      <div className="smallcirclegreen"></div>
                      <div className="sellingtext">Selling Price</div>
                    </div>
                    <div className="sellingpriceamount">
                      {product.sellingPrice} Rs
                    </div>
                  </div>
                  <div className="sep"></div>
                  <div className="actionsinv">
                    <img
                      src="/delete.png"
                      alt="Delete"
                      className="deleteicon"
                    />
                    <img src="/edit.png" alt="Edit" className="deleteicon" />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="no-products-placeholder">
              No products match your search or selected category.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
{
  /* <div className="productcard">
  <img
    src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D"
    alt=""
    className="productimage"
  />
  <div className="productinfo">
    <div className="productname">Adidas Orketro Shoes - Red Size 32</div>
    <div className="productstatus">
      <div className="smallcircle"></div>
      <div className="prodcat">Id : 100014</div>
      <div className="smallcircle"></div>
      <div className="prodcat">Shoes</div>
      <div className="smallcircle"></div>
      <img src="/stock.png" alt="Stock" className="stockicon" />
      <div className="stockcount">16 in Stock</div>
    </div>
  </div>
  <div className="sep"></div>
  <div className="productprice">
    <div className="buyingprice">
      <div className="buyinghead">
        <div className="smallcirclegreen"></div>
        <div className="buyingtext">Buying Price</div>
      </div>
      <div className="buyingpriceamount">15000 Rs</div>
    </div>
    <div className="sep"></div>
    <div className="sellingprice">
      <div className="sellinghead">
        <div className="smallcirclegreen"></div>
        <div className="sellingtext">Selling Price</div>
      </div>
      <div className="sellingpriceamount">17000 Rs</div>
    </div>
    <div className="sep"></div>
    <div className="actions">
      <img src="/delete.png" alt="Delete" className="deleteicon" />
      <img src="/edit.png" alt="Delete" className="deleteicon" />
    </div>
  </div>
</div>; */
}
