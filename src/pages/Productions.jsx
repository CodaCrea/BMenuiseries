import { flagFrench, ProductDetails } from '../config';
import madeInFrench from '../assets/img/Made-in-France.jpg';
import '../style/Productions.css';
import data from '../data/DataList';
import React from 'react';


const Productions = () => {

  return (
    <main className="productions_container">
      <section className="productions_section">
        <div className="productions_bloc-title">
          <img className='made_in_french' src={madeInFrench} alt="Made in France" />
          <h1>Prestations</h1>
          <img className='made_in_french' src={madeInFrench} alt="Made in France" />
        </div>
        <div className="productions_bloc-para">
          <p>
            Pose de pergola bioclimatique. Pose de portail aluminium motorisé ou
            non. Terrasse bois. Aménagement extérieur.
            Nous avons le souci du travail bien fait, surtout lorsqu'il s'agit
            de ce type de services premium. Nous travaillons qu’avec des
            fournisseurs français <span className="flag"><img src={flagFrench}
              alt="Drapeau français" /></span> . Faites une pause, et laissez-nous nous occuper de tout à votre place.
          </p>
        </div>
      </section>

      <section className="productions_container-card">
        <div className="productions_card-title">
          <h2>Le soucis du détail</h2>
        </div>
        <div className="productions_bloc-productiondetails">
          {
            data.map((list) => {
              return (
                <ProductDetails key={list.id} data={list} />
              );
            })
          }
        </div>
      </section>
    </main >
  );
};

export default Productions;