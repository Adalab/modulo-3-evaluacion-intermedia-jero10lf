import React from "react";
import Pokemon from "./Pokemon";
import "../stylesheets/PokeList.scss";

const PokeList = (props) => {
  const pokemonsItems = props.getPokemons.map((pokemonItem) => {
    return (
      <li key={pokemonItem.id}>
        <Pokemon pokemon={pokemonItem} />
      </li>
    );
  });
  return <ul className="list">{pokemonsItems}</ul>;
};

export default PokeList;
