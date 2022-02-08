import React, { useEffect, useState } from "react";
import "./PokeCard/styled.css";
import axios from "axios";
import PokeCard from "./PokeCard/PokeCard";


export default function App () {

  const [pokeList, setPokeList] = useState([]);
  const [pokeName, setPokeName] = useState("");




  const changePokeName = event => {
    setPokeName(event.target.value );
  };

  const pegarPersonagens = () => {

    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then(response => {
        setPokeList(response.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    pegarPersonagens(pokeName);
  }, [pokeName])

  return (
    <div>
      <select  onChange={changePokeName}>
        <option value={""}>Nenhum</option>
        {pokeList.map((pokemon =>{
          return (
            <option key={pokemon.name} value={pokemon.name}>{pokemon.name}</option>
          )
        }))}
      </select>
     {pokeName && <PokeCard  pokemon={pokeName} />}
    </div>
  )
}
