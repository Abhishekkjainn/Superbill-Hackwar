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
  return (
    <div className="billspage">
      <div className="sidebar">
        <div className="sideheading">
          {' '}
          <Lottie
            className="lottieanim"
            loop
            animationData={animationData}
            play
            style={{ width: 20, height: 20 }}
          />{' '}
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
      <div className="mainbar"></div>
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
