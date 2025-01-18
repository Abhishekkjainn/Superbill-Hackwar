import { useState } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import React, { PureComponent } from 'react';
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
//   Rectangle,
// } from 'recharts';

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

export default function Page1() {
  const inventorydata = [
    { month: 'January', totalInventoryValue: 105000 },
    { month: 'February', totalInventoryValue: 85000 },
    { month: 'March', totalInventoryValue: 130000 },
    { month: 'April', totalInventoryValue: 90000 },
    { month: 'May', totalInventoryValue: 150000 },
    { month: 'June', totalInventoryValue: 120000 },
    { month: 'July', totalInventoryValue: 175000 },
    { month: 'August', totalInventoryValue: 80000 },
    { month: 'September', totalInventoryValue: 165000 },
    { month: 'October', totalInventoryValue: 120000 },
    { month: 'November', totalInventoryValue: 180000 },
    { month: 'December', totalInventoryValue: 140000 },
  ];

  const billdata = [
    { month: 'January', totalBillsGenerated: 150000 },
    { month: 'February', totalBillsGenerated: 90000 },
    { month: 'March', totalBillsGenerated: 125000 },
    { month: 'April', totalBillsGenerated: 110000 },
    { month: 'May', totalBillsGenerated: 160000 },
    { month: 'June', totalBillsGenerated: 135000 },
    { month: 'July', totalBillsGenerated: 170000 },
    { month: 'August', totalBillsGenerated: 100000 },
    { month: 'September', totalBillsGenerated: 150000 },
    { month: 'October', totalBillsGenerated: 110000 },
    { month: 'November', totalBillsGenerated: 180000 },
    { month: 'December', totalBillsGenerated: 190000 },
  ];

  const transactiondata = [
    { month: 'January', totalTransactions: 130000 },
    { month: 'February', totalTransactions: 100000 },
    { month: 'March', totalTransactions: 150000 },
    { month: 'April', totalTransactions: 120000 },
    { month: 'May', totalTransactions: 170000 },
    { month: 'June', totalTransactions: 110000 },
    { month: 'July', totalTransactions: 160000 },
    { month: 'August', totalTransactions: 130000 },
    { month: 'September', totalTransactions: 120000 },
    { month: 'October', totalTransactions: 175000 },
    { month: 'November', totalTransactions: 140000 },
    { month: 'December', totalTransactions: 180000 },
  ];

  const salesdata = [
    { month: 'January', totalSales: 120000 },
    { month: 'February', totalSales: 85000 },
    { month: 'March', totalSales: 140000 },
    { month: 'April', totalSales: 110000 },
    { month: 'May', totalSales: 180000 },
    { month: 'June', totalSales: 125000 },
    { month: 'July', totalSales: 190000 },
    { month: 'August', totalSales: 95000 },
    { month: 'September', totalSales: 150000 },
    { month: 'October', totalSales: 120000 },
    { month: 'November', totalSales: 160000 },
    { month: 'December', totalSales: 200000 },
  ];

  const options = [
    'Today',
    'This Week',
    'This Month',
    'Last 3 Months',
    'Last 6 Months',
    'Last Year',
    'All Time',
  ];

  const graphoptions = [
    'Inventory Value',
    'Bills Generated',
    'Transactions',
    'Total Sales',
  ];
  const defaultOption = options[0];
  const defaultGraphOption = graphoptions[0];
  const [selectedOption, setSelectedOption] = useState(defaultOption);
  const [selectedgraphoption, setGraphOption] = useState(defaultGraphOption);

  const handleSelect = (option) => {
    setSelectedOption(option.value);
    console.log('Selected:', option.value); // For debugging
  };
  const handlegraphSelect = (option) => {
    setGraphOption(option.value);
    console.log('Selected:', option.value); // For debugging
  };
  const customBlue = '#4A90E2'; // Main blue color
  const hoverEffect = '#285A99'; // Darker blue for hover effect
  const barRadius = [10, 10, 0, 0];

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
      <div className="secondrow">
        <div className="graph">
          <div className="graphinfo">
            <div className="graphheads">
              <div className="graphicon">
                <img
                  src="/graph.png"
                  alt="Graph Icon"
                  className="graphiconimg"
                />
              </div>
              <div className="graphheading">
                <div className="fixedhead">Graphs And Analysis.</div>
                <div className="variablehead">Total Inventory</div>
              </div>
            </div>
            <div className="selectors">
              <Dropdown
                options={graphoptions}
                onChange={handlegraphSelect}
                value={selectedgraphoption}
                placeholder="Select an option"
                className="filters"
              />
            </div>
          </div>
          <ResponsiveContainer width="100%" height="75%">
            <AreaChart
              width={500}
              height={300}
              data={
                selectedgraphoption === 'Inventory Value'
                  ? inventorydata
                  : selectedgraphoption === 'Bills Generated'
                  ? billdata
                  : selectedgraphoption === 'Transactions'
                  ? transactiondata
                  : salesdata
              }
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              {/* Subtle Grid */}
              <CartesianGrid strokeDasharray="3 3" stroke="#A1C4E9" />

              {/* X Axis */}
              <XAxis
                dataKey="month"
                tick={{ fontSize: '8px', fill: 'black', fontWeight: '600' }}
                axisLine={{ stroke: 'black' }}
                tickLine={{ stroke: 'black', strokeWidth: 2 }}
              />

              {/* Y Axis */}
              <YAxis
                tick={{ fontSize: '8px', fill: 'black', fontWeight: '600' }}
                axisLine={{ stroke: 'black' }}
                tickLine={{ stroke: 'black', strokeWidth: 2 }}
              />

              {/* Tooltip */}
              <Tooltip
                contentStyle={{
                  backgroundColor: '#EBF4FF',
                  border: '1px solid #3B74C1',
                  borderRadius: '8px',
                  fontSize: '12px',
                  color: '#2A4D88',
                }}
                cursor={{ fill: '#D6E4F7' }} // Light hover effect on the chart background
              />

              {/* Legend */}
              <Legend
                wrapperStyle={{
                  fontSize: '12px',
                  color: '#3B74C1',
                  marginBottom: '10px',
                }}
              />

              {/* Area with smooth curves */}
              <Area
                type="monotone"
                dataKey={
                  selectedgraphoption === 'Inventory Value'
                    ? 'totalInventoryValue'
                    : selectedgraphoption === 'Bills Generated'
                    ? 'totalBillsGenerated'
                    : selectedgraphoption === 'Transactions'
                    ? 'totalTransactions'
                    : 'totalSales'
                }
                stroke="#3B74C1" // Darker blue for the stroke
                fill="#A1C4E9" // Lighter blue for the fill
                fillOpacity={0.4}
                strokeWidth={3}
                dot={{ fill: '#3B74C1', r: 4 }} // Circular dots at data points
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="recentbills"></div>
      </div>
    </div>
  );
}

// <ResponsiveContainer width="100%" height="90%">
//             <AreaChart data={inventory}>
//               <XAxis dataKey="month" tick={{ fontSize: '10px' }} />
//               <YAxis tick={{ fontSize: '10px' }} />
//               <CartesianGrid strokeDasharray={'5 5'} />
//               <Legend />
//               <Tooltip />
//               <Area
//                 dataKey="totalInventoryValue"
//                 type={'bumpX'}
//                 stroke="rgb(0, 47, 255)"
//                 fill="rgba(0, 47, 255,0.5)"
//                 fillOpacity={0.4}
//                 strokeWidth={3}
//                 margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
//               />
//             </AreaChart>
//           </ResponsiveContainer>
