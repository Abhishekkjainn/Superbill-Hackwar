import { useState } from 'react';

export default function Inventory() {
  const mockData = [
    {
      id: '100001',
      name: 'Adidas Orketro Shoes - Red Size 32',
      category: 'Shoes',
      image:
        'https://images.unsplash.com/photo-1542291026-7eec264c27ff?fm=jpg&q=60&w=3000',
      stockCount: 16,
      buyingPrice: 15000,
      sellingPrice: 17000,
      gstPercentage: 18,
      status: 'In Stock',
    },
    {
      id: '100002',
      name: 'Nike Air Max 270 - Black Size 42',
      category: 'Shoes',
      image:
        'https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?fm=jpg&q=60&w=3000',
      stockCount: 25,
      buyingPrice: 12000,
      sellingPrice: 15000,
      gstPercentage: 12,
      status: 'In Stock',
    },
    {
      id: '100003',
      name: 'Puma Running Shoes - Blue Size 40',
      category: 'Shoes',
      image:
        'https://images.unsplash.com/photo-1600180758895-72d824bb7da6?fm=jpg&q=60&w=3000',
      stockCount: 12,
      buyingPrice: 9500,
      sellingPrice: 12500,
      gstPercentage: 5,
      status: 'In Stock',
    },
    {
      id: '100004',
      name: 'Reebok Zig Kinetica - Grey Size 38',
      category: 'Shoes',
      image:
        'https://images.unsplash.com/photo-1562158070-55f29c5301df?fm=jpg&q=60&w=3000',
      stockCount: 10,
      buyingPrice: 7000,
      sellingPrice: 9000,
      gstPercentage: 18,
      status: 'In Stock',
    },
    {
      id: '100005',
      name: 'Under Armour HOVR Sonic 3 - White Size 36',
      category: 'Shoes',
      image:
        'https://images.unsplash.com/photo-1554131818-8f4f81d68f9a?fm=jpg&q=60&w=3000',
      stockCount: 5,
      buyingPrice: 8500,
      sellingPrice: 11000,
      gstPercentage: 12,
      status: 'In Stock',
    },
    {
      id: '100006',
      name: 'New Balance 574 - Navy Blue Size 41',
      category: 'Shoes',
      image:
        'https://images.unsplash.com/photo-1581235720704-d6fd0d199c41?fm=jpg&q=60&w=3000',
      stockCount: 20,
      buyingPrice: 10000,
      sellingPrice: 13000,
      gstPercentage: 5,
      status: 'In Stock',
    },
    {
      id: '100007',
      name: 'Asics Gel-Kayano 27 - Orange Size 39',
      category: 'Shoes',
      image:
        'https://images.unsplash.com/photo-1600180759095-b1b29217016d?fm=jpg&q=60&w=3000',
      stockCount: 8,
      buyingPrice: 14000,
      sellingPrice: 16500,
      gstPercentage: 18,
      status: 'In Stock',
    },
    {
      id: '100008',
      name: 'Crocs Classic Clog - Green Size 37',
      category: 'Sandals',
      image:
        'https://images.unsplash.com/photo-1596464716129-8d89710bdf3a?fm=jpg&q=60&w=3000',
      stockCount: 30,
      buyingPrice: 3000,
      sellingPrice: 4500,
      gstPercentage: 5,
      status: 'In Stock',
    },
    {
      id: '100009',
      name: 'Birkenstock Arizona - Beige Size 40',
      category: 'Sandals',
      image:
        'https://images.unsplash.com/photo-1529193662700-55c03574633f?fm=jpg&q=60&w=3000',
      stockCount: 18,
      buyingPrice: 4000,
      sellingPrice: 6000,
      gstPercentage: 12,
      status: 'In Stock',
    },
    {
      id: '100010',
      name: 'Converse Chuck Taylor All Star - Black Size 35',
      category: 'Shoes',
      image:
        'https://images.unsplash.com/photo-1576669806009-6518b6dbfdbf?fm=jpg&q=60&w=3000',
      stockCount: 12,
      buyingPrice: 5500,
      sellingPrice: 7000,
      gstPercentage: 18,
      status: 'In Stock',
    },
    {
      id: '100011',
      name: 'Hush Puppies Loafers - Brown Size 42',
      category: 'Formal Shoes',
      image:
        'https://images.unsplash.com/photo-1542291027-8efaa2f3fdf4?fm=jpg&q=60&w=3000',
      stockCount: 7,
      buyingPrice: 8500,
      sellingPrice: 10000,
      gstPercentage: 12,
      status: 'In Stock',
    },
    {
      id: '100012',
      name: 'Skechers Arch Fit - Grey Size 39',
      category: 'Casual Shoes',
      image:
        'https://images.unsplash.com/photo-1598475441301-7e64c79794bc?fm=jpg&q=60&w=3000',
      stockCount: 15,
      buyingPrice: 9500,
      sellingPrice: 12000,
      gstPercentage: 5,
      status: 'In Stock',
    },
    {
      id: '100013',
      name: 'Red Tape Moccasins - Tan Size 44',
      category: 'Formal Shoes',
      image:
        'https://images.unsplash.com/photo-1512462437239-fdb76e7f6f1d?fm=jpg&q=60&w=3000',
      stockCount: 9,
      buyingPrice: 7000,
      sellingPrice: 8500,
      gstPercentage: 12,
      status: 'In Stock',
    },
    {
      id: '100014',
      name: 'Woodland Hiking Boots - Olive Size 40',
      category: 'Boots',
      image:
        'https://images.unsplash.com/photo-1529169064817-ffcbab8d0676?fm=jpg&q=60&w=3000',
      stockCount: 6,
      buyingPrice: 9500,
      sellingPrice: 11500,
      gstPercentage: 18,
      status: 'In Stock',
    },
    {
      id: '100015',
      name: 'Clarks Desert Boots - Suede Size 41',
      category: 'Boots',
      image:
        'https://images.unsplash.com/photo-1600180758459-e1ae1c348ce3?fm=jpg&q=60&w=3000',
      stockCount: 10,
      buyingPrice: 11500,
      sellingPrice: 14000,
      gstPercentage: 12,
      status: 'In Stock',
    },
    {
      id: '100016',
      name: 'Fila Running Shoes - Red Size 38',
      category: 'Shoes',
      image:
        'https://images.unsplash.com/photo-1600180758765-8c0b3e3bb3a3?fm=jpg&q=60&w=3000',
      stockCount: 25,
      buyingPrice: 7500,
      sellingPrice: 9500,
      gstPercentage: 5,
      status: 'In Stock',
    },
    {
      id: '100017',
      name: 'Vans Old Skool - Navy Blue Size 36',
      category: 'Casual Shoes',
      image:
        'https://images.unsplash.com/photo-1600180759121-7df67ec0a515?fm=jpg&q=60&w=3000',
      stockCount: 18,
      buyingPrice: 8500,
      sellingPrice: 10000,
      gstPercentage: 18,
      status: 'In Stock',
    },
    {
      id: '100018',
      name: 'Sparx Sandals - Grey Size 39',
      category: 'Sandals',
      image:
        'https://images.unsplash.com/photo-1600180758935-15c97271d837?fm=jpg&q=60&w=3000',
      stockCount: 30,
      buyingPrice: 2500,
      sellingPrice: 3500,
      gstPercentage: 5,
      status: 'In Stock',
    },
    {
      id: '100019',
      name: 'Bata Chappals - Black Size 42',
      category: 'Chappals',
      image:
        'https://images.unsplash.com/photo-1600180759273-31fd3f01ef88?fm=jpg&q=60&w=3000',
      stockCount: 40,
      buyingPrice: 1000,
      sellingPrice: 1500,
      gstPercentage: 5,
      status: 'In Stock',
    },
    {
      id: '100020',
      name: 'Liberty Casual Shoes - White Size 41',
      category: 'Casual Shoes',
      image:
        'https://images.unsplash.com/photo-1600180759003-3341dd742d63?fm=jpg&q=60&w=3000',
      stockCount: 22,
      buyingPrice: 4000,
      sellingPrice: 5500,
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
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.id.includes(searchQuery);
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
          {filteredProducts.map((product) => (
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
                  <img src="/delete.png" alt="Delete" className="deleteicon" />
                  <img src="/edit.png" alt="Edit" className="deleteicon" />
                </div>
              </div>
            </div>
          ))}
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
