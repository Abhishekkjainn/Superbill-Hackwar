import React, { useState } from 'react';
import Papa from 'papaparse';

export default function AddInventory() {
  const [formData, setformData] = useState({
    productId: '',
    productName: '',
    category: '',
    description: '',
    stockQuantity: '',
    minStockLevel: '',
    sellingPrice: '',
    costPrice: '',
    maxDiscount: '',
    productImageLink: '',
    gstRate: '',
  });

  const [inventory, setInventory] = useState([]);
  const [error, setError] = useState('');
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isUploadSuccess, setUploadSuccess] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setformData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const validateForm = () => {
    const {
      productId,
      productName,
      category,
      description,
      stockQuantity,
      minStockLevel,
      sellingPrice,
      costPrice,
      maxDiscount,
      productImageLink,
      gstRate,
    } = formData;

    if (
      !productId ||
      !productName ||
      !category ||
      !description ||
      !stockQuantity ||
      !minStockLevel ||
      !sellingPrice ||
      !costPrice ||
      !maxDiscount ||
      !productImageLink ||
      !gstRate
    ) {
      setError('All fields are required!');
      return false;
    }

    if (
      isNaN(stockQuantity) ||
      isNaN(minStockLevel) ||
      isNaN(sellingPrice) ||
      isNaN(costPrice) ||
      isNaN(maxDiscount) ||
      isNaN(gstRate)
    ) {
      setError('Numeric fields must contain valid numbers!');
      return false;
    }

    setError('');
    return true;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      setInventory((prevInventory) => [...prevInventory, formData]);
      setformData({
        productId: '',
        productName: '',
        category: '',
        description: '',
        stockQuantity: '',
        minStockLevel: '',
        sellingPrice: '',
        costPrice: '',
        maxDiscount: '',
        productImageLink: '',
        gstRate: '',
      });
    }
  };

  const handleSave = async () => {
    if (inventory.length === 0) {
      setError('No items to save!');
      return;
    }

    try {
      const response = await fetch('YOUR_API_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ inventory }),
      });
      if (response.ok) {
        alert('Inventory saved successfully!');
        setInventory([]);
      } else {
        alert('Failed to save inventory.');
      }
    } catch (error) {
      console.error('Error saving inventory:', error);
    }
  };

  const handleViewItems = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Parse the CSV file
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        const data = results.data.map((item) => ({
          productId: item['productId'],
          productName: item['productName'],
          category: item['category'],
          description: item['description'],
          stockQuantity: item['stockQuantity'],
          minStockLevel: item['minStockLevel'],
          sellingPrice: item['sellingPrice'],
          costPrice: item['costPrice'],
          maxDiscount: item['maxDiscount'],
          gstRate: item['gstRate'],
        }));

        // Add parsed data to inventory
        setInventory((prevInventory) => [...prevInventory, ...data]);
        setUploadSuccess(true);
        setTimeout(() => setUploadSuccess(false), 3000);
      },
      error: function () {
        setError('Failed to parse the file. Please check the format.');
      },
    });
  };

  return (
    <div className="addinventorypage">
      <div className="head">
        <div className="firstparthead">
          <div className="maininvhead">Add Inventory</div>
          <div className="subhead">Add Your Products To Your Inventory</div>
        </div>
        <div className="secondparthead">
          <div className="file-upload-section">
            <label htmlFor="csvUpload" className="upload-btn">
              Upload CSV
            </label>
            <input
              type="file"
              id="csvUpload"
              accept=".csv"
              onChange={handleFileUpload}
              style={{ display: 'none' }}
            />
          </div>
        </div>
      </div>
      <div className="addinventoryform">
        {error && <div className="error">{error}</div>}
        <div className="firstsectionaddinv">
          <div className="productsection">
            <div className="sectionheading">
              <div className="bigcircle"></div> Product Details
            </div>
            <div className="formsection">
              {[
                { label: 'Product ID', id: 'productId', placeholder: '123ABC' },
                {
                  label: 'Product Name',
                  id: 'productName',
                  placeholder: 'Nike AIR Jordans',
                },
                { label: 'Category', id: 'category', placeholder: 'Shoes' },
                {
                  label: 'Description',
                  id: 'description',
                  placeholder:
                    'Unpacked Shoes with Great Condition box, Color Red and Size 14',
                },
              ].map((field) => (
                <div className="group" key={field.id}>
                  <div className="label">{field.label}</div>
                  <input
                    type="text"
                    id={field.id}
                    className="inputfield"
                    placeholder={field.placeholder}
                    value={formData[field.id]}
                    onChange={handleChange}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="productsection">
            <div className="sectionheading">
              <div className="bigcircle"></div> Stock Levels
            </div>
            <div className="formsection">
              {[
                {
                  label: 'Stock Quantity',
                  id: 'stockQuantity',
                  placeholder: '12',
                },
                {
                  label: 'Min Stock Level',
                  id: 'minStockLevel',
                  placeholder: '2',
                },
              ].map((field) => (
                <div className="group" key={field.id}>
                  <div className="label">{field.label}</div>
                  <input
                    type="number"
                    id={field.id}
                    className="inputfield"
                    placeholder={field.placeholder}
                    value={formData[field.id]}
                    onChange={handleChange}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="secondsectionaddinv">
          <div className="productsection">
            <div className="sectionheading">
              <div className="bigcircle"></div> Pricing Section
            </div>
            <div className="formsection">
              {[
                {
                  label: 'Selling Price',
                  id: 'sellingPrice',
                  placeholder: '12000',
                },
                { label: 'Cost Price', id: 'costPrice', placeholder: '7500' },
                {
                  label: 'Max Discount',
                  id: 'maxDiscount',
                  placeholder: '35',
                },
              ].map((field) => (
                <div className="group" key={field.id}>
                  <div className="label">{field.label}</div>
                  <input
                    type="number"
                    id={field.id}
                    className="inputfield"
                    placeholder={field.placeholder}
                    value={formData[field.id]}
                    onChange={handleChange}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="productsection">
            <div className="sectionheading">
              <div className="bigcircle"></div> Other Details
            </div>
            <div className="formsection">
              {[
                {
                  label: 'Product Image Link',
                  id: 'productImageLink',
                  placeholder: 'https://example.com/image.jpg',
                },
                {
                  label: 'GST Rate Applicable',
                  id: 'gstRate',
                  placeholder: '18',
                },
              ].map((field) => (
                <div className="group" key={field.id}>
                  <div className="label">{field.label}</div>
                  <input
                    type={field.id === 'gstRate' ? 'number' : 'text'}
                    id={field.id}
                    className="inputfield"
                    placeholder={field.placeholder}
                    value={formData[field.id]}
                    onChange={handleChange}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="invbuttons">
        <div className="additembutton" onClick={handleSubmit}>
          <img src="/add.png" alt="Add" className="addicon" />
          Add Item
        </div>
        <div className="additembutton" onClick={handleViewItems}>
          <img src="/view.png" alt="View" className="addicon" />
          View Items
        </div>
        <div className="additembutton" onClick={handleSave}>
          <img src="/save.png" alt="Save" className="addicon" />
          Save
        </div>
      </div>

      {isPopupOpen && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-container" onClick={(e) => e.stopPropagation()}>
            <div className="popup-close-button" onClick={closePopup}>
              &times;
            </div>

            <div className="popup-content">
              <table className="popup-table">
                <thead>
                  <tr>
                    <th>Product ID</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Description</th>
                    <th>Stock Qty</th>
                    <th>Min Stock</th>
                    <th>Selling Price</th>
                    <th>Cost Price</th>
                    <th>Max Discount</th>
                    <th>GST</th>
                  </tr>
                </thead>
                <tbody>
                  {inventory.length > 0 ? (
                    inventory.map((item, index) => (
                      <tr key={index}>
                        <td>{item.productId}</td>
                        <td>{item.productName}</td>
                        <td>{item.category}</td>
                        <td>{item.description}</td>
                        <td>{item.stockQuantity}</td>
                        <td>{item.minStockLevel}</td>
                        <td>{item.sellingPrice}</td>
                        <td>{item.costPrice}</td>
                        <td>{item.maxDiscount}</td>
                        <td>{item.gstRate}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="10" style={{ textAlign: 'center' }}>
                        No items available in inventory.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
      {isUploadSuccess && (
        <div className="success-popup">
          Items have been successfully added to the inventory!
        </div>
      )}
    </div>
  );
}
