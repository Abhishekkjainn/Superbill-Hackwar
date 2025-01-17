export default function Page1() {
  var totalitems = 150;
  var totalSoldtoday = 60;
  var GST = '11,600';
  return (
    <div className="page1">
      <div className="filter"></div>
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
