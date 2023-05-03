import { Link } from "react-router-dom";
import { facebookGold, instagramFooter } from "../config";
import '../style/Footer.css';

const Footer = () => {
  return (
    <footer className="footer_container">
      <div className="footer_bloc-phone-address">
        <div className="footer_bloc-phone">
          <h2>Téléphone :</h2>
          <p>06 33 45 10 60</p>
        </div>
        <div className="facebook-block-footer">
          <Link aria-label="Lien facebook" to="https://www.facebook.com/profile.php?id=100067888141176"
            target="_blank"
            className="facebook">
            <img src={facebookGold}
              alt="Facebook"
              className="facebook" /></Link>
          <Link aria-label="Lien instagram" to="https://www.instagram.com/betmenuiseries"
            target="_blank"
            className="facebook">
            <img src={instagramFooter}
              alt="Instagram"
              className="facebook" /></Link>
        </div>
        <div className="footer_bloc-address">
          <h2>Adresse :</h2>
          <p>21 Bd Maréchal Joffre</p>
          <p>38000 Grenoble France</p>
        </div>
      </div>
      <div className="footer_bloc-copyright">
        <p>-- © 2023 par B&Menuiseries. Tous droits réservés --</p>
      </div>
    </footer>
  );
};

export default Footer;