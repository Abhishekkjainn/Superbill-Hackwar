import { useState, useEffect } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

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
  // const mockBills = [
  //   {
  //     billId: '1012025',
  //     phoneNumber: '9876543210',
  //     items: 5,
  //     totalAmount: '₹1500',
  //     paymentMode: 'UPI',
  //   },
  //   {
  //     billId: '1012026',
  //     phoneNumber: '9876543211',
  //     items: 3,
  //     totalAmount: '₹850',
  //     paymentMode: 'Cash',
  //   },
  //   {
  //     billId: '1012027',
  //     phoneNumber: '9876543212',
  //     items: 7,
  //     totalAmount: '₹2100',
  //     paymentMode: 'Card',
  //   },
  //   {
  //     billId: '1012028',
  //     phoneNumber: '9876543213',
  //     items: 4,
  //     totalAmount: '₹1200',
  //     paymentMode: 'UPI',
  //   },
  //   {
  //     billId: '1012029',
  //     phoneNumber: '9876543214',
  //     items: 6,
  //     totalAmount: '₹1800',
  //     paymentMode: 'Cash',
  //   },
  //   {
  //     billId: '1012030',
  //     phoneNumber: '9876543215',
  //     items: 2,
  //     totalAmount: '₹500',
  //     paymentMode: 'Card',
  //   },
  //   {
  //     billId: '1012031',
  //     phoneNumber: '9876543216',
  //     items: 9,
  //     totalAmount: '₹3500',
  //     paymentMode: 'UPI',
  //   },
  //   {
  //     billId: '1012032',
  //     phoneNumber: '9876543217',
  //     items: 1,
  //     totalAmount: '₹200',
  //     paymentMode: 'Cash',
  //   },
  //   {
  //     billId: '1012033',
  //     phoneNumber: '9876543218',
  //     items: 8,
  //     totalAmount: '₹2700',
  //     paymentMode: 'Card',
  //   },
  //   {
  //     billId: '1012034',
  //     phoneNumber: '9876543219',
  //     items: 3,
  //     totalAmount: '₹750',
  //     paymentMode: 'UPI',
  //   },
  //   {
  //     billId: '1012035',
  //     phoneNumber: '9876543220',
  //     items: 4,
  //     totalAmount: '₹1400',
  //     paymentMode: 'Cash',
  //   },
  //   {
  //     billId: '1012036',
  //     phoneNumber: '9876543221',
  //     items: 5,
  //     totalAmount: '₹1600',
  //     paymentMode: 'Card',
  //   },
  //   {
  //     billId: '1012037',
  //     phoneNumber: '9876543222',
  //     items: 6,
  //     totalAmount: '₹1950',
  //     paymentMode: 'UPI',
  //   },
  //   {
  //     billId: '1012038',
  //     phoneNumber: '9876543223',
  //     items: 7,
  //     totalAmount: '₹2300',
  //     paymentMode: 'Cash',
  //   },
  //   {
  //     billId: '1012039',
  //     phoneNumber: '9876543224',
  //     items: 2,
  //     totalAmount: '₹600',
  //     paymentMode: 'Card',
  //   },
  //   {
  //     billId: '1012040',
  //     phoneNumber: '9876543225',
  //     items: 8,
  //     totalAmount: '₹3200',
  //     paymentMode: 'UPI',
  //   },
  //   {
  //     billId: '1012041',
  //     phoneNumber: '9876543226',
  //     items: 1,
  //     totalAmount: '₹150',
  //     paymentMode: 'Cash',
  //   },
  //   {
  //     billId: '1012042',
  //     phoneNumber: '9876543227',
  //     items: 9,
  //     totalAmount: '₹4000',
  //     paymentMode: 'Card',
  //   },
  //   {
  //     billId: '1012043',
  //     phoneNumber: '9876543228',
  //     items: 10,
  //     totalAmount: '₹5000',
  //     paymentMode: 'UPI',
  //   },
  //   {
  //     billId: '1012044',
  //     phoneNumber: '9876543229',
  //     items: 3,
  //     totalAmount: '₹950',
  //     paymentMode: 'Cash',
  //   },
  //   {
  //     billId: '1012045',
  //     phoneNumber: '9876543230',
  //     items: 5,
  //     totalAmount: '₹2200',
  //     paymentMode: 'Card',
  //   },
  //   {
  //     billId: '1012046',
  //     phoneNumber: '9876543231',
  //     items: 4,
  //     totalAmount: '₹1700',
  //     paymentMode: 'UPI',
  //   },
  //   {
  //     billId: '1012047',
  //     phoneNumber: '9876543232',
  //     items: 2,
  //     totalAmount: '₹550',
  //     paymentMode: 'Cash',
  //   },
  //   {
  //     billId: '1012048',
  //     phoneNumber: '9876543233',
  //     items: 6,
  //     totalAmount: '₹2800',
  //     paymentMode: 'Card',
  //   },
  //   {
  //     billId: '1012049',
  //     phoneNumber: '9876543234',
  //     items: 1,
  //     totalAmount: '₹300',
  //     paymentMode: 'UPI',
  //   },
  //   {
  //     billId: '1012050',
  //     phoneNumber: '9876543235',
  //     items: 7,
  //     totalAmount: '₹3100',
  //     paymentMode: 'Cash',
  //   },
  //   {
  //     billId: '1012051',
  //     phoneNumber: '9876543236',
  //     items: 8,
  //     totalAmount: '₹3500',
  //     paymentMode: 'Card',
  //   },
  //   {
  //     billId: '1012052',
  //     phoneNumber: '9876543237',
  //     items: 9,
  //     totalAmount: '₹4500',
  //     paymentMode: 'UPI',
  //   },
  //   {
  //     billId: '1012053',
  //     phoneNumber: '9876543238',
  //     items: 3,
  //     totalAmount: '₹800',
  //     paymentMode: 'Cash',
  //   },
  //   {
  //     billId: '1012054',
  //     phoneNumber: '9876543239',
  //     items: 4,
  //     totalAmount: '₹1300',
  //     paymentMode: 'Card',
  //   },
  // ];
  const [searchQuery, setSearchQuery] = useState('');
  const [mockBills, setMockBills] = useState([]); // State to store fetched bills
  const [filteredBills, setFilteredBills] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Function to fetch bills
    const fetchBills = async () => {
      try {
        const vendoremail = localStorage.getItem('vendoremail');
        const response = await fetch(
          'https://superbill-api.vercel.app/fetchbills/automatevellore@gmail.com'
        ); // Replace with the actual vendor email
        const data = await response.json();

        if (data.success) {
          setMockBills(data.bills);
          setFilteredBills(data.bills); // Set initial filtered bills
        } else {
          console.error('Error:', data.message);
        }
      } catch (error) {
        console.error('Error fetching bills:', error);
      }
    };

    // Call the fetch function
    fetchBills();
  }, []);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = mockBills.filter(
      (bill) =>
        bill.billId.toLowerCase().includes(query) ||
        bill.phoneNumber.includes(query) ||
        bill.items.toString().includes(query) ||
        bill.totalAmount.toLowerCase().includes(query) ||
        bill.paymentMode.toLowerCase().includes(query)
    );
    setFilteredBills(filtered);
  };

  const inventorydata = [
    { month: 'January', totalInventoryValue: 95000 },
    { month: 'February', totalInventoryValue: 75000 },
    { month: 'March', totalInventoryValue: 110000 },
    { month: 'April', totalInventoryValue: 85000 },
    { month: 'May', totalInventoryValue: 130000 },
    { month: 'June', totalInventoryValue: 100000 },
    { month: 'July', totalInventoryValue: 160000 },
    { month: 'August', totalInventoryValue: 70000 },
    { month: 'September', totalInventoryValue: 155000 },
    { month: 'October', totalInventoryValue: 115000 },
    { month: 'November', totalInventoryValue: 190000 },
    { month: 'December', totalInventoryValue: 175000 },
  ];

  const billdata = [
    { month: 'January', totalBillsGenerated: 140000 },
    { month: 'February', totalBillsGenerated: 80000 },
    { month: 'March', totalBillsGenerated: 115000 },
    { month: 'April', totalBillsGenerated: 95000 },
    { month: 'May', totalBillsGenerated: 145000 },
    { month: 'June', totalBillsGenerated: 125000 },
    { month: 'July', totalBillsGenerated: 190000 },
    { month: 'August', totalBillsGenerated: 75000 },
    { month: 'September', totalBillsGenerated: 140000 },
    { month: 'October', totalBillsGenerated: 100000 },
    { month: 'November', totalBillsGenerated: 200000 },
    { month: 'December', totalBillsGenerated: 210000 },
  ];

  const transactiondata = [
    { month: 'January', totalTransactions: 120000 },
    { month: 'February', totalTransactions: 80000 },
    { month: 'March', totalTransactions: 135000 },
    { month: 'April', totalTransactions: 110000 },
    { month: 'May', totalTransactions: 160000 },
    { month: 'June', totalTransactions: 95000 },
    { month: 'July', totalTransactions: 180000 },
    { month: 'August', totalTransactions: 70000 },
    { month: 'September', totalTransactions: 130000 },
    { month: 'October', totalTransactions: 165000 },
    { month: 'November', totalTransactions: 150000 },
    { month: 'December', totalTransactions: 195000 },
  ];

  const salesdata = [
    { month: 'January', totalSales: 110000 },
    { month: 'February', totalSales: 75000 },
    { month: 'March', totalSales: 120000 },
    { month: 'April', totalSales: 100000 },
    { month: 'May', totalSales: 170000 },
    { month: 'June', totalSales: 95000 },
    { month: 'July', totalSales: 200000 },
    { month: 'August', totalSales: 85000 },
    { month: 'September', totalSales: 140000 },
    { month: 'October', totalSales: 115000 },
    { month: 'November', totalSales: 190000 },
    { month: 'December', totalSales: 210000 },
  ];

  const profitdata = [
    { month: 'January', totalProfit: 5000 },
    { month: 'February', totalProfit: 3000 },
    { month: 'March', totalProfit: 7000 },
    { month: 'April', totalProfit: 4000 },
    { month: 'May', totalProfit: 15000 },
    { month: 'June', totalProfit: 2000 },
    { month: 'July', totalProfit: 25000 },
    { month: 'August', totalProfit: -5000 },
    { month: 'September', totalProfit: 8000 },
    { month: 'October', totalProfit: 6000 },
    { month: 'November', totalProfit: 30000 },
    { month: 'December', totalProfit: 20000 },
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

  const billdateoptions = [
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
    'Sales Value',
    'Profit Value',
  ];
  const defaultOption = options[0];
  const defaultGraphOption = graphoptions[0];
  const defaultBillOption = billdateoptions[0];
  const [selectedOption, setSelectedOption] = useState(defaultOption);
  const [selectedgraphoption, setGraphOption] = useState(defaultGraphOption);
  const [selectedbillDate, setBillDate] = useState(defaultBillOption);

  const handleSelect = (option) => {
    setSelectedOption(option.value);
    console.log('Selected:', option.value); // For debugging
  };
  const handlegraphSelect = (option) => {
    setGraphOption(option.value);
    console.log('Selected:', option.value); // For debugging
  };

  const handlebillSelect = (option) => {
    setBillDate(option.value);
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
                <div className="variablehead">Total {selectedgraphoption}</div>
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
          <ResponsiveContainer width="100%" height="75%" className="graphgraph">
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
                  : selectedgraphoption === 'Profit Value'
                  ? profitdata
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
                    : selectedgraphoption === 'Profit Value'
                    ? 'totalProfit'
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
        <div className="recentbills">
          <div className="graphinfo2">
            <div className="graphheads">
              <div className="graphicon">
                <img
                  src="/billicon.png"
                  alt="Graph Icon"
                  a
                  className="graphiconimg"
                />
              </div>
              <div className="graphheading">
                <div className="fixedhead">Recent Bills.</div>
                <div className="variablehead">Bills Generated Recently</div>
              </div>
            </div>
            <div className="selectors">
              <Dropdown
                options={billdateoptions}
                onChange={handlebillSelect}
                value={selectedbillDate}
                placeholder="Select an option"
                className="filters"
              />
            </div>
          </div>
          <div className="search-container">
            <input
              type="text"
              placeholder="Search by Bill ID, Phone, Items, or Payment Mode"
              value={searchQuery}
              onChange={handleSearch}
              className="search-input"
            />
          </div>
          <div className="bills">
            <div className="bill">
              <table>
                <thead>
                  <tr>
                    <th>Bill ID</th>
                    <th>Customer Phone Number</th>
                    <th>Items</th>
                    <th>Total Bill Amount</th>
                    <th>Payment Mode</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredBills.map((bill, index) => (
                    <tr key={index}>
                      <td>{bill.billId}</td>
                      <td>{bill.phoneNumber}</td>
                      <td>{bill.items} items</td>
                      <td>{bill.totalAmount}</td>
                      <td>{bill.paymentMode}</td>
                      <td>
                        <Link to={'/bills'} className="view-details">
                          View Details
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// This is my Bill data I want you to do a good proper analysis on the bill data and give me really good and important metrics related to everything present in bill.
// I want you to be pretty accurate and generate proper results.

// can you provide this data to me in json format with all the headings as the key and all the texts as value

// I want the analysis to be thorough and cover all the aspects possible with the billing data

// {
//   "1. Total Bills and Payment Modes": "The dataset contains 30 bills, each representing a unique transaction. Payment modes are distributed across three categories: UPI: 10 transactions (33.33%), Cash: 10 transactions (33.33%), Card: 10 transactions (33.33%). This reflects an even split in the preference for payment modes among customers.",
//   "2. Total Revenue": "The cumulative revenue generated from all bills is ₹66,850. Breakdown of revenue by payment mode: UPI: ₹22,800 (34.13% of total revenue), Cash: ₹16,250 (24.3% of total revenue), Card: ₹27,800 (41.57% of total revenue). Card transactions contribute the highest revenue, indicating higher-value transactions tend to occur via cards.",
//   "3. Average Transaction Value": "The average bill amount across all transactions is ₹2,228.33. By payment mode: UPI: ₹2,280 per transaction, Cash: ₹1,625 per transaction, Card: ₹2,780 per transaction. Customers paying via Card have the highest average spend, while Cash payments are associated with smaller transactions.",
//   "4. Item Metrics": "A total of 150 items were purchased across all transactions. The average number of items per bill is 5. The highest number of items in a single bill is 10, with a corresponding total of ₹5,000 (Bill ID: 1012043, paid via UPI). The lowest number of items in a bill is 1, observed in 4 bills, with amounts ranging from ₹150 to ₹300.",
//   "5. Highest and Lowest Transactions": "Highest transaction: ₹5,000 (Bill ID: 1012043, 10 items, UPI). Lowest transaction: ₹150 (Bill ID: 1012041, 1 item, Cash).",
//   "6. Customer Insights": "The most frequent purchase size is between 4-6 items per bill, observed in 14 bills (46.67% of transactions). Customers purchasing 7+ items contribute significantly to the revenue, making up 36.66% of transactions and generating ₹28,600 (42.8% of the total revenue).",
//   "7. UPI vs. Non-UPI Transactions": "UPI transactions account for 34.13% of revenue but are associated with both the highest-value bill and several high-value transactions. Non-UPI transactions (Cash + Card) contribute the remaining 65.87% of revenue, with Card being the dominant contributor.",
//   "8. Revenue Distribution": "Low-value bills (₹0-₹1,000): 11 bills (36.67%), contributing ₹5,950 (8.9% of total revenue). Mid-value bills (₹1,001-₹3,000): 14 bills (46.67%), contributing ₹31,700 (47.45% of total revenue). High-value bills (₹3,001+): 5 bills (16.67%), contributing ₹29,200 (43.65% of total revenue). This indicates a smaller number of high-value transactions drive a significant portion of revenue.",
//   "9. Customer Phone Numbers": "Each bill is tied to a unique phone number, suggesting no repeat customers within this dataset. This could indicate a diverse customer base or the need for strategies to encourage repeat business.",
//   "10. Potential Insights for Decision Making": "1. Encourage Card Payments: Given the higher revenue from Card transactions, promoting this mode (e.g., discounts or offers) may drive higher-value sales. 2. Customer Retention: Loyalty programs targeting customers who make high-value transactions or purchase a higher number of items could be beneficial. 3. UPI Growth Opportunities: Despite accounting for only one-third of the transactions, UPI is associated with the largest transaction. Incentivizing UPI use might increase overall revenue. 4. Bundle Offers for Mid-Sized Purchases: As most customers purchase 4-6 items, introducing bundle offers or discounts in this range could increase revenue.",
//   "Summary": "The provided data demonstrates balanced payment preferences, a notable reliance on high-value transactions, and opportunities to target mid-range buyers and high-value spenders. Leveraging these insights with strategic actions can optimize both revenue and customer satisfaction."
// }
