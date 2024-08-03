import './App.css';
import BooksList from './BooksList';
import MedaillienTabelle from './MedaillenspiegelListe';
import FilmList from './FilmListe';

function App() {
  return (
    <div>
      <div>
        <h1>Bücherverwaltung</h1>
        <BooksList />
      </div>
      <div>
        <h1>Medaillienspiegel</h1>
        <MedaillienTabelle />
      </div>
      <div>
        <h1>Filmliste</h1>
        <FilmList />
      </div>
    </div>
  );
}

export default App;
