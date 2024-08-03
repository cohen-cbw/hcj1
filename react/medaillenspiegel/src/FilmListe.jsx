import FilmListItem from "./FilmListenItem";

const filme = [
    {
      titel: "Inception",
      regisseur: "Christopher Nolan",
      erscheinungsjahr: 2010,
      genre: "Science-Fiction, Thriller",
      bewertung: 8.8
    },
    {
      titel: "Parasite",
      regisseur: "Bong Joon-ho",
      erscheinungsjahr: 2019,
      genre: "Thriller, Drama",
      bewertung: 8.6
    },
    {
      titel: "Pulp Fiction",
      regisseur: "Quentin Tarantino",
      erscheinungsjahr: 1994,
      genre: "Krimi, Drama",
      bewertung: 8.9
    },
    {
      titel: "Der Herr der Ringe: Die Rückkehr des Königs",
      regisseur: "Peter Jackson",
      erscheinungsjahr: 2003,
      genre: "Fantasy, Abenteuer",
      bewertung: 8.9
    }
  ];

function FilmList(){
    return(
        <table>
            <thead>
                <tr>
                    <th>Titel</th>
                    <th>Regisseur</th>
                    <th>Erscheinungsjahr</th>
                    <th>Genre</th>
                    <th>Bewertung</th>
                </tr>
            </thead>
            <tbody>
                {filme.map((film) => (
                    <FilmListItem key={film.titel} film={film}/>
                ))}
            </tbody>
        </table>
    );
}

export default FilmList;