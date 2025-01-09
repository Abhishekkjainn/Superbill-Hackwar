import { useState } from 'react';
export default function Header() {
  const [ind, setInd] = useState(0);

  const handleNavClick = (index) => {
    setInd(index);
  };
  return (
    <div className="header">
      {/* Company Branding */}
      <div className="company">
        <img
          src="./superbill-blue.png"
          alt="Superbill Logo"
          className="logoimg"
        />
        SuperVendor
      </div>

      {/* Navigation Links */}
      <div className="links">
        {[
          { name: 'Dashboard', icon: 'dashboard' },
          { name: 'Inventory', icon: 'inventory' },
          { name: 'Billings', icon: 'bills' },
        ].map((item, index) => (
          <div
            key={index}
            className={`link ${ind === index ? 'linkactive' : ''}`}
            onClick={() => handleNavClick(index)}
          >
            <img
              src={
                ind === index ? `/${item.icon}-white.png` : `/${item.icon}.png`
              }
              alt={`${item.name} Icon`}
              className="linktagimg"
            />
            <div className={`linktag ${ind === index ? 'linktagactive' : ''}`}>
              {item.name}
            </div>
          </div>
        ))}
      </div>

      {/* Account Section Placeholder */}
      <div className="accounts">
        <div className="account">
          <img
            src="https://cdn.brandfetch.io/zudio.com/fallback/lettermark/theme/dark/h/256/w/256/icon?c=1bfwsmEH20zzEfSNTed"
            alt="Company Logo"
            className="accountsectionimage"
          />
        </div>
      </div>
    </div>
  );
}
