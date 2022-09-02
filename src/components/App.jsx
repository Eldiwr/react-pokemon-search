import { Component } from "react";
import { PokemonForm } from "./Pokemon/PokemonForm/PokemonForm";
import { PokemonInfo } from "./Pokemon/PokemonInfo/PokemonInfo";




export class App extends Component {

  state = {
    pokemonName: '',
    pokemon: null,
    loading: false,
  };

  handleFormSubmit = (pokemonName) => {
    this.setState({ pokemonName: pokemonName})
  };

  render() {
    return (
      <div style={{
        marginTop: 40,
        marginLeft: 100,
      }}>
        <PokemonForm onSubmit={this.handleFormSubmit} />
        <PokemonInfo pokemonName={this.state.pokemonName}/>
      </div>
    );
  };
};

