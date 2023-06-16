import { useLoaderData } from "react-router-dom";
import "../assets/css/pokemonDetalle.css";

const PokemonDetails = () => {
  const { pokemonDetalle } = useLoaderData();

  console.log("llegando al componente=>", pokemonDetalle);

  const { name, sprites, height, base_experience } = pokemonDetalle;

  return (
    <>
      <div className="pokemon-contenedor__detalle">
        <p>{name}</p>
        <div className="pokemon-contenedor__img">
          <img src={sprites.front_default} alt={name} />
        </div>
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
