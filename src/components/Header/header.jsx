import "./Header.css";
import Rasm from "../../assets/images/trafalgar-logo.svg";

function Header(){
  return (
     <header className="header">
       <img src={Rasm} alt="trafalgar logo"  className="header__link"width="160" height="41" />
       <ul className="list">
         <li className="list-item"><a className="header__link" href="/">Home</a></li>
         <li className="list-item"><a className="header__link" href="/">Find a doctor</a></li>
         <li className="list-item"><a className="header__link" href="/">Apps</a></li>
         <li className="list-item"><a className="header__link" href="/">Testimonial</a></li>
         <li className="list-item"><a className="header__link" href="/">About us</a></li>
       </ul>
     </header>
  )
}

export default Header; 