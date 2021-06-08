import React from "react";
import PropTypes from "prop-types";
import "../stylesheets/Pokemon.scss";

const Pokemon = (props) => {
  const types = props.pokemon.types.map((type, index) => {
    return (
      <li key={index} className="item__type--li">
        {type}
      </li>
    );
  });
  return (
    <article className="item">
      <img src={props.pokemon.url} alt={props.pokemon.name} />
      <h4 className="item__name">{props.pokemon.name}</h4>
      <ul className="item__type">{types}</ul>
    </article>
  );
};

export default Pokemon;

Pokemon.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  pokemon: PropTypes.object,
};
