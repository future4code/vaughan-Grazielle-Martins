import React, { useEffect, useState } from "react";
import axios from "axios";

const PokeCard = (props) => {

    const [pokemon, setPokemon] = useState({});
   const [nome, setNome] = useState("")

    useEffect(() =>{
        pegaPokemon(props.pokemon);
    }, [props.pokemon]);

   
    
        
    const pegaPokemon = (pokeName) => {
            axios
              .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
              .then(response => {
                setPokemon(response.data);
                setNome(response.data.name)
              })
              .catch(err => {
                console.log(err);
              });
          };
   
    

    return (
        <div>
        <p>{pokemon.name}</p>
        <p>{pokemon.weight} Kg</p>
        {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
        {pokemon.sprites && (
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        )}
      </div>
    )
  }

  export default PokeCard;