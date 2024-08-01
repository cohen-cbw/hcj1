
import './App.css';

function App() {
    function newItem(event){
      if(event.key === 'Enter' || event.type === 'click'){
            let eingabe = document.querySelector('#eintrag');
            let neuerEintrag = eingabe.value;

            if(neuerEintrag.trim() !== ''){
              let loschen = document.createElement('button');
              loschen.textContent = 'Löschen';
              loschen.addEventListener('click', loeschen);

              let li = document.createElement('li');
              li.textContent = neuerEintrag.trim();
              li.appendChild(loschen);

              let liste = document.querySelector('ul.liste')
              liste.appendChild(li);

              eingabe.value = '';
            }
          }
        }

    function loeschen(e){
      e.target.parentElement.remove();
    }
 
  return (
    <div className="App">
      <header className="App-header">
        <h1>To Do</h1>
      </header>
      <main className="App-main">
        <div className="eingabe">
          <input type="text" placeholder="Neuen Eintrag einfügen" id='eintrag' />
          <button type="button" onClick={newItem} onKeyPress={newItem}>Eintragen</button>
        </div>
        <ul className="liste"></ul>
      </main>
      <footer className="App-footer">

      </footer>
    </div>
  );

}

export default App;