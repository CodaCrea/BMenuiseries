import { Link } from "react-router-dom";
import '../style/ProductDetails.css';

const ProductDetails = ({ data }) => {
  const { id, cover, alternative, title } = data;

  return (
    <article className="productdetails_container">
      <Link aria-label="Redirection vers la selection" to={`/prestations/${id}`}>
        <div className="productdetails_bloc-title">
          <h3>{title}</h3>
        </div>
        <figure className="productdetails_bloc-img">
          <img src={cover} alt={alternative} />
        </figure>
      </Link>
    </article>
  );
};

export default ProductDetails;