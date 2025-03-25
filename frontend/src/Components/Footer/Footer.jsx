
import './Footer.css'; 

const Footer = () => {
  return (
    <div className="footer-container">
      <p>&copy; {new Date().getFullYear()} Reactauction</p>
    </div>
  );
};

export default Footer;