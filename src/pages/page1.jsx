import { useState } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

export default function Page1() {
  const options = [
    'Today',
    'This Week',
    'This Month',
    'Last 3 Months',
    'Last 6 Months',
    'Last Year',
    'All Time',
  ];
  const defaultOption = options[0];
  const [selectedOption, setSelectedOption] = useState(defaultOption);

  const handleSelect = (option) => {
    setSelectedOption(option.value);
    console.log('Selected:', option.value); // For debugging
  };

  var totalitems = 150;
  var totalSoldtoday = 60;
  var GST = '11,600';
  var analyticslogo =
    'https://cdn.brandfetch.io/zudio.com/fallback/lettermark/theme/dark/h/256/w/256/icon?c=1bfwsmEH20zzEfSNTed';
  var analyticscompany = 'Zudio - Bhilai TI Mall';
  var ownername = 'Abhishek Jain';
  var imagelink =
    'https://preview.redd.it/new-profile-pictures-for-yall-v0-brdjms2xte3c1.jpg?width=640&crop=smart&auto=webp&s=a785e9ec16789276c74b19398f4f41b471f672f8';

  return (
    <div className="page1">
      <div className="companyinfo">
        <div className="companyinformation">
          <img
            src={analyticslogo}
            alt="Analytics Logo"
            className="analyticslogo"
          />
          <div className="companynames">
            <div className="analyticscompany">{analyticscompany}</div>
            <div className="ownertag">
              <img src={imagelink} alt="Owner Image" className="ownerimg" />
              <div className="ownername">{ownername}</div>
            </div>
          </div>
        </div>

        <Dropdown
          options={options}
          onChange={handleSelect}
          value={selectedOption}
          placeholder="Select an option"
          className="filters"
        />
      </div>
      <div className="analytics">
        <div className="analytic inventoryvalue">
          <div className="top">
            <div className="circle"></div>
            <div className="analytictag">Total Inventory Value</div>
          </div>
          <div className="mid">12,55,000</div>
          <div className="bottom">+ Total Available Items - {totalitems}</div>
        </div>
        <div className="analytic inventoryvalue">
          <div className="top">
            <div className="circle"></div>
            <div className="analytictag">Total Sales</div>
          </div>
          <div className="mid">65,000</div>
          <div className="bottom">+ Total Items Sold - {totalSoldtoday}</div>
        </div>
        <div className="analytic inventoryvalue">
          <div className="top">
            <div className="circle"></div>
            <div className="analytictag">Total Bills</div>
          </div>
          <div className="mid">62,000</div>
          <div className="bottom">+ GST To be Paid - {GST}</div>
        </div>
        <div className="analytic inventoryvalue">
          <div className="top">
            <div className="circle"></div>
            <div className="analytictag">Total Profit</div>
          </div>
          <div className="mid">23,000</div>
          <div className="bottom">After Taxes - 18,000</div>
        </div>
      </div>
    </div>
  );
}
