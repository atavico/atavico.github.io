import '../styles/styles.css';

const MenuIcon = ({ isOpen }: { isOpen: boolean }) => {
    return (
      <div className={`menu-icon ${isOpen ? 'open' : ''}`}>
        <span className="line line1"></span>
        <span className="line line2"></span>
      </div>
    );
  };
  
  export default MenuIcon;