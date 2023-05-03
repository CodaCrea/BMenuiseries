import { Navigate, useParams } from 'react-router-dom';
import { Collapse, Infos, Slider } from '../config';
import DataList from '../data/DataList.json';
import '../style/Card.css';

const Card = () => {
  const { id } = useParams();
  const data = DataList.find(data => data.id === id);

  if (data === undefined) {
    return <Navigate to='*' />;
  }

  const { pictures, alternative, title, description, conclusion, reference } = data;

  return (
    <main className="card_container">
      <div className="card_infos">
        <Infos name={title} />
      </div>
      <Slider imageUrl={pictures} imageText={alternative} />
      <div className="card_container-collapse">
        <div className="card_bloc-collapse">
          <Collapse content={{ description: description.name, details: description.list }} />
        </div>
        <div className="card_bloc-collapse">
          <Collapse content={{ conclusion: conclusion.name, infos: conclusion.description }} />
        </div>
      </div>
      <div className="card_bloc-product_descriptions">
        <p>{reference.first}</p>
        <p>{reference.second}</p>
      </div>
    </main>
  );
};

export default Card;