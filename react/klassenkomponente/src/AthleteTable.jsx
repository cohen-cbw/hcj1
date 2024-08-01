import React from 'react';
import './AthleteTable.css';
import Athlete from './Athlete';


class AthleteTable extends React.Component {
 

  render() {
    const athletes= [
      { name: 'Lukas Märtens', age: 22, discipline: '400m Freistil' },
      { name: 'Florian Wellbrock', age: 27, discipline: '10km Freistil' },
      { name: 'Josha Salchow', age: 25, discipline: '100m Freistil' },
      { name: 'Summer MCINTOSH', age: 17, discipline: '400m Lagen' },
    ];

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Alter</th>
            <th>Disziplin</th>
          </tr>
        </thead>
        <tbody>
          {athletes.map((athlete, index) => (
            <Athlete  athlete={athlete} key={index}></Athlete>
          ))}
        </tbody>
      </table>
    );
  }
}

export default AthleteTable;