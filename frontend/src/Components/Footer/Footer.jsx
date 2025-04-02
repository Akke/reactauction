
import './Footer.css'; 

const Footer = () => {
  return (
    <div className="footer-container">
      <p>&copy; {new Date().getFullYear()} <a href="https://github.com/Akke/reactauction" target="_blank">ReactAuction</a></p>
    </div>
  );
};

export default Footer;