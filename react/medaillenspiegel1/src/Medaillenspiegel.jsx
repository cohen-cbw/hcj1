import MedaillenspiegelItem from "./MedaillenspiegeItem";
import { useState } from "react";

const initialer_medaillenSpiegelParis2024 = [
    { land: "USA", gold: 19, silber: 26, bronze: 26, gesamt: 71 },
    { land: "China", gold: 19, silber: 15, bronze: 11, gesamt: 45 },
    { land: "Frankreich", gold: 12, silber: 14, bronze: 18, gesamt: 44 },
    { land: "Australien", gold: 12, silber: 11, bronze: 8, gesamt: 31 },
    { land: "Großbritannien", gold: 11, silber: 11, bronze: 15, gesamt: 37 },
    { land: "Südkorea", gold: 10, silber: 7, bronze: 7, gesamt: 24 },
    { land: "Japan", gold: 9, silber: 5, bronze: 10, gesamt: 24 },
    { land: "Italien", gold: 7, silber: 10, bronze: 5, gesamt: 22 },
    { land: "Niederlande", gold: 6, silber: 5, bronze: 4, gesamt: 15 },
    { land: "Deutschland", gold: 5, silber: 5, bronze: 2, gesamt: 12 },
    // ... weitere Länder können hier hinzugefügt werden
  ];


function Medaillenspiegel(){

    const [laender, setMedal] = useState(laender);

    function handleMedal(name, ){
        
    }

    return(
        <table>
            <thead>
                <tr>
                    <th>Land</th>
                    <th>Gold</th>
                    <th>Silber</th>
                    <th>Bronze</th>
                </tr>
            </thead>
            <tbody>
                {initialer_medaillenSpiegelParis2024.map((land) =>(
                    <MedaillenspiegelItem key={land.land} land={land}/>
                ))}
            </tbody>
        </table>
    );
}

export default Medaillenspiegel;