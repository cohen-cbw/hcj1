import React from "react";


class Athlete extends React.Component{

    render(){
        const {athlete} = this.props;
        return(
            <tr>
            <td>{athlete.name}</td>
            <td>{athlete.age}</td>
            <td>{athlete.discipline}</td>
          </tr>
        )
    }
}
export default Athlete;