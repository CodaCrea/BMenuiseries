import { terraceProduction } from '../config';
import '../style/HomeDescription.css';

const HomeDescription = () => {
  return (
    <section className='homedesc_section'>
      <div className="homedesc_bloc-title">
        <h3>Qualité 100% garantie</h3>
      </div>
      <div className="homedesc_bloc-para">
        <p>
          Chez B&Menuiseries, nous savons qu'un service optimal ne s'obtient
          qu'avec un travail attentif et minutieux. Nous sommes là pour vous
          fournir les solutions les plus adaptées à vos besoins et vous
          proposer une estimation et des conseils professionnels.
        </p>
      </div>
      <div className="homedesc_bloc-img">
        <img src={terraceProduction}
          alt="Portail" />
      </div>
    </section>
  );
};

export default HomeDescription;