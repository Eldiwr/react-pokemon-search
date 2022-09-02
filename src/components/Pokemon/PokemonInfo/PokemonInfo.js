import { Component } from "react";
import { PokemonError } from "../PokemonError/PokemonError";
import { PokemonView } from "../PokemonView/PokemonView";

export class PokemonInfo extends Component {

    state = {
        pokemon: null,
        error: null,
        status: 'idle'
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.pokemonName !== this.props.pokemonName) {

            this.setState({ status: 'pending'});
           
            fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.pokemonName}`)
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    }

                    return Promise.reject(
                        new Error(`Нет покемона с именем ${this.props.pokemonName}`),
                    );
                })
                .then(pokemon => this.setState({ pokemon, status: 'resolved' }))
                .catch(error => this.setState({ error, status: 'rejected' }));
        };
    };

    render() {
        const { pokemon, status, error } = this.state;

        if (status === 'idle') {
            return <h1>Призовите покемона (^_^)</h1>
        };

        if (status === 'pending') {
            return <span>Загружаем...</span>
        };

        if (status === 'rejected') {
            return <PokemonError message={error.message}/>
        };

        if (status === 'resolved') {
            return <PokemonView pokemon={pokemon}/>          
        };
    };
};