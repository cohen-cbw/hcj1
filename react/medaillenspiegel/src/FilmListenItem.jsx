import PropTypes from 'prop-types';

function FilmListItem ({film}){
    return(
        <tr>
            <td>{film.titel}</td>
            <td>{film.regisseur}</td>
            <td>{film.erscheinungsjahr}</td>
            <td>{film.genre}</td>
            <td>{film.bewertung && <span>{'⭑'.repeat(film.bewertung)}</span>}</td>
        </tr>
    );
}

FilmListItem.propTypes = {
    film: PropTypes.shape({
        titel: PropTypes.string.isRequired,
        regisseur: PropTypes.string.isRequired,
        erscheinungsjahr: PropTypes.number.isRequired,
        genre: PropTypes.string.isRequired,
        bewertung: PropTypes.number.isRequired,
    }).isRequired,
};

export default FilmListItem;