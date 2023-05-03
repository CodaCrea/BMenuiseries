import { pergolaReception } from "../config";
import '../style/HomeDetails.css';

const HomeDetails = () => {
  return (
    <section className="homedetails_section">
      <div className="homedetails_bloc-title-img">
        <div className="homedetails_bloc-title">
          <h1>Découvrez B&Menuiseries</h1>
        </div>
        <div className="homedetails_bloc-img">
          <img src={pergolaReception}
            alt="Pergola" />
        </div>
      </div>
      <div className="homedetails_bloc-qualitytitle-qualitypara">
        <h2>Qui sommes-nous ?</h2>
        <div className="homedetails_bloc-para">
          <p>
            Qualité et professionnalisme sont les maîtres mots de notre Service de
            menuiserie. Nous améliorons régulièrement nos services, nous restons
            informés des évolutions techniques du métier, et nous mettons notre
            savoir faire à votre disposition.Notre objectif est le même : offrir
            un service irréprochable et veiller à ne jamais trahir la confiance
            que nos clients nous ont accordée.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeDetails;