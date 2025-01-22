import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <div className="header">
      <Link to={'/'} className="company">
        <img
          src="superbill-blue.png"
          alt="Superbill Logo"
          className="mainlogo"
        />
        <div className="logotag">SuperVendor</div>
      </Link>
      <div className="links">
        <Link to={'/'} className="link">
          <img src="/dashboard.png" alt="InventoryIcon" className="linkicon" />
          <div className="linktag">Dashboard</div>
        </Link>
        <Link to={'/inventory'} className="link">
          <img src="/inventory.png" alt="InventoryIcon" className="linkicon" />
          <div className="linktag">Inventory</div>
        </Link>
        <Link to={'/bills'} className="link">
          <img src="/bills.png" alt="InventoryIcon" className="linkicon" />
          <div className="linktag">Bills</div>
        </Link>
        <Link to={'/AISuggestions'} className="link">
          <img src="/star.png" alt="InventoryIcon" className="linkicon" />
          <div className="linktag">AI Suggestions</div>
        </Link>
      </div>
      <div className="actions">
        <div className="buttons">
          <Link to={'/AddInventory'} className="primarybutton">
            <img src="/add.png" alt="Add An Item" className="buttonicon" />
            <div className="primarybuttontag">Add Item</div>
          </Link>
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
