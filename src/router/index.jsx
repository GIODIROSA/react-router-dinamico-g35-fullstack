import { createBrowserRouter } from "react-router-dom";

import HomePokemon from "../pages/HomePokemon";
import Pokemon from "../pages/Pokemon";
import PokemonDetails from "../pages/PokemonDetails";
import NotFound from "../pages/NotFound";

import LayoutPublic from "../layout/LayoutPublic";

import { loaderPokemon } from "../pages/Pokemon";
import { loaderPokemonDetalle } from "../pages/PokemonDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPublic />,
    errorElement: <NotFound />,
    children: [
      {
        errorElement: <NotFound />,
        children: [
          {
            path: "/",
            element: <HomePokemon />,
          },
          {
            path: "/Pokemon",
            element: <Pokemon />,
            loader: loaderPokemon,
          },
          {
            path: "/Pokemon/:name",
            element: <PokemonDetails />,
            loader: loaderPokemonDetalle,
          },
        ],
      },
    ],
  },
]);
