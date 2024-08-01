import React from "react";
 
class Unterseite extends React.Component{
    render(){
       return(
        <div className="otable">
            <table>
                <thead>
                    <tr>
                        <td>Simon Springer</td>
                        <td>Damla Basak</td>
                        <td>Alexa Huin</td>
                    </tr>
                </thead>
                <tr>
                    <td>30</td>
                    <td>27</td>
                    <td>19</td>
                </tr>
                <tr>
                    <td>Fußball</td>
                    <td>Eiskunstlaufen</td>
                    <td>Schwimmen</td>
                </tr>
            </table>
        </div> 
       );
    }
}
export default Unterseite;