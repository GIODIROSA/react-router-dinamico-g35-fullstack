import picachu from "../assets/img/picachu.png";
import "../assets/css/home.css";

const HomePokemon = () => {
  return (
    <>
      <div className="contenedor-img-pokemones">
        <img src={picachu} alt="picachu" />
      </div>
    </>
  );
};

export default HomePokemon;
