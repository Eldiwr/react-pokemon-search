import errorCat from '../PokemonError/nutychego.jpg';

export const PokemonError = ({message}) => {
    return (
        <div style={{
            marginTop: 20,
        }}>
            <img src={errorCat} width="240" alt="sadBublik" />
            <p>{message}</p>
        </div>
    )
}