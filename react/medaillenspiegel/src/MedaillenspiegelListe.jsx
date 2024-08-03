import LandMedaillenItem from './MedaillenListenItem';

const teilnehmerLaender = [
    {
      name: "Deutschland",
      iocCode: "GER",
      gold: 10,
      silber: 12,
      bronze: 14,
      gesamt: 36
    },
    {
      name: "Vereinigte Staaten",
      iocCode: "USA",
      gold: 39,
      silber: 41,
      bronze: 33,
      gesamt: 113
    },
    {
      name: "Japan",
      iocCode: "JPN",
      gold: 27,
      silber: 14,
      bronze: 17,
      gesamt: 58
    },
    {
      name: "China",
      iocCode: "CHN",
      gold: 38,
      silber: 32,
      bronze: 18,
      gesamt: 88
    },
    {
      name: "Großbritannien",
      iocCode: "GBR",
      gold: 22,
      silber: 21,
      bronze: 22,
      gesamt: 65
    },
    {
      name: "Russisches Olympisches Komitee",
      iocCode: "ROC",
      gold: 20,
      silber: 28,
      bronze: 23,
      gesamt: 71
    },
    {
      name: "Australien",
      iocCode: "AUS",
      gold: 17,
      silber: 7,
      bronze: 22,
      gesamt: 46
    }
  ];

function MedaillienTabelle(){
    return(
        <table>
        <thead>
            <tr>
                <th>Land</th>
                <th>IOC-Code</th>
                <th>Gold</th>
                <th>Silber</th>
                <th>Bronze</th>
                <th>Gesamt</th>
            </tr>
        </thead>
        <tbody>
            {teilnehmerLaender.map((land) => (
                <LandMedaillenItem key={land.iocCode} land={land} /> 
            ))}
        </tbody>
    </table>
    );
}

export default MedaillienTabelle;