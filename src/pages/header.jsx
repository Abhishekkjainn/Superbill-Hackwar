export default function Header() {
  return (
    <div className="header">
      <div className="company">
        <img
          src="superbill-blue.png"
          alt="Superbill Logo"
          className="mainlogo"
        />
        <div className="logotag">SuperVendor</div>
      </div>
      <div className="links">
        <div className="link">
          <img src="/dashboard.png" alt="InventoryIcon" className="linkicon" />
          <div className="linktag">Dashboard</div>
        </div>
        <div className="link">
          <img src="/inventory.png" alt="InventoryIcon" className="linkicon" />
          <div className="linktag">Inventory</div>
        </div>
        <div className="link">
          <img src="/bills.png" alt="InventoryIcon" className="linkicon" />
          <div className="linktag">Bills</div>
        </div>
        <div className="link">
          <img
            src="/transaction.png"
            alt="InventoryIcon"
            className="linkicon"
          />
          <div className="linktag">Transactions</div>
        </div>
      </div>
      <div className="actions">
        <div className="buttons">
          <div className="primarybutton">
            <img src="/add.png" alt="Add An Item" className="buttonicon" />
            <div className="primarybuttontag">Add Item</div>
          </div>
          <div className="primarybutton">
            <img src="/bill.png" alt="Add An Item" className="buttonicon" />
            <div className="primarybuttontag">Generate Bill</div>
          </div>
        </div>
        <div className="profile">
          <img src="/accountlogo.png" alt="Account" className="profileimg" />
        </div>
        <img src="/menu.png" alt="Menu Icon" className="menuicon" />
      </div>
    </div>
  );
}
