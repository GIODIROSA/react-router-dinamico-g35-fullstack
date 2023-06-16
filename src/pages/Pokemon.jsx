import { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const Pokemon = () => {
  const { dataPokemon } = useLoaderData();
  const [selectPokemon, setSelectPokemon] = useState([]);

  const navigation = useNavigate();

  //console.log("guardado en state =>", selectPokemon);

  const handleClick = () => {
    navigation(`/pokemon/${selectPokemon}`);
  };

  const handleChangePokemon = (e) => {
    setSelectPokemon(e.target.value);
  };
  return (
    <>
      {dataPokemon && (
        <select className="form-control my-2" onChange={handleChangePokemon}>
          <option value="">Selecciona un Pokemon</option>
          {dataPokemon.results.map((pokemon) => (
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>
          ))}
        </select>
      )}
      {selectPokemon && (
        <div className="d-flex justify-content-center">
          <button
            className="btn btn-dark my-2"
            type="button"
            onClick={handleClick}
          >
            ver detalles
          </button>
        </div>
      )}
    </>
  );
};

export default Pokemon;

//carga inicial de pokemones.

export const loaderPokemon = async () => {
  const baseUrl = "https://pokeapi.co/api/v2/pokemon/";

  const res = await fetch(baseUrl);
  const dataPokemon = await res.json();

  return { dataPokemon };
};
