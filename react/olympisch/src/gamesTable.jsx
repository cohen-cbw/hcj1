import React from "react";

class GamesTable extends React.Component {
  render() {
    const games = [
      { name: "Grand Theft Auto V", genre: "Action-Adventure", entwickler: "Rockstar North" },
      { name: "Minecraft", genre: "Sandbox", entwickler: "Mojang Studios" },
      { name: "FIFA 23", genre: "Sportsimulation", entwickler: "EA Sports" },
      { name: "The Last of Us Part II", genre: "Action-Adventure", entwickler: "Naughty Dog" }
    ];

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Genre</th>
            <th>Entwickler</th>
          </tr>
        </thead>
        <tbody>
          {games.map(game => (
            <tr key={game.name}>
              <td>{game.name}</td>
              <td>{game.genre}</td>
              <td>{game.entwickler}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
export default GamesTable