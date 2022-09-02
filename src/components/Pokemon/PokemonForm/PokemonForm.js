import { Component } from "react";
export class PokemonForm extends Component {

    state = {
        pokemonName: '',
    }

    handleNameChange = (event) => {
        this.setState({
            pokemonName: event.currentTarget.value.toLowerCase()});
    };

    handleSubmit = (event) => {
        event.preventDefault();

        if (this.state.pokemonName.trim() === '') {
            alert("Введите имя покемона");
            return;
        };

        this.props.onSubmit(this.state.pokemonName);
        this.setState({ pokemonName: '' })
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="pokemonName"
                    value={this.state.pokemonName}
                    onChange={this.handleNameChange}
                />
                <button type="submit">Найти</button>
            </form>
        );
    };
};