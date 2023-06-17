import { useLoaderData, Link } from "react-router-dom";
import "../assets/css/pokemonDetalle.css";

const PokemonDetails = () => {
  const { pokemonDetalle } = useLoaderData();

  console.log("llegando al componente=>", pokemonDetalle);

  const { name, sprites, height, base_experience, types } = pokemonDetalle;
  console.log("prueba", types);

  return (
    <>
      <div className="pokemon-contenedor__detalle">
        {/* informacion de pokemon */}
        <div className="contenedor-informativo">
          <h2 className="nombre-pokemon">{name}</h2>
          <ul className="listado-habilidades list-group">
            <li className="list-group-item">
              <p className="none">
                <span className="espacio-categoria">Altura:</span>
                {height}"
              </p>
            </li>
            <li className="list-group-item">
              <p className="none">
                <span className="espacio-categoria">Defense:</span>
                {base_experience}
              </p>
            </li>
            <li className="list-group-item">
              <p className="none">
                <span className="espacio-categoria">Tipo:</span>
                {types.map((tipo) => (
                  <span key={tipo.type.name}>{tipo.type.name}</span>
                ))}
              </p>
            </li>
          </ul>
        </div>
        {/* imagen de pokemon */}
        <div className="pokemon-contenedor__img">
          <img src={sprites.front_default} alt={name} />
          <img src={sprites.back_default} alt={name} />
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <button className="btn btn-dark">
          <Link className="link-volver" to="/pokemon">Volver a seleccionar</Link>
        </button>
      </div>
    </>
  );
};

export default PokemonDetails;

//carga de pokemon en detalle

export const loaderPokemonDetalle = async ({ params }) => {
  const { name } = params;
  console.log("esta entrando el name=>", name);

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

  if (!res.ok)
    throw {
      status: res.status,
      statusText: "No encontrado",
    };

  const pokemonDetalle = await res.json();

  return { pokemonDetalle };
};
