import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemons, setPokemons] = useState([])
  const [displayPokes, setDisplayPokes] = useState(pokemons)

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
      .then((r) => r.json())
      .then((data) => {
        setPokemons(data)
        setDisplayPokes(data)
      });   
  }, []);

  const handleSearchChange = (searchName) => {
    const displayPokes = pokemons.filter((pokemon) => {
      return pokemon.name.toLowerCase().includes(searchName.toLowerCase())
    })
    setDisplayPokes(displayPokes)
  }

  const updateDisplayPokes = (newPoke) => {
    fetch("http://localhost:3001/pokemon", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPoke),
  })
    .then((r) => r.json())
    .then((newPoke)=>setDisplayPokes([...displayPokes, newPoke]))
   console.log('update', displayPokes)
  }

  console.log('render', displayPokes)

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onFormSubmit={updateDisplayPokes}/>
      <br />
      <Search onSearchChange={handleSearchChange}/>
      <br />
      <PokemonCollection pokemons={displayPokes}/>
    </Container>
  );
}

export default PokemonPage;
