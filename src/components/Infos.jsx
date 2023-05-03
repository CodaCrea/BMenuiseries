import '../style/Infos.css';

const Infos = ({ name }) => {
  return (
    <section className="infos_container">
      <h1>{name}</h1>
    </section>
  );
};

export default Infos;