import { useState, useEffect } from 'react';
import axios from 'axios'; // You can also use fetch API

export default function Inventory() {
  const [inventoryData, setInventoryData] = useState([]); // State to hold the fetched inventory
  const [searchQuery, setSearchQuery] = useState(''); // State to handle search input
  const [selectedCategory, setSelectedCategory] = useState('All'); // State to track active category

  const categories = [
    'All',
    ...new Set(inventoryData.map((item) => item.category)),
  ];

  // Fetch inventory data when the page loads
  useEffect(() => {
    const vendoremail = localStorage.getItem('vendoremail');
    console.log(vendoremail);
    // Function to fetch inventory data based on vendor email
    const fetchInventory = async () => {
      try {
        // Fetch inventory using vendorEmail
        const response = await axios.get(
          `https://superbill-api.vercel.app/fetchinventory/vendoremail=${vendoremail}`
        );
        // Set the inventory data to inventoryData state
        if (response.data.success) {
          setInventoryData(response.data.inventory);
        } else {
          console.error('Error fetching inventory:', response.data.message);
        }
      } catch (error) {
        console.error('Error fetching inventory:', error);
      }
    };

    // Call the function to fetch the inventory when the component mounts
    fetchInventory();
  }, []); // Adding vendorEmail to the dependency array

  // Filtered Items based on Search Query and Selected Category
  const filteredItems = inventoryData.filter((item) => {
    const query = searchQuery.toLowerCase();

    const matchesSearch =
      (item.productName && item.productName.toLowerCase().includes(query)) || // Ensure name is defined
      (item.productId && item.productId.toString().includes(query)) || // Ensure id is defined and convert to string
      (item.category && item.category.toLowerCase().includes(query)) || // Ensure category is defined
      (item.stockQuantity && item.stockQuantity.toString().includes(query)) || // Ensure stockCount is defined
      (item.costPrice && item.costPrice.toString().includes(query)) || // Ensure buyingPrice is defined
      (item.sellingPrice && item.sellingPrice.toString().includes(query)) || // Ensure sellingPrice is defined
      (item.gstRate && item.gstRate.toString().includes(query)); // Ensure gstPercentage is defined

    const matchesCategory =
      selectedCategory === 'All' ||
      (item.category && item.category === selectedCategory);

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

  const [activeFilter, setActiveFilter] = useState('Available');

  // Function to filter items based on the active filter
  const getFilteredItemsByStock = () => {
    if (activeFilter === 'Available') {
      return inventoryData.filter((item) => item.stockQuantity > 5);
    } else if (activeFilter === 'Low Availability') {
      return inventoryData.filter(
        (item) => item.stockQuantity > 0 && item.stockQuantity <= 5
      );
    } else if (activeFilter === 'Stock Over') {
      return inventoryData.filter((item) => item.stockQuantity === 0);
    }
    return inventoryData;
  };

  // Function to handle tab change
  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
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
        <div className="stockalertandinsights">
          {/* Filter Tabs */}
          <div className="filteralerts">
            <div
              className={`filter ${
                activeFilter === 'Available' ? 'activefilter' : ''
              }`}
              onClick={() => setActiveFilter('Available')}
            >
              Available
            </div>
            <div
              className={`filter ${
                activeFilter === 'Low Availability' ? 'activefilter' : ''
              }`}
              onClick={() => setActiveFilter('Low Availability')}
            >
              Low Availability
            </div>
            <div
              className={`filter ${
                activeFilter === 'Stock Over' ? 'activefilter' : ''
              }`}
              onClick={() => setActiveFilter('Stock Over')}
            >
              Stock Over
            </div>
          </div>

          {/* Items Alerts */}
          <div className="itemsalerts">
            {getFilteredItemsByStock().length > 0 ? (
              getFilteredItemsByStock().map((item) => (
                <div className="itemalert" key={item.id}>
                  <div className="alertproductinfo">
                    <div className="alertproductname">
                      <div className="smallcircle"></div> {item.productName}
                    </div>
                    <div className="alertproductidcat">
                      Id: {item.productId} | {item.category}
                    </div>
                  </div>
                  <div className="alertstockamount">
                    <div className="stockamounttag">
                      {item.stockQuantity > 0
                        ? `${item.stockQuantity} in Stock`
                        : 'Out of Stock'}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No items found for the selected filter.</p>
            )}
          </div>
        </div>
        <div className="inventoryitems">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <div className="productcard" key={item.productId}>
                <img src={item.image} alt="" className="productimage" />
                <div className="productinfo">
                  <div className="productname">
                    <span className="serialnumber">{index + 1} . </span>
                    {item.productName}
                  </div>
                  <div className="productstatus">
                    <div className="smallcircle"></div>
                    <div className="prodcat">Id : {item.productId}</div>
                    <div className="smallcircle"></div>
                    <div className="prodcat">{item.category}</div>
                    <div className="smallcircle"></div>
                    <img src="/stock.png" alt="Stock" className="stockicon" />
                    <div
                      className="stockcount"
                      style={{
                        color:
                          item.stockQuantity === 0
                            ? 'rgb(255, 109, 109)'
                            : item.stockQuantity <= 5
                            ? 'royalblue'
                            : '#39db7d',
                      }}
                    >
                      {item.stockQuantity} in Stock
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
                    <div className="buyingpriceamount">{item.costPrice} Rs</div>
                  </div>
                  <div className="sep"></div>
                  <div className="sellingprice">
                    <div className="sellinghead">
                      <div className="smallcirclegreen"></div>
                      <div className="sellingtext">Selling Price</div>
                    </div>
                    <div className="sellingpriceamount">
                      {item.sellingPrice} Rs
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

// {
//   id: '300001',
//   name: 'Adidas Men’s Running Shoes',
//   category: 'Shoes',
//   image:
//     'https://images.unsplash.com/photo-1600180758656-55e1e19eb0a5?fm=jpg&q=60&w=3000',
//   stockCount: 12,
//   buyingPrice: 4000,
//   sellingPrice: 5500,
//   gstPercentage: 12,
//   status: 'In Stock',
// },
// {
//   id: '300002',
//   name: 'Nike Women’s Training T-shirt',
//   category: 'T-shirts',
//   image:
//     'https://images.unsplash.com/photo-1586090720577-36baf5196c80?fm=jpg&q=60&w=3000',
//   stockCount: 8,
//   buyingPrice: 1200,
//   sellingPrice: 1600,
//   gstPercentage: 5,
//   status: 'In Stock',
// },
// {
//   id: '300003',
//   name: 'H&M Slim Fit Jeans - Women',
//   category: 'Jeans',
//   image:
//     'https://images.unsplash.com/photo-1578706822472-29703f5a53a5?fm=jpg&q=60&w=3000',
//   stockCount: 0,
//   buyingPrice: 2500,
//   sellingPrice: 3300,
//   gstPercentage: 12,
//   status: 'Out of Stock',
// },
// {
//   id: '300004',
//   name: 'Zara Party Dress',
//   category: 'Dresses',
//   image:
//     'https://images.unsplash.com/photo-1578432018647-84a57bdb8d12?fm=jpg&q=60&w=3000',
//   stockCount: 5,
//   buyingPrice: 5000,
//   sellingPrice: 6500,
//   gstPercentage: 12,
//   status: 'In Stock',
// },
// {
//   id: '300005',
//   name: 'Levi’s Men’s Denim Jacket',
//   category: 'Jackets',
//   image:
//     'https://images.unsplash.com/photo-1591035897819-d1736b345bf8?fm=jpg&q=60&w=3000',
//   stockCount: 15,
//   buyingPrice: 4500,
//   sellingPrice: 5500,
//   gstPercentage: 12,
//   status: 'In Stock',
// },
// {
//   id: '300006',
//   name: 'Puma Women’s Sports Bra',
//   category: 'Activewear',
//   image:
//     'https://images.unsplash.com/photo-1621322991065-bdadb85d5cc1?fm=jpg&q=60&w=3000',
//   stockCount: 7,
//   buyingPrice: 1000,
//   sellingPrice: 1400,
//   gstPercentage: 5,
//   status: 'In Stock',
// },
// {
//   id: '300007',
//   name: 'Woodland Casual Boots',
//   category: 'Shoes',
//   image:
//     'https://images.unsplash.com/photo-1571771686378-cf4da03603b3?fm=jpg&q=60&w=3000',
//   stockCount: 0,
//   buyingPrice: 6000,
//   sellingPrice: 7500,
//   gstPercentage: 12,
//   status: 'Out of Stock',
// },
// {
//   id: '300008',
//   name: 'Uniqlo Fleece Hoodie',
//   category: 'Hoodies',
//   image:
//     'https://images.unsplash.com/photo-1526948531397-19b0e03277dc?fm=jpg&q=60&w=3000',
//   stockCount: 20,
//   buyingPrice: 3000,
//   sellingPrice: 4000,
//   gstPercentage: 12,
//   status: 'In Stock',
// },
// {
//   id: '300009',
//   name: 'Reebok Training Joggers',
//   category: 'Activewear',
//   image:
//     'https://images.unsplash.com/photo-1580293664094-85c8a3e9f8fa?fm=jpg&q=60&w=3000',
//   stockCount: 10,
//   buyingPrice: 2200,
//   sellingPrice: 3000,
//   gstPercentage: 5,
//   status: 'In Stock',
// },
// {
//   id: '300010',
//   name: 'Gap Kids’ Graphic T-shirt',
//   category: 'T-shirts',
//   image:
//     'https://images.unsplash.com/photo-1612506691673-e6b2687514b4?fm=jpg&q=60&w=3000',
//   stockCount: 30,
//   buyingPrice: 800,
//   sellingPrice: 1200,
//   gstPercentage: 5,
//   status: 'In Stock',
// },
// {
//   id: '300011',
//   name: 'Tommy Hilfiger Polo T-shirt',
//   category: 'T-shirts',
//   image:
//     'https://images.unsplash.com/photo-1542291026-7eec264c27ff?fm=jpg&q=60&w=3000',
//   stockCount: 6,
//   buyingPrice: 3000,
//   sellingPrice: 4000,
//   gstPercentage: 12,
//   status: 'In Stock',
// },
// {
//   id: '300012',
//   name: 'Under Armour Sports Shorts',
//   category: 'Shorts',
//   image:
//     'https://images.unsplash.com/photo-1532259413637-72e6d1b2b18f?fm=jpg&q=60&w=3000',
//   stockCount: 0,
//   buyingPrice: 1000,
//   sellingPrice: 1400,
//   gstPercentage: 5,
//   status: 'Out of Stock',
// },
// {
//   id: '300013',
//   name: 'Biba Women’s Kurta Set',
//   category: 'Ethnic Wear',
//   image:
//     'https://images.unsplash.com/photo-1614938573072-11cc5e2f017e?fm=jpg&q=60&w=3000',
//   stockCount: 9,
//   buyingPrice: 3500,
//   sellingPrice: 4500,
//   gstPercentage: 12,
//   status: 'In Stock',
// },
// {
//   id: '300014',
//   name: 'Calvin Klein Women’s Dress',
//   category: 'Dresses',
//   image:
//     'https://images.unsplash.com/photo-1560807707-8cc77767d783?fm=jpg&q=60&w=3000',
//   stockCount: 14,
//   buyingPrice: 8000,
//   sellingPrice: 10000,
//   gstPercentage: 12,
//   status: 'In Stock',
// },
// {
//   id: '300015',
//   name: 'Allen Solly Formal Trousers',
//   category: 'Trousers',
//   image:
//     'https://images.unsplash.com/photo-1529333166436-c7e802f7e3a6?fm=jpg&q=60&w=3000',
//   stockCount: 5,
//   buyingPrice: 3000,
//   sellingPrice: 4000,
//   gstPercentage: 12,
//   status: 'In Stock',
// },
// {
//   id: '300016',
//   name: 'Forever 21 Women’s Tank Top',
//   category: 'Tops',
//   image:
//     'https://images.unsplash.com/photo-1586438905620-2f6d9bdf12e2?fm=jpg&q=60&w=3000',
//   stockCount: 25,
//   buyingPrice: 1000,
//   sellingPrice: 1500,
//   gstPercentage: 5,
//   status: 'In Stock',
// },
// {
//   id: '300017',
//   name: 'Raymond Blazer - Men',
//   category: 'Blazers',
//   image:
//     'https://images.unsplash.com/photo-1553524819-27ddf0ea38b4?fm=jpg&q=60&w=3000',
//   stockCount: 8,
//   buyingPrice: 10000,
//   sellingPrice: 12000,
//   gstPercentage: 12,
//   status: 'In Stock',
// },
// {
//   id: '300018',
//   name: 'Van Heusen Women’s Formal Shirt',
//   category: 'Shirts',
//   image:
//     'https://images.unsplash.com/photo-1612516461701-6c0b3f8c03e4?fm=jpg&q=60&w=3000',
//   stockCount: 11,
//   buyingPrice: 2000,
//   sellingPrice: 2500,
//   gstPercentage: 12,
//   status: 'In Stock',
// },
// {
//   id: '300019',
//   name: 'Zivame Women’s Loungewear Set',
//   category: 'Loungewear',
//   image:
//     'https://images.unsplash.com/photo-1623227823348-4f6318a2c3c5?fm=jpg&q=60&w=3000',
//   stockCount: 16,
//   buyingPrice: 1500,
//   sellingPrice: 2200,
//   gstPercentage: 5,
//   status: 'In Stock',
// },
// {
//   id: '300020',
//   name: 'Peter England Men’s Suit',
//   category: 'Suits',
//   image:
//     'https://images.unsplash.com/photo-1592878816635-0c1028e57b80?fm=jpg&q=60&w=3000',
//   stockCount: 10,
//   buyingPrice: 12000,
//   sellingPrice: 15000,
//   gstPercentage: 12,
//   status: 'In Stock',
// },
// {
//   id: '300021',
//   name: 'Levi’s Men’s Casual Shirt',
//   category: 'Shirts',
//   image:
//     'https://images.unsplash.com/photo-1578588572900-b8e15e6b8e5c?fm=jpg&q=60&w=3000',
//   stockCount: 4,
//   buyingPrice: 2200,
//   sellingPrice: 2800,
//   gstPercentage: 12,
//   status: 'In Stock',
// },
// {
//   id: '300022',
//   name: 'H&M Women’s Jogger Pants',
//   category: 'Pants',
//   image:
//     'https://images.unsplash.com/photo-1575857543046-b1b22f1e3a6d?fm=jpg&q=60&w=3000',
//   stockCount: 6,
//   buyingPrice: 1500,
//   sellingPrice: 2000,
//   gstPercentage: 5,
//   status: 'In Stock',
// },
// {
//   id: '300023',
//   name: 'Van Heusen Men’s Casual Trousers',
//   category: 'Trousers',
//   image:
//     'https://images.unsplash.com/photo-1573901242389-d9a19ad65912?fm=jpg&q=60&w=3000',
//   stockCount: 3,
//   buyingPrice: 2800,
//   sellingPrice: 3500,
//   gstPercentage: 12,
//   status: 'In Stock',
// },
// {
//   id: '300024',
//   name: 'Puma Men’s Running Shoes',
//   category: 'Shoes',
//   image:
//     'https://images.unsplash.com/photo-1602853650792-b855bb53d8b5?fm=jpg&q=60&w=3000',
//   stockCount: 2,
//   buyingPrice: 4500,
//   sellingPrice: 6000,
//   gstPercentage: 12,
//   status: 'In Stock',
// },
// {
//   id: '300025',
//   name: 'Adidas Women’s Sports Bra',
//   category: 'Activewear',
//   image:
//     'https://images.unsplash.com/photo-1621322991065-bdadb85d5cc1?fm=jpg&q=60&w=3000',
//   stockCount: 5,
//   buyingPrice: 900,
//   sellingPrice: 1200,
//   gstPercentage: 5,
//   status: 'In Stock',
// },
// {
//   id: '300026',
//   name: 'Tommy Hilfiger Men’s Polo Shirt',
//   category: 'Shirts',
//   image:
//     'https://images.unsplash.com/photo-1591215100234-e8a1bba53957?fm=jpg&q=60&w=3000',
//   stockCount: 6,
//   buyingPrice: 2500,
//   sellingPrice: 3000,
//   gstPercentage: 12,
//   status: 'In Stock',
// },
// {
//   id: '300027',
//   name: 'Zara Women’s Blouse',
//   category: 'Tops',
//   image:
//     'https://images.unsplash.com/photo-1578997731330-fccf075c8502?fm=jpg&q=60&w=3000',
//   stockCount: 7,
//   buyingPrice: 1800,
//   sellingPrice: 2200,
//   gstPercentage: 12,
//   status: 'In Stock',
// },
// {
//   id: '300028',
//   name: 'H&M Women’s Casual Dress',
//   category: 'Dresses',
//   image:
//     'https://images.unsplash.com/photo-1584990982457-ff836957a6e5?fm=jpg&q=60&w=3000',
//   stockCount: 4,
//   buyingPrice: 3000,
//   sellingPrice: 3800,
//   gstPercentage: 12,
//   status: 'In Stock',
// },
// {
//   id: '300029',
//   name: 'Levi’s Men’s Denim Jeans',
//   category: 'Jeans',
//   image:
//     'https://images.unsplash.com/photo-1607734308069-6e1f381e56d0?fm=jpg&q=60&w=3000',
//   stockCount: 8,
//   buyingPrice: 2500,
//   sellingPrice: 3300,
//   gstPercentage: 12,
//   status: 'In Stock',
// },
// {
//   id: '300030',
//   name: 'Nike Men’s Training T-shirt',
//   category: 'T-shirts',
//   image:
//     'https://images.unsplash.com/photo-1569155579-297ee61fe9d1?fm=jpg&q=60&w=3000',
//   stockCount: 3,
//   buyingPrice: 1500,
//   sellingPrice: 2000,
//   gstPercentage: 5,
//   status: 'In Stock',
// },
// {
//   id: '300031',
//   name: 'Uniqlo Men’s Jeans',
//   category: 'Jeans',
//   image:
//     'https://images.unsplash.com/photo-1566221605-9235fbd90069?fm=jpg&q=60&w=3000',
//   stockCount: 5,
//   buyingPrice: 2200,
//   sellingPrice: 2700,
//   gstPercentage: 12,
//   status: 'In Stock',
// },
// {
//   id: '300032',
//   name: 'Biba Women’s Salwar Kameez',
//   category: 'Ethnic Wear',
//   image:
//     'https://images.unsplash.com/photo-1608139293009-b0d80c513875?fm=jpg&q=60&w=3000',
//   stockCount: 4,
//   buyingPrice: 3800,
//   sellingPrice: 4500,
//   gstPercentage: 12,
//   status: 'In Stock',
// },
// {
//   id: '300033',
//   name: 'Raymond Men’s Suit',
//   category: 'Suits',
//   image:
//     'https://images.unsplash.com/photo-1592878816635-0c1028e57b80?fm=jpg&q=60&w=3000',
//   stockCount: 2,
//   buyingPrice: 12000,
//   sellingPrice: 15000,
//   gstPercentage: 12,
//   status: 'In Stock',
// },
// {
//   id: '300034',
//   name: 'Van Heusen Men’s Shirt',
//   category: 'Shirts',
//   image:
//     'https://images.unsplash.com/photo-1572025401491-bf69b2b4295a?fm=jpg&q=60&w=3000',
//   stockCount: 5,
//   buyingPrice: 2200,
//   sellingPrice: 2800,
//   gstPercentage: 12,
//   status: 'In Stock',
// },
// {
//   id: '300035',
//   name: 'Adidas Women’s Sports Shoes',
//   category: 'Shoes',
//   image:
//     'https://images.unsplash.com/photo-1600195971452-b0a1c568bc7f?fm=jpg&q=60&w=3000',
//   stockCount: 3,
//   buyingPrice: 3500,
//   sellingPrice: 4500,
//   gstPercentage: 12,
//   status: 'In Stock',
// },
// {
//   id: '300036',
//   name: 'H&M Men’s Sweater',
//   category: 'Sweaters',
//   image:
//     'https://images.unsplash.com/photo-1585253093074-c1a734b7715a?fm=jpg&q=60&w=3000',
//   stockCount: 2,
//   buyingPrice: 2500,
//   sellingPrice: 3200,
//   gstPercentage: 12,
//   status: 'In Stock',
// },
// {
//   id: '300037',
//   name: 'Uniqlo Women’s Winter Jacket',
//   category: 'Jackets',
//   image:
//     'https://images.unsplash.com/photo-1600227633252-4782901b96a4?fm=jpg&q=60&w=3000',
//   stockCount: 4,
//   buyingPrice: 5000,
//   sellingPrice: 6500,
//   gstPercentage: 12,
//   status: 'In Stock',
// },
// {
//   id: '300038',
//   name: 'Puma Men’s Tracksuit',
//   category: 'Activewear',
//   image:
//     'https://images.unsplash.com/photo-1617020574586-b734285bb632?fm=jpg&q=60&w=3000',
//   stockCount: 3,
//   buyingPrice: 3500,
//   sellingPrice: 4500,
//   gstPercentage: 12,
//   status: 'In Stock',
// },
// {
//   id: '300039',
//   name: 'Levi’s Women’s Skirt',
//   category: 'Skirts',
//   image:
//     'https://images.unsplash.com/photo-1600104784641-1c01b20b2dbf?fm=jpg&q=60&w=3000',
//   stockCount: 5,
//   buyingPrice: 1500,
//   sellingPrice: 2000,
//   gstPercentage: 5,
//   status: 'In Stock',
// },
// {
//   id: '300040',
//   name: 'Adidas Men’s Sports Socks (3-Pack)',
//   category: 'Socks',
//   image:
//     'https://images.unsplash.com/photo-1600227633252-4782901b96a4?fm=jpg&q=60&w=3000',
//   stockCount: 12,
//   buyingPrice: 600,
//   sellingPrice: 900,
//   gstPercentage: 5,
//   status: 'In Stock',
// },
