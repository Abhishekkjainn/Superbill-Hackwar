import Lottie from 'react-lottie-player';
import { useEffect, useState } from 'react';
export default function Bills() {
  const [animationData, setAnimationData] = useState(null);
  useEffect(() => {
    fetch('/ai.json')
      .then((response) => response.json())
      .then((data) => setAnimationData(data));
  }, []);
  const billanalysis = [
    {
      'Total Bills': 'The dataset contains a total of 30 bills.',
      'Payment Mode Distribution':
        'The payment methods used across all bills are evenly distributed. UPI, Cash, and Card each account for 33.33% of the total bills. There are 10 bills using UPI, 10 using Cash, and 10 using Card.',
      'Total Revenue':
        'The total revenue generated from the 30 bills is ₹66,850.',
      'Revenue by Payment Mode':
        'UPI payments contributed ₹22,800 (34.13%) to the total revenue. Cash payments contributed ₹16,250 (24.3%), and Card payments contributed ₹27,800 (41.57%).',
      'Average Transaction Value':
        'The average transaction value across all 30 bills is ₹2,228.33. The average values for each payment method are as follows: UPI ₹2,280, Cash ₹1,625, and Card ₹2,780.',
      'Total Items Sold':
        'A total of 150 items were sold across all the bills.',
      'Average Items Per Bill':
        'The average number of items per bill is 5. Some bills contained as few as 1 item, while others had up to 10 items.',
      'Maximum Items in a Single Bill':
        'The highest number of items sold in a single transaction is 10 items.',
      'Minimum Items in a Single Bill':
        'The lowest number of items in a single transaction is 1 item.',
      'Highest Transaction Amount':
        'The highest transaction amount recorded is ₹5,000, which was made through Card payment.',
      'Lowest Transaction Amount':
        'The lowest transaction amount recorded is ₹150, made through Cash payment.',
      'Most Expensive Transaction':
        'The most expensive transaction was ₹5,000, paid through Card.',
      'Least Expensive Transaction':
        'The least expensive transaction was ₹150, paid through Cash.',
      'Most Common Payment Method':
        'UPI was the most common payment method, used in 10 bills, making up 33.33% of the total transactions.',
      'Average Number of Items Per Bill':
        'On average, each bill contains 5 items. This varies from as few as 1 item to as many as 10 items per bill.',
      'Total Items by Payment Mode':
        'UPI: 54 items, Cash: 49 items, Card: 47 items.',
      'Overall Insights':
        'The data shows a balanced distribution across payment methods, with UPI, Cash, and Card each accounting for a third of the total transactions. Card payments have the highest average transaction value, while Cash payments tend to be lower. The number of items per bill ranges from 1 to 10, with an average of 5 items sold per bill.',
    },
  ];
  const mockBills = [
    {
      billId: '1012025',
      phoneNumber: '9876543210',
      items: 5,
      totalAmount: '₹1500',
      paymentMode: 'UPI',
      gstPaid: '₹270',
      date: '01-01-25',
    },
    {
      billId: '1012026',
      phoneNumber: '9876543211',
      items: 3,
      totalAmount: '₹850',
      paymentMode: 'Cash',
      gstPaid: '₹153',
      date: '02-01-25',
    },
    {
      billId: '1012027',
      phoneNumber: '9876543212',
      items: 7,
      totalAmount: '₹2100',
      paymentMode: 'Card',
      gstPaid: '₹378',
      date: '03-01-25',
    },
    {
      billId: '1012028',
      phoneNumber: '9876543213',
      items: 4,
      totalAmount: '₹1200',
      paymentMode: 'UPI',
      gstPaid: '₹216',
      date: '04-01-25',
    },
    {
      billId: '1012029',
      phoneNumber: '9876543214',
      items: 6,
      totalAmount: '₹1800',
      paymentMode: 'Cash',
      gstPaid: '₹324',
      date: '05-01-25',
    },
    {
      billId: '1012030',
      phoneNumber: '9876543215',
      items: 2,
      totalAmount: '₹500',
      paymentMode: 'Card',
      gstPaid: '₹90',
      date: '06-01-25',
    },
    {
      billId: '1012031',
      phoneNumber: '9876543216',
      items: 9,
      totalAmount: '₹3500',
      paymentMode: 'UPI',
      gstPaid: '₹630',
      date: '07-01-25',
    },
    {
      billId: '1012032',
      phoneNumber: '9876543217',
      items: 1,
      totalAmount: '₹200',
      paymentMode: 'Cash',
      gstPaid: '₹36',
      date: '08-01-25',
    },
    {
      billId: '1012033',
      phoneNumber: '9876543218',
      items: 8,
      totalAmount: '₹2700',
      paymentMode: 'Card',
      gstPaid: '₹486',
      date: '09-01-25',
    },
    {
      billId: '1012034',
      phoneNumber: '9876543219',
      items: 3,
      totalAmount: '₹750',
      paymentMode: 'UPI',
      gstPaid: '₹135',
      date: '10-01-25',
    },
    {
      billId: '1012035',
      phoneNumber: '9876543220',
      items: 4,
      totalAmount: '₹1400',
      paymentMode: 'Cash',
      gstPaid: '₹252',
      date: '11-01-25',
    },
    {
      billId: '1012036',
      phoneNumber: '9876543221',
      items: 5,
      totalAmount: '₹1600',
      paymentMode: 'Card',
      gstPaid: '₹288',
      date: '12-01-25',
    },
    {
      billId: '1012037',
      phoneNumber: '9876543222',
      items: 6,
      totalAmount: '₹1950',
      paymentMode: 'UPI',
      gstPaid: '₹351',
      date: '13-01-25',
    },
    {
      billId: '1012038',
      phoneNumber: '9876543223',
      items: 7,
      totalAmount: '₹2300',
      paymentMode: 'Cash',
      gstPaid: '₹414',
      date: '14-01-25',
    },
    {
      billId: '1012039',
      phoneNumber: '9876543224',
      items: 2,
      totalAmount: '₹600',
      paymentMode: 'Card',
      gstPaid: '₹108',
      date: '15-01-25',
    },
    {
      billId: '1012040',
      phoneNumber: '9876543225',
      items: 8,
      totalAmount: '₹3200',
      paymentMode: 'UPI',
      gstPaid: '₹576',
      date: '16-01-25',
    },
    {
      billId: '1012041',
      phoneNumber: '9876543226',
      items: 1,
      totalAmount: '₹150',
      paymentMode: 'Cash',
      gstPaid: '₹27',
      date: '17-01-25',
    },
    {
      billId: '1012042',
      phoneNumber: '9876543227',
      items: 9,
      totalAmount: '₹4000',
      paymentMode: 'Card',
      gstPaid: '₹720',
      date: '18-01-25',
    },
    {
      billId: '1012043',
      phoneNumber: '9876543228',
      items: 10,
      totalAmount: '₹5000',
      paymentMode: 'UPI',
      gstPaid: '₹900',
      date: '19-01-25',
    },
    {
      billId: '1012044',
      phoneNumber: '9876543229',
      items: 3,
      totalAmount: '₹950',
      paymentMode: 'Cash',
      gstPaid: '₹171',
      date: '20-01-25',
    },
    {
      billId: '1012045',
      phoneNumber: '9876543230',
      items: 5,
      totalAmount: '₹2200',
      paymentMode: 'Card',
      gstPaid: '₹396',
      date: '21-01-25',
    },
    {
      billId: '1012046',
      phoneNumber: '9876543231',
      items: 4,
      totalAmount: '₹1700',
      paymentMode: 'UPI',
      gstPaid: '₹306',
      date: '22-01-25',
    },
    {
      billId: '1012047',
      phoneNumber: '9876543232',
      items: 2,
      totalAmount: '₹550',
      paymentMode: 'Cash',
      gstPaid: '₹99',
      date: '23-01-25',
    },
    {
      billId: '1012048',
      phoneNumber: '9876543233',
      items: 6,
      totalAmount: '₹2800',
      paymentMode: 'Card',
      gstPaid: '₹504',
      date: '24-01-25',
    },
    {
      billId: '1012049',
      phoneNumber: '9876543234',
      items: 1,
      totalAmount: '₹300',
      paymentMode: 'UPI',
      gstPaid: '₹54',
      date: '25-01-25',
    },
    {
      billId: '1012050',
      phoneNumber: '9876543235',
      items: 7,
      totalAmount: '₹3100',
      paymentMode: 'Cash',
      gstPaid: '₹558',
      date: '26-01-25',
    },
    {
      billId: '1012051',
      phoneNumber: '9876543236',
      items: 8,
      totalAmount: '₹3500',
      paymentMode: 'Card',
      gstPaid: '₹630',
      date: '27-01-25',
    },
    {
      billId: '1012052',
      phoneNumber: '9876543237',
      items: 9,
      totalAmount: '₹4500',
      paymentMode: 'UPI',
      gstPaid: '₹810',
      date: '28-01-25',
    },
    {
      billId: '1012053',
      phoneNumber: '9876543238',
      items: 3,
      totalAmount: '₹800',
      paymentMode: 'Cash',
      gstPaid: '₹144',
      date: '29-01-25',
    },
    {
      billId: '1012054',
      phoneNumber: '9876543239',
      items: 4,
      totalAmount: '₹1300',
      paymentMode: 'Card',
      gstPaid: '₹234',
      date: '30-01-25',
    },
  ];

  const [searchQuery, setSearchQuery] = useState(''); // State for search query

  const filteredBills = mockBills.filter((bill) => {
    const totalAmountNumber = parseFloat(
      bill.totalAmount.replace('₹', '').replace(',', '')
    ); // Convert totalAmount to a number

    if (searchQuery.includes('<=')) {
      const amount = parseFloat(searchQuery.replace('<=', '').trim());
      return totalAmountNumber <= amount;
    } else if (searchQuery.includes('>=')) {
      const amount = parseFloat(searchQuery.replace('>=', '').trim());
      return totalAmountNumber >= amount;
    } else if (searchQuery.includes('<')) {
      const amount = parseFloat(searchQuery.replace('<', '').trim());
      return totalAmountNumber < amount;
    } else if (searchQuery.includes('>')) {
      const amount = parseFloat(searchQuery.replace('>', '').trim());
      return totalAmountNumber > amount;
    }

    return (
      bill.billId.includes(searchQuery) || // Search by bill ID
      bill.phoneNumber.includes(searchQuery) || // Search by phone number
      bill.paymentMode.toLowerCase().includes(searchQuery.toLowerCase()) || // Search by payment mode
      bill.totalAmount.includes(searchQuery) || // Search by total amount
      bill.date.includes(searchQuery) // Search by date
    );
  });

  return (
    <div className="billspage">
      <div className="sidebar">
        <div className="sideheading">
          <Lottie
            className="lottieanim"
            loop
            animationData={animationData}
            play
            style={{ width: 20, height: 20 }}
          />
          Super Analysis
        </div>
        <div className="sidecontent">
          {billanalysis.map((item, index) => (
            <div key={index} className="suggestionitem">
              {Object.entries(item).map(([key, value], idx) => (
                <div key={idx} className="suggestion">
                  <div className="suggestionheading">
                    <div className="smallcirclegreen"></div> {key}
                  </div>
                  <div className="suggestioncontent">{value}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="mainbar">
        <div className="topbarmainbill">
          <div className="headingtop">Your Bills</div>
          <div className="searchbar">
            <input
              type="search"
              placeholder="Search Price, Bill ID, Phone Number etc."
              className="searchinput"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)} // Update search query
            />
            <div className="searchbutton">
              <img src="/search.png" alt="Searchicon" className="searchicon" />
            </div>
          </div>
        </div>
        <div className="billmainview">
          {filteredBills.length > 0 ? (
            filteredBills.map((bill, index) => (
              <div className="billview" key={bill.billId}>
                <div className="topbill">
                  <div className="firstsectiontop">
                    <div className="billid">
                      {index + 1}. Bill Id - {bill.billId}
                    </div>
                    <div className="billdate">
                      <div className="smallcircle"></div> {bill.date}
                    </div>
                  </div>
                  <div className="secondsectiontop">
                    <img src="/edit.png" alt="" className="editbill" />
                    <img src="/delete.png" alt="" className="editbill" />
                    <img src="/more.png" alt="" className="editbill" />
                  </div>
                </div>
                <div className="bottombill">
                  <div className="firstpartbottom">
                    <div className="billid">Phn No. - {bill.phoneNumber}</div>
                    <div className="billdate">
                      <div className="smallcircle"></div> Total Items -{' '}
                      {bill.items}
                    </div>
                    <div className="billid">
                      Payment mode - {bill.paymentMode}
                    </div>
                  </div>
                  <div className="secondpartbottom">
                    <div className="billamount">
                      <div className="smallcircle"></div> Total Amount -{' '}
                      {bill.totalAmount}
                    </div>
                    <div className="billamount">
                      <div className="smallcircle"></div> GST - {bill.gstPaid}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>No bills found for your search.</div>
          )}
        </div>
      </div>
    </div>
  );
}

// You said:
// This is my Bill data I want you to do a good proper analysis on the bill data and give me really good and important metrics related to everything present in bill.
// I want you to be pretty accurate and generate proper results.

// can you provide this data to me in json format with all the headings as the key and all the texts as value

// I want the analysis to be thorough and cover all the aspects possible with the billing data

// I want the json to be in a single key and value pair no nested items

// there could be different key value pairs for different heading and subcontents but no nested items only one heading and its content
