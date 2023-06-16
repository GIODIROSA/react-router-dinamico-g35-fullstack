import { useLoaderData } from "react-router-dom";

const PokemonDetails = () => {
  const { pokemonDetalle } = useLoaderData();

  console.log("llegando al componente=>", pokemonDetalle);

  const { name, sprites } = pokemonDetalle;

  return (
    <>
      <p>{name}</p>
      <img src={sprites.front_default} alt={name} />
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
