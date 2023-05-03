import { Link } from 'react-router-dom';
import '../style/NotFound.css';

const NotFound = () => {
  return (
    <section className="notfound_section">
      <div className="notfound_title">
        <h1>404</h1>
      </div>
      <div className="notfound_para">
        <p>La page que vous demandez n'existe pas.</p>
        <Link className='notfound_link' to='/'>Revenir à l'accueil</Link>
      </div>
    </section>
  );
};

export default NotFound;