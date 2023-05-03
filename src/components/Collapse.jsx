import { useState } from 'react';
import { arrowWhite } from '../config';
import '../style/Collapse.css';

const Collapse = ({ content }) => {
  const { description, conclusion, details, infos } = content;
  const [open, setOpen] = useState(false);

  const toggle = () => {
    const collDesc = document.getElementById('openInfos');
    const collconcl = document.getElementById('openList');
    const collList = document.querySelectorAll('.collapse_bloc-description-list');

    setOpen(!open);

    if (conclusion) {
      collDesc.classList.toggle('collapse_bloc-description-open');
      collDesc.classList.toggle('collapse_bloc-description-close');
    } else {
      collconcl.classList.toggle('collapse_bloc-description-open');
      collconcl.classList.toggle('collapse_bloc-description-close');
      collList.forEach(list => {
        list.classList.toggle('collapse_bloc-description-list-open');
      });
    }
  };

  return (
    <section className="collapse_container">
      <div onClick={toggle} className={open ? "collapse_bloc-title-open" : "collapse_bloc-title-close"}>
        <img className={open ? 'arrow_white-left_open' : 'arrow_white-left_close'} src={arrowWhite} alt="Flèche blanche gauche" />
        <img className={open ? 'arrow_white-right_open' : 'arrow_white-right_close'} src={arrowWhite} alt="Flèche blanche droite" />
        {
          description ?
            <h2>{description}</h2>
            :
            <h2>{conclusion}</h2>
        }
      </div>
      {
        details ?
          <ol id='openList' className='collapse_bloc-description-close'>
            {
              details.map((data, index) => {
                return <li className='collapse_bloc-description-list' key={index}>{data}</li>;
              })
            }
          </ol>
          :
          <p id='openInfos' className='collapse_bloc-description-close'>{infos}</p>
      }
    </section >
  );
};

export default Collapse;